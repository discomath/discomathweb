<!--
  Component for the definition of a mathematical concept. Wraps a
  a styled blockquote. Use the <slot> for the math equation markup.

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
  <div class="flow-text">
    <h4>Definition</h4>
    <blockquote>
      <slot>
      </slot>
    </blockquote>
  </div>
</template>

<style scoped>
  blockquote {
    border-color: #9c27b0;
    background-color: #f3e5f5;
  }
</style>
