import Image from 'next/image'
import Link from 'next/link'
import arrowRight from '../../public/icons/arrow-right.svg'
import arrowRightWhite from '../../public/icons/arrow-right-white.svg'
import styles from '../../styles/button.module.sass'
import whatsAppButton from '../../public/icons/social/whatsapp.png'
import whatsAppButtonDois from '../../public/icons/social/whatsappDois.png'

export function Button({type,title,id,to,icon,dark=false}) {
  return (
    <Link href={to? to:''}>
      <button
        className={
          id==1
            ? styles.btn_primary
            :id==2
              ? styles.btn_secondary
              :id==3
                ? styles.btn_thirdhary
                :id==4
                  ? styles.btn_fourthary
                    :id==5
                      ? styles.btn_fivethary
                        :id==10
                          ? styles.btn_ninethary
                            :id==11
                              ? styles.btn_eleven
                                :id==12
                                  ? styles.btn_twelve
                                   :null                      
        }
        type={type}
      >
        {title}
        {id==2? <Image src={dark? arrowRightWhite:arrowRight} id="arrow" />:null}
        {id==4? (<Image src={icon? icon:arrowRight} id="icon" />):null}
        {id==10? (<Image src={whatsAppButton} id="iconWhatsButton"/>):null}
        {id==12? (<Image src={whatsAppButtonDois} id="iconWhatsButtonDois"/>):null}
      </button>
    </Link>
  )
}
