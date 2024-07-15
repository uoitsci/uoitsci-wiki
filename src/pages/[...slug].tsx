
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { glob } from 'glob';
import Head from 'next/head';

import Header from '../components/navbar/header';
import MDXComponents from '../components/MDXComponents';

interface FrontMatter {
  title: string;
}

interface BlogPostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = glob.sync('src/pages/content/**/*.mdx');

  const paths = files.map(file => {
    const slug = file
      .replace(/^src\/pages\/content\//, '') // Remove base directory
      .replace(/\.mdx$/, '') // Remove file extension
      .split('/'); // Split slug into array for nested paths
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const { slug } = params as { slug: string[] };

  try {
    const filePath = path.join(process.cwd(), 'src/pages/content', `${slug.join('/')}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');

    const { content, data } = matter(source);
    const mdxSource = await serialize(content, { 
      mdxOptions: { remarkPlugins: [remarkGfm]},
      scope: data 
    });

    return {
      props: {
        source: mdxSource,
        frontMatter: data as FrontMatter,
      },
    };
  } catch (error) {
    console.error("Error loading static props:", error);
    return {
      notFound: true,
    };
  }
};

const BlogPost: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ source, frontMatter }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{`${frontMatter.title} | CS Support OTU`}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header />
      <div className='prose max-w-screen-2xl mx-auto px-6 md:px-12 mt-12 mb-24' id='content'>
        <MDXRemote {...source} components={MDXComponents}/>
      </div>
    </div>
  );
};

//<h1>{frontMatter.title}</h1>

export default BlogPost;