<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed, onMounted, watch, nextTick } from 'vue'
import mediumZoom from 'medium-zoom'

const route = useRoute()
const { theme } = useData()
const pageName = computed(() =>
  route.path.replace(/[./]+/g, '_').replace(/_html$/, '')
)

const initZoom = () => {
  mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
}

onMounted(() => {
  initZoom()
})

watch(
  () => route.path,
  // () => initZoom()
  () => nextTick(() => initZoom())
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
  padding: 0 20px;
  margin: 65px auto 0 auto;
}

@media (max-width: 640px) {
  div[class*='language-'] {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>

<style>
.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 21;
}
</style>
