import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([
    {
      nome: "Manoel",
      email: "manoel@gmail.com",
      senha: "1234",
    },
    {
      nome: "Jocó José",
      email: "joseff@gmail.com",
      senha: "1234",
    },
    {
      nome : "Marta",
      email : "martabb@gmail.com",
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
