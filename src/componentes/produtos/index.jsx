import styles from './produto.module.css'
import Image from 'next/image'
import Link from 'next/link'
import oc from "@/img/oculos04.png"



export default function Produto () {
    return(

        <div className={styles.pai}>
            <div className={styles.conteudo}>
                <h1>Nossos Produtos</h1>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

            </div>
            <div className={styles.card}>
                <div className={styles.card1}>
                    <h1>kajshdk</h1>
                    <Image className={styles.img} src={oc}/>
                    <p>R$ 500,00</p>
                </div>
                <div className={styles.card1}>
                    <h1>kajshdk</h1>
                    <Image className={styles.img} src={oc}/>
                    <p>R$ 500,00</p>
                </div>
                <div className={styles.card1}>
                    <h1>kajshdk</h1>
                    <Image className={styles.img} src={oc}/>
                    <p>R$ 500,00</p>
                </div>
                <div className={styles.card1}>
                    <h1>kajshdk</h1>
                    <Image className={styles.img} src={oc}/>
                    <p>R$ 500,00</p>
                </div>
                <div className={styles.descricao}>
                    <h1>Todos os nossos produtos incluem:</h1>
                    <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}