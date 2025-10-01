import {watch, type Ref} from 'vue';

export function useWatchCharacters(valueToWatch: Ref<string> | (() => string), maxChars: number = 200) {
  watch(valueToWatch, (newVal: string) => {
    if (newVal.length === maxChars) {
      alert(`Note content has reached ${maxChars} characters!`);
    }
  });
}
