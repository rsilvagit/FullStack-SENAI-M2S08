import { AuthContext } from "../../Context/AuthContext"; 
import { useContext } from "react";
import Forms from "../../Components/Forms";
import './styles.css'
import { UserProvider } from "../../Context/UserContext"; 

export default function Perfil() {
  const { usuarioLogado } = useContext(AuthContext);
  const prefixo = usuarioLogado.email.split("@").shift();

  return (
    <div className="perfil">
      <h1>Perfil de usuário</h1>
      <h4>User : {prefixo}</h4>
      <br />
      <br />    
      <br />
      <h3>Editar dados do perfil:</h3>
      <UserProvider>
      <FormEdicaoPerfil/>
      </UserProvider>
    </div>
  );
}