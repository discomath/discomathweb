<template>
  <div id="home">
    <h2 class="center">Topics</h2>
    <div class="row">
      <div class="col s12 m6" v-for="topic in topics" :key="topic.name">
        <TopicCard :topic="topic.name" :subTopics="topic.applications" />
      </div>
    </div>
  </div>
</template>

<script>
import TopicCard from '@/components/TopicCard'

export default {
  components: { TopicCard },
  data () {
    return {
      topics: [
        {
          name: 'Number Theory',
          applications: [
            {
              name: 'Divisibility',
              link: 'divisibility'
            }
          ]
        }
      ]
    }
  }
}
</script>
