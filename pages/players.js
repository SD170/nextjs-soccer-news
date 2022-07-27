import Link from "next/link";
import PlayerCard from "../components/PlayerCard";
import playerStyles from "../styles/News.module.css";

const players = ({ playerList }) => {
  // console.log(playerList.length);
  return (
    <>
      {/* link to news */}
      <Link href={`/`}>
        <a className="arrow">
          <div>See news &rarr;</div>
        </a>
      </Link>

      <div className={playerStyles.grid}>
        {/* rendering player list */}
        {playerList.map((player) => (
          <div key={player.idPlayer} className={playerStyles.grid}>
            <PlayerCard player={player} />
          </div>
        ))}
      </div>

      {/* styled jsx needs to be in the level of the element its being used, if it's declared in inner elements, won't work
      best to keep as the outer most element.  */}
      <style jsx>
        {`
          .arrow:hover {
            color: #0070f3;
          }
        `}
      </style>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await fetch(process.env.PLAYER_LIST_URL);
  const playerList = (await data.json()).players;

  return {
    props: {
      playerList
    }
  };
};

export default players;
