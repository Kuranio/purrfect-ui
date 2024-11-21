import React, { useEffect } from "react";
import * as ReactDOM from 'react-dom';

const Cursor: React.FC = () => {
    useEffect(() => {
        const cursor = document.querySelector(".mouse-cursor") as HTMLElement;
        const ring = document.querySelector(".mouse-cursor-ring") as HTMLElement;

        const updateCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            if (cursor) {
                cursor.style.transform = `translate(${x}px, ${y}px)`;
            }
            if (ring) {
                ring.style.transform = `translate(${x}px, ${y}px)`;
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

export default Cursor;
