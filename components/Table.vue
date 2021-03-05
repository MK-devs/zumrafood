<template>
  <div class="table_component">
    <table>
      <thead>
        <tr>
          <th v-for="(col, idx) in headers" :key="idx">
            <span> {{ col.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="numRows > 0">
          <tr v-for="(row, idx) in visibleRows" :key="idx">
            <slot name="items" :row="row"></slot>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td :colspan="numColumns">
              <slot name="no-data"></slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <TablePagination
      v-if="paginationEnabled"
      :page="page"
      :total-pages="totalPages"
      :pagination-options="paginationOptions"
      @new-page="onNewPage"
    />
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default() {
        return [];
      },
      required: true
    },
    rows: {
      type: Array,
      default() {
        return [];
      },
      required: true
    },

    pagination: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      paginationDefault: {
        enabled: true,
        itemsPerPage: 5,
        align: "right",
        visualStyle: "buttons"
      },

      visibleRows: {},
      tableRows: {},
      page: 1
    };
  },
  watch: {
    rows: function() {
      this.tableRows = this.rows.slice(0);
      this.selectVisibleRows();
    }
  },
  computed: {
    paginationOptions() {
      return Object.assign(this.paginationDefault, this.pagination);
    },

    paginationEnabled() {
      return (
        this.paginationOptions.enabled &&
        this.paginationOptions.itemsPerPage > 0 &&
        this.numRows > 0
      );
    },
    numRows() {
      return this.rows.length;
    },
    numColumns() {
      return this.headers.length;
    },
    totalPages() {
      return this.paginationEnabled
        ? Math.ceil(this.numRows / this.paginationOptions.itemsPerPage)
        : null;
    }
  },
  mounted() {
    this.tableRows = this.rows.slice(0);
    this.selectVisibleRows();
  },
  methods: {
    onNewPage: function(newPage) {
      this.page = newPage;
      this.selectVisibleRows();
    },
    selectVisibleRows: function() {
      if (this.paginationEnabled) {
        const rowFirst =
          this.page * this.paginationOptions.itemsPerPage -
          this.paginationOptions.itemsPerPage;
        const rowLast = this.page * this.paginationOptions.itemsPerPage;
        this.visibleRows = this.tableRows.slice(rowFirst, rowLast);
      } else this.visibleRows = this.tableRows.slice(0);
    }
  }
};
</script>
