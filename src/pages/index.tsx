import { Inter } from "next/font/google";
// import { Button } from "rebass";
const inter = Inter({ subsets: ["vietnamese"] });

export default function Home() {
  return (
    <>
      {/* <Button variant="primary" mr={2}>
        Primary
      </Button> */}
      <h1 className="svn-text">Nguyễn Quang Sơn</h1>
    </>
  );
}
