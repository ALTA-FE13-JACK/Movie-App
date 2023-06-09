import { Card, CardFavorite } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { BsFillStarFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Component } from "react";
import { ButtonBlack, ButtonGold } from "@/components/Button";
import { Link } from "react-router-dom";

export class Favorite extends Component {
  render() {
    return (
      <Layout>
        <div className="flex flex-col justify-center items-center p-2 md:px-10 md:py-10 ">
          <h1 className="font-extrabold mb-5 text-@Red text-2xl md:text-5xl">
            My Favorite Movies
          </h1>
          <div className="grid  grid-cols-2 md:grid-cols-1  gap-4 ">
            <CardFavorite
              bg_img={`url("/img/Mario-movie-poster.jpg")`}
              img="/img/Mario-movie-poster.jpg"
              rate="7.8"
              status="Released"
              releas_date=" 2023-04-05"
              title="The Super Mario Bros. Movie"
              tagline=""
              genre="Animation, Family, Adventure, Fantasy, Comedy"
              overview=" While working underground to fix a water main,
                        Brooklyn plumbers—and brothers—Mario and Luigi are
                        transported down a mysterious pipe and wander into a
                        magical new world. But when the brothers are
                        separated, Mario embarks on an epic quest to find
                        Luigi."
              remove={<ButtonGold label="Remove " />}
              watch={<ButtonBlack label="Watch Trailer" />}
            />
            <CardFavorite
              bg_img={`url("/img/Spiderman.jpg")`}
              img="/img/Spiderman.jpg"
              rate="7.8"
              status="Released"
              releas_date=" 2023-04-05"
              title="Spider-Man: Across the Spider-Verse"
              tagline="It's how you wear the mask that matters"
              genre="Action, Adventure, Animation, Science Fiction"
              overview="After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most."
              remove={<ButtonGold label="Remove " />}
              watch={<ButtonBlack label="Watch Trailer" />}
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
