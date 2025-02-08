<script lang="ts">
  import Navigation from "~/components/layout/navigation.vue";
  export default {
    name: 'defaultLayout',
    components: {
      Navigation
    }
  }
</script>

<template>
  <div class="w-dvw h-dvh flex flex-col">
    <header>
      <Navigation />
    </header>

    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>