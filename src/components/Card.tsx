import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FC, ReactNode } from "react";

interface PropsCard {
  rate: string;
  favorite: ReactNode;
  title: string;
  img: string;
  detail: string;
}
export const Card: FC<PropsCard> = (props) => {
  const { rate, favorite, title, img, detail } = props;

  return (
    <div className="card h-60 w-40 lg:h-52 lg:w-full rounded-md hover:scale-105">
      <div className="flex justify-between items-center w-full h-7 rounded-t-md pr-2 bg-@Black opacity-80 absolute top-0 left-0">
        <div className="flex flex-row items-center">
          <p className="pl-2 text-@Gold  ">
            <BsFillStarFill />
          </p>
          <p className="p-1 font-semibold text-white">{rate}</p>
        </div>
        <div>
          <span className="text-@Gold2 hover:text-@Red">{favorite}</span>
        </div>
      </div>
      <Link to={detail}>
        <img
          className=" h-60 lg:h-52 rounded-md"
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={img}
        />
      </Link>

      <div className="flex justify-center items-center w-full min-h-12 h-fit rounded-b-md pr-2 bg-@Black bg-opacity-80 absolute bottom-0 ">
        <Link to={detail}>
          <p className="pl-2 text-white  text-center hover:text-@Gold">
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
};

interface PropsCardDetail {
  title: string | undefined;
  tagline: string | undefined;
  genre: string | never[];
  duration: string | undefined;
  rate: string | undefined;
  popularity: string | undefined;
  overview: string | undefined;
  bg_img: string;
  img: string | undefined;
  status: string | undefined;
  releas_date: string | undefined;
  favorite: ReactNode;
  watch: ReactNode;
}
export const CardDetail: FC<PropsCardDetail> = (props) => {
  const {
    title,
    tagline,
    genre,
    duration,
    rate,
    popularity,
    overview,
    bg_img,
    img,
    status,
    releas_date,
    favorite,
    watch,
  } = props;

  return (
    <div
      className="hero min-h-82"
      style={{
        backgroundImage: bg_img,
      }}
    >
      <div className="hero flex flex-col p-2 md:px-10 py-10 w-full bg-@Gold2 bg-opacity-60 ">
        <div className="flex flex-col md:flex-row  px-10 md:gap-12">
          <div className="card h-full md:h-96 w-1/2  rounded-md hover:scale-105">
            <img
              className="w-full h-full rounded-md opacity-100"
              src={`https://image.tmdb.org/t/p/w500${img}`}
              alt={img}
            />
            <div className="flex flex-col w-full min-h-16 rounded-b-md pr-2 bg-@Black opacity-80 absolute bottom-0 ">
              <p className="pl-2 font-bold text-2xl text-@Gold text-center hover:text-@Gold">
                {status}
              </p>
              <p className="pl-2 font-bold text-xl text-white text-center hover:text-@Gold">
                {releas_date}
              </p>
            </div>
          </div>
          <div className="max-w-5xl">
            <h1 className="font-extrabold text-4xl lg:text-5xl text-@Black">
              {title}
            </h1>
            <p className="px-2 pb-2 font-mono md:text-2xl">{tagline}</p>
            <h1 className="px-2 font-bold md:text-2xl text-@Black">
              Genre : {genre}
            </h1>
            <h1 className="px-2 font-bold md:text-2xl text-@Black">
              Duration : {duration} Minutes
            </h1>
            <h1 className="px-2 font-bold md:text-2xl text-@Black">
              Rate : {rate}
            </h1>
            <h1 className="px-2 font-bold md:text-2xl text-@Black">
              Popularity : {popularity}
            </h1>
            <details className="collapse lg:hidden">
              <summary className="collapse-title font-bold md:text-2xl text-@Black">
                Overview
              </summary>
              <div className="collapse-content">
                <p>{overview}</p>
              </div>
            </details>

            <div className="px-2 pt-2 hidden lg:block">
              <h1 className="font-bold md:text-2xl text-@Black">Overview</h1>
              <p className="px-2 font-medium md:text-2xl ">{overview}</p>
            </div>
            <div className="flex flex-row">
              <div className="flex justify-center gap-4">
                {favorite}
                {watch}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PropsCardFavorite {
  title: string;
  tagline: string;
  genre: string;
  rate: string;
  overview: string;
  bg_img: string;
  img: string;
  status: string;
  releas_date: string;
  remove: ReactNode;
  watch: ReactNode;
}
export const CardFavorite: FC<PropsCardFavorite> = (props) => {
  const {
    title,
    tagline,
    genre,
    rate,
    overview,
    bg_img,
    img,
    status,
    releas_date,
    remove,
    watch,
  } = props;

  return (
    <div
      className="hero rounded-md"
      style={{
        backgroundImage: bg_img,
      }}
    >
      <div className="w-full bg-@Gold2 bg-opacity-80 rounded-md">
        <div className="flex flex-col   md:flex-row  md:gap-12 ">
          <Link to={"/details"}>
            <div className="card md:h-96 md:w-60 rounded-md hover:scale-95">
              <div className="flex flex-row  justify-between items-center w-full h-16 rounded-t-md pr-2 bg-@Black bg-opacity-60 absolute top-0 ">
                <div className="flex flex-row ">
                  <p className="pl-2 font-bold text-2xl  text-@Gold text-center hover:text-@Gold">
                    <BsFillStarFill />
                  </p>
                  <p className="pl-2 font-bold text-2xl  text-white text-center hover:text-@Gold">
                    {rate}
                  </p>
                </div>
              </div>
              <img
                className="w-full h-full rounded-md opacity-100 "
                src={img}
                alt="image"
              />
              <div className="flex flex-col w-full h-16 rounded-b-md pr-2 bg-@Black bg-opacity-60 absolute bottom-0 ">
                <p className="pl-2 font-bold text-2xl md:text-4xl text-@Gold text-center hover:text-@Gold">
                  {status}
                </p>
                <p className="pl-2 font-bold text-xl text-white text-center">
                  {releas_date}
                </p>
              </div>
            </div>
          </Link>
          <div className="md:w-1/2 lg:w-full hidden md:block">
            <Link to={"/details"}>
              <h1 className="px-2 md:px-0 pt-2 md:pt-5 font-extrabold text-2xl md:text-4xl lg:text-5xl text-@Black hover:text-@Red">
                {title}
              </h1>
            </Link>
            <p className="px-2 pb-2 font-sans md:text-2xl">{tagline}</p>
            <h1 className="px-2 font-bold md:text-2xl text-@Black ">
              Genre : {genre}
            </h1>

            <details className="collapse lg:hidden">
              <summary className="collapse-title font-bold md:text-2xl text-@Black">
                Overview
              </summary>
              <div className="collapse-content">
                <p>{overview}</p>
              </div>
            </details>

            <div className="px-2 pt-2 hidden lg:block">
              <h1 className="font-bold md:text-2xl text-@Black">Overview</h1>
              <p className="px-2 font-medium md:text-2xl ">{overview}</p>
            </div>
            <div className="flex flex-row pb-3  justify-center  md:justify-start">
              <div className="flex justify-center gap-4">
                {remove}
                {watch}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
