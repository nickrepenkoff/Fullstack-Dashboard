import { useMutation } from '@tanstack/react-query'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'

import { queryClient } from '../../../../../../pages/_app'
import { ReviewsService } from '../../../../../services/reviews/reviews.service'
import { IReviewDto } from '../../../../../shared/interfaces/IReview'
import Field from '../../../../ui/Field/Field'
import styles from '../AddReviewForm/AddReviewForm.module.scss'

const AddReviewForm: FC<{ movieId: number }> = ({ movieId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<IReviewDto>({ mode: 'onChange' })

	const { mutateAsync } = useMutation(
		['add-review'],
		(data: IReviewDto) => ReviewsService.createReview({ ...data, movieId }),
		{
			async onSuccess(data) {
				reset()
				await queryClient.invalidateQueries(['get movie', movieId])
			},
		}
	)

	const onSubmit: SubmitHandler<IReviewDto> = async data => {
		await mutateAsync(data)
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.description}>
				<Field
					{...register('description', { required: 'Description is required' })}
					placeholder={'Add public review'}
					error={errors.description}
				/>

				<button className={styles.button}>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddReviewForm
