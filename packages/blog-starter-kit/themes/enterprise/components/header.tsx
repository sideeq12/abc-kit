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
		<div className='w-screen flex '>
		<Image
			src="https://github.com/adminadbc/abcwebsite/blob/main/public/logoabc.png?raw=true"
			width={250}
			height={80}
			alt="ABC Foundation Logo"
		  />
		  <div>
			<ul className='flex ml-auto gap-4'>
			{links.map((link, idx) =><li key={idx}>
				{link.name}
			</li>)}
			</ul>
		  </div>
		</div>
	);
  }
  
  


  
  
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
