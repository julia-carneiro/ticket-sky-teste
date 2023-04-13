
import logoAzulEscuro from '../assets/logoAzulEscuro.png'
import axios from 'axios';
import { Link, redirect } from 'react-router-dom';


function Cadastro() {

  function cadastraUsuario(){
    // var email = (document.getElementById("email") as HTMLInputElement).value;
    // var senha = (document.getElementById("password") as HTMLInputElement).value;

    // axios({
    //   method: 'post',
    //   url: '/api/insertUser',
    //   data: {
    //     nome: '',
    //     email: email,
    //     senha: senha
    //   }
    // })
    // .then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });

    window.location.href = '/usuarios';
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cover bg-[url('assets/tela.png')]">
      <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" action="">
        <div className="flex justify-center">
            <img src={logoAzulEscuro} className="object-cover h-20 w-40" alt="Logo" />
        </div>
        <h1 className="text-center text-2xl text-blue-800 font-display font-semibold">Cadastro de cliente</h1>
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

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="passwordConfimation">Confirme sua Senha</label>
          <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="text"
           placeholder="Confirme sua senha" name="passwordConfimation" id="passwordConfimation"/>  
        </div>

        <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md 
        hover:bg-blue-500 hoover:drop-shadow-md duration-300 ease-in" type="button" onClick={cadastraUsuario}>Fazer Cadastro</button>
      
      </form>
    </div>
 
  )
}

export default Cadastro
