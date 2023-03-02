import Link from 'next/link'
import logo from '../../public/logo.webp'
import Image from 'next/image'
import styles from '../../styles/navbar.module.sass'
import hamburguer from '../../public/mobile/hamburguer.webp'
import {useRouter} from 'next/router'
import {Button} from '../Button/Button'

export default function Navbar({footer}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const navigation=[
    {name: 'Home',href: '/'},
    {name: 'O Grupo', href: '/'},
    {name: 'Equipe Médica',href: '/'},
    {name: 'Convênios',href: '/'},
    {name: 'Unidades',href: '/'},
    {name: 'Serviços',href: '/'},
    {name: 'Aprenda mais',href: '/'},
    {name: 'Catarata', href:'/'}
  ]

  {/*
  const navigation=[
    {name: 'Home',href: '/'},
    {name: 'O Grupo', href: '/'},
    {name: 'Equipe Médica',href: '/equipe'},
    {name: 'Convênios',href: '/convenios'},
    {name: 'Unidades',href: '/unidades'},
    {name: 'Serviços',href: '/servicos'},
    {name: 'Aprenda mais',href: '/aprenda-mais'},
    {name: 'Catarata', href:'/'}
  ]
*/}

  const router=useRouter()

  return (
    <>
      <div id="navbar-container" className={styles.navbar}>
        <Link href={'/'}>
          <Image
            alt="image-alt"
            title="image-title"
            objectFit="contain"
            src={logo}
            className={styles.logo}
          />
        </Link>

        <div className={styles.navlist}>
          {navigation.map(item => (
            <Link href={item.href} key={item.name}>
              <a
                className={classNames(
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                  router.route===item.href? styles.current:null
                )}
                aria-current={router.route===item.href? 'page':undefined}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        <div className='d-flex gap-3' >
          {/*<Button title={`Emergência 24h`} id={5} to={'/'} /> */}
          <Button title={'AGENDE AGORA'} id={1} to={'/agende-sua-consulta'} />
        </div>

        <div className={styles.mobileMenu}>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <Image alt="image-alt" title="image-title" src={hamburguer} />
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRight"
            style={{backgroundColor: '#0075FF'}}
          >
            <div className={`offcanvas-header ${styles.navMobileHead}`}>
              <Link href={'/'}>
                <Image
                  alt="image-alt"
                  title="image-title"
                  src={logo}
                  objectFit="contain"
                  className={styles.logo}
                />
              </Link>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={`offcanvas-body ${styles.navMobileBody}`}>
              {navigation.map(item => (
                <Link href={item.href} key={item.name}>
                  <a
                    className={classNames(
                      'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                      router.route===item.href? styles.current:null
                    )}
                    aria-current={
                      router.route===item.href? 'page':undefined
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
