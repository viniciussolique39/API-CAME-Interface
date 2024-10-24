import { } from 'react'


function Tela() {


    return (

        <form>
        <div>
          <label htmlFor="usuario">Usuário:</label>
          <input type="text" id="usuario" name="usuario" required />

        </div>
  
        <div>
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha"required/>
        </div>
  
        <div>
          <label htmlFor="lembrar">
            <input type="checkbox" id="lembrar" name="lembrar"/>
            Lembre-me
          </label>
        </div>
  
        <button type="submit">Entrar</button>
      </form>
    )

}

export default Tela 
