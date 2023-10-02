import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["vietnamese"] });
import { NavigationMenu } from "@/containers/navBar";
import { CircleImg } from "@/components/CircleImg";
import { NavigationContact } from "@/containers/navContact";
export default function Home() {
  const metaImg =
    "https://s3.ap-southeast-1.amazonaws.com/images.tubudd.com/blog/thumbnail_Theartofstorytelling_jpeg_54a1bacc81.jpg";
  return (
    <>
      <Head>
        <title>Portfolio 2023</title>
        <meta name="description" content="Designed by Nguyen Quang Son" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="The Rock" />

        <meta property="og:image" content={metaImg} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationMenu></NavigationMenu>
      <section
        className="h-screen w-screen flex items-center"
        style={{ backgroundImage: `url(/imgs/bg01.png)` }}
      >
        <CircleImg resize={"500"} src="/imgs/ava01.png"></CircleImg>
        <div className="w-screen flex flex-col mx-24">
          <h1 className="svn-text text-white py-4">Nguyễn Quang Sơn</h1>
          <div className="flex justify-between">
            <h1 className="title-text">Front-End</h1>
            <h1 className="title-text">Developer</h1>
          </div>
          <h1 className="svn-text ml-auto py-4">Junior Dev</h1>
          <NavigationContact></NavigationContact>
        </div>
      </section>
    </>
  );
}
