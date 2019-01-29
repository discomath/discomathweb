<template>
  <div class="container" id="home">
    <div class="row">
      <div class="col s12 m6">
        <TopicCard topic="Number Theory" :subTopics="['Divisibility']" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TopicCard from '@/components/TopicCard'

export default {
  components: { TopicCard },

  computed: mapGetters('topics', ['getTopics']),

  methods: mapActions('topics', ['fetchTopics']),

  async created () {
    this.fetchTopics()
  }
}
</script>
