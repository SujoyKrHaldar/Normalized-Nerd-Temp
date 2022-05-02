import Head from "next/head";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Normalized nerd | Home</title>
        <meta
          name="description"
          content="Hello, People from the future! Welcome to Normalized Nerd. 
          Start learning with me by Subscribing to this channel."
        />
      </Head>

      <Navbar />
      <Body />
      <Footer />
    </>
  );
}
