<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light">
                   <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <button class="card-footer-item">Edit</button>
            <button @click="handleDeleteNote" class="card-footer-item">Delete</button>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { NoteType } from '@/types';

const props = defineProps<{
    note: NoteType;
}>();

const emit = defineEmits<{
    (e: 'delete-note', id: number): void;
}>();

const characterLength = computed(() => {
    let length = props.note.content.length;
    let description = length > 1 ? 'characters' : 'character';
    return `${length}: ${description}`;
});

const handleDeleteNote = () => {
    emit('delete-note', props.note.id);
};
</script>

<style>

</style>