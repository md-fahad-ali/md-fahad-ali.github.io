// pages/_app.js
import Head from "next/head";

function Mytag() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Portfolio-Md.Fahad Ali</title>
        <meta name="title" content="Portfolio-Md.Fahad Ali" />
        <meta
          name="google-site-verification"
          content="hoqaklJ6V0JrmZOScX0gm40YFbAEo9bl41feNL819VQ"
        />
        <meta
          name="description"
          content="Hello, I am Fahad Ali. I am a full-stack developer with years of experience. I can work with Html, CSS, React.js, Next.js, Webgl, Tailwind, Express, and Mongo/SQL."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fahadali.me" />
        <meta property="og:title" content="Portfolio-Md.Fahad Ali" />
        <meta
          property="og:description"
          content="Hello, I am Fahad Ali. I am a full-stack developer with years of experience. I can work with Html, CSS, React.js, Next.js, Webgl, Tailwind, Express, and Mongo/SQL."
        />
        <meta property="og:image" content="/logo.png" />
        {/* Add width and height for the image */}
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="314" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fahadali.me" />
        <meta property="twitter:title" content="Portfolio-Md.Fahad Ali" />
        <meta
          property="twitter:description"
          content="Hello, I am Fahad Ali. I am a full-stack developer with years of experience. I can work with Html, CSS, React.js, Next.js, Webgl, Tailwind, Express, and Mongo/SQL."
        />
        <meta property="twitter:image" content="/logo.png" />
        {/* Add width and height for the image */}
        <meta property="twitter:image:width" content="600" />
        <meta property="twitter:image:height" content="314" />

        {/* Other meta tags can be added as needed */}
      </Head>
    </>
  );
}

export default Mytag;
