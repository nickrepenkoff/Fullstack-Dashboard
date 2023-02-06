import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaRegUserCircle } from 'react-icons/fa'

// import { FaRegUserCircle } from 'react-icons/all'
import { useAuth } from '../../../../hooks/useAuth'
import { useOutside } from '../../../../hooks/useOutside'
import { AuthService } from '../../../../services/auth/auth.service'
import { menuAnimation } from '../../../../utils/animation/fade'
import Button from '../../Button/Button'
import Field from '../../Field/Field'
import UserAvatar from '../../UserAvatar/UserAvatar'

import styles from './AuthForm.module.scss'
import { IAuthFields } from './IAuthFields'
import { validEmail } from './consts'

const AuthForm = () => {
	const { ref, setIsShow, isShow } = useOutside(false)
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IAuthFields>({ mode: 'onChange' })

	const { user, setUser } = useAuth()

	const { mutate: loginSync } = useMutation(
		['login'],
		(data: IAuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user), reset(), setIsShow(false)
			},
		}
	)

	const { mutate: registerSync } = useMutation(
		['register'],
		(data: IAuthFields) => AuthService.register(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user), reset(), setIsShow(false)
			},
		}
	)

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login') loginSync(data)
		else if (type === 'register') registerSync(data)
	}
	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar
					title="Go to dashboard"
					link={'/dashboard'}
					avatarPath={user.avatarPath || ''}
				/>
			) : (
				<button onClick={() => setIsShow(!isShow)} className={styles.button}>
					<FaRegUserCircle />
				</button>
			)}

			<motion.div
				initial={false}
				animate={isShow ? 'open' : 'closed'}
				variants={menuAnimation}
			>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter valid email',
							},
						})}
						placeholder="Email"
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length is 7 symbols',
							},
						})}
						placeholder="Password"
						type={'password'}
						error={errors.password}
					/>
					<div className={styles.loginButton}>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			</motion.div>
		</div>
	)
}

export default AuthForm
