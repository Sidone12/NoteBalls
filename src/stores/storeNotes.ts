import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
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
    {
      id: 3,
      content: 'some text',
    },
  ]);
  // Getters
  const totalNotesCount = computed(() => notes.value.length);

  const totalCharactersCount = computed(() =>
    notes.value.reduce((acc, note) => acc + note.content.length, 0)
  );
  const getNoteById = (id: number) => {
    return notes.value.find(note => note.id === id)?.content || '';
  };
  // Actions  
  const addNote = (note: NoteType) => {
    notes.value.unshift(note);
  };

  const removeNote = (noteId: number) => {
    notes.value = notes.value.filter((n: NoteType) => {
      return n.id !== noteId;
    });
  };
  
  const updateNote = (id: number, newContent: string) => {
    let note = notes.value.find(note => note.id === id);
    if (note) {
      note.content = newContent;
    }
  };

  return {
    notes,
    addNote,
    removeNote,
    getNoteById,
    updateNote,
    totalNotesCount,
    totalCharactersCount,
  };
});
