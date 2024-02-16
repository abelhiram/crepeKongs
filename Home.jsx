import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Header from "components/home/Header";
import Citas from "components/home/Citas";
import Galeria from "components/home/Galeria";
import Location from "components/home/Location";

function Home() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Header></Header>
      <Galeria></Galeria>
      <Citas></Citas>
      <Location></Location>
      <Footer></Footer>
    </Layout>
  );
}

export default Home;
