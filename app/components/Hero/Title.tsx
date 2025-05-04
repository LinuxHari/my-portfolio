import { FC } from "react";
import getExperience from "../../../utils/getExperience";

const Title: FC = () => {
  const experience = getExperience();

  return (
    <div className="grid !px-7">
      <h1 className="col-start-1 col-end-13 text-2xl font-semibold text-dark transition-colors duration-300 dark:text-light lg:col-end-7 lg:text-[3rem] lg:leading-[3.5rem] xl:col-end-5">
        Software Engineer with {experience} of experience. <br /> Seeking the
        limit.
      </h1>
    </div>
  );
};

export default Title;
