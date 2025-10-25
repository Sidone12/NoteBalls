<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li @click.prevent="switchToLogin" :class="{ 'is-active': !register }">
                    <a>Login</a>
                </li>
                <li @click.prevent="switchToRegister" :class="{ 'is-active': register }">
                    <a>Register</a>
                </li>
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
                                    placeholder="e.g. alexsmith@gmail.com" @blur="validateField('email')" />
                            </div>
                            <p v-if="errors.email" class="help is-danger">
                                {{ errors.email }}
                            </p>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input v-model="credentials.password" class="input" type="password"
                                    placeholder="Enter your password" @blur="validateField('password')" />
                            </div>
                            <p v-if="errors.password" class="help is-danger">{{ errors.password }}</p>
                        </div>

                        <div v-if="register" class="field">
                            <label class="label">Confirm Password</label>
                            <div class="control">
                                <input v-model="credentials.confirmPassword" class="input"
                                    :class="{ 'is-danger': errors.confirmPassword }" type="password"
                                    placeholder="Confirm your password" @blur="validateField('confirmPassword')">
                            </div>
                            <p v-if="errors.confirmPassword" class="help is-danger">{{ errors.confirmPassword }}</p>
                        </div>

                        <!-- Error Message -->
                        <div v-if="formError" class="notification is-danger is-light">
                            {{ formError }}
                        </div>

                        <div class="field is-grouped is-grouped-right">
                            <p class="control">
                                <button @click.prevent="submitForm" class="button is-primary"
                                    :class="{ 'is-loading': isLoading }" :disabled="isLoading || !isFormValid">
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
import { ref, computed, reactive, watch } from 'vue';
import type { AuthType } from '@/types';
import { useStoreAuth } from '@/stores/storeAuth';

const storeAuth = useStoreAuth()


const register = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const formError = ref<string>('');


const credentials = reactive<AuthType & { confirmPassword?: string }>({
    email: '',
    password: '',
    confirmPassword: ''
})

const errors = reactive<Record<string, string>>({
    email: '',
    password: '',
    confirmPassword: ''
});

const formTitle = computed(() => register.value ? 'Register' : 'Login');

const isFormValid = computed(() => {
    const hasErrors = Object.values(errors).some(error => error !== '');
    const hasEmptyFields = !credentials.email || !credentials.password ||
        (register.value && !credentials.confirmPassword);
    return !hasErrors && !hasEmptyFields;
});

watch(register, () => {
    resetForm();
});

watch(credentials, () => {
    if (formError.value) formError.value = '';
}, { deep: true });


const validationRules = {
    email: (value: string) => {
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return '';
    },
    password: (value: string) => {
        if (!value) return 'Password is required';
        if (value.length < 6) return 'Password must be at least 6 characters';
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(value)) return 'Password must contain both uppercase and lowercase letters';
        return '';
    },
    confirmPassword: (value: string) => {
        if (register.value && !value) return 'Please confirm your password';
        if (register.value && value !== credentials.password) return 'Passwords do not match';
        return '';
    }
};

const validateField = (field: keyof typeof credentials) => {
    const value = credentials[field] as string;
    const validator = validationRules[field as keyof typeof validationRules];

    if (validator) {
        errors[field] = validator(value);
    }
};

const validateForm = (): boolean => {
    let isValid = true;

    Object.keys(validationRules).forEach(field => {
        validateField(field as keyof typeof credentials);
        if (errors[field]) isValid = false;
    });

    return isValid;
};

const resetForm = () => {
    credentials.email = '';
    credentials.password = '';
    credentials.confirmPassword = '';
    formError.value = '';
    Object.keys(errors).forEach(key => errors[key] = '');
};

const switchToLogin = () => {
    register.value = false;
};

const switchToRegister = () => {
    register.value = true;
};

const submitForm = async () => {
    if (!validateForm()) {
        formError.value = 'Please fix the errors above';
        return;
    }
    isLoading.value = true;
    formError.value = '';
    try {
        if (register.value) {
            await storeAuth.registerUser(credentials);
        } else {
            await storeAuth.loginUser(credentials);
        }

        console.log(`${formTitle.value} successful!`);

    } catch (error: any) {
        formError.value = error.message || `An error occurred during ${formTitle.value.toLowerCase()}`;
        console.error('Auth error:', error);
    } finally {
        isLoading.value = false;
    }
}


</script>

<style scoped>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>
