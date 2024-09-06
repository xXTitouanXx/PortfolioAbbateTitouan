import Head from "next/head";

interface Props {
    title?: string;
    description?: string;
}

export const Seo = ({title, description}: Props) => {
    return (
        <Head>
            <title>{"Abbate Titouan Portfolio"}</title>
            <meta name="description" content={description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="assets/images/portefeuille.png"/>
        </Head>
    )
}