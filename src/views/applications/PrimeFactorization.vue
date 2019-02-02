<!--
  Routed View containing Prime Factorization.

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
  <Section elementId="primeFactorization">

    <!-- Title and Introduction -->
    <SectionIntro title="Prime Factorization">
      <MathDefinition>
        Every natural number can be expressed in exactly one way as a product of primes.
        This unique product of primes is called the <span class="bold">prime factorization</span>.
      </MathDefinition>
    </SectionIntro>

    <!-- Introduces The Tool -->
    <div>
      <h4>Factorization Solver</h4>
      <p class="flow-text">
        The following tool computes the prime factorization for a given natural number.
      </p>
    </div>

    <div class="container">

      <!-- Select, Input and Error Message -->
      <div class="row">
        <div class="col s12 m6">
          <input type="text" v-model="number" v-on:keyup.enter="computePrimeFactorization" placeholder="enter a natural number" minlength="1" maxlength="10">
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
            <ComputationalResult :result="getResult.result" hideBoolean/>
          </div>
        </div>

        <!-- Form Action button -->
        <div class="center">
          <a @click="computePrimeFactorization" class="btn pink lighten-1">Compute</a>
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
    ...mapActions('resultModule', ['fetchPrimeFactorization', 'flushResult']),

    computePrimeFactorization (e) {
      if (this.numberIsValid()) {
        this.fetchPrimeFactorization({ number: this.number })
        this.error = false
      } else {
        this.error = true
      }
    },

    numberIsValid () {
      return !isNaN(this.number) && this.number > 0
    },

    destroyed () {
      this.flushResult()
    }
  }
}
</script>
