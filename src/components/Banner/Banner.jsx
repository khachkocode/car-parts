import styles from './Banner.module.scss'

import down from 'assets/down.svg'
import wheels from 'assets/wheels.png'

export const Banner = ({ aboutRef, scrollToSection }) => {
	return (
		<div className={styles.banner}>
			<div className={styles.description}>
				<div className={styles.text}>
					<h1>Кращі запчастини тільки тут!</h1>
					<p>
						Широкий вибір якісних деталей для вашого авто. Оригінальні
						запчастини та надійні аналоги за доступними цінами. Швидка доставка
						та професійна консультація!
					</p>
				</div>
				<button onClick={() => scrollToSection(aboutRef)}>
					Більше про нас
				</button>
			</div>
			<img src={wheels} alt='' />

			<div className={styles.effect}></div>
			<img src={down} className={styles.down}></img>
		</div>
	)
}
