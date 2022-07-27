import Head from "next/head";
import NewsList from "../components/NewsList";


export default function Home({ news }) {
  return (
    <div>
      <Head>
        <title>Soccer stars</title>
        <meta name="keywords" content="football, soccer" />
      </Head>
      <NewsList news={news} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  
  // const data = await fetch(
  //   `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${process.env.NEWS_API_KEY}`
  // );
  // const news = await data.json();
  const news = [
    {
      source: { id: null, name: "Daily Mail" },
      author: "Olly Allen, Chris Wheeler",
      title:
        "Cristiano Ronaldo arrives at Manchester United training base ahead of crunch talks with Erik ten Hag - Daily Mail",
      description:
        "The 37-year-old has missed the first three weeks of the club's pre-season - including the whole of their tour of Thailand and Australia - after being given compassionate leave.",
      url: "https://www.dailymail.co.uk/sport/football/article-11049435/Cristiano-Ronaldo-arrives-Manchester-prepares-crunch-talks-Erik-ten-Hag.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/07/26/11/60703369-0-image-a-36_1658829778693.jpg",
      publishedAt: "2022-07-26T10:01:00Z",
      content:
        "Cristiano Ronaldo has arrived at Manchester United's Carrington training ground as he prepares for crunch talks with Erik ten Hag about his Old Trafford future. \r\nThe 37-year-old has missed the first… [+5139 chars]"
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "White & Jordan Live : England vs Sweden Preview - talkSPORT",
      description:
        "Join Sam Matterface and Lucy Ward LIVE on talkSPORT as they react to the BIGGEST sports stories of the day!✅ 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲: YouTube.com/c/talkSPORT🖥️Pe...",
      url: "https://www.youtube.com/watch?v=og-vfRNu-9A",
      urlToImage: "https://i.ytimg.com/vi/og-vfRNu-9A/maxresdefault_live.jpg",
      publishedAt: "2022-07-26T09:02:32Z",
      content: null
    }
  ];
  // console.log(news);

  return {
    props: {
      news
    }
  };
};
