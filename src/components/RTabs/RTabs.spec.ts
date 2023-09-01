import { mount } from "@vue/test-utils"
import RTabs from "./RTabs.vue"
import { describe, beforeEach, it, expect } from "vitest"

describe("Suggest with default props", () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(RTabs, {})
  })

  it("Should pass component initialization", () => {
    expect(wrapper).toBeTruthy()
  })

  it("Should have the default tab names collection", () => {
    expect(wrapper.vm.tabNames).toEqual(["Tab 1", "Tab 2", "Tab 3", "Tab 4"])
  })
})
