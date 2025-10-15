import type { ReactNode } from "react"

export interface FeatureTitleProps {
	children: ReactNode
	className?: string
}

export interface FeatureDescriptionProps {
	children: ReactNode
	className?: string
}

export interface FeatureImageProps {
	children: ReactNode
	className?: string
}

export interface FeatureCardProps {
	children: ReactNode
	variant?: "default" | "tile" | "gradient"
	responsiveVariant?: {
		mobile?: "default" | "tile" | "gradient"
		tablet?: "default" | "tile" | "gradient"
		desktop?: "default" | "tile" | "gradient"
	}
	colSpan?: {
		mobile: number
		desktop: number
	}
	delay?: number
	showEllipse?: boolean
	ellipseVisibility?: "mobile" | "desktop" | "all" | "none"
	className?: string
	style?: React.CSSProperties
}
