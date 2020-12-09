import { newContextInfoContainer } from './createNewContext'

export function getHighContextObject<I>(contextName: string) {
  let targetContextIndex = -1
  for (let i = 0; i < newContextInfoContainer.length; i++) {
    if (newContextInfoContainer[i].contextName === contextName) {
      targetContextIndex = i
    }
  }

  const highContext = newContextInfoContainer[targetContextIndex]
  const initialState: I = highContext.initialState
  return { ...highContext, initialState } as const
}
