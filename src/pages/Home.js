import React from 'react';
import Setting from '../components/Setting/Setting';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {
  return (
    <div className="home-page">
      <Setting />
      <Header />
      <Search />
      <Navigation />
    </div>
  );
}
