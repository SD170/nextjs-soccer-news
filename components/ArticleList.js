import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";
const ArticleList = ({ news }) => {
  return (
    <div className={articleStyles.grid}>
      {news.map((n) => (
        <div key={n.source.id} className={articleStyles.grid}>
            {/* <h3 >{n.title}</h3> */}

            <ArticleItem eachNews={n}/>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
