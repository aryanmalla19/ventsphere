import { Navbar } from '@/components/custom/Navbar';
import Landing from '@/components/custom/Home/Landing';
import { Footer } from '@/components/custom/Footer';
export default function Welcome() {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center lg:px-8 lg:py-4 dark:bg-[#0a0a0a]">
                <Navbar />
                <div className="flex max-w-7xl w-full  justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <Landing />
                </div>
                {/*Todo:Make Alert dynamic for notifications*/}
                {/*<Alert className="fixed w-5/12 lg:w-4/12 top-20 right-10">*/}
                {/*    <CheckCircle2Icon />*/}
                {/*    <AlertTitle>Success! Your changes have been saved</AlertTitle>*/}
                {/*    <AlertDescription>*/}
                {/*        This is an alert with icon, title and description.*/}
                {/*    </AlertDescription>*/}
                {/*</Alert>*/}
                <Footer />
            </div>
        </>
    );
}
