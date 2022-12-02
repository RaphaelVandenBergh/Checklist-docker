import type { CheckList,  Logs, Onderhoud } from '@prisma/client';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
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

import React, { Fragment } from 'react';
import LogTemplate from '~/component/LogTemplate';
import moment from 'moment';

// link imported styles to the page
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: main },
    ];
}
 type LoaderData ={list: CheckList, items: Logs, Version: number, Onderhoud: Onderhoud[]}
export const loader: LoaderFunction = async ({ params})=>{
    const logs = await db.logs.findUnique({
        where:{Id: params.version},
        include: {Checklist: true, Onderhoud: true},
    })
    if(!logs){ throw new Error('List not found')}
    if(!params.version){throw new Error('Version not found')}
    const data: LoaderData = {list:logs.Checklist, items:logs, Version: parseInt(params.version), Onderhoud: logs.Onderhoud}
    return json(data)
    
}

export default function Index(){
    const data = useLoaderData<LoaderData>();
    const [open, setOpen] = React.useState(true)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);

    };
    const getdate = new Date(data.items.createdAt)
    const date = moment(getdate).format('DD/MM/yyyy HH:mm:ss')
    
    
    return(
        <>
        <div className="bg-contact2">
            <div className="container-contact2">
                <div className="wrap-contact2">
                    <span className="contact2-form-title">
                        
                        <h1>Checklist {data.list.isWebshop? "Webshop" : "Website"}</h1>
                        <span className="text-sm text-center block ">
                            updated on: {date} <br />
                            by: {data.items.LastUser}


                        </span>
                    </span>

                    {/* form for the checklist */}
                    {data.items.Opmerkingen == "" ? null :
                        <Fragment>
                            <Dialog open={open} handler={handleClickOpen}>
                                <DialogHeader className="text-red-600">WARNING!</DialogHeader>
                                <DialogBody className="grid" divider>
                                    {data.items.Opmerkingen.split("\r\n").map((item, index) => {
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