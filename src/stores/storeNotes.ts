import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {NoteType} from '@/types/index';

export const useStoreNotes = defineStore('notes', () => {
  const notes = ref<NoteType[]>([
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.',
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.',
    },
  ]);

  const addNote = (note: NoteType) => {
    notes.value.unshift(note);
  };

  const removeNote = (noteId:number) => {
      notes.value = notes.value.filter((n: NoteType) => {
          return n.id !== noteId;
    });
  };

  return {notes, addNote, removeNote};
});
