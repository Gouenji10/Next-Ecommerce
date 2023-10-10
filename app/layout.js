import StyledComponentsRegistry from '@/lib/AntdRegistry'
import '@/styles/global.scss'
import NextTopLoader from 'nextjs-toploader';
export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<NextTopLoader />
				<StyledComponentsRegistry>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
