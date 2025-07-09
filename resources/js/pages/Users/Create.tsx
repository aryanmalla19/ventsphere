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
        first_name: '',
        last_name: '',
        username: '',
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
                        <Label htmlFor="first_name">First Name</Label>
                        <Input name="first_name" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)}></Input>
                    </div>

                    <div>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input name="last_name" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)}></Input>
                    </div>

                    <div>
                        <Label htmlFor="username">Username</Label>
                        <Input name="username" value={data.username} onChange={(e) => setData('username', e.target.value)}></Input>
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" value={data.email} onChange={(e) => setData('email', e.target.value)}></Input>
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" value={data.password} onChange={(e) => setData('password', e.target.value)}></Input>
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
