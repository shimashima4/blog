import { client } from "../libs/client";
import styles from "../styles/Home.module.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  // console.log(data);
  return {
    props: {
      blog: data,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <a href="">{blog.title}</a>
        </li>
      ))}
    </div>
  );
}
