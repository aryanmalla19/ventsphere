import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import FlashMessage from '@/components/ui/FlashMessage';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { type BreadcrumbItem } from '@/types';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
}

interface PaginatedUsers {
    data: User[];
    current_page: number;
    last_page: number;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
}

interface PageProps {
    flash: {
        message?: string;
    };
    data: PaginatedUsers;
}

export default function Index() {
    const { flash = {}, data: paginatedUsers } = usePage().props as PageProps;
    const [showAlert, setShowAlert] = useState(!!flash.message);

    useEffect(() => {
        if (flash.message) {
            const timer = setTimeout(() => setShowAlert(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash.message]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />


            {showAlert && flash.message && (
                <FlashMessage message={flash.message} variant="success" />
            )}

           <div className="m-5">
               <div className="flex justify-end items-center mb-4">
                   <Link href={route('users.create')}>
                       <Button>Create a User</Button>
                   </Link>
               </div>

               <div className="rounded-sm mb-5 border border-gray-200">
                   <Table>
                       <TableHeader className="bg-muted/50 border-t font-medium ">
                           <TableRow>
                               <TableHead>ID</TableHead>
                               <TableHead>Name</TableHead>
                               <TableHead>Email</TableHead>
                               <TableHead>Role</TableHead>
                               <TableHead>Actions</TableHead>
                           </TableRow>
                       </TableHeader>
                       <TableBody>
                           {paginatedUsers.data.length ? (
                               paginatedUsers.data.map((user) => (
                                   <TableRow key={user.id}>
                                       <TableCell>{user.id}</TableCell>
                                       <TableCell>{user.name}</TableCell>
                                       <TableCell>{user.email}</TableCell>
                                       <TableCell>{user.role}</TableCell>
                                       <TableCell>
                                           <Link className="mr-2" href={route('users.edit', user.id)}>
                                               <Button size="sm" variant="outline">Edit</Button>
                                           </Link>
                                           <Link href={route('users.destroy', user.id)}>
                                               <Button size="sm" variant="destructive">Delete</Button>
                                           </Link>
                                       </TableCell>
                                   </TableRow>
                               ))
                           ) : (
                               <TableRow>
                                   <TableCell colSpan={4} className="text-center py-6">
                                       No users found.
                                   </TableCell>
                               </TableRow>
                           )}
                       </TableBody>
                   </Table>
               </div>
               {paginatedUsers.links.length > 3 && (
                   <Pagination>
                       <PaginationContent>
                           {paginatedUsers.links.map((link, index) => {
                               const label = link.label;
                               const isPrevious = label.toLowerCase().includes('previous');
                               const isNext = label.toLowerCase().includes('next');
                               const isEllipsis = label === '...';

                               return (
                                   <PaginationItem key={index}>
                                       {isEllipsis ? (
                                           <PaginationEllipsis />
                                       ) : isPrevious ? (
                                           <PaginationPrevious
                                               href={link.url ?? '#'}
                                               className={link.url ? '' : 'pointer-events-none opacity-50'}
                                           />
                                       ) : isNext ? (
                                           <PaginationNext
                                               href={link.url ?? '#'}
                                               className={link.url ? '' : 'pointer-events-none opacity-50'}
                                           />
                                       ) : (
                                           <PaginationLink
                                               href={link.url ?? '#'}
                                               isActive={link.active}
                                               className={link.url ? '' : 'pointer-events-none opacity-50'}
                                               dangerouslySetInnerHTML={{ __html: label }}
                                           />
                                       )}
                                   </PaginationItem>
                               );
                           })}
                       </PaginationContent>
                   </Pagination>
               )}
           </div>
        </AppLayout>
    );
}
