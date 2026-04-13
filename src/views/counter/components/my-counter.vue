<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="flex flex-col items-center">
    <div>counter</div>
    <div>{{ counter.count }}</div>
    <button @click="counter.increment">
      +
    </button>
    <button @click="counter.decrement">
      -
    </button>
  </div>
</template>
