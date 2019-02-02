<!--
  Routed View containing Prime Test.

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
  <Section elementId="primeTest">

  <!-- Title and Introduction -->
  <SectionIntro title="Prime Numbers">
      <MathDefinition>
        <p>
          <code>n</code> is prime <code>&rArr; &forall;<sub>k&isin;{2..n-1}</sub> k&nmid;n, n&isin;N</code>
        </p>
        <p class="grey-text">
          A Natural Number (greater than 1) that has only itself and 1 as factors is a <span>Prime Number</span>.
          Natural Numbers that are not prime are called <span>Composite</span>.
        </p>
      </MathDefinition>
    </SectionIntro>

    <!-- Introduces The Tool -->
    <div>
      <h4>Prime Test</h4>
      <p class="flow-text">
        The following tool demonstrates a test for primeness.
        In order to determine primeness, all odd integers from 3 to the rounded square root of the number being tested are considered.
      </p>
      <p class="flow-text">
        2 is the only even prime number.
      </p>
    </div>

    <!-- Form and  Result -->
    <div class="container">

      <!-- Select, Input and Error Message -->
      <div class="row">
        <div class="col s12 m6">
          <input type="text" v-model="number" v-on:keyup.enter="computePrimeTest" placeholder="enter a natural number" minlength="1" maxlength="10">
        </div>
        <div class="col s12">
          <p class="red-text lighten-1" v-if="error">Enter an number greater than 0.</p>
        </div>
      </div>

      <!-- Computation & Result -->
      <div class="row">

        <!-- Only show computation if result is present in store -->
        <div v-if="getResult.result">
          <div class="col s12" v-for="step in getResult.computationalSteps" :key="step.number">
            <ComputationalStep :message="step.message" :equation="step.equation" :step="step.number" />
          </div>
          <div class="col s12">
            <ComputationalResult :result="getResult.result" />
          </div>
        </div>

        <!-- Form Action button -->
        <div class="center">
          <a @click="computePrimeTest" class="btn pink lighten-1">Compute</a>
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
import Section from '@/components/Layout/Section'
import SectionIntro from '@/components/Layout/SectionIntro'

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
      number: '',
      error: null
    }
  },

  computed: mapGetters('resultModule', ['getResult']),

  methods: {
    ...mapActions('resultModule', ['fetchPrimeTest', 'flushResult']),

    /**
     * Fetches result from API if data is valid
     */
    computePrimeTest: function (e) {
      if (this.numberIsValid()) {
        this.fetchPrimeTest({ divisor: this.divisor, number: this.number })
        this.error = false
      } else {
        this.error = true
      }
    },

    numberIsValid: function () {
      return !isNaN(this.number) && this.number > 0
    }

  },

  destroyed () {
    this.flushResult()
  }
}
</script>

<style>
  span {
    font-weight: bold;
  }
</style>
