import { TextareaHTMLAttributes } from 'react'

import { IFieldProps } from '../Field/IField'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface ITextArea extends TypeInputPropsField {}
