import { NavLink } from "react-router-dom";
import './styles.css'
import { AuthContext } from "../../Context/AuthContext"; 
import { useContext } from "react";


export default function Header() {
  const {logout} = useContext(AuthContext);
  const {isLoggedIn} = useContext (AuthContext)
  const Logout = () => logout();

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          { !isLoggedIn && 
            <li>
            <NavLink to="login">Login</NavLink>
          </li>}
          <li>
            <NavLink to="contato">Contato</NavLink>
          </li>
          { isLoggedIn &&
            <li>
            <NavLink to="perfil">Perfil</NavLink>
          </li>}
          <li>
            <button onClick={Logout}>Sair</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
