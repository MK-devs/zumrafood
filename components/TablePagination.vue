<template>
  <div class="table_paginator">
    <template v-if="paginationOptions.visualStyle === 'select'">
      <span>Page </span>
      <select @change="onChange">
        <option
          v-for="index in totalPages"
          :value="index"
          :key="index"
          :selected="index == page"
        >
          {{ index }}
        </option>
      </select>
      <span> of {{ totalPages }}</span>
    </template>
    <template v-else>
      <Button v-if="prevPage > 0" @clickFn="goToPage(prevPage)">Prev</Button>

      <span
        >Page <strong>{{ page }}</strong> of {{ totalPages }}</span
      >

      <Button v-if="nextPage <= totalPages" @clickFn="goToPage(nextPage)"
        >Next
      </Button>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
    totalPages: Number,
    paginationOptions: Object
  },
  data() {
    return {};
  },
  computed: {
    prevPage() {
      return this.page - 1;
    },
    nextPage() {
      return this.page + 1;
    }
  },
  methods: {
    goToPage(newPage) {
      this.$emit("new-page", parseInt(newPage));
    },
    onChange(event) {
      this.goToPage(event.target.value);
    }
  }
};
</script>
