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
      <div class="container">
        <div class="valign-wrapper row">

          <div class="col s6">
            <span class="card-title">{{ topic }}</span>
          </div>

          <div class="col s6 title-wrapper">
            <ul>
              <li v-for="st in subTopics" :key="st.name">
                <router-link class="purple-text text-darken-3" :to="`/applications/${st.link}`">{{ st.name }}</router-link>
              </li>
            </ul>
          </div>

        </div>
      </div>
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

  .title-wrapper {
    border-left: 1px solid rgba(0, 0, 0, .1);
  }

  a {
    font-size: 1.5rem;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
