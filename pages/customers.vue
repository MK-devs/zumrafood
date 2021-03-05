<template>
  <div id="app">
    <Table :headers="columns" :rows="items">
      <template v-slot:items="{ row }">
        <td>{{ row.first_name }}</td>
        <td>{{ row.last_name }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.age }}</td>
        <td>{{ row.country }}</td>
        <td>{{ row.category }}</td>
        <td>{{ row.last_update }}</td>
      </template>

      <template v-slot:no-data>
        <span>No data</span>
      </template>
    </Table>
  </div>
</template>
<script>
import { columns, rows } from "./data";

export default {
  data() {
    return {
      columns: columns,
      items: rows,

      pagination: {
        itemsPerPage: 7
      }
    };
  }
};
</script>
