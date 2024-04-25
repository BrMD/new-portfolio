import { lazy } from "react";

const Experience = lazy(() => import("pages/Experience"));
const Home = lazy(() => import("pages/Home"));
const Projects = lazy(() => import("pages/Projects"));
const Stack = lazy(() => import("pages/Stack"));

const HOCpages = ({ option }: TypeHOCpages) => {
  switch (option) {
    case "Home":
      return <Home />;
    case "Experience":
      return <Experience />;
    case "Projects":
      return <Projects />;
    case "Stack":
      return <Stack />;
    default:
      return <div>Erro</div>;
  }
};

export default HOCpages;
