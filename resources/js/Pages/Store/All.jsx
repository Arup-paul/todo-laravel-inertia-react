import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import NavLink from "@/Components/NavLink.jsx";

const All = ({auth,stores}) => {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Store</h2>}
        >
            <Head title="All Store" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                        {/*     Add button */}
                        <div className="flex justify-end">
                            <NavLink href={route('stores.create')}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold pt-2 pb-2  px-4 my-2 rounded">
                                Add Store
                            </NavLink>
                        </div>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">#</th>
                                    <th className=" border px-4 py-2">Source</th>
                                    <th className=" border px-4 py-2">Type</th>
                                    <th className=" border px-4 py-2">Details</th>
                                    <th className=" border px-4 py-2">TimeStamp</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                stores.map((data,index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{index+1}</td>
                                        <td className="border px-4 py-2">{data.source}</td>
                                        <td className="border px-4 py-2">{data.type}</td>
                                        <td className="border px-4 py-2">
                                            {
                                            data.type === 'Auth' ?
                                                (
                                                    <div>
                                                        <p><strong>Shop:</strong> {data?.details?.shop_name}</p>
                                                        <p><strong>Code:</strong> {data?.details?.code}</p>
                                                        <p><strong>Success:</strong> {data?.details?.success}</p>
                                                        <p><strong>Message:</strong> {data?.details?.message}</p>
                                                        <p><strong>Extra Info:</strong> {data?.details?.extra_info}</p>
                                                    </div>

                                                ) :  (
                                                    <div>
                                                        <p><strong>Seller:</strong> {data?.details?.seller_name}</p>
                                                        <p><strong>Message Type:</strong> {data?.details?.message_type}</p>
                                                        <p><strong>Order Status:</strong> {data?.details?.order_status}</p>
                                                        <p><strong>Trade Order Id:</strong> {data?.details?.trade_order_id}</p>
                                                        <p><strong>Trade Order Line Id:</strong> {data?.details?.trade_order_line_id}</p>
                                                        <p><strong>Status Update Time:</strong> {data?.details?.status_update_time}</p>
                                                        <p><strong>Site:</strong> {data?.details?.site}</p>
                                                    </div>
                                                )

                                        }
                                        </td>
                                        <td className="border px-4 py-2">{data.timestamp}</td>
                                    </tr>
                                ))
                            }
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
