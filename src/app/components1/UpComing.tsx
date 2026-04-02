import { SeeMoreButton } from "@/src/components/SeeMoreButton";
import Link from "next/link";
import { Movie, getMovieFromDB } from "./SeeMoreClick";

export const UpComing = async () => {
  const { movieResults }: { movieResults: Movie[] } =
    await getMovieFromDB("upcoming");

  return (
    <div className="w-full px-4 lg:px-20 pb-10">
      <div className="flex justify-between pb-8">
        <p className="font-bold text-2xl">Upcoming</p>
        <Link href="/category/upcoming">
          <SeeMoreButton />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:text-wrap sm:justify-center gap-4 sm:gap-8">
        {movieResults.slice(0, 10).map((info) => (
          <Link
            key={info.id}
            href={`/movie/${info.id}`}
            className="bg-[#F4F4F5] rounded-lg hover:scale-105 transition h-90 md:h-110"
          >
            <img
              className="md:h-85 h-65 w-[229.73px] rounded-t-lg object-cover"
              src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
              alt={info.title}
            />
            <div className="flex items-center gap-1 pt-2 px-2 text-[14px] text-[#09090B]">
              <img className="h-4 w-4" src="/star.png" alt="" />
              {info.vote_average.toFixed(1)}
              <p className="text-[#71717A]">/10</p>
            </div>

            <div className=" text-wrap">
              <p className="w-full h-16 pt-1 pl-2">{info.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
