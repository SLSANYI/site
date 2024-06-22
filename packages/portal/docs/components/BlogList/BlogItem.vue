<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  readTime: {
    type: String,
    default: "",
  },
  url: {
    type: String,
  },
});
</script>

<template>
  <div :class="$style.container">
    <a :href="url" :class="$style.link">
      <span :class="$style.title">{{ title }}</span>
      <span :class="$style.readTime">· {{ readTime }}</span>
    </a>
  </div>
</template>

<style module lang="scss">
.link {
  font-size: 22px;
  &:hover {
    .title {
      text-decoration: underline;
    }
  }
}

.readTime {
  opacity: 0.8;
  font-size: 14px;
  margin-left: 8px;
}
</style>
