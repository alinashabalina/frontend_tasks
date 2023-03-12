<template>
    <div class="result__wrapper">
      <div class="result__field-text"></div>
      <table class="result__field-table">
        <tr class="result__field-row">
          <td class="result__field-central" colspan="2">The results</td>
        </tr>
        <tr class="result__field-row">
          <td class="result__field-cell">Temperature</td>
          <td class="result__field-cell">{{ temp }}</td>
        </tr>
        <tr class="result__field-row">
          <td class="result__field-cell">Wind speed</td>
          <td class="result__field-cell">{{ speed }}</td>
        </tr>
        <tr class="result__field-row">
          <td class="result__field-cell">Wind direction</td>
          <td class="result__field-cell"> {{ direction }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script lang="ts" src="./result-field.ts"></script>
  <style lang="scss" src="./result-field.scss">
  </style>