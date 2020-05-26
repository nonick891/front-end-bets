/**
 * Routes file navigation part of application
 *
 * @TODO: use auto discover script for page components
 */
import BetsList from './components/pages/bets.vue'
import EventsList from './components/pages/events/list.vue'
import EventsDetail from './components/pages/events/detail.vue'
import Account from './components/pages/account/regular.vue'
import Admin from './components/pages/account/admin.vue'

export default [
  { path: '/', component: EventsList },
  { path: '/events/detail', component: EventsDetail },
  { path: '/bets-list', component: BetsList },
  { path: '/personal', component: Account },
  { path: '/personal/admin', component: Admin }
];