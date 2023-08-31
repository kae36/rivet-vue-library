import "../node_modules/rivet-core/css/rivet.min.css"
import "../node_modules/rivet-core/js/rivet.min.js"
// import "../src/assets/rasd-vue-library.css"
import type { Preview } from '@storybook/vue3'
import * as DocBlock from "@storybook/blocks"

const preview: Preview = {
  parameters: {
    // docs: {
    //   page: () => <></>
    // },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
