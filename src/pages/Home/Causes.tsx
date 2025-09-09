/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const causes = [
  {
    title: "Community",
    text: "Building relationships and partnerships to support and uplift those in need.",
    image: "images/5.jpg",
  },

  {
    title: "Feeding & Healthcare",
    text: "Providing emergency food assistance and medical care and treatment through our network of volunteer nurses and doctors to individuals and families in crisis, ensuring they have access to nutritious food and healthcare.",
    image: "images/12.jpg",
  },

  {
    title: "Discipleship Growth Program (DGP)",
    text: "Nurturing the spiritual growth and development of crisis-affected individuals through Bible-based discipleship, prayer, and mentorship.",
    image: "images/42.jpg",
  },
  {
    title: "Skill Acquisition Program",
    text: "Equipping individuals with practical skills and training to enhance their employability, entrepreneurship, and self-sufficiency, empowering them to rebuild their lives and contribute to their communities.",
    image: "images/30.jpg",
  },
];

const Causes: React.FC = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col items-center">
      <h3 className=" text-center text-3xl font-bold my-7 text-black">
        Causes we are serving
      </h3>
      <div className="w-full h-auto px-4 sm:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {causes.map((cause, index) => (
          <Card
            key={index}
            className="group p-4 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
            {...({} as any)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${cause.title}`}
          >
            <div className="w-full h-40 rounded-lg mb-4 overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                src={cause.image}
                alt={cause.title}
              />
            </div>

            <Typography variant="h6" className="mb-2 text-black" {...({} as any)}>
              {cause.title}
            </Typography>

            <Typography
              title={cause.text}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              className="my-1 text-[14px] text-foreground mb-4"
              {...({} as any)}
            >
              {cause.text}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Causes;
