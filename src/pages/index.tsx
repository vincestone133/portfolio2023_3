import { Inter } from "next/font/google";
import { NavigationMenu } from "../containers/navBar";
const inter = Inter({ subsets: ["vietnamese"] });
export default function Home() {
  return (
    <section
      className="bg-white h-screen"
      style={{
        backgroundImage: `url(/imgs/bg01.png)`,
      }}
    >
      <NavigationMenu></NavigationMenu>

      <h1 className="svn-text text-3xl py-4">Nguyễn Quang Sơn</h1>
    </section>
  );
}
