import { createRouter, createWebHistory } from 'vue-router'
import EMDRMap from './views/EMDRMap.vue'

import ClientPanel from './views/ClientPanel.vue'
import ClientView from './views/ClientView.vue'
import ClinicianView from './views/ClinicianView.vue'
import ReflectiveChat from './views/ReflectiveChat.vue'
import IFSMap from './views/IFSMap.vue'
import CBTMap from './views/CBTMap.vue'

const routes = [
    { path: '/', component: ClientPanel },
    { path: '/client-view', component: ClientView },
    { path: '/clinician-view', component: ClinicianView },
    { path: '/reflective-chat', component: ReflectiveChat },
    { path: '/ifs-map', component: IFSMap },
    { path: '/cbt-map', component: CBTMap },
    { path: '/emdr-map', component: EMDRMap }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

