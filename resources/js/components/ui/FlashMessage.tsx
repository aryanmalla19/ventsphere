import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Megaphone } from 'lucide-react';

interface Flash {
    message?: string;
    type?: 'success' | 'error' | 'warning' | 'info';
}

export default function FlashMessage() {
    const { flash = {} } = usePage().props as { flash: Flash };
    const [show, setShow] = useState(!!flash.message);

    useEffect(() => {
        if (flash.message) {
            setShow(true);
            const timeout = setTimeout(() => setShow(false), 1000);
            return () => clearTimeout(timeout);
        }
    }, [flash.message]);

    if (!show || !flash.message) return null;

    const variant = flash.type || 'success';

    return (
       <div className="fixed top-10 right-10 fade-in">
           <Alert variant={variant} className="mb-4 transition-opacity duration-500">
               <Megaphone className="h-24 w-24" />
               <AlertTitle>{variant.charAt(0).toUpperCase() + variant.slice(1)}</AlertTitle>
               <AlertDescription>{flash.message}</AlertDescription>
           </Alert>
       </div>
    );
}
