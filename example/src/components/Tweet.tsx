import React from 'react'
import { useHighContext } from 'stithi'

interface TweetProps {}

const Tweet: React.FC<TweetProps> = ({}) => {
  const { isShown, showTweet, hideTweet } = useHighContext<any>('tweet')
  return (
    <div>
      <h1>{isShown ? 'I am a tweet' : 'No tweets'}</h1>
      <button
        onClick={() => {
          if (isShown) {
            hideTweet()
          } else {
            showTweet()
          }
        }}
      >
        Toggle
      </button>
    </div>
  )
}
export default Tweet
