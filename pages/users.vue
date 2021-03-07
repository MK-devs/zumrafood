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
            <td>
              <Button bgOrangeTrasparent @clickFn="showEditUserModal(row.id)"
                >Edit</Button
              >
              <Button bgOrange @clickFn="showDeleteUserModal(row.id)"
                >Delete</Button
              >
            </td>

            <div class="modal edit_modal" :class="'edit_modal_' + row.id">
              <div class="modal_body form">
                <form @submit.prevent.stop="editUser(row)">
                  <div class="input">
                    <input
                      v-model="row.first_name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div class="input">
                    <input
                      v-model="row.last_name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div class="input">
                    <input
                      v-model="row.email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <Button bgOrange type="submit">Save Changes</Button>
                </form>
              </div>

              <div class="close_modal">
                <Button bgOrange @clickFn="hideModal(row.id)">Close</Button>
              </div>
            </div>

            <div class="modal delete_modal" :class="'delete_modal_' + row.id">
              <div class="modal_body">
                <Title medium danger
                  >Are you sure that you to delete
                  {{ row.first_name + " " + row.last_name }}?</Title
                >

                <Button bgOrangeTrasparent @clickFn="deleteUser(row)"
                  >Confirm</Button
                >
                <Button bgOrange @clickFn="hideDeleteUserModal(row.id)"
                  >Close</Button
                >
              </div>
            </div>

            <div class="modal modal_msg">
              <div class="modal_body">
                <Title medium success>Done!</Title>
              </div>
            </div>
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
  layout: "users",

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
        },
        {
          label: "Action",
          field: "action",
          type: "String"
        }
      ],

      pagination: {
        itemsPerPage: 7
      }
    };
  },

  methods: {
    showEditUserModal(id) {
      document.getElementsByClassName(`edit_modal_${id}`)[0].style.display =
        "block";
    },

    hideModal(id) {
      document.getElementsByClassName(`edit_modal_${id}`)[0].style.display =
        "none";
    },

    editUser(row) {
      const payload = {
        first_name: row.first_name,
        last_name: row.last_name,
        email: row.email
      };

      this.$api.users
        .editUser(row.id, payload)
        .then(() => {
          this.hideModal(row.id);
          this.showSuccessMsg(row.id);
        })
        .catch(e => console.log(e));
    },

    showDeleteUserModal(id) {
      document.getElementsByClassName(`delete_modal_${id}`)[0].style.display =
        "block";
    },

    hideDeleteUserModal(id) {
      document.getElementsByClassName(`delete_modal_${id}`)[0].style.display =
        "none";
    },

    deleteUser(row) {
      this.$api.users
        .deleteUser(row.id)
        .then(() => {
          const index = this.users.indexOf(row);
          if (index > -1) {
            this.users.splice(index, 1);
          }
          this.hideDeleteUserModal(row.id);
          this.showSuccessMsg(row.id);
        })
        .catch(e => console.log(e));
    },

    showSuccessMsg() {
      document.getElementsByClassName(`modal_msg`)[0].style.display = "block";

      setTimeout(() => {
        document.getElementsByClassName(`modal_msg`)[0].style.display = "none";
      }, 1000);
    }
  }
};
</script>
