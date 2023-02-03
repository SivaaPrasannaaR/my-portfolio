import { Box, Player } from "../enum/enum"

export let currentPlayer = {
  playerTime: 1,
}

export const getPlayerName = (count: number): Player => {
  switch (count) {
    case 1:
      return Player.player1
    case 2:
      return Player.player2
    case 3:
      return Player.player3
    case 4:
      return Player.player4
    case 5:
      return Player.player5
    case 6:
      return Player.player6
    // To-do need to remove default later
    default:
      return Player.player1
  }
}
export const getBoxName = (count: number): Box => {
  switch (count) {
    case 1:
      return Box.box1
    case 3:
      return Box.box3
    case 5:
      return Box.box5
    case 7:
      return Box.box7
    case 9:
      return Box.box9
    // To-do need to remove default later
    default:
      return Box.box1
  }
}
