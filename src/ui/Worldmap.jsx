"use client";
import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";
import { debounce } from 'lodash-es';

const pointsData = [
  { name: "India", lat: 20.5937, lng: 78.9629, color: "#800080" },
  { name: "UAE", lat: 23.4241, lng: 53.8478, color: "#008000" },
  { name: "Canada", lat: 56.1304, lng: -106.3468, color: "#FFD700" },
  { name: "USA", lat: 37.0902, lng: -95.7129, color: "#FFA500" }
];

export function WorldMap() {
  const svgRef = useRef(null);
  const { theme } = useTheme();
  
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== 'undefined' && window.innerWidth < 768 ? 400 : 800,
    height: 300
  }));

  const points = useMemo(() => pointsData, []);

  const updateDimensions = useCallback(() => {
    if (window.innerWidth < 768) {
      setDimensions({ width: 400, height: 300 });
    } else {
      setDimensions({ width: 800, height: 300 });
    }
  }, []);

  useEffect(() => {
    const handleResize = debounce(updateDimensions, 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateDimensions]);

  const svgMap = useMemo(() => {
    const map = new DottedMap({
      height: dimensions.height / 3,
      width: dimensions.width / 3,
      grid: "diagonal"
    });
    return map.getSVG({
      radius: 0.22,
      color: theme === "dark" ? "#161617" : "#202728",
      shape: "circle",
      backgroundColor: "black",
    });
  }, [dimensions, theme]);

  const projectPoint = useCallback((lat, lng) => {
    const x = (lng + 180) * (dimensions.width / 360);
    const y = (90 - lat) * (dimensions.height / 180);
    return { x, y };
  }, [dimensions]);

  return (
    <div className="w-full h-[300px] bg-black rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        draggable={false}
        loading="lazy"
      />
      <svg
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        {points.map((point, i) => {
          const { x, y } = projectPoint(point.lat, point.lng);
          const radius = dimensions.width / 150;
          const pulseRadius = dimensions.width / 80; // Slightly larger than main dot
          
          return (
            <g key={`point-${i}`}>
              {/* Main dot */}
              <circle cx={x} cy={y} r={radius} fill={point.color} />
              
              {/* Pulsing halo effect - opacity only */}
              <circle
                cx={x}
                cy={y}
                r={pulseRadius}
                fill={point.color}
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.3;0"
                  dur="3s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;1"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}