<template>
    <div class="card has-background-success-dark p-4 mb-4">
        <div class="field ">
            <div class="control">
                <textarea ref="noteInput" class="textarea" placeholder="Add a new note" v-model="newNote"></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <button :disabled="!isNoteValid" @click="addNote" class="button is-link has-background-success">Add New
                    Note</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { NoteType } from '@/types';

const emit = defineEmits<{
    (e: 'add-note', note: NoteType): void;
}>();


const newNote = ref('');
const noteInput = ref<HTMLTextAreaElement | null>(null);
const focusInput = () => {
    noteInput.value?.focus();
};


const isNoteValid = computed(() => {
    return newNote.value.trim() !== '';
});

const addNote = () => {
    if (!isNoteValid.value) return;

    const note: NoteType = {
        id: Date.now(),
        content: newNote.value.trim(),
    };

    emit('add-note', note);
    newNote.value = '';
};

defineExpose({ focusInput });
</script>

<style>

</style>