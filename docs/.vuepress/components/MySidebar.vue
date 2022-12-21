<script setup lang="ts">
import NavbarItems from '@vuepress/theme-default/lib/client/components/NavbarItems.vue'
import SidebarItems from '@theme/SidebarItems.vue'
</script>

<template>
  <aside class="sidebar">
    <NavbarItems />
    <slot name="top" />
    <MySidebarItems />
    <slot name="bottom" />
  </aside>
</template>
