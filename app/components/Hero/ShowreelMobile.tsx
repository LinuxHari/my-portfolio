const ShowreelMobile = () => {
  return (
    <div className="relative h-full w-full flex-grow-0 p-small">
      <video
        className="h-full w-full rounded-md object-cover object-left"
        poster="https://res.cloudinary.com/dkpg8fpuv/video/upload/v1746954398/v4qsausdfdsajffhdsalfkdadfs.mp4"
        muted
        playsInline
        autoPlay
        loop
      >
        <source
          src="https://res.cloudinary.com/dkpg8fpuv/video/upload/v1746954398/v4qsausdfdsajffhdsalfkdadfs.mp4"
          type="video/mp4"
        />
      </video>
      <a
        href="https://github.com/LinuxHari/"
        target="_blank"
        rel="noreferrer noopener"
        className="absolute bottom-[30px] right-[30px] rounded-sm bg-dark px-4 py-2 text-xs font-semibold text-white transition hover:bg-light hover:text-dark"
      >
        View Projects
      </a>
    </div>
  );
};

export default ShowreelMobile;
