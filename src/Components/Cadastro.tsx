import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import logoAzulEscuro from '../assets/logoAzulEscuro.png';
import axios from 'axios';
import { useState } from 'react';

function Cadastro() {
  /*const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = handleSubmit((data) => {
    cadastraUsuario();
  });

  function cadastraUsuario() {
    axios({
      method: 'post',
      url: '/api/insertUser',
      data: {
        email,
        password,
        //passwordConfirmation
      }
    })
      .then((response) => {
        console.log(response);
        toast.success('Usuário cadastrado com sucesso!');
      }, (error) => {
        console.log(error);
        toast.error('Não foi possível cadastrar o usuário');
      });*/

  window.location.href = '/usuarios';



  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cover bg-[url('assets/tela.png')]">
      <ToastContainer />
      <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" /*onSubmit={onSubmit}*/ action="" >
        <div className="flex justify-center">
          <img src={logoAzulEscuro} className="object-cover h-20 w-40" alt="Logo" />
        </div>
        <h1 className="text-center text-2xl text-blue-800 font-display font-semibold">Cadastro de cliente</h1>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="email">E-mail</label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400" type="text"
            placeholder="Digite seu e-mail" name="email" id="email"
          //value={email} onChange={(e) => setEmail(e.target.value)} required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="password">Senha</label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400" type="password"
            placeholder="Digite sua senha" name="password" id="password"
          //value={password} onChange={(e) => setPassword(e.target.value)} required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="passwordConfirmation">Confirme sua Senha</label>
          <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="password"
            placeholder="Confirme sua senha" name="passwordConfirmation" id="passwordConfirmation" required
          />
        </div>

        <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md 
        hover:bg-blue-500 hoover:drop-shadow-md duration-300 ease-in" type="submit">Fazer Cadastro</button>

      </form>
    </div>

  );
}

export default Cadastro;
