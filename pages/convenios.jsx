import {Button} from "../components/Button/Button";
import CardDoctor from "../components/Cards/CardDoctor";
import Container from "../components/Container/Container";
import ConveniosContainer from "../components/Container/ConveniosContainer";
import SingleContainer from "../components/SingleContainer/SingleContainer";
import styles from "../styles/convenios.module.sass";
import locationIcon from '/public/icons/location-icon.svg'
import pcIcon from '../public/icons/pc-blue-icon.svg'
import phoneIcon from '../public/icons/phone-blue-icon.svg'
import whatsAppIcon from '../public/icons/whatsapp-blue-icon.svg'
import doctor2 from '/public/images/doctor2.svg'
import doctor3 from '/public/images/doctor3.svg'
import doctor4 from '/public/images/doctor4.svg'
import doctor5 from '/public/images/doctor5.svg'
import Image from "next/image";

export default function Convenios() {
  return (
    <>
      <div className={styles.Convenios}>
        <SingleContainer />
        <div className="container" style={{marginBottom: '2rem'}}>
          <div className="row">
            <div className="col-12 d-flex justify-content-center flex-wrap">
              <ConveniosContainer />
            </div>
          </div>
        </div>

        <div className={styles.callConv}>
          <p>
            Não achou seu convênio?
          </p>
          <Button id={1} title={'Consulte nossos convênios'} />
        </div>
      </div>
      <div className={styles.DoctorsContainer}>
        <div className="container">
          <div className={styles.DoctorsRow}>
            <SingleContainer bgColor="#FFFFFF" />
            <Button id={1} title={'Ver todos  os médicos'} />
          </div>
          <div className={styles.DoctorsRowTwo}>
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-center flex-wrap" style={{marginBottom: '2rem'}}>
                  <CardDoctor />
                  <CardDoctor photo={doctor2} />
                  <CardDoctor photo={doctor3} />
                  <CardDoctor photo={doctor4} />
                  <CardDoctor photo={doctor5} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Container id={2} label={'Nossas Clinicas'} content={'Escolha uma de nossas clínicas oftalmológicas mais próxima de você:'} title={'A American Oftalmocenter conta com 5 unidades no Rio de Janeiro.'} idLabel={2}>
            <Button title={'Unidade Barra da Tijuca'} id={4} icon={locationIcon} />
            <Button title={'Unidade Bota fogo Zona Sul'} id={4} icon={locationIcon} />
            <Button title={'Unidade Del Castilho Zona Norte'} id={4} icon={locationIcon} />
            <Button title={'Unidade Méier'} id={4} icon={locationIcon} />
            <Button title={'Unidade Tijuca'} id={4} icon={locationIcon} />
          </Container>
        </div>
      </div>
      <div className={styles.SectionThirteen}>
        <div className="container">
          <div className={`col-12 justify-content-center d-flex flex-column ${styles.boxContact}`} style={{padding: '2rem auto'}}>
            <Container label={'FALE AGORA CONOSCO'} title={'Agende rapidamente sua consulta ou tire todas as suas dúvidas.'} content={'Nossa equipe está pronta para lhe atender.'} />
            <div className="col-12 d-flex flex-column" style={{padding: '2rem 0'}}>
              <div className="col-12">
                <div className={styles.ContactEquipeMedica}>
                  <div className={styles.ContactItemEquipeMedica}>
                    <div className={styles.ContactIcon}>
                      <Image src={whatsAppIcon} />
                    </div>
                    <p>(21) 2496-1161</p>
                    <Button title={'Converse pelo WhatsApp'} id={2} />
                  </div>
                  <div className={styles.ContactItemEquipeMedica}>
                    <div className={styles.ContactIcon}>
                      <Image src={phoneIcon} />
                    </div>
                    <p>(21) 2496-1161</p>
                    <Button title={'Ligue agora'} id={2} />
                  </div>
                  <div className={styles.ContactItemEquipeMedica}>
                    <div className={styles.ContactIcon}>
                      <Image src={pcIcon} />
                    </div>
                    <p>(21) 2496-1161</p>
                    <Button title={'Reserve agora'} id={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
