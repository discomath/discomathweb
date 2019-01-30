<!--
  Presentational card for Mathematical topics.

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

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
