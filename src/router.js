import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import ClientPanel from './views/ClientPanel.vue'
import ClientView from './views/ClientView.vue'
import ClinicianView from './views/ClinicianView.vue'
import ReflectiveChat from './views/ReflectiveChat.vue'
import SystemMap from './views/SystemMap.vue'

// Define routes
const routes = [
    { path: '/', component: ClientPanel },
    { path: '/client-view', component: ClientView },
    { path: '/clinician-view', component: ClinicianView },
    { path: '/reflective-chat', component: ReflectiveChat },
    { path: '/system-map', component: SystemMap }
]

// Create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
