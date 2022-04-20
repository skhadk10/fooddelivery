import React from 'react'
import {NavContainer,NavItem, NavWholeContainer} from './HomeCss.js'
import SearchBar from './SearchBar/SearchBar.js'
const Home = () => {
  return (
      <NavWholeContainer>
    <NavContainer>
        <NavItem>Home</NavItem>
        <NavItem>Menu</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Shop</NavItem>
    </NavContainer>
    <SearchBar/>
    </NavWholeContainer>
  )
       
    
}

export default Home