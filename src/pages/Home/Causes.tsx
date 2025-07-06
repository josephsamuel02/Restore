/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Typography } from "@material-tailwind/react";

const Causes = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col items-center">
      <h3 className=" text-center text-3xl font-bold my-7   text-black">
        Causes we are serving
      </h3>
      <div className="w-full h-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((_, index) => (
          <Card key={index} className="p-4 flex flex-col items-center" {...({} as any)}>
            <img
              className="w-full h-40 object-cover rounded-lg mb-4"
              src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop"
              alt="image"
            />
            <Typography variant="h6" className="mb-2 text-black" {...({} as any)}>
              UI/UX Review Check
            </Typography>
            <Typography className="my-1 text-foreground mb-4" {...({} as any)}>
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near
              to "Naviglio" where you can enjoy the main night life in Barcelona.
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Causes;
