<template>
  <v-content
    class="pb-0"
  >
    <v-container
      fluid
      class="pa-0"
    >
      <line-btn
        class="mt-3"
        icon="lock"
        text="Change password"
      />
      <line-btn
        icon="logout"
        text="Logout"
      />
      <line-btn
        icon="credit"
        text="Credit: 234 EUR"
      />
      <line-btn
        text="Balance: +45 EUR"
      />
      <line-btn
        text="Add new user"
      />
      <line-btn
        text="Users"
      />
      <v-row
        no-gutters
      >
        <user-item />
        <user-item />
        <user-item />
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import lineBtn from '../../ui/account/line-button.vue'
import userItem from '../../ui/account/user-item.vue'
export default {
  components: { lineBtn, userItem }
}
</script>