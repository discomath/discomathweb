<template>
  <Section elementId="divisibility">

    <!-- Title and Introduction -->
    <SectionIntro title="Divisibility">
      <MathDefinition>
        <p>
          <code>a &#8739; b if &exist;k</code> where <code>ak &equals; b &nbsp; a,b,k &isin; Z</code>
        </p>
        <p class="grey-text">
          An integer <code class="black-text">a</code> divides another integer <code class="black-text">b</code> if it can be multiplied by some integer <code class="black-text">k</code> to produce <code class="black-text">b</code>.
        </p>
      </MathDefinition>
    </SectionIntro>

    <div>
      <h4>Divisibility Tool</h4>
      <p class="flow-text">
        The following tool demonstrates a divisibility test for the selected divisor.
      </p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <select v-model="divisor">
            <option disabled value="">Select a divisor</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div class="col s12 m6">
          <input type="text" v-model="number" placeholder="enter a natural number" minlength="1" maxlength="15">
        </div>

        <div class="col s12">
          <p class="red-text lighten-1" v-if="error">Choose a divisor from the list above and enter an integer greater than 0.</p>
        </div>
      </div>

      <div class="row">
        <div v-if="getResult.result">
          <div class="col s12" v-for="step in getResult.computationalSteps" :key="step.number">
            <ComputationalStep :message="step.message" :equation="step.equation" :step="step.number" />
          </div>
          <div class="col s12">
            <ComputationalResult :result="getResult.result" />
          </div>
        </div>
        <div class="center">
          <a @click="computeDivisionTest" class="btn pink lighten-1">Compute</a>
        </div>
      </div>
    </div>

  </Section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ComputationalResult from '@/components/Math/ComputationalResult'
import ComputationalStep from '@/components/Math/ComputationalStep'
import MathDefinition from '@/components/Math/MathDefinition'
import Section from '@/components/Section'
import SectionIntro from '@/components/SectionIntro'

export default {
  components: {
    ComputationalResult,
    ComputationalStep,
    MathDefinition,
    Section,
    SectionIntro
  },

  data () {
    return {
      divisor: '',
      number: '',
      error: null
    }
  },

  computed: mapGetters('resultModule', ['getResult']),

  methods: {
    ...mapActions('resultModule', ['fetchDivisibilityTest']),
    computeDivisionTest: function (e) {
      if (this.divisor && (this.number > 0)) {
        this.fetchDivisibilityTest({ divisor: this.divisor, number: this.number })
        this.error = false
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
  section {
    padding: 1rem 0;
  }

  select {
    display: block !important;
    width: 250px;
  }

  input[type=text] {
    max-width: 250px;
  }

  a.btn {
    width: 100px;
  }
</style>
