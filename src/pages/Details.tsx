import { Card, CardDetail } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { BsHeartFill } from "react-icons/bs";
import { Component } from "react";
import { ButtonBlack, ButtonGold } from "@/components/Button";
import { Link } from "react-router-dom";

export class Details extends Component {
  render() {
    return (
      <Layout>
        <CardDetail
          bg_img={`url("/img/Mario-movie-poster.jpg")`}
          title=" The Super Mario Bros. Movie"
          img="/img/Mario-movie-poster.jpg"
          tagline=""
          status="Released"
          releas_date=" 2023-04-05"
          genre="Animation, Family, Adventure, Fantasy, Comedy"
          duration="92 Minutes"
          rate="7.8"
          popularity="5368.542"
          overview="While working underground to fix a water main, Brooklyn
          plumbers—and brothers—Mario and Luigi are transported down
          a mysterious pipe and wander into a magical new world. But
          when the brothers are separated, Mario embarks on an epic
          quest to find Luigi."
          favorite={<ButtonGold label="Add to Favorite" />}
          watch={<ButtonBlack label="Watch Trailer" />}
        />

        <div className="p-2 md:px-10 py-10 w-full ">
          <div className="flex justify-between  ">
            <h1 className="font-extrabold text-@Red text-2xl">
              Recomendations
            </h1>
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
      </Layout>
    );
  }
}
