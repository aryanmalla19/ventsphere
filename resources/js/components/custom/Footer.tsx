import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export function Footer(){
    return (
        <footer className="w-full">
            <div className="flex justify-between mt-10 dark:text-gray-300">
                <div className="flex items-center self-start">
                    <img className="w-10 h-10" src="/ventsphere_logo.png" alt="ventsphere_logo" />
                    <h1 className="text-[#092327] dark:text-white text-xl ml-2 font-bold">VentSphere</h1>
                </div>

                <div>
                    <h1 className="font-semibold text-lg mb-2 text-[#092327] dark:text-white">Brand</h1>
                    <ul className="text-sm leading-7">
                        <li>About Us</li>
                        <li>How It Works</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-2 text-[#092327] dark:text-white">Solutions</h1>
                    <ul className="text-sm leading-7">
                        <li>Small Business</li>
                        <li>Freelancers</li>
                        <li>Customers</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-2 text-[#092327] dark:text-white">Legal & Safety</h1>
                    <ul className="text-sm leading-7">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-2 text-[#092327] dark:text-white">Support</h1>
                    <ul className="text-sm leading-7">
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Resources & Hotlines</li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-2 text-[#092327] dark:text-white">Follow us on</h1>
                    <div className="flex gap-3 ">
                        <div className="p-1 rounded-sm bg-[#092327] text-white">
                            <TwitterIcon />
                        </div>
                        <div className="p-1 rounded-sm bg-[#092327] text-white">
                            <LinkedinIcon />
                        </div>
                        <div className="p-1 rounded-sm bg-[#092327] text-white">
                            <FacebookIcon />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <p className="text-[#] font-semibold text-sm text-center">&copy; VentSphere 2025. All Rights Reserved.</p>
        </footer>
    );
}
