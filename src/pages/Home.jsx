import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="home">
      <div className="home--left">
        <h2 className="title">
          Forge Your Own Creative Path with AI-Generated Images
        </h2>
        <p className="desc">
        <strong>CANV<span>AI</span></strong> is an AI image generator that helps you bring your ideas to life. With our powerful algorithms, you can create unique and stunning images in just a few clicks. Choose from a variety of styles, themes, and colors to create images that are tailored to your needs. Whether you need images for your website, social media, or digital artwork, It has got you covered. Start creating today and forge your own creative path with us!
        </p>
        <div className="action--container">
            <Link className="btn btn--primary" to='/create'>get started</Link>
        </div>
      </div>
      <div className="home--right">
        <img src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
