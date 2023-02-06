import React, { FC } from 'react'

import { IUploadField } from './IUploadField'
import styles from './UploadField.module.scss'
import { useUploadField } from './useUploadField'

const UploadField: FC<IUploadField> = ({ title, folder, onChange, value }) => {
	const { uploadFile } = useUploadField(onChange, folder)

	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			{value && <img src={value} alt="" width={70} />}
			<label>
				<span>Choose File</span>
				<input type="file" onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField
