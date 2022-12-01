import { Logs } from '@prisma/client';
import { json, LoaderFunction } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';
import moment from 'moment';
import { db } from '~/utils/db.server';
//import stylesheets for the page
import styles from '../../../styles/app.css';
import main from '../../../styles/main.css';
// link imported styles to the page
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: main },
    ];
}

const paginationAmount = 5;

type LoaderData = { Logs: Array<Logs>, page: number }
export const loader: LoaderFunction = async ({ request, params }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';
    const logs = await db.logs.findMany({
        where: { CheckListId: params.logs },
        orderBy: { Version: 'asc' },
        skip: (Number(page) - 1) * paginationAmount,
        take: paginationAmount,
    });
    if (!logs) {
        throw new Error('No logs found');
    }
    const data: LoaderData = { Logs: logs, page: parseInt(page) }
    return json(data)
}

export default function logs() {
    const data = useLoaderData<LoaderData>();
    let pagination
    if (data.Logs.length / paginationAmount == 0) {
        pagination = null
    } if (data.Logs.length >= paginationAmount && data.page == 1) {
        pagination = <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" name="page" value={data.page + 1}>&#62;</button>
    } if (data.Logs.length <= paginationAmount && data.page > 1) {
        pagination = <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" name="page" value={data.page - 1}>&#60;</button>
    } if (data.Logs.length >= paginationAmount && data.page > 1) {

        pagination = <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-1" name="page" value={data.page - 1}>&#60;</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-1" name="page" value={data.page + 1}>&#62;</button>

        </>

    }
    return (
        <>
            <div className="bg-contact2">
                <div className="container-contact2">
                    <div className="wrap-contact2">

                        {data.Logs.length == 0 ? "no logs found" :
                            data.Logs.map((log) => (
                                <Link to={"/logs/" + log.CheckListId + "/" + log.Id} key={log.Id}>
                                    <div className="w-full my-5 bg-gray-200 rounded-xl overflow-hdden shadow-md p-4 undefined" >
                                        <h4 className='text-lg'>Version: {log.Version}</h4>
                                        <h4 className="text-lg text-left">Created on: {moment(new Date(log.createdAt)).format("DD/MM/yyyy HH:mm:ss")}</h4>
                                        <h4 className="text-lg">Edited by: {log.LastUser}</h4>
                                    </div>
                                </Link>
                            ))
                        }
                        {/* render all the lists */}
                        {/* render buttons for pagination */}
                        {/* method=get to call loaderfunction instead of action */}
                        <Form method="get">
                            <div className="flex justify-center">
                                {pagination}
                            </div>
                        </Form>
                    </div>
                </div>

            </div>
        </>
    )
}