import React from 'react'
import SearchBar from './sidebar/SearchBar'
import Conversations from './sidebar/Conversations'
import LogoutButton from './sidebar/LogoutButton'

export default function Sidebar() {
  return (
    <div  className='flex flex-col'>
        <SearchBar/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}
