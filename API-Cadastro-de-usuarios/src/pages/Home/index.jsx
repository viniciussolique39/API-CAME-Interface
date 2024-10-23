import { useEffect, useState } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function Home() {

 const [ users, setUsers] = useState([])

 async function getUsers(){
  const usersFromApi = await api.get('/usuarios')

  setUsers(usersFromApi.data)
  }

  useEffect(() => {
      getUsers()
  }, [])

  return (

    <div className='container'>

      <form>
        <h1>Cadastro de Estudantes</h1>
        <input placeholder='Informe um Nome' name='Nome' type='text' />
        <input placeholder='Informe uma idade' name='Idade' type='number' />
        <input placeholder='Informe um e-mail' name='E-mail' type='email' />
        <button type='buttton'>Cadastrar Estudantes</button>
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
