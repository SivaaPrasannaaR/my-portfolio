import { Player, Box, StageType, BoxCountType } from "../enum/enum"

export type EachPlayerBoxType = {
  boxNum: Readonly<BoxCountType>
  stage: StageType
  readyToShoot: boolean
  lockedToShootBox: boolean
}

export type PlayerBoxType = {
  [B in Box]: EachPlayerBoxType
}

export type StateType = {
  playerCount: number
  playersScore: {
    [P in Player]: PlayerBoxType
  }
}

export const playerBoxType: PlayerBoxType = {
  box1: { boxNum: 1, stage: 0, readyToShoot: false, lockedToShootBox: false },
  box3: { boxNum: 3, stage: 0, readyToShoot: false, lockedToShootBox: false },
  box5: { boxNum: 5, stage: 0, readyToShoot: false, lockedToShootBox: false },
  box7: { boxNum: 7, stage: 0, readyToShoot: false, lockedToShootBox: false },
  box9: { boxNum: 9, stage: 0, readyToShoot: false, lockedToShootBox: false },
}

export const initialState: StateType = {
  playerCount: 2,
  playersScore: {
    player1: playerBoxType,
    player2: playerBoxType,
    player3: playerBoxType,
    player4: playerBoxType,
    player5: playerBoxType,
    player6: playerBoxType,
  },
}
