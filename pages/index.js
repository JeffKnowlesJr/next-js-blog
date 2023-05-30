import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Learn <a href="https://nextjs.org">Next.js</a>
          {' & '}
          <a href="https://react.dev/">React.js!</a>
        </h1>

        <p className={styles.description}>What I learned about React JS?</p>

        {
          // We're going into a codeblock here
          // Tracking X and Y axis on.

          function mouse_position() {
            var e = window.event

            var posX = e.clientX
            var posX = e.clientY

            document.mousePosition.posx.value = posX
            document.mousePosition.posy.value = posY
          }

          // 5 / 20 3:30pm - Failed to commit.
        }

        <div className="mouse-pos-widget">
          <form action="null" name="mousePosition" className={styles.grid}>
            POSX: <input type="text" name="posx" />
            POSY: <input type="text" name="posx" />
          </form>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Process &rarr;</h3>
            <p>We're talking about writing it down.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Knowledge &rarr;</h3>
            <p>We're talking about referencing previous solutions.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
