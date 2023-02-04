import {
  Player,
  Box,
  StageType,
  BoxCountType,
  PlayersCountType,
} from "../enum/enum"

type PlayerBoxTypeCommon = {
  stage: StageType
  readyToShoot: boolean
  lockedToShootBox: boolean
}

export type BoxInfoType = {
  boxNum: Readonly<BoxCountType>
  playerNum: PlayersCountType
}

export type EachPlayerBoxType = {
  boxInfo: BoxInfoType
} & PlayerBoxTypeCommon

export type PlayerBoxType = {
  [B in Box]: EachPlayerBoxType
}

export type StateType = {
  playerCount: PlayersCountType
  currentPlayer: PlayersCountType
  playersScore: {
    [P in Player]: PlayerBoxType
  }
}

const playerBoxTypeCommon: PlayerBoxTypeCommon = {
  stage: 0,
  readyToShoot: false,
  lockedToShootBox: false,
}

const playerBoxType: PlayerBoxType = {
  box1: {
    boxInfo: {
      boxNum: 1,
      playerNum: 1,
    },
    ...playerBoxTypeCommon,
  },
  box3: {
    boxInfo: {
      boxNum: 3,
      playerNum: 1,
    },
    ...playerBoxTypeCommon,
  },
  box5: {
    boxInfo: {
      boxNum: 5,
      playerNum: 1,
    },
    ...playerBoxTypeCommon,
  },
  box7: {
    boxInfo: {
      boxNum: 7,
      playerNum: 1,
    },
    ...playerBoxTypeCommon,
  },
  box9: {
    boxInfo: {
      boxNum: 9,
      playerNum: 1,
    },
    ...playerBoxTypeCommon,
  },
}

export const initialState: StateType = {
  playerCount: 2,
  currentPlayer: 1,
  playersScore: {
    player1: playerBoxType,
    player2: playerBoxType,
    player3: playerBoxType,
    player4: playerBoxType,
    player5: playerBoxType,
    player6: playerBoxType,
  },
}
