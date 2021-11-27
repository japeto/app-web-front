
import {useEffect, useState } from 'react';
import './styles.css';
import List from '../List';
import Form from '../Form';

import {  getStudents } from '../../api';

 import {
   BrowserRouter as Router,
   Routes,
   Route,
   NavLink
 } from 'react-router-dom'

const App = () =>{
  const project = 'MISION TIC 2022';
  const [message, setMessage] = useState("Bienvenidos");
  const [userList, setUserList] = useState([]);

  useEffect(()=>{
    document.title = `${message}`;
  })

  return (
    <Router>
      <div className="container">
        <header className="App-header">
          <h1>{project}</h1>
          <h3>{message}</h3>
        </header>
        
        <div className="App-buttons">
          <NavLink onClick={()=>{
            setMessage("Bienvenidos");}}
            className="Link" to="/">Formulario</NavLink>

          <NavLink onClick={()=>{
            setMessage("Listado Tripulantes");

            getStudents().then((resp)=>{
              const data = resp.data;
              setUserList(data.filter((user)=>{
                return user.type === "students"
              }));
            })
          }} className="Link" to="/students">Tripulantes</NavLink>
        </div>
      
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/students" element={<List list={userList}/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
