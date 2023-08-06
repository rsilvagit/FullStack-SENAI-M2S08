import { createContext, useContext } from "react";
import { AuthContext } from "../AuthContext";

export const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const {usuarioLogado} = useContext(AuthContext);

    const editarUsuario = (nome, email, senha) =>{
        usuarioLogado.nome = nome;
        usuarioLogado.email = email; 
        usuarioLogado.senha = senha;
        console.log(usuarioLogado.nome, usuarioLogado.email, usuarioLogado.senha);
        console.log("Acessou");
      }

    return (
        <UserContext.Provider value = {{editarUsuario}}>
            {children}
        </UserContext.Provider>
    );
};