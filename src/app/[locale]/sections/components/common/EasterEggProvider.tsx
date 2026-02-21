"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface EasterEggContextType {
    isAiModeEnabled: boolean;
    toggleAiMode: () => void;
}

const EasterEggContext = createContext<EasterEggContextType>({
    isAiModeEnabled: false,
    toggleAiMode: () => { },
});

export const useEasterEgg = () => useContext(EasterEggContext);

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
    const [isAiModeEnabled, setIsAiModeEnabled] = useState(false);

    // The trigger sequence is typing "a" then "i" sequentially.
    const secretSequence = ["a", "i"];

    const toggleAiMode = () => {
        setIsAiModeEnabled((prev) => !prev);
    };

    useEffect(() => {
        let keyIndex = 0;

        const handleKeyDown = (e: KeyboardEvent) => {
            // ignore typing if user is in an input or textarea
            if (
                document.activeElement?.tagName === "INPUT" ||
                document.activeElement?.tagName === "TEXTAREA"
            ) {
                return;
            }

            if (e.key.toLowerCase() === secretSequence[keyIndex]) {
                keyIndex++;
                if (keyIndex === secretSequence.length) {
                    toggleAiMode();
                    keyIndex = 0;
                }
            } else {
                keyIndex = 0;
                // Check if the current key is the start of the sequence again
                if (e.key.toLowerCase() === secretSequence[0]) {
                    keyIndex = 1;
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <EasterEggContext.Provider value={{ isAiModeEnabled, toggleAiMode }}>
            {children}
        </EasterEggContext.Provider>
    );
}
