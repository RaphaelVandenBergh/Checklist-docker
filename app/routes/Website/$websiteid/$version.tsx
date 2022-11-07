import type { CheckList, CheckListItems, Logs } from '@prisma/client';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { db } from '~/utils/db.server';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
//import stylesheets for the page
import styles from '../../../styles/app.css';
import main from '../../../styles/main.css';
import FormTemplate from '~/component/FormTemplate';

import React, { Fragment } from 'react';
import LogTemplate from '~/component/LogTemplate';

// link imported styles to the page
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: main },
    ];
}
 type LoaderData ={list: CheckList, items: Logs[], Version: number}
export const loader: LoaderFunction = async ({ params})=>{
    const logs = await db.logs.findMany({
        where:{CheckListId: params.websiteid},
        include: {Checklist: true},
        orderBy: {Version: 'asc'}
    })
    if(!logs){ throw new Error('List not found')}
    if(!params.version){throw new Error('Version not found')}
    const data: LoaderData = {list:logs[0].Checklist, items:logs, Version: parseInt(params.version)}
    return json(data)
    
}

export default function Index(){
    const data = useLoaderData<LoaderData>();
    const [open, setOpen] = React.useState(true)
    const handleClickOpen = () => {
        setOpen(true);
    };
    console.log(data)
    const handleClose = () => {
        setOpen(false);

    };
    function findlog(log:any){
        if(log.Version == data.Version )
        return true
        else return false
    }
    let test = new Date(data.items[data.items.findIndex(findlog)].createdAt).toLocaleDateString() + " " + new Date(data.items[data.items.findIndex(findlog)].createdAt).toLocaleTimeString()

    
    return(
        <>
        <div className="bg-contact2">
            <div className="container-contact2">
                <div className="wrap-contact2">
                    <span className="contact2-form-title">
                        <h1>Checklist Website</h1>
                        <span className="text-sm text-center block ">
                            updated on: {test} <br />
                            by: {data.items[data.items.findIndex(findlog)].lastUser}


                        </span>
                    </span>

                    {/* form for the checklist */}
                    {data.items[data.items.findIndex(findlog)].Opmerkingen == "" ? null :
                        <Fragment>
                            <Dialog open={open} handler={handleClickOpen}>
                                <DialogHeader className="text-red-600">WARNING!</DialogHeader>
                                <DialogBody className="grid" divider>
                                    {data.items[data.items.findIndex(findlog)].Opmerkingen.split("\r\n").map((item, index) => {
                                        return <p className="text-black" key={index}>{item}</p>
                                    })}
                                </DialogBody>
                                <DialogFooter>
                                    <Button variant="gradient" color="green" onClick={handleClose}>
                                        <span>Confirm</span>
                                    </Button>
                                </DialogFooter>
                            </Dialog>
                        </Fragment>
                    }
                    <LogTemplate data={data}/>

                </div>
            </div>
        </div>
        
        
        </>
    )
}