'use client'; // 💥 This line tells Next.js to treat this as a client component

// Cyberpunk Portfolio - Home Page (Next.js + Tailwind + Framer Motion)
// Author: goonhunter

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#00ffff] font-mono px-6 py-10 relative overflow-hidden">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#ff00ff33] to-[#0d0d0d] animate-pulse z-0"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#FF00FF] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          goonhunter
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-[#FFDE59]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Walking the tightrope between signal and silence, one protocol at a time.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1a1a1a] hover:border-[#FF00FF] transition-all">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                <p className="mb-4">Explore tools, simulations, and cyber experiments.</p>
                <Link href="/projects">
                  <Button variant="outline" className="border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF] hover:text-black relative group hover:scale-105 transition">
                    Enter
                    <ArrowRight className="ml-2 w-4 h-4" />
                    <span className="absolute inset-0 border border-fuchsia-500 opacity-30 group-hover:opacity-100 animate-ping rounded"></span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Blog Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1a1a1a] hover:border-[#00ffff] transition-all">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Blog</h2>
                <p className="mb-4">Logs, thoughts, writeups. Download my mind.</p>
                <Link href="/blog">
                  <Button variant="outline" className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black relative group hover:scale-105 transition">
                    Enter
                    <ArrowRight className="ml-2 w-4 h-4" />
                    <span className="absolute inset-0 border border-cyan-500 opacity-30 group-hover:opacity-100 animate-ping rounded"></span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1a1a1a] hover:border-[#FFDE59] transition-all">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">About</h2>
                <p className="mb-4">Who is goonhunter? Unpack the firmware.</p>
                <Link href="/about">
                  <Button variant="outline" className="border-[#FFDE59] text-[#FFDE59] hover:bg-[#FFDE59] hover:text-black relative group hover:scale-105 transition">
                    Enter
                    <ArrowRight className="ml-2 w-4 h-4" />
                    <span className="absolute inset-0 border border-yellow-400 opacity-30 group-hover:opacity-100 animate-ping rounded"></span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1a1a1a] hover:border-[#ff4444] transition-all">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                <p className="mb-4">Find me in the grid. GitHub, Discord, and more.</p>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#ff4444] text-[#ff4444] hover:bg-[#ff4444] hover:text-black relative group hover:scale-105 transition">
                    Enter
                    <ArrowRight className="ml-2 w-4 h-4" />
                    <span className="absolute inset-0 border border-red-500 opacity-30 group-hover:opacity-100 animate-ping rounded"></span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
