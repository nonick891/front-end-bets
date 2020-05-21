import BetsList from '../components/pages/bets.vue'
import EventsList from '../components/pages/events/list.vue'
import EventsDetail from '../components/pages/events/detail.vue'
import Account from '../components/pages/account.vue'

export default [
  { path: '/', component: EventsList },
  { path: '/events/detail', component: EventsDetail },
  { path: '/bets-list', component: BetsList },
  { path: '/personal', component: Account }
];