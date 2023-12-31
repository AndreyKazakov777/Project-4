import React from 'react';
import Add from '../add/Add';
import Task from '../task/Task';
import style from './board.module.css';

const Board = ({ state, ...props }) => {
  return (
    <>
      {state.map(item =>
        <div key={item.title} className={style.board}>
          <h2> {item.title} </h2>
          {item.tasks.length
            ? item.tasks.map(item =>
              <Task key={item.id} id={item.id}>
                {item.task}
              </Task>
            )
            : <div className={style.missing}>no tasks</div>
          }
          <Add
            alt='+ add card'
            title={item.title}
            tasks={item.tasks}
            state={state}
            setState={props.setState}
          > add card </Add>
        </div>
      )}
    </>
  );
}

export default Board;
