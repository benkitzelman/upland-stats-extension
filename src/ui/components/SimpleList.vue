<template>
  <div class="SimpleList">
    <Spinner :loading="showLoad" color="#3AB982" size="10px" class="Spinner" />
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
        <tr v-for="({ __id, ...item }, index) in rows" :key="index" class="Row">
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
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export type Col = {
  header: string;
  prop: string;
  style: string;
};

export type Sort = {
  prop: string;
  dir: "asc" | "desc";
};

const compare = (a: any, b: any, prop: string) => {
  if (a[prop] > b[prop]) return 1;
  if (a[prop] < b[prop]) return -1;
  return 0;
};

export default {
  components: { Spinner: PulseLoader },

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
    loading: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    sorting: {
      type: Object,
      required: false,
      default: () => null,
    },
  },

  data() {
    return {
      ...this.parseTableData(this.items),
      sortBy: this.sorting as Sort | null,
      showLoad: this.loading,
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
    loading(newLoad) {
      this.showLoad = newLoad;
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

      this.rows.sort((a: any, b: any) => {
        const res = compare(a, b, this.sortBy.prop);
        return this.sortBy.dir === "desc" ? res * -1 : res;
      });
    },
  },
};
</script>

<style scoped>
.SimpleList .Spinner {
  text-align: center;
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
</style>
