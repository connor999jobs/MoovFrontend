<template>

  <div class="space-y-6">

    <div>

      <h1
          class="
            text-4xl
            font-bold
          "
      >

        Accounts

      </h1>

      <p
          class="
            mt-2
            text-slate-400
          "
      >

        All created accounts

      </p>

    </div>

    <div
        class="
          overflow-hidden
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
        "
    >

      <table class="w-full">

        <thead class="bg-slate-800">

        <tr>

          <th class="p-4 text-left">
            ID
          </th>

          <th class="p-4 text-left">
            Type
          </th>

          <th class="p-4 text-left">
            Status
          </th>

        </tr>

        </thead>

        <tbody>

        <tr class="border-t border-slate-800">

          <td class="p-4">
            demo_account
          </td>

          <td class="p-4">
            individual
          </td>

          <td class="p-4">
            pending
          </td>

        </tr>

        </tbody>

      </table>

    </div>

  </div>

</template>