import React from 'react'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { Helmet } from "react-helmet";
export default function App() {
  return (
    <div className='bg-[#242424]'>
      <Header/>
      <Body/>
    </div>
  )
}
