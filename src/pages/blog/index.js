import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPostList } from '../../utils/posts';
import PostList from '../../components/PostList';


export const getStaticProps = () => {
    const postList = getPostList();
    return {
      props: {
        postList,
      },
    };
  };

  const Blog = ({ postList }) => {
    return (
      <>
        <Head>
          <title>Traveling Blog // Modern Travelers</title>
        </Head>
        <div className='page-wrapper'>
          <Header />
          <main>
          <PostList posts={postList} />
          </main>
          <Footer />
        </div>
      </>
    );
  };
  
  //getStaticProps() function here
  
  export default Blog;