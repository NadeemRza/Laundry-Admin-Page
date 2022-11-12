import React from 'react';
import Cards from './components/cards/Cards';
import ChartSection from './components/chartSection/ChartSection';
import Header from './components/header/Header';
import InfoHead from './components/infohead/InfoHead';
import NavigationBar from './components/navigation bar/NavigationBar';

const App = () => {
  return (
    <div>
      <Header />
      <InfoHead />
      <Cards />
      <ChartSection />
      <NavigationBar />
    </div>
  )
}

export default App;