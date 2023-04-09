
import logoAzulEscuro from '../assets/logoAzulEscuro.png'
import axios from 'axios';

function Login() {

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cover bg-[url('assets/tela.png')]">
      <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" action="">
        <div className="flex justify-center">
          <img src={logoAzulEscuro} className="object-cover h-40 w-80" alt="Logo" />
        </div>
        <div className="flex flex-col space-y-2">        
          <label className="text-sm font-bold" htmlFor="email">E-mail</label>
          <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="text" 
          placeholder="Digite seu e-mail" name="email" id="email"/>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="password">Senha</label>
          <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="text"
           placeholder="Digite sua senha" name="password" id="password"/>  
        </div>

        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label className="text-sm font-light" htmlFor="remember">  Lembre-me</label>
        </div>
        
        <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md 
        hover:bg-blue-500 hoover:drop-shadow-md duration-300 ease-in">Login</button>

        <button className="w-full text-blue-600 text-sm font-light hover:underline">Fazer Cadastro</button>
      </form>
    </div>
 
  )
}

export default Login
