import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { doAllContextWork } from './stithi-config/doContextThing'

doAllContextWork()

ReactDOM.render(<App />, document.getElementById('root'))
