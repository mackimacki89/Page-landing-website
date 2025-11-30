import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bike, Video, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center p-6 bg-zinc-900/70 backdrop-blur-md fixed top-0 z-50">
        <h1 className="text-2xl font-bold">Retro Maniac</h1>
        <div className="flex gap-6 text-lg">
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#videos" className="hover:text-gray-300 transition">Vlogs</a>
          <a href="#rides" className="hover:text-gray-300 transition">Rides</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6"
        >
          Moto Vlogging & Retro Rides
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl max-w-3xl text-gray-300 mb-10"
        >
          Join me as I explore classic motorcycles, cinematic rides, and the true spirit of two-wheeled freedom. From retro builds to long road adventures — it’s all here.
        </motion.p>

        <a
          href="https://www.facebook.com/profile.php?id=61572736992464"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="h-14 text-xl px-10 rounded-xl flex items-center gap-3">
            Visit My Facebook Page <ArrowRight size={22} />
          </Button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 w-full flex flex-col items-center px-6">
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-3"><Bike /> About the Journey</h2>
        <p className="max-w-3xl text-center text-gray-300 text-lg">
          Retro Maniac is all about capturing the soul of classic motorcycles. Whether it’s restoring old-school bikes, hitting the twisties, or documenting raw moto-adventures — this page brings you closer to the timeless world of retro riding.
        </p>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-28 w-full px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-12 text-center flex justify-center items-center gap-3">
          <Video /> Moto Vlogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((v) => (
            <Card key={v} className="bg-zinc-800 border-zinc-700 rounded-2xl overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-zinc-700" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Moto Vlog #{v}</h3>
                  <p className="text-gray-400 text-sm">A cinematic ride through retro culture and scenic routes.</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Rides Section */}
      <section id="rides" className="py-28 w-full px-6">
        <h2 className="text-4xl font-bold mb-12 text-center flex justify-center items-center gap-3">
          <MapPin /> Recent Rides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {["Mountain Trails", "Coastal Route", "City Night Ride", "Countryside Loop"].map((ride, idx) => (
            <Card key={idx} className="bg-zinc-900 border-zinc-700 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{ride}</h3>
                <p className="text-gray-400 text-sm">
                  A full adventure vlog featuring scenic views, engine roars, and the joy of the ride.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 w-full px-6 bg-zinc-900 text-center">
        <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Want to collaborate, ask questions, or just check out more content? Follow my Facebook page for updates, rides, and vlogs.
        </p>

        <a
          href="https://www.facebook.com/profile.php?id=61572736992464"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="h-14 text-xl px-10 rounded-xl flex items-center gap-3">
            Visit My Facebook Page <ArrowRight size={22} />
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-gray-500 text-sm text-center">
        © 2025 Retro Maniac — Classic Soul, Modern Ride.
      </footer>
    </div>
  );
}
