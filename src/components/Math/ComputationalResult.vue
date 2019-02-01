<!--
  Component for the result of a mathematical computation.

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
  <div class="computational-result flow-text">
    <p>
      <span>Result: </span> {{ result.resultIsLogicallyTrue }}
      <code>{{ result.message }}</code>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  }
}
</script>

<style scoped>
  .computational-result {
    border: 2px solid #9c27b0;
    padding: .5rem;
    margin-bottom: 1rem;
    background-color: #f3e5f5;
  }

  span {
    font-weight: bold;
  }

  code {
    display: block;
  }
</style>
