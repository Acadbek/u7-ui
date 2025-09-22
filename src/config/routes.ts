import { v4 as uuidv4 } from "uuid";

export const docsLink = "/docs";
export const componentLink = "components";

interface RoutesProps {
  id: string;
  title: string;
  link: string;
}

export const routes: RoutesProps[] = [
  {
    id: uuidv4(),
    title: "Button",
    link: `${docsLink}/${componentLink}/button`,
  },
  {
    id: uuidv4(),
    title: "Toast",
    link: `${docsLink}/${componentLink}/toast`,
  },
  {
    id: uuidv4(),
    title: "Dialog",
    link: `${docsLink}/${componentLink}/dialog`,
  },
  {
    id: uuidv4(),
    title: "Tabs",
    link: `${docsLink}/${componentLink}/tabs`,
  },
  {
    id: uuidv4(),
    title: "Dropdown",
    link: `${docsLink}/${componentLink}/dropdown`,
  },
  {
    id: uuidv4(),
    title: "Carousel",
    link: `${docsLink}/${componentLink}/carousel`,
  },
];
