export type PlayersCountType = 1 | 2 | 3 | 4 | 5 | 6
export type BoxCountType = 1 | 3 | 5 | 7 | 9
export type StageType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export const boxNameArr = [1, 3, 5, 7, 9] as BoxCountType[]
export const playerNameArr = [1, 2, 3, 4, 5, 6] as PlayersCountType[]

export enum Player {
  player1 = "player1",
  player2 = "player2",
  player3 = "player3",
  player4 = "player4",
  player5 = "player5",
  player6 = "player6",
}

export enum Box {
  box1 = "box1",
  box3 = "box3",
  box5 = "box5",
  box7 = "box7",
  box9 = "box9",
}
