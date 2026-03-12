"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DetailCard({
	title,
	time,
	location,
	venue,
	icon,
	delay,
}: {
	title: string;
	time: string;
	location: string;
	venue: string;
	icon: string;
	delay: number;
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
			<div className="glass-card glow-border rounded-2xl p-8 transition-all duration-500 hover:border-wedding-gold/25">
				<div className="mb-4 h-px w-12 mx-auto gold-line" />
				<div className="mb-4 text-3xl" role="img" aria-label={`${title} icon`}>
					{icon}
				</div>
				<h3 className="mb-4 font-serif text-xl text-wedding-charcoal">
					{title}
				</h3>
				<div className="space-y-1">
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
			</div>
		</motion.article>
	);
}
