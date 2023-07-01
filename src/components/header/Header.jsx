import React, { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './header.module.css';
import avatar from './avatar.svg';
import arrow from './arrow.svg';
import Footer from '../footer/Footer';



const Header = ({ state }) => {
  const [visible, setVisible] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>Awesome Kanban Board</h1>
        <div className={style.profile}>
          <img src={avatar} alt="аватар" />

          <button
            className={style.button}
            onClick={() => setVisible(!visible)}
          >
            <img src={arrow} alt="стрелка" className={visible ? style.arrow : ' '} />
            <div className={visible ? style.menu : style.noMenu}>

              <Link>Profile</Link>
              <Link>Log Out</Link>

            </div>
          </button>
        </div>
      </div >
      <Outlet />

      <Footer state={state}/>
    </header >
  );
}

export default Header;