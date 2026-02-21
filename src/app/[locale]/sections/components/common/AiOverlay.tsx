"use client";

import React from "react";
import { useEasterEgg } from "./EasterEggProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AiOverlay() {
    const { isAiModeEnabled, toggleAiMode } = useEasterEgg();

    return (
        <AnimatePresence>
            {isAiModeEnabled && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-auto bg-black/80 font-mono text-green-500 overflow-hidden backdrop-blur-xl"
                >
                    {/* Subtle Grid / Matrix Tint */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: "radial-gradient(circle at center, transparent 0%, rgba(0,255,0,0.15) 100%)",
                            backgroundSize: "cover"
                        }}
                    />

                    {/* Close Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-6 right-6 text-green-500 hover:text-green-400 hover:bg-green-500/10 z-50"
                        onClick={toggleAiMode}
                        aria-label="Exit AI Mode"
                    >
                        <X className="w-8 h-8" />
                    </Button>

                    {/* Terminal Box */}
                    <motion.div
                        initial={{ scale: 0.95, y: 30, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                        className="w-11/12 max-w-4xl bg-black border border-green-500/40 p-6 rounded-sm shadow-[0_0_30px_rgba(0,255,0,0.1)] relative"
                    >
                        <div className="flex items-center gap-2 mb-4 border-b border-green-500/30 pb-4">
                            <Terminal className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-widest uppercase">
                                A.I. PROTOCOLS INITIALIZED
                            </span>
                        </div>

                        <TerminalSequence />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function TerminalSequence() {
    const lines = [
        "> CONNECTING TO MAINFRAME...",
        "> ACCESS GRANTED.",
        "> LOADING VIRTUAL ENVIRONMENT...",
        "> BYPASSING SECURITY PROTOCOLS...",
        "> ESTABLISHING NEURAL LINK...",
        "> WELCOME TO THE UNDERCURRENT. AWAITING INPUT..."
    ];

    return (
        <div className="space-y-4 h-[50vh] overflow-y-auto text-sm md:text-base">
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (i * 0.4) }}
                >
                    {line}
                </motion.div>
            ))}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.8 + (lines.length * 0.4) }}
                className="text-xl"
            >
                _
            </motion.div>
        </div>
    );
}
