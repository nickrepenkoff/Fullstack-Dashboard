export interface IUploadField {
	title?: string
	folder?: string
	value?: string
	onChange: (...event: any) => void
}
