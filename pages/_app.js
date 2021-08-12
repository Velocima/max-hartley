import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='icon' type='image/ico' href='favicon/favicon.ico' />
				<link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
