import Head from "next/head";

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
        <a className="hover-a" href="https://github.com/SD170">
          github&rarr;
        </a>
        <br />
        <a className="hover-a" href="https://www.linkedin.com/in/sd170">
          LinkedIn&rarr;
        </a>
        <br />
        <a
          className="hover-a"
          href="https://stackoverflow.com/users/11974952/saswata-dutta"
        >
          stackoverflow&rarr;
        </a>
      </div>

      <style jsx>
        {`
        div{
          margin:10px
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
