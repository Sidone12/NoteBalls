<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li @click.prevent="register = false" :class="{ 'is-active': !register }"><a>Login</a></li>
                <li @click.prevent="register = true" :class="{ 'is-active': register }"><a>Register</a></li>
            </ul>
        </div>

        <div class="card auth-form">
            <div class="card-content">
                <div class="content">
                    <div class="title has-text-centered is-4 mb-4">{{ formTitle }}</div>
                    <form>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input v-model="credentials.email" class="input" type="email"
                                    placeholder="e.g. alexsmith@gmail.com">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input v-model="credentials.password" class="input" type="password"
                                    placeholder="Enter your password">
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-right">
                            <p class="control">
                                <button @click.prevent="submitForm" class="button is-primary">
                                    {{ formTitle }}
                                </button>
                            </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from 'vue';
import type { AuthType } from '@/types';
import { useStoreAuth } from '@/stores/storeAuth';

const storeAuth = useStoreAuth()

const register = ref<boolean>(false);

const formTitle = computed(() => register.value ? 'Register' : 'Login');

const submitForm = () => {
    if (!credentials.email || !credentials.password) {
        alert('Please fill in all fields.')
    }
    else {
        if (register.value) {
            storeAuth.registerUser(credentials)
        }
        else {
            storeAuth.loginUser(credentials)
        }
    }
}

const credentials = reactive<AuthType>({
    email: '',
    password: ''
})
</script>

<style scoped>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>