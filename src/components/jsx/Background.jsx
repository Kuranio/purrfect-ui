import React, { useMemo, useState, useEffect } from "react";

const Background = ({ color, stroke = "", gap = 100, transform = "", isMasked = false }) => {
    const { x, y, k } = transform || { x: 0, y: 0, k: 1 };
    const scaledGap = gap * k;

    const [gridDimensions, setGridDimensions] = useState({ numCols: 0, numRows: 0 });
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

    useEffect(() => {
        const updateGridDimensions = () => {
            const numCols = Math.ceil(window.innerWidth / scaledGap);
            const numRows = Math.ceil(window.innerHeight / scaledGap);
            setGridDimensions({ numCols, numRows });
        };

        if (isMasked) {
            const handleMouseMove = (e) => {
                setMousePos({ x: e.clientX, y: e.clientY });
            };

            window.addEventListener("mousemove", handleMouseMove);
        }

        updateGridDimensions();
        window.addEventListener("resize", updateGridDimensions);

        return () => {
            window.removeEventListener("resize", updateGridDimensions);
            if (isMasked) window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [scaledGap, isMasked]);

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
        <svg className="w-full h-full">
            {isMasked && (
                <defs>
                    <radialGradient id="cursor-gradient" cx="50%" cy="50%" r="25%">
                        <stop offset="0%" stopColor="white" stopOpacity=".5" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="cursor-mask">
                        <rect width="100%" height="100%" fill="black" />
                        <circle cx={mousePos.x} cy={mousePos.y} r="300" fill="url(#cursor-gradient)" />
                    </mask>
                </defs>
            )}
            <g mask={isMasked ? "url(#cursor-mask)" : ""}>
                {squares}
            </g>
        </svg>
    );
};

export default Background;
