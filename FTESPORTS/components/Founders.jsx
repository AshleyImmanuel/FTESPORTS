'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Founders() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const founders = [
        {
            id: 1,
            name: 'FAHAD',
            role: 'Founder & Strategist',
            instagram: process.env.NEXT_PUBLIC_FAHAD_INSTAGRAM || 'fahad_ig',
            bio: `The visionary behind Final Touch Esports. Fahad's journey in competitive Free Fire began years ago as a passionate player who quickly recognized the untapped potential of strategic gameplay in the Indian esports scene. His analytical mind and deep understanding of game mechanics set him apart from the beginning.

As Founder and Chief Strategist, Fahad brings a unique blend of tactical brilliance and leadership excellence. He doesn't just call shots—he orchestrates victories. Every tournament strategy, every team composition, every in-game decision is influenced by his meticulous planning and years of competitive experience.

Fahad believes that championships aren't won by individual skill alone, but through perfect execution of well-craFTZd strategies. Under his guidance, FTZ has developed a reputation for innovative tactics and clutch performances. He personally oversees player development, ensuring each squad member understands not just what to do, but why they're doing it.

Beyond the game, Fahad is a mentor who instills discipline, mental fortitude, and championship mentality in every team member. His philosophy is simple: "Strategy wins matches, discipline wins championships." This mindset has transformed FTZ from ambitious newcomers into serious title contenders.

When he's not analyzing replays or developing new strategies, Fahad is building partnerships, scouting talent, and working tirelessly to elevate Indian Free Fire esports to international standards.`,
            badge: null,
            achievements: [
                'Founded FTZ in 2021',
                '50+ Tournament Strategies Developed',
                'Mentored 15+ Professional Players',
                'Multiple Top 3 Finishes',
            ],
        },
        {
            id: 2,
            name: 'ASH999',
            displayName: 'Ashley Immanuel',
            role: 'Founder & Tech Lead',
            instagram: process.env.NEXT_PUBLIC_ASHLEY_INSTAGRAM || 'ashley_ig',
            bio: `Better known in the esports community as ASH999, Ashley Immanuel is the technical mastermind who transformed Final Touch Esports from a competitive team into a full-fledged professional organization. While Fahad leads on the battlefield, ASH999 ensures everything behind the scenes runs with military precision.

As Founder and Tech Lead, Ashley handles the complex infrastructure that modern esports demands. From building custom analytics platforms to managing team operations, from creating digital presence to handling sponsorship logistics—if it involves technology or systems, it's in ASH999's domain.

His background in software development and systems architecture proved invaluable when FTZ needed to scale. He built the organization's digital infrastructure from scratch: custom tournament tracking systems, performance analytics dashboards, automated scheduling tools, and the very platform you're viewing right now. Every technological advantage FTZ has can be traced back to ASH999's innovations.

But his role extends far beyond code. Ashley is the operational backbone of FTZ, ensuring players can focus entirely on competition while he handles contracts, logistics, equipment procurement, and organizational growth. He's the one who turns championship dreams into operational reality.

Operating from the shadows, ASH999 embodies the "system architect" mentality—constantly optimizing, always improving, never satisfied with the status quo. His vision is to make FTZ not just a winning team, but a sustainable, professional organization that sets new standards for Indian esports.

His mantra: "Champions need more than skill—they need systems that support excellence." Under his technical leadership, FTZ has become one of the most professionally managed teams in the Free Fire competitive scene.`,
            badge: '<DEV_MODE />',
            achievements: [
                'Founded FTZ in 2021',
                'Built FTZ Digital Infrastructure',
                'Developed Custom Analytics Platform',
                'Managed 50+ Tournament Operations',
            ],
        },
        {
            id: 3,
            name: 'AREEB RAHMAN',
            role: 'Esports Manager',
            instagram: process.env.NEXT_PUBLIC_AREEB_INSTAGRAM || 'areeb_ig',
            bio: `The organizational powerhouse behind Final Touch Esports's competitive success. Areeb Rahman brings structure, discipline, and strategic coordination to every aspect of esports operations. As Esports Manager, he's the crucial link between the founders' vision and the squad's day-to-day performance.

Areeb's management philosophy centers on creating an environment where players can focus entirely on their game. From scheduling scrims and analyzing opponent strategies to coordinating tournament registrations and managing team logistics, he ensures nothing falls through the cracks. His attention to detail and proactive approach have been instrumental in FTZ's consistent tournament presence.

Beyond logistics, Areeb serves as the team's morale officer and conflict resolver. He understands that championship teams are built on trust, communication, and mutual respect. Whether it's mediating disagreements, organizing team bonding sessions, or simply being available when players need support, Areeb creates the cohesive team culture that separates good squads from great ones.

His data-driven approach to esports management includes maintaining detailed performance metrics, tracking improvement areas, and coordinating with Fahad on strategic adjustments. Areeb doesn't just manage schedules—he manages success.

With Areeb at the helm of operations, FTZ runs like a well-oiled machine, allowing the founders to focus on strategy and technology while players concentrate on dominating the battlefield.`,
            badge: 'OPERATIONS',
            achievements: [
                'Managed 40+ Tournament Entries',
                'Coordinated Team Bootcamps',
                'Streamlined Communication Systems',
                'Improved Team Coordination by 60%',
            ],
        },
        {
            id: 4,
            name: 'JOD GFX',
            role: 'Graphics Designer/Editor',
            instagram: process.env.NEXT_PUBLIC_JOD_INSTAGRAM || 'jod_gfx',
            bio: `The visual mastermind behind Final Touch Esports's striking brand identity. JOD GFX transforms FTZ's competitive achievements into stunning visual narratives that captivate audiences and elevate the organization's presence across all platforms.

As Creative Director, JOD handles everything from tournament highlight reels and player introduction videos to social media graphics and promotional materials. His signature style—bold, dynamic, and unmistakably FTZ—has become synonymous with the organization's brand. Every frame, every transition, every graphic element is crafted to tell the story of excellence and ambition.

JOD's creative process goes beyond just making things look good. He works closely with the team to understand the emotion behind each victory, the strategy behind each play, and the personality of each player. This deep understanding allows him to create content that doesn't just showcase gameplay—it captures the essence of what makes FTZ special.

His technical expertise spans video editing, motion graphics, thumbnail design, and brand development. Whether it's a hype video before a major tournament or a celebratory montage after a championship win, JOD's work ensures FTZ's visual presence matches their competitive prowess.

In the fast-paced world of esports content, JOD delivers quality at speed, maintaining FTZ's consistent posting schedule while never compromising on creative excellence. His work doesn't just document FTZ's journey—it amplifies it.`,
            badge: 'CREATIVE',
            achievements: [
                'Created 100+ Tournament Highlights',
                'Designed FTZ Brand Identity',
                'Managed Social Media Visuals',
                'Grew Engagement by 150%',
            ],
        },
        {
            id: 5,
            name: 'HITMAN 45 GAMING',
            role: 'Content Creator/YouTuber',
            instagram: process.env.NEXT_PUBLIC_HITMAN_INSTAGRAM || 'hitman45gaming',
            youtube: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL || 'https://www.youtube.com/@hitman45gaming83',
            bio: `The voice and face of Final Touch Esports's digital presence. HITMAN 45 GAMING brings FTZ's competitive journey to thousands of fans through engaging YouTube content, live tournament streams, and behind-the-scenes access that builds the community around the organization.

As FTZ's official Content Creator and YouTuber, HITMAN 45 doesn't just broadcast matches—he tells stories. Every stream is an opportunity to showcase the team's skill, every video a chance to connect with fans, and every tournament a moment to build the FTZ brand. His authentic commentary and genuine passion for Free Fire resonate with viewers, turning casual watchers into dedicated supporters.

HITMAN 45's content strategy balances entertainment with education. Tournament streams provide live action and real-time reactions, while edited videos break down strategies, highlight clutch moments, and give fans an insider's view of competitive Free Fire. His ability to explain complex plays in accessible terms makes FTZ's content valuable for both casual players and aspiring competitors.

Beyond content creation, HITMAN 45 serves as FTZ's community ambassador. He interacts with fans in comments, hosts viewer games, and creates content that celebrates the broader Free Fire community. His channel isn't just about FTZ's victories—it's about growing the esports ecosystem and inspiring the next generation of players.

With consistent uploads, professional production quality, and a growing subscriber base, HITMAN 45 GAMING ensures FTZ's competitive achievements reach audiences far beyond the tournament arena.`,
            badge: 'CONTENT',
            achievements: [
                'Streamed 50+ Tournaments Live',
                'Built Engaged YouTube Community',
                'Created Educational Content Series',
                'Grew Channel to 1000+ Subscribers',
            ],
        },
    ];

    return (
        <section id="architects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-orbitron font-black text-white mb-4">
                        THE <span className="text-neon-green">ARCHITECTS</span>
                    </h2>
                    <div className="w-32 h-1 bg-neon-green mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg sm:text-xl font-montserrat max-w-2xl mx-auto">
                        The masterminds behind Final Touch Esports. Strategy meets execution. Vision becomes reality.
                    </p>
                </motion.div>

                {/* Founders Grid */}
                <div className="space-y-12">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            whileHover={{
                                scale: 1.02,
                            }}
                            onHoverStart={() => setHoveredCard(founder.id)}
                            onHoverEnd={() => setHoveredCard(null)}
                            className="relative group"
                        >
                            {/* Card Container */}
                            <div className="relative bg-gradient-to-br from-cyber-gray to-deep-black border-2 border-neon-green rounded-lg p-8 md:p-12 overflow-hidden transition-all duration-300">
                                {/* Glow Effect on Hover */}
                                <div
                                    className={`absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                                ></div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-neon-green"></div>
                                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-neon-green"></div>

                                {/* Content */}
                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Left: Profile Info */}
                                    <div className="lg:col-span-1">
                                        {/* Name - Show displayName first if it exists, otherwise show name */}
                                        <h3 className="text-5xl font-orbitron font-black text-white mb-2 tracking-wider">
                                            {founder.displayName || founder.name}
                                        </h3>

                                        {/* Alias - Show name as alias if displayName exists */}
                                        {founder.displayName && (
                                            <p className="text-gray-400 text-sm font-mono mb-3">
                                                aka {founder.name}
                                            </p>
                                        )}

                                        {/* Role */}
                                        <p className="text-neon-green text-xl font-montserrat font-semibold mb-4 uppercase tracking-wide">
                                            {founder.role}
                                        </p>



                                        {/* Social Media Buttons */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {/* Instagram Link */}
                                            <a
                                                href={`https://instagram.com/${founder.instagram}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-2 text-white px-4 py-2 rounded-lg font-montserrat text-sm font-semibold transition-all duration-300 shadow-lg"
                                                style={{
                                                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                                    border: 'none',
                                                }}
                                            >
                                                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                                <span style={{ color: 'white' }}>Instagram</span>
                                            </a>

                                            {/* YouTube Link (for HITMAN 45) */}
                                            {founder.youtube && (
                                                <a
                                                    href={founder.youtube}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center space-x-2 text-white px-4 py-2 rounded-lg font-montserrat text-sm font-semibold transition-all duration-300 shadow-lg"
                                                    style={{
                                                        background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                                                        border: 'none',
                                                    }}
                                                >
                                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                                    </svg>
                                                    <span style={{ color: 'white' }}>YouTube</span>
                                                </a>
                                            )}
                                        </div>

                                        {/* Badge */}
                                        {founder.badge && (
                                            <div className="inline-block bg-neon-green text-deep-black px-4 py-2 rounded font-mono text-sm font-bold mb-6 block mt-2">
                                                {founder.badge}
                                            </div>
                                        )}

                                        {/* Achievements */}
                                        <div className="mt-6">
                                            <h4 className="text-white font-orbitron font-bold text-sm mb-3 uppercase tracking-wide">
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {founder.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start text-gray-300 text-sm font-montserrat">
                                                        <span className="text-neon-green mr-2">▸</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Right: Bio */}
                                    <div className="lg:col-span-2">
                                        <div className="text-gray-300 text-base font-montserrat leading-relaxed space-y-4">
                                            {founder.bio.split('\n\n').map((paragraph, i) => (
                                                <p key={i}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: hoveredCard === founder.id ? '100%' : '0%' }}
                                    transition={{ duration: 0.3 }}
                                    className="h-1 bg-neon-green mt-8"
                                ></motion.div>

                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5 pointer-events-none">
                                    <div className="grid-bg w-full h-full"></div>
                                </div>
                            </div>

                            {/* 3D Shadow Effect */}
                            <div
                                className={`absolute inset-0 bg-neon-green rounded-lg -z-10 transition-all duration-300 ${hoveredCard === founder.id
                                    ? 'translate-x-2 translate-y-2 opacity-30'
                                    : 'translate-x-1 translate-y-1 opacity-10'
                                    }`}
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
