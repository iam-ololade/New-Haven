import Head from "next/head";
import Header from "../components/Header";
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Listed from "../components/Listed";
import Brand from '../components/Brand';
import Services from "../components/Services";
import Reviews from "../components/Reviews";
// import GetListed from "../components/GetListed";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: Haven"
        description="Find your safe Haven."
        canonical="https://haven.vercel.app/"
        openGraph={{
          url: "https://haven.vercel.app/",
        }}
      />
      <Head>
        <title>Haven</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <Hero/>
      <Brand />
      <Listed />
      <Services />
      <Reviews/>
      <GetListed/>
      <Footer />
    </div>
  );
}
