import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Landing(){
    return (
        <div className="my-5 flex justify-between ">
            <div className="w-1/2">
                <h1 className="text-5xl leading-tight dark:text-white mb-2 text-[#092327]">
                    <span className="font-bold">Get Paid Early</span><br/>
                    save automatically <br/>
                    all your pay.
                </h1>
                <p className="mb-2 text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur corporis facere fuga labore quidem quod vitae. A accusamus adipisci corporis dicta eos est iure labore magnam magni, neque non porro sequi, <br/>
                    ullam ut voluptatibus? Alias aliquam at est facilis molestias nulla quasi. Amet assumenda fuga ipsum rerum, veniam voluptatibus?
                </p>
                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input type="email" placeholder="Your email" />
                    <Button type="submit">
                        Get Started
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
