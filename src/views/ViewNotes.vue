<template>
    <div class="notes">
        <NoteForm />

        <div class="card mb-4" v-for="i in 4">
            <div class="card-content">
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                    iaculis mauris.
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NoteForm from '@/components/NoteForm.vue';

</script>


<style>

</style>