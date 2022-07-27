import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import playerStyles from "../../styles/News.module.css";

/**
 * @pointer
 * Fallback Norms:
 *
 * fallback false:
 * if the page doesn't exist, gives 404
 *
 * fallback true:
 * if the page doesn't exist, runs getStaticProps. If found render page.
 * can show loading using router.isFallback.
 *
 * eg:
 * if (router.isFallback) {
 *      return <div>Loading...</div>
 * }
 *
 * fallback 'blocking':
 * quite similar to fallback: true, except that it does not return
 * the dummy loading page when a page that hasn't been cached is hit for the first time
 * Instead, it just makes the browser hang, until the page is rendered for the first time.
 * Future requests to that page are quickly served from the cache however, just like fallback: true.
 *
 *
 * see: https://stackoverflow.com/a/67787457
 */

const PlayerDetail = ({ playerData }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className={playerStyles.card}>
        <Image
          // loader={myLoader}
          src={playerData.strThumb}
          alt={`Picture of ${playerData.strPlayer}`}
          width={300}
          height={300}
          responsive="true"
        />
        <h1>{playerData.strPlayer}</h1>
        <div>{playerData.strTeam}</div>
        <div>{playerData.strTeam2}</div>
      </div>

      <p className={playerStyles.description}>{playerData.strDescriptionEN}</p>
      <br />
      <Link href="/players">
        <a className={playerStyles.card}>Go back</a>
      </Link>
      <br />
      <h3>Pictures: </h3>
      <div className={playerStyles.card}>
        <Image
          // loader={myLoader}
          src={playerData.strFanart1}
          alt={`fanart of ${playerData.strPlayer}`}
          width={300}
          height={300}
          responsive="true"
        />
      </div>

      <div className={playerStyles.card}>
        <Image
          // loader={myLoader}
          src={playerData.strFanart2}
          alt={`fanart of ${playerData.strPlayer}`}
          width={300}
          height={300}
          responsive="true"
        />
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const playerId = context.params.id;
  const data = await fetch(
    `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`
  );
  const playerData = (await data.json()).players[0];

  /**
   * @pointer
   *
   * what is notFound: true?
   *
   * A page runs when fallback:true, next.js tries to find page in the already generated staic pages, with id/slug/anything.
   * If the page is not there, next runs getStaticProps() to generate the page, with id/slug/anything,
   * if props can't find the right data, then don't return anything to render, rather show 404.
   *
   *
   * to show 404
   * we return **notFound: true**
   *
   * eg: return { notFound: true };
   */
  if (!playerData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      playerData
    }
    // revalidate: 10 // In seconds, no need in this project
  };
};

export const getStaticPaths = async () => {
  const data = await fetch(process.env.PLAYER_LIST_URL);
  const playerList = (await data.json()).players;
  const paths = playerList.map((player) => ({
    params: { id: player.idPlayer.toString() }
  }));

  return {
    paths: paths.slice(0, 7), // experimenting with fallback, loading the first 7 pages while build
    fallback: true
  };
};

export default PlayerDetail;
