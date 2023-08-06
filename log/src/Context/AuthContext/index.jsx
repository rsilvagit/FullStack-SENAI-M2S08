import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([
    {
      nome: "Erico",
      email: "erico@gmail.com",
      senha: "1234",
    },
    {
      nome: "Josefino",
      email: "josef77@gmail.com",
      senha: "1234",
    },
    {
      nome : "Ana",
      email : "a@a",
      senha : "1"
    }
  ]);

  const login = (response) => {
    setLoggedIn(true);
    setUsuarioLogado(response);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  


  return (
    <AuthContext.Provider
      value={{ isLoggedIn, usuarioLogado, usuariosCadastrados, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
