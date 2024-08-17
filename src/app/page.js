import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Topo from '../componentes/topo/index'
import Secao1 from '../componentes/capa/index'
import Produto from '../componentes/produtos/index'


export default function Home() {
  return (
    
    <div className={styles.pai}>
      <Topo/>
      <Secao1/>
      <Produto/>
    </div>
  );
}
