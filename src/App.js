import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Banner from './components/banner/Banner';
import RowPost from './components/rowpost/RowPost';
export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <RowPost></RowPost>
    </div>
  );
}
