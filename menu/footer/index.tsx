export default function Footer() {
	return (
		<footer className="border-t border-zinc-200 dark:border-zinc-700">
			<div className="mx-[60px] py-6 text-sm text-zinc-500 dark:text-zinc-400">
				© {new Date().getFullYear()} Fayed. All rights reserved.
			</div>
		</footer>
	)
}

