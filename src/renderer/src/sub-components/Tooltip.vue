<template>
  <teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visible"
        :style="tooltipStyle"
        class="fixed bg-red-500 text-white border border-red-500 rounded px-2 py-1 text-xs z-50 whitespace-nowrap pointer-events-auto"
      >
        {{ content }}
        <span
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-red-500"
        ></span>
      </div>
    </Transition>
  </teleport>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue';

  const props = defineProps<{
    targetEl: HTMLElement | null;
    visible: boolean;
    content: string;
  }>();

  const tooltipX = ref(0);
  const tooltipY = ref(0);

  function updatePosition() {
    if (!props.targetEl) return;
    const rect = props.targetEl.getBoundingClientRect();
    tooltipX.value = rect.right + 8;
    tooltipY.value = rect.top + rect.height / 2;
  }

  const tooltipStyle = computed(() => ({
    left: `${tooltipX.value}px`,
    top: `${tooltipY.value}px`,
    transform: 'translateY(-50%)',
  }));

  // Listen for window resize and scroll events to update tooltip position
  let resizeObserver: ResizeObserver | null = null;
  const handleWindowChange = () => {
    if (props.visible) {
      updatePosition();
    }
  };

  onMounted(() => {
    window.addEventListener('resize', handleWindowChange);
    window.addEventListener('scroll', handleWindowChange, true);
    if (props.targetEl) {
      resizeObserver = new ResizeObserver(() => {
        handleWindowChange();
      });
      resizeObserver.observe(props.targetEl);
    }
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleWindowChange);
    window.removeEventListener('scroll', handleWindowChange, true);
    if (resizeObserver && props.targetEl) {
      resizeObserver.disconnect();
    }
  });

  // Update position when the tooltip becomes visible
  watch(
    () => props.visible,
    (newVal) => {
      if (newVal) {
        nextTick(() => {
          updatePosition();
        });
      }
    }
  );
</script>
