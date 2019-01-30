<template>
  <div class="computational-result flow-text">
    <p>
      <span>Result: </span>
      <code v-if="result.successMessage">{{ result.successMessage }}</code>
      <code v-else>{{ result.result }}</code>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  }
}
</script>

<style scoped>
  .computational-result {
    border: 2px solid #9c27b0;
    padding: .5rem;
    margin-bottom: 1rem;
    background-color: #f3e5f5;
  }

  span {
    font-weight: bold;
  }

  blockquote {
    border: none;
  }
</style>
