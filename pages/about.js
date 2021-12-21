import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="title">
        About
      </h1>
      <div>
        <Image
          src="/images/pose_reiwa_woman.png"
          width={144}
          height={144}
          alt="Your Name" />
      </div>
    </Layout>
  )
}

export default About