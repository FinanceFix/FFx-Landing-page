import { ref, onMounted, onUnmounted } from "vue";

export function useDevice() {
  const isMobile = ref(false);
  const isTablet = ref(false);

  const handleResize = () => {
    const width = window.innerWidth;
    isMobile.value = width <= 768; // Mobile
    isTablet.value = width > 768 && width <= 1024; // Tablette
  };

  onMounted(() => {
    handleResize(); // Appelle lors du montage
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return {
    isMobile,
    isTablet,
  };
}
