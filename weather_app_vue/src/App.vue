<template>
  <SearchForm></SearchForm>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchForm from './components/search-form/search-form.vue';

@Options({
    components: {
      SearchForm,
    },
  })
  export default class App extends Vue {}
  </script>