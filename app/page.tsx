import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Modalidades from "@/components/Modalidades";
import MontePlano from "@/components/MontePlano";
import Horarios from "@/components/Horarios";
import Estrutura from "@/components/Estrutura";
import ContatoFinal from "@/components/ContatoFinal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Modalidades />
        <MontePlano />
        <Horarios />
        <Estrutura />
        <ContatoFinal />
      </main>
    </>
  );
}
