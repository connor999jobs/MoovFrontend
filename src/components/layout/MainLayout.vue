<script setup>

import Sidebar
  from "@/components/layout/Sidebar.vue";

</script>

<template>

  <div
      class="
        min-h-screen
        flex
        bg-slate-950
        text-white
      "
  >

    <Sidebar />

    <main
        class="
          flex-1
          p-10
        "
    >

      <router-view />

    </main>

  </div>

</template>