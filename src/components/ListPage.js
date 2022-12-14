import 'bootstrap/dist/css/bootstrap.min.css';
import './ListPage.css';
import '../style.css';
import {React,useState} from 'react';
import { ToggleButtonGroup,ToggleButton, Button} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { LOCALES } from '../i18n/locales';
import { messages } from '../i18n/messages';
import { IntlProvider } from 'react-intl';
const names = [{name: "Бореци Теафил Эугениуш",
                dates: "1860 г. - 1910 г.",
                img_src: './images/Boretti.png',
                index:'3'}, 

                {name: "Булгак Ян",
                dates:"1876 г. - 1950 г.",
                img_src:"./images/Yan_Bylgak.png",
                index:'2'},

                {name: "Лихтарович Георгий Леонардович",
                dates: "1947 г. - наст. время",
                img_src: "https://znyata.com/images/stories/interview/lihtarovich/lihtarovich1.jpg",
                index:"4"},
                {
                  name:"Аляксандр Алексеевич Алексеев",
                  dates:"1978-Настоящее время",
                  img_src:"./images/Aliaksandr_Aliakseyeu.jpg",
                  index:"1",
                },
                {
                  name:"Калтович Сергей Владимирович",
                  dates:"1961-2022 г.",
                  img_src:"./images/Kaltovich.png",
                  index:"5",
                }
              ];
let filtered_items;

function ListPage() {
  const  [locale,setLocale]= useState(LOCALES.RUSSIAN); 
  return (
    
      <IntlProvider  messages={messages[locale]} locale={locale}> 
      <header class="header">
      <div class="head-menu">
        <div class="menu-languages">
        <ToggleButtonGroup type="radio" name="options" defaultValue={0} class="menu-languages">
      <ToggleButton 
        id="lang-ru"
        variant="outline-secondary"
        value={0}
        href="#"
        size='sm'
        onClick={()=>setLocale(LOCALES.RUSSIAN)}
        >
        <FormattedMessage id="Rulang"></FormattedMessage>
      </ToggleButton>
      <ToggleButton id="lang-en" variant="outline-secondary" value={1} href="#" size='sm' onClick={()=>setLocale(LOCALES.ENGLISH)} >

      <FormattedMessage id="Englang"></FormattedMessage>
      </ToggleButton>
    </ToggleButtonGroup>
        </div>
        <div class="menu-navigation-buttons">
          <Button href="/List" className="list-figures" variant="outline-success"><p><FormattedMessage id="ListBtn"></FormattedMessage></p></Button>        
          <Button href="/" className="main-page" variant="outline-primary"><p><FormattedMessage id="HomeBtn"></FormattedMessage></p></Button>        
        </div>
      </div>
    </header>
      <DataContainer></DataContainer>
      </IntlProvider>
  );
}

function DrawCard(props){
  return (
    <a href={"/"+(props.card.index)} className='button-link'>
    <div class="card">
        <div class="img-container">
          <img src={props.card.img_src} alt=""></img>
        </div>
        <h1><FormattedMessage id={"IdentName"+props.card.index}>{props.card.name}</FormattedMessage></h1>
        <div class="date-container">                                
          <h3><FormattedMessage id="Years"></FormattedMessage></h3><h2><FormattedMessage id={"IdentYears"+props.card.index}>{props.card.dates}</FormattedMessage></h2>
        </div>
    </div>
    </a>
  )
}

function DrawList(){
  return (
    filtered_items.map(item => {
      return (
        <li><DrawCard card={item}></DrawCard></li>
      )
    })
  )
}

function DataContainer(){
  const [search, setSearch] = useState("")
  const proc = (event) =>{
    const item = event.target.value;
    setSearch(item);
  }
  filtered_items = names.filter(person => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  })
  return(
    <section class="data-container">
      <div class="search-container">
          <h1 class="search-header"><FormattedMessage id="Photographers"></FormattedMessage></h1>
          <input type = "search"class="input-search" placeholder=' Начните вводить данные для поиска' 
            onChange={proc}></input>            
      </div>
      <div class="figures-container">
        <ul class="figures-list">
          <DrawList></DrawList>  
        </ul>
      </div>
    </section>
  )
}

export default ListPage;
