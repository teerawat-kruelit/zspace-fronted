import Navbar from "../components/Navbar";
import TopUsers from "../components/TopUsers";
import LandingHome from "../components/Landing/LandingHome";
import FeedTokenCard from "../components/FeedToken";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Zspace</title>
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
