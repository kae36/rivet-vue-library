<template>
  <div>
    <r-btn
      id="customId"
      :buttonColor="ButtonColor.primary"
      :buttonSize="ButtonSize.normal"
      :buttonStyle="ButtonStyle.solid"
      @click="buttonClicked"
    >
      Click me
    </r-btn>
  </div>
</template>

<script setup lang="ts">
import RBtn from "./RBtn.vue"
import { ButtonSize, ButtonColor, ButtonStyle } from "../../@types"
//Replace above two import statements with:
// import { RBtn, ButtonSize, ButtonColor, ButtonStyle } from "@vprit_appdev/rasd-vue-library"

function buttonClicked() {
  console.log("clicked")
}
</script>
