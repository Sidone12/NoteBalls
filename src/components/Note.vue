<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink class="card-footer-item" :to="`/editNote/${note.id}`">Edit</RouterLink>
            <button @click="deleteNote(note.id)" class="card-footer-item">Delete</button>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { NoteType } from '@/types';
import { useStoreNotes } from '@/stores/storeNotes';
import { RouterLink } from 'vue-router';

const storeNotes = useStoreNotes();

const props = defineProps<{
    note: NoteType;
}>();

const characterLength = computed(() => {
    let length = props.note.content.length;
    let description = length > 1 ? 'characters' : 'character';
    return `${length}: ${description}`;
});

const deleteNote = (id: number) => {
    storeNotes.removeNote(id);
};
</script>

<style>

</style>