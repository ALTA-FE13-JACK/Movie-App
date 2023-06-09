import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { BsHeartFill } from "react-icons/bs";
import { Component } from "react";
import { ButtonGold } from "@/components/Button";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="bg-@Gold2 p-2 md:p-5 h-fit w-full ">
          <div className="md:ml-10 md:mr-10">
            <h1 className="font-bold text-@Red text-2xl">Popular</h1>
            <div className="carousel w-full  p-4 space-x-4 max-h-70  dark:bg-@Black rounded-box">
              <div className="carousel-item gap-4">
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
                <Card
                  rate="7.8"
                  img="/img/Mario-movie-poster.jpg"
                  title=" The Super Mario Bros. Movie"
                  detail=""
                  favorite={<BsHeartFill />}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Link to={"/popular"}>
                <ButtonGold label="Populer More" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 md:px-10 py-10 w-full ">
          <div className="flex justify-between  ">
            <h1 className="font-extrabold text-@Gold text-2xl">Upcoming</h1>
            <div className="pb-3">
              <Link to={"/upcoming"}>
                <ButtonGold label="See More" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-8 gap-2 md:gap-4">
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
          </div>
        </div>
        <div className="p-2 md:p-10 w-full">
          <div className="flex justify-between  ">
            <h1 className="font-extrabold text-@Gold text-2xl">Now Playing</h1>
            <div className="pb-3">
              <Link to={"/now-playing"}>
                <ButtonGold label="See More" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-8 gap-2 md:gap-4">
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
