import { defineComponent } from "vue";

export default defineComponent({
  name: "ResultField",
  props: {
    temp: {
      type: String,
      required: true,
    },
    speed: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
  },
  components: {},
  setup() {},

  return: {},
});