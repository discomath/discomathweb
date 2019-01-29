<template>
  <div class="card topic-card">
    <div class="card-content">
      <span class="card-title">{{ topic }}</span>
      <ul>
        <li v-for="subTopic in subTopics" :key="subTopic.name">
          <router-link :to="{ path: `applications/${subTopic.link}`}">{{ subTopic.name }}</router-link>
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

<style>
.topic-card .card-title {
  text-transform: capitalize;
}
</style>
