
import type { CheckList } from "@prisma/client";
import { BsSearch } from "react-icons/bs";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node"
import { Form, Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server"


//import stylesheets for the page
import styles from '../../styles/app.css';
import main from '../../styles/main.css';
// link imported styles to the page
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: main },
    ];
}
//set the amount of items to be displayed per page
let paginationAmount = 5;

//loaderdata defines types for the data returned by the loader function
type LoaderData = { lists: Array<CheckList>, page: number }
//loader function fetches data from the database every time the page is loaded
export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    //get parameters for search and pagination
    const Search = url.searchParams.get("search")
    const page = url.searchParams.get("page") || "1"
    //check type of search parameter
    if (Search) {
        if (typeof Search != "string") {
            return new Error("Search must be a string")
        }
        //if search parameter is a string, search the database for lists with a name that contains the search parameter
        const list = await db.checkList.findMany({
            where: { ProjectNummer: { contains: Search } },
        })
        //return the found lists and the page number
        const data: LoaderData = { lists: list, page: parseInt(page) }
        return json(data)
    }
    //if no search parameter is given, return all lists with pagination
    const lists = await db.checkList.findMany({
        skip: (Number(page) - 1) * paginationAmount,
        take: paginationAmount,
    });

    if (!lists) {
        throw new Error("No lists found");
    }

    const data: LoaderData = { lists, page: parseInt(page) }
    return json(data)
}


export default function success() {
    //get the data returned by the loader function
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useLoaderData<LoaderData>();
    //define variables to render pagination buttons
    let pagination
    //logic for pagination buttons
    if (data.lists.length / paginationAmount == 0) {
        pagination = null
    } if (data.lists.length >= paginationAmount && data.page == 1) {
        pagination = <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2" name="page" value={data.page + 1}>&#62;</button>
    } if (data.lists.length <= paginationAmount && data.page > 1) {
        pagination = <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" name="page" value={data.page - 1}>&#60;</button>
    } if (data.lists.length >= paginationAmount && data.page > 1) {

        pagination = <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-1" name="page" value={data.page + 1}>&#62;</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-1" name="page" value={data.page - 1}>&#60;</button>
        </>

    }
    //render the page
    return (
        <div className="bg-contact2">
            <div className="container-contact2">
                <div className="wrap-contact2">
                    <div className="w-full mb-10 bg-gray-100 rounded-xl overflow-hidden shadow-md p-4 undefined">
                        {/* search form */}
                        <Form className="flex">
                            <BsSearch className="mr-2 mt-3" /><input name="search" placeholder="Search Project nummer" className=" py-3 w-full appearance-none bg-gray-100 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500" type={"search"}></input>
                        </Form>
                    </div>
                    {/* render all the lists */}
                    {data.lists.map((list) => (
                        //if list is a webshop redirect to webshop link
                        list.isWebshop ? (
                            <Link to={"../webshop/" + list.Id} key={list.Id}>
                                <div className="w-full my-5 bg-gray-200 rounded-xl overflow-hdden shadow-md p-4 undefined" >
                                    <h4 className="text-center">Webshop</h4>
                                    <h4 className="text-lg text-left">ProjectNaam: {list.ProjectNaam}</h4>
                                    <h4 className="text-lg">  ProjectNummer: {list.ProjectNummer}</h4>
                                    <h4 className="text-lg">KlantNaam: {list.KlantNaam}</h4>
                                    <h4 className="text-lg">KlantNummer: {list.KlantNummer}</h4>
                                    <h4 className="text-lg text-left">
                                        Verantwoordelijke: {list.Verantwoordelijke}
                                        <span className="text-lg float-right">Budget: € {list.Budget}</span>
                                    </h4>
                                </div>
                            </Link>
                        ) : (
                            <Link to={"../website/" + list.Id} key={list.Id}>
                                <div className="w-full my-5 bg-gray-200 rounded-xl overflow-hdden shadow-md p-4 undefined" >
                                    <h4 className="text-center">Website</h4>


                                    <h4 className="text-lg text-left">ProjectNaam: {list.ProjectNaam}</h4>
                                    <h4 className="text-lg">  ProjectNummer: {list.ProjectNummer}</h4>
                                    <h4 className="text-lg">KlantNaam: {list.KlantNaam}</h4>
                                    <h4 className="text-lg">KlantNummer: {list.KlantNummer}</h4>
                                    <h4 className="text-lg text-left">
                                        Verantwoordelijke: {list.Verantwoordelijke}
                                        <span className="text-lg float-right">Budget: € {list.Budget}</span>
                                    </h4>
                                </div>
                            </Link>
                        )



                    ))}
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
    )
}