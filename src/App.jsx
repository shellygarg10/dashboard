import React from 'react'
import './App.css'
import Dashboard from './component/Dashboard/Dashboard'
import Sidebar from './component/Sidebar/Sidebar'

function App() {
  return (
    <div className='bg-stone-100 text-stone-950 flex gap-4'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App
