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
        class="user-items ma-1"
      >
        <user-item
          :key="index"
          v-for="(user, index) in users"
          class="user-item"
          :price="user.amount"
          :username="user.name"
        />
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import lineBtn from '../../ui/account/line-button.vue'
import userItem from '../../ui/account/user-item.vue'
export default {
  components: { lineBtn, userItem },
  data: () => ({
    users: [
      { name: 'User Name', amount: 1.25 },
      { name: 'User Name 2', amount: 12 },
      { name: 'User Name 3', amount: 32.01 },
      { name: 'User Name 4', amount: 52.59 },
    ]
  })
}
</script>
<style>
  .user-items {
    border-radius: 10px;
    border: 1px solid #4C4C4C;
  }
  .user-item:nth-child(even) {
    background: #262626;
  }
</style>