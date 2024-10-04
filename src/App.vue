<template>
  <h1>App</h1>
  <hr />

  <CounterComponent :value="5" />
  <CounterComponentScript :value="10" />
</template>

<script setup lang="ts">
import CounterComponent from './components/CounterComponent.vue';
import CounterComponentScript from './components/CounterComponentScript.vue';
</script>

<style scoped></style>
