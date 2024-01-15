<script setup lang="ts">
const route = useRoute();
const allPaths = ['/', '/about', '/skills', '/works', '/contact'];
const currPath = computed(() => String(route.path));
const index = computed(() => allPaths.indexOf(currPath.value));
const prev = computed(() => allPaths[index.value - 1]);
const next = computed(() => allPaths[index.value + 1]);
</script>

<template>
  <div v-if="index !== -1" class="flex text-4xl justify-between">
    <NuxtLink v-show="index !== 0" :to="prev">
      <IconMingcuteArrowLeftFill />
    </NuxtLink>
    <NuxtLink v-show="index < allPaths.length - 1" :to="next">
      <IconMingcuteArrowRightFill />
    </NuxtLink>
  </div>
</template>
