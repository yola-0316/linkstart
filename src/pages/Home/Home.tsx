import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Navigation from './components/Navigation/Navigation';

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Search />
      <Navigation />
    </div>
  );
}
