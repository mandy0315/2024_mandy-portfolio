export const useMainStore = defineStore('mainStore', () => {
  const allPaths = ['/', '/about', '/skills', '/works', '/contact'];
  const pageTransition = ref(''); // 'slide-left' or 'slide-right'

  const updatePageTransition = (val: string) => (pageTransition.value = val);

  return {
    allPaths,
    pageTransition,
    updatePageTransition
  };
});
