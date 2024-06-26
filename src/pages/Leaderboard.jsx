import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const Leaderboard = () => {
    return (
        <div className="overflow-x-auto h-full w-3/4 flex-wrap justify-around mx-auto">
            <h1 className=" text-4xl text-center mb-5">LEADERBOARD</h1>
            <Table>
                <TableHead>
                    <TableHeadCell>Product name</TableHeadCell>
                    <TableHeadCell>Color</TableHeadCell>
                    <TableHeadCell>Category</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Edit</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Apple MacBook Pro 17"'}
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>$2999</TableCell>
                        
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                        </TableCell>
                        <TableCell>White</TableCell>
                        <TableCell>Laptop PC</TableCell>
                        <TableCell>$1999</TableCell>
                        
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                        <TableCell>Black</TableCell>
                        <TableCell>Accessories</TableCell>
                        <TableCell>$99</TableCell>
                        
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Leaderboard
