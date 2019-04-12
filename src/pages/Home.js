import React from 'react';
import { engineList } from '../utils/constants';
import Header from '../components/Header';
import Search from '../components/Search';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Search engineList={engineList} />
      <Navigation />
    </div>
  );
}
