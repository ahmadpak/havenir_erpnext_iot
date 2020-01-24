<template>
  <div>
    <DemoLight/>
  </div>
</template>

<script>
import DemoLight from "./components/DemoLight.vue"
export default {
  name: "HavenirIOT",
  data: function() {
    return {
      some_data: "sample data"
    };
  },
  components: {
    DemoLight
  }
};
</script>
