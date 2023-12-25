export const getAvailableHelpModal = (current: string | null) => {
  const listStr = localStorage.getItem('modals')
  const list = listStr ? JSON.parse(listStr) : {}
  const map = new Map(Object.entries(list))
  return {
    setDefault(value: any) {
      if (current && !map.has(current)) {
        map.set(current, value)
        localStorage.setItem('modals', JSON.stringify(Object.fromEntries(map)))
      }
    },
    setValue(value: any) {
      map.set(String(current), value)
      localStorage.setItem('modals', JSON.stringify(Object.fromEntries(map)))
    },
    getValue(): boolean {
      return !!map.get(String(current))
    },
  }
}
