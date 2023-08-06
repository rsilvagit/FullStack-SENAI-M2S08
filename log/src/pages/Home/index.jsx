import './styles.css'
import { AuthContext } from '../../Context/AuthContext'; 
import { useContext } from 'react';

export default function Home () {
const {usuarioLogado} = useContext(AuthContext);
const prefixo = usuarioLogado.email.split("@").shift();

    return (
        <>
        <h1>Home</h1>
        <h3>Bem vindo usuário {prefixo}</h3>
        </>
    )
}