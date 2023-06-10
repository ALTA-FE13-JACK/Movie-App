import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FC, ReactNode } from "react";

interface PropsCarousel {
  rate: string;
  favorite: ReactNode;
  title: string;
  img: string;
  detail: string;
  onClick?: () => void;
}
export const Carousel: FC<PropsCarousel> = (props) => {
  const { rate, favorite, onClick, title, img, detail } = props;

  return (
    <div
      onClick={onClick}
      className="card h-60 w-40 rounded-md hover:scale-105"
    >
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
          className="max-h-72 rounded-md"
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={img}
        />
      </Link>
      <div className="flex justify-center items-center w-full h-14 rounded-b-md pr-2 bg-@Black opacity-80 absolute bottom-0 ">
        <Link to={detail}>
          <p className="pl-2 text-white  text-center hover:text-@Gold">
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
};
