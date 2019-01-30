<template>
  <section :id="elementId">
    <slot></slot>
    <router-link to="/"><i class="inline-icon material-icons">arrow_back</i> Back to Topics</router-link>
  </section>
</template>

<script>
export default {
  props: {
    elementId: String
  }
}
</script>

<style scoped>
  .inline-icon {
    vertical-align: bottom;
    font-size: 18px !important;
  }
</style>
