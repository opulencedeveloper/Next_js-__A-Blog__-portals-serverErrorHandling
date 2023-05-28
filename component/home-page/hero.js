import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        {/* the width and height here does not affect the width and height of the Image but the quality, 
        use CSS to assign width and height, but if you are looking for the width and height to give here
        use the one you gave in your CSS, so you get an OK quality, its like rendering a low quality image
        and increasing the width and height, this will be a blur image so its better to assign the width and height 
        you gave in your CSS here so itll balance or you twick it to get desired quality*/}
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
