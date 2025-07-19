import './global.css'
import Layout from '../components/layout'
import Head from "next/head";

export default function App({ Component, pageProps }) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
