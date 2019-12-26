import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Test from './Test'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <div>
        <h1>I am a SSR App</h1>
        <p>If this works it will be lit.</p>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/test'>Test</Link>
        <Route path='/' component={Home} />
        <Route path='/test' component={Test} />
      </div>
    </BrowserRouter>
  )
}

export default App;