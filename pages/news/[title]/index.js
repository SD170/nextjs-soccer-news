import Link from "next/link";
import { useRouter } from "next/router";

const NewsPage = ({ news }) => {
  /**
   * Can get data with router. Also from context param in getServerSideProps/getStaticProps
   * const router = useRouter();
   * console.log(router.query)
   */

  return (
    <>
      {news ? (
        <>
          <h1>{news.title}</h1>
          <p>{news.content || news.description}</p>
          <br />
          <Link href="/">Go back</Link>
        </>
      ) : (
        <>
          <h1>Error: Please go back</h1>
        </>
      )}
    </>
  );
};

export const getServerSideProps = (context) => {
  // console.log(context.query);

  let news='';
  try {
    news = JSON.parse(context.query.eachNews);
  } catch (error) {}

  return {
    props: {
      news
    }
  };
};

export default NewsPage;
