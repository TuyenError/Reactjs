// import Sanpham from '../Sanpham/Sanpham';
import './App.css';
import React,{Component} from 'react';
import Header from '../Header/Header';
import Fooder from '../Footer/Footer';
import Content from '../Body/content';

function shop() {
  return (
    <div>
        
        <Header></Header>
        <Content></Content>
        <Fooder></Fooder>
    </div>
  );
}
export default shop;
