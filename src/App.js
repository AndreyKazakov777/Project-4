import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Account from './components/account/Account';
import InsideTask from './components/insideTask/InsideTask';
import './App.css';
import Loader from "./components/UI/loader/Loader";

function App() {
  const [state, setState] = useState([
    {
      title: 'Backlog',
      tasks: [],
    },
    {
      title: 'Ready', tasks: [],
    },
    {
      title: 'In Progress', tasks: [],
    },
    {
      title: 'Finished', tasks: [],
    }
  ]);

  useEffect(() => {
    const tasks = localStorage.getItem('state');
    setState(JSON.parse(tasks))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state))
  }, [state]);


  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return <Loader />
  }

  return (
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Header state={state}/>}>
              <Route path='account' element={<Account />} />
              <Route index element={<Main state={state} setState={setState} />} />
              <Route  path='/:id' element={<InsideTask state={state} setState={setState} />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
