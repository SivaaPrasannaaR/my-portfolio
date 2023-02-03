import { Player, Box } from "../enum/enum"

export type StateType = {
  playerCount: number
  playersScore: {
    [P in Player]: {
      [B in Box]: { stage: number; readyToShoot: boolean }
    }
  }
}

export const initialState: StateType = {
  playerCount: 2,
  playersScore: {
    player1: {
      box1: { stage: 0, readyToShoot: false },
      box3: { stage: 0, readyToShoot: false },
      box5: { stage: 0, readyToShoot: false },
      box7: { stage: 0, readyToShoot: false },
      box9: { stage: 0, readyToShoot: false },
    },
    player2: {
      box1: { stage: 0, readyToShoot: false },
      box3: { stage: 0, readyToShoot: false },
      box5: { stage: 0, readyToShoot: false },
      box7: { stage: 0, readyToShoot: false },
      box9: { stage: 0, readyToShoot: false },
    },
    player3: {
      box1: { stage: 0, readyToShoot: false },
      box3: { stage: 0, readyToShoot: false },
      box5: { stage: 0, readyToShoot: false },
      box7: { stage: 0, readyToShoot: false },
      box9: { stage: 0, readyToShoot: false },
    },
    player4: {
      box1: { stage: 0, readyToShoot: false },
      box3: { stage: 0, readyToShoot: false },
      box5: { stage: 0, readyToShoot: false },
      box7: { stage: 0, readyToShoot: false },
      box9: { stage: 0, readyToShoot: false },
    },
    player5: {
      box1: { stage: 0, readyToShoot: false },
      box3: { stage: 0, readyToShoot: false },
      box5: { stage: 0, readyToShoot: false },
      box7: { stage: 0, readyToShoot: false },
      box9: { stage: 0, readyToShoot: false },
    },
    player6: {
      box1: { stage: 0, readyToShoot: false },
      box3: { stage: 0, readyToShoot: false },
      box5: { stage: 0, readyToShoot: false },
      box7: { stage: 0, readyToShoot: false },
      box9: { stage: 0, readyToShoot: false },
    },
  },
}
