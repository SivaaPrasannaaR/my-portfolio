export const generateRandomNum = (): number => {
  const randNumInitial = Math.floor(Math.random() * 10) + 1
  return randNumInitial % 2 === 0 ? randNumInitial - 1 : randNumInitial
}
