<template>
  <div>
    <h2 class="center">Divisibility Tests</h2>
    <div class="row">
      <div class="col s12 m6">
        <select v-model="factor">
          <option disabled value="">Select a factor</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div class="col s12 m6">
        <input type="text" v-model="number" placeholder="enter a natural number" minlength="1" maxlength="15">
      </div>
      <div class="col s12 center">
        <a @click="computeDivisionTest" class="btn">Compute</a>
      </div>
      <div class="col s12 center">
        <span>result: {{ result }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import discreteMathApplicationsApi from '@/services/dmapplications-api'

export default {
  data () {
    return {
      factor: '',
      number: '',
      result: ''
    }
  },

  methods: {
    computeDivisionTest: function (e) {
      discreteMathApplicationsApi.divisibilityTest(this.factor, this.number).then(data => { this.result = data.result })
    }
  }
}
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
  }

  select {
    display: block !important;
  }

  input[type=text] {
    max-width: 250px;
  }

  a.btn {
    width: 100px;
  }
</style>
