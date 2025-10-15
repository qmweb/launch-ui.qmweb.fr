"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import {
	FeatureCard,
	FeatureDescription,
	FeatureImage,
	FeatureTitle,
} from "@/app/_components/shared/feature-card/feature-card"

export default function Home() {
	const isDesktop = useMediaQuery({ minWidth: 1024 })
	const isMobile = useMediaQuery({ maxWidth: 768 })

	return (
		<div className="font-sans min-h-screen p-6 sm:p-10 mt-10">
			<main className="row-start-2 mx-auto w-full max-w-[1312px]">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ margin: "-50px" }}
					transition={{
						duration: 1,
						ease: [0.25, 0.46, 0.45, 0.94],
					}}
					className="text-3xl sm:text-4xl md:text-5xl text-foreground font-semibold mb-6 md:mb-12"
				>
					Build a better website, faster.
				</motion.h1>

				<section
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-24 gap-4 md:gap-4 lg:gap-5"
					aria-label="Feature cards"
				>
					<FeatureCard
						variant={isMobile ? "gradient" : "default"}
						colSpan={{ mobile: 1, desktop: 11 }}
						delay={0.1}
						showEllipse={true}
						ellipseVisibility="mobile"
						style={{
							paddingBottom: "0 !important",
						}}
					>
						<FeatureTitle>100+ sections and components</FeatureTitle>
						<FeatureDescription>
							All the elements you need to build a modern, responsive, and accessible landing page.
						</FeatureDescription>
						<FeatureImage>
							<Image
								src="/images/light-mode/black-globe.svg"
								alt="Black globe illustration"
								width={512}
								height={512}
								className="hidden lg:block mx-auto w-auto h-auto scale-110"
							/>
							<Image
								src="/images/light-mode/orange-globe.svg"
								alt="Orange globe illustration"
								width={512}
								height={512}
								className="block lg:hidden mx-auto w-full h-auto scale-140 sm:scale-110 mt-4 sm:mt-0"
							/>
						</FeatureImage>
					</FeatureCard>

					<FeatureCard
						variant={isDesktop ? "tile" : "gradient"}
						colSpan={{ mobile: 1, desktop: 13 }}
						delay={0.2}
						showEllipse={true}
						ellipseVisibility="all"
						style={{
							paddingBottom: "0 !important",
						}}
					>
						<FeatureTitle>You're in control</FeatureTitle>
						<FeatureDescription>
							This is not a component library. It's a collection of re-usable components that you
							can copy and paste into your apps.
						</FeatureDescription>
						<FeatureImage>
							<Image
								src="/images/light-mode/fusee.svg"
								alt="Rocket illustration"
								width={356}
								height={356}
								className="mx-auto w-full sm:w-auto h-auto mt-4 sm:mt-0"
							/>
						</FeatureImage>
					</FeatureCard>

					<FeatureCard
						variant="gradient"
						colSpan={{ mobile: 1, desktop: 13 }}
						delay={0.3}
						showEllipse={true}
						ellipseVisibility="mobile"
					>
						<FeatureTitle>Fits right into your stack</FeatureTitle>
						<FeatureDescription>
							Built with modern web technologies and tools that fit right into any React project.
						</FeatureDescription>
						<FeatureImage>
							<Image
								src="/images/light-mode/stack.svg"
								alt="Stack illustration"
								width={512}
								height={512}
								className="mx-auto w-auto h-auto scale-150 sm:scale-130 lg:scale-100 mt-15 mb-15 sm:mt-10 sm:mb-10"
							/>
						</FeatureImage>
					</FeatureCard>

					<FeatureCard
						variant="gradient"
						colSpan={{ mobile: 1, desktop: 11 }}
						delay={0.4}
						showEllipse={true}
						ellipseVisibility="mobile"
					>
						<FeatureTitle>Data-agnostic</FeatureTitle>
						<FeatureDescription>
							All the data is separate from components so you can edit it in seconds or make it
							dynamic.
						</FeatureDescription>
						<FeatureImage>
							<Image
								src="/images/light-mode/chat.svg"
								alt="Chat illustration"
								width={512}
								height={512}
								className="mx-auto w-auto h-auto md:scale-110 lg:scale-100"
							/>
						</FeatureImage>
					</FeatureCard>
				</section>
			</main>
		</div>
	)
}
