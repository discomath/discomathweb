<!--
  Routed View containing every mathematical topic and their respective
  applications (subtopics).

  discomathweb is a web service for studying topics in discrete math.
  Copyright (C) 2019  discomath

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://github.com/discomath/discomathweb/blob/dev/LICENSE>.
 -->
<template>
  <Section elementId="home" hidelink>

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

  </Section>
</template>

<script>
import Section from '@/components/Layout/Section'
import SectionIntro from '@/components/Layout/SectionIntro'
import TopicCard from '@/components/Cards/TopicCard'
import { mapGetters } from 'vuex'

export default {
  components: { Section, SectionIntro, TopicCard },
  computed: mapGetters('topicsModule', ['getTopics'])
}
</script>
