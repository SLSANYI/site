<script setup lang="ts">
import BlogItem from "./BlogItem.vue";
import { data } from "./content.data";
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.year">
      <span :class="$style.yearText">2024</span>
    </div>
    <div :class="$style.list">
      <BlogItem
        v-for="item in data"
        :title="item.frontmatter?.summary"
        :readTime="item.readTime"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style module>
.container {
  position: relative;
  margin-top: 100px;
}

.list {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.year {
  user-select: none;
  position: relative;
  pointer-events: none;
}

.yearText {
  opacity: 0.1;
  -webkit-text-stroke-color: var(--vp-c-brand-1);
  -webkit-text-stroke-width: 2px;
  font-weight: 700;
  color: transparent;
  font-size: 8em;
  top: -3%;
  left: -3%;
  position: absolute;
}
</style>
