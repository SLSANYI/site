<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const { theme } = useData()
const pageName = computed(() =>
  route.path.replace(/[./]+/g, '_').replace(/_html$/, '')
)
</script>

<template>
  <div :class="$style.container">
    <Content
      class="vp-doc"
      :class="[
        pageName,
        theme.externalLinkIcon && 'external-link-icon-enabled'
      ]"
    />
  </div>
</template>

<style module>
.container {
  margin-top: 66px;
  max-width: 800px;
  padding: 0 14px;
  margin: 65px auto 0 auto;
}
</style>
