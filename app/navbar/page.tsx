"use client"
import { useState } from "react"
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
import {Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';


const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

const navigation = [
    { name: 'Home', href :'#', current: true},
    { name: 'Products', href :'#', current: true},
    { name: 'About', href :'#', current: true},
    { name: 'Contact', href :'#', current: true},
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
                <Disclosure as="nav" className="bg-gray-800">
                </Disclosure>
            </div>
        </>
        
    )
}