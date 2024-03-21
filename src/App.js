import News from "./components/News/news";
import List from "./components/List/list";
import Img from "./components/ImgComp/img";
import Search from "./components/Search/search";
import Banner from "./components/Banner/banner";
import Footer from "./components/Footer/footer";
import FooterCardItem from "./components/FooterCardItem/footerCardItem";
import FooterCardText from "./components/FooterCardText/footerCardText";
import React from "react";

const newsNavBox = {
  links: ["Сейчас в СМИ", "в Геомании", "Рекомендуем"],
  date: "31 июля, среда 02 32",
  course: ["USD MOEX 63.52", "EUR MOEX 70.86", "НЕФТЬ 64.90"],
  newsAdvertisement: {
    img: "news-img.png",
    title: "Работа над ошибками",
    text: "Смотрите на Яндекс и запоминайте",
  },
};

const newslist = {
  list: [
    {
      img: "news-img.png",
      title:
        "И по сей день в центральных регионах звучит перекатами боевой клич героев",
    },
    {
      img: "123.png",
      title:
        "И по сей день в центральных регионах звучит перекатами боевой клич героев",
    },
    {
      img: "news-img.png",
      title:
        "И по сей день в центральных регионах звучит перекатами боевой клич героев",
    },
    {
      img: "123.png",
      title:
        "И по сей день в центральных регионах звучит перекатами боевой клич героев",
    },
    {
      img: "news-img.png",
      title:
        "И по сей день в центральных регионах звучит перекатами боевой клич героев",
    },
    {
      img: "123.png",
      title:
        "И по сей день в центральных регионах звучит перекатами боевой клич героев",
    },
  ],
  style: {
    li: "news__list",
    img: "news__img",
    a: "news__title-link",
    ul: "news__item",
  },
};

const searchList = {
  list: [{
    title: "Видео"
  },
  {
    title: "Картинки"
  },
  {
    title: "Новости"
  },
  {
    title: "Карты"
  },
  {
    title: "Маркет"
  },
  {
    title: "Переводчик"
  },
],
  style: {
    li: "search__nav",
    a: "serch__nav-link",
    ul: "search__nav"
  }
};

const search = {
  title: "Яндекс",
  button: "Найти",
  text: "Найдется всё. Например, фаза луны сегодня"
};

const footer = {
  footerCard: [
    {
      footerCardItem: [{
        title: 'Погода',
        footerCardText: {
          text: ['+17']
        }
      },
      {
        title: 'Посещаемое',
        footerCardText: {
          text: ['Недвижимость - о сталинках', 'Маркет - люстры и светильники', 'Авто.ру - привод 4*4 до 500.000']
        }
      }]
    },
    {
      footerCardItem: [{
        title: 'Карта Германии',
        footerCardText: {
          text: ['Расписания']
        }
      },
      {
        title: 'Телепрограмма',
        footerCardText: {
          text: ['02:00 ТНТ', '02:15 Джингли', '02:25 Наедине со всеми']
        }
      }]
    },
    {
      footerCardItem: [{
        title: 'Эфир',
        footerCardText: {
          text: ['Управление как искусство', 'Ночь', 'Мир в это время']
        }
      }]
    },
  ]
}

const banner = {
  title: "Текст на банере",
  link: "Смотреть трейлер",
  img: "banner.png"
}

function App() {
  return (
    <React.Fragment>
      <News item={newsNavBox}>
        <List {...newslist}>
          {(img, styleImg) => <Img img={img} styleImg={styleImg} />}
        </List>
      </News>
      <Search item={search}>
        <List {...searchList}>
          {() => null}
        </List>
      </Search>
      <Banner {...banner}></Banner>
      <Footer {...footer}>
        {(item) => <FooterCardItem {...item}>
            {(item) => <FooterCardText {...item}/>}
        </FooterCardItem>}
      </Footer>
    </React.Fragment>
  );
}

export default App;
