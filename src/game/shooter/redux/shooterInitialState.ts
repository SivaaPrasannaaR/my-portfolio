import { Player, Box, StageType } from "../enum/enum"

export type PlayerInitialScoreType = {
  [B in Box]: { stage: StageType; readyToShoot: boolean }
}

export type StateType = {
  playerCount: number
  playersScore: {
    [P in Player]: PlayerInitialScoreType
  }
}

export const playerInitialScore: PlayerInitialScoreType = {
  box1: { stage: 0, readyToShoot: false },
  box3: { stage: 0, readyToShoot: false },
  box5: { stage: 0, readyToShoot: false },
  box7: { stage: 0, readyToShoot: false },
  box9: { stage: 0, readyToShoot: false },
}

export const initialState: StateType = {
  playerCount: 2,
  playersScore: {
    player1: playerInitialScore,
    player2: playerInitialScore,
    player3: playerInitialScore,
    player4: playerInitialScore,
    player5: playerInitialScore,
    player6: playerInitialScore,
  },
}
