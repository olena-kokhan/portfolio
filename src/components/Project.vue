<template>
  <div class="project roboto-thin">
    <div class="main">
      <div class="text-wrapper">
        <div class="project-title youngserif-regular">
          {{ project.projectTitle }}
        </div>
        <ul>
          <li v-for="technique of project.techniques" :key="technique">
            {{ technique }}
          </li>
        </ul>
        <div class="project-text">{{ project.bodyText }}</div>
      </div>
      <div class="image-wrapper">
        <img
          v-for="bigImage of project.images"
          :key="bigImage"
          :alt="bigImage"
          :src="'/ProjectsPhotos/' + bigImage"
          class="image"
          :class="isSmall(bigImage) ? 'small' : 'big'"

        />
      </div>
    </div>
  </div>
</template>

<script>

var projectDataMap = {
  "Moonwake": {
    projectTitle: "Moonwake",
    techniques: [
      "Brand Identity",
      "Packaging",
      "Logo",
    ],
    bodyText: "Concept idea for the new brand of eLiquids.",
    images: [
      "Moonwake/Moonwake_1200x850_1.jpg",
      "Moonwake/Moonwake_1200x850_2.jpg",
      "Moonwake/Moonwake_1200x850_3.jpg",
      "Moonwake/Moonwake_1200x850_4.jpg",
      "Moonwake/Moonwake_1200x850_5.jpg"
    ]
  },
  "SoulCare": {
    projectTitle: "SoulCare",
    techniques: [
      "Web Design",
      "Mobile App",
    ],
    bodyText: "Concept for the application aimed to support people strugling with self-acceptance or having a low self-esteem.",
    images: [
      "SoulCare/SoulCare_1200x850_1.jpg",
      "SoulCare/SoulCare_1200x850_2.jpg",
      "SoulCare/SoulCare_1200x850_3.jpg"
    ]
  },
  "Intergenerational Self": {
    projectTitle: "Intergenerational Self",
    techniques: [
      "Book Design",
      "Experimental Design",
      "Editorial Design",
      "Mixed Media",
      "Collage",
      "Scanning",
    ],
    bodyText: "\"Intergenerational Self\" is an intimate look at family narratives and the value of memories through the medium of collage.",
    images: [
      "IntergenerationalSelf/IntergenerationalSelf_1200x850__1.jpg",
      "IntergenerationalSelf/IntergenerationalSelf_1200x850_2.jpg",
      "IntergenerationalSelf/IntergenerationalSelf_580x440_3.jpg",
      "IntergenerationalSelf/IntergenerationalSelf_580x440_4.jpg",
      "IntergenerationalSelf/IntergenerationalSelf_1200x850_5.jpg",
      "IntergenerationalSelf/IntergenerationalSelf_1200x850_6.jpg",
      "IntergenerationalSelf/IntergenerationalSelf_1200x850_7.jpg",
      "IntergenerationalSelf/IntergenerationalSelf_1200x850_8.jpg"
    ]
  },
  "Oh Art": {
    projectTitle: "Oh Art",
    techniques: [
      "Photography",
      "Digital printing",
      "Book Binding",
      "Letterpress",
      "Handmade glue binding",
    ],
    bodyText:
      "The book project that explores the art as a way of travelling to different places in space, time or mind. The book does not have the starting point in the traditional meaning. It can be read from any page. The main goal is to evoke curiosity, inner thinking, and reflection about the viewer personal experience of the concept “traveling through art”.",
    images: [
      "OhArt/OhArt_1200x850_1.jpg",
      "OhArt/OhArt_1200x850_2.jpg",
      "OhArt/OhArt_580x440_3.jpg",
      "OhArt/OhArt_580x440_4.jpg",
      "OhArt/OhArt_1200x850_5.jpg",
      "OhArt/OhArt_1200x850_6.jpg",
      "OhArt/OhArt_580x440_7.jpg",
      "OhArt/OhArt_580x440_8.jpg",
      "OhArt/OhArt_1200x850_9.jpg",
      "OhArt/OhArt_1200x850_10.jpg"
    ]
  },
  "Natural Medicine Magazine": {
    projectTitle: "Natural Medicine Magazine",
    techniques: [
      "Editorial Design", 
      "Magazine layout"
    ],
    bodyText: "Naturheilkunde & Gesundheit is a German magazine about natural medicine. During my work at the publishing house, I was responsible for the layouts of the pages, mostly articles and various additional information (ads, content pages, covers, etc.). On this page, you can find examples of my editorial design for Naturheilkunde & Gesundheit Magazine.",
     images: [
      "NUGMagazine/NUGMagazine_1200x850_1.jpg",
      "NUGMagazine/NUGMagazine_1200x850_2.jpg",
      "NUGMagazine/NUGMagazine_1200x850_3.jpg",
      "NUGMagazine/NUGMagazine_1200x850_4.jpg",
      "NUGMagazine/NUGMagazine_1200x850_5.jpg",
      "NUGMagazine/NUGMagazine_1200x850_6.jpg",
      "NUGMagazine/NUGMagazine_1200x850_7.jpg"
    ]
  },
  "Decision=Limits": {
    projectTitle: "Decision=Limits",
    techniques: [
      "Silkscreen printing",
      "Poster Design",
      "Analogue Design",
      "Handmade production",
    ],
    bodyText: "To make a decision it is necessary to limit the selection of available choices. Every decision requires limits. During the experimental poster-printing workshop I developed the visual expression of the mentioned idea. The whole process of poster creation was computer-free and made in an analog way. You can see the final result and the process of creating it.",
    images: [
      "Decision=Limits/Decision_580x850_1.jpg",
      "Decision=Limits/Decision_580x850_2.jpg",
      "Decision=Limits/Decision_1200x850_3.jpg",
      "Decision=Limits/Decision_580x440_4.jpg",
      "Decision=Limits/Decision_580x440_5.jpg",
      "Decision=Limits/Decision_1200x850_6.jpg",
      "Decision=Limits/Decision_1200x850_7.jpg",
      "Decision=Limits/Decision_580x440_8.jpg",
      "Decision=Limits/Decision_580x440_9.jpg",
      "Decision=Limits/Decision_1200x850_10.jpg"
    ]
  },
  "Symbols & Signs": {
    projectTitle: "Symbols & Signs",
    techniques: [
      "Book Binding",
      "Letterpress",
      "Editorial Design",
      "Experimental Design",
      "Typography",
    ],
    bodyText: "Double sided book contains two ways of looking at the short story by Vladimir Nabokov: through the written text and image.",
    images: [
      "Symbols/Symbols_1200x850_1.jpg",
      "Symbols/Symbols_1200x850_2.jpg",
      "Symbols/Symbols_580x850_3.jpg",
      "Symbols/Symbols_580x850_4.jpg",
      "Symbols/Symbols_1200x850_5.jpg",
      "Symbols/Symbols_580x440_6.jpg",
      "Symbols/Symbols_580x440_7.jpg",
      "Symbols/Symbols_1200x850_8.jpg",
      "Symbols/Symbols_580x440_9.jpg",
      "Symbols/Symbols_580x440_10.jpg",
      "Symbols/Symbols_1200x850_11.jpg",
      "Symbols/Symbols_1200x850_12.jpg"
    ]
  },
  "Special Series of Articles": {
    projectTitle: "Special Series of Articles",
    techniques: [
      "Editorial Design", 
      "Logo Design",
      "Layout Design",
    ],
    bodyText: "Creating a new special series of articles including series logo, special elements, and layouts of the article for different types of the spread.",
     images: [
      "NUGNewSeries/NUGNewSeries_1200x850_1.jpg",
      "NUGNewSeries/NUGNewSeries_1200x850_2.jpg",
      "NUGNewSeries/NUGNewSeries_1200x850_3.jpg",
      "NUGNewSeries/NUGNewSeries_1200x850_4.jpg"
    ]
  },
  "S&D Verlag Website": {
    projectTitle: "S&D Verlag Website",
    techniques: [
      "Web Design", 
      "UX & UI design"],
    bodyText: "Web design project for the B2B website of publishing house.",
    images: [
      "SUDWebsite/SUDWebsite_1200x850_1.jpg",
      "SUDWebsite/SUDWebsite_1200x1700_2.jpg",
      "SUDWebsite/SUDWebsite_1200x850_3.jpg"
    ]
  },
  "Terrain": {
    projectTitle: "Terrain",
    techniques: [
      "Experimental Design", 
      "Poster Design", 
      "Tessellation"],
    bodyText: "Terrain is the result of an experimental design project \"Form follows experiment\". It is aimed to show how the everyday objects such as coffee can be transformed into new unusual shapes which have the characteristics of tesselations and simultaneously remain objects interesting for an eye exploration.",
    images: [
      "Terrain/Terrain_580x850_1.jpg",
      "Terrain/Terrain_580x850_2.jpg",
      "Terrain/Terrain_1200x850__3.jpg",
      "Terrain/Terrain_1200x850__4.jpg",
      "Terrain/Terrain_1200x850__5.jpg",
      "Terrain/Terrain_580x440_6.jpg",
      "Terrain/Terrain_580x440_7.jpg",
      "Terrain/Terrain_1200x850__8.jpg",
      "Terrain/Terrain_1200x850__9.jpg"
    ]
  },
  "Say Hi To Design": {
    projectTitle: "Say Hi To Design",
    techniques: [
      "Exhibition Design & Organisation",
      "Visual Identity Design",
      "Silkscreen printing",
      "Logo Design",
    ],
    bodyText: "Say Hi To Design is a casual design exhibition that was held at Rhein-Waal University of Applied Sciences (Germany). The idea was suggested and implemented by my colleague Robine Gillen and me. We wanted to create an event that would bring together design students of our university and give an opportunity to present our works to a broader audience. We developed the general concept of the event together with its visual identity.  Logo, posters, business cards, exhibition materials as well as merchandise (tote bags, notebooks, stickers) were designed and handmade produced at the university facilities in order to promote the big variety of production opportunities available at the university. Photo credit: Sven Siebel.",
    images: [
      "SHTD/SHTD_1200x850_1.jpg",
      "SHTD/SHTD_580x440_2.jpg",
      "SHTD/SHTD_580x440_3.jpg",
      "SHTD/SHTD_1200x850_4.jpg",
      "SHTD/SHTD_1200x850_5.jpg",
      "SHTD/SHTD_1200x850_6.jpg",
      "SHTD/SHTD_580x440_7.jpg",
      "SHTD/SHTD_580x440_8.jpg",
      "SHTD/SHTD_1200x850_9.jpg",
      "SHTD/SHTD_580x850_10.jpg",
      "SHTD/SHTD_580x850_11.jpg",
      "SHTD/SHTD_1200x850_12.jpg"
    ]
  },

  "Caslon": {
    projectTitle: "Caslon",
    techniques: ["Typography", "Book Binding", "Laser Cutting"],
    bodyText: "The project is dedicated to Caslon Typeface. The main idea is to study the typeface from different perspectives to gain a better understanding of various opportunities for font usage. The whole book is made out of one typeface including ornaments and illustrations.",
    images: [
      "Caslon/Caslon_1200x850_1.jpg",
      "Caslon/Caslon_1200x850_2.jpg",
      "Caslon/Caslon_580x440_3.jpg",
      "Caslon/Caslon_580x440_4.jpg",
      "Caslon/Caslon_1200x850_5.jpg",
      "Caslon/Caslon_1200x850_6.jpg",
      "Caslon/Caslon_580x440_7.jpg",
      "Caslon/Caslon_580x440_8.jpg",
      "Caslon/Caslon_1200x850_9.jpg",
      "Caslon/Caslon_580x850_10.jpg",
      "Caslon/Caslon_580x850_11.jpg"
    ]
  },
  "See It": {
    projectTitle: "See It",
    techniques: [
      "Soft-prototyping",
      "Electronics",
      "Laser Cutting",
      "Embroidery",
      "Printing",
      "Debossing",
      "Drilling",
    ],
    bodyText: "In the last decade, people buy significantly fewer printed books. Electronic books have more benefits in comparison to traditional ones. For those who still prefer a printed one, it is still a hard task to impress a reader and attract his attention with a usual book. In book stores, there are hundreds of books and it is very likely that most of them will not be even noticed. What is the future of printed books? How can we make a book more visible? \"See it\" is a book concept that combines all valuable properties of a printed book and opens the door for the interaction between the reader and a book. It is a book that can attract the attention of a reader in a different unexpected way. Using the sensor integrated into the cover the book reacts to the motion around it and responds on it with a light (also integrated into the book spine). Therefore if a customer tries to reach a book near it, the ‘See it’ book will be definitely noticed and arouse interest in it.",
    images: [
      "SeeIt/SeeIt_1200x850_1.jpg",
      "SeeIt/SeeIt_580x440_2.jpg",
      "SeeIt/SeeIt_580x440_3.jpg",
      "SeeIt/SeeIt_1200x850_4.jpg",
      "SeeIt/SeeIt_1200x850_5.jpg",
      "SeeIt/SeeIt_580x440_6.jpg",
      "SeeIt/SeeIt_580x440_7.jpg",
      "SeeIt/SeeIt_1200x850_8.jpg",
      "SeeIt/SeeIt_580x440_9.jpg",
      "SeeIt/SeeIt_580x440_10.jpg",
      "SeeIt/SeeIt_1200x850_11.jpg",
      "SeeIt/SeeIt_1200x850_12.jpg",
      "SeeIt/SeeIt_1200x850_13.jpg"
    ]
  },
"Don’t pressure me": {
    projectTitle: "Don’t pressure me",
    techniques: [
      "Silkscreen printing",
      "Poster Design",
      "Analogue Design",
      "Handmade production",
    ],
    bodyText: "The topic of a poster is determined by the amount of pressure put on the modern human being. We feel a lot of it in every part of life: work, study, private life, health, society. Very often people feel broken or devastated from all the amount of responsibilities laying on their shoulders. That is why the poster urges you to resist and Don't let it pressure you..",
    images: [
      "Pressure/Pressure_1200x850_1.jpg",
      "Pressure/Pressure_1200x850_2.jpg",
      "Pressure/Pressure_1200x850_3.jpg",
      "Pressure/Pressure_580x440_4.jpg",
      "Pressure/Pressure_580x440_5.jpg",
      "Pressure/Pressure_1200x850_6.jpg",
      "Pressure/Pressure_580x850_7.jpg",
      "Pressure/Pressure_580x850_8.jpg",
      "Pressure/Pressure_1200x850_9.jpg",
      "Pressure/Pressure_580x850_10.jpg",
      "Pressure/Pressure_580x850_11.jpg"
    ]
  },
  "Social Media": {
    projectTitle: "Social Media Posters",
    techniques: [
      "Photography", 
      "Illustration", 
      "Typography"
    ],
    bodyText: "Reflection on the negative effects of social media.",
    images: [
      "SMPosters/SMPosters_1200x850_1.jpg", 
      "SMPosters/SMPosters_1200x850_2.jpg"
    ]
  },
  "Natural Medicine Website": {
    projectTitle: "Natural Medicine Website",
    techniques: [
      "Web Design", 
      "UX & UI Design"
    ],
    bodyText: "Development of the digital representation for the printed magazine Naturheilkunde & Gesundheit. For this project, I developed the concept of the website version of the magazine and created the design for desktop, tablet, and mobile versions.",
    images: [
      "NUGWebsite/NUGWebsite_1200x850_1.jpg", 
      "NUGWebsite/NUGWebsite_1200x1700_2.jpg",
      "NUGWebsite/NUGWebsite_1200x850_3.jpg",
      "NUGWebsite/NUGWebsite_1200x850_4.jpg",
      "NUGWebsite/NUGWebsite_1200x850_5.jpg"
    ]
  },
  
};

import { useRoute } from "vue-router";

export default {
  name: "Project",
  setup() {
    const route = useRoute();

    const id = route.params.id;

    const project = projectDataMap[id];
    return {
      id,
      project,
    };
  },
  methods: {
    isSmall(img) {
        const smallImgSizes = ['580x440', '580x850' ]

        for(let i=0;i<smallImgSizes.length; i++) {
          if(img.indexOf(smallImgSizes[i]) > -1) {
            return true;
          }
        }

        return false;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project {
  width: 100%;
  font-size: 18px;
}

.main {
  display: block;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  color: #383838;
  margin: 10px 20px;
  padding-bottom: 15px;
}

.image-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.project-title {
  font-size: 24px;
  color: #404040;
  font-weight: bold;
}

.project-text {
  padding-right: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
  font-size: 15px;
}

.image {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}

@media (min-width: 500px) {
  .text-wrapper {
    flex-wrap: wrap;
    flex-direction: row;
  }

  .project-title {
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
  }

  ul {
    flex: 0 0 35%;
    text-align: right;
    padding: 0 20px;
    min-width: 200px;
    margin: 0;
  }

  .project-text {
    flex: 1 0 0%;
    padding: 0 20px;
    text-align: left;
    border-left: 2px solid #404040;
  }

  .image.small{
    width: calc(50% - 5px);
  }
}

</style>
