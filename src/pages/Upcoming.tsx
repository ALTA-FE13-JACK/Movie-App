import { BsHeartFill } from "react-icons/bs";
import { Component } from "react";

import { ButtonGold } from "@/components/Button";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";

export class Upcoming extends Component {
  render() {
    return (
      <Layout>
        <div className="p-2 md:px-10 py-10 w-full">
          <div className="flex justify-center items-center">
            <h1 className="font-extrabold text-@Gold md:text-5xl">Upcoming</h1>
          </div>
          <div className="grid grid-cols-8 mt-5 gap-4">
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
            <Card
              rate="7.8"
              img="/img/Mario-movie-poster.jpg"
              title=" The Super Mario Bros. Movie"
              detail=""
              favorite={<BsHeartFill />}
            />
          </div>
          <div className="flex justify-center">
            <ButtonGold label="Load More" />
          </div>
        </div>
      </Layout>
    );
  }
}
