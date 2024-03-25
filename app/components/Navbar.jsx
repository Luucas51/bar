/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';
import { TbMenuDeep } from "react-icons/tb";
import Logo from '../../public/images/logo-principal-doré.png'

export default function Navbar() {

   useEffect(() => {
      require('preline');
    }, []);
   
   return (
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm bg-white">
         <nav className="w-full sm:mx-20 px-4 sm:flex sm:items-center sm:justify-center py-4 border-b">
            <div className="flex items-center justify-between">
            <Image src={Logo} alt='Logo' width={75} height={75} />
               <div className="sm:hidden">
                  <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <TbMenuDeep className='hs-collapse-toggle'/>
                  </button>
               </div>
            </div>
            <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow xl:block">
               <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                  <a className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">Landing</a>
                  <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Account</a>
                  <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Work</a>
                  <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Blog</a>
               </div>
            </div>
         </nav>
      </header>

    //   <header className='w-full text-white my-6'>
    //     <nav className='max-w-screen-md sm:mx-auto flex justify-between items-center mx-8'>
    //         <div>
    //             {/* Remplacez "logo.svg" par le chemin de votre logo */}
    //             <Image src={Logo} alt='Logo' className='block md:hidden' width={150} height={150} />
    //         </div>
    //         <div className='border border-white border-opacity-20 backdrop-blur-sm bg-white/5 space-x-1 justify-center p-1.5 rounded-lg font-medium hidden md:flex'>
    //             <Link className='px-6 py-2.5 bg-slate-50 bg-opacity-5 rounded-md' href='/'>Accueil</Link>
    //             <Link className='px-6 py-2.5 hover:bg-slate-50 hover:bg-opacity-5 rounded-md' href='/'>Présentation</Link>
    //             <Link className='px-6 py-2.5 hover:bg-slate-50 hover:bg-opacity-5 bg-opacity-10 rounded-md' href='/'>Les cartes</Link>
    //             <Link className='px-6 py-2.5 hover:bg-slate-50 hover:bg-opacity-5 bg-opacity-10 rounded-md' href='/'>Galerie photo</Link>
    //             <Link className='px-6 py-2.5 hover:bg-slate-50 hover:bg-opacity-5 bg-opacity-10 rounded-md' href='/'>Nous contacter</Link>
    //         </div>
    //         <div>
    //             <TbMenuDeep className='block md:hidden' />
    //         </div>
    //     </nav>
    // </header>

    // <header className='w-full text-black my-6'>
    //     <nav className='max-w-screen-md sm:mx-auto flex justify-between items-center mx-8'>
    //         <div>
    //             <Image src={Logo} alt='Logo' className='block md:hidden' width={70} height={70} />
    //         </div>
    //         <div className='border border-black border-opacity-10 bg-slate-50 bg-opacity-50 space-x-1 justify-center p-1.5 rounded-lg font-medium hidden md:flex'>
    //             <Link className='px-6 py-2.5 bg-slate-500 bg-opacity-10 rounded-md' href='/'>Accueil</Link>
    //             <Link className='px-6 py-2.5 hover:bg-slate-500 hover:bg-opacity-5 rounded-md' href='/'>Présentation</Link>
    //             <Link className='px-6 py-2.5 hover:bg-slate-500 hover:bg-opacity-5 bg-opacity-10 rounded-md' href='/'>Les cartes</Link>
    //             <Link className='px-6 py-2.5 hover:bg-slate-500 hover:bg-opacity-5 bg-opacity-10 rounded-md' href='/'>Galerie photo</Link>
    //             <Link className='px-6 py-2.5 hover:bg-slate-500 hover:bg-opacity-5 bg-opacity-10 rounded-md' href='/'>Nous contacter</Link>
    //         </div>
    //         <div>
    //             <TbMenuDeep className='block md:hidden h-9 w-9 border rounded-lg p-1'/>
    //         </div>
    //     </nav>
    // </header>
   )
}
