import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, History, Home, Sponsors, Store, Team } from './pages';
import MainLayout from './components/MainLayout';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Router() {
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 500,
			easing: 'ease-out-sine',
		});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='history' element={<History />} />
					<Route path='sponsors' element={<Sponsors />} />
					<Route path='team' element={<Team />} />
					<Route path='contact' element={<Contact />} />
					<Route path='store' element={<Store />} />
					{/* <Route path="about" element={<About />} />
					<Route path="*" element={<NotFound />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
