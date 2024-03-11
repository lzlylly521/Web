import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/404.vue'
import Index from '@/views/Index.vue'
import About from '@/views/About.vue'
import Join from '@/views/Join.vue'
import Login from '@/views/Login.vue'
import Enroll from '@/views/Enroll.vue'
import Myform from '@/views/Myform.vue'
import Manager from '@/views/Manager.vue'
import Myinformation from '@/views/Myinformation.vue'
import Administrative from '@/views/serve_page/Administrative.vue'
import Company from '@/views/serve_page/Company.vue'
import Custom from '@/views/serve_page/Custom.vue'
import Family from '@/views/serve_page/Family.vue'
import Accountinformation from '@/views/manager_page/Accountinformation.vue'
import Accountevaluation from '@/views/manager_page/Accountevaluation.vue'
import Workerinformation from '@/views/manager_page/Workerinformation.vue'
import Workerevaluation from '@/views/manager_page/Workerevaluation.vue'
import Workersalary from '@/views/manager_page/Workersalary.vue'
import Forminformation from '@/views/manager_page/Forminformation.vue'
import Managerinformation from '@/views/manager_page/Managerinformation.vue'
import Loginformation from '@/views/manager_page/Loginformation.vue'
import Income from '@/views/manager_page/Income.vue'
import Serve from '@/views/Serve.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Myform',
      name: 'Myform',
      component: Myform
    },
    {
      path: '/Myinformation',
      name: 'Myinformation',
      component: Myinformation
    },
    {
      path: '/Manager',
      name: 'Manager',
      component: Manager,
      children: [
        {
          path: 'Accountinformation',
          name: 'Accountinformation',
          component: Accountinformation
        },
        {
          path: 'Accountevaluation',
          name: 'Accountevaluation',
          component: Accountevaluation
        },
        {
          path: 'Workerinformation',
          name: 'Workerinformation',
          component: Workerinformation
        },
        {
          path: 'Workerevaluation',
          name: 'Workerevaluation',
          component: Workerevaluation
        },
        {
          path: 'Workersalary',
          name: 'Workersalary',
          component: Workersalary
        },
        {
          path: 'Forminformation',
          name: 'Forminformation',
          component: Forminformation
        },
        {
          path: 'Managerinformation',
          name: 'Managerinformation',
          component: Managerinformation
        },
        {
          path: 'Loginformation',
          name: 'Loginformation',
          component: Loginformation
        },
        {
          path: 'Income',
          name: 'Income',
          component: Income
        }
      ]
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Enroll',
      name: 'Enroll',
      component: Enroll
    },
    {
      path: '/Serve',
      name: 'Serve',
      component: Serve,
      children: [
        {
          path: 'Administrative',
          name: 'Administrative',
          component: Administrative
        },
        {
          path: 'Company',
          name: 'Company',
          component: Company
        },
        {
          path: 'Custom',
          name: 'Custom',
          component: Custom
        },
        {
          path: 'Family',
          name: 'Family',
          component: Family
        }
      ]
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
