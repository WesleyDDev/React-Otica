import styles from './topo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/img/logo.png"


export default function Topo (){
    return(

        <div className={styles.topo}>
            <div className={styles.logo}>
            <Image className={styles.logoimg} src={Logo}/>
            </div>
            <div className={styles.links}>
                <Link className={styles.a} href="#">Sobre</Link>
                <Link className={styles.a} href="#">Contato</Link>
                <Link className={styles.a} href="#">Produtos</Link>
            </div>
        </div>
    )
}