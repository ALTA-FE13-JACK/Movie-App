import { FC, useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
import axios from "axios";

import { ButtonGold } from "@/components/Button";
import { Layout } from "@/components/Layout";
import { MoviesData } from "@/utils/user";
import { Card } from "@/components/Card";

export const Upcoming: FC = () => {
  const [data, setData] = useState<MoviesData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [cookie] = useCookies();
  const token = cookie.session_id;

  useEffect(() => {
    fetchUpcoming();
  }, [page]);

  const fetchUpcoming = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=90f9695a1eb1d3b8980e2c2898bf11bc&anguage=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const { results } = res.data;
        console.log(results);
        setData((prevData) => [...prevData, ...results]);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  function handlepage() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <Layout>
      <div className="p-2 md:px-10 md:py-10 w-full">
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-@Gold pb-2 text-3xl md:text-5xl">
            Upcoming
          </h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-10 gap-2">
          {data.map((upcoming) => (
            <Card
              rate={upcoming.vote_average}
              img={upcoming.poster_path}
              title={upcoming.title}
              detail={`/details/${upcoming.id}`}
              favorite={<BsHeartFill />}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonGold onClick={() => handlepage()} label="Load More" />
        </div>
      </div>
    </Layout>
  );
};
