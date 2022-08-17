import type { NextPage } from "next"
import Head from "next/head"
import Title from "../components/AppTitle"
import TitleLogo from "../assets/images/logo.svg"
import Calculator from "../components/Calculator"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Calculate the piece of a bill plus the tip for a given number of people." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-brandColors-veryLightGrayishCyan flex justify-center py-10 overflow-auto min-h-screen">
        <div className="flex flex-col gap-6 justify-center items-center w-full md:px-10">
          <Title titleLogo={TitleLogo} />
          <Calculator />
        </div>
      </main>
    </>
  )
}

export default Home
