import FeaturedPosts from "@/component/home-page/featured-posts";
import Hero from "@/component/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts.util";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Opulence Blog</title>
        <meta
          name="description"
          content="I post about programming"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
