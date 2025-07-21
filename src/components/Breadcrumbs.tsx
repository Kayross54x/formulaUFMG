import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
	const location = useLocation()

	const paths = location.pathname.split('/').filter(Boolean)

	return (
		<nav className="text-sm text-gray-600 dark:text-gray-300 my-2 px-4" aria-label="Breadcrumb">
			<ol className="flex items-center gap-2">
				<li>
					<Link to="/" className="hover:underline">Início</Link>
				</li>
				{paths.map((segment, index) => {
					const path = '/' + paths.slice(0, index + 1).join('/')
					const label = decodeURIComponent(segment).replace(/-/g, ' ')

					return (
						<li key={path} className="flex items-center gap-2">
							<span>/</span>
							<Link to={path} className="hover:underline capitalize">
								{label}
							</Link>
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
