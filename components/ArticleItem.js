import Link from "next/link";
import articleStyles from "../styles/Article.module.css";
const ArticleItem = ({ eachNews }) => {
  return (
    <>
      <div className={articleStyles.card}>
        {/* <Link href='/news/[title]' as={`/news/${eachNews.title}`}>
        </Link> */}
        {JSON.stringify(eachNews)}</div>
    </>
  );
};

export default ArticleItem;
