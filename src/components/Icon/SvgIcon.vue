<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: 'icon-custom',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
}
</style>
