import styles from './Footer.module.scss'

import logo from 'assets/logoWhite.svg'

import { BsGeoAlt, BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
				<div className={styles.text}>
					<h1>Автозапчастни</h1>
					<p>domain.com</p>
				</div>
			</div>

			<p className={styles.copyright}>Правова інформація: © 2025 domain.ua</p>

			<div className={styles.contact}>
				<span>
					<BsTelephone />
					<p>+380 68 33 94 220</p>
				</span>
				<span>
					<CiMail />
					<p>zukicode@gmail.com</p>
				</span>
				<span>
					<BsGeoAlt />
					<p>Вул. Тараса Шевченка 54</p>
				</span>
			</div>
		</div>
	)
}
