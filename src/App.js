import React from 'react';
import DefaultLayout from './layout/defaultLayout';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './views/router/contentRouter';
import SideBar from './components/Navbar';

function App() {
  return <DefaultLayout header={Header} footer={Footer} content={Content} sidebar={SideBar}></DefaultLayout>;
}

export default App;
