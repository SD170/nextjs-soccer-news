import Head from "next/head";
import Link from "next/link";

const about = () => {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="keywords" content="soccer news" />
      </Head>
      <h1>dev details:</h1>
      <h4>Saswata Dutta</h4>
      <div>
        <Link href="https://github.com/SD170" passHref>
          <a className="hover-a" target="_blank">
            github&rarr;
          </a>
        </Link>
        <br />
        <Link href="https://www.linkedin.com/in/sd170" passHref>
          <a className="hover-a" target="_blank">
            LinkedIn&rarr;
          </a>
        </Link>
        <br />
        <Link
          href="https://stackoverflow.com/users/11974952/saswata-dutta"
          passHref
        >
          <a className="hover-a" target="_blank">
            stackoverflow&rarr;
          </a>
        </Link>
      </div>

      <style jsx>
        {`
          div {
            margin: 10px;
          }
          .hover-a {
            display: inline-block;
            position: relative;
            color: #0087ca;
          }

          .hover-a:after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #0087ca;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }

          .hover-a:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}
      </style>
    </>
  );
};

export default about;
