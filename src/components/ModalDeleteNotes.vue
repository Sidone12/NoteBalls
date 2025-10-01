<template>
    <div class="modal is-active p-3" >
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note?</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <p>Are you sure you want to delete this note?</p>
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <div class="buttons">
                    <button @click="closeModal" class="button is-success">Cancel</button>
                    <button @click="storeNotes.removeNote(noteId);" class="button is-danger">Delete</button>
                </div>
            </footer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, onMounted, onUnmounted } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes';  

const storeNotes = useStoreNotes();

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
}>();
const props = defineProps<{
    modelValue: boolean;
    noteId: number;
}>();

const closeModal = () => {
    emits('update:modelValue', false);
};

const modalCardRef = useTemplateRef<HTMLElement>('modalCardRef')
onClickOutside(modalCardRef, () => closeModal())

// Close modal on Escape key
const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
        closeModal();
    }
}
onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
})
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
})
</script>

<style>

</style>