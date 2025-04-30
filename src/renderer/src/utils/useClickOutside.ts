import { onMounted, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';

export function useClickOutside(
  targetRef: Ref<HTMLElement | null>,
  callback: () => void
) {
  const handleClick = (event: MouseEvent) => {
    const target = targetRef.value;
    if (target && !target.contains(event.target as Node)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClick);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClick);
  });
}
