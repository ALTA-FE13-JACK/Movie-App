import { useNavigate, useParams } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
import axios from "axios";

import { ButtonBlack, ButtonGold } from "@/components/Button";
import { DetailMovie, MoviesData } from "@/utils/user";
import { CardDetail } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { Carousel } from "@/components/Carousel";

declare global {
  interface Window {
    my_modal_3: HTMLDialogElement | undefined;
  }
}

export const Details: FC = () => {
  const [recomendations, setRecomendations] = useState<MoviesData[]>([]);
  const [details, setDetails] = useState<Partial<DetailMovie>>({});
  const [cookie] = useCookies();
  const token = cookie.session_id;
  const { id } = useParams();

  useEffect(() => {
    fetchDetails();
    fetchRecommen();
  }, []);

  const fetchDetails = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=90f9695a1eb1d3b8980e2c2898bf11bc&language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=90f9695a1eb1d3b8980e2c2898bf11bc&append_to_response=videos`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
        watch={
          <ButtonBlack
            onClick={() => window.my_modal_3?.showModal()}
            label="Watch Trailer"
          />
        }
      />
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box w-full max-w-6xl">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">{details.title}</h3>
          <p className="py-4">
            <iframe
              key={details.id}
              height={"100%"}
              width={"100%"}
              src={`https://www.youtube.com/embed/${details.title}`}
              title={details.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </p>
        </form>
      </dialog>

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
