import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/opulence.jpg"
          alt="An image showing Opulence"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Opulence</h1>
      <p>I am a full stack developer, Flutter React Node.js</p>
    </section>
  );
}

export default Hero;
