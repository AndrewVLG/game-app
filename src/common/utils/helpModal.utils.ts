export const getAvailableHelpModal = (current?: string | null) => {
  const currentModal = current
  const listStr = localStorage.getItem('modals')
  const list = listStr ? JSON.parse(listStr) : {}
  const map = new Map(Object.entries(list))
  return {
    setDefault(property: string, value: any) {
      if (!map.has(property)) {
        map.set(property, value)
        localStorage.setItem('modals', JSON.stringify(Object.fromEntries(map)))
      }
    },
    setValue(value: any) {
      map.set(String(currentModal), value)
      localStorage.setItem('modals', JSON.stringify(Object.fromEntries(map)))
    },
    getValue(): boolean {
      return !!map.get(String(currentModal))
    },
  }
}
