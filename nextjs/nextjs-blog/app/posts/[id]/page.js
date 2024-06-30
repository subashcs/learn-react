import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Date from "@/components/date";
import utilStyles from "@/styles/utils.module.css";

export const generateMetadata = async function ({ params }) {
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
  };
};

export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

/**
 * 
  Q. When should I use getStaticPaths?

  You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes and:

    The data comes from a headless CMS
    The data comes from a database
    The data comes from the filesystem
    The data can be publicly cached (not user-specific)
    The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance

    NOTE: {getStaticPaths} will only run during build in production, it will not be called during runtime. 
 * 
 */
// OUTDATED!!
// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

/**
 *
 * NOTE: getStaticProps runs during next build for any paths returned during build
 */
// OUTDATED
// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
