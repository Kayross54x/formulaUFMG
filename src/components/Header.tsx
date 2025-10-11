import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo1 } from "../assets";

function NavItem({ name, url }: { name: string; url: string }) {
	return (
		<Link to={url} className="uppercase tracking-[0.1em] italic text-[16px] hover:text-shadow-glow transition duration-300">
			{name}
		</Link>
	);
}

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [isHome, setIsHome] = useState(false);
	const location = useLocation();

	const handleScroll = () => setScrollY(window.scrollY);

	useEffect(() => {
		setIsHome(location.pathname === "/");
	}, [location.pathname]);

	useEffect(() => {
		if (isHome) {
			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, [isHome]);

	const switchToSolidColor = isHome ? scrollY > 50 : true;
	const border = !isHome ? true : switchToSolidColor;

	const routesLeft = [
		{ name: "HOME", url: "/" },
		{ name: "COMPETIÇÃO", url: "/competition" },
		{ name: "HISTÓRIA", url: "/history" },
		{ name: "EQUIPE", url: "/team" },
	];

	const routesRight = [
		{ name: "PARCEIROS", url: "/sponsors" },
		{ name: "HOREB", url: "/horeb" },
		{ name: "LOJA", url: "/store" },
	];

	return (
		<header
			className={`${border ? "neonborder" : ""} fixed w-full z-50 text-white transition-all duration-200 ${switchToSolidColor ? "mt-0" : "mt-[50px]"}`}
		>
			<div
				className="w-full h-full bg-bluetheme-800 xl:flex xl:items-center xl:justify-center transition-all duration-500"
				style={{
					backgroundColor: switchToSolidColor ? "rgba(0, 0, 0, 0.85)" : "transparent",
				}}
			>
				{/* DESKTOP */}
				<div className="hidden xl:flex items-center justify-between p-4 h-full w-full max-w-[1400px]">
					<nav className="flex w-full items-center justify-between">
						{routesLeft.map((item, idx) => (
							<NavItem key={idx} name={item.name} url={item.url} />
						))}

						{/* Logo central */}
						<Link to="/" className="hidden md:flex flex-shrink-0 mx-4">
							<img src={logo1} alt="Logo" className="h-12 duration-300" />
						</Link>

						{routesRight.map((item, idx) => (
							<NavItem key={idx} name={item.name} url={item.url} />
						))}

						<button
							className="px-4 py-2 bg-[#0D00FF] font-bold text-white uppercase tracking-[0.1em] italic text-[16px] hover:brightness-110 transition duration-500 hover:-skew-x-12"
						>
							<p className="skew-x-12">PATROCINE</p>
						</button>
					</nav>
				</div>

				{/* MOBILE */}
				<div className="flex xl:hidden items-center justify-between w-full px-4 py-3 relative z-50">
					{/* Botão do menu */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="focus:outline-none relative z-[60]" // agora acima do backdrop, mas abaixo do conteúdo animado
					>
						<svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
							{/* {isOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							)} */}
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							
						</svg>
					</button>

					{/* Logo central */}
					<Link to="/" className="absolute left-1/2 -translate-x-1/2">
						<img src={logo1} alt="Logo" className="h-12 w-auto" />
					</Link>
				</div>

				{/* MENU SLIDE MOBILE (animado com Framer Motion) */}
				<AnimatePresence>
					{isOpen && (
						<>
							{/* Backdrop com fade */}
							<motion.div
								className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								onClick={() => setIsOpen(false)}
							/>

							{/* Menu lateral animado */}
							<motion.div
								className="fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-bluetheme-900 text-white z-50 p-6 flex flex-col justify-start gap-6"
								initial={{ x: "-100%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: "-100%", opacity: 0 }}
								transition={{ type: "tween", duration: 0.4 }}
							>
								{/* Botão de fechar dentro do menu */}
								<button onClick={() => setIsOpen(false)} className="self-end mb-4 focus:outline-none">
									<svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>

								{/* Links do menu */}
								{[...routesLeft, ...routesRight].map((item, idx) => (
									<Link
										key={idx}
										to={item.url}
										className="text-lg uppercase tracking-[0.15em] hover:text-shadow-glow transition duration-300"
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								))}

								<button
									className="px-4 text-center py-2 bg-[#0D00FF] text-white text-sm uppercase tracking-[0.2em] rounded mt-2 hover:brightness-110 transition hover:-skew-x-12"
									onClick={() => setIsOpen(false)}
								>
									PATROCINE
								</button>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
