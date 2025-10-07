<template>
  <AddEditNote label="Edit note" bgColor="grey" v-model="noteContent" ref="addEditNoteRef"
    placeholder="Edit a new note">
    <template #buttons>
      <button @click="router.back()" class="button is-link is-light mr-2">
        Cancel
      </button>
      <button :disabled="!noteContent.trim()" @click="updateNote" class="button is-link has-background-success">
        Save Changes
      </button>
    </template>
  </AddEditNote>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AddEditNote from '@/components/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useRoute, useRouter } from 'vue-router';

const store = useStoreNotes();
const route = useRoute();
const router = useRouter();

const noteContent = ref('');

noteContent.value = store.getNoteById(route.params.id as string);

const updateNote = () => {
  if (!noteContent.value.trim()) return;
  store.updateNote(route.params.id as string, noteContent.value.trim());
  router.back();
};

</script>
