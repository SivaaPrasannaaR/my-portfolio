export const commonErrorCode = (err: { code: string }) => {
  const errorCode = err.code
  switch (errorCode) {
    case "ERR_NETWORK":
      console.error(errorCode, "- Please check your network or DB connection")
      break
    default:
      console.error(errorCode, "- Error has occurred")
  }
}
