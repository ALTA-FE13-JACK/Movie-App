import { BsFillStarFill } from "react-icons/bs";
import { FC, ReactNode } from "react";

interface PropsTableOffice {
  rate: string;
  favorite: ReactNode;
  title: string;
  img: string;
  detail: string;
}
export const Card: FC<PropsTableOffice> = (props) => {
  const { rate, favorite, title, img, detail } = props;

  return (
    <div className="card min-h-full w-40 rounded-md hover:scale-105">
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
      <img className="max-h-60 rounded-md" src={img} alt="image" />
      <div className="flex  w-full h-14 rounded-b-md pr-2 bg-@Black opacity-80 absolute bottom-0 ">
        <p className="pl-2 text-white text-center hover:text-@Gold">{title}</p>
      </div>
    </div>
  );
};
