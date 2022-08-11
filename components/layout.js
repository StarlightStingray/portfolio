import { forwardRef } from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'

const MyLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props
    return (
        <Link href={href}>
            <a ref={ref} {...rest}>
                {children}
            </a>
        </Link>
    )
})

export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen bg-forestghosts text-zinc-600 bg-background-pattern flex justify-center'>
            <header className='m-4 bg-cambridgeblue bg-background-pattern mb-8 py-4'>
                <div className='container flex gap-10 tracking-widest font-thin flex-row'>
                    <Menu as="div" className="relative inline-block text-left">
                        <MyLink className={'pl-8'} href='/'>
                            HOME
                        </MyLink>
                        <Menu.Button className={`tracking-widest pl-12`}>MORE</Menu.Button>
                        <Menu.Items className="absolute mt-2 w-56 origin-top-right bg-cambridgeblue bg-background-pattern focus:outline-none z-10">
                            <Menu.Item>
                                <MyLink href='/projects' className="group flex w-full items-center px-2 py-8">
                                    PROJECTS
                                </MyLink>
                            </Menu.Item>
                            <Menu.Item>
                                <MyLink href='/contract' className="group flex w-full items-center px-2 py-8">
                                    CONTRACT
                                </MyLink>
                            </Menu.Item>
                            <Menu.Item>
                                <MyLink href='/about' className="group flex w-full items-center px-2 py-8">
                                    ABOUT
                                </MyLink>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </header>
            <main className='container mx-auto flex-1'>{children}</main>
            <footer className='bg-cambridgeblue bg-background-pattern m-4 mt-8 py-4'>
                <div className='container mx-auto flex justify-center tracking-widest font-thin text-zinc-600'>
                    &copy; 2022 Sarah Laplace
                </div>
            </footer>
        </div>
    );
}
