export const omitText = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str
  } else {
    return str.substring(0, maxLength) + '…'
  }
}
