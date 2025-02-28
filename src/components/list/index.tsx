import React from "react";
import { useIsMobile } from "../../hooks";
import { Poster, PosterProps } from "../poster";
import { Loader } from "../loader";

interface ListProps {
  title?: string;
  films: PosterProps[];
  isLoading?: boolean;
}

export function List({ title, films }: ListProps) {
  return (
    <div className="mt-[3.75rem] mb-[2.3rem] text-left">
      {title && (
        <div className="border-b border-primary-6 mb-4">
          <h6 className="mb-0">{title}</h6>
        </div>
      )}
      {films.length == 0 ? (
        <div className="py-2"></div>
      ) : (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-1.5 md:gap-2.5">
          {films.map((item, index) => (
            <Poster key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ListPreview({ title, films, isLoading }: ListProps) {
  const isMobile = useIsMobile();

  return (
    <div className="mt-[3.75rem] mb-[2.3rem] text-left">
      {title && (
        <div className="border-b border-primary-6 mb-4">
          <h6 className="mb-0">{title}</h6>
        </div>
      )}
      {films.length == 0 ? (
        <div className="py-2"></div>
      ) : !isLoading ? (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-1.5 md:gap-2.5">
          {films.slice(0, isMobile ? 4 : 6).map((item, index) => (
            <Poster key={index} {...item} />
          ))}
        </div>
      ) : (
        <div className="my-8 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
