"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const links = [
	{ name: "Home", href: "/main" },
	{
	  name: "About",
	  href: "/main/about",
	  submenu: true,
	  submenuItems: [{ name: "Founder", href: "/main/founder" }],
	},
	{ name: "Resources", href: "/main/resources" , 
	submenu : true,
	 submenuItems : [{name :"Articles", href: "/articles"}],
	},
	{ name: "Contacts", href: "/main/contacts" },
  ];


export function Header() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen((cur) => !cur);
  
	const pathname = usePathname();
  
	React.useEffect(() => {
	  window.addEventListener(
		"resize",
		() => window.innerWidth >= 960 && setOpen(false)
	  );
	}, []);
  
	return (
	  <Navbar
		fullWidth
		shadow={false}
		color="transparent"
		className="absolute z-50 border-0 bg-white text-black w-screen"
	  >
		<div className="container ml-6 md:sml-14 flex items-center justify-between">
		  <Image
			src="https://github.com/adminadbc/abcwebsite/blob/main/public/logoabc.png?raw=true"
			width={250}
			height={80}
			alt="ABC Foundation Logo"
		  />
		  <div className="ml-auto hidden items-center gap-14 lg:flex text-2xl">
			{links.map((link) => ( (link.name == "Resources" ) ? <Custom   key={30}/>
			:  (<Link key={link.name} href={link.href}
			  className={clsx({
				"bg-sky-100 text-abcf": pathname === link.href,
			  })}
			>
			  <p className="hidden md:block">{link.name}</p>
			</Link>)
			))}
		  </div>
		  <div className="hidden gap-2 lg:flex">
			<IconButton variant="text" color="white" size="sm">
			  <i className="fa-brands fa-facebook text-base" />
			</IconButton>
			<IconButton variant="text" color="white" size="sm">
			  <i className="fa-brands fa-instagram text-base" />
			</IconButton>
			<IconButton variant="text" color="white" size="sm">
			  <i className="fa-brands fa-github text-base" />
			</IconButton>
		  </div>
		  <IconButton
			variant="text"
			color="white"
			onClick={handleOpen}
			className="ml-auto inline-block lg:hidden"
		  >
			{open ? (
			  <XMarkIcon strokeWidth={2} className="h-6 w-6 text-black" />
			) : (
			  <Bars3Icon strokeWidth={2} className="h-6 w-6 text-black" />
			)}
		  </IconButton>
		</div>
		<Collapse open={open}>
		  <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
			<ul className="flex flex-col gap-4 text-gray-900 text-lg">
			  <li>
				<Link  href="/main">
				  Home
				</Link>
			  </li>
			  <li>
				<Link href="/main/about">
				  About
				</Link>
			  </li>
			 <Custom />
			  <li>
				<Link  href="/main/contacts">
				  Contacts
				</Link>
			  </li>
			</ul>
			<div className="mt-4 flex gap-2">
			  <IconButton variant="text" color="gray" size="sm">
				<i className="fa-brands fa-facebook text-base" />
			  </IconButton>
			  <IconButton variant="text" color="gray" size="sm">
				<i className="fa-brands fa-instagram text-base" />
			  </IconButton>
			  <IconButton variant="text" color="gray" size="sm">
				<i className="fa-brands fa-github text-base" />
			  </IconButton>
			</div>
		  </div>
		</Collapse>
	  </Navbar>
	);
  }
  
  
interface DropMenuProps {
	title: string;
	items: {name: string; href : string}[];
  }
  
  
  const DropMenu: React.FC<DropMenuProps & { isOpen: boolean; toggleDropdown: () => void }> = ({ title, items, isOpen, toggleDropdown }) => {
	return (
	  <div className="relative flex flex-col md:flex-row text-left">
		<div
		  onClick={toggleDropdown}
		  className="inline-flex justify-start w-full md:justify-center md:px-4 py-2 bg-white  font-medium"
		  aria-haspopup="true"
		  aria-expanded={isOpen}
		>
		  {title}
		  {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up  ml-3 mt-2" viewBox="0 0 16 16">
	<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
  </svg> :<svg
			className="-mr-1 ml-2 mt-2 h-5 w-5"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
		  >
			<path
			  fillRule="evenodd"
			  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
			  clipRule="evenodd"
			/>
		  </svg>}
		</div>
  
		<div
		  className={`absolute z-10  w-56 rounded-md  mt-8 md:mt-12 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 ${
			isOpen ? '' : 'hidden'
		  }`}
		  role="menu"
		  aria-orientation="vertical"
		  aria-labelledby="options-menu"
		>
		  <div className="py-1" role="none">
			{items.map((item, index) => (
			  <a
				key={index}
				href={item.href}
				className="text-gray-700 block px-4 py-2 text-base"
				role="menuitem"
			  >
				{item.name}
			  </a>
			))}
		  </div>
		</div>
	  </div>
	);
  };
  
  const Custom: React.FC = () => {
  
	  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
	const toggleDropdown = (dropdownId: number) => {
	  setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
	};
  
	return (
	  <div className="sm:flex sm:justify-center gap-4 sm:items-center">
		<DropMenu
		  title="Resources"
		  items={store[0].submenuItems}
		  isOpen={openDropdown === 1}
		  toggleDropdown={() => toggleDropdown(1)}
		/>
		<DropMenu
		  title="Initiatives"
		  items={store[1].submenuItems}
		  isOpen={openDropdown === 2}
		  toggleDropdown={() => toggleDropdown(2)}
		/>
	  </div>
	);
  };
  

  
  
  const store = [{
	  name: "Resources",
	  href: "/main/initiatives",
	  submenu: true,
	  submenuItems: [{ name: "Education", href: "/main/resources/education" },{ name : "Articles", href  : "https://abc-blog-kit.vercel.app/"}],
	},{
	  name: "Initiatives",
	  href: "/main/initiatives",
	  submenu: true,
	  submenuItems: [{ name: "LegalConnect", href: "/main/legal-connect" } , {name : "Changemakers", href : "/changemakers"}],
	}
  ]
  export default Header;
