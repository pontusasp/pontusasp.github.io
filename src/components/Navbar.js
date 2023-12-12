import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link, useLocation} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const location = useLocation();
    const path = location.pathname;
    const isActive = (href) => {
        return (path.startsWith(href) && href !== '/') || (path === '/' && href === '/');
    }
    const navigation = [
        { name: 'About', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'KTH', href: '/kth' },
        { name: 'Apps', href: '/apps' },
    ]

    return (
        <Disclosure as="nav" className="bg-gradient-to-r from-black to-75%">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="/pontusasp-logo.min.svg"
                                        alt="Pontus Asp Logo"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    isActive(item.href) ? 'bg-gray-900/50 text-white' : 'text-gray-500 hover:text-white',
                                                    'rounded-md px-3 py-2 font-medium'
                                                )}
                                                aria-current={isActive(item.href)  ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        isActive(item.href) ? 'bg-gradient-to-r from-gray-900/80 to-80% text-white' : 'text-gray-400 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={isActive(item.href) ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    <div className={"pb-1 bg-gradient-to-r from-violet-950 to-70%"}></div>
                </>
            )}
        </Disclosure>
    )
}
