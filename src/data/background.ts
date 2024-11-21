export const importCode = `import { Background } from "@purrfect-ui/components";
import { Cursor } from "@purrfect-ui/components";`;

export const basicUsageCode = `import React, { useMemo, useState, useEffect } from "react";
import Cursor from "./cursor";

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
    showCursor?: boolean;
}

const Background: React.FC<BackgroundProps> = ({
    color = "#212121",
    stroke = 1,
    gap = 100,
    transform = { x: 0, y: 0, k: 1 },
    isMasked = false,
    showCursor = false,
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
                const pathD = \`M \${xPos} \${yPos} h \${scaledGap} v \${scaledGap} h -\${scaledGap} Z\`;
                squarePaths.push(
                    <path
                        key={\`\${row}-\${col}\`}
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
        <>
            {showCursor && <Cursor />}
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
        </>
    );
};

export default Background;`;

export const cursorCode = 
`import React, { useEffect } from "react";
import * as ReactDOM from 'react-dom';

const cursor: React.FC = () => {
    useEffect(() => {
        const cursor = document.querySelector(".mouse-cursor") as HTMLElement;
        const ring = document.querySelector(".mouse-cursor-ring") as HTMLElement;

        const updateCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            if (cursor) {
                cursor.style.transform = \`translate(\${x}px, \${y}px)\`;
            }
            if (ring) {
                ring.style.transform = \`translate(\${x}px, \${y}px)\`;
            }
        };

        window.addEventListener("mousemove", updateCursor);
        return () => {
            window.removeEventListener("mousemove", updateCursor);
        };
    }, []);

    return ReactDOM.createPortal(
        <>
            <div
                className="mouse-cursor fixed hidden md:block pointer-events-none z-[9999] translate-x-[-50%] translate-y-[-50%] top-[-8px] left-[-8px] w-4 h-4 before:content-[''] before:absolute before:inset-0 before:bg-white before:border-2 before:border-transparent before:rounded-full before:shadow-[0_0_25px_rgba(0,0,0,0.5)] before:scale-50"
            ></div>
            <div
                className="mouse-cursor-ring fixed hidden md:block pointer-events-none z-[9999] translate-x-[-50%] translate-y-[-50%] top-[-5vh] left-[-5vh] w-[10vh] h-[10vh] transition-all duration-[800ms] ease-[cubic-bezier(0.05,0.8,0.4,1)] before:content-[''] before:absolute before:inset-0 before:border before:border-[#FFFFFF80] before:rounded-full before:scale-100 before:transition-transform before:duration-300"
            ></div>
        </>,
        document.body
    );
};

export default cursor;`;

export const UsageCode = `
import React from "react";
import { Background } from "@purrfect-ui/components";
import { Cursor } from "@purrfect-ui/components";

const colors = ["#83ffff", "#fd80fb"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

export function BackgroundDemo() {
    return (
        <>
            <div
                className="fixed inset-0 flex-1 opacity-5 pointer-events-none mix-blend-multiply transition-opacity duration-300 ease-in-out group-hover:opacity-30"
            >
                <Background color="white" />
            </div>
            <div
                className="fixed inset-0 flex-1 pointer-events-none mix-blend-multiply hidden md:flex"
            >
                <Background
                    color={randomColor}
                    isMasked={true}
                    showCursor={true}
                />
            </div>
            <Cursor />
        </>
    );
}

export default BackgroundDemo;`;