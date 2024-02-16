import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Header from "components/home/Header";

function Home() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Header></Header>
      <Footer></Footer>
    </Layout>
  );
}

export default Home;
