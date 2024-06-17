import Header from "../components/Header";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import JoinForm from "../components/JoinForm";

import BottomLeftBlow from "../components/BottomLeftBlow";
import TopRightBlow from "../components/TopRightBlow";

function App() {
  return (
    <>
      <main className="bg-[#F8F9FF] md:min-h-svh relative overflow-hidden">
        <Header />
        <TopRightBlow />
        <Container>
          <div className="flex flex-row max-w-[1180px] mx-auto">
            <div className="hidden w-[480px] h-[560px] overflow-hidden md:block">
              <img
                src="/images/hero-image.png"
                alt="Descripción de la imagen"
                className="object-cover object-center w-full h-full transform -scale-x-100 rounded-2xl"
              />
            </div>
            <div className="max-w-[596px] md:flex justify-center w-full">
              <div className="max-w-[352px] mx-auto">
                <Hero />
                <Separator />
                <JoinForm />
              </div>
            </div>
          </div>
        </Container>
        <BottomLeftBlow />
      </main>
      <Footer />
    </>
  );
}

export default App;
