
import type { CheckList } from "@prisma/client";
import { BsSearch } from "react-icons/bs";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node"
import { Form, Link, useLoaderData, useSubmit } from "@remix-run/react";
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
    const active = url.searchParams.get("isActive") || "false"
    //check type of search parameter
    if (Search) {
        if (typeof Search != "string") {
            return new Error("Search must be a string")
        }
        //if search parameter is a string, search the database for lists with a name that contains the search parameter
        var list = await db.checkList.findMany({
            where: { ProjectNummer: { contains: Search } },

        })
        if (list.length == 0) {
            list = await db.checkList.findMany({
                where: { ProjectNaam: { contains: Search } },
            })

        }
        if (list.length == 0) {
            list = await db.checkList.findMany({
                where: { KlantNaam: { contains: Search } },
            })
        }
        if (list.length == 0) {
            list = await db.checkList.findMany({
                where: { KlantNummer: { contains: Search } },
            })
        }
        //return the found lists and the page number
        const data: LoaderData = { lists: list, page: parseInt(page) }
        return json(data)
    }
    //if no search parameter is given, return all lists with pagination
    var lists
    if (active == "false") {
       lists = await db.checkList.findMany({
            skip: (Number(page) - 1) * paginationAmount,
            take: paginationAmount,
        });
    }else if(active == "true"){
       
        lists = await db.checkList.findMany({
            skip: (Number(page) - 1) * paginationAmount,
            take: paginationAmount,
            where: { isActive: true }
        });
    }


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
    } else if (data.lists.length >= paginationAmount && data.page == 1) {
        pagination = <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2" name="page" value={data.page + 1}>&#62;</button>
    } else if (data.lists.length <= paginationAmount && data.page > 1) {
        pagination = <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" name="page" value={data.page - 1}>&#60;</button>
    } else if (data.lists.length >= paginationAmount && data.page > 1) {

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
                        <Form className="">
                            <div className="flex w-full">
                                <BsSearch className="mr-2 mt-3" /><input name="search" placeholder="Search Project" className=" pt-3 w-full appearance-none bg-gray-100 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500" type={"search"}></input>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-center items-center">
                                    <input type="checkbox" name="isActive" value="true" className="mr-2 mt-2" />
                                <label className="pt-2 mr-2 ">Active</label>
                                </div>
                                
                                <input type="submit"></input>
                            </div>
                        </Form>
                    </div>
                    {/* render all the lists */}
                    {data.lists.map((list) => (

                        <Link to={"../list/" + list.Id} key={list.Id}>
                            <div className="w-full my-5 bg-gray-200 rounded-xl overflow-hdden shadow-md p-4 undefined" >
                                <h4 className="text-center">{list.isWebshop ? <>Webshop</> : <>Website</>}</h4>
                                <h4 className="text-lg text-left">ProjectNaam: {list.ProjectNaam}</h4>
                                <h4 className="text-lg">  ProjectNummer: {list.ProjectNummer}</h4>
                                <h4 className="text-lg">KlantNaam: {list.KlantNaam}</h4>
                                <h4 className="text-lg">KlantNummer: {list.KlantNummer}</h4>
                                <h4 className="text-lg text-left">
                                    Verantwoordelijke: {list.Verantwoordelijke}
                                    <span className="text-lg float-right">Budget: ??? {list.Budget}</span>
                                </h4>
                            </div>
                        </Link>

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