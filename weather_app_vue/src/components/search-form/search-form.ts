import { defineComponent } from "vue";
import SearchButton from '@/components/search-button/search-button.vue';
import SearchField from '@/components/search-field/search-field.vue';

export default defineComponent({
  name: "SearchForm",
  props: {},
  components: {
    SearchField: SearchField, 
    SearchButton: SearchButton},
  setup() {},

  return: {},
});