import { useNavigate, useParams } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import axios from "axios";

import { ButtonBlack, ButtonGold } from "@/components/Button";
import { DetailMovie, MoviesData } from "@/utils/user";
import { CardDetail } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { Carousel } from "@/components/Carousel";

export const Details: FC = () => {
  const [recomendations, setRecomendations] = useState<MoviesData[]>([]);
  const [details, setDetails] = useState<Partial<DetailMovie>>({});

  const { id } = useParams();

  useEffect(() => {
    fetchDetails();
    fetchRecommen();
  }, []);

  const fetchDetails = async () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?&language=en-US`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODc5NjcyMmM0Mjc3MmQ2Nzk0MTNmOGFiZGFhMDgyNCIsInN1YiI6IjY0N2RjYjMzMTc0OTczMDBjMTMzNjdmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAD5ZqUQfqsVehxAZoGnpqvma7sQDMaECJK7mAysOFU`,
        },
      })
      .then((res) => {
        const { data } = res;
        setDetails(data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const fetchRecommen = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODc5NjcyMmM0Mjc3MmQ2Nzk0MTNmOGFiZGFhMDgyNCIsInN1YiI6IjY0N2RjYjMzMTc0OTczMDBjMTMzNjdmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAD5ZqUQfqsVehxAZoGnpqvma7sQDMaECJK7mAysOFU`,
          },
        }
      )
      .then((res) => {
        const { results } = res.data;
        setRecomendations(results);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  function handleRecomen() {
    window.location.reload();
  }

  return (
    <Layout>
      <CardDetail
        key={details.id}
        bg_img={`url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`}
        title={details.title}
        img={details.poster_path}
        tagline={details.tagline}
        status={details.status}
        releas_date={details.release_date}
        genre={
          details.genres
            ? details.genres.map((genre: any) => genre.name).join(", ")
            : []
        }
        duration={details.runtime}
        rate={details.vote_average}
        popularity={details.popularity}
        overview={details.overview}
        favorite={<ButtonGold label="Add to Favorite" />}
        watch={<ButtonBlack label="Watch Trailer" />}
      />
      <div className="p-2 md:p-5 h-fit w-full ">
        <div className="md:ml-10 md:mr-10">
          <h1 className="font-bold text-@Red text-2xl">Recomendations</h1>
          <div className="carousel max-w-full p-4 space-x-4 max-h-72 dark:bg-@Black rounded-box">
            <div className="carousel-item gap-4">
              {recomendations.length > 0 ? (
                recomendations.map((recomen) => (
                  <Carousel
                    rate={recomen.vote_average}
                    img={recomen.poster_path}
                    title={recomen.title}
                    detail={`/details/${recomen.id}`}
                    favorite={<BsHeartFill />}
                    onClick={() => handleRecomen()}
                  />
                ))
              ) : (
                <p className="font-extrabold text-xl">
                  No recommendations available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
