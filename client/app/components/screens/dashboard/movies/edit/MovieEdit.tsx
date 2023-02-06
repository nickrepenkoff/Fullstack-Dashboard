import React from 'react'
import { Controller } from 'react-hook-form'

import { IMediaResponse } from '../../../../../services/media/media.service'
import Button from '../../../../ui/Button/Button'
import Field from '../../../../ui/Field/Field'
import Layout from '../../../../ui/Layout/Layout'
import Loader from '../../../../ui/Loader/Loader'
import UploadField from '../../../../ui/UploadField/UploadField'
import Heading from '../../../../ui/heading/Heading'

import styles from './MovieEdit.module.scss'
import { useMovieEdit } from './useMovieEdit'

const MovieEdit = () => {
	const { control, register, handleSubmit, onSubmit, errors, data, isLoading } =
		useMovieEdit()

	return (
		<Layout title="Movie edit">
			<Heading>Edit Movie</Heading>
			{isLoading ? (
				<Loader count={4} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Field
						{...register('name', {
							required: 'Movie name is required',
						})}
						placeholder="Movie name"
						error={errors.name}
					/>

					<Field
						{...register('fees', {
							required: 'Fees are required',
							valueAsNumber: true,
						})}
						type={'number'}
						placeholder="Fees $"
						error={errors.fees}
					/>

					<div className={styles.controller}>
						<Controller
							name="poster"
							control={control}
							render={({ field: { onChange, value } }) => (
								<UploadField
									folder="posters"
									onChange={(value: IMediaResponse) => {
										onChange(value.url)
									}}
									value={value}
								/>
							)}
						/>
					</div>
					<Button>Save</Button>
				</form>
			)}
		</Layout>
	)
}

export default MovieEdit
