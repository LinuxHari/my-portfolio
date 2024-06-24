import { EDUCATION } from "../data";

const Education = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-y-12 py-32">
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl w-4/5 lg:w-3/5">My Education</h1>
        <div className="grid grid-rows-3 sm:grid-rows-2 grid-cols-7 gap-y-6 w-4/5 lg:w-3/5">
          {EDUCATION.map(({ startDate, endDate, name, details, className }) => (
            <div className={`flex gap-6 shadow-purple rounded-xl ${className}`} key={name}>
              <div className="p-4 text-white border border-[#804ab6] rounded-xl space-y-1">
                <div className="text-[#804ab6]">
                  <time dateTime={startDate.toString()}>{startDate}</time> -{" "}
                  <time dateTime={endDate.toString()}>{endDate}</time>
                </div>
                <h3 className="font-sans text-xl font-semibold">{name}</h3>
                <p className="text-sm">{details}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-6 col-span-full sm:col-start-3 sm:col-span-3 rounded-xl shadow-purple">
            <div className="text-white border border-[#804ab6] rounded-xl w-full p-4 space-y-1">
              <p className="font-sans text-[#804ab6]">Aspiring</p>
              <h3 className="font-sans text-xl font-semibold">
                Aspiring Master&apos;s Degree in Computer Science
              </h3>
              <p className="text-sm">
                Aspiring to pursue a master&apos;s degree in Computer Science in the
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
