import styles from './Brands.module.scss'

import alfaromeo from 'assets/brands/icons8-alfa-romeo.svg'
import bmw from 'assets/brands/icons8-bmw.svg'
import citroen from 'assets/brands/icons8-citroen.svg'
import jeep from 'assets/brands/icons8-jeep.svg'
import tesla from 'assets/brands/icons8-tesla.svg'
import volkswagen from 'assets/brands/icons8-volkswagen.svg'

export const Brands = () => {
	return (
		<div className={styles.brands}>
			<img src={bmw} alt='' />
			<img src={volkswagen} alt='' />
			<img src={alfaromeo} alt='' />
			<img src={jeep} alt='' />
			<img src={citroen} alt='' />
			<img src={tesla} alt='' />

			<div className={styles.effect}></div>
		</div>
	)
}
