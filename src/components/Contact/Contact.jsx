import emailjs from '@emailjs/browser'
import styles from './Contact.module.scss'

import { useState } from 'react'

import { FaPhoneSquareAlt } from 'react-icons/fa'

export const Contact = ({ contactRef }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()

		emailjs
			.send(
				'service_4dg1d7r',
				'template_9nzv88a',
				{
					from_name: formData.name,
					from_email: formData.email,
					message: formData.message,
				},
				'6qOQGJ4W_1tVIlq63'
			)
			.then(
				() => {
					setFormData({ name: '', email: '', message: '' })
				},
				error => {
					console.error('Помилка надсилання:', error)
					alert('Помилка при надсиланні. Спробуйте ще раз.')
				}
			)
	}

	return (
		<div className={styles.contact} ref={contactRef}>
			<div className={styles.info}>
				<div className={styles.text}></div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d164.23114905614662!2d24.5371929117289!3d48.80673487816064!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1739821608347!5m2!1suk!2sua'
					style={{ border: 'none' }}
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>

			<div className={styles.feedback}>
				<h1>
					<FaPhoneSquareAlt size={36} /> Зворотній зв'язок
				</h1>
				<div className={styles.mini}>
					<span>
						<p>Ім'я</p>
						<input
							name='name'
							type='text'
							placeholder='Текст тут...'
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</span>
					<span>
						<p>Електронна адреса</p>
						<input
							name='email'
							type='email'
							placeholder='Текст тут...'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</span>
				</div>

				<span style={{ marginTop: '5px' }}>
					<p>Повідомлення</p>
					<textarea
						name='message'
						placeholder='Текст тут...'
						value={formData.message}
						onChange={handleChange}
						required
					></textarea>
				</span>
				<button onClick={handleSubmit}>Надіслати</button>
			</div>
		</div>
	)
}
