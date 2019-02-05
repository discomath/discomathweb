<!--
  Routed View containing Divisibility Test.

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
  <Section elementId="divisibility">

    <!-- Title and Introduction -->
    <SectionIntro title="Divisibility">
      <MathDefinition>
        <p>
          <code>a&#8739;b &rArr; &exist;k</code> where <code>a&sdot;k &equals; b &nbsp; a,b,k &isin; Z</code>
        </p>
        <p class="grey-text">
          An integer <code class="black-text">a</code> divides another integer <code class="black-text">b</code> if it can be multiplied by some integer <code class="black-text">k</code> to produce <code class="black-text">b</code>.
        </p>
      </MathDefinition>
    </SectionIntro>

    <!-- Introduces The Tool -->
    <div>
      <h4>Divisibility Tool</h4>
      <p class="flow-text">
        The following tool demonstrates a divisibility test for the selected divisor.
      </p>
    </div>

    <!-- Form and  Result -->
    <div class="container">

      <!-- Select, Input and Error Message -->
      <div class="row">
        <div class="col s12 m6">
          <select v-model="divisor">
            <option disabled value="">Select a divisor</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>12</option>
          </select>
        </div>

        <div class="col s12 m6">
          <input type="text" v-model="number" v-on:keyup.enter="computeDivisionTest" :placeholder="placholder" minlength="1" maxlength="10">
        </div>

        <div class="col s12">
          <p class="red-text lighten-1" v-if="error">Choose a divisor from the list above and enter an integer greater than 0.</p>
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
          <a @click="computeDivisionTest" class="btn pink lighten-1">Compute</a>
        </div>
      </div>

    </div> <!-- END FORM -->

  </Section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// components
import ComputationalResult from '@/components/Math/ComputationalResult'
import ComputationalStep from '@/components/Math/ComputationalStep'
import MathDefinition from '@/components/Math/MathDefinition'
import Section from '@/components/Layout/Section'
import SectionIntro from '@/components/Layout/SectionIntro'

// strings
import { NATURAL_NUMBER_PLACEHOLDER } from '@/strings/'

// utils
import validators from '@/utils/validation'

/**
 * defines valid divisors, in case user tries to bypass the <select> options
 */
const VALID_DIVISORS = new Set(['2', '3', '4', '5', '6', '8', '9', '10', '12'])

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
      placholder: NATURAL_NUMBER_PLACEHOLDER,
      divisor: '', // bound to the <select>
      number: '', // bound to the <input>
      error: null // whether or not to display an error message
    }
  },

  computed: mapGetters('resultModule', ['getResult']),

  methods: {
    ...mapActions('resultModule', ['fetchDivisibilityTest', 'flushResult']),

    /**
     * Fetches result from API if data is valid
     */
    computeDivisionTest: function (e) {
      if (this.divisorIsValid() && this.numberIsValid()) {
        this.fetchDivisibilityTest({ divisor: this.divisor, number: this.number })
        this.error = false
      } else {
        this.error = true
      }
    },

    divisorIsValid: function () {
      return this.divisor && (VALID_DIVISORS.has(this.divisor))
    },

    numberIsValid: function () {
      return validators.isStringNaturalNumber(this.number)
    }
  },

  destroyed () {
    this.flushResult()
  }
}
</script>

<style scoped>
  /* fixed width select contains divisor */
  select {
    display: block !important;
    width: 250px;
  }

  /* fixed width input contains typed number */
  input[type=text] {
    width: 250px;
  }
</style>
