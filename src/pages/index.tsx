import { Inter } from "next/font/google";
import Container from "@/layout/Container";
import Content from "@/components/content/Content";
import { client } from "../../sanity/lib/client";
import Hero from "@/components/hero/Hero";
import Activities from "@/components/hero/Activities";
import About from "@/components/hero/About";
import Projects from "@/components/hero/Projects";
import type { HomePageData } from "@/types/home";

const inter = Inter({ subsets: ["latin"] });

const query = `*[_type == "homePage"][0]{
  sections[]{
       _type == 'hero' => {
            title,
            _key,
            _type,
            description,
            discoverBtn,
            donateBtn,
         _type,
            tag,
            image,
  },
  _type == 'activities' => {
        title,
        _key,
        link,
         _type,
        description,
        activities
    },
    
    _type == 'about' => {
        title,
        _key,
        _type,    
        link,
        description,
       features,
       donateBtn,
      collection,
      goal,

    },
   
 _type == 'projects' => {
        title,
        _key,
        _type,   
        projects[]->{
          title,
          "image":mainImage,
          _id
        }
    },
 _type == 'content' => {
        title,
        _key,
        link,
         _type,
        description,
        activities
    },
  }
}`;

interface Props {
  data: HomePageData;
}

export default function Home({ data }: Props) {
  const { sections } = data;
  console.log(sections);
  return (
    <main>
      <Container>
        {sections.map((item) => {
          switch (item._type) {
            case "hero":
              return <Hero key={item._key} {...item} />;
            case "activities":
              return <Activities key={item._key} {...item} />;
            case "about":
              return <About key={item._key} {...item} />;
            case "projects":
              return <Projects key={item._key} {...item} />;
            case "content":
              return <Content key={item._key} {...item} />;
          }
        })}
      </Container>
    </main>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(query);
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
