<!--
  Content within the <footer>

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
  <div>

    <!-- everything above the copyright (darkened strip) -->
    <div class="container">

      <div class="row">

        <!-- Left Side -->
        <div class="col l6 s12">
          <h5 class="white-text">Disclaimer</h5>
          <p class="grey-text text-lighten-4">
            This application was developed for educational purposes.
            Complete accuracy cannot be guaranteed and this application assumes no responsibility on behalf of students and professionals that use its services.
          </p>
        </div>

        <!-- Right Side -->
        <div class="col l4 offset-l2 s12">
          <ul class="footer__links">
            <!-- Organization Link -->
            <li>
              <a class="green-text text-lighten-3" href="https://github.com/discomath/">
                <i class="inline-icon material-icons">code</i> Source Code
              </a>
            </li>
            <!-- Bug Report -->
            <li>
              <a class="red-text text-lighten-3" href="https://github.com/discomath/discomathweb/issues/new?assignees=&labels=&template=bug_report.md&title=">
                <i class="inline-icon material-icons">bug_report</i> Submit A Bug
              </a>
            </li>
            <!-- Feature REquest -->
            <li>
              <a class="blue-text text-lighten-3" href="https://github.com/discomath/discomathweb/issues/new?assignees=&labels=&template=feature_request.md&title=">
                <i class="inline-icon material-icons">feedback</i> Request A Feature
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>

    <!-- darkened strip at very bottom -->
    <div class="footer-copyright">
      <div class="container">
        &copy; 2019 <a href="https://github.com/discomath" title="Vapurrmaid on Github">DiscoMath</a>
        <span class="right">
          Created By: <a href="https://github.com/vapurrmaid">
            <span>vapurrmaid</span>
          </a>
        </span>
      </div>
    </div>

  </div>
</template>

<style scoped>
  /* Adds spacing, font style to links on right side */
  ul.footer__links {
    font-weight: 300;
  }

  ul.footer__links li:not(last-child) {
    margin-bottom: 10px;
  }

  a span {
    font-family: monospace;
    letter-spacing: 1px;
  }

  .inline-icon {
    vertical-align: bottom;
    font-size: 18px !important;
  }
</style>
