<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter--">-1</button>
      <button class="btn" @click="counter++">+1</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';

const props = defineProps<Props>();

interface Props {
  value: number;
}

const { counter, squareCounter } = useCounter(props.value);
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700;
}
</style>
