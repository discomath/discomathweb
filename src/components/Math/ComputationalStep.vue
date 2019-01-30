<template>
  <div class="computational-step flow-text">
    <p class="grey-text">
      <span class="black-text">Step {{ step }}: </span> {{ message }}
    </p>

    <blockquote>
      <code>{{ equation }}</code>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    equation: String,
    step: Number
  }
}
</script>

<style scoped>
  .computational-step {
    border: 1px dashed #9c27b0;
    border-radius: 1rem;
    padding: .5rem;
    margin-bottom: 1rem;

    background-color: #f3e5f5;
  }

  p {
    text-transform: capitalize;
  }

  span {
    font-weight: bold;
  }

  blockquote {
    border: none;
    display: block;
  }
</style>
