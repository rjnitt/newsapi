import React from "react";

const NewsItem = (props) => {
  let { title, desc, imageUrl, externalLink, publishedAt, auther, source } =
    props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "22rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}
          >
            {source}
          </span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              by {auther} at {new Date(publishedAt).toUTCString()}{" "}
            </small>
          </p>
          <a
            href={externalLink}
            className="btn btn-primary btn-sm"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
