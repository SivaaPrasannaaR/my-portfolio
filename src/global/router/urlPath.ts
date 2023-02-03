// url path for navigating to screen

export const routingUrl = {
  urlNotFound: {
    label: "urlNotFound",
    path: "*",
    displayName: "URL Not Found",
  },
  home: {
    label: "home",
    path: "/home",
    displayName: "Home",
  },
  signIn: {
    label: "signIn",
    path: "/signIn",
    displayName: "Sign In",
  },
  signUp: {
    label: "signUp",
    path: "/signUp",
    displayName: "Sign Up",
  },
  portfolio: {
    label: "portfolio",
    path: "/portfolio",
    displayName: "Portfolio",
  },
  bingo: {
    label: "bingo",
    path: "/bingo",
    displayName: "Bingo Board",
  },
  studyMaterial: {
    label: "studyMaterial",
    path: "/studyMaterial",
    displayName: "Study Material",
  },
  expenseTracker: {
    label: "expenseTracker",
    path: "/expenseTracker",
    displayName: "Expense Tracker",
  },
  betterShopping: {
    label: "betterShopping",
    path: "/betterShopping",
    displayName: "Better Shopping",
  },
  betterShoppingDetail: {
    label: "betterShoppingDetail",
    path: "/betterShopping/detail",
    displayName: "Better Shopping Detail",
  },
  gameShooter: {
    label: "gameShooter",
    path: "/gameShooter",
    displayName: "Shooter Game",
  },
}

// // url path for navigating to screen
// const obj: any = { urlNotFound: "*", root: "/" }
// const url = () => {
//   Object.keys(urlAccessLabel).flatMap((key) => (obj[key] = `/${key}`))
//   console.log("obj", obj)
//   return obj
// }

// export const routingUrl = url()
