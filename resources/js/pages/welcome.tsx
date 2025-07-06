import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-6xl">
                    <nav className="flex items-center justify-between gap-4 dark:text-white">
                        <div className="flex items-center gap-4">
                            <h1 className="font-bold text-xl">VentSphere</h1>
                            <div className="flex gap-4 items-center">
                                <a className="bg-green-400 px-5 py-2 rounded-2xl">Personal</a>
                                <a>Business</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <ul className="flex items-center gap-4">
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Help</li>
                                <li>98*******</li>
                            </ul>
                            <div className="flex items-center gap-4">
                                <a href={ route('login') }>Login</a>
                                <a href={route('register')} className="bg-green-400 px-5 py-2 rounded-2xl">Register</a>
                            </div>
                        </div>

                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
