import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";

const All = ({auth,shops}) => {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Shop</h2>}
        >
            <Head title="All Shops" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">#</th>
                                    <th className=" border px-4 py-2">Shop Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shops.length > 0  && shops.map((shop,key) => (
                                    <tr key={shop.id}>
                                        <td className="border px-4 py-2">{key+1}</td>
                                        <td className="border px-4 py-2">{shop.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                            </div>

                        </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default All;
