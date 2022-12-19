import { Navbar } from "../../components/Navbar/Navbar";
import {PlataformsCard} from "../../components/Plataforms/Plataforms";

export default function Home() {
  return (
    <section>
      <Navbar></Navbar>
      <PlataformsCard />
    </section>
  );
}
