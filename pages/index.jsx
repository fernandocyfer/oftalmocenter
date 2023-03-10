import CustomHead from '../components/CustomHead/CustomHead'
import Banner from '../components/Banner/Banner'
import styles from '../styles/home.module.sass'
import {Button} from '../components/Button/Button'
import Select from '../components/Button/Select'
import eyeIcon from '../public/icons/eye-icon.svg'
import calendarIcon from '../public/icons/calendar-icon.svg'
import estetoIcon from '../public/icons/esteto-icon.svg'
import eyeStatisticIcon from '../public/icons/eye-statistic.svg'
import estetoFormIcon from '../public/icons/estetoFormIcon.svg'
import personIcon from '../public/icons/person-icon.svg'
import sectwoBanner from '../public/images/sectwo-banner.webp'
import containerBackgroundDois from '../public/images/videosct2.png'
import Medicos from '../components/Medicos/Medicos'
import Merda from '../components/Blog/Posts'

import glassFrame from '../public/images/glass.svg'

import containerBackgroundDoisMobile from '../public/mobile/videomobilebg.svg'

import diferencial1 from '../public/icons/diferencial-1.svg'
import diferencial2 from '../public/icons/diferencial-2.svg'
import diferencial3 from '../public/icons/diferencial-3.svg'
import diferencial4 from '../public/icons/diferencial-4.svg'

import cardDiferenceImage1 from '../public/images/card-1.svg'
import cardDiferenceImage2 from '../public/images/card-2.svg'
import cardDiferenceImage3 from '../public/images/card-3.svg'
import cardDiferenceImage4 from '../public/images/card-4.svg'

import cardEspecialidades1 from '../public/images/especialidades-1.svg'
import cardEspecialidades2 from '../public/images/especialidades-2.svg'
import cardEspecialidades3 from '../public/images/especialidades-3.svg'
import cardEspecialidades4 from '../public/images/especialidades-4.svg'
import cardEspecialidades5 from '../public/images/especialidades-5.svg'
import cardEspecialidades6 from '../public/images/especialidades-6.svg'
import cardEspecialidades7 from '../public/images/especialidades-7.svg'

import locationIcon from '../public/images/location2.png'
import oftalmoPic from '../public/images/oftalmokids.svg'

import slide1 from '../public/images/slide-1.svg'
import slide2 from '../public/images/slide-2.svg'
import slide3 from '../public/images/slide-3.svg'

import photo1 from '../public/banner/ambiente1.webp'
import photo2 from '../public/banner/ambiente2.webp'
import photo3 from '../public/banner/ambiente3.webp'
import photo4 from '../public/banner/ambiente4.webp'
import photo5 from '../public/banner/ambiente5.webp'

import kids1 from '../public/banner/kids1.svg'
import kids2 from '../public/banner/kids2.svg'
import kids3 from '../public/banner/kids3.svg'
import kids4 from '../public/banner/kids4.svg'
import kids5 from '../public/banner/kids5.svg'

import conv1 from '../public/logo/conv1.svg'
import conv2 from '../public/logo/conv2.svg'
import conv3 from '../public/logo/conv3.svg'
import conv4 from '../public/logo/conv4.svg'
import conv5 from '../public/logo/conv5.svg'

import faqImage from '../public/images/faq-image.webp'

import userIcon from '../public/icons/person-icon.svg'
import mailIcon from '../public/icons/mail.svg'
import telIcon from '../public/icons/call.svg'

import Image from 'next/image'
import Label from '../components/Label/Label'
import Statistic from '../components/Statistic/Statistic'
import CardDiferencial from '../components/Cards/CardDiferencial'
import CardDiferencialFirst from '../components/Cards/CardDiferencialFirst'
import CardEspecialidades from '../components/Cards/CardEspecialidades'
import Container from '../components/Container/Container'

import pcIcon from '../public/icons/pc-blue-icon.png'
import phoneIcon from '../public/icons/phone-blue-icon.png'
import whatsAppIcon from '../public/icons/whatsapp-blue-icon.png'

import formPhoto from '../public/images/form-photo.webp'

import oftalmoKids from '../public/logo/logo-oftalmokids.png'

import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,Pagination,Scrollbar,A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';
import CardDepoimentos from '../components/Cards/CardDepoimentos'
import CardPostBlog from '../components/Cards/CardPostBlog'
import {Accordion,Form,InputGroup} from 'react-bootstrap'

export default function Home({}) {

  return (
    <>
      <CustomHead title={'Americas Oftalmocenter'} />

      <Banner>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.Hero}>
                <h1>A Cl??nica Oftalmol??gica mais completa do Rio de Janeiro.</h1>
                <p>
                  Agende agora sua consulta com um oftalmologista
                </p>
                <div className='d-flex'>
                  <Button
                    title={'Agendar consulta'}
                    id={10}
                    to={'https://web.whatsapp.com/send?phone=552124961161&text='}
                  />
                  <Button
                    title={'Emerg??ncias 24h'}
                    id={5}
                    to={'/'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Banner>

      <div className={styles.SectionTwoMobile}>
        <div className={styles.SectionTwo_boxTwo}>
              <Button title={'Nossas Cl??nicas'} id={11} />
              <h2>A American Oftalmocenter conta com 5 unidades no Rio de Janeiro.</h2>
              <p>
              Escolha uma de nossas cl??nicas oftalmol??gicas. Veja a mais pr??xima de voc??!
              </p>
              <div className='form-group'>
                <select onchange="window.location.href=this.value;" className='form-control-lg' name='unidades'>
                    <option selected>Escolha sua cl??nica aqui</option>
                    <option value="/">Unidade Barra da Tijuca</option>
                    <option value="/">Unidade Barra da Tijuca</option>
                    <option value="/">Unidade Barra da Tijuca</option>
                    <option value="/">Unidade Barra da Tijuca</option>
                    <option value="/">Unidade Barra da Tijuca</option>
                </select>
              </div>
        </div>
        
        <div className='container p-4'>
          <Image src={containerBackgroundDoisMobile} alt={'Crian??a realizando exame'} title={'Crian??a realizando exame'} layout={'responsive'} />
        </div>
        <div className='container d-flex justify-content-center pb-5 mb-5 mt-5'>
        <Button 
          title={'Agendar consultar e exames'}
          id={10}
          to={'/'}
        />
        </div>
      </div>

      <div className={styles.SectionTwo}>
        <div className={styles.SectionTwo_container}>
         <div className='container d-flex align-items-center justify-content-center' id='containerDoisSobreposto' style={{background: ''}}>
         <div className="col-4">
            <Image src={containerBackgroundDois} alt={'Crian??a realizando exame'} title={'Crian??a realizando exame'} layout={'responsive'} />
          </div>
          <div className="col-8">
            <div className={styles.SectionTwo_boxTwo}>
              <Button title={'Nossas Cl??nicas'} id={11} />
              <h2>A American Oftalmocenter conta com 5 unidades no Rio de Janeiro.</h2>
              <p>
              Escolha uma de nossas cl??nicas oftalmol??gicas. Veja a mais pr??xima de voc??!
              </p>
              <div className={styles.maisDoidoAinda}>
                <div>
                <Button title={'Unidade Barra da Tijuca'} id={4} icon={locationIcon} />
                </div>
                <div>
                <Button title={'Unidade Del Castilho Zona Norte'} id={4} icon={locationIcon} />
                </div>
                <div>
                <Button title={' Unidade Bota fogo Zona Sul'} id={4} icon={locationIcon} />
                </div>
                <div>
                <Button title={'Unidade M??ier'} id={4} icon={locationIcon} />
                </div>
                <div>
                <Button title={'Unidade Tijuca'} id={4} icon={locationIcon} />
                </div>
              </div>
              <div className={styles.unidadesBtnDois}>
              <Button title={'Agendar consultas e exames'} id={12} />
              </div>
            </div>  
          </div>
         </div>
        </div>
      </div>
      <div className={styles.mtoDoido}>
        <div className="d-flex justify-content-arround gap-5">
          <Statistic image={estetoIcon} title={'+65'} subtitle={'m??dicos oftalmologistas especializados'} />
          <Statistic image={eyeStatisticIcon} title={'+500k'} subtitle={' Pacientes  atendidos   '} />
          <Statistic image={estetoFormIcon} title={'+800k'} subtitle={'Atendimentos realizados'} />
        </div>
      </div>
      <div className="container containerStatisticBoxMobile">
        <div className="row justify-content-center">
          <div>
            <div className={styles.SelectBox}>
              <CardDiferencialFirst title={'Profissionais altamente qualificados'} description={'Garantimos que todos os nossos oftalmologistas s??o altamente qualificados para lhe atender'} image={diferencial1} />
              <CardDiferencialFirst title={'Equipamentos de ??ltima gera????o'} description={'Nossas unidades possuem equipamentos modernos para prover os melhores resultados.'} image={diferencial2} />
              <CardDiferencialFirst title={'Centro cir??rgico pr??prio'} description={'Contamos com centro cir??rgico pr??prio com os equipamentos mais modernos para realizar cirurgias oculares.'} image={diferencial3} />
              <CardDiferencialFirst title={'Ambiente moderno, confort??vel e humanizado'} description={'Nossas unidades contam com estrutura moderna e confort??vel'} image={diferencial4} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.SectionFour}>
        <Button title={'Nossas especialidades'} id={11} />
        <Container title={'A Americas Oftalmocenter conta com oftalmologista especializados para iniciar seu tratamento'} star content={'Nossa equipe conta com uma equipe de m??dicos oftalmologistas capacitados para a realiza????o do tratamento de todas essas especialidades. Al??m disso, utilizamos os equipamentos mais modernos dispon??veis e contamos com profissionais com vasta experi??ncia.'} idLabel={3} >
          <CardEspecialidades title={'Cirurgia de Catarata'} image={cardEspecialidades1} />
          <CardEspecialidades title={'Crosslinking'} image={cardEspecialidades2} />
          <CardEspecialidades title={'Vitrectomia'} image={cardEspecialidades3} />
          <CardEspecialidades title={'Cirurgia de refrativa'} image={cardEspecialidades4} />
          <CardEspecialidades title={'Buraco macular'} image={cardEspecialidades5} />
          <CardEspecialidades title={'Blefaropastia'} image={cardEspecialidades6} />
          <CardEspecialidades title={'Cirurgia Antiglaucomatosa'} image={cardEspecialidades7} />
        </Container>
        <div style={{margin: '4rem 0 8rem'}}>
        <p style={{fontWeight: '700', fontSize: '14px', lineHeight: '19px'}}>
          Entre em contato com a gente para agendar sua consulta.
        </p>
        <Button title={'Agendar consultas e exames'} id={1} />
        </div>
      </div>

      <div className={styles.SectionFive} >
      <Button title={'Nossos M??dicos'} id={11} />
        <Container label={'Nossos m??dicos'} content={'Nosso corpo cl??nico ?? composto por mais de 65 m??dicos oftalmologistas prontos para lhe atender em todas as ??reas cl??nicas e cir??rgicas da oftalmologia. S??o profissionais comprometidos em prestar aos nossos pacientes o mais alto n??vel de qualidade e seguran??a.'} title={'Aqui voc?? encontra os melhores oftalmologistas do Rio de Janeiro'} idLabel={1}>
        </Container>
        <Medicos />
        <Button title={'Conhe??a nossos oftalmologistas'} id={1} />
      </div>

      {/*
      <div className={styles.SectionSix}>
        <Container id={2} label={'Nossas Clinicas'} content={'Escolha uma de nossas cl??nicas oftalmol??gicas mais pr??xima de voc??:'} title={'A American Oftalmocenter conta com 5 unidades no Rio de Janeiro.'} idLabel={2}>
          <div className={styles.buttonsContainer}>
            <Button title={'Unidade Barra da Tijuca'} id={4} icon={locationIcon} />
            <Button title={'Unidade Bota fogo Zona Sul'} id={4} icon={locationIcon} />
            <Button title={'Unidade Del Castilho Zona Norte'} id={4} icon={locationIcon} />
            <Button title={'Unidade M??ier'} id={4} icon={locationIcon} />
            <Button title={'Unidade Tijuca'} id={4} icon={locationIcon} />

            <Button title={'Ver todas nossas Unidades'} id={1} icon={locationIcon} />
          </div>

          
          <div className={styles.SectionEight}>
            <div className={styles.Banner}>
              <Swiper
                modules={[Navigation,Pagination,Scrollbar,A11y]}
                spaceBetween={10}
                slidesPerView={5}
                Autoplay={true}
                HashNavigation={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
              >
                <SwiperSlide><Image src={photo1} /></SwiperSlide>
                <SwiperSlide><Image src={photo2} /></SwiperSlide>
                <SwiperSlide><Image src={photo3} /></SwiperSlide>
                <SwiperSlide><Image src={photo4} /></SwiperSlide>
                <SwiperSlide><Image src={photo5} /></SwiperSlide>
                <SwiperSlide><Image src={photo1} /></SwiperSlide>
                <SwiperSlide><Image src={photo2} /></SwiperSlide>
                <SwiperSlide><Image src={photo3} /></SwiperSlide>
                <SwiperSlide><Image src={photo4} /></SwiperSlide>
                <SwiperSlide><Image src={photo5} /></SwiperSlide>
                <SwiperSlide><Image src={photo1} /></SwiperSlide>
                <SwiperSlide><Image src={photo2} /></SwiperSlide>
                <SwiperSlide><Image src={photo3} /></SwiperSlide>
                <SwiperSlide><Image src={photo4} /></SwiperSlide>
                <SwiperSlide><Image src={photo5} /></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
      */}

      <div className={styles.SectionSeven}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Image src={oftalmoPic} />
            </div>
            <div className="col-6 d-flex flex-column">
            <div className={styles.oftalmoKids}>
              <Image src={oftalmoKids} />
            </div>
            <Button title={'Oftalmolofia infantil'} id={11} />
              <Container
                label={'Oftalmologia Infantil'}
                title={'Todas as nossas unidades contam com m??dicos oftalmologistas pedi??tricos para atender nossos pequenos pacientes.'}
                content={'Preparamos uma unidade tem??tica na Barra da Tijuca para receber os seus filhos com muito carinho.Personagens tem??ticos, parquinho e ambiente infantil fazem da consulta das crian??as uma experi??ncia l??dica.'}
              >
              </Container>
              <p style={{textAlign: 'left',padding: '0.5rem 1rem',marginTop: '-1rem'}}>Acesse o site da <b>Americas OftalmoKids</b> para saber mais.</p>
              <Button title={'Visitar Oftalmokids'} id={1} />
            </div>
          </div>
        </div>
         
          
          <div className='container'>
          
            <div className='row'>
            <div className={styles.slideKids}>
            <Swiper
              modules={[Navigation,Pagination,Scrollbar,A11y]}
              spaceBetween={15}
              slidesPerView={5}
              Autoplay={true}
              HashNavigation={true}
              grabCursor={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
            >
              <SwiperSlide><Image src={kids1} /></SwiperSlide>
              <SwiperSlide><Image src={kids2} /></SwiperSlide>
              <SwiperSlide><Image src={kids3} /></SwiperSlide>
              <SwiperSlide><Image src={kids4} /></SwiperSlide>
              <SwiperSlide><Image src={kids5} /></SwiperSlide>

              <SwiperSlide><Image src={kids1} /></SwiperSlide>
              <SwiperSlide><Image src={kids2} /></SwiperSlide>
              <SwiperSlide><Image src={kids3} /></SwiperSlide>
              <SwiperSlide><Image src={kids4} /></SwiperSlide>
              <SwiperSlide><Image src={kids5} /></SwiperSlide>

              <SwiperSlide><Image src={kids1} /></SwiperSlide>
              <SwiperSlide><Image src={kids2} /></SwiperSlide>
              <SwiperSlide><Image src={kids3} /></SwiperSlide>
              <SwiperSlide><Image src={kids4} /></SwiperSlide>
              <SwiperSlide><Image src={kids5} /></SwiperSlide>
            </Swiper>
            </div>
            </div>
          </div>

      </div>

      <div className={styles.SectionNine}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Button title={'Depoimentos'} id={11} />
              <Container label={'Depoimentos'} title={'O que dizem nossos clientes'} content={' '} />
              <div className={styles.slideDepoiments}>
                <Swiper
                  modules={[Navigation,Pagination,Scrollbar,A11y]}
                  spaceBetween={-20}
                  slidesPerView={2}
                  Autoplay={true}
                  HashNavigation={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  navigation
                >
                  <SwiperSlide>
                    <CardDepoimentos />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardDepoimentos />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardDepoimentos />
                  </SwiperSlide>
                </Swiper>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className={styles.SectionTen}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Button title={'Planos e conv??nios'} id={11} />
              <Container label={'Planos e conv??nios'} title={'A Americas Oftalmocenter aceita os principais planos de sa??de e conv??nios m??dicos.'} content={'Conhe??a a rede credenciada e agende sua consulta.'} />              <div className={styles.Convenios}>
                <Swiper
                  modules={[Navigation,Pagination,Scrollbar,A11y]}
                  spaceBetween={-110}
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
            <div>
              <Button title={'Consulte nossos conv??nios'} id={1} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.SectionEleven}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Button title={'Aprenda mais'} id={11} />
              <Container label={'Aprenda mais'} title={'Nossos artigos publicados'} content={' '} />
              <div className={styles.postsBlog}>
                <Merda />
              </div>
              <Button title={'Todos nossos artigos'} id={1} />
            </div>
          </div>
        </div>
      </div>

<div className={styles.SectionTwelve}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-5">
        <Button title={'FAQ'} id={11} style={{marginLeft:'32px'}} />
        <Container
          idLabel={2}
          label={"FAQ"}
          title={"Tire suas D??vidas"}
          content={
            " Est?? com alguma d??vida sobre os servi??os de um oftalmologista e como podemos lhe ajudar? Fique tranquilo(a) pois separamos as perguntas frequentes. Por isso, confira e tire suas d??vidas com a gente!"
          }
        />
      </div>
      <div className="col-7">
        <div className={styles.Faq}>
          <div className={styles.FaqItem}>
            <div className={styles.FaqTitle}>
              <Accordion>
                <Accordion.Item eventKey="0" className={styles.accordionItem}>
                  <Accordion.Header className={styles.accordionHeader}>
                    <h6>O que ?? oftalmologista?</h6>
                  </Accordion.Header>
                  <Accordion.Body className={styles.accordionBody}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                      cursus enim metus. Amet sed ultrices leo dictum arcu in
                      lacus at. Faucibus pulvinar lorem amet mauris.
                      <br />
                      <br />
                      Venenatis malesuada at nec velit vitae duis velit.
                      Pellentesque quam dictum ut id nascetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={styles.accordionItem}>
                  <Accordion.Header className={styles.accordionHeader}>
                    <h6>Qual telefone da cl??nica oftalmol??gica?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                      cursus enim metus. Amet sed ultrices leo dictum arcu in
                      lacus at. Faucibus pulvinar lorem amet mauris.
                      <br />
                      <br />
                      Venenatis malesuada at nec velit vitae duis velit.
                      Pellentesque quam dictum ut id nascetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={styles.accordionItem}>
                  <Accordion.Header className={styles.accordionHeader}>
                    <h6>Qual a diferen??a entre oculista e oftalmologista?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                      cursus enim metus. Amet sed ultrices leo dictum arcu in
                      lacus at. Faucibus pulvinar lorem amet mauris.
                      <br />
                      <br />
                      Venenatis malesuada at nec velit vitae duis velit.
                      Pellentesque quam dictum ut id nascetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className={styles.accordionItem}>
                  <Accordion.Header className={styles.accordionHeader}>
                    <h6>
                      Quantos minutos demora uma consulta com oftalmologista?
                    </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tortor sed blandit
                      cursus enim metus. Amet sed ultrices leo dictum arcu in
                      lacus at. Faucibus pulvinar lorem amet mauris.
                      <br />
                      <br />
                      Venenatis malesuada at nec velit vitae duis velit.
                      Pellentesque quam dictum ut id nascetur.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      <div className={styles.SectionThirteen}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Container idLabel={2} label={'FALE AGORA CONOSCO'} title={'Agende rapidamente sua consulta ou tire todas as suas d??vidas.'} content={'Nossa equipe est?? pronta para lhe atender.'} dark={true} />
              <div className="col-12 d-flex flex-column" style={{padding: '2rem 0'}}>
                <div className="col-12">
                  <div className={styles.Contact}>
                    <div className={styles.ContactItem}>
                      <div className={styles.ContactIcon}>
                        <Image src={whatsAppIcon} />
                      </div>
                      <p>(21) 2496-1161</p>
                      <Button dark title={'Converse pelo WhatsApp'} id={2} />
                    </div>
                    <div className={styles.ContactItem}>
                      <div className={styles.ContactIcon}>
                        <Image src={phoneIcon} />
                      </div>
                      <p>(21) 2496-1161</p>
                      <Button dark title={'Ligue agora'} id={2} />
                    </div>
                    <div className={styles.ContactItem}>
                      <div className={styles.ContactIcon}>
                        <Image src={pcIcon} />
                      </div>
                      <p>Agendamento Online</p>
                      <Button dark title={'Reserve agora'} id={2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.FormContainer}>
                <div className="col-12 d-flex justify-content-center porraa">
                  <div className="col-5 d-flex align-items-center">
                    <div className={styles.formPhoto}>
                      <Image src={formPhoto} />
                    </div>
                  </div>
                  <div className={styles.formWrapper}>
                    <div className="col-12">
                      <form action="">
                        <div>
                        <Button title={'Fale Conosco'} id={11} />
                        </div>
                        <h5>
                          N??s entramos em contato<br /> com voc??!
                        </h5>
                        <div className="col-12">
                          <div className={styles.formGroup}>
                            <label htmlFor="Username">Nome</label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <Image src={userIcon} />
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="Seu nome"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className={styles.formGroup}>
                            <label htmlFor="Email">Email</label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <Image src={mailIcon} />
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="Email@paracontato.com.br"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className={styles.formGroup}>
                            <label htmlFor="Phone">Telefone</label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <Image src={telIcon} />
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="+55 (99) 9 0000-0000"
                                aria-label="Phone"
                                aria-describedby="basic-addon1"
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className={styles.formGroup}>
                            <Button title={'Enviar contato'} id={1} type={'submit'} />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.SectionFourteen}>
      </div>
    </>)
}
