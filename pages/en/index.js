import Head from "next/head";
import Home from "../index";

export default function EnglishHome() {
  return (
    <>
      <Head>
        <title>Stefan Koprivica | Web Design & Development</title>
        <meta
          name="description"
          content="I create modern websites and Shopify stores focused on design, user experience and performance."
        />
        <html lang="en" />
      </Head>

      <Home />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      locale: "en",
      messages: require("../../messages/en.json"),
    },
  };
}