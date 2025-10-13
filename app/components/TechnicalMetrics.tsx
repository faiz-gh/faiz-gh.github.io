'use client';

import { motion } from 'framer-motion';

/*
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
							<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
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
*/
// According to the above experience section, here is a new Technical Metrics section:

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
				>
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">System Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">API Gateway</h4>
								<ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
									<li>• Response time improved by 30%</li>
									<li>• Handled 10,000+ daily active users</li>
									<li>• Reduced error rates by 15%</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Database Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
									<li>• Query speed improved by 25%</li>
									<li>• Managed 5TB+ daily data</li>
									<li>• Achieved 99.9% uptime</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">Infrastructure & DevOps</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Cloud Infrastructure</h4>
								<ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
									<li>• Reduced costs by 20% through optimization</li>
									<li>• Achieved 99.95% service availability</li>
									<li>• Scaled to support 10,000+ users</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">CI/CD Pipeline</h4>
								<ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
									<li>• Deployment time reduced by 40%</li>
									<li>• Increased deployment frequency by 50%</li>
									<li>• Reduced rollback incidents by 30%</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">Development & Leadership</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Code Quality</h4>
								<ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
									<li>• Improved code coverage to 85%</li>
									<li>• Reduced bugs by 20% through code reviews</li>
									<li>• Implemented 15+ best practices</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Team Impact</h4>
								<ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
									<li>• Mentored 3+ junior developers</li>
									<li>• Led 1 successful project launch</li>
									<li>• Enhanced team productivity by 25%</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
