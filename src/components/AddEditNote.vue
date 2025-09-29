<template>
  <div class="card has-background-success-dark p-4 mb-4">
    <div class="field ">
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value)"
          :value="modelValue"
          ref="textareaRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
    modelValue: string;
    placeholder?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const placeholder = props.placeholder ?? 'Type your note here...';

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const focusTextarea = () => {
    textareaRef.value?.focus();
};


defineExpose({
    focusTextarea
});
</script>
