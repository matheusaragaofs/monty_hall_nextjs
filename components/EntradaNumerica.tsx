import styles from '../styles/EntradaNumerica.module.css'


interface EntradaNumericaProps {
    value: number
    text: string
    onChange: (newValue: number) => void
}


export default function EntradaNumerica (props: EntradaNumericaProps){
    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button onClick={()=> props.onChange(props.value+1)} className={styles.btn}>+</button>
                <button onClick={()=> props.onChange(props.value-1)} className={styles.btn}>-</button>
            </div>

        </div>
    )
}