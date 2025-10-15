<template>
<nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
        <div class="navbar-brand">
            <div class="navbar-item is-size-4 has-text-weight-bold is-family-monospace">
                NoteBalls
            </div>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': showMobileNav }" @click.prevent="showMobileNav = !showMobileNav" data-target="navbarBasicExample" ref="navbarBurger">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
        </div>

        <div ref="target" id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
            <div class="navbar-start">
                <button v-if="storeAuth.signedUser.id" @click="logout" class="button is-small is-info  m-3">
                    Logout {{ storeAuth.signedUser.email }}</button>
            </div>
            <div class="navbar-end">
                <div class="buttons">
                    <RouterLink @click="showMobileNav = false" to="/" class="navbar-item" active-class="is-active">
                        Notes
                    </RouterLink>
                    <RouterLink @click="showMobileNav = false" to="/stats" class="navbar-item" active-class="is-active">
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import {  ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import { useStoreAuth } from '@/stores/storeAuth'; 

const storeAuth = useStoreAuth()

const target = useTemplateRef < HTMLElement > ('target')
const navbarBurger = useTemplateRef < HTMLElement > ('navbarBurger')

onClickOutside(target, () => showMobileNav.value = false, {
    ignore: [navbarBurger]
})

const showMobileNav = ref(false)
const logout = () => {
    showMobileNav.value = false;
    storeAuth.logoutUser()
}
</script>

<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>