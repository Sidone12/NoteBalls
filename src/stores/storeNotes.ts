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
import {useStoreAuth} from '@/stores/storeAuth';

import type {CollectionReference, Query} from 'firebase/firestore';

let notesCollectionsRef: CollectionReference;
let notesCollectionsQuery: Query;

export const useStoreNotes = defineStore('notes', () => {
  //--- STATE ---
  const notes = ref<NoteType[]>([]);

  let loading = ref<boolean>(false);

  // --- GETTERS ---
  const totalNotesCount = computed(() => notes.value.length);

  const totalCharactersCount = computed(() => {
    return notes.value.reduce((acc, note) => acc + note.content.length, 0);
  });

  const getNoteById = (id: string) => {
    return notes.value.find(note => note.id === id)?.content || '';
  };

  // --- ACTIONS ---
  function init() {
    const storeAuth = useStoreAuth();

    if (!storeAuth.signedUser.id) {
      throw new Error('User ID is missing');
    }
    notesCollectionsRef = collection(db, 'users', storeAuth.signedUser.id as string, 'notes');
    notesCollectionsQuery = query(notesCollectionsRef, orderBy('date', 'desc'));

    getNotes();
  }

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
        notesArray.push(note);
      });
      notes.value = notesArray;
      loading.value = true;
    });
  }

  function clearNotes() {
    notes.value = [];
  }

  async function addNote(newNoteContent: string) {
    const date = Date.now().toString();
    await addDoc(notesCollectionsRef, {
      content: newNoteContent,
      date,
    });
  }

  async function removeNote(noteId: string) {
    console.log(noteId);
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
    init,
    clearNotes,
  };
});
