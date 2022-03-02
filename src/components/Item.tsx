import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Item.css";

const Item: React.FC<{
  title: string;
  imageUrl: string;
  isLoading: boolean;
}> = (props) => {
  const { isLoading, title, imageUrl } = props;


  return (
    <div className="min-w-max bg-white mx-3 my-4 text-center transition ease-in-out duration-500 hover:scale-105 item">
      {isLoading ? (
        <Skeleton height={200} width={200} />
      ) : (
        <img className="w-full h-52 my-2" src={imageUrl} alt="alt-img" />
      )}
      <p className="w-48 m-auto my-2 line-clamp-2">
        {isLoading ? <Skeleton count={2} /> : title}
      </p>
      {isLoading ? (
        <Skeleton width={100} />
      ) : (
        <button className="bg-yellow-500 px-3 py-1 mb-2">Add to Cart</button>
      )}
    </div>
  );
};

export default Item;
