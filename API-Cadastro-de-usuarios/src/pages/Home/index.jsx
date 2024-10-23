import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function Home() {

  const users = [{
    id: '12345657jsj',
    name: 'Vinicius',
    age: 18,
    email: 'Vinicius.solique@ganso.com.br'
  }, {

    id: '123456578vsj',
    name: 'Ingrid',
    age: 28,
    email: 'ingrid.solique@gmail.com'
  }
  ]

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
