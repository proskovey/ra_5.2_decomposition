import React from "react";
 /*
 Компонен для рендера новостей
 */
function News(props) {
  const item = props.item;

  const arrLinks = item.links.map((value) => (
    <a className="news__link" href="#0" key={Math.random()}>
      {value}
    </a>
  ));

  const arrCourse = item.course.map((value) => (
    <span className="course" key={Math.random()}>{value}</span>
  ))
  return (
    <div className="box-news">
      <div className="news">
        <div className="news__nav-box">
          <div className="news__nav">{arrLinks}</div>
          <div className="news__date">{item.date}</div>
        </div>

        {props.children}

        <div className="news__course-box">
            {arrCourse}
        </div>
      </div>

      <div className="news__advertisement">
        <img src={item.newsAdvertisement.img} alt="" className="news__advertisement-img" />
        <span className="news__advertisement-title">{item.newsAdvertisement.title}</span>
        <div className="news__advertisement-text">
          {item.newsAdvertisement.text}
        </div>
      </div>
    </div>
  );
}

export default News;
