/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Typography, Collapse, Navbar, Button } from "@material-tailwind/react";
import PUBLIC_ROUTES from "../utils/PublicRoutes";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const LINKS = [
  {
    title: "Home",
    href: PUBLIC_ROUTES.HOME,
  },
  {
    title: "What we do",
    href: PUBLIC_ROUTES.ABOUT_US,
  },
  {
    title: "Outreach Events",
    href: PUBLIC_ROUTES.EVENTS,
  },
  {
    title: "Contact us",
    href: PUBLIC_ROUTES.CONTACT_US,
  },
];

const NavList = () => {
  return (
    <ul className="m-0 flex flex-col gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center ">
      {LINKS.map(({ title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            className="p-1  px-4 text-md font-Raleway text-black hover:bg-green-50 rounded-md cursor-pointer"
            {...({} as any)}
          >
            {title}
          </Typography>
        </li>
      ))}
      <Button
        as="a"
        size="sm"
        className="flex md:hidden font-Raleway bg-primary text-white text-center hover:bg-hover lg:ml-auto lg:inline-block rounded capitalize"
        {...({} as any)}
      >
        Donate
      </Button>
    </ul>
  );
};

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="mx-auto w-screen rounded-none z-10 bg-white shadow-md" {...({} as any)}>
      <div className="flex w-full items-center">
        <Typography
          as="a"
          href="/"
          type="small"
          className="mx-2 block py-1 font-semibold"
          {...({} as any)}
        >
          <img src="./images/Logo.jpg" alt="logo" className="w-44 h-20" />
        </Typography>
        <div className="hidden lg:ml-auto lg:mr-2 lg:block">
          <NavList />
        </div>
        <div
          size="sm"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
          {...({} as any)}
        >
          {openNav ? (
            <MdOutlineClose size={36} className="  text-gray-900" />
          ) : (
            <CgMenu size={36} className="  text-gray-900" />
          )}
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
