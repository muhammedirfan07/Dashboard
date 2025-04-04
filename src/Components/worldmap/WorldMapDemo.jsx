"use client";
import { memo, useMemo } from "react";
import { WorldMap } from "../../ui/Worldmap";

export const WorldMapDemo = memo(({ countries }) => {
  // Memoize the country list rendering
  const countryList = useMemo(() => (
    <div className="flex flex-wrap gap-4">
      {countries.map((country) => (
        <div key={country.code} className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: country.color }}
          />
          <span className="text-xs text-white">{country.name}</span>
        </div>
      ))}
    </div>
  ), [countries]);

  return (
    <div className="relative dark:bg-black bg-white w-full rounded-lg overflow-hidden">
      <WorldMap
        className="w-full h-full"
        style={{
          backgroundColor: "black",
          borderRadius: "0.5rem",
          position: "relative",
        }}
      />
      <div className="hidden md:block absolute bottom-4 left-4 bg-primary-400 bg-opacity-70 shadow-xl backdrop-blur-sm py-2 px-4 rounded-2xl">
        {countryList}
      </div>
    </div>
  );
});