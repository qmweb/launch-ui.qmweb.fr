"use client"

import { motion } from "framer-motion"
import type {
	FeatureCardProps,
	FeatureDescriptionProps,
	FeatureImageProps,
	FeatureTitleProps,
} from "@/app/_components/shared/feature-card/feature-card.interface"

export function FeatureTitle({ children, className = "" }: FeatureTitleProps) {
	return (
		<h3 className={`text-xl md:text-2xl font-semibold text-foreground ${className}`}>{children}</h3>
	)
}

export function FeatureDescription({ children, className = "" }: FeatureDescriptionProps) {
	return (
		<p className={`mt-2 mb-6 text-sm md:text-base text-muted-foreground max-w-[52ch] ${className}`}>
			{children}
		</p>
	)
}

export function FeatureImage({ children, className = "" }: FeatureImageProps) {
	return <div className={`relative mt-auto z-10 ${className}`}>{children}</div>
}

export function FeatureCard({
	children,
	variant = "default",
	colSpan = { mobile: 1, desktop: 11 },
	delay = 0,
	showEllipse = true,
	ellipseVisibility = "all",
	className = "",
	style,
}: FeatureCardProps) {
	const getEllipseVisibilityClass = () => {
		switch (ellipseVisibility) {
			case "mobile":
				return "sm:hidden"
			case "desktop":
				return "hidden sm:block"
			case "all":
				return ""
			case "none":
				return "hidden"
			default:
				return ""
		}
	}

	const getVariantClasses = () => {
		switch (variant) {
			case "tile":
				return "border border-border-muted-darker bg-tile"
			case "gradient":
				return "border border-border-muted-darker"
			default:
				return "bg-background border border-solid border-border-muted sm:border-foreground lg:border-border-muted"
		}
	}

	const getColSpanClass = () => {
		const mobileClass = "col-span-1"
		const desktopClass = colSpan.desktop === 11 ? "lg:col-span-11" : "lg:col-span-13"
		return `${mobileClass} ${desktopClass}`
	}

	const renderContent = () => (
		<div
			className="flex flex-col bg-background rounded-[12px] overflow-hidden p-6 md:p-7 lg:p-8 relative h-full"
			style={style}
		>
			{showEllipse && (
				<div
					className={`absolute inset-0 rounded-[12px] pointer-events-none ${getEllipseVisibilityClass()}`}
					style={{
						background:
							"radial-gradient(circle at center, var(--color-ellipse-1) 0%, transparent 100%)",
					}}
				/>
			)}

			{children}
		</div>
	)

	if (variant === "gradient") {
		return (
			<motion.article
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ margin: "-50px" }}
				transition={{
					duration: 0.8,
					ease: [0.25, 0.46, 0.45, 0.94],
					delay,
				}}
				className={`rounded-[12px] ${getColSpanClass()} ${className}`}
				style={{
					padding: "0.8px",
					background:
						"linear-gradient(to bottom, var(--color-border-muted-darker) 0%, var(--color-border-muted) 0.35%, var(--color-border-muted) 100%)",
				}}
			>
				{renderContent()}
			</motion.article>
		)
	}

	return (
		<motion.article
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: "-50px" }}
			transition={{
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				delay,
			}}
			className={`rounded-[12px] overflow-hidden ${getVariantClasses()} ${getColSpanClass()} ${className}`}
		>
			{renderContent()}
		</motion.article>
	)
}
