import { FC, useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import axios from "axios";

import { ButtonGold } from "@/components/Button";
import { Layout } from "@/components/Layout";
import { MoviesData } from "@/utils/user";
import { Card } from "@/components/Card";

export const Upcoming: FC = () => {
  const [data, setData] = useState<MoviesData[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchUpcoming();
  }, [page]);

  const fetchUpcoming = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODc5NjcyMmM0Mjc3MmQ2Nzk0MTNmOGFiZGFhMDgyNCIsInN1YiI6IjY0N2RjYjMzMTc0OTczMDBjMTMzNjdmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAD5ZqUQfqsVehxAZoGnpqvma7sQDMaECJK7mAysOFU`,
          },
        }
      )
      .then((res) => {
        const { results, page } = res.data;
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
      <div className="p-2 md:px-10 py-10 w-full">
        <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-@Gold md:text-5xl">Upcoming</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-2">
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
