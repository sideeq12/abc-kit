import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 bg-[#D3BE61] ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex px-20">
					<div className="flex ml-auto flex-wrap gap-6 md:gap-12">
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-black">
								Product
							</p>
							<ul className="flex flex-col gap-2 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Who We Are.
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										What We Do.
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
									How It Works
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Donate.
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-black">Resources</p>
							<ul className="flex flex-col gap-2 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Community
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Use Cases
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Source Code
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Blog
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-black">Legal</p>
							<ul className="flex flex-col gap-2 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Documentation
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Integrations
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Support
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-1">
							<p className="mb-2 font-semibold text-black">Pages</p>
							<ul className="flex flex-col gap-2 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Events
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Newsroom
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										About us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
