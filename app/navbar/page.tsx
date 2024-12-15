'use client'
import React from "react";
import { useState } from "react"
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
import {Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import User from '../../public/user-profile-icon.jpg';
import Link from 'next/link'
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: '/user-profile-icon.jpg'
}

const navigation = [
    { name: 'Home', href :'/', current: true},
    { name: 'Products', href :'/products', current: false},
    { name: 'About', href :'/about', current: false},
    { name: 'Contact', href :'/contact', current: false},
]

const userNavigation = [
    {name: 'Your Profile', href:'#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

function classNames(...classes:  string[]){
    return classes.filter(Boolean).join('');
}
export default function Navbar(){
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-sky-400">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                {/* Logo */}
                                <img
                                 src="/logo-s.svg"
                                 alt="Your Company"
                                 className="h-24 w-24"
                                 />
                                 {/* Navigation */}
                                 <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {
                                        navigation.map((item)=> (
                                            <Link legacyBehavior key={item.name} href={item.href}>
                                                <a  
                                                    className={classNames(
                                                        item.current ? 'bg-yellow-400 text-white' : 'text-orange-50 hover:bg-fuchsia-400 hover:text-red-950',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                >
                                                {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                 </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center">
                                    <button
                                        type="button"
                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />

                                    </button>
                                    {/* Notifications and User Profile */}
                                    <Menu as="div" className="relative ml-3">
                                        <MenuButton className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none">
                                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                        </MenuButton>
                                        <MenuItems className="absolute right-0 mt-2 w-48 bg-white py-1 shadow-lg">
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    <a href={item.href} className="block px-4 py-2 text-sm text-gray-700">
                                                        {item.name}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                            <DisclosureButton className="md:hidden">
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                            </DisclosureButton>
                        </div>
                    </div>
                </Disclosure>
                {/* Content */}
                <header className="bg-white-shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" >

                    </div>
                </main>
            </div>
        </>
        
    )
}