import { computed } from "vue"

export function useSlotsHotfix<T>(slots: T) {
  return computed(() => {
    if (typeof slots === 'object' && Array.isArray(slots) && !slots.length) {
      return [undefined]
    }
    return slots
  })
}