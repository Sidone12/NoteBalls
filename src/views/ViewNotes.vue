<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button :disabled="!newNote.trim()" @click="addNote" class="button is-link has-background-success">
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <progress v-if="!storeNotes.loading" class="progress is-small is-success" max="100" />
    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
      <div class="is-size-4 has-text-centered py-6" v-if="!storeNotes.notes.length">No notes available</div>
    </template>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AddEditNote from '@/components/AddEditNote.vue';
import Note from '@/components/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCaracters';

const storeNotes = useStoreNotes();


const newNote = ref('');
const addEditNoteRef = ref<InstanceType<typeof AddEditNote> | null>(null);

useWatchCharacters(newNote, 100);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = '';
  addEditNoteRef.value?.focusTextarea();
};


</script>