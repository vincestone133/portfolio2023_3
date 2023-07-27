import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["vietnamese"] });
import { NavigationMenu } from "@/containers/navBar";
import { CircleImg } from "@/components/CircleImg";
import { NavigationContact } from "@/containers/navContact";
export default function Home() {
  return (
    <>
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
