import Image from 'next/image';
import styles from '../../styles/doctorSimple.module.sass'
import doctorPhotoDefault from '/public/images/doctor-photo-default.svg'
import stetoIcon from '/public/icons/steto.svg'
import {Button} from '/components/Button/Button'
import locationIcon from '/public/icons/location_on.svg'

const DoctorPage=({doctorName}) => {
    return (
        <div className={styles.SimpleContainer}>
            <div className={styles.SimpleContainerBox1}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <h1>Doctor Page</h1> */}
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-4 d-flex flex-column justify-content-center">
                            <div className={styles.doctorName}>
                                <div className={styles.stetoIcon}>
                                    <Image src={stetoIcon} />
                                </div>
                                <h1>Dr. John Smith Silva</h1>
                                <p>
                                    CRM/RJ xx.xxxxx-x
                                </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <span>Equipe Médica</span>
                            <div className={styles.center_Box}>
                                <div className={styles.doctorPhoto}>
                                    <Image src={doctorPhotoDefault} />
                                </div>
                            </div>
                        </div>
                        <div className="col-4  d-flex flex-column justify-content-center">
                            <div className={styles.doctorSkills}>
                                <div className={styles.especialidades}>
                                    <p>
                                        Especilidades
                                    </p>
                                    <span>
                                        Diretor Médico, Oftalmologia Clínica
                                    </span>
                                    <br />
                                    <span>
                                        Retina Clínica e Vítreo, Retina Cirúrgica.
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Equipe Médica
                                    </p>
                                    <Button title={'Barra - Shopping Città América'} id={4} icon={locationIcon} />
                                    <Button title={"Tijuca - Hospital São Francisco "} id={4} icon={locationIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Doctor Page</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorPage;