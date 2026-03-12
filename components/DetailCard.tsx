"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DetailCard({
	title,
	time,
	date,
	location,
	venue,
	icon,
	delay,
	mapUrl,
}: {
	title: string;
	time: string;
	date?: string;
	location: string;
	venue: string;
	icon: string;
	delay: number;
	mapUrl?: string;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-60px" });

	return (
		<motion.article
			ref={ref}
			initial={{ opacity: 0, y: 28 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
			whileHover={{ y: -5 }}
		>
			<div className="glass-card glow-border rounded-2xl p-8 transition-all duration-500 hover:border-wedding-gold/25 flex flex-col items-center">
				<div className="mb-4 h-px w-12 mx-auto gold-line" />
				<div className="mb-4 text-3xl" role="img" aria-label={`${title} icon`}>
					{icon}
				</div>
				<h3 className="mb-4 font-serif text-xl text-wedding-charcoal">
					{title}
				</h3>
				<div className="space-y-1 mb-6">
					{date && (
						<p className="font-mono text-xs uppercase tracking-widest text-wedding-gold/70">
							{date}
						</p>
					)}
					<p className="font-mono text-sm text-wedding-gold">
						<time dateTime={time}>{time}</time>
					</p>
					<p className="text-sm text-wedding-charcoal/60" itemProp="addressLocality">
						{location}
					</p>
					<p className="text-sm text-wedding-charcoal/60" itemProp="name">
						{venue}
					</p>
				</div>
				{mapUrl && (
					<a
						href={mapUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300"
						style={{
							background: "linear-gradient(135deg, rgba(184,145,80,0.12) 0%, rgba(212,175,55,0.18) 100%)",
							border: "1px solid rgba(184,145,80,0.35)",
							color: "var(--wedding-gold)",
						}}
					>
						<span
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{
								background: "linear-gradient(135deg, rgba(184,145,80,0.22) 0%, rgba(212,175,55,0.32) 100%)",
							}}
							aria-hidden="true"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="13"
							height="13"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="relative z-10 transition-transform duration-300 group-hover:scale-110"
							aria-hidden="true"
						>
							<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
							<circle cx="12" cy="10" r="3" />
						</svg>
						<span className="relative z-10">View on Map</span>
					</a>
				)}
			</div>
		</motion.article>
	);
}
