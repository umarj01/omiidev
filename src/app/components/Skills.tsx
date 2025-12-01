"use client";

import {
    Code2,
    Palette,
    Zap,
    Globe,
    Box,
    Figma,
    Github,
    Shield,
    ShieldAlert,
    Bug,
    Eye,
    Network,
    Server,
    HardDrive,
    Cloud,
    Terminal,
    Layers,
    Settings,
    Workflow,
} from "lucide-react";

// Web Development Skills - Enhanced with better arrangement
const webDevSkills = [
    { name: "React", icon: Box, size: "large", color: "from-cyan-400 to-blue-500", level: "Advanced" },
    { name: "Next.js", icon: Workflow, size: "large", color: "from-slate-600 to-slate-800", level: "Advanced" },
    { name: "JavaScript", icon: Code2, size: "large", color: "from-yellow-400 to-orange-500", level: "Expert" },
    { name: "TypeScript", icon: Code2, size: "medium", color: "from-blue-600 to-indigo-600", level: "Advanced" },
    { name: "Tailwind CSS", icon: Zap, size: "medium", color: "from-sky-400 to-blue-600", level: "Expert" },
    { name: "HTML5", icon: Globe, size: "small", color: "from-orange-500 to-red-500", level: "Expert" },
    { name: "CSS3", icon: Palette, size: "small", color: "from-blue-500 to-cyan-500", level: "Expert" },
    { name: "GitHub", icon: Github, size: "small", color: "from-gray-600 to-gray-800", level: "Advanced" },
    { name: "Figma", icon: Figma, size: "small", color: "from-purple-500 to-pink-500", level: "Intermediate" },
    { name: "Webflow", icon: Globe, size: "small", color: "from-blue-500 to-purple-500", level: "Intermediate" },
];

// Cyber Security Skills
const cyberSecuritySkills = [
    { name: "Pre-Analyst", icon: Eye, color: "from-red-500 to-orange-600" },
    { name: "Red Team", icon: ShieldAlert, color: "from-rose-600 to-red-700" },
    { name: "Security Audits", icon: Shield, color: "from-orange-500 to-amber-600" },
    { name: "Security Awareness", icon: ShieldAlert, color: "from-amber-500 to-yellow-600" },
    { name: "Networking", icon: Network, color: "from-red-400 to-rose-500" },
    { name: "Wireshark", icon: Bug, color: "from-cyan-500 to-blue-600" },
];

// System Admin Skills
const sysAdminSkills = [
    { name: "Operating Systems", icon: Terminal, details: "Linux, Windows Server" },
    { name: "Networking", icon: Network, details: "TCP/IP, DNS, DHCP" },
    { name: "Cloud Infrastructure", icon: Cloud, details: "AWS, Azure, GCP" },
    { name: "System Infrastructure", icon: Server, details: "Virtualization, Containers" },
    { name: "Server Management", icon: HardDrive, details: "Configuration, Monitoring" },
    { name: "DevOps Tools", icon: Settings, details: "CI/CD, Automation" },
];

export default function Skills() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-20">
            <div className="relative z-10 px-4 md:px-6">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <span className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 mb-4">
                            <Layers className="h-4 w-4" />
                            Expertise
                        </span>
                        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                            My{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Skills Arsenal
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-slate-300">
                            A diverse toolkit spanning development, security, and infrastructure
                        </p>
                    </div>

                    {/* Web Development Section - Floating 3D Code Cards */}
                    <div className="mb-20">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/30">
                                <Code2 className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white md:text-3xl">
                                Web Development
                            </h3>
                        </div>

                        {/* Connection Lines SVG Background */}
                        <div className="relative">
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Animated connection lines */}
                                <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
                                <line x1="50%" y1="15%" x2="70%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                                <line x1="30%" y1="60%" x2="60%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
                            </svg>

                            <div className="relative grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1000px' }}>
                                {webDevSkills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    const isLarge = skill.size === "large";

                                    return (
                                        <div
                                            key={index}
                                            className="web-dev-card group relative"
                                            style={{
                                                animationDelay: `${index * 0.1}s`
                                            }}
                                        >
                                            {/* Code Window Header */}
                                            <div className="relative overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/20 group-hover:shadow-2xl group-hover:-translate-y-2"
                                                style={{ transformStyle: 'preserve-3d' }}>

                                                {/* Window Controls */}
                                                <div className="flex items-center gap-2 border-b border-slate-700/50 bg-slate-800/50 px-4 py-2.5">
                                                    <div className="flex gap-1.5">
                                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
                                                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
                                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
                                                    </div>
                                                    <span className="ml-2 font-mono text-xs text-slate-400">{skill.name}.tsx</span>
                                                </div>

                                                {/* Card Content */}
                                                <div className="relative p-6">
                                                    {/* Line Numbers */}
                                                    <div className="absolute left-0 top-6 flex flex-col gap-4 border-r border-slate-700/30 bg-slate-800/30 px-3 py-6 font-mono text-xs text-slate-600">
                                                        <span>01</span>
                                                        <span>02</span>
                                                        <span>03</span>
                                                        {isLarge && <span>04</span>}
                                                    </div>

                                                    {/* Main Content */}
                                                    <div className="ml-12 space-y-4">
                                                        {/* Icon with Gradient */}
                                                        <div className="flex items-center gap-3">
                                                            <div className={`relative flex items-center justify-center rounded-lg bg-gradient-to-br ${skill.color} p-3 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                                                <Icon className="h-6 w-6 text-white" />
                                                                {/* Glow effect */}
                                                                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${skill.color} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-50`}></div>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-mono text-lg font-bold text-white">
                                                                    {skill.name}
                                                                </h4>
                                                                <p className="font-mono text-xs text-slate-400">{skill.level}</p>
                                                            </div>
                                                        </div>

                                                        {/* Code-style skill representation */}
                                                        <div className="space-y-2 font-mono text-xs">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-purple-400">const</span>
                                                                <span className="text-blue-400">proficiency</span>
                                                                <span className="text-slate-400">=</span>
                                                                <span className={`font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                                                                    {skill.level === "Expert" ? "100" : skill.level === "Advanced" ? "85" : "70"}%
                                                                </span>
                                                            </div>

                                                            {/* Animated Progress Bar */}
                                                            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                                                                <div
                                                                    className={`skill-meter h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                                                                    style={{
                                                                        width: skill.level === "Expert" ? "85%" : skill.level === "Advanced" ? "75%" : "60%"
                                                                    }}
                                                                ></div>
                                                            </div>

                                                            {/* Tags */}
                                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                                <span className={`rounded-md bg-gradient-to-r ${skill.color} px-2 py-0.5 text-[10px] font-medium text-white opacity-80`}>
                                                                    {isLarge ? "Core" : "Tool"}
                                                                </span>
                                                                <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                                                                    {skill.level}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Hover particles effect */}
                                                    <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                        <div className="relative h-16 w-16">
                                                            <div className={`absolute h-2 w-2 rounded-full bg-gradient-to-r ${skill.color} animate-ping`} style={{ top: '0', right: '0' }}></div>
                                                            <div className={`absolute h-1.5 w-1.5 rounded-full bg-gradient-to-r ${skill.color} animate-ping`} style={{ top: '30%', right: '60%', animationDelay: '0.3s' }}></div>
                                                            <div className={`absolute h-1 w-1 rounded-full bg-gradient-to-r ${skill.color} animate-ping`} style={{ top: '60%', right: '20%', animationDelay: '0.6s' }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Bottom accent line */}
                                                <div className={`h-1 w-full bg-gradient-to-r ${skill.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Cyber Security Section - Hexagonal/Diamond Cards */}
                    <div className="mb-20">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-orange-600 shadow-lg shadow-red-500/30">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold m-4 text-white md:text-3xl">
                                Cyber Security
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
                            {cyberSecuritySkills.map((skill, index) => {
                                const Icon = skill.icon;

                                return (
                                    <div key={index} className="group relative flex items-center justify-center">
                                        {/* Scanning Effect */}
                                        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                                            <div className="scan-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                                        </div>

                                        {/* Diamond/Hexagonal Card */}
                                        <div className="relative h-36 w-full sm:h-40">
                                            <div className="absolute inset-0 rotate-45 overflow-hidden rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-slate-900/80 to-slate-950 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:border-red-500 group-hover:shadow-red-500/50 group-hover:shadow-2xl">
                                                {/* Glow Effect */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}></div>
                                            </div>

                                            {/* Content (counter-rotated) */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                                <div className={`rounded-lg bg-gradient-to-br ${skill.color} p-2.5 md:p-3 shadow-lg transition-transform duration-500 group-hover:scale-110 animate-pulse-glow`}>
                                                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                                                </div>
                                                <h4 className="max-w-[85%] text-center text-xs font-bold text-white sm:text-sm px-2">
                                                    {skill.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* System Administration Section - Layered/Stacked Cards */}
                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 shadow-lg shadow-emerald-500/30">
                                <Server className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white md:text-3xl">
                                System Administration
                            </h3>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {sysAdminSkills.map((skill, index) => {
                                const Icon = skill.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                    >
                                        {/* Layered Background Cards */}
                                        <div className="absolute -right-2 -top-2 h-full w-full rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                        <div className="absolute -right-1 -top-1 h-full w-full rounded-xl bg-gradient-to-br from-emerald-500/40 to-green-500/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>

                                        {/* Main Card */}
                                        <div className="relative overflow-hidden rounded-xl border-2 border-emerald-500/30 bg-slate-900/80 backdrop-blur-sm p-5 md:p-6 shadow-lg transition-all duration-300 group-hover:border-emerald-500 group-hover:shadow-emerald-500/50 group-hover:shadow-2xl">
                                            {/* Terminal Lines Decoration */}
                                            <div className="absolute right-4 top-4 space-y-1 opacity-20">
                                                <div className="h-px w-12 md:w-16 bg-emerald-500"></div>
                                                <div className="h-px w-8 md:w-12 bg-emerald-500"></div>
                                                <div className="h-px w-10 md:w-14 bg-emerald-500"></div>
                                            </div>

                                            <div className="relative z-10">
                                                <div className="mb-4 flex items-center gap-3">
                                                    <div className="rounded-lg bg-gradient-to-br from-emerald-600 to-green-600 p-2.5 shadow-lg transition-transform duration-300 group-hover:scale-110">
                                                        <Icon className="h-5 w-5 text-white" />
                                                    </div>
                                                    <h4 className="text-base md:text-lg font-bold text-white">
                                                        {skill.name}
                                                    </h4>
                                                </div>

                                                {/* Terminal-style details */}
                                                <div className="flex items-start gap-2 rounded-lg bg-slate-950/50 p-3 font-mono text-xs text-emerald-400 border border-emerald-900/30">
                                                    <span className="text-emerald-600 flex-shrink-0">$</span>
                                                    <span className="transition-all duration-300 group-hover:text-emerald-300">
                                                        {skill.details}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute right-0 top-20 h-72 w-72 md:h-96 md:w-96 rounded-full bg-blue-500/5 blur-3xl"></div>
            <div className="absolute left-0 top-1/2 h-72 w-72 md:h-96 md:w-96 rounded-full bg-purple-500/5 blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 h-72 w-72 md:h-96 md:w-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
        </section>
    );
}
