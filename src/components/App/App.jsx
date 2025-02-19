import styles from './App.module.scss'

import { About } from 'components/About/About'
import { Brands } from 'components/Brands/Brands'
import { CarParts } from 'components/CarParts/CarParts'
import { Contact } from 'components/Contact/Contact'
import { Footer } from 'components/Footer/Footer'
import { MobileMenu } from 'components/MobileMenu/MobileMenu'
import { useRef, useState } from 'react'
import { Banner } from '../Banner/Banner'
import { Header } from '../Header/Header'

export const App = () => {
	const [isShowMobile, setShowMobile] = useState(false)

	const toggleMobileVisible = () => setShowMobile(!isShowMobile)

	const catalogRef = useRef(null)
	const aboutRef = useRef(null)
	const contactRef = useRef(null)

	const scrollToSection = ref => {
		ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
		setShowMobile(false)
	}

	return (
		<div className={styles.application}>
			<Header
				catalogRef={catalogRef}
				aboutRef={aboutRef}
				contactRef={contactRef}
				scrollToSection={scrollToSection}
				toggleMobileVisible={toggleMobileVisible}
			/>
			<Banner aboutRef={aboutRef} scrollToSection={scrollToSection} />
			<CarParts
				catalogRef={catalogRef}
				contactRef={contactRef}
				scrollToSection={scrollToSection}
			/>
			<About aboutRef={aboutRef} />
			<Brands />
			<Contact contactRef={contactRef} />
			<Footer />

			<MobileMenu
				catalogRef={catalogRef}
				aboutRef={aboutRef}
				contactRef={contactRef}
				scrollToSection={scrollToSection}
				isShowMobile={isShowMobile}
				toggleMobileVisible={toggleMobileVisible}
			/>
		</div>
	)
}
