import Image from 'next/image'
import styles from '../../styles/singleContainer.module.sass'
import estetoIcon from '../../public/icons/esteto-icon.svg'

const SingleContainer=({children,image,label,bgColor='#F0F9FF'}) => {
    return (
        <div className={styles.singleContainer} style={{backgroundColor: `${bgColor}`}}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-1 d-flex flex-column align-items-center">
                        <p className={styles.verticalTitle}>
                            {label? label:'Médicos'}
                        </p>
                        <div className={styles.titleBar} />
                    </div>
                    <div className="col-11 d-flex flex-column ">
                        <div className="row">
                            <div className={styles.titleContent}>
                                <div className="col-12 d-flex align-items-flex-start">
                                    <div className={styles.titleIcon}>
                                        <Image src={image? image:estetoIcon} />
                                    </div>
                                    <h1>
                                        Nossa equipe médica
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className={styles.callText}>
                                A Americas Oftalmocenter conta uma equipe de médicos oftalmologistas prontos para realizar o tratamento em diversas especialidades. Por isso, conheça os integrantes da nossa equipe médica.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleContainer