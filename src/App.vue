<template>
  <v-app>
    <v-content>
      <DetailsForm/>
    </v-content>
  </v-app>
</template>

<script>
import DetailsForm from "./components/DetailsForm";

export default {
  name: "App",
  components: {
    DetailsForm
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
