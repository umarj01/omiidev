


import { Github, Instagram, Facebook, Mail, Phone, Book } from 'lucide-react';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
    'Full-Stack Developer',
    'Cyber Learner',
    'Pre-Analyst',
    'Mindset Builder'
];

const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen bg-gradient-to-br overflow-hidden sm:mt-10">
            {/* Ambient background effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute  left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute  right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-12 py-12 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

                    {/* LEFT SIDE - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-2 order-1"
                    >
                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-shadow-gray-400 text-lg md:text-xl ml-1 tracking-wide"
                        >
                            Hey, I am <span className="text-blue-500 font-semibold">Umar Javaid</span>
                        </motion.p>

                        {/* Main Heading with Gradient */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                        >
                            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 font-mono bg-clip-text text-transparent">

                                Building  & <br /> Breaking Limits.
                            </span>
                            <br />
                        </motion.h1>

                        <div className="text-slate-500 font-semibold font-mono ml-1 max-w-xl leading-relaxed">
                            I create, test, and challenge systems to make them smarter, safer, and stronger.
                            I blend curiosity with discipline — building tools, hardening defenses, and
                            teaching others the mindset to turn problems into progress.
                        </div>


                        {/* Animated Roles */}
                        <div className="h-16 flex items-center">
                            <motion.div
                                key={currentRoleIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl md:text-2xl font-medium text-gray-400"
                            >
                                <span className="text-blue-400">{'>'}</span> {roles[currentRoleIndex]}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="text-blue-400 ml-1"
                                >
                                    _
                                </motion.span>
                            </motion.div>
                        </div>



                        <div className=''>
                            <div className='flex gap-2 mb-4 text-slate-400 flex-wrap'>
                                <button className='bg-slate-900 light:bg-white p-2 px-4 h-10 rounded-full whitespace-nowrap'>Web Development</button>
                                <button className='bg-slate-900 p-2 px-4 h-10 rounded-full whitespace-nowrap' >Cyber Security</button>
                                <button className='bg-slate-900 p-2 px-4 h-10 rounded-full whitespace-nowrap' >Education</button>
                                <button className='bg-slate-900 p-2 px-4 h-10 rounded-full whitespace-nowrap' >Mentor</button>
                            </div>
                        </div>
                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap gap-4 "
                        >

                            <div className='flex flex-row gap-4 pt-4 flex-wrap'>
                                <div className='bg-slate-800 p-2 rounded-full'><Instagram /></div>
                                <div className='bg-slate-800 p-2 rounded-full'><Github /></div>
                                <div className='bg-slate-800 p-2 rounded-full'><Facebook /></div>
                                <div className='bg-slate-800 p-2 rounded-full'><Mail /></div>
                                <div className='bg-slate-800 p-2 rounded-full'><Phone /></div>

                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - Creative Animated Design - Now Responsive */}
                    <div className="relative h-[400px] md:h-[600px] w-full order-2">

                        {/* Developer Elements - Code Blocks */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-8 left-4 md:top-18 md:left-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 md:p-4 shadow-lg"
                        >
                            <pre className="text-blue-500 text-xs md:text-sm font-mono">
                                <code>{`const dev = {\n  passion: true\n}`}</code>
                            </pre>
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 15, 0],
                                x: [0, 10, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-40 right-4 md:top-60 md:right-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2 md:p-3 shadow-lg"
                        >
                            <div className="flex gap-1 mb-2">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <pre className="text-green-600 text-xs font-mono">
                                <code>{`function build() {\n  return magic;\n}`}</code>
                            </pre>
                        </motion.div>

                        {/* Cybersecurity Elements */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],

                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-16 right-12 md:top-22 md:right-40 w-20 h-20 md:w-24 md:h-24 border-2 border-blue-400/40 rounded-lg flex items-center justify-center"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 0.8, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-10 h-10 md:w-12 md:h-12 border-4 border-blue-500/60 rounded-md relative"
                            >
                                <div className="absolute inset-0 bg-blue-500/20"></div>
                                {/* Lock Icon */}
                                <svg className="w-full h-full text-blue-400 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </motion.div>
                        </motion.div>

                        {/* Shield Element */}
                        <motion.div
                            animate={{
                                y: [0, -25, 0],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-24 left-8 md:bottom-32 md:left-20"
                        >
                            <svg className="w-12 h-12 md:w-16 md:h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" opacity="0.3" />
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                        </motion.div>

                        {/* Mentor/Teaching Elements */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-16 right-12 md:bottom-20 md:right-24"
                        >
                            {/* Light Bulb */}
                            <div className="relative">

                                <svg className="w-16 h-16 md:w-20 md:h-20 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" opacity="0.7" />
                                </svg>
                                <motion.div
                                    animate={{
                                        scale: [1, 2, 1],
                                        opacity: [0.5, 0, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut"
                                    }}
                                    className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl"
                                ></motion.div>
                            </div>
                        </motion.div>

                        {/* Growth Arrow */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-48 left-16 md:top-64 md:left-32"
                        >
                            <svg className="w-10 h-10 md:w-12 md:h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </motion.div>

                        {/* Floating Geometric Shapes */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 border border-purple-500/30 rounded-full"
                        ></motion.div>

                        <motion.div
                            animate={{
                                rotate: [360, 0]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 border border-blue-500/20 rounded-full"
                        ></motion.div>

                        {/* Network Connection Nodes */}
                        <svg className="absolute inset-0 w-full h-full opacity-30">
                            <motion.line
                                x1="20%"
                                y1="25%"
                                x2="70%"
                                y2="60%"
                                stroke="url(#gradient1)"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.line
                                x1="80%"
                                y1="30%"
                                x2="30%"
                                y2="80%"
                                stroke="url(#gradient2)"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />
                            <motion.line
                                x1="40%"
                                y1="20%"
                                x2="75%"
                                y2="85%"
                                stroke="url(#gradient3)"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.5" />
                                </linearGradient>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#F472B6" stopOpacity="0.5" />
                                </linearGradient>
                                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.5" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Floating Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -30, 0],
                                    x: [0, Math.random() * 20 - 10, 0],
                                    opacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                                style={{
                                    left: `${Math.random() * 80 + 10}%`,
                                    top: `${Math.random() * 80 + 10}%`
                                }}
                            ></motion.div>
                        ))}

                        {/* Brackets representing code */}
                        <motion.div
                            animate={{
                                opacity: [0.4, 1, 0.4]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-32 right-16 md:bottom-44 md:right-40 text-4xl md:text-6xl font-bold text-purple-500/40"
                        >
                            {'{ }'}
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;


// import { Github,Instagram, Facebook, Mail , Phone , Book  } from 'lucide-react';



// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const roles = [
//     'Full-Stack Developer',
//     'Cyber Learner',
//     'Pre-Analyst',
//     'Mindset Builder'
// ];

// const Hero = () => {
//     const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//         }, 2500);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative min-h-screen bg-gradient-to-br overflow-hidden">
//             {/* Ambient background effects */}
//             <div className="absolute inset-0 opacity-30">
//                 <div className="absolute  left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
//                 <div className="absolute  right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
//             </div>

//             <div className="container mx-auto  lg:px-12 py-12 relative z-10">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

//                     {/* LEFT SIDE - Text Content */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="space-y-2"
//                     >
//                         {/* Greeting */}
//                         <motion.p
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                             className="text-shadow-gray-400 text-lg md:text-xl ml-1 tracking-wide"
//                         >
//                             Hey, I am <span className="text-blue-500 font-semibold">Umar Javaid</span>
//                         </motion.p>

//                         {/* Main Heading with Gradient */}
//                         <motion.h1
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.5 }}
//                             className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
//                         >
//                             <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 font-mono bg-clip-text text-transparent">
                             
//                               Building  & <br /> Breaking Limits.
//                             </span>
//                             <br />
//                             {/* <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
//                                 and Learners Into Thinkers.
//                             </span> */}
//                         </motion.h1>

// <div className="text-slate-500 font-semibold font-mono ml-1 max-w-xl leading-relaxed">
//   I create, test, and challenge systems to make them smarter, safer, and stronger. 
//   I blend curiosity with discipline — building tools, hardening defenses, and 
//   teaching others the mindset to turn problems into progress.
// </div>


//                         {/* Animated Roles */}
//                         <div className="h-16 flex items-center">
//                             <motion.div
//                                 key={currentRoleIndex}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 transition={{ duration: 0.5 }}
//                                 className="text-xl md:text-2xl font-medium text-gray-400"
//                             >
//                                 <span className="text-blue-400">{'>'}</span> {roles[currentRoleIndex]}
//                                 <motion.span
//                                     animate={{ opacity: [1, 0] }}
//                                     transition={{ duration: 0.8, repeat: Infinity }}
//                                     className="text-blue-400 ml-1"
//                                 >
//                                     _
//                                 </motion.span>
//                             </motion.div>
//                         </div>



// <div className=''>
//     <div className='flex gap-2 mb-4 text-slate-400'>
//         <button className='bg-slate-900 light:bg-white p-2 w-40 h-10 rounded-full'>Web Development</button>
//         <button className='bg-slate-900 p-2 w-30 h-10 rounded-full' >Cyber Security</button>
//         <button className='bg-slate-900 p-2 w-25 h-10 rounded-full' >Education</button>
//         <button className='bg-slate-900 p-2 w-20 h-10 rounded-full' >Mentor</button>
//     </div>
// </div>
//                         {/* CTA Buttons */}
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.9 }}
//                             className="flex flex-wrap gap-4 "
//                         >

// <div className='flex flex-row gap-4 pt-4 '>
// <div className='bg-slate-800 p-2 rounded-full'><Instagram/></div>
// <div className='bg-slate-800 p-2 rounded-full'><Github/></div>
// <div className='bg-slate-800 p-2 rounded-full'><Facebook/></div>
// <div className='bg-slate-800 p-2 rounded-full'><Mail/></div>
//     <div className='bg-slate-800 p-2 rounded-full'><Phone/></div>
    
// </div>
//                             {/* <button className="px-8 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
//                                 View My Work
//                             </button>
//                             <button className="px-8 py-2 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
//                                 Get In Touch
//                             </button> */}
//                         </motion.div>
//                     </motion.div>

//                     {/* RIGHT SIDE - Creative Animated Design */}
//                     <div className="relative h-[600px] hidden lg:block">

//                         {/* Developer Elements - Code Blocks */}
//                         <motion.div
//                             animate={{
//                                 y: [0, -20, 0],
//                                 rotate: [0, 5, 0]
//                             }}
//                             transition={{
//                                 duration: 4,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                             }}
//                             className="absolute top-18 left-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 shadow-lg"
//                         >
//                             <pre className="text-blue-500 text-sm font-mono">
//                                 <code>{`const dev = {\n  passion: true\n}`}</code>
//                             </pre>
//                         </motion.div>

//                         <motion.div
//                             animate={{
//                                 y: [0, 15, 0],
//                                 x: [0, 10, 0]
//                             }}
//                             transition={{
//                                 duration: 5,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                             }}
//                             className="absolute top-60 right-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 shadow-lg"
//                         >
//                             <div className="flex gap-1 mb-2">
//                                 <div className="w-2 h-2 rounded-full bg-red-400"></div>
//                                 <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
//                                 <div className="w-2 h-2 rounded-full bg-green-400"></div>
//                             </div>
//                             <pre className="text-green-600 text-xs font-mono">
//                                 <code>{`function build() {\n  return magic;\n}`}</code>
//                             </pre>
//                         </motion.div>

//                         {/* Cybersecurity Elements */}
//                         <motion.div
//                             animate={{
//                                 scale: [1, 1.1, 1],
                               
//                             }}
//                             transition={{
//                                 duration: 8,
//                                 repeat: Infinity,
//                                 ease: "linear"
//                             }}
//                             className="absolute top-22 right-40 w-24 h-24 border-2 border-blue-400/40 rounded-lg flex items-center justify-center"
//                         >
//                             <motion.div
//                                 animate={{
//                                     scale: [1, 0.8, 1]
//                                 }}
//                                 transition={{
//                                     duration: 2,
//                                     repeat: Infinity,
//                                     ease: "easeInOut"
//                                 }}
//                                 className="w-12 h-12 border-4 border-blue-500/60 rounded-md relative"
//                             >
//                                 <div className="absolute inset-0 bg-blue-500/20"></div>
//                                 {/* Lock Icon */}
//                                 <svg className="w-full h-full text-blue-400 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                 </svg>
//                             </motion.div>
//                         </motion.div>

//                         {/* Shield Element */}
//                         <motion.div
//                             animate={{
//                                 y: [0, -25, 0],
//                                 opacity: [0.7, 1, 0.7]
//                             }}
//                             transition={{
//                                 duration: 3,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                             }}
//                             className="absolute bottom-32 left-20"
//                         >
//                             <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" opacity="0.3" />
//                                 <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
//                             </svg>
//                         </motion.div>

//                         {/* Mentor/Teaching Elements */}
//                         <motion.div
//                             animate={{
//                                 scale: [1, 1.2, 1],
//                                 opacity: [0.6, 1, 0.6]
//                             }}
//                             transition={{
//                                 duration: 2.5,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                             }}
//                             className="absolute bottom-20 right-24"
//                         >
//                             {/* Light Bulb */}
//                             <div className="relative">
                                
//                                 <svg className="w-20 h-20 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" opacity="0.7" />
//                                 </svg>
//                                 <motion.div
//                                     animate={{
//                                         scale: [1,2, 1],
//                                         opacity: [0.5, 0, 0.5]
//                                     }}
//                                     transition={{
//                                         duration: 2,
//                                         repeat: Infinity,
//                                         ease: "easeOut"
//                                     }}
//                                     className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl"
//                                 ></motion.div>
//                             </div>
//                         </motion.div>

//                         {/* Growth Arrow */}
//                         <motion.div
//                             animate={{
//                                 y: [0, -10, 0],
//                                 x: [0, 5, 0]
//                             }}
//                             transition={{
//                                 duration: 3,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                             }}
//                             className="absolute top-64 left-32"
//                         >
//                             <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                             </svg>
//                         </motion.div>

//                         {/* Floating Geometric Shapes */}
//                         <motion.div
//                             animate={{
//                                 rotate: [0, 360],
//                                 scale: [1, 1.1, 1]
//                             }}
//                             transition={{
//                                 duration: 10,
//                                 repeat: Infinity,
//                                 ease: "linear"
//                             }}
//                             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-500/30 rounded-full"
//                         ></motion.div>

//                         <motion.div
//                             animate={{
//                                 rotate: [360, 0]
//                             }}
//                             transition={{
//                                 duration: 15,
//                                 repeat: Infinity,
//                                 ease: "linear"
//                             }}
//                             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/20 rounded-full"
//                         ></motion.div>

//                         {/* Network Connection Nodes */}
//                         <svg className="absolute inset-0 w-full h-full opacity-30">
//                             <motion.line
//                                 x1="20%"
//                                 y1="25%"
//                                 x2="70%"
//                                 y2="60%"
//                                 stroke="url(#gradient1)"
//                                 strokeWidth="1"
//                                 initial={{ pathLength: 0 }}
//                                 animate={{ pathLength: 1 }}
//                                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                             />
//                             <motion.line
//                                 x1="80%"
//                                 y1="30%"
//                                 x2="30%"
//                                 y2="80%"
//                                 stroke="url(#gradient2)"
//                                 strokeWidth="1"
//                                 initial={{ pathLength: 0 }}
//                                 animate={{ pathLength: 1 }}
//                                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                             />
//                             <motion.line
//                                 x1="40%"
//                                 y1="20%"
//                                 x2="75%"
//                                 y2="85%"
//                                 stroke="url(#gradient3)"
//                                 strokeWidth="1"
//                                 initial={{ pathLength: 0 }}
//                                 animate={{ pathLength: 1 }}
//                                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                             />
//                             <defs>
//                                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                                     <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
//                                     <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.5" />
//                                 </linearGradient>
//                                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                                     <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
//                                     <stop offset="100%" stopColor="#F472B6" stopOpacity="0.5" />
//                                 </linearGradient>
//                                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
//                                     <stop offset="0%" stopColor="#34D399" stopOpacity="0.5" />
//                                     <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.5" />
//                                 </linearGradient>
//                             </defs>
//                         </svg>

//                         {/* Floating Particles */}
//                         {[...Array(8)].map((_, i) => (
//                             <motion.div
//                                 key={i}
//                                 animate={{
//                                     y: [0, -30, 0],
//                                     x: [0, Math.random() * 20 - 10, 0],
//                                     opacity: [0.3, 0.8, 0.3]
//                                 }}
//                                 transition={{
//                                     duration: 3 + Math.random() * 2,
//                                     repeat: Infinity,
//                                     delay: i * 0.3,
//                                     ease: "easeInOut"
//                                 }}
//                                 className="absolute w-2 h-2 bg-blue-400 rounded-full"
//                                 style={{
//                                     left: `${Math.random() * 80 + 10}%`,
//                                     top: `${Math.random() * 80 + 10}%`
//                                 }}
//                             ></motion.div>
//                         ))}

//                         {/* Brackets representing code */}
//                         <motion.div
//                             animate={{
//                                 opacity: [0.4, 1, 0.4]
//                             }}
//                             transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                             }}
//                             className="absolute bottom-44 right-40 text-6xl font-bold text-purple-500/40"
//                         >
//                             {'{ }'}
//                         </motion.div>

//                     </div>

//                     {/* Mobile Right Side - Simplified Version */}
//                     <div className="lg:hidden flex justify-center items-center h-64 relative">
//                         <motion.div
//                             animate={{
//                                 rotate: [0, 360]
//                             }}
//                             transition={{
//                                 duration: 20,
//                                 repeat: Infinity,
//                                 ease: "linear"
//                             }}
//                             className="absolute w-48 h-48 border border-purple-500/30 rounded-full"
//                         ></motion.div>

//                         <motion.div
//                             animate={{
//                                 scale: [1, 1.2, 1],
//                                 opacity: [0.6, 1, 0.6]
//                             }}
//                             transition={{
//                                 duration: 2.5,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                             }}
//                         >
//                             <svg className="w-24 h-24 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" opacity="0.7" />
//                             </svg>
//                         </motion.div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;


// import { Github, Instagram, Facebook, Mail, Phone, Book } from 'lucide-react';

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const roles = [
//     'Full-Stack Developer',
//     'Cyber Learner',
//     'Pre-Analyst',
//     'Mindset Builder'
// ];

// const Hero = () => {
//     const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//         }, 2500);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative min-h-screen bg-gradient-to-br overflow-hidden">
//             {/* Ambient background effects */}
//             <div className="absolute inset-0 opacity-30">
//                 <div className="absolute  left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
//                 <div className="absolute  right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
//             </div>

//             <div className="container mx-auto px-4 lg:px-12 py-12 relative z-10">
//                 <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

//                     {/* LEFT SIDE - Text Content */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="space-y-2 order-1"
//                     >
//                         {/* Greeting */}
//                         <motion.p
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                             className="text-shadow-gray-400 text-lg md:text-xl ml-1 tracking-wide"
//                         >
//                             Hey, I am <span className="text-blue-500 font-semibold">Umar Javaid</span>
//                         </motion.p>



// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 md:px-6 bg-slate-950">
// //       <div className="max-w-4xl mx-auto text-center">
// //        <h1 className="text-6xl m-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
// //   Omii Dev — Cyber & Dev Blogs
// // </h1>

// //         <p className="text-lg md:text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
// //           I am a cybersecurity expert, web developer, and educator dedicated to sharing knowledge and building secure, scalable solutions. Let&apos;s transform your digital presence.
// //         </p>


// //         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
// //           <Link
// //             href="#skills"
// //             className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
// //           >
// //             Explore My Work
// //           </Link>
// //           {/* <Link
// //             href="mailto:hi@omii.dev"
// //             className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
// //           >
// //             Get in Touch
// //           </Link> */}
// //         </div>

// //         {/* Social Links */}
// //         <div className="flex justify-center gap-6">
// //           <a
// //             href="https://github.com/evildevill"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
// //             aria-label="GitHub"
// //           >
// //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //             </svg>
// //           </a>
// //           <a
// //             href="https://twitter.com/hackerwasii"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
// //             aria-label="Twitter"
// //           >
// //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
// //             </svg>
// //           </a>
// //           <a
// //             href="https://linkedin.com/in/hackerwasii"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
// //             aria-label="LinkedIn"
// //           >
// //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
// //             </svg>
// //           </a>
// //           <a
// //             href="https://youtube.com/@hackerwasii"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
// //             aria-label="YouTube"
// //           >
// //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
// //             </svg>
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// // 'use client'

// // import Link from 'next/link'

// // export default function Hero() {
