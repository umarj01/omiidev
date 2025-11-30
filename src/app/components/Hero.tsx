

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
        <section className="relative min-h-screen bg-gradient-to-br overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute  left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute  right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-12 pt-24 lg:pt-12 pb-12 relative z-10">
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
                            className="text-white text-lg md:text-xl ml-1 tracking-wide"
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
                                <div className='bg-slate-800 p-2 rounded-full text-amber-50'><Instagram /></div>
                                <div className='bg-slate-800 p-2 rounded-full text-amber-50'><Github /></div>
                                <div className='bg-slate-800 p-2 rounded-full text-amber-50'><Facebook /></div>
                                <div className='bg-slate-800 p-2 rounded-full text-amber-50'><Mail /></div>
                                <div className='bg-slate-800 p-2 rounded-full text-amber-50'><Phone /></div>

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
//                         className="space-y-2 order-1 "
//                     >
//                         {/* Greeting */}
//                         <motion.p
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                             className="text-white text-lg md:text-xl ml-1 tracking-wide"
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

//                                 Building  & <br /> Breaking Limits.
//                             </span>
//                             <br />
//                         </motion.h1>

//                         <div className="text-slate-500 font-semibold font-mono ml-1 max-w-xl leading-relaxed">
//                             I create, test, and challenge systems to make them smarter, safer, and stronger.
//                             I blend curiosity with discipline — building tools, hardening defenses, and
//                             teaching others the mindset to turn problems into progress.
//                         </div>


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



//                         <div className=''>
//                             <div className='flex gap-2 mb-4 text-slate-400 flex-wrap'>
//                                 <button className='bg-slate-900 light:bg-white p-2 px-4 h-10 rounded-full whitespace-nowrap'>Web Development</button>
//                                 <button className='bg-slate-900 p-2 px-4 h-10 rounded-full whitespace-nowrap' >Cyber Security</button>
//                                 <button className='bg-slate-900 p-2 px-4 h-10 rounded-full whitespace-nowrap' >Education</button>
//                                 <button className='bg-slate-900 p-2 px-4 h-10 rounded-full whitespace-nowrap' >Mentor</button>
//                             </div>
//                         </div>
//                         {/* CTA Buttons */}
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.9 }}
//                             className="flex flex-wrap gap-4 "
//                         >

//                             <div className='flex flex-row gap-4 pt-4 flex-wrap'>
//                                 <div className='bg-slate-800 p-2 rounded-full'><Instagram /></div>
//                                 <div className='bg-slate-800 p-2 rounded-full'><Github /></div>
//                                 <div className='bg-slate-800 p-2 rounded-full'><Facebook /></div>
//                                 <div className='bg-slate-800 p-2 rounded-full'><Mail /></div>
//                                 <div className='bg-slate-800 p-2 rounded-full'><Phone /></div>

//                             </div>
//                         </motion.div>
//                     </motion.div>

//                     {/* RIGHT SIDE - Creative Animated Design - Now Responsive */}
//                     <div className="relative h-[400px] md:h-[600px] w-full order-2">

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
//                             className="absolute top-8 left-4 md:top-18 md:left-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 md:p-4 shadow-lg"
//                         >
//                             <pre className="text-blue-500 text-xs md:text-sm font-mono">
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
//                             className="absolute top-40 right-4 md:top-60 md:right-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2 md:p-3 shadow-lg"
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
//                             className="absolute top-16 right-12 md:top-22 md:right-40 w-20 h-20 md:w-24 md:h-24 border-2 border-blue-400/40 rounded-lg flex items-center justify-center"
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
//                                 className="w-10 h-10 md:w-12 md:h-12 border-4 border-blue-500/60 rounded-md relative"
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
//                             className="absolute bottom-24 left-8 md:bottom-32 md:left-20"
//                         >
//                             <svg className="w-12 h-12 md:w-16 md:h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
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
//                             className="absolute bottom-16 right-12 md:bottom-20 md:right-24"
//                         >
//                             {/* Light Bulb */}
//                             <div className="relative">

//                                 <svg className="w-16 h-16 md:w-20 md:h-20 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" opacity="0.7" />
//                                 </svg>
//                                 <motion.div
//                                     animate={{
//                                         scale: [1, 2, 1],
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
//                             className="absolute top-48 left-16 md:top-64 md:left-32"
//                         >
//                             <svg className="w-10 h-10 md:w-12 md:h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
//                             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 border border-purple-500/30 rounded-full"
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
//                             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 border border-blue-500/20 rounded-full"
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
//                             className="absolute bottom-32 right-16 md:bottom-44 md:right-40 text-4xl md:text-6xl font-bold text-purple-500/40"
//                         >
//                             {'{ }'}
//                         </motion.div>

//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

