<template>
  <div class="users_page">
    <div class="content">
      <section class="main__text">
        <Table :headers="columns" :rows="users">
          <template v-slot:items="{ row }">
            <td>{{ row.id }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.first_name + " " + row.last_name }}</td>
            <td><img :src="row.avatar" alt="" /></td>
          </template>

          <template v-slot:no-data>
            <span>No data</span>
          </template>
        </Table>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "users",

  mounted() {
    this.$api.users
      .getUsers()
      .then(res => {
        this.users = res.data;
      })
      .catch(e => e);
  },

  data() {
    return {
      users: [],
      columns: [
        {
          label: "ID",
          field: "id",
          type: "Number"
        },
        {
          label: "Email",
          field: "email",
          type: "String"
        },
        {
          label: "Name",
          field: "name",
          type: "String"
        },
        {
          label: "Avatar",
          field: "avatar",
          type: "String"
        }
      ],

      pagination: {
        itemsPerPage: 7
      }
    };
  }
};
</script>
