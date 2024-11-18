import React, { useMemo, useState, useEffect } from "react";

interface Transform {
    x: number;
    y: number;
    k: number;
}

interface BackgroundProps {
    color?: string;
    stroke?: string | number;
    gap?: number;
    transform?: Transform;
    isMasked?: boolean;
}

const Background: React.FC<BackgroundProps> = ({
    color = "#dddddd",
    stroke = 1,
    gap = 100,
    transform = { x: 0, y: 0, k: 1 },
    isMasked = false,
}) => {
    const { x, y, k } = transform;
    const scaledGap = gap * k;

    const [gridDimensions, setGridDimensions] = useState<{ numCols: number; numRows: number }>({ numCols: 0, numRows: 0 });
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -9999, y: -9999 });

    useEffect(() => {
        const updateGridDimensions = () => {
            const numCols = Math.ceil(window.innerWidth / scaledGap);
            const numRows = Math.ceil(window.innerHeight / scaledGap);
            setGridDimensions({ numCols, numRows });
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        if (isMasked) {
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
        const squarePaths: JSX.Element[] = [];
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
                        stroke={color}
                        strokeWidth={Number(stroke)}
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
            <g mask={isMasked ? "url(#cursor-mask)" : undefined}>
                {squares}
            </g>
        </svg>
    );
};

export default Background;
