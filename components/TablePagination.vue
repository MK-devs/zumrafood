<template>
  <div class="table_paginator">
    <template>
      <Button
        bgOrangeTrasparent
        roundedRadius
        v-if="prevPage > 0"
        @clickFn="goToPage(prevPage)"
      >
        <span>&#8592;</span>
      </Button>

      <span
        >Page <strong>{{ page }}</strong> of {{ totalPages }}</span
      >

      <Button
        bgOrangeTrasparent
        roundedRadius
        v-if="nextPage <= totalPages"
        @clickFn="goToPage(nextPage)"
      >
        <span>
          &#8594;
        </span>
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
