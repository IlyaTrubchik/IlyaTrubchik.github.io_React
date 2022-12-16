import './PersonPage.css';
import './styles/page_style.css';
import {Timeline,TimelineItem} from 'vertical-timeline-component-for-react';
import PhotoAlbum from 'react-photo-album';
import React from 'react';
import { LOCALES } from './i18n/locales';
import { FormattedMessage } from 'react-intl';
import { messages } from './i18n/messages';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import { ToggleButton,ToggleButtonGroup,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Doers_Eng } from './JS/Scripts';
export const TimeLineDates=[
  {
   dates:[
      {
        date:"1978 г.",
      },
      {
        
        date:"1979 г.",
      },
      {
        date:"2001 г.",
      },
      {
        date:"2003 г.",
      },
      {
        date:"2005 г.",
      },
      {
        date:"2007 г.",
      },
      {
        date:"2011 г.",
      },
      {
        date:"2012 г.",
      },
      {
        date:"2003-2018 г.",
      },
   ]
  },
  {
    dates:[
      {
        date:"1876 г.",
      },
      {
        date:"1897-1899 г.",
      },
      {
        date:"1912 г.",
      },
      {
        date:"1912-1915 г.",
      },
      {
        date:"1919 г.",
      },
      {
        date:"1931-1936 г.",
      },
      {
        date:"1945 г.",
      },
      {
        date:"1947 г.",
      },
      {
        date:"1950 г.",
      },
   ]
  },
  {
    dates:[
      {
        date:"1860 г.",
      },
      {
        date:"конец ХIX в.",
      },
      {
        date:"1892 г.",
      },
      {
        date:"1894 г.",
      },
      {
        date:"1896 г.",
      },
      {
        date:"1900 г.",
      },
      {
        date:"1904 г.",
      },
      {
        date:"1905 г.",
      },
      {
        date:"1910 г.",
      },
   ]
  },
  {
    dates:[
      {
        date:"1947 г.",
      },
      {
        date:"1965-1966 г.",
      },
      {
        date:"1969-1972 г.",
      },
      {
        date:"1973-1974 г.",
      },
      {
        date:"1974-1992 г.",
      },
      {
        date:"2000 г.",
      },
      {
        date:"2002 г.",
      },
      {
        date:"2004 г.",
      },
      {
        date:"2008 г.",
      },
    ]
  },
  {
    dates:[
      {
        date:"1961 г.",
      },
      {
        date:"1968-1979 г.",
      },
      {
        date:"1980 г.",
      },
      {
        date:"1987-1990 г.",
      },
      {
        date:"1990-1993 г.",
      },
      {
        date:"1995 г.",
      },
      {
        date:"1993-1997 г.",
      },
      {
        date:"2022 г.",
      },
    ]
  }
]

const Photos=[
  {
    photo:
    [
      {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2zC5BkT7_8YJW_qtG9AuK_1sM0Hwy77Oew&usqp=CAU",
        title:"Александр Алексеев(слева) и Олег Лукашевич(справа) на открытии одной из выставок",
        width:100,
        height:100,
      },
      {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IwTgKH2w3w1TBp4BLLOUH7B99DY0hWPuZg&usqp=CAU",
        title:"Выставка 'Наследие Беларуси' под открытым небом(парк Горького)",
        width:100,
        height:100,
      },
      {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQar1w8fAstoeDeYfl7G8nM3yi10mlSt5EoIQ&usqp=CAU",
        title:"Печатное издание сборника 'Наследие Беларуси'",
        width:100,
        height:100,
      },
      {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEx-WpmFu20RGS5woUhutRNsiCd7x9hDmPQ&usqp=CAU",
        title:"Пример работы Алексеева из сборника 'Наследие Беларуси'",
        width:100,
        height:100,
      },
      {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPAzAWtIFlWPpvJ8uAss6bfm2amN6pk3IsQ&usqp=CAU",
        title:"Мирский замок(Алексеев,'Наследие Берауси')",
        width:100,
        height:100,
    
      },
    ]
  },
  {
    photo:
    [
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Jan_Bulhak_colorisation.jpg/274px-Jan_Bulhak_colorisation.jpg",
        title:"Портрет Яна Булгака",
        width:100,
        height:100,
    
      },
      {
        src:"https://34travel.me/media/upload/images/2021/MARCH/jan-bulhak/1.jpg",
        title:"Торговые ряды Новогрудка",
        width:100,
        height:100,
    
      },
      {
        src:"https://34travel.me/media/upload/images/2021/MARCH/jan-bulhak/3.jpg",
        title:"Собор Рождества Пресвятой Богородицы в Глубоком",
        width:100,
        height:100,
    
      },
      {
        src:"https://34travel.me/media/upload/images/2021/MARCH/jan-bulhak/4-1.jpg",
        title:"Любча",
        width:100,
        height:100,
    
      },
      {
        src:"https://34travel.me/media/upload/images/2021/MARCH/jan-bulhak/5-1.jpg",
        title:"Клецк",
        width:100,
        height:100,
    
      },
    ]

  },
  {
    photo:[
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/%D0%A2%D1%8D%D0%B0%D1%84%D1%96%D0%BB_%D0%AD%D1%9E%D0%B3%D0%B5%D0%BD%D1%96%D1%8E%D1%88_%D0%91%D0%B0%D1%80%D1%8D%D1%86%D1%96.jpg/640px-%D0%A2%D1%8D%D0%B0%D1%84%D1%96%D0%BB_%D0%AD%D1%9E%D0%B3%D0%B5%D0%BD%D1%96%D1%8E%D1%88_%D0%91%D0%B0%D1%80%D1%8D%D1%86%D1%96.jpg",
        title:"Портрет Теафила Бореци",
        width:100,
        height:100,
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Astašynski_zbor._Асташынскі_збор_%28T._Boretti%2C_1894%29.jpg",
        title:"Асташинский собор(1894)",
        width:100,
        height:100,
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Niaśviskaja_ratuša._Нясьвіская_ратуша_%28T._Boretti%2C_1894%29_%282%29.jpg/615px-Niaśviskaja_ratuša._Нясьвіская_ратуша_%28T._Boretti%2C_1894%29_%282%29.jpg",
        title:"Несвижская ратуша(1894)",
        width:100,
        height:100,
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nia%C5%9Bvi%C5%BE%2C_Radzivi%C5%82%2C_Vialikaja._%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%2C_%D0%A0%D0%B0%D0%B4%D0%B7%D1%96%D0%B2%D1%96%D0%BB%2C_%D0%92%D1%8F%D0%BB%D1%96%D0%BA%D0%B0%D1%8F_%28T._Boretti%2C_1894%29_%282%29.jpg/612px-Nia%C5%9Bvi%C5%BE%2C_Radzivi%C5%82%2C_Vialikaja._%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%2C_%D0%A0%D0%B0%D0%B4%D0%B7%D1%96%D0%B2%D1%96%D0%BB%2C_%D0%92%D1%8F%D0%BB%D1%96%D0%BA%D0%B0%D1%8F_%28T._Boretti%2C_1894%29_%282%29.jpg",
        title:"Главный зал Несвижского дворца",
        width:100,
        height:100,
      },
      {
        src:"https://upload.wikimedia.org/wikipedia/commons/0/00/Davyd-Haradok%2C_Hary%C5%84-Carko%C5%ADnaja_hara._%D0%94%D0%B0%D0%B2%D1%8B%D0%B4-%D0%93%D0%B0%D1%80%D0%B0%D0%B4%D0%BE%D0%BA%2C_%D0%93%D0%B0%D1%80%D1%8B%D0%BD%D1%8C-%D0%A6%D0%B0%D1%80%D0%BA%D0%BE%D1%9E%D0%BD%D0%B0%D1%8F_%D0%B3%D0%B0%D1%80%D0%B0_%28T._Boretti%2C_1894%29_%282%29.jpg",
        title:"Давыд-городок",
        width:200,
        height:200,
      }
    
    ]

  },
  {
      photo:[
        {
          src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich1.jpg",
          title:"Портрет Георгия Лихтаровича",
          width:100,
          height:100,
        },
        {
          src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich14.jpg",
          title:"Работа из альбома 'Жизнь Беларуси'",
          width:100,
          height:100,
        },
        {
          src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich3.jpg",
          title:"Работа из альбома 'Жизнь Беларуси'",
          width:100,
          height:100,
        },
        {
          src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich4.jpg",
          title:"Работа из альбома 'Жизнь Беларуси'",
          width:100,
          height:100,
        },
        {
          src:"https://znyata.com/images/stories/interview/lihtarovich/lihtarovich5.jpg",
          title:"Работа из альбома 'Жизнь Беларуси'",
          width:100,
          height:100,
      
        },
      ]
  } ,
  {
      photo:[

        {
          src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/KaltovichS.jpg/440px-KaltovichS.jpg",
          title:"Портрет Сергея Калтовича",
          width:100,
          height:100,
        },
        {
          src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Kaltovich_works1.jpg/240px-Kaltovich_works1.jpg",
          title:"Работа 'Солнца свет'",
          width:100,
          height:100,
        },
        {
          src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Kaltovich_works2.jpg/240px-Kaltovich_works2.jpg",
          title:"Работа 'Бурелом'",
          width:100,
          height:100,
        },
        {
          src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kaltovich_works3.jpg/177px-Kaltovich_works3.jpg",
          title:"Работа 'Безмятежность белорусских озер'",
          width:100,
          height:100,
        },
        {
          src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kaltovich_works4.jpg/240px-Kaltovich_works4.jpg",
          title:"Работа 'Неизвестная натура'",
          width:100,
          height:100,
        },
      ]
  },
  ]


function Person_info(props) {
    return(
      <> 
    <div class="photo-container">
      <img src={Doers_Eng[props.ident-1].image}></img>
      </div>
        <div class="info">
          <h2 className="text-coloring"><FormattedMessage id={"IdentName"+(props.ident)}></FormattedMessage></h2>
          <h3 className="text-coloring"><FormattedMessage id={"IdentYears"+(props.ident)}> </FormattedMessage></h3>
          <p className="text-coloring"><FormattedMessage id={"IdentInfo"+(props.ident)}></FormattedMessage></p>
        </div>
        </>

      );
  }
  
  function DrawTimeLine(props){
    let num=0
    
    return (
      TimeLineDates[props.ident-1].dates.map(()=>{
        num++   
        return(
          <TimelineItem dateText={<FormattedMessage id={"Ident"+(props.ident)+"-Date"+(num)}></FormattedMessage>} style={{color:'#00bfe6'}} dateInnerStyle={{background:'#7244d5',color:'#FFFFFF',borderRadius:'20px'}} dateStyle={{borderRadius:'20px'}} bodyContainerStyle={{background:'#ddd',borderRadius:'10px',padding:'10px'}}><FormattedMessage id={"Ident"+props.ident+"-Timeline"+num}>Родился в г. Казань в семье военнослужащего</FormattedMessage></TimelineItem>
      )
    })
    )
  }



function Gal(props){
    return(
      <PhotoAlbum  layout="masonry" padding="15"  photos={Photos[props.ident-1].photo} />
    );
  
}
const IFrames =[
  {src:"https://www.youtube.com/embed/3xMqE9o7U90"},
  {src:"https://www.youtube.com/embed/OUl9EEOXAeY"},
  {src:"https://www.youtube.com/embed/rSuNh1QXSWA"},
  {src:"https://www.youtube.com/embed/YEoAX0pQBsE"},
  {src:"https://www.youtube.com/embed/tKBB-DGr_p4"}
]
const MAPS =[
  {src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79916.02070983403!2d27.5354753678537!3d53.888676020811374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1670751865058!5m2!1sru!2sby"},
  {src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186362.27068857756!2d25.112953171338248!3d54.70060369226324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2z0JLQuNC70YzQvdGO0YEsINCS0LjQu9GM0L3RjtGB0YHQutC-0LUg0LPQvtGA0L7QtNGB0LrQvtC1INGB0LDQvNC-0YPQv9GA0LDQstC70LXQvdC40LUsINCb0LjRgtCy0LA!5e1!3m2!1sru!2sby!4v1670696391028!5m2!1sru!2sby"},
  {src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129513.60648132818!2d18.034973465459565!3d51.73345997280634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac5913393e6a7%3A0x719f8f40ae38aad3!2zNjItODAwINCa0LDQu9C40YgsINCf0L7Qu9GM0YjQsA!5e1!3m2!1sru!2sby!4v1670674875829!5m2!1sru!2sby"},
  {src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79916.02070983403!2d27.5354753678537!3d53.888676020811374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1670751865058!5m2!1sru!2sby"},
  {src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79916.02070983403!2d27.5354753678537!3d53.888676020811374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1670751865058!5m2!1sru!2sby"}
]
function Vid(props){
    return(
      <iframe width="560" height="315" src={IFrames[props.ident-1].src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );
  
}


function Maps(props){

    return(
      <iframe src={MAPS[props.ident-1].src} style={{width:600,height:600}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    );
  
}


function PersonPage() {
  const params= useParams();
  let ident=params.id;

  const  [locale,setLocale]= useState(()=>{ if(sessionStorage.getItem("Currlang")=="ru" || sessionStorage.getItem("Currlang")==null ){return LOCALES.RUSSIAN}else{return LOCALES.ENGLISH}});
    return (
      <IntlProvider messages={messages[locale]} locale={locale}>
      <header class="header">
      <div class="head-menu">
        <div class="menu-languages">
        <ToggleButtonGroup type="radio" name="options" defaultValue={()=>{if(sessionStorage.getItem("Currlang")=="ru" || sessionStorage.getItem("Currlang")==null){return 0}else{return 1}}} class="menu-languages">
      <ToggleButton 
        id="lang-ru"
        variant="outline-secondary"
        value={0}
        href="#"
        size='sm'
        onClick={()=>{setLocale(LOCALES.RUSSIAN);sessionStorage.setItem("Currlang","ru")}}
        >
        <FormattedMessage id="Rulang"></FormattedMessage>
      </ToggleButton>
      <ToggleButton id="lang-en" variant="outline-secondary" value={1} href="#" size='sm' onClick={()=>{setLocale(LOCALES.ENGLISH);sessionStorage.setItem("Currlang","eng")}} >

        <FormattedMessage id="Englang"></FormattedMessage>
      </ToggleButton>
    </ToggleButtonGroup>
        </div>
        <div class="menu-navigation-buttons">
        <Link to="/List" className="nav-link"> <Button href="./List" className="list-figures" variant="outline-success"><p><FormattedMessage id="ListBtn"></FormattedMessage></p></Button></Link>       
        <Link to="/" className="nav-link"> <Button href="./" className="main-page" variant="outline-primary"><p><FormattedMessage id="HomeBtn"></FormattedMessage></p></Button> </Link>        
        </div>
      </div>
    </header>
      <h1 className="text-coloring"><FormattedMessage id="AboutDoer">Информация о деятеле:</FormattedMessage></h1>
      <section className="field">
        <div className="main_div">
          <Person_info ident={ident}></Person_info>
        </div>
      </section>
      <div className="timeline">
      <DrawTimeLine ident={ident}></DrawTimeLine>
      </div>
      <h2 className="text-coloring"><FormattedMessage id="AuthorsWorks">Работы автора:</FormattedMessage></h2>
      <Gal ident={ident}></Gal>
      <h2 className="text-coloring"><FormattedMessage id="Video">Видеоролик:</FormattedMessage></h2>
      <section className="field">
        <Vid ident={ident}></Vid>
      </section>
      <h2 className="text-coloring"><FormattedMessage id="AuthorsPlace">Основное место деятельности:</FormattedMessage></h2>
      <section className="field">
        <Maps ident={ident}></Maps>
      </section>
     
      </IntlProvider>
    );
 
}

export default PersonPage;