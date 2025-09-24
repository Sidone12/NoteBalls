<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 has-text-weight-bold is-family-monospace">
                    NoteBalls
                </div>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    :class="{ 'is-active': showMobileNav }" @click.prevent="showMobileNav = !showMobileNav"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
                <div class="navbar-end">
                    <div class="buttons">
                        <RouterLink to="/" class="navbar-item" active-class="is-active">
                            Notes
                        </RouterLink>
                        <RouterLink to="/stats" class="navbar-item" active-class="is-active">
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
import { ref } from 'vue';
const showMobileNav = ref(false)
</script>

<style>
@media  (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0 ;
        width: 100%;
    }
}
</style>