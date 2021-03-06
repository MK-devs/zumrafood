<template>
  <button
    class="button__element"
    :to="to"
    :disabled="disabled"
    :type="type"
    :size="size"
    :class="{
      small_radius: smallRadius,
      rounded_radius: roundedRadius,
      block: block,
      bg_orange_trasparent: bgOrangeTrasparent,
      bg_orange: bgOrange
    }"
    @click="$emit('clickFn')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    to: String,
    type: String,
    size: String,
    block: Boolean,
    disabled: Boolean,
    smallRadius: Boolean,
    roundedRadius: Boolean,
    bgOrangeTrasparent: Boolean,
    bgOrange: Boolean
  }
};
</script>
