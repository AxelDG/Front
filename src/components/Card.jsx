import React from "react";

function Card({ imageUrl, title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" className="flex justify-center items-center">
        <img
          className="rounded-t-lg"
          src={imageUrl}
          alt={title}
          height="80"
          width="80"
        />
      </a>
      <div className="p-1">
        <h5 className="text-x font-bold tracking-tight flex justify-center text-center">
          {title}
        </h5>
        <p className="mb-1 font-normal">{description}</p>
      </div>
    </div>
  );
}

export default Card;
