export const getAvailableHelpModal = (current: string | null) => {
  const listStr = localStorage.getItem('modals')
  const list = listStr ? JSON.parse(listStr) : {}
  const map = new Map(Object.entries(list))
  return {
    setDefaultState(value: boolean) {
      if (current && !map.has(current)) {
        map.set(current, value)
        localStorage.setItem('modals', JSON.stringify(Object.fromEntries(map)))
      }
    },
    setState(value: boolean) {
      map.set(String(current), value)
      localStorage.setItem('modals', JSON.stringify(Object.fromEntries(map)))
    },
    getState(): boolean {
      return !!map.get(String(current))
    },
  }
}
