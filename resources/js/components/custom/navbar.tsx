import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export function Navbar() {
    return (
        <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-6xl">
            <nav className="flex items-center justify-between gap-4 dark:text-white">
                <div className="flex items-center gap-4">
                    <img className="w-10 h-10" src="/ventsphere_logo.png" alt="ventsphere_logo" />
                    <h1 className="font-bold text-xl">VentSphere</h1>
                </div>

                <div className="flex items-center gap-4">
                    <ul className="flex items-center gap-4">
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Learn</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" asChild>
                        <Link href={ route('login') }>Login</Link>
                    </Button>
                    <Button variant="default" asChild>
                        <Link href={ route('register') }>Register</Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}
