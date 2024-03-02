import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsSolo = (props) => {
  NewsSolo.defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
    author: "unknown",
    publishedAt: "date",
    source: "unknown",
    apiKey: "apiKey",
  };

  NewsSolo.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
    author: PropTypes.string,
    publishedAt: PropTypes.string,
    source: PropTypes.string,
    apiKey: PropTypes.string,
  };

  const [newsItemArticles, setNewsItemArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  const fetchMoreData = async () => {
    console.log("i am news fetch more data");

    setLoading(true);
    console.log("page: " + page);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pagesize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedjson = await data.json();
    console.log(parsedjson);
    setTotalResult(parsedjson.totalResults);
    setLoading(false);
    setNewsItemArticles(newsItemArticles.concat(parsedjson.articles));
  };

  const upSlide = async () => {
    console.log("i am news fetch more data");

    setLoading(true);
    setNewsItemArticles([]);
    console.log("page: " + page);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pagesize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedjson = await data.json();
    console.log(parsedjson);
    setTotalResult(parsedjson.totalResults);
    setLoading(false);
    setNewsItemArticles(parsedjson.articles);
  };

  const updatePage = async () => {
    console.log("i am news updatePage");
    setLoading(true);

    console.log("page: " + page);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedjson = await data.json();
    console.log(parsedjson);
    setTotalResult(parsedjson.totalResults);
    setLoading(false);
    setNewsItemArticles(parsedjson.articles);
  };

  useEffect(() => {
    updatePage();
  }, []);

  // const handlePrevious = async () => {
  //   console.log("previos news");
  //   setPage(page - 1);
  //   updatePage();
  // };

  // const componentDidMount = async () => {
  //   console.log("i am news componentDidMount");
  //   updatePage();
  // };

  // const handleNext = async () => {
  //   console.log("next news");
  //   setPage(page + 1);
  //   updatePage();
  // };

  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleTouchStart = (event) => {
    console.log("handleTouchStart" + event);
    const touchStartY = event.touches[0].clientY;
    setSwipeDirection(null);

    const handleTouchMove = (moveEvent) => {
      const touchEndY = moveEvent.touches[0].clientY;
      const distance = touchStartY - touchEndY;
      // console.log("touchEndY" + touchEndY);
      // console.log("touchStartY" + touchStartY);
      console.log("distance" + distance);
      if (distance > 30) {
        setSwipeDirection("up");
        document.removeEventListener("touchmove", handleTouchMove);
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
  };

  const handleTouchEnd = () => {
    if (swipeDirection === "up") {
      // Handle swipe up action here, such as showing content
      console.log("Swiped up!");
      upSlide();
    }
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ marginTop: "70px" }}>
        News: Top {props.category} Headline
      </h1>
      {loading && <Spinner />}
      <div
        className="swipe-up-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="row">
          {newsItemArticles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : "NA"}
                  desc={element.description ? element.description : "NA"}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://techcrunch.com/wp-content/uploads/2024/02/carlos-tavares-getty.jpg?resize=1200,800"
                  }
                  externalLink={element.url}
                  publishedAt={element.publishedAt}
                  auther={element.author != null ? element.author : "unknown"}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* 
        <InfiniteScroll
          dataLength={newsItemArticles.length}
          next={fetchMoreData}
          hasMore={newsItemArticles.length !== totalResult}
          loader={<Spinner />}
        ></InfiniteScroll>
      </div> */}
    </div>
  );
};

export default NewsSolo;
