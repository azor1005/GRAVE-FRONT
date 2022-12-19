import { Navbar } from "../../components/Navbar/Navbar";
import { GameListAll } from "../../components/GameListAll/GameListAll";

export default function AllGames() {
  return (
    <section>
      <Navbar></Navbar>
      <GameListAll></GameListAll>
    </section>
  );
}
