import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import '../app/assets/styles/globals.scss'
import AuthProvider from '../app/providers/auth-provider/AuthProvider'
import { ThemeProvider } from '../app/providers/theme-provider/ThemeProvider'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<ThemeProvider>
					<Component {...pageProps} />
				</ThemeProvider>
			</AuthProvider>
		</QueryClientProvider>
	)
}

export default MyApp
