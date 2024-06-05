import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className="mainContent">
        <nav className={"nav_container"}>
          <nav className={"nav"}>
            <text className={"logo"}>BESHOICE</text>
            <section className={"nav_menu"}>


              <div>
                <article className="menu">
                    <text>Menu</text>
                    <text>Inicio</text>
                    <text>Productos</text>
                    <text>textccesorios</text>
                    <text>Contáctenos</text>
                    <text>Carrito</text>
                    <text>Perfil</text>
                </article>
              </div>


              <div className="b_r">
                <article className="menu">
                  <section className="img_cont"></section>
                  <section className="img_cont_1"></section>
                  <section className="img_cont_2"></section>
                </article>
              </div>


            </section>
          </nav>
        </nav>
        <setion className={"promotion"}>
          <video autoPlay muted src="https://vod-cloud.freecaster.cn/louisvuitton/9c28caa6-ca9d-4b44-bc24-fb1c8e9fcc1c/rg8N43rpkC_24.mp4" loop="loop" tabindex="-1" aria-hidden="true">
          </video>
        </setion>
        <setion className={"product_view_1"}>
        <text className="tittle">RECOMENDACION </text>
        <p>amet, consectetur adipiscing elit. Duis in nisi vitae</p>
        <div className="card_container">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
        </setion>
        <setion className={"promotion"}>
        <text className="tittle">COLLECION VERANO</text>
            <div className="card_container">
              <div className="card_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisi vitae purus feugiat varius quis imperdiet nisl. Pellentesque sit amet aliquam nisi, at mattis ex. Curabitur eleifend ornare lorem, at consequat sapien suscipit eget. Fusce efficitur lacus vel ligula porta imperdiet. Donec varius sem ac quam luctus, non vulputate nulla venenatis. Nulla imperdiet gravida orci ut pretium. Aliquam sed rutrum nulla, in tincidunt velit. Fusce blandit, lorem non condimentum pretium, felis magna viverra purus, ut efficitur justo risus nec arcu.
              </div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
        </setion>
        <setion className={"product_view"}>
          <text className="tittle">ACCSESORIOS</text>
            <div className="card_container">
              <div className="card_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisi vitae purus feugiat varius quis imperdiet nisl. Pellentesque sit amet aliquam nisi, at mattis ex. Curabitur eleifend ornare lorem, at consequat sapien suscipit eget. Fusce efficitur lacus vel ligula porta imperdiet. Donec varius sem ac quam luctus, non vulputate nulla venenatis. Nulla imperdiet gravida orci ut pretium. Aliquam sed rutrum nulla, in tincidunt velit. Fusce blandit, lorem non condimentum pretium, felis magna viverra purus, ut efficitur justo risus nec arcu.
              </div>
              <div className="card">
              </div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
        </setion>
        <footer className={"footer"}></footer>
      </main>
    </>
  );
}

//Nest js Code

/*
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
*/