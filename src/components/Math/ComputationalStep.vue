<!--
  Component for a single step within a mathematical computation.

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
  <div class="computational-step flow-text">

    <!-- Step #: short message detailing what's happening -->
    <p class="grey-text">
      <span class="black-text">Step {{ step }}: </span> {{ message }}
    </p>

    <!-- Equation and/or Computation of the Step -->
    <blockquote>
      <code>{{ equation }}</code>
    </blockquote>

  </div>
</template>

<script>
export default {
  props: {
    message: String,
    equation: String,
    step: Number
  }
}
</script>

<style scoped>
  .computational-step {
    border: 1px dashed #9c27b0;
    border-radius: 1rem;
    padding: .5rem;
    margin-bottom: 1rem;

    background-color: #f3e5f5;
  }

  p {
    text-transform: capitalize;
  }

  span {
    font-weight: bold;
  }

  blockquote {
    border: none;
    display: block;
  }
</style>
