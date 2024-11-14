import React, { useMemo, useState, useEffect } from "react";

const Background = ({ color, stroke = "", gap = 100, transform = "" }) => {
    const { x, y, k } = transform || { x: 0, y: 0, k: 1 };
    const scaledGap = gap * k;

    const [gridDimensions, setGridDimensions] = useState({ numCols: 0, numRows: 0 });

    useEffect(() => {
        const updateGridDimensions = () => {
            const numCols = Math.ceil(window.innerWidth / scaledGap);
            const numRows = Math.ceil(window.innerHeight / scaledGap);
            setGridDimensions({ numCols, numRows });
        };

        updateGridDimensions();
        window.addEventListener("resize", updateGridDimensions);

        return () => {
            window.removeEventListener("resize", updateGridDimensions);
        };
    }, [scaledGap]);

    const squares = useMemo(() => {
        const { numCols, numRows } = gridDimensions;
        const squarePaths = [];
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const xPos = col * scaledGap + (x % scaledGap);
                const yPos = row * scaledGap + (y % scaledGap);
                const pathD = `M ${xPos} ${yPos} h ${scaledGap} v ${scaledGap} h -${scaledGap} Z`;
                squarePaths.push(
                    <path
                        key={`${row}-${col}`}
                        d={pathD}
                        fill="none"
                        stroke={color || "#dddddd"}
                        strokeWidth={stroke || 1}
                    />
                );
            }
        }
        return squarePaths;
    }, [color, stroke, scaledGap, x, y, gridDimensions]);

    return (
        <svg
            className="w-full h-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"
        >
            {squares}
        </svg>
    );
};

export default Background;