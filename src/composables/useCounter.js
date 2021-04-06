import { ref } from 'vue';

export const useCounter = (initialCount = 0, stepSize = 1) => {
  const count = ref(initialCount);

  const incrementCount = () => {
    count.value += stepSize;
  };

  return {
    count,
    incrementCount,
  };
};
