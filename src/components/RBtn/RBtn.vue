<template>
  <button type="button" :class="classes" v-bind="$attrs" @click="onClicked">
    <!-- @slot default slot -->
    <slot>Button</slot>
  </button>
</template>
<script setup lang="ts">
  import { getSizeClass, getStyleClass } from "../../utils/buttonClassResolver"
  import { ButtonSize, ButtonColor, ButtonStyle } from "../../@types"
  import { computed } from "vue"

  export interface RBtnProps {
    buttonColor?: ButtonColor
    buttonSize?: ButtonSize
    buttonStyle?: ButtonStyle
  }

  const props = withDefaults(defineProps<RBtnProps>(), {
    buttonColor: ButtonColor.primary,
    buttonSize: ButtonSize.normal,
    buttonStyle: ButtonStyle.solid
  })

  const emit = defineEmits(["clicked"])

  const onClicked = () => {
    emit("clicked")
  }

  const classes = computed(() => {
    return [
      "r-btn",
      "rvt-button",
      getSizeClass(props.buttonSize),
      getStyleClass(props.buttonStyle, props.buttonColor)
    ].filter(x => x)
  })
</script>
<style>
  .r-btn-plain--danger {
    color: #df3603 !important;
  }

  .r-btn-plain--danger:hover {
    background-color: #ffece5 !important;
    color: #82270d !important;
  }

  .r-btn-plain--danger:focus {
    outline: none !important;
    box-shadow: 0 0 0 0.125rem #fff, 0 0 0 0.25rem #df3603 !important;
  }

  .r-btn-plain--success {
    color: #008a28 !important;
  }

  .r-btn-plain--success:hover {
    background-color: #eaf3e8 !important;
    color: #16521d !important;
  }

  .r-btn-plain--success:focus {
    outline: none !important;
    box-shadow: 0 0 0 0.125rem #fff, 0 0 0 0.25rem #008a28 !important;
  }
</style>
