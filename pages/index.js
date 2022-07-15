import Navbar from "../layouts/Navbar";
import TopUsers from "../layouts/TopUsers";
import LandingHome from "../layouts/Landing/LandingHome";
import FeedTokenCard from "../layouts/FeedToken";
import Footer from "../layouts/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Zspace</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <LandingHome />
      <div className="container">
        <TopUsers title={"Top Buyer"} />
        <TopUsers title={"Top Seller"} />
        <FeedTokenCard />
      </div>
      <Footer />
    </>
  );
}
