import { Navbar } from '@/components/custom/navbar';
export default function Welcome() {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center lg:px-8 lg:py-4 dark:bg-[#0a0a0a]">
                <Navbar />
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
