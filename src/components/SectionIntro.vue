<template>
  <div class="section-intro" :id="id">
    <h3 class="center">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },

  data () {
    return {
      id: this.title + 'Introduction'
    }
  }
}
</script>

<style scoped>
.section-intro {
  padding-bottom: 25px;
  margin-bottom: 25px;
}
</style>
