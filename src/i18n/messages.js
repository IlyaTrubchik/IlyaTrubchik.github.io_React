import { LOCALES } from "./locales"
import { Doers_Eng } from "../JS/Scripts"
import { Doers_ru } from "../JS/Scripts"
export const messages={
    
    [LOCALES.ENGLISH]:{
        'name0':Doers_Eng[0].name,
        'name1':Doers_Eng[1].name,
        'name2':Doers_Eng[2].name,
        'name3':Doers_Eng[3].name,
        'name4':Doers_Eng[4].name,
        'HomeBtn':"Main",
        'ListBtn':"List of Figures",
        'SiteInfo':"This web portal contains information about famous photographers in Belarus. The main page of the portal provides information about the figure of the day and contains information about the developers of this portal. The \"list of figures\" button in the upper right corner leads the user to the search page, where information on each figure is presented in the form of a card indicating the name, period of life and photograph of the figure. By clicking on this card, the user is taken to a page containing detailed information on the selected figure. Pressing the \"main menu\" button in the upper right corner returns the user to the main page of the portal. The \"Russian / English\" switch in the upper left corner allows you to select the language for displaying information on the site.",
        'HumanOfDay':"Doer of the Day",
        'time0':Doers_Eng[0].years,
        'time1':Doers_Eng[1].years,
        'time2':Doers_Eng[2].years,
        'time3':Doers_Eng[3].years,
        'time4':Doers_Eng[4].years,
        'gotobtn':"Go",
        'shortInfo0':Doers_Eng[0].shortinfo,
        'shortInfo1':Doers_Eng[1].shortinfo,
        'shortInfo2':Doers_Eng[2].shortinfo,
        'shortInfo3':Doers_Eng[3].shortinfo,
        'shortInfo4':Doers_Eng[4].shortinfo,
        'Fedor':"Fedor Saprankov",
        'Ilya':"Ilya Trubchik",
        'Alex':"Alexey Manchik",
        'Rulang':"Russian",
        'Englang':"English",

        'HomeBtn':"Main page",
        'ListBtn':"List of Figures",
        'AboutDoer':"Information about Doer",
        'IdentName3':"Boretsi Theafil Eugeniusz",
        'IdentInfo1':"Belarusian and Polish landscape photographer.",
        'IdentYears3':"1860-1910",
        'Photo1':"Portrait of Theafil Boretsi",
        'Ident1-Timeline1':"Born in Warsaw to an architect's family",
        'Ident1-Timeline2': "Moves to Kalisz City",
        'Ident1-Timeline3':"Opened a photo studio in Nesvizh",
        'Ident1-Timeline4': "Published photos at an exhibition in Lviv",
        'Ident1-Timeline5':"Theafil's photos are included in the album dedicated to the architecture of Kalisz",
        'Ident1-Timeline6':"Published an album of photos \"Landscapes of Adam Mickiewicz's homeland\"",
        'Ident1-Timeline7':"Married S. Rasatskaya, they had 2 daughters",
        'Ident1-Timeline8': "Moved from Kalisz to Skalmierzycy",
        'Ident1-Timeline9':"Died in Skalmierzycy with family",
        'Ident1-Date1':"late nineteenth century",
        'AuthorsWorks':"Author's Works:",
         'AuthorsPlace':"Primary place of business:",
         'Video':"Video:",
         'IdentName2':"Bulgak Yan",
         'IdentInfo2':"Belarusian and Polish photographer and photo artist,\"father of Polish photography\"",
         'IdentYears2':"1876-1950",
         'IdentName4':"Likhtarovich Georgy Leonardovich",
         'IdentInfo3':"Belarusian photo editor, writer.",
         'IdentYears4':"1947",
         'IdentName1':"Alekseev Alexander Alekseevich",
         'IdentInfo4': "Belarusian photographer, publisher, journalist, director.",
         'IdentYears1':"1978",
         'IdentName5':"Kaltovich Sergey Vladimirovich",
         'IdentInfo5':"Belarusian designer and photographer.",
         'IdentYears5':"1961-2022",
         'Ident2-Timeline1': "Born in Ostashin (near Novogrudok)",
         'Ident2-Timeline2':"Studies at the Jagiellonian University (did not graduate)",
         'Ident2-Timeline3':"Opened a photo studio in Vilna",
         'Ident2-Timeline4':"I photographed architectural monuments of Vilna to order",
         'Ident2-Timeline5': "Became the founder and leader of the Vilna Photo Club",
         'Ident2-Timeline6':"Released a series of albums \"Photographer Sketches\"",
         'Ident2-Timeline7':"Moved to Warsaw",
         'Ident2-Timeline8':"Became the founder and leader of the Union of Photographers of Poland",
         'Ident2-Timeline9':"Died in Gizycko",
         //Ident3
         'Ident3-Timeline1': "Born in Minsk, BSSR, USSR",
         'Ident3-Timeline2':"Worked as an assistant at the Minsk Film Studio for Popular Science and Documentary Films",
         'Ident3-Timeline3':"Worked as a photographer at the Institute of Art History, Ethnography and Folklore of the Academy of Sciences",
         'Ident3-Timeline4':"Worked as a photojournalist for the newspaper \"Voice of the Motherland\"",
         'Ident3-Timeline5':"Worked as a photographer for government publishing houses",
         'Ident3-Timeline6':"Published a photo album \"Good afternoon, Belarus\"",
         'Ident3-Timeline7':"Published a book of poetry \"Common Notebook\"",
         'Ident3-Timeline8':"Becomes a member of the Rada of the Belarusian Public Association \"Photo Creation\"",
         'Ident3-Timeline9':"Published detective novel \"Gas\"",
         //Ident4
         'Ident4-Timeline1':"Born in Kazan in a military family",
         'Ident4-Timeline2':"Moves to Belarus with family",
         'Ident4-Timeline3':"Worked for Belarusian TV, was accredited as a Belarusian photographer",
         'Ident4-Timeline4':"Implementing the art project \"Heritage of Belarus\" together with Olga Lukashevich",
         'Ident4-Timeline5':"Became the Laureate of the Prize of the President of the Republic of Belarus \"For Spiritual Revival\"",
         'Ident4-Timeline6':"Becomes Belarusian publisher",
         'Ident4-Timeline7': "Becomes Deputy Director of the National Pavilion",
         'Ident4-Timeline8':"Started working in Belarusian documentaries as a director",
         'Ident4-Timeline9':"Hold a series of exhibitions as part of the \"Heritage of Belarus\" project",
         //Ident5
         'Ident5-Timeline1': "Born in Gomel, BSSR, USSR",
         'Ident5-Timeline2': "Studies at secondary school №6 in Minsk",
         'Ident5-Timeline3': "Graduated from Minsk Art College",
         'Ident5-Timeline4':"Head of the photo lab at the agency \"Proposal\"",
         'Ident5-Timeline5':"Photographer at P.Browka Museum",
         'Ident5-Timeline6':"Together with V. Sedykh organizes a creative studio \"Seko\"",
         'Ident5-Timeline7':"Photographer at \"Solvis\" LLP",
         'Ident5-Timeline8':"Died in Minsk with family",
          'Years':"Years of life:",
        'HomeBtn':"MainPage",
        'Photographers':"Photographers of Belarus",
    },
    [LOCALES.RUSSIAN]:{
        'name0':Doers_ru[0].name,
        'name1':Doers_ru[1].name,
        'name2':Doers_ru[2].name,
        'name3':Doers_ru[3].name,
        'name4':Doers_ru[4].name,
      'HomeBtn':"Главная",
      'ListBtn':"Список Деятелей",  
      'SiteInfo':"Данный веб-портал содержит информацию об известных фотографах Беларуси. На главной странице портала представлена информация про деятеля дня и размещены сведения о разработчиках данного портала. Кнопка \"список деятелей\" в правом верхнем углу ведёт пользователя на страницу поиска, где информация по каждому деятелю представлена в виде карточки с указанием имени, периода жизни и фотографии деятеля. При нажатии на данную карточку пользователь попадает на страницу, содержащую подробную информацию по выбранному деятелю. Нажатие кнопки \"главное меню\" в правом верхнем углу возвращает пользователя на главную страницу портала. Переключатель \"русский/английский\" в левом верхнем углу позволяет выбрать язык отображения информации на сайте.",
      'HumanOfDay':"Деятель Дня",
      'time0':Doers_ru[0].years,
      'time1':Doers_ru[1].years,
      'time2':Doers_ru[2].years,
      'time3':Doers_ru[3].years,
      'time4':Doers_ru[4].years,
      'gotobtn':"Перейти",
      'shortInfo0':Doers_ru[0].shortinfo,
      'shortInfo1':Doers_ru[1].shortinfo,
      'shortInfo2':Doers_ru[2].shortinfo,
      'shortInfo3':Doers_ru[3].shortinfo,
      'shortInfo4':Doers_ru[4].shortinfo,
      'Fedor':"Федор Сапраньков",
      'Ilya':"Илья Трубчик",
      'Alex':"Алексей Манчик",
      
        'Rulang':"Русский",
        'Englang':"Английский",

        'EnterData':"Начните вводить данные для поиска",
        'Photographers':"Фотографы Беларуси",
        'HomeBtn':"Главная страница",
        'ListBtn':"Список деятелей",
        'Years':"Годы жизни:",
        'AboutDoer':"Информация о деятеле",
        'IdentName3':"Бореци Теафил Эугениуш",
        'IdentYears3':"1860-1910 г.",
        'IdentInfo1':"Белорусский и польский фотограф-пейзажист.",
        'Ident1_Picture1':"Портрет Теафила Бореци",
        'Ident1-Timeline1':"Родился в Варшаве в семье архитектора",
        'Ident1-Timeline2':"Переезжает в город Калиш",
        'Ident1-Timeline3':"Открыл фотоателье в Несвиже",
        'Ident1-Timeline4':"Опубликовал фотографии на выставке во Львове",
        'Ident1-Timeline5':"Фотографии Теафила включены в альбом, посвещщенный архитектуре г. Калиша",
        'Ident1-Timeline6':"Издал альбом фотографий \"Пейзажи родины Адама Мицкевича\"",
        'Ident1-Timeline7':"Женился на С. Расацкой, у них родились 2 дочки",
        'Ident1-Timeline8':"Переехал из Калиша в Скальмежицы",
        'Ident1-Timeline9':"Умер в Скальмежицах в семейном кругу",
        'Ident1-Date1':"конец ХIX в.",
        'AuthorsWorks':"Работы автора:",
        'AuthorsPlace':"Основное место деятельности:",
        'Video':"Видеоролик:",
        'IdentName2':"Булгак Ян",
        'IdentInfo2':"Белорусский и польский фотограф и фотохудожник,\"отец польсокй фотографии\"",
        'IdentYears2':"1876-1950 г.",
        'IdentName4':"Лихтарович Георгий Леонардович",
        'IdentInfo3':"Белорусский фоторедактор, литератор.",
        'IdentYears4':"1947 год.",
        'IdentName1':"Алексеев Александр Алексеевич",
        'IdentInfo4':"Белорусский фотограф,издатель,журналист,режиссер.",
        'IdentYears1':"1978 год.",
        'IdentName5':"Калтович Сергей Владимирович",
        'IdentInfo5':"Белорусский дизайнер и фотограф.",
        'IdentYears5':"1961-2022 г.",
        //Ident2
        'Ident2-Timeline1':"Родился в Осташине(под Новогрудком)",
        'Ident2-Timeline2':"Учится в Ягеллонском университете(не закончил)",
        'Ident2-Timeline3':"Открыл фотоателье в Вильне",
        'Ident2-Timeline4':"Фотографировал памятники архитектуры Вильно на заказ",
        'Ident2-Timeline5':"Стал основателем и руководителем Виленского фотоклуба",
        'Ident2-Timeline6':"Выпускал серию альбоов \"Наброски фотографа\"",
        'Ident2-Timeline7':"Переехал в Варшаву",
        'Ident2-Timeline8':"Стал учредителем и руководителем Союза фотохудожников Польши",
        'Ident2-Timeline9':"Умер в Гижицко",
        //Ident3
        'Ident3-Timeline1':"Родился в г. Минске,БССР,СССР",
        'Ident3-Timeline2':"Работал ассистентом на Минской киностудии научно-популярных и документальных фильмов",
        'Ident3-Timeline3':"Работал фотографом в Институте искусствоведения,этнографии и фольклора Академии Наук",
        'Ident3-Timeline4':"Работал фотокорреспондентом газеты \"Голос Родины\"",
        'Ident3-Timeline5':"Работал фотографом в государственных издательствах",
        'Ident3-Timeline6':"Издал фотоальбом \"Добрый день,Беларусь\"",
        'Ident3-Timeline7':"Издал книгу поэзии \"Общая тетрадь\"",
        'Ident3-Timeline8':"Становится членом Рады Белорусского общественного объединения \"Фототворчество\"",
        'Ident3-Timeline9':"Издал детективный роман \"Газ\"",
        //Ident4
        'Ident4-Timeline1':"Родился в г. Казань в семье военнослужащего",
        'Ident4-Timeline2':"Переезжает с семьей в Беларусь",
        'Ident4-Timeline3':"Работал на белорусском телевидении, был аккредитован в качестве белорусского фотографа",
        'Ident4-Timeline4':"Реализует художественный проект \"Наследие Беларуси\" совместно с Ольгом Лукашевичем",
        'Ident4-Timeline5':"Стал Лауреатом Премии Президента Республики Беларусь \"За духовное возрождение\"",
        'Ident4-Timeline6':"Становится белорусским издателем",
        'Ident4-Timeline7':"Становится заместителем руководителя Национальным павильоном",
        'Ident4-Timeline8':"Начал работать в белорусской документалистике  в качестве режиссера",
        'Ident4-Timeline9':"Проводил серию выставок в рамках проекта \"Наследие Беларуси\"",
        //Ident5
        'Ident5-Timeline1':"Родился в г. Гомель,БССР,СССР",
        'Ident5-Timeline2':"Учится в СШ №6 г. Минска",
        'Ident5-Timeline3':"Окончил Минское художественное училище",
        'Ident5-Timeline4':"Руководитель фотолаборатории в агентстве \"Предложение\"",
        'Ident5-Timeline5':"Фотограф в музее П.Бровки",
        'Ident5-Timeline6':"Совмествно с В. Седых организовывает творческую студию \"Секо\"",
        'Ident5-Timeline7':"Фотограф в ТОО \"Солвис\"",
        'Ident5-Timeline8':"Умер в Минске в семейном кругу",
    }
}