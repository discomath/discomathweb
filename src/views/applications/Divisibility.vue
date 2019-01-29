<template>
  <section id="divisibility">

    <!-- Title and Introduction -->
    <SectionIntro title="Divisibility">
      <MathDefinition>
        <p class="flow-text">
          An integer, <code>a</code>,  divides another integer, <code>b</code>, if can be multiplied by some integer, <code>k</code>, to produce <code>b</code>.
        </p>
        <blockquote>
          <p>
            <code>a &#8739; b &rArr; &exist;k</code> where <code>ak &equals; b</code>
          </p>
          <p>
            <code>a,b,k &isin; N</code>
          </p>
        </blockquote>
      </MathDefinition>
    </SectionIntro>

    <div class="row">
      <h4>Tool</h4>
      <p class="flow-text">
        The following tool demonstrates divisibility for divisors from 2 to 4
      </p>

      <div class="col s12 m6">
        <select v-model="factor">
          <option disabled value="">Select a divisor</option>
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
  </section>
</template>

<script>
import MathDefinition from '@/components/Math/MathDefinition'
import SectionIntro from '@/components/SectionIntro'
import discreteMathApplicationsApi from '@/services/dmapplications-api'

export default {
  components: { MathDefinition, SectionIntro },

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
