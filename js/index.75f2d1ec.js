(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);g&&g(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},o={index:0},a=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var g=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0f10":function(e,t,i){e.exports=i.p+"img/arrowup.d2a3be59.svg"},"16e8":function(e,t,i){"use strict";i("f57c")},"1e3e":function(e,t,i){"use strict";i("5dec")},"23bc":function(e,t,i){},4739:function(e,t,i){"use strict";i("51e3")},"4a87":function(e,t,i){"use strict";i("b93c")},"51e3":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),o=i("6c02"),a=i("0f10"),r=i.n(a);Object(n["y"])("data-v-45d27d5e");var s={class:"content-wrapper"},c=Object(n["h"])("footer",{class:"roboto-thin"},[Object(n["h"])("div",{class:"copyright"},"© Olena Kokhan"),Object(n["h"])("img",{class:"go-up",onclick:"window.scrollTo({top: 0, behavior: 'smooth'});",src:r.a})],-1);function l(e,t,i,o,a,r){var l=Object(n["C"])("Navigation"),g=Object(n["C"])("router-view");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(l),Object(n["h"])("div",s,[Object(n["k"])(g)]),c],64)}Object(n["w"])();var g=i("7fe6"),u=i.n(g),p=i("8f8b"),d=i.n(p),b=i("bf37"),j=i.n(b);Object(n["y"])("data-v-658242a3");var f={class:"navigation"},m=Object(n["h"])("img",{class:"logo",src:u.a,alt:"Logo"},null,-1),h={key:0,class:"desktop-menu youngserif-regular"},_=Object(n["j"])("Work"),x=Object(n["j"])("About"),y=Object(n["j"])("Contact"),O={key:1},S={key:0,class:"mobile-menu youngserif-regular"},v={class:"mobile-menu-links"},T=Object(n["j"])("Work"),k=Object(n["j"])("About"),D=Object(n["j"])("Contact");function w(e,t,i,o,a,r){var s=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",f,[Object(n["k"])(s,{class:"link-logo",to:"/"},{default:Object(n["I"])((function(){return[m]})),_:1}),o.isMobileWidth?Object(n["f"])("",!0):(Object(n["v"])(),Object(n["g"])("div",h,[Object(n["k"])(s,{to:"/",onClick:r.menuClicked},{default:Object(n["I"])((function(){return[_]})),_:1},8,["onClick"]),Object(n["k"])(s,{to:"/About",onClick:r.menuClicked},{default:Object(n["I"])((function(){return[x]})),_:1},8,["onClick"]),Object(n["k"])(s,{to:"/Contact",onClick:r.menuClicked},{default:Object(n["I"])((function(){return[y]})),_:1},8,["onClick"])])),o.isMobileWidth?(Object(n["v"])(),Object(n["g"])("div",O,[a.menuVisible?Object(n["f"])("",!0):(Object(n["v"])(),Object(n["g"])("img",{key:0,class:"hamburger",src:d.a,alt:"Menu",onClick:t[0]||(t[0]=function(){return r.menuClicked&&r.menuClicked.apply(r,arguments)})})),a.menuVisible?(Object(n["v"])(),Object(n["g"])("img",{key:1,class:"close",src:j.a,alt:"Menu",onClick:t[1]||(t[1]=function(){return r.menuClicked&&r.menuClicked.apply(r,arguments)})})):Object(n["f"])("",!0)])):Object(n["f"])("",!0)]),Object(n["k"])(n["b"],{name:"fade"},{default:Object(n["I"])((function(){return[a.menuVisible&&o.isMobileWidth?(Object(n["v"])(),Object(n["g"])("div",S,[Object(n["h"])("div",v,[Object(n["k"])(s,{to:"/",onClick:r.menuClicked},{default:Object(n["I"])((function(){return[T]})),_:1},8,["onClick"]),Object(n["k"])(s,{to:"/About",onClick:r.menuClicked},{default:Object(n["I"])((function(){return[k]})),_:1},8,["onClick"]),Object(n["k"])(s,{to:"/Contact",onClick:r.menuClicked},{default:Object(n["I"])((function(){return[D]})),_:1},8,["onClick"])])])):Object(n["f"])("",!0)]})),_:1})],64)}Object(n["w"])();var I={name:"Navigation",setup:function(){var e=Object(n["A"])(window.innerWidth),t=function(){return e.value=window.innerWidth};Object(n["t"])((function(){return window.addEventListener("resize",t)})),Object(n["u"])((function(){return window.removeEventListener("resize",t)}));var i=Object(n["c"])((function(){return e.value<500}));return{isMobileWidth:i}},methods:{menuClicked:function(){this.menuVisible=!this.menuVisible,this.toggleScrollLock(this.menuVisible)},toggleScrollLock:function(e){e?(document.body.style.overflow="hidden",document.body.style.height="100%"):(document.body.style.overflow="",document.body.style.height="")}},data:function(){return{menuVisible:!1}},mounted:function(){var e=this;Object(n["H"])((function(){e.isMobileWidth||(e.menuVisible=!1,e.toggleScrollLock(e.menuVisible))}))}},N=(i("e0fb"),i("6b0d")),C=i.n(N),M=C()(I,[["render",w],["__scopeId","data-v-658242a3"]]),P={name:"App",components:{Navigation:M}},U=(i("7ba9"),i("1e3e"),C()(P,[["render",l],["__scopeId","data-v-45d27d5e"]]));Object(n["y"])("data-v-5ad7a7e2");var W={class:"tiles"};function G(e,t,i,o,a,r){var s=Object(n["C"])("ProjectTile");return Object(n["v"])(),Object(n["g"])("div",W,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.mainPageContent,(function(e,t){return Object(n["v"])(),Object(n["e"])(s,{key:t,Title:e.projectTitle,SubText:e.subText,ImgName:e.fileName},null,8,["Title","SubText","ImgName"])})),128))])}Object(n["w"])(),Object(n["y"])("data-v-01aeccc6");var H=["src"],A={class:"titlebar"},z={class:"title youngserif-regular"},L={class:"subtext roboto-thin"};function E(e,t,i,o,a,r){var s=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["e"])(s,{to:{name:"work",params:{id:i.Title}},class:"tile"},{default:Object(n["I"])((function(){return[Object(n["h"])("img",{src:"MainPage/"+i.ImgName},null,8,H),Object(n["h"])("div",A,[Object(n["h"])("h3",z,Object(n["E"])(i.Title),1),Object(n["h"])("h4",L,Object(n["E"])(i.SubText),1)])]})),_:1},8,["to"])}Object(n["w"])();var q={name:"ProjectTile",props:{Title:String,SubText:String,ImgName:String}},B=(i("9edd"),C()(q,[["render",E],["__scopeId","data-v-01aeccc6"]])),V=[{fileName:"IntergenerationalSelf.jpg",projectTitle:"Intergenerational Self",subText:"Thesis project / Book / Collage"},{fileName:"OhArt.jpg",projectTitle:"Oh Art",subText:"Book project / Letterpress"},{fileName:"NUGMagazine.jpg",projectTitle:"Natural Medication Magazine Design",subText:"Editorial Design / Magazine"},{fileName:"Decision=Limits.jpg",projectTitle:"Decision=Limits",subText:"Experimental poster workshop / Silkscreen printing"},{fileName:"Symbols.jpg",projectTitle:"Symbols & Signs",subText:"Book project / Letterpress"},{fileName:"NUGNewSeries.jpg",projectTitle:"Natural Medication Magazine Series Design",subText:"Editorial Design / Magazine"},{fileName:"SUDWebsite.jpg",projectTitle:"Company Website",subText:"Web Design"},{fileName:"Terrain.jpg",projectTitle:"Terrain",subText:"Experimental project / Tessellation"},{fileName:"SHTD.jpg",projectTitle:"Say Hi To Design",subText:"Casual Design Exhibition"},{fileName:"Caslon.jpg",projectTitle:"Caslon",subText:"One font book / Typography"},{fileName:"SeeIt.jpg",projectTitle:"See It",subText:"Interactive Book / Soft - prototyping project"},{fileName:"Pressure.jpg",projectTitle:"Don’t pressure me",subText:"Experimental Poster - Printing Workshop"},{fileName:"SMPosters.jpg",projectTitle:"Social Media",subText:"Posters"},{fileName:"NUGWebsite.jpg",projectTitle:"Natural Medication Magazine Website",subText:"Web Design"}],F={name:"Home",created:function(){},data:function(){return{mainPageContent:V}},components:{ProjectTile:B},props:{},methods:{}},J=(i("4739"),C()(F,[["render",G],["__scopeId","data-v-5ad7a7e2"]]));Object(n["y"])("data-v-27e7c0fb");var R={class:"project roboto-thin"},K={class:"main"},X={class:"text-wrapper"},Y={class:"project-title youngserif-regular"},Q={class:"project-text"},Z={class:"image-wrapper"},$=["alt","src"];function ee(e,t,i,o,a,r){return Object(n["v"])(),Object(n["g"])("div",R,[Object(n["h"])("div",K,[Object(n["h"])("div",X,[Object(n["h"])("div",Y,Object(n["E"])(o.project.projectTitle),1),Object(n["h"])("ul",null,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(o.project.techniques,(function(e){return Object(n["v"])(),Object(n["g"])("li",{key:e},Object(n["E"])(e),1)})),128))]),Object(n["h"])("div",Q,Object(n["E"])(o.project.bodyText),1)]),Object(n["h"])("div",Z,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(o.project.images,(function(e){return Object(n["v"])(),Object(n["g"])("img",{key:e,alt:e,src:"/ProjectsPhotos/"+e,class:Object(n["q"])(["image",r.isSmall(e)?"small":"big"])},null,10,$)})),128))])])])}Object(n["w"])();var te={"Intergenerational Self":{projectTitle:"Intergenerational Self",techniques:["Book Design","Experimental Design","Editorial Design","Mixed Media","Collage","Scanning"],bodyText:'"Intergenerational Self" is an intimate look at family narratives and the value of memories through the medium of collage.',images:["IntergenerationalSelf/IntergenerationalSelf_1200x850__1.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_2.jpg","IntergenerationalSelf/IntergenerationalSelf_580x440_3.jpg","IntergenerationalSelf/IntergenerationalSelf_580x440_4.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_5.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_6.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_7.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_8.jpg"]},"Oh Art":{projectTitle:"Oh Art",techniques:["Photography","Digital printing","Book Binding","Letterpress","Handmade glue binding"],bodyText:"The book project that explores the art as a way of travelling to different places in space, time or mind. The book does not have the starting point in the traditional meaning. It can be read from any page. The main goal is to evoke curiosity, inner thinking, and reflection about the viewer personal experience of the concept “traveling through art”.",images:["OhArt/OhArt_1200x850_1.jpg","OhArt/OhArt_1200x850_2.jpg","OhArt/OhArt_580x440_3.jpg","OhArt/OhArt_580x440_4.jpg","OhArt/OhArt_1200x850_5.jpg","OhArt/OhArt_1200x850_6.jpg","OhArt/OhArt_580x440_7.jpg","OhArt/OhArt_580x440_8.jpg","OhArt/OhArt_1200x850_9.jpg","OhArt/OhArt_1200x850_10.jpg"]},"Natural Medication Magazine Design":{projectTitle:"Natural Medication Magazine Design",techniques:["Editorial Design","Magazine layout"],bodyText:"Naturheilkunde & Gesundheit is a German magazine about natural medicine. During my work at the publishing house, I was responsible for the layouts of the pages, mostly articles and various additional information (ads, content pages, covers, etc.). On this page, you can find examples of my editorial design for Naturheilkunde & Gesundheit Magazine.",images:["NUGMagazine/NUGMagazine_1200x850_1.jpg","NUGMagazine/NUGMagazine_1200x850_2.jpg","NUGMagazine/NUGMagazine_1200x850_3.jpg","NUGMagazine/NUGMagazine_1200x850_4.jpg","NUGMagazine/NUGMagazine_1200x850_5.jpg","NUGMagazine/NUGMagazine_1200x850_6.jpg","NUGMagazine/NUGMagazine_1200x850_7.jpg"]},"Decision=Limits":{projectTitle:"Decision=Limits",techniques:["Silkscreen printing","Poster Design","Analogue Design","Handmade production"],bodyText:"While making a decision we are putting limits on your choices. Decision equals limits. The visual presentation of this idea was made during the experimental poster-printing workshop. The whole process of poster creation was computer free and made in analogue way.",images:["Decision=Limits/Decision_580x850_1.jpg","Decision=Limits/Decision_580x850_2.jpg","Decision=Limits/Decision_1200x850_3.jpg","Decision=Limits/Decision_580x440_4.jpg","Decision=Limits/Decision_580x440_5.jpg","Decision=Limits/Decision_1200x850_6.jpg","Decision=Limits/Decision_1200x850_7.jpg","Decision=Limits/Decision_580x440_8.jpg","Decision=Limits/Decision_580x440_9.jpg","Decision=Limits/Decision_1200x850_10.jpg"]},"Symbols & Signs":{projectTitle:"Symbols & Signs",techniques:["Book Binding","Letterpress","Editorial Design","Experimental Design","Typography"],bodyText:"Double sided book contains two ways of looking at the short story by Vladimir Nabokov: through the written text and image.",images:["Symbols/Symbols_1200x850_1.jpg","Symbols/Symbols_1200x850_2.jpg","Symbols/Symbols_580x850_3.jpg","Symbols/Symbols_580x850_4.jpg","Symbols/Symbols_1200x850_5.jpg","Symbols/Symbols_580x440_6.jpg","Symbols/Symbols_580x440_7.jpg","Symbols/Symbols_1200x850_8.jpg","Symbols/Symbols_580x440_9.jpg","Symbols/Symbols_580x440_10.jpg","Symbols/Symbols_1200x850_11.jpg","Symbols/Symbols_1200x850_12.jpg"]},"Natural Medication Magazine Series Design":{projectTitle:"Natural Medication Magazine Series Design",techniques:["Editorial Design","Logo Design","Layout Design"],bodyText:"Creating a new special series of articles including series logo, special elements, and layouts of the article for different types of the spread.",images:["NUGNewSeries/NUGNewSeries_1200x850_1.jpg","NUGNewSeries/NUGNewSeries_1200x850_2.jpg","NUGNewSeries/NUGNewSeries_1200x850_3.jpg","NUGNewSeries/NUGNewSeries_1200x850_4.jpg"]},"Company Website":{projectTitle:"Company Website",techniques:["Web Design","UX & UI design"],bodyText:"Web design project for the B2B website of publishing house.",images:["SUDWebsite/SUDWebsite_1200x850_1.jpg","SUDWebsite/SUDWebsite_1200x1700_2.jpg","SUDWebsite/SUDWebsite_1200x850_3.jpg"]},Terrain:{projectTitle:"Terrain",techniques:["Experimental Design","Poster Design","Tessellation"],bodyText:'Terrain is the result of an experimental design project "Form follows experiment". It is aimed to show how the everyday objects such as coffee can be transformed into new unusual shapes which have the characteristics of tesselations and simultaneously remain objects interesting for an eye exploration.',images:["Terrain/Terrain_580x850_1.jpg","Terrain/Terrain_580x850_2.jpg","Terrain/Terrain_1200x850__3.jpg","Terrain/Terrain_1200x850__4.jpg","Terrain/Terrain_1200x850__5.jpg","Terrain/Terrain_580x440_6.jpg","Terrain/Terrain_580x440_7.jpg","Terrain/Terrain_1200x850__8.jpg","Terrain/Terrain_1200x850__9.jpg"]},"Say Hi To Design":{projectTitle:"Say Hi To Design",techniques:["Exhibition Design & Organisation","Visual Identity Design","Silkscreen printing","Logo Design"],bodyText:"Say Hi To Design is a casual design exhibition that was held at Rhein-Waal University of Applied Sciences (Germany). The idea was suggested and implemented by my colleague Robine Gillen and me. We wanted to create an event that would bring together design students of our university and give an opportunity to present our works to a broader audience. We developed the general concept of the event together with its visual identity.  Logo, posters, business cards, exhibition materials as well as merchandise (tote bags, notebooks, stickers) were designed and handmade produced at the university facilities in order to promote the big variety of production opportunities available at the university. Photo credit: Sven Siebel.",images:["SHTD/SHTD_1200x850_1.jpg","SHTD/SHTD_580x440_2.jpg","SHTD/SHTD_580x440_3.jpg","SHTD/SHTD_1200x850_4.jpg","SHTD/SHTD_1200x850_5.jpg","SHTD/SHTD_1200x850_6.jpg","SHTD/SHTD_580x440_7.jpg","SHTD/SHTD_580x440_8.jpg","SHTD/SHTD_1200x850_9.jpg","SHTD/SHTD_580x850_10.jpg","SHTD/SHTD_580x850_11.jpg","SHTD/SHTD_1200x850_12.jpg"]},Caslon:{projectTitle:"Caslon",techniques:["Typography","Book Binding","Laser Cutting"],bodyText:"The project is dedicated to Caslon Typeface. The main idea is to study the typeface from different perspectives to gain a better understanding of various opportunities for font usage. The whole book is made out of one typeface including ornaments and illustrations.",images:["Caslon/Caslon_1200x850_1.jpg","Caslon/Caslon_1200x850_2.jpg","Caslon/Caslon_580x440_3.jpg","Caslon/Caslon_580x440_4.jpg","Caslon/Caslon_1200x850_5.jpg","Caslon/Caslon_1200x850_6.jpg","Caslon/Caslon_580x440_7.jpg","Caslon/Caslon_580x440_8.jpg","Caslon/Caslon_1200x850_9.jpg","Caslon/Caslon_580x850_10.jpg","Caslon/Caslon_580x850_11.jpg"]},"See It":{projectTitle:"See It",techniques:["Soft-prototyping","Electronics","Laser Cutting","Embroidery","Printing","Debossing","Drilling"],bodyText:'In the last decade, people buy significantly fewer printed books. Electronic books have more benefits in comparison to traditional ones. For those who still prefer a printed one, it is still a hard task to impress a reader and attract his attention with a usual book. In book stores, there are hundreds of books and it is very likely that most of them will not be even noticed. What is the future of printed books? How can we make a book more visible? "See it" is a book concept that combines all valuable properties of a printed book and opens the door for the interaction between the reader and a book. It is a book that can attract the attention of a reader in a different unexpected way. Using the sensor integrated into the cover the book reacts to the motion around it and responds on it with a light (also integrated into the book spine). Therefore if a customer tries to reach a book near it, the ‘See it’ book will be definitely noticed and arouse interest in it.',images:["SeeIt/SeeIt_1200x850_1.jpg","SeeIt/SeeIt_580x440_2.jpg","SeeIt/SeeIt_580x440_3.jpg","SeeIt/SeeIt_1200x850_4.jpg","SeeIt/SeeIt_1200x850_5.jpg","SeeIt/SeeIt_580x440_6.jpg","SeeIt/SeeIt_580x440_7.jpg","SeeIt/SeeIt_1200x850_8.jpg","SeeIt/SeeIt_580x440_9.jpg","SeeIt/SeeIt_580x440_10.jpg","SeeIt/SeeIt_1200x850_11.jpg","SeeIt/SeeIt_1200x850_12.jpg","SeeIt/SeeIt_1200x850_13.jpg"]},"Don’t pressure me":{projectTitle:"Don’t pressure me",techniques:["Silkscreen printing","Poster Design","Analogue Design","Handmade production"],bodyText:"The topic of a poster is determined by the amount of pressure put on the modern human being. We feel a lot of it in every part of life: work, study, private life, health, society. Very often people feel broken or devastated from all the amount of responsibilities laying on their shoulders. That is why the poster urges you to resist and Don't let it pressure you..",images:["Pressure/Pressure_1200x850_1.jpg","Pressure/Pressure_1200x850_2.jpg","Pressure/Pressure_1200x850_3.jpg","Pressure/Pressure_580x440_4.jpg","Pressure/Pressure_580x440_5.jpg","Pressure/Pressure_1200x850_6.jpg","Pressure/Pressure_580x850_7.jpg","Pressure/Pressure_580x850_8.jpg","Pressure/Pressure_1200x850_9.jpg","Pressure/Pressure_580x850_10.jpg","Pressure/Pressure_580x850_11.jpg"]},"Social Media":{projectTitle:"Social Media Posters",techniques:["Photography","Illustration","Typography"],bodyText:"Reflection on the negative effects of social media.",images:["SMPosters/SMPosters_1200x850_1.jpg","SMPosters/SMPosters_1200x850_2.jpg"]},"Natural Medication Magazine Website":{projectTitle:"Natural Medication Magazine Website",techniques:["Web Design","UX & UI Design"],bodyText:"Development of the digital representation for the printed magazine Naturheilkunde & Gesundheit. For this project, I developed the concept of the website version of the magazine and created the design for desktop, tablet, and mobile versions.",images:["NUGWebsite/NUGWebsite_1200x850_1.jpg","NUGWebsite/NUGWebsite_1200x1700_2.jpg","NUGWebsite/NUGWebsite_1200x850_3.jpg","NUGWebsite/NUGWebsite_1200x850_4.jpg","NUGWebsite/NUGWebsite_1200x850_5.jpg"]}},ie={name:"Project",setup:function(){var e=Object(o["c"])(),t=e.params.id,i=te[t];return{id:t,project:i}},methods:{isSmall:function(e){for(var t=["580x440","580x850"],i=0;i<t.length;i++)if(e.indexOf(t[i])>-1)return!0;return!1}}},ne=(i("605f"),C()(ie,[["render",ee],["__scopeId","data-v-27e7c0fb"]]));Object(n["y"])("data-v-6adfa7f2");var oe={class:"wrapper"},ae=Object(n["i"])('<img class="img" src="/About/about.png" data-v-6adfa7f2><div class="text" data-v-6adfa7f2><h1 class="youngserif-regular" data-v-6adfa7f2>Hi, nice to meet you! </h1><h2 class="youngserif-regular" data-v-6adfa7f2>My name is Olena and I am a Graphic Designer. </h2><p class="worksans-light" data-v-6adfa7f2> I am passionate about graphic design, enjoy the work on creative projects from editorial design, books, magazines, or printed matters to web design, presentations and social media content. In my work, I like to experiment and try to find interesting solutions for projects. Also, I am fond of mixing analog and digital tools to get the best out of both.</p><p class="worksans-light" data-v-6adfa7f2> I have 4+ years of work experience as a Graphic Designer and two degrees: Bachelor in Communication Design and Master in Marketing. If you want to find out more about my experience, please check my CV here. To get in touch with me, please find my contact detail on the CV or through the contact page.</p></div>',2),re=[ae];function se(e,t,i,o,a,r){return Object(n["v"])(),Object(n["g"])("div",oe,re)}Object(n["w"])();var ce={name:"About"},le=(i("16e8"),C()(ce,[["render",se],["__scopeId","data-v-6adfa7f2"]]));Object(n["y"])("data-v-a77f9a6e");var ge={class:"wrapper"},ue=Object(n["h"])("h1",{class:"youngserif-regular"},"Let's get in touch",-1),pe=Object(n["h"])("p",{class:"worksans-light"}," If you need a design or have a question, I would love to hear from you. Just send me a message in the form below. ",-1),de={ref:"form",action:"https://getform.io/f/189cc22e-b338-42bb-9184-6f9d1072eef5",method:"POST"},be=Object(n["h"])("input",{required:"",type:"name",placeholder:"Your Name",name:"name",autocomplete:"off",class:"worksans-light"},null,-1),je=Object(n["h"])("input",{required:"",type:"email",placeholder:"Email",name:"email",autocomplete:"off",class:"worksans-light"},null,-1),fe=Object(n["h"])("textarea",{required:"",type:"text",placeholder:"Message",name:"message",autocomplete:"off",class:"worksans-light"},null,-1),me=Object(n["h"])("button",{type:"submit"},"Send message",-1),he=[be,je,fe,me];function _e(e,t,i,o,a,r){return Object(n["v"])(),Object(n["g"])("div",ge,[ue,pe,Object(n["h"])("form",de,he,512)])}Object(n["w"])();var xe={name:"Contact",setup:function(){var e=Object(n["A"])(null);return{form:e}},mounted:function(){this.form.reset()}},ye=(i("4a87"),C()(xe,[["render",_e],["__scopeId","data-v-a77f9a6e"]])),Oe=[{path:"/",component:J},{path:"/Work/:id/",component:ne,name:"work"},{path:"/About/",component:le,name:"about"},{path:"/Contact/",component:ye,name:"contact"}],Se=Object(o["a"])({history:Object(o["b"])(),routes:Oe,scrollBehavior:function(e,t,i){return i?(document.body.style.minHeight=10*i.top+"px",setTimeout((function(){document.body.style.minHeight=""}),20),i):{left:0,top:0}}});Object(n["d"])(U).use(Se).mount("#app")},"5dec":function(e,t,i){},"605f":function(e,t,i){"use strict";i("d71c")},"7ba9":function(e,t,i){"use strict";i("da51")},"7fe6":function(e,t,i){e.exports=i.p+"img/OK.c363a844.svg"},"8f8b":function(e,t,i){e.exports=i.p+"img/HamburgerMenu.48c3c3ac.svg"},"9edd":function(e,t,i){"use strict";i("23bc")},aa9f:function(e,t,i){},b93c:function(e,t,i){},bf37:function(e,t,i){e.exports=i.p+"img/close.5d8fa210.svg"},d71c:function(e,t,i){},da51:function(e,t,i){},e0fb:function(e,t,i){"use strict";i("aa9f")},f57c:function(e,t,i){}});
//# sourceMappingURL=index.75f2d1ec.js.map