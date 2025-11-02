import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Landing(){
    return (
        <div className="my-5 flex gap-2 justify-between ">
            <div className="w-1/2 self-center">
                <h1 className="text-5xl leading-tight dark:text-white mb-2 text-[#092327]">
                    <span className="font-bold">Talk it out. Feel lighter.</span><br/>
                    Your thoughts deserve <br/>
                    to be heard
                </h1>
                <p className="mb-5 text-gray-600 dark:text-gray-300">
                    VentSphere is your safe corner on the internet — a comforting space where you can speak your mind without fear of judgment, pressure, or unwanted advice. It’s where you can release the thoughts you’ve been carrying, unburden your heart, and be heard by someone who genuinely cares. Whether it’s a small frustration, a heavy worry, or simply the need to feel understood, we’re here to listen and be the friend on the other side.                </p>
                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input type="email" placeholder="Your email" />
                    <Button type="submit">
                        Start Venting
                    </Button>
                </div>
                {/*TODO:Add supported by others company*/}
            </div>
            <div className="w-1/2">
                <img className="rounded-xl" src="https://media.istockphoto.com/id/1330734910/photo/connecting-with-nature.jpg?s=1024x1024&w=is&k=20&c=3eYMyBPmxB1dQBD8sAm05mvZSEQK6-ufur7bmjotPws=" alt="healing" />
            </div>
        </div>
    );
}
