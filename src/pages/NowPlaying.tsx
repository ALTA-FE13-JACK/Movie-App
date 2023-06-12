import { FC, useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
import axios from "axios";

import { ButtonGold } from "@/components/Button";
import { Layout } from "@/components/Layout";
import { MoviesData } from "@/utils/user";
import { Card } from "@/components/Card";

export const NowPlaying: FC = () => {
  const [dataNowPlaying, setDataNowPlaying] = useState<MoviesData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [cookie] = useCookies();
  const token = cookie.session_id;

  useEffect(() => {
    fetchNowPlaying();
  }, [page]);

  const fetchNowPlaying = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=90f9695a1eb1d3b8980e2c2898bf11bc&anguage=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const { results } = res.data;
        setDataNowPlaying((prevData) => [...prevData, ...results]);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  function handlePage() {
    setPage(() => page + 1);
  }

  return (
    <Layout>
      <div className="p-2 md:px-10 md:py-10  w-full">
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-@Gold text-3xl md:text-5xl pb-2">
            Now Playing
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-2">
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
        <div className="flex justify-center">
          <ButtonGold onClick={() => handlePage()} label="Load More" />
        </div>
      </div>
    </Layout>
  );
};
