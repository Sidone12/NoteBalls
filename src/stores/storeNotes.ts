import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import type {NoteType} from '@/types/index';
import {
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
  orderBy,
  query,
  addDoc,
  doc,
} from 'firebase/firestore';
import {db} from '@/js/firebase.js';

const notesCollectionsRef = collection(db, 'notes');
const notesCollectionsQuery = query(notesCollectionsRef, orderBy('date', 'desc'));

export const useStoreNotes = defineStore('notes', () => {
  //--- STATE ---
  const notes = ref<NoteType[]>([]);

  let loading = ref<boolean>(false);

  // --- GETTERS ---
  function totalNotesCount() {
    return computed(() => notes.value.length);
  }

  function totalCharactersCount() {
    return computed(() => notes.value.reduce((acc, note) => acc + note.content.length, 0));
  }

  function getNoteById(id: string) {
    return notes.value.find(note => note.id === id)?.content || '';
  }

  // --- ACTIONS ---

  async function getNotes() {
    loading.value = false;
    onSnapshot(notesCollectionsQuery, querySnapshot => {
      let notesArray: NoteType[] = [];
      querySnapshot.forEach(doc => {
        const note: NoteType = {
          id: doc.id,
          content: doc.data().content,
          date: doc.data().date,
        };
        notesArray.push(note)
       
      });
      notes.value = notesArray;
      loading.value = true;
    });
  }

  async function addNote(newNoteContent: string) {
    const date = Date.now().toString();
    await addDoc(notesCollectionsRef, {
      content: newNoteContent,
      date,
    });
  }

  async function removeNote(noteId: string) {
    console.log(noteId  );
    await deleteDoc(doc(notesCollectionsRef, noteId));
  }

  async function updateNote(id: string, content: string) {
    await updateDoc(doc(notesCollectionsRef, id), {
      content,
    });
  }

  return {
    notes,
    getNotes,
    addNote,
    removeNote,
    updateNote,
    totalNotesCount,
    totalCharactersCount,
    getNoteById,
    loading,
  };
});
