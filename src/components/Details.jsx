import sourceIcon from "../assets/icon-source.svg";

const Details = ({ details, image }) => {
  console.log(details, image);
  return (
    <section className="flex flex-col justify-center mt-10 h-screen mx-32">
      <div className="flex ml-10">
        <div className="flex-grow-0 flex-shrink-0 w-2/3 justify-center items-center flex">
          <img
            className="w-[300px] h-[300px] object-cover"
            src={image}
            alt="planet"
          />
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="font-antonio text-6xl font-medium">{details.name}</h1>

          <div className="mt-5 text-[var(--secondary-color)] font-league-spartan">
            <p className="text-[18px]">{details.overview.content}</p>
            <small className="mt-5 flex text-[14px]">
              Source:
              <a
                className="underline mx-1"
                href={details.overview.source}
                target="_blank"
                rel="noreferrer"
              >
                Wikipedia
              </a>
              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <path
                  fill="#FFF"
                  d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                  opacity=".5"
                />
              </svg>
            </small>
            <div className="mt-10">
              <button
                className="bg-transparent w-full  py-5 mt-5 uppercase text-left border 
              border-[var(--secondary-color)] hover:bg-slate-500 hover:text-[#fff]"
              >
                <p className="pl-5">
                  <span className="text bg-transparent">01</span> overview
                </p>
              </button>
              <button
                className="bg-transparent w-full  py-5 mt-5 uppercase text-left border 
              border-[var(--secondary-color)] hover:bg-slate-500 hover:text-[#fff]"
              >
                <p className="pl-5">
                  <span className="text bg-transparent">02</span> internal
                  structure
                </p>
              </button>
              <button
                className="bg-transparent w-full  py-5 mt-5 uppercase text-left border 
              border-[var(--secondary-color)] hover:bg-slate-500 hover:text-[#fff]"
              >
                <p className="pl-5">
                  <span className="text bg-transparent">03</span> surface
                  geology
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap mt-20 mb-48">
        <div className="border border-[var(--secondary-color)] w-[255px] p-5 flex flex-col items-start uppercase">
          <p className="text-[12px] text-[var(--secondary-color)] font-league-spartan">
            ROTATION TIME
          </p>
          <h1 className="font-medium text-[28px] mt-1 font-antonio">
            {details.rotation}
          </h1>
        </div>

        <div className="border border-[var(--secondary-color)] w-[255px] p-5 flex flex-col items-start uppercase">
          <p className="text-[12px] text-[var(--secondary-color)] font-league-spartan">
            REVOLUTION TIME
          </p>
          <h1 className="font-medium text-[28px] mt-1 font-antonio">
            {details.revolution}
          </h1>
        </div>

        <div className="border border-[var(--secondary-color)] w-[255px] p-5 flex flex-col items-start uppercase">
          <p className="text-[12px] text-[var(--secondary-color)] font-league-spartan">
            RADIUS
          </p>
          <h1 className="font-medium text-[28px] mt-1 font-antonio">
            {details.radius}
          </h1>
        </div>

        <div className="border border-[var(--secondary-color)] w-[255px] p-5 flex flex-col items-start uppercase">
          <p className="text-[12px] text-[var(--secondary-color)] font-league-spartan">
            AVERAGE TEMP
          </p>
          <h1 className="font-medium text-[28px] mt-1 font-antonio">
            {details.temperature}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Details;
