import React from "react";
import type { HeroCommon, Project } from "@/types/home";
import { client } from "../../../sanity/lib/client";

import type { GetStaticProps, GetStaticPaths } from "next";
import Container from "@/layout/Container";
import ProjectDetails from "@/components/commond/ProjectDetails";
import type { PostDetails } from "@/types/home";

const query = `*[_type == "project" && slug.current == $slug][0]{
    ...,
    "image":mainImage,
    }`;

type Props = { data: PostDetails };

const Post = ({ data }: Props) => {
  console.log(data);
  return (
    <div>
      <Container>
        <ProjectDetails data={data} />
      </Container>
    </div>
  );
};
export default Post;

export async function getStaticProps(context: any) {
  const { slug } = context.params;
  const res = await client.fetch(query, { slug: slug });
  return {
    props: {
      data: res,
    },
  };
}

interface ShortSlug {
  slug: {
    current: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const urlQuery = `*[_type == "project" ]{ slug }`;
  const renderProjects: ShortSlug[] = await client.fetch(urlQuery);
  const paths = renderProjects.map((item) => ({
    params: {
      slug: item.slug.current,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
