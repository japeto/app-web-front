
import './styles.css'

import { useState } from 'react';
import { parserForm } from '../../helpers'
import { postTutors, postTeachers, postStudents } from '../../api';

const Form = (props)=>{

    const [user, setUser] = useState({
        document_type:"",
        document:"",
        title:"",
        fname:"",
        lname:"",
        gender:"",
        email:"",
        type:"",
        address:"",
        phone:"",
        cell:"",
    });

    const clearForm = evt => {
        setUser({
          document_type:"",
          document:"",
          title:"",
          fname:"",
          lname:"",
          gender:"",
          email:"",
          type:"",
          address:"",
          phone:"",
          cell:"",
        })
        evt.preventDefault();
    }

    const onSubmit = function(evt){
        let aForm = evt.target;
        let aUser = Object.assign({}, parserForm(aForm))
        if(aUser.type === "teachers"){
            postTeachers(aUser);
        }else if(aUser.type === "students"){
            postStudents(aUser);
        }else{
            postTutors(aUser);
        }
        evt.preventDefault();
    }

    const handleChange = evt =>{
        const value = evt.target.value;
        setUser({
            ...user,
            [evt.target.name]:value
        })
    }
    
    return (
        <form onSubmit={onSubmit}>
          <div className="input-group flex-nowrap mb-3">
            <select name="document_type" value={user.document_type} onChange={handleChange} >
              <option value="CC">CC</option>
              <option value="TT">TI</option>
              <option value="OC">OT</option>
            </select>
            <input type="text" autoComplete="off" name="document" placeholder="Idenficación" value={user.document} onChange={handleChange} />
          </div>
          <div className="input-group flex-nowrap mb-3">
            <input type="text" autoComplete="off" name="title" placeholder="Titulo" value={user.title} onChange={handleChange} /> 
            <input type="text" autoComplete="off" aria-label="fname" name="fname" placeholder="Nombre" value={user.fname} onChange={handleChange} />
            <input type="text" autoComplete="off" name="lname" placeholder="Apellidos" value={user.lname} onChange={handleChange} />
          </div>
          <div className="input-group flex-nowrap mb-3">
            <select name="gender" value={user.gender} onChange={handleChange} >
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
            <input type="email" autoComplete="off" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
          </div>
          <div className="input-group flex-nowrap mb-3">
            <input type="text" autoComplete="off" name="address" placeholder="Dirección"value={user.address} onChange={handleChange} /> <br/>
            <input type="text" autoComplete="off" name="phone" placeholder="Teléfono" value={user.phone} onChange={handleChange} /> <br/>
            <input type="text" autoComplete="off" name="cell" placeholder="Celular" value={user.cell} onChange={handleChange} /> <br/>
          </div>
          <div className="input-group flex-nowrap mb-3">
            <select name="type" value={user.type} onChange={handleChange} >
              <option value="teachers">Formadores</option>
              <option value="students">Tripulante</option>
              <option value="tutors">Tutores</option>
            </select>
          </div>
          
          <div className="btn-group">
            <button onClick={clearForm} > Borrar </button>
            <button type="submit" >Enviar</button>
          </div>
        </form>
    )
}

export default Form;