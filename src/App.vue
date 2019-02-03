<!--
  Application entry point. Sets up <header>, <main> and <footer>
  containers.

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
  <div id="app">

    <NavDrawer v-if="drawerIsOpen" />

    <!-- #mainContent holds all content except for the Footer  -->
    <div id="mainContent">
      <header id="header">
        <Navbar title="DiscoMath" />
      </header>

      <!-- <router-view> holds routed content found in src/views -->
      <main id="routedContent" class="container">
        <router-view></router-view>
      </main>
    </div>

    <footer class="page-footer purple darken-2">
      <FooterContent id="footer" />
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '@/components/Navigation/TheNavbar'
import NavDrawer from '@/components/Navigation/TheNavDrawer'
import FooterContent from '@/components/TheFooterContent'

const BODY = document.getElementsByTagName('body')[0]

export default {
  components: { FooterContent, Navbar, NavDrawer },
  computed: mapGetters('navigationModule', ['drawerIsOpen']),
  watch: {
    drawerIsOpen: function () {
      if (this.drawerIsOpen) {
        BODY.classList.add('no-scroll')
      } else {
        BODY.classList.remove('no-scroll')
      }
    }
  }
}
</script>

<style scoped>
  #app {
    min-width: 320px;
  }

  #mainContent {
    min-height: 80vh;
  }
</style>
