import React from 'react'
import Layout from '../../Pages/Layout'

export const Organisation_Details = () => {
    return (
        <Layout>
            <div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:no-scrollbar">
                    <table className="w-full md:text-sm text-xs text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-Inter  ">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 font-Inter">
                                    Value
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 font-Inter">
                                <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                                    Business Name
                                </th>
                                <td className="px- md:py-4 py-3 font-Inter">
                                    ABC, Inc.
                                </td>

                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                                    Period start
                                </th>
                                <td className="px md:py-4 py-3 font-Inter">
                                    01-jul-15
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                                <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                                    Period end
                                </th>
                                <td className="px- md:py-4 py-3 font-Inter">
                                    30-jun-16
                                </td>

                            </tr>

                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                                <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                                    Number of common share at year-end
                                </th>
                                <td className="px- md:py-4 py-3 font-Inter">
                                    50000
                                </td>

                            </tr>

                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                                <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                                    Number of preferred shares at year-end
                                </th>
                                <td className="px- md:py-4 py-3 font-Inter">
                                    40000
                                </td>

                            </tr>

                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b ">
                                <th scope="row" className="px-6  md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter ">
                                    Weighted average number of common shares during the period
                                </th>
                                <td className="px- md:py-4 py-3 font-Inter">
                                    45000
                                </td>

                            </tr>

                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                                <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                                    Common share price at the period end
                                </th>
                                <td className="px- md:py-4 py-3 font-Inter">
                                    20
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 border-b">
                                <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                                    Preferred share price at the period end
                                </th>
                                <td className="px- md:py-4 py-3 font-Inter">
                                    25
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 md:py-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white font-Inter">
                                    Number of employees
                                </th>
                                <td className="px- md:py-4 py-3 font-Inter">
                                    150
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </Layout>

    )
}
