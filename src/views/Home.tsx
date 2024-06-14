import Header from "../components/Header";
import Container from "../components/Container";
import Hero from "../components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <h2 className="text-2xl font-bold text-gray-800">ga</h2>
        </Container>
      </main>
    </>
  );
}

export default App;
