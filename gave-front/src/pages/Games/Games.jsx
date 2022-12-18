import { Navbar } from "../../components/Navbar/Navbar";
import { GameList } from "../../components/GamesList/GamesList";

export default function Games() {
  return (
    <section>
      <Navbar></Navbar>
      <GameList></GameList>
    </section>
  );
}
