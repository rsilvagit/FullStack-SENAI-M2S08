import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext"; 
import { UserContext } from "../../Context/UserContext"; 

export default function FormEdicaoPerfil() {
  const { usuarioLogado } = useContext(AuthContext);
  const {editarUsuario} = useContext (UserContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const Enviar = (event) => {
    event.preventDefault();
    editarUsuario(nome, email, senha);
  };

  const handleNomeChange = (e) => setNome(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  return (
    <>
      <form onSubmit={Enviar}>

        <label>Nome:</label>
        <input
          required
          type="text"
          value={nome}
          onChange={handleNomeChange}
          placeholder={usuarioLogado.nome}
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={usuarioLogado.email}
        />
        <br />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={handleSenhaChange}
        />
        <br />

        <button type="submit">Salvar</button>
        <br />


      </form>
    </>
  );
}
