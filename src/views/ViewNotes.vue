<template>
    <div class="notes">
        <NoteForm />
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
</template>

<script lang="ts" setup>
import NoteForm from '@/components/NoteForm.vue';
import Note from '@/components/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();
</script>
