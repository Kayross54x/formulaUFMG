import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { brasaoUfmg, formulaUfmgLogoAzul, horse1, horse2, horse3, ufmg, ufmgBranca } from '../assets'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const [darkMode, setDarkMode] = useState(false)
	const [scrollY, setScrollY] = useState(0)

	const routes = [
		{ name: 'Home', url: "/" },
		{ name: 'História', url: "/history" },
		{ name: 'Patrocínios', url: "/sponsors" },
		{ name: 'Equipe', url: "/team" },
		{ name: 'Contato', url: "/contact" }
	]

	const location = useLocation();
	const isHome = location.pathname === '/';

	const toggleMenu = () => setIsOpen(!isOpen)

	const toggleDarkMode = () => {
		document.documentElement.classList.toggle('dark')
		setDarkMode(!darkMode)
	}

	const handleScroll = () => {
		setScrollY(window.scrollY)
	}

	useEffect(() => {
		if (isHome) {
			window.addEventListener('scroll', handleScroll)
			return () => window.removeEventListener('scroll', handleScroll)
		}
	}, [isHome])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Opção 1: Fade suave do fundo
	const opacity = isHome ? Math.min(scrollY / 300, 1) : 1
	const blur = isHome ? Math.min(scrollY / 300, 1) * 8 : 0

	// Opção 2: Troca de cor baseada no scroll
	const switchToSolidColor = isHome ? scrollY > 700 : true

	return (
		<header className={`fixed w-full z-50 text-white duration-200 transition-all ${switchToSolidColor ? "h-16" : "h-24"}`}>
			<div
				className={`w-full h-full transition-all duration-500 ease-in-out bg-bluetheme-800`}
				style={{
					backdropFilter: `blur(${blur}px)`,
					backgroundColor: switchToSolidColor
						? ''
						: `rgba(255,255,255,${opacity * 0.1})`,
				}}
			>
				<div className="flex items-center h-full p-4 justify-between">
					<nav className={`md:flex ${isOpen ? 'block' : 'hidden'} px-4 w-full`}>
						<Link
							to="/"
							data-aos="fade-in" data-aos-delay="200"
							className="block py-1 text-white font-semibold cursor-default"
						>
							<img
								src={horse3}
								className={`h-12 w-12 hover:-rotate-12 hover:scale-110 transition-transform duration-300`}
							/>
						</Link>
						<div className={`flex items-center justify-center md:gap-12 w-full ${switchToSolidColor ? "mr-2" : "mr-0"} transition-all`}>
							{routes.map(
								(item, idx) => (
									<Link
										key={idx}
										to={item.url}
										data-aos="fade-in" data-aos-delay="200"
										className="py-1 text-xs text-white uppercase flex items-center tracking-[0.2em] hover:text-shadow-glow transition-[text-shadow] duration-300 ease-in-out"
									>
										{item.name}
									</Link>
								)
							)}
						</div>
					</nav>
					<div className="flex items-center gap-2" data-aos="fade-in" data-aos-delay="200">
						<img
							src={brasaoUfmg}
							alt="Logo ufmg"
							className={`cursor-pointer transition-all ${switchToSolidColor ? "h-14" : "h-16"} ${switchToSolidColor ? "w-14" : "w-16"}`}
						/>
					</div>
				</div>
				{/* <button
					onClick={toggleDarkMode}
					className="text-sm px-2 py-1 bg-white/10 rounded hover:bg-white/20"
				>
					{darkMode ? '☀️' : '🌙'}
				</button>
				<button onClick={toggleMenu} className="md:hidden text-black dark:text-white">
					☰
				</button> */}
			</div>

		</header>
	)
}
