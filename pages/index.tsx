import styles from "../styles/Formulario.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";
export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setcomPresente] = useState(1)
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao >
          <EntradaNumerica value={qtdPortas} onChange={(qtdPortas)=> setQtdPortas(qtdPortas)} text={"Qtde Portas?"}/>
        </Cartao>
      </div>
      <div>
        <Cartao >
        <EntradaNumerica value={comPresente} onChange={(novaPortaComPresente)=> setcomPresente(novaPortaComPresente)} text={"Porta com Presente?"}/>
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link passHref href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h1 className={styles.link}>Iniciar</h1>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
