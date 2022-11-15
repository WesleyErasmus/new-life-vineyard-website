import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home_page/HomePage.vue'
import AboutPage from '../views/about_page/AboutPage.vue'
import MinistriesPage from '../views/ministries_page/MinistriesPage.vue'
import PrayerPage from '../views/prayer_page/PrayerPage.vue'
import SermonsPage from '../views/sermons_page/SermonsPage.vue'
import ResourcesPage from '../views/resources_page/ResourcesPage.vue'
import GivingPage from '../views/giving_page/GivingPage.vue'
import ContactPage from '../views/contact_page/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/ministries',
      name: 'ministries',
      component: MinistriesPage
    },
    {
      path: '/prayer',
      name: 'prayer',
      component: PrayerPage
      // Create this page ☝️
    },
    {
      path: '/sermons',
      name: 'sermons',
      component: SermonsPage
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesPage
    },
    {
      path: '/giving',
      name: 'giving',
      component: GivingPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
  ]
})

export default router
