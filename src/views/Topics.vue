<template>
  <section id="home">
    <!-- Title and Introduction -->
    <SectionIntro title="Topics">
      <p class="flow-text">
        Each of the below topics are major areas of study within discrete mathematics (<a href="https://en.wikipedia.org/wiki/Discrete_mathematics#Topics_in_discrete_mathematics">see wikipedia</a>).
      </p>
      <p class="flow-text">
        Within each topic are a list of specific examples and applications, each of which has an associated solver.
      </p>
    </SectionIntro>

    <!-- Topics Content -->
    <div class="row">
      <div class="col s12 m6" v-for="topic in getTopics" :key="topic.name">
        <TopicCard :topic="topic.name" :subTopics="topic.applications" />
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from '@/components/SectionIntro'
import TopicCard from '@/components/TopicCard'
import { mapGetters } from 'vuex'

export default {
  components: { SectionIntro, TopicCard },
  computed: mapGetters('topicsModule', ['getTopics'])
}
</script>
