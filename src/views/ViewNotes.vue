<template>
    <div class="notes">
        <NoteForm ref="noteFormRef" @add-note="addNote" />
        <Note v-for="note in notes" :key="note.id" :note="note" @delete-note="deleteNote" />
    </div>
</template>

<script lang="ts" setup>
import NoteForm from '@/components/NoteForm.vue';
import Note from '@/components/Note.vue';
import { ref } from 'vue';
import { NoteType } from '@/types';


const notes = ref<NoteType[]>([{
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.'
    },
    {
        id: 2,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.'
    },
]);

const noteFormRef = ref<InstanceType<typeof NoteForm> | null>(null);

const addNote = (note: NoteType) => {
    notes.value.unshift(note);
    noteFormRef.value?.focusInput();
};

const deleteNote = (id: number) => {
    notes.value = notes.value.filter(note => note.id !== id);
};
</script>


<style>

</style>