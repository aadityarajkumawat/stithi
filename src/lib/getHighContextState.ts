import { contextStates } from './contextStates'

export const getContextState = (contextStateName: string) => {
  let targetIndex = -1
  for (let i = 0; i < contextStates.length; i++) {
    if (contextStates[i].contextStateName === contextStateName) {
      targetIndex = i
    }
  }

  const contextState = contextStates[targetIndex].newContextState
  return contextState
}
