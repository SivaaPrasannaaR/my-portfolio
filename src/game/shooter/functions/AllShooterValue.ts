import { Box, BoxCountType, Player, PlayersCountType } from "../enum/enum"

export let currentPlayer = {
  playerTime: 1,
}

export const getPlayerName = (count: PlayersCountType): Player => {
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
  }
}
export const getBoxName = (count: BoxCountType): Box => {
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
  }
}

/** Get the next player number */
export const getNextPlayer = (
  playerCount: PlayersCountType,
  prevPlayer: PlayersCountType
): PlayersCountType =>
  prevPlayer === playerCount
    ? (1 as PlayersCountType)
    : ((prevPlayer + 1) as PlayersCountType)

/** Get the previous player number */
export const getPreviousPlayer = (
  playerCount: PlayersCountType,
  currentPlayer: PlayersCountType
): PlayersCountType =>
  currentPlayer === 1 ? playerCount : ((currentPlayer - 1) as PlayersCountType)
