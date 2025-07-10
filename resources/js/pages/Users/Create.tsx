import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ReactFormState } from 'react-dom/client';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create A User',
        href: '/users/create',
    },
];

export default function Create() {
    const { data, setData, processing, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        remarks: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('users.store'));
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleSubmit} action={ route('users.store') } method="POST" className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" type="text" value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={data.email} onChange={(e) => setData('email', e.target.value)}></Input>
                        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" value={data.password} onChange={(e) => setData('password', e.target.value)}></Input>
                        {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                    </div>

                    <div>
                        <Label htmlFor="remarks">Remarks</Label>
                        <Textarea placeholder="Remarks" value={data.remarks} onChange={(e) => setData('remarks', e.target.value)}></Textarea>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </div>
        </AppLayout>
    );
}
