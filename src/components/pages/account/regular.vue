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
        icon="credit"
        color="transparent"
        text="Credit: 234 EUR"
      />
      <line-btn
        icon="lock"
        text="Change password"
      />
      <line-btn
        icon="logout"
        text="Logout"
      />
      <!-- START REMOVABLE TEMPLATE -->
      <v-row
        class="pt-5"
        justify="center"
        no-gutters
      >
        <v-btn
          color="red"
          to="/personal/admin"
        >Admin page</v-btn>
      </v-row>
      <!-- END REMOVABLE TEMPLATE -->
    </v-container>
  </v-content>
</template>
<script>
import lineBtn from '../../ui/account/line-button.vue'
export default {
  components: { lineBtn }
}
</script>