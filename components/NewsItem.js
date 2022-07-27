import Link from "next/link";
import newsStyles from "../styles/News.module.css";
const NewsItem = ({ eachNews }) => {
  // console.log(eachNews);
  return (
    <>
      <Link
        href={{
          pathname: "/news/[title]",
          query: {
            // title:eachNews.title,  // passed it in "as" with url same thing
            eachNews: JSON.stringify(eachNews) // we have pass as a string, otherwise it'll be empty
          }
        }}
        as={`/news/${eachNews.title}`}
      >
        <a className={newsStyles.card}>
          <h3>{eachNews.title} &rarr;</h3>
          <p>{eachNews.description}</p>
        </a>
      </Link>
    </>
  );
};

export default NewsItem;
