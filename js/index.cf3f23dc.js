(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],g=0,p=[];g<s.length;g++)a=s[g],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},o={index:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0f10":function(e,t,i){e.exports=i.p+"img/arrowup.d2a3be59.svg"},"23bc":function(e,t,i){},"3f27":function(e,t,i){},"40d9":function(e,t,i){},"42d4":function(e,t,i){"use strict";i("95c3")},"4a87":function(e,t,i){"use strict";i("b93c")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),o=i("6c02"),r=i("0f10"),a=i.n(r),s=function(e){return Object(n["y"])("data-v-44788fe6"),e=e(),Object(n["w"])(),e},c={class:"content-wrapper"},l=s((function(){return Object(n["h"])("footer",{class:"roboto-thin"},[Object(n["h"])("div",{class:"copyright"},"© Olena Kokhan"),Object(n["h"])("img",{class:"go-up",onclick:"window.scrollTo({top: 0, behavior: 'smooth'});",src:a.a})],-1)}));function u(e,t,i,o,r,a){var s=Object(n["C"])("Navigation"),u=Object(n["C"])("router-view");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(s),Object(n["h"])("div",c,[Object(n["k"])(u)]),l],64)}var g=i("7fe6"),p=i.n(g),b=i("8f8b"),d=i.n(b),f=i("bf37"),j=i.n(f),h=function(e){return Object(n["y"])("data-v-658242a3"),e=e(),Object(n["w"])(),e},m={class:"navigation"},_=h((function(){return Object(n["h"])("img",{class:"logo",src:p.a,alt:"Logo"},null,-1)})),x={key:0,class:"desktop-menu youngserif-regular"},y=Object(n["j"])("Work"),S=Object(n["j"])("About"),O=Object(n["j"])("Contact"),v={key:1},T={key:0,class:"mobile-menu youngserif-regular"},k={class:"mobile-menu-links"},D=Object(n["j"])("Work"),w=Object(n["j"])("About"),I=Object(n["j"])("Contact");function N(e,t,i,o,r,a){var s=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",m,[Object(n["k"])(s,{class:"link-logo",to:"/"},{default:Object(n["I"])((function(){return[_]})),_:1}),o.isMobileWidth?Object(n["f"])("",!0):(Object(n["v"])(),Object(n["g"])("div",x,[Object(n["k"])(s,{to:"/",onClick:a.menuClicked},{default:Object(n["I"])((function(){return[y]})),_:1},8,["onClick"]),Object(n["k"])(s,{to:"/About",onClick:a.menuClicked},{default:Object(n["I"])((function(){return[S]})),_:1},8,["onClick"]),Object(n["k"])(s,{to:"/Contact",onClick:a.menuClicked},{default:Object(n["I"])((function(){return[O]})),_:1},8,["onClick"])])),o.isMobileWidth?(Object(n["v"])(),Object(n["g"])("div",v,[r.menuVisible?Object(n["f"])("",!0):(Object(n["v"])(),Object(n["g"])("img",{key:0,class:"hamburger",src:d.a,alt:"Menu",onClick:t[0]||(t[0]=function(){return a.menuClicked&&a.menuClicked.apply(a,arguments)})})),r.menuVisible?(Object(n["v"])(),Object(n["g"])("img",{key:1,class:"close",src:j.a,alt:"Menu",onClick:t[1]||(t[1]=function(){return a.menuClicked&&a.menuClicked.apply(a,arguments)})})):Object(n["f"])("",!0)])):Object(n["f"])("",!0)]),Object(n["k"])(n["b"],{name:"fade"},{default:Object(n["I"])((function(){return[r.menuVisible&&o.isMobileWidth?(Object(n["v"])(),Object(n["g"])("div",T,[Object(n["h"])("div",k,[Object(n["k"])(s,{to:"/",onClick:a.menuClicked},{default:Object(n["I"])((function(){return[D]})),_:1},8,["onClick"]),Object(n["k"])(s,{to:"/About",onClick:a.menuClicked},{default:Object(n["I"])((function(){return[w]})),_:1},8,["onClick"]),Object(n["k"])(s,{to:"/Contact",onClick:a.menuClicked},{default:Object(n["I"])((function(){return[I]})),_:1},8,["onClick"])])])):Object(n["f"])("",!0)]})),_:1})],64)}var C={name:"Navigation",setup:function(){var e=Object(n["A"])(window.innerWidth),t=function(){return e.value=window.innerWidth};Object(n["t"])((function(){return window.addEventListener("resize",t)})),Object(n["u"])((function(){return window.removeEventListener("resize",t)}));var i=Object(n["c"])((function(){return e.value<500}));return{isMobileWidth:i}},methods:{menuClicked:function(){this.menuVisible=!this.menuVisible,this.toggleScrollLock(this.menuVisible)},toggleScrollLock:function(e){e?(document.body.style.overflow="hidden",document.body.style.height="100%"):(document.body.style.overflow="",document.body.style.height="")}},data:function(){return{menuVisible:!1}},mounted:function(){var e=this;Object(n["H"])((function(){e.isMobileWidth||(e.menuVisible=!1,e.toggleScrollLock(e.menuVisible))}))}},M=(i("e0fb"),i("6b0d")),P=i.n(M);const U=P()(C,[["render",N],["__scopeId","data-v-658242a3"]]);var W=U,G={name:"App",components:{Navigation:W}};i("df90"),i("42d4");const A=P()(G,[["render",u],["__scopeId","data-v-44788fe6"]]);var H=A,L={class:"tiles"};function z(e,t,i,o,r,a){var s=Object(n["C"])("ProjectTile");return Object(n["v"])(),Object(n["g"])("div",L,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(e.mainPageContent,(function(e,t){return Object(n["v"])(),Object(n["e"])(s,{key:t,Title:e.projectTitle,SubText:e.subText,ImgName:e.fileName},null,8,["Title","SubText","ImgName"])})),128))])}var E=["src"],q={class:"titlebar"},B={class:"title youngserif-regular"},V={class:"subtext roboto-thin"};function F(e,t,i,o,r,a){var s=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["e"])(s,{to:{name:"work",params:{id:i.Title}},class:"tile"},{default:Object(n["I"])((function(){return[Object(n["h"])("img",{src:"MainPage/"+i.ImgName},null,8,E),Object(n["h"])("div",q,[Object(n["h"])("h3",B,Object(n["E"])(i.Title),1),Object(n["h"])("h4",V,Object(n["E"])(i.SubText),1)])]})),_:1},8,["to"])}var J={name:"ProjectTile",props:{Title:String,SubText:String,ImgName:String}};i("9edd");const K=P()(J,[["render",F],["__scopeId","data-v-01aeccc6"]]);var R=K,X=[{fileName:"SoulCare.jpg",projectTitle:"SoulCare",subText:"Mobile App / Web Design "},{fileName:"IntergenerationalSelf.jpg",projectTitle:"Intergenerational Self",subText:"Thesis project / Book / Collage"},{fileName:"OhArt.jpg",projectTitle:"Oh Art",subText:"Book project / Letterpress"},{fileName:"NUGMagazine.jpg",projectTitle:"Natural Medicine Magazine",subText:"Editorial Design / Magazine"},{fileName:"Decision=Limits.jpg",projectTitle:"Decision=Limits",subText:"Experimental poster workshop / Silkscreen printing"},{fileName:"Symbols.jpg",projectTitle:"Symbols & Signs",subText:"Book project / Letterpress"},{fileName:"NUGNewSeries.jpg",projectTitle:"Special Series of Articles",subText:"Editorial Design / Magazine"},{fileName:"SUDWebsite.jpg",projectTitle:"S&D Verlag Website",subText:"Web Design / Company Website"},{fileName:"Terrain.jpg",projectTitle:"Terrain",subText:"Experimental project / Tessellation"},{fileName:"SHTD.jpg",projectTitle:"Say Hi To Design",subText:"Casual Design Exhibition"},{fileName:"Caslon.jpg",projectTitle:"Caslon",subText:"One font book / Typography"},{fileName:"SeeIt.jpg",projectTitle:"See It",subText:"Interactive Book / Soft - prototyping project"},{fileName:"Pressure.jpg",projectTitle:"Don’t pressure me",subText:"Experimental Poster - Printing Workshop"},{fileName:"SMPosters.jpg",projectTitle:"Social Media",subText:"Posters"},{fileName:"NUGWebsite.jpg",projectTitle:"Natural Medicine Website",subText:"Web Design"}],Y={name:"Home",created:function(){},data:function(){return{mainPageContent:X}},components:{ProjectTile:R},props:{},methods:{}};i("f4b4");const Q=P()(Y,[["render",z],["__scopeId","data-v-2fdae89e"]]);var Z=Q,$={class:"project roboto-thin"},ee={class:"main"},te={class:"text-wrapper"},ie={class:"project-title youngserif-regular"},ne={class:"project-text"},oe={class:"image-wrapper"},re=["alt","src"];function ae(e,t,i,o,r,a){return Object(n["v"])(),Object(n["g"])("div",$,[Object(n["h"])("div",ee,[Object(n["h"])("div",te,[Object(n["h"])("div",ie,Object(n["E"])(o.project.projectTitle),1),Object(n["h"])("ul",null,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(o.project.techniques,(function(e){return Object(n["v"])(),Object(n["g"])("li",{key:e},Object(n["E"])(e),1)})),128))]),Object(n["h"])("div",ne,Object(n["E"])(o.project.bodyText),1)]),Object(n["h"])("div",oe,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(o.project.images,(function(e){return Object(n["v"])(),Object(n["g"])("img",{key:e,alt:e,src:"/ProjectsPhotos/"+e,class:Object(n["q"])(["image",a.isSmall(e)?"small":"big"])},null,10,re)})),128))])])])}var se={"Intergenerational Self":{projectTitle:"Intergenerational Self",techniques:["Book Design","Experimental Design","Editorial Design","Mixed Media","Collage","Scanning"],bodyText:'"Intergenerational Self" is an intimate look at family narratives and the value of memories through the medium of collage.',images:["IntergenerationalSelf/IntergenerationalSelf_1200x850__1.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_2.jpg","IntergenerationalSelf/IntergenerationalSelf_580x440_3.jpg","IntergenerationalSelf/IntergenerationalSelf_580x440_4.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_5.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_6.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_7.jpg","IntergenerationalSelf/IntergenerationalSelf_1200x850_8.jpg"]},"Oh Art":{projectTitle:"Oh Art",techniques:["Photography","Digital printing","Book Binding","Letterpress","Handmade glue binding"],bodyText:"The book project that explores the art as a way of travelling to different places in space, time or mind. The book does not have the starting point in the traditional meaning. It can be read from any page. The main goal is to evoke curiosity, inner thinking, and reflection about the viewer personal experience of the concept “traveling through art”.",images:["OhArt/OhArt_1200x850_1.jpg","OhArt/OhArt_1200x850_2.jpg","OhArt/OhArt_580x440_3.jpg","OhArt/OhArt_580x440_4.jpg","OhArt/OhArt_1200x850_5.jpg","OhArt/OhArt_1200x850_6.jpg","OhArt/OhArt_580x440_7.jpg","OhArt/OhArt_580x440_8.jpg","OhArt/OhArt_1200x850_9.jpg","OhArt/OhArt_1200x850_10.jpg"]},"Natural Medicine Magazine":{projectTitle:"Natural Medicine Magazine",techniques:["Editorial Design","Magazine layout"],bodyText:"Naturheilkunde & Gesundheit is a German magazine about natural medicine. During my work at the publishing house, I was responsible for the layouts of the pages, mostly articles and various additional information (ads, content pages, covers, etc.). On this page, you can find examples of my editorial design for Naturheilkunde & Gesundheit Magazine.",images:["NUGMagazine/NUGMagazine_1200x850_1.jpg","NUGMagazine/NUGMagazine_1200x850_2.jpg","NUGMagazine/NUGMagazine_1200x850_3.jpg","NUGMagazine/NUGMagazine_1200x850_4.jpg","NUGMagazine/NUGMagazine_1200x850_5.jpg","NUGMagazine/NUGMagazine_1200x850_6.jpg","NUGMagazine/NUGMagazine_1200x850_7.jpg"]},"Decision=Limits":{projectTitle:"Decision=Limits",techniques:["Silkscreen printing","Poster Design","Analogue Design","Handmade production"],bodyText:"To make a decision it is necessary to limit the selection of available choices. Every decision requires limits. During the experimental poster-printing workshop I developed the visual expression of the mentioned idea. The whole process of poster creation was computer-free and made in an analog way. You can see the final result and the process of creating it.",images:["Decision=Limits/Decision_580x850_1.jpg","Decision=Limits/Decision_580x850_2.jpg","Decision=Limits/Decision_1200x850_3.jpg","Decision=Limits/Decision_580x440_4.jpg","Decision=Limits/Decision_580x440_5.jpg","Decision=Limits/Decision_1200x850_6.jpg","Decision=Limits/Decision_1200x850_7.jpg","Decision=Limits/Decision_580x440_8.jpg","Decision=Limits/Decision_580x440_9.jpg","Decision=Limits/Decision_1200x850_10.jpg"]},"Symbols & Signs":{projectTitle:"Symbols & Signs",techniques:["Book Binding","Letterpress","Editorial Design","Experimental Design","Typography"],bodyText:"Double sided book contains two ways of looking at the short story by Vladimir Nabokov: through the written text and image.",images:["Symbols/Symbols_1200x850_1.jpg","Symbols/Symbols_1200x850_2.jpg","Symbols/Symbols_580x850_3.jpg","Symbols/Symbols_580x850_4.jpg","Symbols/Symbols_1200x850_5.jpg","Symbols/Symbols_580x440_6.jpg","Symbols/Symbols_580x440_7.jpg","Symbols/Symbols_1200x850_8.jpg","Symbols/Symbols_580x440_9.jpg","Symbols/Symbols_580x440_10.jpg","Symbols/Symbols_1200x850_11.jpg","Symbols/Symbols_1200x850_12.jpg"]},"Special Series of Articles":{projectTitle:"Special Series of Articles",techniques:["Editorial Design","Logo Design","Layout Design"],bodyText:"Creating a new special series of articles including series logo, special elements, and layouts of the article for different types of the spread.",images:["NUGNewSeries/NUGNewSeries_1200x850_1.jpg","NUGNewSeries/NUGNewSeries_1200x850_2.jpg","NUGNewSeries/NUGNewSeries_1200x850_3.jpg","NUGNewSeries/NUGNewSeries_1200x850_4.jpg"]},"S&D Verlag Website":{projectTitle:"S&D Verlag Website",techniques:["Web Design","UX & UI design"],bodyText:"Web design project for the B2B website of publishing house.",images:["SUDWebsite/SUDWebsite_1200x850_1.jpg","SUDWebsite/SUDWebsite_1200x1700_2.jpg","SUDWebsite/SUDWebsite_1200x850_3.jpg"]},Terrain:{projectTitle:"Terrain",techniques:["Experimental Design","Poster Design","Tessellation"],bodyText:'Terrain is the result of an experimental design project "Form follows experiment". It is aimed to show how the everyday objects such as coffee can be transformed into new unusual shapes which have the characteristics of tesselations and simultaneously remain objects interesting for an eye exploration.',images:["Terrain/Terrain_580x850_1.jpg","Terrain/Terrain_580x850_2.jpg","Terrain/Terrain_1200x850__3.jpg","Terrain/Terrain_1200x850__4.jpg","Terrain/Terrain_1200x850__5.jpg","Terrain/Terrain_580x440_6.jpg","Terrain/Terrain_580x440_7.jpg","Terrain/Terrain_1200x850__8.jpg","Terrain/Terrain_1200x850__9.jpg"]},"Say Hi To Design":{projectTitle:"Say Hi To Design",techniques:["Exhibition Design & Organisation","Visual Identity Design","Silkscreen printing","Logo Design"],bodyText:"Say Hi To Design is a casual design exhibition that was held at Rhein-Waal University of Applied Sciences (Germany). The idea was suggested and implemented by my colleague Robine Gillen and me. We wanted to create an event that would bring together design students of our university and give an opportunity to present our works to a broader audience. We developed the general concept of the event together with its visual identity.  Logo, posters, business cards, exhibition materials as well as merchandise (tote bags, notebooks, stickers) were designed and handmade produced at the university facilities in order to promote the big variety of production opportunities available at the university. Photo credit: Sven Siebel.",images:["SHTD/SHTD_1200x850_1.jpg","SHTD/SHTD_580x440_2.jpg","SHTD/SHTD_580x440_3.jpg","SHTD/SHTD_1200x850_4.jpg","SHTD/SHTD_1200x850_5.jpg","SHTD/SHTD_1200x850_6.jpg","SHTD/SHTD_580x440_7.jpg","SHTD/SHTD_580x440_8.jpg","SHTD/SHTD_1200x850_9.jpg","SHTD/SHTD_580x850_10.jpg","SHTD/SHTD_580x850_11.jpg","SHTD/SHTD_1200x850_12.jpg"]},Caslon:{projectTitle:"Caslon",techniques:["Typography","Book Binding","Laser Cutting"],bodyText:"The project is dedicated to Caslon Typeface. The main idea is to study the typeface from different perspectives to gain a better understanding of various opportunities for font usage. The whole book is made out of one typeface including ornaments and illustrations.",images:["Caslon/Caslon_1200x850_1.jpg","Caslon/Caslon_1200x850_2.jpg","Caslon/Caslon_580x440_3.jpg","Caslon/Caslon_580x440_4.jpg","Caslon/Caslon_1200x850_5.jpg","Caslon/Caslon_1200x850_6.jpg","Caslon/Caslon_580x440_7.jpg","Caslon/Caslon_580x440_8.jpg","Caslon/Caslon_1200x850_9.jpg","Caslon/Caslon_580x850_10.jpg","Caslon/Caslon_580x850_11.jpg"]},"See It":{projectTitle:"See It",techniques:["Soft-prototyping","Electronics","Laser Cutting","Embroidery","Printing","Debossing","Drilling"],bodyText:'In the last decade, people buy significantly fewer printed books. Electronic books have more benefits in comparison to traditional ones. For those who still prefer a printed one, it is still a hard task to impress a reader and attract his attention with a usual book. In book stores, there are hundreds of books and it is very likely that most of them will not be even noticed. What is the future of printed books? How can we make a book more visible? "See it" is a book concept that combines all valuable properties of a printed book and opens the door for the interaction between the reader and a book. It is a book that can attract the attention of a reader in a different unexpected way. Using the sensor integrated into the cover the book reacts to the motion around it and responds on it with a light (also integrated into the book spine). Therefore if a customer tries to reach a book near it, the ‘See it’ book will be definitely noticed and arouse interest in it.',images:["SeeIt/SeeIt_1200x850_1.jpg","SeeIt/SeeIt_580x440_2.jpg","SeeIt/SeeIt_580x440_3.jpg","SeeIt/SeeIt_1200x850_4.jpg","SeeIt/SeeIt_1200x850_5.jpg","SeeIt/SeeIt_580x440_6.jpg","SeeIt/SeeIt_580x440_7.jpg","SeeIt/SeeIt_1200x850_8.jpg","SeeIt/SeeIt_580x440_9.jpg","SeeIt/SeeIt_580x440_10.jpg","SeeIt/SeeIt_1200x850_11.jpg","SeeIt/SeeIt_1200x850_12.jpg","SeeIt/SeeIt_1200x850_13.jpg"]},"Don’t pressure me":{projectTitle:"Don’t pressure me",techniques:["Silkscreen printing","Poster Design","Analogue Design","Handmade production"],bodyText:"The topic of a poster is determined by the amount of pressure put on the modern human being. We feel a lot of it in every part of life: work, study, private life, health, society. Very often people feel broken or devastated from all the amount of responsibilities laying on their shoulders. That is why the poster urges you to resist and Don't let it pressure you..",images:["Pressure/Pressure_1200x850_1.jpg","Pressure/Pressure_1200x850_2.jpg","Pressure/Pressure_1200x850_3.jpg","Pressure/Pressure_580x440_4.jpg","Pressure/Pressure_580x440_5.jpg","Pressure/Pressure_1200x850_6.jpg","Pressure/Pressure_580x850_7.jpg","Pressure/Pressure_580x850_8.jpg","Pressure/Pressure_1200x850_9.jpg","Pressure/Pressure_580x850_10.jpg","Pressure/Pressure_580x850_11.jpg"]},"Social Media":{projectTitle:"Social Media Posters",techniques:["Photography","Illustration","Typography"],bodyText:"Reflection on the negative effects of social media.",images:["SMPosters/SMPosters_1200x850_1.jpg","SMPosters/SMPosters_1200x850_2.jpg"]},"Natural Medicine Website":{projectTitle:"Natural Medicine Website",techniques:["Web Design","UX & UI Design"],bodyText:"Development of the digital representation for the printed magazine Naturheilkunde & Gesundheit. For this project, I developed the concept of the website version of the magazine and created the design for desktop, tablet, and mobile versions.",images:["NUGWebsite/NUGWebsite_1200x850_1.jpg","NUGWebsite/NUGWebsite_1200x1700_2.jpg","NUGWebsite/NUGWebsite_1200x850_3.jpg","NUGWebsite/NUGWebsite_1200x850_4.jpg","NUGWebsite/NUGWebsite_1200x850_5.jpg"]}},ce={name:"Project",setup:function(){var e=Object(o["c"])(),t=e.params.id,i=se[t];return{id:t,project:i}},methods:{isSmall:function(e){for(var t=["580x440","580x850"],i=0;i<t.length;i++)if(e.indexOf(t[i])>-1)return!0;return!1}}};i("82ef");const le=P()(ce,[["render",ae],["__scopeId","data-v-d6213a52"]]);var ue=le,ge={class:"wrapper"},pe=Object(n["i"])('<img class="img" src="/About/about.png" data-v-142b3854><div class="text" data-v-142b3854><h1 class="youngserif-regular" data-v-142b3854>Hi, nice to meet you! </h1><h2 class="youngserif-regular" data-v-142b3854>My name is Olena and I am a Graphic Designer. </h2><p class="worksans-light" data-v-142b3854> I am passionate about graphic design and enjoy working on different creative projects from editorial design, books, magazines, and any other printed materials to web design, presentations and social media content. In my work, I like to experiment and try to find interesting solutions for projects. Also, I am fond of mixing analog and digital tools to get the best out of both.</p><p class="worksans-light" data-v-142b3854> I have 4+ years of work experience as a Graphic Designer and two degrees: Bachelor in Communication Design (Germany) and Master in Marketing (Ukraine). Now I am based in Manchester, England. If you want to find out more about my experience, please check my <a href="About/CV_Olena_Kokhan_2021.pdf" data-v-142b3854>CV here</a>. To get in touch with me, please find contact details in my CV or through the contact page.</p></div>',2),be=[pe];function de(e,t,i,o,r,a){return Object(n["v"])(),Object(n["g"])("div",ge,be)}var fe={name:"About"};i("91ff");const je=P()(fe,[["render",de],["__scopeId","data-v-142b3854"]]);var he=je,me=function(e){return Object(n["y"])("data-v-a77f9a6e"),e=e(),Object(n["w"])(),e},_e={class:"wrapper"},xe=me((function(){return Object(n["h"])("h1",{class:"youngserif-regular"},"Let's get in touch",-1)})),ye=me((function(){return Object(n["h"])("p",{class:"worksans-light"}," If you need a design or have a question, I would love to hear from you. Just send me a message in the form below. ",-1)})),Se={ref:"form",action:"https://getform.io/f/189cc22e-b338-42bb-9184-6f9d1072eef5",method:"POST"},Oe=me((function(){return Object(n["h"])("input",{required:"",type:"name",placeholder:"Your Name",name:"name",autocomplete:"off",class:"worksans-light"},null,-1)})),ve=me((function(){return Object(n["h"])("input",{required:"",type:"email",placeholder:"Email",name:"email",autocomplete:"off",class:"worksans-light"},null,-1)})),Te=me((function(){return Object(n["h"])("textarea",{required:"",type:"text",placeholder:"Message",name:"message",autocomplete:"off",class:"worksans-light"},null,-1)})),ke=me((function(){return Object(n["h"])("button",{type:"submit"},"Send message",-1)})),De=[Oe,ve,Te,ke];function we(e,t,i,o,r,a){return Object(n["v"])(),Object(n["g"])("div",_e,[xe,ye,Object(n["h"])("form",Se,De,512)])}var Ie={name:"Contact",setup:function(){var e=Object(n["A"])(null);return{form:e}},mounted:function(){this.form.reset()}};i("4a87");const Ne=P()(Ie,[["render",we],["__scopeId","data-v-a77f9a6e"]]);var Ce=Ne,Me=[{path:"/",component:Z},{path:"/Work/:id/",component:ue,name:"work"},{path:"/About/",component:he,name:"about"},{path:"/Contact/",component:Ce,name:"contact"}],Pe=Object(o["a"])({history:Object(o["b"])(),routes:Me,scrollBehavior:function(e,t,i){return i?(document.body.style.minHeight=10*i.top+"px",setTimeout((function(){document.body.style.minHeight=""}),20),i):{left:0,top:0}}});Object(n["d"])(H).use(Pe).mount("#app")},"7fe6":function(e,t,i){e.exports=i.p+"img/OK.c363a844.svg"},"82ef":function(e,t,i){"use strict";i("86c1")},"86c1":function(e,t,i){},"8f8b":function(e,t,i){e.exports=i.p+"img/HamburgerMenu.48c3c3ac.svg"},"91ff":function(e,t,i){"use strict";i("40d9")},"95c3":function(e,t,i){},"9edd":function(e,t,i){"use strict";i("23bc")},aa9f:function(e,t,i){},b7c9:function(e,t,i){},b93c:function(e,t,i){},bf37:function(e,t,i){e.exports=i.p+"img/close.5d8fa210.svg"},df90:function(e,t,i){"use strict";i("3f27")},e0fb:function(e,t,i){"use strict";i("aa9f")},f4b4:function(e,t,i){"use strict";i("b7c9")}});
//# sourceMappingURL=index.cf3f23dc.js.map