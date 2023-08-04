import React from "react";

const Login = () => {
    return (
        <form className="form-signin">
        <img src="src\assets\healthcare-and-medical.png" alt="Ícone médico" className="mb-3"width="100" height="100" />
        <h1 className="h3 mb-3 font-weight-normal">Medical Services</h1>
        <label htmlFor="inputUser" className="sr-only"></label>
        <input type="email" id="inputUser" className="form-control" placeholder="E-mail" required="" autofocus="">
        </input>
        <label htmlFor="inputPassword" className="sr-only"></label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required=""></input>
        <div>
            <a href="#" class="btn btn-link" data-toggle="tooltip" data-placement="top" title="Efeito ao Clicar">
                Esqueci minha senha
            </a>
        </div>
        <button className="btn btn-lg btn-primary btn-block mx-3 mt-3" type="submit">Login</button>
        
    </form>
    )
}
export default Login;