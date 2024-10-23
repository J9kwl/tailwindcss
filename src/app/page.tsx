import Herosection from "./components/Herosection/hero";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"
import About from "./components/About/about";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Herosection></Herosection>
      <About></About>
      <Footer></Footer>
    </div>
  );
}
