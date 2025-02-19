import styles from './MobileMenu.module.scss'

import logo from 'assets/logo.svg'

import { IoMdClose } from 'react-icons/io'

export const MobileMenu = ({
	catalogRef,
	aboutRef,
	contactRef,
	scrollToSection,
	isShowMobile,
	toggleMobileVisible,
}) => {
	return (
		<div
			className={
				isShowMobile ? `${styles.mobile} ${styles.isVisible}` : styles.mobile
			}
		>
			<div className={styles.center}>
				<div className={styles.logo}>
					<div className={styles.info}>
						<img src={logo} alt='logo' />
						<div className={styles.text}>
							<h1>Автозапчастини</h1>
							<p>domain.com</p>
						</div>
					</div>

					<button onClick={() => toggleMobileVisible()}>
						<IoMdClose />
					</button>
				</div>

				<div className={styles.nav}>
					<ul>
						<li onClick={() => scrollToSection(catalogRef)}>Каталог</li>
						<li onClick={() => scrollToSection(aboutRef)}>Про нас</li>
						<li onClick={() => scrollToSection(contactRef)}>Зв'язатись</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
