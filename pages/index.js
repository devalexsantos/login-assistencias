import Head from "next/head";
import CardsSection from "../components/CardsSection";
import Header from "../components/Header";

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://login-strapi-nh2re.ondigitalocean.app/api/assistencias-login-industrias`
  );
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: { cards: data },
    revalidate: 10, // In seconds
  };
}

export default function Home({ cards }) {
  return (
    <div>
      <Head>
        <title>Login - Assistências Técnicas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <CardsSection data={cards} />
      </main>
    </div>
  );
}
