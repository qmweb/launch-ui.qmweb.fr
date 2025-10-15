import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Launch UI | BeeeAgency",
	description: "Launch UI | BeeeAgency",
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
		},
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	)
}
