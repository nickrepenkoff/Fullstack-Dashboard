import {
	FC,
	PropsWithChildren,
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react'

import { IThemeProvider } from './IThemeProvider'

export const ThemeContext = createContext({} as IThemeProvider)

const getCurrentTheme = () =>
	window.matchMedia('(prefers-color-scheme: dark)').matches

const addDarkClass = (isDark: boolean) => {
	if (isDark) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

	useEffect(() => {
		const ls = localStorage.getItem('darkTheme')

		setIsDarkTheme(ls ? Boolean(ls) : getCurrentTheme())

		addDarkClass(ls ? Boolean(ls) : getCurrentTheme())
	}, [])

	const toggleDark = useCallback(() => {
		const isDark = !isDarkTheme

		localStorage.setItem('darkTheme', JSON.stringify(isDark))
		setIsDarkTheme(isDark)

		addDarkClass(isDark)
	}, [isDarkTheme])

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleDark }}>
			{children}
		</ThemeContext.Provider>
	)
}
