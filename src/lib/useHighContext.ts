import { useContext } from 'react'
import { getHighContextObject } from './getHighContextObject'

export function useHighContext<Y>(name: string) {
  const auth = useContext<Y>(getHighContextObject(name).context)
  return { ...auth }
}
