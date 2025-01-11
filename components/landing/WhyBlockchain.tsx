"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Onchain solutions enhance accountability and reduce fraud.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Decentralized tools are accessible to anyone with an internet connection.",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Blockchain drives groundbreaking applications across industries.",
    gradient: "from-teal-500 to-purple-500",
  },
];

export default function WhyBlockchain() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Go Onchain?</h2>
          <p className="text-xl text-gray-300">The future is decentralized—be a part of it.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="group relative">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}