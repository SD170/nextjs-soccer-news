import Image from "next/image";
import Link from "next/link";
import playerStyles from "../styles/News.module.css";
const PlayerCard = ({ player }) => {
  return (
    <>
      <Link href="/players/[id]" as={`/players/${player.idPlayer}`}>
        <a className={playerStyles.card}>
          <Image
            // loader={myLoader}
            src="/player-placeholder.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <h3>ID: {player.idPlayer}</h3>
          <p>Click here &rarr;</p>
        </a>
      </Link>
    </>
  );
};

export default PlayerCard;
