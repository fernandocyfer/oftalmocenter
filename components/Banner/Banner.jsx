import styles from '../../styles/banner.module.sass'
import homeBanner from '../../public/images/home-banner.webp'
import {useRouter} from 'next/router'
import {Children} from 'react'
import homeBannerDois from '../../public/images/container1-bg.png'

export default function Banner({children}) {
  const route=useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className={styles.banner}
        style={{
          //backgroundImage: `url('${homeBanner.src}')`
          //backgroundImage: `url('${homeBannerDois.src}')`
        }}
      >
        {children}
        <div className={styles.overlay} />
      </div>
    </div>
  )
}
