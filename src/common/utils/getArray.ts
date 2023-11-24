export function getArray<T>(count: number, value: T): Array<T> {
  return new Array(count).fill(value)
}
