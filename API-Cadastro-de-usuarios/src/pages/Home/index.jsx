import './style.css'
import Trash from '../../assets/trash.svg'


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
        <input name='Nome' type='text' />
        <input name='Idade' type='number' />
        <input name='E-mail' type='email' />
        <button type='buttton'>Cadastrar Estudantes</button>
      </form>

      {
        users.map(user => (

          <div key={user.id}>
            <div>
              <p>Nome: {user.name} </p>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email} </p>
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
