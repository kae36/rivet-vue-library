<template>
  <div class="rvt-tabs" :data-rvt-tabs="dataRivetTabs ? dataRivetTabs: 'tabset-1'">
    <div class="rvt-tabs__tablist" :aria-label="ariaTabLabel ? ariaTabLabel : 'Rivet tabs'" data-rvt-tablist>
      <template v-for="(tabItem, tabIndex) in tabItems" :key="tabIndex">
        <button class="rvt-tabs__tab" data-rvt-tab="tabItem.tabId">{{ tabItem.tabLabel }}</button>
      </template>
    </div>
    <div v-for="(panelItem, panelIndex) in panelItems" :key="panelIndex" class="rvt-tabs__panel" data-rvt-tab-panel="panelItem.panelId">
      <span class="rvt-ts-23 rvt-text-bold">{{ panelItem.title}}</span>
      <p>{{ panelItem.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    ariaTabLabel: string
    /**
     * The label of the set of tabs
     */
    dataRivetTabs: string
    /**
     * The labels of the tabs
     */
    tabItems: Array<{
      tabId: string
      tabLabel: string
    }>,
    /**
     * primary or secondary button
     */
    primary?: boolean
    /**
     * background color of the button
     */
    backgroundColor?: string
  }>(),
  { primary: false }
)

const emit = defineEmits<{
  (e: "click", id: number): void
}>()  

const classes = computed(() => ({
  "rvt-tabs": true,
  "rvt-tabs__tablist": true,
  "rvt-tabs__tab": true,
  "rvt-tabs__panel": true,
  "rvt-ts-23": true,
  "rvt-text-bold": true,
  "data-rvt-tab-init": true,
  // "data-rvt-tab": true,
  "data-rvt-tab": String
})) 
</script>
