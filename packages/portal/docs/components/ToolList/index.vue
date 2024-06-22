<script setup lang="ts">
import { data } from "./content.data";
</script>

<template>
  <div :class="$style.container">
    <a :href="item.url" v-for="item in data.list" target="_blank">{{ item.name }}</a>
  </div>
</template>

<style module>
.container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
