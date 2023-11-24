export const areEqual = (first: unknown, second: unknown) => {
  if (!first || !second) {
    return false
  }
  const str1 = JSON.stringify(first)
  const str2 = JSON.stringify(second)
  return str1 === str2
}
