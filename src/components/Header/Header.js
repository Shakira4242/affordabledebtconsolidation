import { useState, useEffect } from "react";
import { Dialog } from '@headlessui/react'
import CallIcon from '@mui/icons-material/Call';
import Slider from '../Slider'

import { useLocation } from "react-router-dom";
import { animated, useSpring, useTrail } from '@react-spring/web'

export default function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [header, setHeader] = useState("");

    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    })

    const trail = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
    })

    const navigation = [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
    ]

    let location = useLocation().pathname.split("/")[1];

    useEffect(() => {
      async function loadData(){
        const response = await fetch("https://affordabledebtconsolidation.com/wp-json/wp/v2/pages/?slug=" + location);

        if(response.ok){
            const data = await response.json();
            console.log(data);
            console.log(data[0].title.rendered);
        }
      }
      loadData();
    }, []);

    return (
        <header className="inset-x-0 top-0 z-10 border-b border-gray-200 border-b-2 fixed bg-white">
            <animated.nav 
                className="flex items-center justify-between p-6 lg:px-8" 
                aria-label="Global"
                style={trail}
            >
                <div 
                    className="flex lg:flex-1"
                    
                >
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                        className="h-8 w-auto"
                        src="logo_header.avif"
                        alt=""
                    />
                  </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                    >
                    <span className="sr-only">Open main menu</span>
                    </button>
                </div>

                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <a href="tel:800-789-4908" className="text-sm font-semibold leading-6 text-gray-900">
                        <CallIcon className="lg"></CallIcon>800-789-4908
                    </a>
                </div>
            </animated.nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>

            <div className="fixed inset-0 z-10" />

            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                    />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="sr-only">Close menu</span>
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                    <div className="py-6">
                    <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </Dialog.Panel>
            </Dialog>
        </header>
    );
}