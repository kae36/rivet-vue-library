<template>
  <div class="rvt-tabs r-tabs" :class="{ 'data-rvt-tabs': tabsLabel }">
    <div class="rvt-tabs__tablist" role="tablist" aria-label="tabsAriaLabel">
      <button
        v-for="(tabName, index) in tabNames"
        :key="'tab-' + index"
        @click="selectedTabValue = index"
        class="rvt-tabs__tab"
        data-rvt-tab
        role="tab"
        :aria-selected="selectedTabValue === index"
        :data-tab="'tp-' + index"
        :id="'t-' + index"
        :tabindex="selectedTabValue === index ? 0 : -1">
        {{ tabName }}
      </button>
    </div>
    <div
      v-for="(tabName, index) in tabNames"
      :key="'panel-' + index"
      class="rvt-tabs__panel" data-rvt-tab-panel
      :tabindex="0"
      :hidden="selectedTabValue !== index"
      role="tabpanel"
      :id="'tp-' + index"
      :aria-labelledby="'t-' + index">
      <slot :name="'slot-' + index">Panel Information for Tab {{ index + 1 }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, defineComponent } from "vue"
import useModelWrapper from "../../utils/modelWrapper"

interface RTabsProps {
  selectedTab?: number
  tabNames?: string[]
  tabsLabel?: string
  tabsAriaLabel?: string
}

const RTabs = defineComponent({
  // Corrected: Moved the props definition outside of the setup function
  props: {
    selectedTab: {
      type: Number,
      default: 0
    },
    tabNames: {
      type: Array,
      default: () => ["Tab 1", "Tab 2", "Tab 3"]
    },
    tabsLabel: {
      type: String,
      default: "tabset-1"
    },
    tabsAriaLabel: {
      type: String,
      default: "Tabs"
    },
  },
  setup(props: RTabsProps, { emit }) {
    const selectedTabValue = ref(props.selectedTab);
    const tabNames = computed(() => props.tabNames);
    const tabsLabel = computed(() => props.tabsLabel);
    const tabsAriaLabel = computed(() => props.tabsAriaLabel);

    function tabActivated(event: any): void {
      let parsedTabIndex = Number(event.detail.name.split("-")[1]);
      if (!Number.isNaN(parsedTabIndex)) {
        selectedTabValue.value = parsedTabIndex;
      }
    }

    // Define the emit function
    const emit = useModelWrapper(props, emit)

    onMounted(() => {
      document.addEventListener("rvtTabActivated", tabActivated);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("rvtTabActivated", tabActivated);
    });

    return {
      selectedTabValue,
      tabNames,
      tabsLabel,
      tabsAriaLabel,
    };
  },
});
</script>
