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
  alive: boolean
  killed: boolean
}

export type EachPlayerBoxType = {
  boxInfo: BoxInfoType
} & PlayerBoxTypeCommon

export type PlayerBoxType = {
  [B in Box]: EachPlayerBoxType
}

export type PlayerStatusType = {
  pId: string
  lost: boolean
  diceValue: BoxCountType
}

export type ShooterStateType = {
  loading: boolean
  gameStarted: boolean
  playerCount: PlayersCountType
  roomId: string
  currentPlayer: PlayersCountType
  // playersRank: PlayersCountType[]
  playersStatus: {
    [P in Player]: PlayerStatusType
  }
  playersScore: {
    [P in Player]: PlayerBoxType
  }
}

const playerStatus: PlayerStatusType = {
  pId: "",
  lost: false,
  diceValue: 1,
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
      alive: false,
      killed: false,
    },
    ...playerBoxTypeCommon,
  },
  box3: {
    boxInfo: {
      boxNum: 3,
      playerNum: 1,
      alive: false,
      killed: false,
    },
    ...playerBoxTypeCommon,
  },
  box5: {
    boxInfo: {
      boxNum: 5,
      playerNum: 1,
      alive: false,
      killed: false,
    },
    ...playerBoxTypeCommon,
  },
  box7: {
    boxInfo: {
      boxNum: 7,
      playerNum: 1,
      alive: false,
      killed: false,
    },
    ...playerBoxTypeCommon,
  },
  box9: {
    boxInfo: {
      boxNum: 9,
      playerNum: 1,
      alive: false,
      killed: false,
    },
    ...playerBoxTypeCommon,
  },
}

export const initialState: ShooterStateType = {
  loading: false,
  gameStarted: false,
  playerCount: 2,
  roomId: "",
  currentPlayer: 1,
  // playersRank: [],
  playersStatus: {
    player1: playerStatus,
    player2: playerStatus,
    player3: playerStatus,
    player4: playerStatus,
    player5: playerStatus,
    player6: playerStatus,
  },
  playersScore: {
    player1: playerBoxType,
    player2: playerBoxType,
    player3: playerBoxType,
    player4: playerBoxType,
    player5: playerBoxType,
    player6: playerBoxType,
  },
}
