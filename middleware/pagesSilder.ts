import { useMainStore } from '@/stores';
export default defineNuxtRouteMiddleware((to, from) => {
  const mainStore = useMainStore();
  const toIndex = mainStore.allPaths.indexOf(to.path);
  const fromIndex = mainStore.allPaths.indexOf(from.path);
  const pageTransition = toIndex > fromIndex ? 'slide-left' : 'slide-right';
  mainStore.updatePageTransition(pageTransition);
});
