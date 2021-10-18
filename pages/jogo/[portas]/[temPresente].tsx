import styles from "../../../styles/Jogo.module.css";
import { useEffect } from "react";
import Porta from "../../../components/Porta";
import { criarPortas, atualizarPortas } from "../../../functions/porta";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PortaModel from "../../../model/porta";

export default function Jogo() {
  const router = useRouter();
  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([] as any);

  useEffect(() => {
    const qtdPortas = Number(router.query.portas);
    const temPresente = Number(router.query.temPresente);
    const qtdPortasValida = qtdPortas>=3 && qtdPortas <=100
    const temPresenteValido = temPresente >=1 && temPresente<=qtdPortas
      setValido(qtdPortasValida && temPresenteValido)
  }, [portas]);

  useEffect(() => {
    const qtdPortas = Number(router.query.portas);
    const temPresente = Number(router.query.temPresente);
    setPortas(criarPortas(qtdPortas, temPresente));
    //router.query é chamado 2 vezes ao renderizar o componente então fica dentro do useeffect pra ficar "vigiado" quando for chamado
  }, [router?.query]);

  function renderizarPortas() {
    return portas.map((porta: PortaModel) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) => {
            setPortas(atualizarPortas(portas, novaPorta));
          }}
        />
      );
    });
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{valido?renderizarPortas(): <h1>Valores inválidos</h1>}</div>

      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
