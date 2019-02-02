<!--
  Component for a Remark. Wraps a
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
    <h5 class="pink-text">Remark</h5>
    <blockquote>
      <slot>
      </slot>
    </blockquote>
  </div>
</template>

<style scoped>
  blockquote {
    border-color: #e91e63;
    background-color: #fce4ec;
  }
</style>
