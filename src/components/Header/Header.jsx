import styles from './Header.module.scss'

import logo from 'assets/logo.svg'

import { IoMenuOutline } from 'react-icons/io5'

export const Header = ({
	catalogRef,
	aboutRef,
	contactRef,
	scrollToSection,
	toggleMobileVisible,
}) => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
				<div className={styles.text}>
					<h1>Автозапчастини</h1>
					<p>domain.com</p>
				</div>
			</div>
			<div className={styles.nav}>
				<ul>
					<li onClick={() => scrollToSection(catalogRef)}>Каталог</li>
					<li onClick={() => scrollToSection(aboutRef)}>Про нас</li>
					<li onClick={() => scrollToSection(contactRef)}>Зв'язатись</li>
				</ul>
			</div>

			<button
				className={styles.hamburgerMenu}
				onClick={() => toggleMobileVisible()}
			>
				<IoMenuOutline />
			</button>
		</div>
	)
}
