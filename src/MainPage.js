import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { LOCALES } from './i18n/locales';
import { FormattedMessage } from 'react-intl';
import { messages } from './i18n/messages';
import { IntlProvider } from 'react-intl';
import { Doers_ru } from './JS/Scripts';
import { ToggleButton,ToggleButtonGroup,Button } from 'react-bootstrap';
import './index.css'
import './App.css'
import { Link } from 'react-router-dom';
/**/
export let x = Math.floor(Math.random() * 5);
if(sessionStorage.getItem("Ident")!=null)
{
x=sessionStorage.getItem("Ident")-1;
}

console.log(x);
sessionStorage.setItem("Ident",x+1);


class OnSecondPageButton extends React.Component {

  render() {
    return (<button onClick={(e) => this.onclick(e)}><FormattedMessage id ="gotobtn">Перейти</FormattedMessage></button>);
  }
} 



const MainPage = () => {
    
   
  const  [locale,setLocale]= useState(()=>{ if(sessionStorage.getItem("Currlang")=="ru" || sessionStorage.getItem("Currlang")==null ){return LOCALES.RUSSIAN}else{return LOCALES.ENGLISH}}); 
return (
<IntlProvider  messages={messages[locale]} locale={locale}> 
<body>
<header class="mainheader">
  
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
        
        <Link to="/List" className="nav-link"><Button href="./List" className="list-figures" variant="outline-success"><p><FormattedMessage id="ListBtn"></FormattedMessage></p></Button></Link>      
        <Link to="/" className="nav-link"> <Button href="./" className="main-page" variant="outline-primary"><p><FormattedMessage id="HomeBtn"></FormattedMessage></p></Button></Link>     
        </div>
      </div>
    </header>
<main class = "MainContainer">
    <div class="firstBorder"></div>
<section class ="AboutSiteContainer">
    <div class="SiteInfo">
        <p><FormattedMessage id="SiteInfo"></FormattedMessage></p>
    </div>
</section>
<div class="firstBorder"></div>
<h1><FormattedMessage id="HumanOfDay">Деятель Дня</FormattedMessage></h1>
 <section class = "HumanOfDay">
    <div   class = "Human">
        <h1 id="DoerName"><FormattedMessage id={"name"+x}></FormattedMessage></h1>
        <div class = "Image">
        <img id = "DoerImage" src = {Doers_ru[x].image}/>
        </div>
        <h2 id="DoerYears" ><FormattedMessage id={"time"+x}>1978-Настоящее время</FormattedMessage></h2>
        <div class = "DayPersonBtn">
        <Link to={"/"+(x+1)} className="nav-link"><OnSecondPageButton  ><FormattedMessage id ="gotobtn">Перейти</FormattedMessage></OnSecondPageButton></Link>
        </div>
    </div>
    <div id="DoerShortInfo" class = "HumanDayInfo" >
        <p><FormattedMessage id={"shortInfo"+x}>Нарадзіўся 14 лістапада 1978 года ў г. Казань, у сям’і вайскоўца. З 1979 года сям’я пераехала ў Беларусь. У 2000 годзе скончыў факультэт менеджменту Беларускага дзяржаўнага эканамічнага ўніверсітэта. У 2000 годзе ўзнагароджаны медалём Міністэрства адукацыі і навукі Расійскай Федэрацыі «За лепшую навуковую працу» сярод маладых вучоных па выніках адкрытага ўсерасійскага конкурсу. У 2004 годзе абараніў дысертацыю, прысуджана навуковая ступень кандыдата эканамічных навук.</FormattedMessage></p>
    </div>
 </section>
 <div class="firstBorder"></div>
 <h1><FormattedMessage id="DevelopedBy"></FormattedMessage></h1>
 <section class ="Developers">
    <div class="Developers-Container">
        <div class="Developer">
                <img class="DeveloperImage" src="images/Fedya.png"/>
                <p class="DeveloperName"><FormattedMessage id="Fedor">Федор Сапраньков</FormattedMessage></p>
                <div class="DeveloperIcons">
                    <div class="Icons">
                        <a href ="https://github.com/FedorDevelopmer"><i class="fa-brands fa-github"></i></a>
                        <a href="https://vk.com/f.saprankov"><i class="fa-brands fa-vk"></i></a>
                    </div>
                </div>
        </div>
        <div class="Developer">
            <img class="DeveloperImage" src="images/Ilya.png"/>
            <p class="DeveloperName" ><FormattedMessage id = "Ilya">Илья Трубчик</FormattedMessage></p>
            <div class="DeveloperIcons">
                <div class="Icons">
                    <a href="https://github.com/IlyaTrubchik"><i class="fa-brands fa-github"></i></a>
                    <a href = "https://vk.com/cytctcyvjbg"><i class="fa-brands fa-vk"></i></a>
                </div>     
            </div>
        </div>
        <div class="Developer">
            <img class="DeveloperImage" src="images/Leha.png"/>
            <p class="DeveloperName" ><FormattedMessage id="Alex">Алексей Манчик</FormattedMessage></p>
            <div class="DeveloperIcons">
                <div class="Icons">
                    <a href = "https://github.com/cooperative0zero"><i class="fa-brands fa-github"></i></a>
                    <a href="https://vk.com/xxx___lexa___xxx" ><i class="fa-brands fa-vk"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="firstBorder"></div>
</main>
<footer>

</footer>
</body>
</IntlProvider>

 
);

}



export default MainPage;
