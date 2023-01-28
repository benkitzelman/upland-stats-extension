<template>
  <div class="SimpleList">
    <div class="Filter">
      <input @input="onFilterInput" placeholder="Filter results..." />
    </div>

    <table>
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            @click="sortByProp(cols[index].prop)"
          >
            <div class="Header">
              <div class="Name">{{ header }}</div>
              <div class="Sort" v-if="sortBy?.prop === cols[index].prop">
                <span v-if="sortBy.dir === 'asc'">&#9650;</span>
                <span v-else>&#9660;</span>
              </div>
            </div>
          </th>
          <th v-if="actionsCol">
            <div class="Header" />
          </th>
        </tr>
      </thead>

      <tbody>
        <template v-for="({ __id, expanded, hidden, ...item }, index) in rows" :key="index">
          <tr :class="hidden ? 'Hidden' : ''" :data-id="__id" @click="onClick(rows[index])" @mouseover="onMouseOver(rows[index])" @mouseleave="onMouseLeave(rows[index])">
            <td
              v-for="(val, prop) in item"
              :key="prop"
              :class="prop"
              :style="colForProp(prop)?.style"
            >
              {{ val }}
            </td>
            <td v-if="actionsCol">
              <slot name="actions" :item="itemWithId(__id)" />
            </td>
          </tr>
          <tr v-if="expandable && expanded">
            <td :colspan="Object.keys(item).length">
              <slot name="expanded" :item="itemWithId(__id)" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { compare } from "../../lib/comparitors";

export type Col = {
  header: string;
  prop: string;
  style: string;
  sortfn?: (a: any, b: any) => number;
};

export type Sort = {
  prop: string;
  dir: "asc" | "desc";
};

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    cols: {
      type: Array,
      required: true,
    },
    idKey: {
      type: String,
      required: false,
      default: () => "id",
    },
    actionsCol: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    sorting: {
      type: Object,
      required: false,
      default: () => null,
    },
    expandable: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  data() {
    return {
      ...this.parseTableData(this.items),
      sortBy: this.sorting as Sort | null,
      filter: null as string | null,
    };
  },

  created() {
    this.sort();
  },

  watch: {
    items: {
      handler(newItems) {
        const data = this.parseTableData(newItems);
        this.headers = data.headers;
        this.rows = data.rows;
        this.sort();
      },
      deep: true,
    },
  },

  methods: {
    itemWithId(id: string) {
      return this.items.find((item: any) => item[this.idKey] === id);
    },

    colForProp(prop: string) {
      return (this.cols as Col[]).find((col) => col.prop === prop);
    },

    parseTableData(items: any[]) {
      const headers = (this.cols as Col[]).map(({ header }) => header);
      const props = (this.cols as Col[]).map(({ prop }) => prop);

      const rows = (items as any[]).map((item) =>
        props.reduce(
          (row, prop) => {
            row[prop] = item[prop];
            return row;
          },
          { __id: item[this.idKey] } as any
        )
      );

      return { headers, rows };
    },

    sortByProp(prop: string) {
      let dir = "asc";
      if (this.sortBy?.prop === prop) {
        dir = this.sortBy.dir === "asc" ? "desc" : "asc";
      }

      this.sortBy = { prop, dir };
      this.sort();
    },

    sort() {
      if (!this.sortBy) return;

      const comparitor = this.colForProp(this.sortBy.prop)?.sortFn || compare;

      this.rows.sort((a: any, b: any) => {
        const res = comparitor(a, b, this.sortBy.prop);
        return this.sortBy.dir === "desc" ? res * -1 : res;
      });
    },

    toggleExpand(item: any) {
      if (this.expandable) item.expanded = !item.expanded;
    },

    applyFilter() {
      [...this.$el.querySelectorAll("tbody tr")].forEach((el) => {
        const item  = this.rows.find((row: any) => String(el.dataset["id"]) === String(row.__id));
        item.hidden = !((el.innerText || "").toLowerCase().indexOf((this.filter || "").toLowerCase()) > -1);
      });
    },

    onClick(item: any) {
      this.toggleExpand(item);
      this.$emit("item-click", this.itemWithId(item.__id));
    },

    onMouseOver(item: any) {
      this.$emit("item-hover-on", this.itemWithId(item.__id));
    },

    onMouseLeave(item: any) {
      this.$emit("item-hover-off", this.itemWithId(item.__id));
    },

    onFilterInput(e: any) {
      this.filter = e.currentTarget.value;
      this.applyFilter();
    },
  },
};
</script>

<style scoped>
.SimpleList > .Filter {
  text-align: right;
}
.SimpleList > .Filter input {
  border-radius: 4px;
  padding: 3px 5px;
}
.SimpleList > table {
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 10px 0 0 0;
  border-spacing: 0;
  width: 100%;
}
.SimpleList > table > thead > tr > th {
  font-weight: 800;
  background: #254545;
  color: hsla(160, 100%, 37%, 1);
  padding: 5px;
}
.SimpleList > table > thead > tr > th:first-child {
  border-top-left-radius: 10px;
}
.SimpleList > table > thead > tr > th:last-child {
  border-top-right-radius: 10px;
}
.SimpleList > table > thead > tr > th > .Header {
  display: flex;
}
.SimpleList > table > thead > tr > th > .Header .Sort {
  margin-left: 5px;
}
.SimpleList > table > tbody {
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.SimpleList > table > tbody > tr > td {
  padding: 0 5px;
  border-bottom: 1px dotted #2f2f2f;
}
.SimpleList > table > tbody .Hidden {
  display: none;
}
</style>
