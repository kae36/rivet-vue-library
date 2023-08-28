<template>
  <div class="rvt-tabs r-tabs" :class="{ 'data-rvt-tabs': tabsLabel }">
    <div class="rvt-tabs__tablist" role="tablist" aria-label="tabsAriaLabel">
      <button
        v-for="(tabName, index) in tabNames"
        :key="'tab-' + index"
        @click="selectedTabValue = index"
        class="rvt-tabs__tab" data-rvt-tab
        role="tab"
        :aria-selected="selectedTabValue === index"
        :data-tab="'tp-' + index"
        :id="'t-' + index"
        :tabindex="selectedTabValue === index ? 0 : -1">
        {{ tabName }}
      </button>
    </div>
    <div
      v-for="(panel, index) in panels"
      :key="'panel-' + index"
      class="rvt-tabs__panel" data-rvt-tab-panel
      tabindex="0"
      :hidden="selectedTabValue !== index"
      role="tabpanel"
      :id="'tp-' + index"
      :aria-labelledby="'t-' + index">
      <slot :name="'slot-' + index">{{ panel }}</slot>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, onMounted, ref, onBeforeUnmount } from "vue"
  import useModelWrapper from "../../utils/modelWrapper"

  export interface RTabsProps {
    selectedTab?: number
    tabNames?: string[]
    tabsLabel?: string
    tabsAriaLabel?: string
    panels?: string[],
    tabIds?: ( boolean | string )[],
    panelIds?: ( boolean | string )[]
  }

  const props = withDefaults(defineProps<RTabsProps>(), {
    selectedTab: 0,
    tabNames: () => ["Tab 1", "Tab 2", "Tab 3"],
    tabsLabel: "tabset-1",
    tabsAriaLabel: "Tabs",
    panels: () => [ "Panel one contents", "Panel two contents", "Panel three contents", "Panel four contents" ],
    tabIds: () => ["t-1", "t-2", "t-3", "t-4"],
    panelIds: () => ["tp-1", "tp-2", "tp-3", "tp-4"]
  })

  const emit = defineEmits(["update:selectedTab", "rvtTabRemoved", "rvtTabAdded", "rvtTabActivated"])

  let selectedTabValue = useModelWrapper(props, emit, "selectedTab")
  let rvtTabRemoved = useModelWrapper(props, emit, "rvtTabRemoved")
  let rvtTabAdded = useModelWrapper(props, emit, "rvtTabAdded")
  let rvtTabActivated = useModelWrapper(props, emit, "rvtTabActivated")

  function tabActivated(event: any): void {
    let parsedTabIndex = Number(event.detail.name().split("-").pop())
    if (!Number.isNaN(parsedTabIndex)) {
      selectedTabValue.value = parsedTabIndex
    }
  }

  onMounted(() => {
    document.addEventListener("tabActivated", tabActivated)
  })

  onBeforeUnmount(() => {
    document.removeEventListener("tabActivated", tabActivated)
  })
</script>
