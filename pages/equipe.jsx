import CardDoctor from '../components/Cards/CardDoctor'
import SingleContainer from '../components/SingleContainer/SingleContainer'
import styles from '../styles/equipeMedica.module.sass'
import doctor2 from '../public/images/doctor2.svg'
import doctor3 from '../public/images/doctor3.svg'
import doctor4 from '../public/images/doctor4.svg'
import doctor5 from '../public/images/doctor5.svg'

import conv1 from '../public/logo/conv1.svg'
import conv2 from '../public/logo/conv2.svg'
import conv3 from '../public/logo/conv3.svg'
import conv4 from '../public/logo/conv4.svg'
import conv5 from '../public/logo/conv5.svg'

import pcIcon from '../public/icons/pc-blue-icon.svg'
import phoneIcon from '../public/icons/phone-blue-icon.svg'
import whatsAppIcon from '../public/icons/whatsapp-blue-icon.svg'

import locationIcon from '../public/icons/location-icon.svg'
import Container from '../components/Container/Container'
import {Button} from '../components/Button/Button'
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,Pagination,Scrollbar,A11y} from 'swiper';
import Image from 'next/image'

export default function EquipeMedica() {
  return (
    <>
      <div className={styles.EquipeMedica}>
        <SingleContainer />
        <div className="container" style={{marginBottom: '2rem'}}>
          <div className="row">
            <div className="col-12 d-flex justify-content-center flex-wrap">
              <CardDoctor />
              <CardDoctor photo={doctor2} />
              <CardDoctor photo={doctor3} />
              <CardDoctor photo={doctor4} />
              <CardDoctor photo={doctor5} />
              <CardDoctor />
              <CardDoctor photo={doctor2} />
              <CardDoctor photo={doctor3} />
              <CardDoctor photo={doctor4} />
              <CardDoctor photo={doctor5} />
              <CardDoctor />
              <CardDoctor photo={doctor2} />
              <CardDoctor photo={doctor3} />
              <CardDoctor photo={doctor4} />
              <CardDoctor photo={doctor5} />
              <CardDoctor />
              <CardDoctor photo={doctor2} />
              <CardDoctor photo={doctor3} />
              <CardDoctor photo={doctor4} />
              <CardDoctor photo={doctor5} />
            </div>
          </div>
        </div>
        <div className={styles.locationClinica}>
          <div className="container-fluid" style={{padding: '0'}}>
            <Container id={2} label={'Nossas Clinicas'} content={'Contamos com 5 unidades no Rio de Janeiro. Veja qual delas fica mais próxima da sua residência. Assim, consegue realizar sua consulta com mais facilidade'} title={'A American Oftalmocenter conta com 5 unidades no Rio de Janeiro.'} idLabel={2}>
              <Button title={'Unidade Barra da Tijuca'} id={4} icon={locationIcon} />
              <Button title={'Unidade Bota fogo Zona Sul'} id={4} icon={locationIcon} />
              <Button title={'Unidade Del Castilho Zona Norte'} id={4} icon={locationIcon} />
              <Button title={'Unidade Méier'} id={4} icon={locationIcon} />
              <Button title={'Unidade Tijuca'} id={4} icon={locationIcon} />
            </Container>
          </div>
        </div>
        <div className={styles.SectionTen}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Container label={'Planos e convênios'} title={'A Americas Oftalmocenter aceita os principais planos de saúde e convênios médicos.'} content={'Conheça a rede credenciada e agende sua consulta.'} />              <div className={styles.Convenios}>
                  <Swiper
                    modules={[Navigation,Pagination,Scrollbar,A11y]}
                    spaceBetween={0}
                    slidesPerView={5}
                    Autoplay={true}
                    HashNavigation={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                  >
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv1} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv2} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv3} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv4} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv5} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv1} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv2} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv3} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv4} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.boxLogoConv}>
                        <Image src={conv5} />
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>
              <div style={{textAlign: 'center',margin: '1rem 0 2rem 0'}}>
                <Button title={'Consulte nossos convênios'} id={3} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.SectionThirteen}>
          <div className="container">
            <div className={`col-12 justify-content-center d-flex flex-column ${styles.boxContact}`} style={{margin: '0 auto'}}>
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
      </div>
    </>
  )
}
