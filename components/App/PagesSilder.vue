<script setup lang="ts">
import { useMainStore } from '@/stores';

const mainStore = useMainStore();
const route = useRoute();

const index = computed(() => mainStore.allPaths.indexOf(String(route.path)));

const prev = async () => {
  const newIndex = index.value - 1 < 0 ? mainStore.allPaths.length - 1 : index.value - 1;
  await navigateTo(mainStore.allPaths[newIndex]);
};
const next = async () => {
  const newIndex = index.value + 1 >= mainStore.allPaths.length ? 0 : index.value + 1;
  await navigateTo(mainStore.allPaths[newIndex]);
};
</script>

<template>
  <div v-if="index !== -1" class="flex text-4xl justify-between">
    <button @click="prev">
      <IconMingcuteArrowLeftFill />
    </button>
    <button @click="next">
      <IconMingcuteArrowRightFill />
    </button>
  </div>
</template>
