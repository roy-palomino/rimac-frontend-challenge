import Header from "../components/Header";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import JoinForm from "../components/JoinForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <Separator />
          <JoinForm />
        </Container>
      </main>
    </>
  );
}

export default App;
