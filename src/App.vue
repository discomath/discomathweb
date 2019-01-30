<template>
  <div id="app">
    <!-- holds all content except for the Footer  -->
    <div id="mainContent">
      <header id="header">
        <Navbar />
      </header>

      <!-- Routed content from src/views -->
      <main id="routedContent" class="container">
        <router-view></router-view>
      </main>
    </div>

    <Footer id="footer" />
  </div>
</template>

<script>
import Navbar from '@/components/TheNavbar'
import Footer from '@/components/TheFooter'

export default {
  components: { Footer, Navbar }
}
</script>

<style scoped>
  #mainContent {
    min-height: 80vh;
  }
</style>
