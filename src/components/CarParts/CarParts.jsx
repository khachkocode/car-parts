import styles from './CarParts.module.scss'

export const CarParts = ({ catalogRef, contactRef, scrollToSection }) => {
	return (
		<div className={styles.carparts} ref={catalogRef}>
			<div className={styles.part} onClick={() => scrollToSection(contactRef)}>
				<div className={styles.dark}></div>
				<h1>Автозапчастини</h1>
			</div>

			<div
				className={`${styles.part} ${styles.oil}`}
				onClick={() => scrollToSection(contactRef)}
			>
				<div className={styles.dark}></div>
				<h1>Оливи, рідини і автохімія</h1>
			</div>

			<div
				className={`${styles.part} ${styles.tools}`}
				onClick={() => scrollToSection(contactRef)}
			>
				<div className={styles.dark}></div>
				<h1>Інструменти і обладнання</h1>
			</div>

			<div
				className={`${styles.part} ${styles.lights}`}
				onClick={() => scrollToSection(contactRef)}
			>
				<h1>Освітлення</h1>
				<div className={styles.dark}></div>
			</div>

			<div
				className={`${styles.part} ${styles.interior}`}
				onClick={() => scrollToSection(contactRef)}
			>
				<div className={styles.dark}></div>
				<h1>Інтер'єр</h1>
			</div>

			<div
				className={`${styles.part} ${styles.body}`}
				onClick={() => scrollToSection(contactRef)}
			>
				<div className={styles.dark}></div>
				<h1>Кузовні запчастини</h1>
			</div>

			<div
				className={`${styles.part} ${styles.wheels}`}
				onClick={() => scrollToSection(contactRef)}
			>
				<div className={styles.dark}></div>
				<h1>Шини та диски</h1>
			</div>

			<div
				className={`${styles.part} ${styles.exterior}`}
				onClick={() => scrollToSection(contactRef)}
			>
				<div className={styles.dark}></div>
				<h1>Екстер'єр</h1>
			</div>
		</div>
	)
}
