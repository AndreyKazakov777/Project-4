import React from 'react';
import style from './footer.module.css';

const Footer = ({ state }) => {

  const active = state[2]
  const finished = state[3]
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.block}>
          <span className={style.text}>Active tasks: {active.tasks.length}</span>
          <span className={style.text}>Finished tasks: {finished.tasks.length}</span>
        </div>
        <div>
          <span className={style.text}>Kanban board by Andrey Kazakov, 2023</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;