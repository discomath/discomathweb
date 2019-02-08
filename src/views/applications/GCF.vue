<!--
  Routed View for computing the Greatest Common Factor between 2-10 numbers.

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
  <Section elementId="greatestCommonFactor">

    <!-- Title and Introduction -->
    <SectionIntro title="Greatest Common Factor">
      <MathDefinition>
        Given a group of Natural Numbers, the <span class="bold">greatest common factor</span> is the largest number that is factor of <span class="bold">all</span> of them.
      </MathDefinition>
    </SectionIntro>

    <!-- Remark -->
    <MathRemark>
      <p>
        There is more than one way to find the GCF.
        However the method that this tool both uses, and suggests, is by using <router-link :to="{ name: 'prime-factors' }">prime factorization</router-link>.
      </p>
      <p>
        The algorithm is as follows:
        <ol>
          <li>Write the prime factorization of each number.</li>
          <li>Choose all primes common to all numbers, each raised to the least exponent that it has in any of the factorizations.</li>
          <li>Take the product of 2.</li>
        </ol>
      </p>
    </MathRemark>

    <!-- Introduces The Tool -->
    <div>
      <h4>GCF Solver</h4>
      <p class="flow-text">
        The following tool computes the prime GCF for 2-10 numbers.
        There must be at least 2 numbers, all greater than 1.
      </p>
    </div>

    <div class="container">
      <!-- Inputs and Error Message -->
      <div class="row">

        <div class="col s6" v-for="(n, index) in numberOfInputs" :key="n">
          <input type="text" v-model="numbers[index]" :placeholder="placeholder" minlength="1" maxlength="10">
        </div>

        <!-- Form Action button -->
        <div class="col s12 center">
          <a @click="addNumber" :class="numberOfInputs < 10 ? '' : 'disabled'" class="btn green darken-1">
            <i class="material-icons">add</i>
          </a>
          <a @click="computeGCF" class="btn pink lighten-1">Compute</a>
          <a @click="removeNumber" :class="numberOfInputs > 2 ? '' : 'disabled'" class="btn red darken-1">
            <i class="material-icons">remove</i>
          </a>
        </div>

        <!-- Form Error Message -->
        <div class="col s12">
          <p class="red-text lighten-1" v-if="error">Need at least two numbers greater than 1.</p>
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

      </div>

    </div>

  </Section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// components
import ComputationalResult from '@/components/Math/ComputationalResult'
import ComputationalStep from '@/components/Math/ComputationalStep'
import MathDefinition from '@/components/Math/MathDefinition'
import MathRemark from '@/components/Math/MathRemark'
import Section from '@/components/Layout/Section'
import SectionIntro from '@/components/Layout/SectionIntro'

// strings
import { NATURAL_NUMBER_PLACEHOLDER } from '@/strings/'

// utils
import validators from '@/utils/validation'

export default {
  components: {
    ComputationalResult,
    ComputationalStep,
    MathDefinition,
    MathRemark,
    Section,
    SectionIntro
  },

  data () {
    return {
      error: '',
      numberOfInputs: 2,
      placeholder: NATURAL_NUMBER_PLACEHOLDER,
      numbers: []
    }
  },

  computed: mapGetters('resultModule', ['getResult']),

  methods: {
    ...mapActions('resultModule', ['fetchGCF', 'flushResult']),

    computeGCF (e) {
      if (this.numbers.length >= 2 && this.numbers.length <= 10 && validators.isNumbersArrayValid(this.numbers, 1)) {
        this.numbers.sort((a, b) => parseInt(a) - parseInt(b))
        this.fetchGCF(this.numbers)
        this.error = false
        this.numbers = []
        this.numberOfInputs = 2
      } else {
        this.error = true
      }
    },

    addNumber (e) {
      if (this.numberOfInputs < 10) {
        this.numberOfInputs += 1
      }
    },

    removeNumber (e) {
      if (this.numberOfInputs > 2) {
        this.numberOfInputs -= 1
      }
    }
  },

  destroyed () {
    this.flushResult()
  }
}
</script>

<style scoped>
  a.btn {
    margin: 0 .5rem !important;
  }

  @media screen and (max-width: 347px) {
    a.btn {
      display: block;
      margin: .5rem 0 !important;
    }
  }
</style>
