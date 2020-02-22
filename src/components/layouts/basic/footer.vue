<template>
	<v-footer
		class="pa-0"
		app
	>
		<v-bottom-navigation>
			<v-btn
				value="recent"
				@click.stop="toggleMenu"
			>
				<span>A-Z menu</span>
				<v-icon>mdi-menu</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</v-footer>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'BasicFooter',
  data: () => ({}),
  computed: {
    ...mapState({ drawer: state => state.interface.drawer })
  },
	methods: {
		...mapMutations({ toggleMenu: 'interface/TOGGLE_MENU' })
	}
}
</script>