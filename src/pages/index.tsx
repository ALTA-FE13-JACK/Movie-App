import { FC, useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import { ButtonGold } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { Layout } from "@/components/Layout";
import { MoviesData } from "@/utils/user";
import { Card } from "@/components/Card";

const Home: FC = () => {
  const [dataNowPlaying, setDataNowPlaying] = useState<MoviesData[]>([]);
  const [dataUpcoming, setDataUpcoming] = useState<MoviesData[]>([]);
  const [dataPopular, setDataPopular] = useState<MoviesData[]>([]);
  const [cookie] = useCookies();
  const token = cookie.session_id;

  useEffect(() => {
    fetchNowPlaying();
    fetchUpcoming();
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=90f9695a1eb1d3b8980e2c2898bf11bc&anguage=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const { results } = res.data;
        setDataPopular(results);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const fetchUpcoming = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=90f9695a1eb1d3b8980e2c2898bf11bc&anguage=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const { results } = res.data;
        setDataUpcoming(results);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const fetchNowPlaying = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=90f9695a1eb1d3b8980e2c2898bf11bc&anguage=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const { results } = res.data;
        setDataNowPlaying(results);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <Layout>
      <div className="bg-@Gold2 p-2 md:p-5 h-fit w-full ">
        <div className="md:ml-10 md:mr-10">
          <h1 className="font-bold text-@Red text-2xl">Popular</h1>
          <div className="carousel max-w-full p-4 space-x-4 max-h-72 dark:bg-@Black rounded-box">
            <div className="carousel-item gap-4">
              {dataPopular.map((popular) => (
                <Carousel
                  rate={popular.vote_average}
                  img={popular.poster_path}
                  title={popular.title}
                  detail={`/details/${popular.id}`}
                  favorite={<BsHeartFill />}
                />
              ))}
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
        <div className="grid  grid-cols-2 sm:grid-cols-4  lg:grid-cols-10 gap-2">
          {dataUpcoming.map((upcoming) => (
            <Card
              rate={upcoming.vote_average}
              img={upcoming.poster_path}
              title={upcoming.title}
              detail={`/details/${upcoming.id}`}
              favorite={<BsHeartFill />}
            />
          ))}
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
        <div className="grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-10 gap-2 ">
          {dataNowPlaying.map((playing) => (
            <Card
              rate={playing.vote_average}
              img={playing.poster_path}
              title={playing.title}
              detail={`/details/${playing.id}`}
              favorite={<BsHeartFill />}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
