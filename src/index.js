import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from './components/Experience';
import Footer from './components/Footer';
import mydata from './mydata';
import Background from './components/Background';

function Portfolio() {
    const [check, setCheck] = useState(false);
    
    console.log(check);
    return (
      <div className="main">
        <Header mydata={mydata}/>
        <Hero mydata={mydata} />
        <Background mydata={mydata} />
        <Experience mydata={mydata} />
        <Footer />
      </div>
    )
}
  // ========================================
  
  ReactDOM.render(
    <Portfolio/>,
    document.getElementById('root')
  );
  