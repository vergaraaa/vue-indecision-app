<template>
  <h1>App</h1>
  <hr />

  <CounterComponent :value="5" />
  <CounterComponentScript :value="10" />
  <CounterComponentScript2 :value="13" />
</template>

<script setup lang="ts">
import CounterComponent from './components/CounterComponent.vue';
import CounterComponentScript from './components/CounterComponentScript.vue';
import CounterComponentScript2 from './components/counter-component/CounterComponentScript2.vue';
</script>

<style scoped></style>
