import Header from './Header'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			{/* <Breadcrumbs /> */}
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
