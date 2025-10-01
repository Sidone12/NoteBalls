<template>
  <div
    class="card p-4 mb-4"
    :class="`has-background-${bgColor}-dark`"
  >
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field ">
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value)"
          :value="modelValue"
          ref="textareaRef"
          v-autofocus
          maxlength="200"
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
import { vAutofocus } from '@/directives/vAutofocus';

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
  bgColor?: string;
  label?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const placeholder = props.placeholder ?? 'Type your note here...';
const bgColor = props.bgColor ?? 'success';

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const focusTextarea = () => {
  textareaRef.value?.focus();
};

defineExpose({
  focusTextarea
});
</script>
