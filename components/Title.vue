<template>
  <div id="title" :class="{ title__no_spaces: no_spaces }">
    <h4
      class="title__element"
      :class="{
        title__big: big,
        title__medium: medium,
        title__small: small,
        title__extra__small: extra_small,
        title__bold: bold,
        title__white: white,
        title__orange: orange,
        title__danger: danger,
        title__success: success,
        upper__case: upper_case,
        title__shadow: shadow,
        title__center: center
      }"
    >
      <slot>{{ title }}</slot>
    </h4>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    big: Boolean,
    medium: Boolean,
    bold: Boolean,
    small: Boolean,
    extra_small: Boolean,
    white: Boolean,
    orange: Boolean,
    danger: Boolean,
    success: Boolean,
    upper_case: Boolean,
    shadow: Boolean,
    center: Boolean,
    no_spaces: Boolean
  }
};
</script>
