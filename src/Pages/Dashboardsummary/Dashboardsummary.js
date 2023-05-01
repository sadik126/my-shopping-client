import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import product from '../../images/product.png';
const Dashboardsummary = () => {
    const { data: products = [], isError, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://my-shopping-server-side.vercel.app/products')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className=" text-primary-content grid lg:grid-cols-2 gap-8">

                <div className="flex bg-primary items-center" style={{ width: '72%' }}>
                    <div className='stat' style={{ width: '50%' }}>
                        <div className="stat-title"> <img src={product} alt="" /> Total Products</div>
                        <div className="stat-value">{products?.length}</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm btn-success">Add Products</button>
                        </div>

                    </div>


                    <div>
                        <div className="radial-progress" style={{ "--value": products?.length }}>{products?.length} products</div>
                    </div>

                </div>

                <div className="stat">
                    <div className="stat-title">Total Revenew</div>
                    <div className="stat-value">$89,400</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm">Withdrawal</button>
                        <button className="btn btn-sm">deposit</button>
                    </div>
                </div>

            </div>

            <div className="overflow-x-auto my-16">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-orange-700'>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Products</th>
                            <th>Payment</th>
                            <th>Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>T shirt</td>
                            <td><span className="badge badge-success">500 bdt</span></td>
                            <td><span className="badge badge-success">Payment Success</span></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Polo T shirt</td>
                            <td><span className="badge badge-error">500 bdt</span></td>
                            <td><span className="badge badge-error">Payment not successfull</span></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Mens shirt</td>
                            <td><span className="badge badge-warning">500 bdt</span></td>
                            <td><span className="badge badge-warning">Payment Pending</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Dashboardsummary;