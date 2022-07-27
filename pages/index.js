import Head from "next/head";
import Link from "next/link";
import NewsList from "../components/NewsList";


export default function Home({ news }) {
  return (
    <div>
      <Head>
        <title>Soccer stars</title>
        <meta name="keywords" content="football, soccer" />
      </Head>

       {/* link to players */}
      <Link href={`/players`}>
        <a className="arrow">
          <div>See players &rarr;</div>
        </a>
      </Link>

      {/* rendering news list */}
      <NewsList news={news} />

      
      {/* styled jsx needs to be in the level of the element its being used, if it's declared in inner elements, won't work
      best to keep as the outer most element.  */}
      <style jsx>
        {`
          .arrow:hover{
            color: #0070f3;
          }
        `}
      </style>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${process.env.NEWS_API_KEY}`
  );
  const news = (await data.json()).articles;

  return {
    props: {
      news
    }
  };
};
