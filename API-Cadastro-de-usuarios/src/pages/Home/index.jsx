import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function Home() {

 const [ users, setUsers] = useState([])

const inputName =  useRef()
const inputAge =  useRef()
const inputEmail =  useRef()

 async function getUsers(){
  const usersFromApi = await api.get('/usuarios')

  setUsers(usersFromApi.data)
  }


  async function createUsers(){
    //const usersFromApi = await api.get('/usuarios')
  
    console.log(inputAge)
    }


  useEffect(() => {
      getUsers()
  }, [])

  return (

    <div className='container'>

      <form>
        <h1>Cadastro de Estudantes</h1>
        <input placeholder='Informe um Nome' name='Nome' type='text' ref={inputName}/>
        <input placeholder='Informe uma idade' name='Idade' type='number' ref={inputAge} />
        <input placeholder='Informe um e-mail' name='E-mail' type='email' ref={inputEmail} />
        <button type='buttton' onClick={createUsers}>Cadastrar Estudantes</button>
      </form>

      {
        users.map(user => (

          <div key={user.id} className="card">
            <div>
              <p>Nome: <span>{user.name}</span> </p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email} </span></p>
            </div>
            <button>
              <img src={Trash} />
            </button>
          </div>


        ))
      }




    </div>

  )
}

export default Home
