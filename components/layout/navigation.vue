<script lang="ts">
export default {
  name: 'navigation',
  setup() {
    definePageMeta({
      layout: false
    })
  },
  data() {
    return {
      links: [
          {
            label: 'Dashboard',
            icon: 'gg:home',
            to: '/dashboard'
          },
          {
            label: 'Tickets',
            icon: 'gg:list',
            to: '/tickets'
          },
          {
            label: 'Einstellungen',
            icon: 'gg:more',
            to: '/settings'
          }
      ]
    }
  }
}
</script>

<template>
  <nav class="p-4">
    <ul class="flex flex-row justify-center gap-8">
      <li
          v-for="link in links"
          :key="link.label"
          class="hover:cursor-pointer group"
      >
        <span class="flex flex-row gap-1 items-center">
          <UIcon :name="link.icon" class="w-5 h-5 group-hover:text-sky-600" />
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </span>
      </li>
    </ul>
  </nav>
</template>