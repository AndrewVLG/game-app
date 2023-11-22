type Callback<T, B = T> = (value: T, index: number, array: T[]) => B

export function getArray<T = any, B = T>(
  count: number,
  value: T,
  cb?: Callback<T, B>
): Array<B> {
  return new Array(count).fill(value).map(cb ? cb : (v) => v)
}
