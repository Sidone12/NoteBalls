<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="columns is-mobile has-text-grey-light mt-2">
                    <small class="column">{{ formatted }}</small>
                    <small class="column has-text-right">{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink class="card-footer-item" :to="`/editNote/${note.id}`">Edit</RouterLink>
            <button @click="modals.deleteNote = true" class="card-footer-item">Delete</button>
        </footer>
        <ModalDeleteNotes v-model="modals.deleteNote" v-if="modals.deleteNote" :noteId="note.id" />
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import type { NoteType } from '@/types';
import { RouterLink } from 'vue-router';
import ModalDeleteNotes from './ModalDeleteNotes.vue';
import { useDateFormat, useNow } from '@vueuse/core'


const props = defineProps<{
    note: NoteType;
}>();

const formatted = computed(() => {
    const date = new Date(parseInt(props.note.date))
    return useDateFormat(date, 'DD MMM YYYY, HH:mm').value;
})

const characterLength = computed(() => {
    let length = props.note.content.length;
    let description = length > 1 ? 'characters' : 'character';
    return `${length}: ${description}`;
});

const modals = reactive({
    deleteNote: false,
});
</script>

<style>

</style>