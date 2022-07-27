import PlayerCard from "../components/PlayerCard";
import playerStyles from "../styles/News.module.css";

const players = ({ playerList }) => {
    console.log(playerList.length);
  return (
      <div className={playerStyles.grid}>
      {playerList.map((player) => (
        <div key={player.idPlayer} className={playerStyles.grid}>
          <PlayerCard player={player} />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  // const data = await fetch(process.env.PLAYER_LIST_URL)
  // const playerList = (await data.json()).players;
  const playerList = [
    {
      idEdit: "1500806",
      strUsername: "lolef91988@5k2u.com",
      strEditType: "Updated Player Loved",
      strReason: null,
      date: "2022-07-26 17:50:38",
      idTeam: null,
      idPlayer: "34146304",
      idLeague: null,
      idEvent: null,
      strTeam: null,
      strPlayer: null,
      strLeague: null,
      strEvent: null,
      strSport: null,
      strEventPoster: null,
      strEventSquare: null,
      strPlayerThumb: null,
      strTeamBadge: null
    },
    {
      idEdit: "1500807",
      strUsername: "lolef91988@5k2u.com",
      strEditType: "Updated Player Loved",
      strReason: null,
      date: "2022-07-26 17:52:02",
      idTeam: null,
      idPlayer: "34146370",
      idLeague: null,
      idEvent: null,
      strTeam: null,
      strPlayer: null,
      strLeague: null,
      strEvent: null,
      strSport: null,
      strEventPoster: null,
      strEventSquare: null,
      strPlayerThumb: null,
      strTeamBadge: null
    },
    {
      idEdit: "1500808",
      strUsername: "lolef91988@5k2u.com",
      strEditType: "Updated Player Loved",
      strReason: null,
      date: "2022-07-26 17:52:24",
      idTeam: null,
      idPlayer: "34146371",
      idLeague: null,
      idEvent: null,
      strTeam: null,
      strPlayer: null,
      strLeague: null,
      strEvent: null,
      strSport: null,
      strEventPoster: null,
      strEventSquare: null,
      strPlayerThumb: null,
      strTeamBadge: null
    }
  ];
  // console.log(playerList);

  return {
    props: {
      playerList
    }
  };
};

export default players;
