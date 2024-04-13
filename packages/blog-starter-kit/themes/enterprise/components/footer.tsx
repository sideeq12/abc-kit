import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { FaSquareInstagram, FaSquareFacebook, FaSquareTwitter,  FaSquareXTwitter} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";



const links = [
	{
	  title: "Product",
	  items: [{name :"Changemakers", url : "/Changemakers"},
	   {  name : "Legal Connect", url : "/legalConnect"}, 
	  { name : "Donations" , url : "/Donnation"}],
	},
	{
	  title: "Resources",
	  items: [{ name :"Articles", url: "https://abc-blog-kit.vercel.app/"}, { name :"Education", url : "/education"}],
	},
	{
	  title: "Legal",
	  items: [{ name :"Terms", url : "/terms"},{ name : "Privacy", url: "/privacy"},{name :"Confidentiality", url : "/confidentiality"}],
	},
	{
	  title: "Pages",
	  items: [{ name :"Home", url : "/"}, {name :"About", url : "/about"}, { name :"Contact Us", url : "/ContactUs"}],
	},
  ];

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
				<div className="flex px-20 border-b border-black pb-6 md:pb-12">
					<div className='flex gap-3'>
						<FaSquareInstagram size={30} />
						<FaSquareFacebook size={30} />
						<FaLinkedin size={30} />
						<FaSquareXTwitter size={30} />
						<RiTiktokLine size={30}/>
					</div>
					<div className="flex ml-auto flex-wrap gap-6 md:gap-12">
						{links.map((link, index )=><div className="col-span-full md:col-span-2 lg:col-span-1" key={index}>
							<p className="mb-2 font-semibold text-black text-xl">
								{link.title}
							</p>
							<ul className="flex flex-col gap-4 text-sm">
								{link.items.map((itm, idx)=><li   key={idx}>
									<a href={itm.url} className="hover:underline">
										{itm.name}
									</a>
								</li>)}
							</ul>
						</div>)}
					</div>
				</div>
				<div className='mt-6 md:mt-12  mx-auto flex justify-between'>All rights reserved.  <div>Copyright @ 2024 ABC Foundation</div></div>
			</Container>
		</footer>
	);
};
