import newsStyles from "../styles/News.module.css";
import NewsItem from "./NewsItem";
const NewsList = ({ news }) => {
  return (
    <div className={newsStyles.grid}>
      {news.map((n) => (
        <div key={n.title} className={newsStyles.grid}>
            {/* <h3 >{n.title}</h3> */}

            <NewsItem eachNews={n}/>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
