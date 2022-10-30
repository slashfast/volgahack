import { Component } from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { TableCompany } from './components/TableCompany/TableCompany';
import { FirstTableProduct } from './components/FirstTableProduct/FirstTableProduct';
import { SecondTableProduct } from './components/SecondTableProduct/SecondTableProduct';
import { ThirdTableProduct } from './components/ThirdTableProduct/ThirdTableProduct';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="body">
      <div> <Header /></div>
      <div> <TableCompany /></div>
      <div> <FirstTableProduct /></div>
      <div> <SecondTableProduct /> </div>
      <div> <ThirdTableProduct /> </div>
      <div> <Footer /></div>
    </div>
  );
}

export default App;
