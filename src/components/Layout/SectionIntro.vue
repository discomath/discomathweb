<!--
  Introduces a section of content. Should appear within a <Section>.

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
  <div class="section-intro" :id="id">
    <h3 class="center">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },

  data () {
    return {
      id: this.title + 'Introduction'
    }
  }
}
</script>

<style scoped>
.section-intro {
  padding-bottom: 25px;
  margin-bottom: 25px;
}
</style>
