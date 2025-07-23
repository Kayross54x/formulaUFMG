import { useEffect } from "react"

export default function Store() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' }) // ou 'auto' se preferir instantâneo
	}, [])

	return (
		<div className="mt-12 p-8 flex items-center justify-center flex-col w-full">
			<div className='max-w-7xl w-full'>

			</div>
		</div>
	)
}