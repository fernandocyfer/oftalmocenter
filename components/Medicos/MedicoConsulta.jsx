
import MedicoSingle from "./MedicoSingle";
import {Button} from "../Button/Button";
import line from '/public/images/line.svg'
import Image from "next/image";
import styles from '/styles/medicos.module.sass'

const medicoConsulta=({medico}) => (<>
    <div className={styles.docConsulta}>
        <div className={'d-flex align-items-center'}>
            <MedicoSingle medico={medico} />
            <div className={styles.boxCall}>
                <div className={'d-flex flex-column justify-content-between h-100'}>
                    <Button id={1} title={'Marcar Consulta'} />
                    <Image src={line} width={172} height={2} />
                    <p>
                        Unidade barra da tijuca
                    </p>
                </div>
            </div>
        </div>
    </div>

</>)


export default medicoConsulta;
