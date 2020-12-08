import { newContextInfoContainer } from './createNewContext'

export const getHighContextObject = (contextName: string) => {
  let targetContextIndex = -1
  for (let i = 0; i < newContextInfoContainer.length; i++) {
    if (newContextInfoContainer[i].contextName === contextName) {
      targetContextIndex = i
    }
  }
  
  const highContext = newContextInfoContainer[targetContextIndex]
  return highContext
}
