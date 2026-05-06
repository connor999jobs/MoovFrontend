<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <aside
      class="
        w-[260px]
        border-r
        border-slate-800
        bg-slate-900
        p-6
      "
  >
    <h1
        class="
          mb-8
          text-2xl
          font-bold
        "
    >
      Moov Admin
    </h1>
    <nav class="space-y-2">
      <RouterLink
          to="/create-account"
          class="
            block
            rounded-xl
            bg-slate-800
            px-4
            py-3
          "
      >
        Create Account
      </RouterLink>
      <RouterLink
          to="/accounts"
          class="
            block
            rounded-xl
            bg-slate-800
            px-4
            py-3
          "
      >
        Accounts
      </RouterLink>
    </nav>
  </aside>
</template>