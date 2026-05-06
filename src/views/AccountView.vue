<script setup>

import {
  onMounted,
  ref
} from "vue";

import {
  useRoute
} from "vue-router";

import {
  getMoovToken
} from "@/api/moov.js";

import {
  createMoovClient
} from "@/lib/moov-client.js";

const route =
    useRoute();

const account =
    ref(null);

const loadAccount =
    async () => {

      const tokenResponse =
          await getMoovToken({

            type: "ACCOUNT",

            accountId:
            route.params.id
          });

      const moov =
          await createMoovClient(

              tokenResponse.access_token
          );

      account.value =
          await moov.accounts.get({

            accountID:
            route.params.id
          });
    };

onMounted(loadAccount);

</script>

<template>

  <div v-if="account">

    <h1
        class="
          mb-6
          text-4xl
          font-bold
        "
    >

      Account

    </h1>

    <pre>
{{ account }}
    </pre>

  </div>

</template>