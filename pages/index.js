import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Next.js Mastery</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center flex-col bg-gray-800 text-white">
        <h1 className="text-3xl text-center">Next.js Mastery</h1>
        <p className="mt-2">Learn next.js for free!</p>
      </div>
    </div>
    )
  }
