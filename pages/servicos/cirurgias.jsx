import Banner from "/components/Banner/Banner";
import styles from "/styles/servicos.module.sass";

import {Button} from "/components/Button/Button";
import Breadcrumb from "/components/BreadCrumb/Breadcrum";
import Search from "/components/Search/Search";

import Faq from "/components/Faq/faq";
import Depoimentos from "/components/Depoimentos/Depoimentos";

import PlanosConvenios from "/components/PlanosConvenios/PlanosConvenios";
import FormAtendimento from "/components/FormAtendimento/FormAtendimento";

const Cirurgias = () => (<>
    <Banner id={9}>
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <div className={styles.Hero}>
                        <h2>Cirurgias Oftalmológicas</h2>
                        <p>
                            Conheça as cirurgias oftalmológicas oferecidas pela Americas Oftalmocenter e veja como a
                            nossa equipe de médicos pode ajudar você a cuidar da saúde dos seus olhos:
                        </p>
                        <div className='d-flex'>
                            <Button
                                style={{marginRight: '32px'}}
                                title={'Agendar consulta'}
                                id={10}
                                to={'https://web.whatsapp.com/send?phone=552124961161&text='}
                            />

                            <Button
                                title={'Emergência Oftalmológica\n'}
                                id={6}
                                to={'/'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Banner>
    <Breadcrumb to={'servicos/cirurgias'} title={'servicos / cirurgias'}/>
    <Search>
        <div className={'d-flex flex-column'}>
            <Button id={7} title={'Anestesista'}/>
            <Button id={7} title={'Catarata'}/>
            <Button id={7} title={'Ceratocone'}/>
            <Button id={7} title={'Cirurgia Refrativa (Correção de grau à laser)'}/>
            <Button id={7} title={'Córnea'}/>
            <Button id={7} title={'Diretor Médico'}/>
            <Button id={7} title={'Diretora Médica'}/>
            <Button id={7} title={'Estética'}/>
            <Button id={7} title={'Estrabismo'}/>
            <Button id={7} title={'Glaucoma'}/>
            <Button id={7} title={'Lentes de Contato'}/>
        </div>
        <div className={'d-flex flex-column'}>
            <Button id={7} title={'Oftalmogeriatria'}/>
            <Button id={7} title={'Oftalmologia Clínica (Geral)'}/>
            <Button id={7} title={'Oftalmopediatria'}/>
            <Button id={7} title={'Órbita'}/>
            <Button id={7} title={'Ortoptista'}/>
            <Button id={7} title={'Plástica Ocular ou Oculoplástica'}/>
            <Button id={7} title={'Retina'}/>
            <Button id={7} title={'Retina Cirúrgica'}/>
            <Button id={7} title={'Retina Clínica e Vítreo'}/>
            <Button id={7} title={'Transplante de córnea'}/>
            <Button id={7} title={'Vias Lacrimais'}/>
        </div>
    </Search>

    <Faq/>

    <Depoimentos/>

    <PlanosConvenios/>


    <FormAtendimento/>
</>)


export default Cirurgias;
