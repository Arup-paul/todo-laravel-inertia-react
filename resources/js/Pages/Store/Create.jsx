import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import NavLink from "@/Components/NavLink.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";


const Create = ({auth,shops,sellers}) => {

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        source: '',
        type: '',

        shop_id: '',
        code: '',
        message:'',
        extra_info:'',

        seller_id: '',
        order_status: '',
        trade_order_id: '',
        trade_order_line_id: '',
        site: '',


    });

    const submit = (e) => {
        e.preventDefault();

        post(route('stores.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add New Stores</h2>}
        >
            <Head title="Create Store" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                        {/*     Add button */}
                        <div className="flex justify-end">
                            <NavLink href={route('stores.index')}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold pt-2 pb-2  px-4 my-2 rounded">
                                Back
                            </NavLink>
                        </div>
                                <form onSubmit={submit} className="mt-6 space-y-6">
                                    <div>
                                        <InputLabel htmlFor="Source" value="Source" />

                                        <TextInput
                                            id="Source"
                                            className="mt-1 block w-full"
                                            value={data.source}
                                            onChange={(e) => setData('source', e.target.value)}

                                            isFocused
                                            autoComplete="Source"
                                        />

                                        <InputError className="mt-2" message={errors.source} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="type" value="Type" />
                                         <select
                                                id="type"
                                                name="type"
                                                className="mt-1 block w-full"
                                                value={data.type}
                                                onChange={(e) => setData('type', e.target.value)}

                                                autoComplete="type"
                                         >
                                            <option value="">Select Type</option>
                                            <option value="Auth">Auth</option>
                                            <option value="Order">Order</option>

                                         </select>


                                        <InputError className="mt-2" message={errors.type} />
                                    </div>

                                    {
                                        data.type === 'Auth' &&
                                        <>
                                            <div>
                                                <InputLabel htmlFor="shop_id" value="Shop" />
                                                <select
                                                    id="type"
                                                    name="type"
                                                    className="mt-1 block w-full"
                                                    value={data.shop_id}
                                                    onChange={(e) => setData('shop_id', e.target.value)}

                                                    autoComplete="type"
                                                >
                                                    <option value="">Select Shop</option>
                                                    {
                                                        shops.map((shop) => (
                                                            <option key={shop.id} value={shop.id}>{shop.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <InputError className="mt-2" message={errors.shop_id} />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="code" value="Code" />
                                                <TextInput
                                                    id="code"
                                                    className="mt-1 block w-full"
                                                    value={data.code}
                                                    onChange={(e) => setData('code', e.target.value)}
                                                    autoComplete="code"
                                                />
                                                <InputError className="mt-2" message={errors.code} />
                                            </div>



                                            <div>
                                                <InputLabel htmlFor="message" value="Message" />
                                                <TextInput
                                                    id="message"
                                                    className="mt-1 block w-full"
                                                    value={data.message}
                                                    onChange={(e) => setData('message', e.target.value)}
                                                    autoComplete="message"
                                                />
                                                <InputError className="mt-2" message={errors.message} />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="extra_info" value="Extra Info" />
                                                <TextInput
                                                    id="extra_info"
                                                    className="mt-1 block w-full"
                                                    value={data.extra_info}
                                                    onChange={(e) => setData('extra_info', e.target.value)}
                                                    autoComplete="extra_info"
                                                />
                                                <InputError className="mt-2" message={errors.extra_info} />
                                            </div>
                                        </>
                                    }

                                    {
                                        data.type === 'Order' &&
                                           <>
                                               <div>
                                                   <InputLabel htmlFor="seller_id" value="Seller" />
                                                   <select
                                                       id="type"
                                                       name="type"
                                                       className="mt-1 block w-full"
                                                       value={data.seller_id}
                                                       onChange={(e) => setData('seller_id', e.target.value)}

                                                       autoComplete="type"
                                                   >
                                                       <option value="">Select Seller</option>
                                                       {
                                                           sellers.map((seller) => (
                                                               <option key={seller.id} value={seller.id}>{seller.name}</option>
                                                           ))
                                                       }
                                                   </select>
                                                   <InputError className="mt-2" message={errors.shop_id} />
                                               </div>



                                                  <div>
                                                        <InputLabel htmlFor="order_status" value="Order Status" />
                                                        <TextInput
                                                            id="order_status"
                                                            className="mt-1 block w-full"
                                                            value={data.order_status}
                                                            onChange={(e) => setData('order_status', e.target.value)}
                                                            autoComplete="order_status"
                                                        />
                                                        <InputError className="mt-2" message={errors.order_status} />
                                                    </div>

                                                    <div>
                                                        <InputLabel htmlFor="trade_order_id" value="Trade Order Id" />
                                                        <TextInput
                                                            id="trade_order_id"
                                                            className="mt-1 block w-full"
                                                            value={data.trade_order_id}
                                                            onChange={(e) => setData('trade_order_id', e.target.value)}
                                                            autoComplete="trade_order_id"
                                                        />
                                                        <InputError className="mt-2" message={errors.trade_order_id} />
                                                    </div>

                                                    <div>
                                                        <InputLabel htmlFor="trade_order_line_id" value="Trade Order Line Id" />
                                                        <TextInput
                                                            id="trade_order_line_id"
                                                            className="mt-1 block w-full"
                                                            value={data.trade_order_line_id}
                                                            onChange={(e) => setData('trade_order_line_id', e.target.value)}
                                                            autoComplete="trade_order_line_id"
                                                        />
                                                        <InputError className="mt-2" message={errors.trade_order_line_id} />
                                                    </div>

                                                   <div>
                                                        <InputLabel htmlFor="site" value="Site" />
                                                        <TextInput
                                                            id="site"
                                                            className="mt-1 block w-full"
                                                            value={data.site}
                                                            onChange={(e) => setData('site', e.target.value)}
                                                            autoComplete="site"
                                                        />
                                                        <InputError className="mt-2" message={errors.site} />
                                                    </div>

                                            </>

                                    }



                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>Save</PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600">Saved.</p>
                                        </Transition>
                                    </div>
                                </form>



                            </div>

                        </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
