<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">{{ topic }}</span>
      <ul>
        <li v-for="subTopic in subTopics" :key="subTopic.id">
          <a href="#">{{ subTopic }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topic: String,
    subTopics: Array
  }
}
</script>
