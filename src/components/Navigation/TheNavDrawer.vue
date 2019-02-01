<!--
  Navigational menu of links that opens from the side of the screen.

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
  <transition name="slide-fade">
    <div @click="toggleDrawer" id="navDrawer">
      <div id="navDrawerContent" class="grey lighten-4">
        <div>

          <h5>Solvers</h5>
          <ul v-for="st in getSubTopics" :key="st.name">
            <li :link="st.link" @click="navigate">{{ st.name }}</li>
          </ul>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions('navigationModule', ['toggleDrawer']),

    /**
     * Use to programmatically navigate when an <li> is clicked instead of
     * the inner <a>
     */
    navigate (e) {
      this.$router.push(`/applications/${e.target.attributes['link'].value}`)
    }
  },

  computed: mapGetters('topicsModule', ['getSubTopics'])
}
</script>

<style scoped>
  /* transition classes applied to this component on enter/leave */
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .3s;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-300px);
    opacity: 0;
  }

  /* defines the screen-wide overlay */
  #navDrawer {
    min-height: 100%;
    min-width: 100%;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    background-color: rgba(0, 0, 0, 0.1);
  }

  /* defines the menu portion situated on top of the overlay */
  #navDrawerContent {
    min-height: 100%;
    width: 300px;

    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;

    box-shadow: 2px 1px 9px 7px rgba(0, 0, 0, .15);
  }

  /* pads the interior portion of the menu */
  #navDrawerContent > div {
    padding: 1rem;
  }

  /* <li> should center text and have hover effect */
  li {
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all .3s;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: #64b5f6;
  }
</style>
