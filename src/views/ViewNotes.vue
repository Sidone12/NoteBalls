<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button :disabled="!newNote.trim()" @click="addNote" class="button is-link has-background-success">
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AddEditNote from '@/components/AddEditNote.vue';
import Note from '@/components/Note.vue';
import type { NoteType } from '@/types';
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

const newNote = ref('');
const addEditNoteRef = ref<InstanceType<typeof AddEditNote> | null>(null);

const addNote = () => {
  const note: NoteType = {
    id: Date.now(),
    content: newNote.value
  };
  storeNotes.addNote(note);
  newNote.value = '';
  addEditNoteRef.value?.focusTextarea();
};
</script>