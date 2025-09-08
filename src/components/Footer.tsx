/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, IconButton } from "@material-tailwind/react";
import { Facebook, Instagram, X } from "iconoir-react";
import PUBLIC_ROUTES from "../utils/PublicRoutes";

const LINKS = [
  {
    title: "Organization",
    items: [
      {
        title: "About us",
        href: PUBLIC_ROUTES.ABOUT_US,
      },
      {
        title: "Outreaches",
        href: PUBLIC_ROUTES.EVENTS,
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        title: "contacts",
        href: "/contact",
      },
      {
        title: "Schedule a call",
        href: "#",
      },
    ],
  },
];

const YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8 mt-24">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <img src="./images/Logo.jpg" alt="" className="hidden md:flex w-72 h-36 m-4" />
          <div className="grid grid-cols-3 justify-between gap-x-6 gap-y-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography className="mb-2 font-semibold opacity-50" {...({} as any)}>
                  {title}
                </Typography>
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <Typography
                      as="a"
                      href={href}
                      className="py-1 hover:text-primary"
                      {...({} as any)}
                    >
                      {title}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 border-t border-surface py-4 md:flex-row md:justify-between">
          <Typography type="small" className="text-center" {...({} as any)}>
            &copy; {YEAR} <a href="https://material-tailwind.com/">Restore Centre</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-1 sm:justify-center">
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
              {...({} as any)}
            >
              <Facebook className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
              {...({} as any)}
            >
              <Instagram className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
              {...({} as any)}
            >
              <X className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
