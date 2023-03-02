import styles from "../../styles/cardDepoimentos.module.sass";
import StarIcon from '../../public/icons/star.svg'
import photo1 from '../../public/banner/ambiente1.webp'


import Image from "next/image";


const CardDepoimentos=() => {
    return (
        <div className={styles.Testimonial}>
            <div className={styles.TestimonialContent}>
                <div className={styles.TestimonialAuthor}>
                    <div className={styles.TestimonialAuthorPhoto}>
                        <Image src={photo1} layout='intrinsic' />
                    </div>
                    <div className={styles.TestimonialAuthorInfo}>
                        <h5>Nome Sobrenome</h5>
                        <p>3 meses atrás</p>
                    </div>
                </div>
                <div className={styles.Label__Star}>
                    <Image src={StarIcon} />
                    &nbsp;
                    <Image src={StarIcon} />
                    &nbsp;
                    <Image src={StarIcon} />
                    &nbsp;
                    <Image src={StarIcon} />
                    &nbsp;
                    <Image src={StarIcon} />
                </div>
                <div className={styles.TestimonialText}>
                    <p>Lorem ipsum dolor sit amet consectetur. Et amet id risus purus. Ullamcorper mauris ipsum enim morbi. Sed auctor odio sit donec feugiat integer. Curabitur eget eget dis aliquet quisque bibendum vitae quisque. Enim non est ullamcorper non tincidunt ut venenatis lectus. </p>
                </div>
            </div>
        </div>
    )
}

export default CardDepoimentos