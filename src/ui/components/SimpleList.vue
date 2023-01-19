<template>
  <div class="SimpleList">
    <div class="Headers">
      <slot name="header">
        <template v-for="(header, index) in headers" :key="index">
          <div class="Header" @click="sort(cols[index].prop)">
            <div class="Name">{{ header }}</div>
            <div class="Sort" v-if="sortBy?.prop === cols[index].prop">
              <span v-if="sortBy.dir === 'asc'">&#9660;</span>
              <span v-else>&#9650;</span>
            </div>
          </div>
        </template>
      </slot>
    </div>

    <div class="Items">
      <slot v-if="!showLoad && (!rows || rows.length === 0)" name="empty">
        <p>- No items -</p>
      </slot>

      <Spinner
        :loading="showLoad"
        color="#3AB982"
        height="35px"
        width="4px"
        class="Spinner"
      />

      <template v-for="(row, index) in rows" :key="index">
        <slot name="item" v-bind="row">
          <div class="Row">
            <div v-for="prop in Object.keys(row)" :key="prop" :class="prop">
              {{ row[prop] }}
            </div>
          </div>
        </slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export type Col = {
  header: string;
  prop: string;
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
    loading: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  data() {
    return {
      ...this.parseTableData(this.items),
      sortBy: null as Sort | null,
      showLoad: this.loading,
    };
  },

  watch: {
    items(newItems) {
      const data = this.parseTableData(newItems);
      this.headers = data.headers;
      this.rows = data.rows;
    },
    loading(newLoad) {
      this.showLoad = newLoad;
    },
  },

  methods: {
    parseTableData(items: any[]) {
      const headers = (this.cols as Col[]).map(({ header }) => header);
      const props = (this.cols as Col[]).map(({ prop }) => prop);

      const rows = (items as any[]).map((item) =>
        props.reduce((row, prop) => {
          row[prop] = item[prop];
          return row;
        }, {} as any)
      );

      return { headers, rows };
    },

    sort(prop: string) {
      let dir = "asc";
      if (this.sortBy?.prop === prop) {
        dir = this.sortBy.dir === "asc" ? "desc" : "asc";
      }

      this.rows.sort((a: any, b: any) => {
        const res = compare(a, b, prop);
        return dir === "desc" ? res * -1 : res;
      });

      this.sortBy = { prop, dir };
    },
  },
};
</script>

<style scoped>
.Headers {
  font: 800;
  background: #454545;
  color: #fff;
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px solid #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.Headers .Header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 5px;
}
.Headers .Header .Sort {
  width: 12px;
  margin-left: 5px;
}

.Row {
  display: flex;
  justify-content: space-between;
}

.Items {
  display: flex;
  flex-direction: column;
  padding: 0px 5px;
}
.Spinner {
  text-align: center;
}
</style>
