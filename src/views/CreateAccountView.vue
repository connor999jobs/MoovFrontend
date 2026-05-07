<script setup>

import {
  ref,
  nextTick
} from "vue";

import {
  getMoovToken
} from "@/api/moov.js";

const loading =
    ref(false);

const onboardingVisible =
    ref(false);

const onboardingRef =
    ref(null);

const FACILITATOR_ACCOUNT_ID =
    "4f37cc44-9956-4485-8df7-9462c5cfd8fa";

const openOnboarding =
    async () => {

      try {

        loading.value = true;

        /*
          GET INITIAL TOKEN
        */

        const tokenResponse =
            await getMoovToken({

              type: "INITIAL"
            });

        /*
          RENDER COMPONENT
        */

        onboardingVisible.value =
            true;

        /*
          WAIT DOM
        */

        await nextTick();

        /*
          COMPONENT
        */

        const onboarding =
            onboardingRef.value;

        /*
          TOKEN
        */

        onboarding.token =
            tokenResponse.access_token;

        /*
          FACILITATOR
        */

        onboarding.facilitatorAccountID =
            FACILITATOR_ACCOUNT_ID;

        /*
          CAPABILITIES
        */

        onboarding.capabilities = [

          "transfers",

          "collect-funds.ach",

          "collect-funds.card-payments",

          "send-funds.ach",

          "wallet.balance"
        ];

        /*
          ACCOUNT TYPES
        */

        onboarding.accountTypes = [

          "individual",

          "business"
        ];

        /*
          UI
        */

        onboarding.showLogo = false;

        /*
          CALLBACKS
        */

        onboarding.onResourceCreated =
            handleResourceCreated;

        onboarding.onSuccess =
            handleSuccess;

        onboarding.onError =
            handleError;

        onboarding.onCancel =
            handleCancel;

        /*
          OPEN MODAL
        */

        onboarding.open = true;

      } catch (error) {

        console.error(
            "INIT ERROR",
            error
        );

      } finally {

        loading.value = false;
      }
    };

const handleResourceCreated =
    async ({
             resourceType,
             resource
           }) => {

      console.log(
          "RESOURCE CREATED",
          resourceType,
          resource
      );

      /*
        ACCOUNT CREATED
      */

      if (
          resourceType !== "account"
      ) {

        return;
      }

      /*
        ACCOUNT TOKEN
      */

      const accountToken =
          await getMoovToken({

            type: "ACCOUNT",

            accountId:
            resource.accountID
          });

      /*
        UPDATE TOKEN
      */

      onboardingRef.value.token =
          accountToken.access_token;
    };

const handleSuccess =
    (data) => {

      console.log(
          "ONBOARDING SUCCESS",
          data
      );
    };

const handleError =
    (error) => {

      console.error(
          "ONBOARDING ERROR",
          error
      );
    };

const handleCancel =
    () => {

      console.log(
          "ONBOARDING CLOSED"
      );
    };

</script>

<template>

  <div class="max-w-5xl mx-auto">

    <div class="mb-10">

      <h1
          class="
            text-4xl
            font-bold
          "
      >

        Create Account

      </h1>

      <p
          class="
            mt-2
            text-slate-400
          "
      >

        Embedded Moov onboarding

      </p>

    </div>

    <div
        class="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-8
        "
    >

      <div>

        <h2
            class="
              text-2xl
              font-semibold
            "
        >

          Full KYC onboarding

        </h2>

        <p
            class="
              mt-2
              text-slate-400
            "
        >

          ACH + Cards + Verification

        </p>

      </div>

      <button
          type="button"

          @click.prevent="
            openOnboarding
          "

          :disabled="loading"

          class="
            rounded-xl
            bg-blue-600
            px-6
            py-4
            transition
            hover:bg-blue-500
            disabled:opacity-50
          "
      >

        {{
          loading
              ? "Loading..."
              : "Start onboarding"
        }}

      </button>

    </div>

    <!-- IMPORTANT -->

    <moov-onboarding
        v-if="onboardingVisible"
        ref="onboardingRef"
    >
    </moov-onboarding>

  </div>

</template>