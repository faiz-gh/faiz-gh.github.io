'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
				>
					My Experience
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Backend Engineer at NEBE',
							duration : '(Jun 2023 - Jun 2025)',
							description: 'Contributed to building a scalable backend system supporting 10,000+ daily active users',
							details: [
								'Developed core RESTful APIs using FastAPI, enhancing response times by 30%',
								'Streamlined Docker deployments, reducing setup time by 40%',
								'Optimized PostgreSQL queries, improving data retrieval speed by 25%',
								'Engaged in code reviews, boosting code quality and team collaboration',
							],
							tech: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'AWS Lambda', 'Git'],
						},
						{
							title: 'Backend Engineer at Storage Scholars LLC',
							duration : '(Feb 2023 - May 2023)',
							description: 'Built a robust data processing pipeline handling 5TB+ daily data with sub-second latency',
							details: [
								'Built backend APIs with FastAPI, improving integration efficiency by 35%',
								'Enhanced PostgreSQL performance, reducing query times by 20%',
								'Implemented security protocols, decreasing vulnerabilities by 15%',
								'Tuned backend systems, achieving 99.9% uptime and reliability',
							],
							tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS EC2', 'Git'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-white dark:bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title} <span className="text-gray-600 dark:text-gray-400 text-xl">{project.duration}</span></h3>
							<p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 text-blue-800 dark:text-blue-300 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
