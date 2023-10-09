import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Card({ imageUrl, title, description }) {
  return (
    <div className="max-w-max bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" className="flex justify-center items-center">
        <img
          component="img"
          height="100"
          width="100"
          src={imageUrl}
          alt={title}
          style={{
            margin: "auto",
          }}
        />
      </a>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {description}
        </Typography>
      </CardContent>
    </div>
  );
}