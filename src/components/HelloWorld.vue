<script setup lang="ts">
import RTabs from "./RTabs/RTabs.vue"
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <r-tabs :tabNames="['Tab one', 'Tab two', 'Tab three', 'Tab four']" :SelectedTab="0">
      <slot name="slot-0">
        <span class="rvt-ts-23 rvt-text-bold">Become the best version of yourself at IU</span>
        <p>
          Develop the skills you need for a rewarding career, and follow in the footsteps of more than 729,000 IU alumni who are leading organizations, innovating the future, and making an impact on their communities and the world.
        </p>
      </slot>
      <slot name="slot-1">
        <span class="rvt-ts-23 rvt-text-bold">Find your calling</span>
        <p>
          IU offers more than 2,300 different programs of study. Not sure what to focus on? No problem. Browse by interest area to find options you'd enjoy pursuing.
        </p>
      </slot>
      <slot name="slot-2">
        <span class="rvt-ts-23 rvt-text-bold">Pursue your passion or explore the possibilities</span>
        <p>
          From nursing to criminal justice, epidemiology to environmental science, social work to cybersecurity, and more than 900 academic programs in between, IU gives you the power to study whatever sparks your interest, with the support of world-class professors and faculty who care about your success.
        </p>
      </slot>
      <slot name="slot-3">
        <span class="rvt-ts-23 rvt-text-bold">Find your ideal campus life at IU</span>
        <p>
          Each of our nine campuses offers a welcoming, inclusive environment that feels like home, whatever your background, interests, or goals. Whether you want a Big Ten college experience, the dynamic pace of an urban research university, the community feeling of a regional campus close to home, or the flexibility of a fully online degree program, you’ll find it at IU.
        </p>
      </slot>
    </r-tabs>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
