
import type { CheckList, CheckListItems } from '@prisma/client';
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
import styles from '../../styles/app.css';
import main from '../../styles/main.css';
import FormTemplate from '~/component/FormTemplate';

import React, { Fragment } from 'react';

// link imported styles to the page
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: main },
    ];
}

//loaderdata defines types for the data returned by the loader function
type LoaderData = { list: CheckList, items: CheckListItems };
//loader function fetches data from the database every time the page is loaded
export const loader: LoaderFunction = async ({ params }) => {


    const list = await db.checkList.findUnique({
        where: {
            Id: params.Webshopid
        },
        include: {
            CheckListItems: true
        }
    })
    if (!list) { throw new Error("List not found") }
    const data: LoaderData = { list, items: list.CheckListItems }
    return json(data)
}

//Define types for the form data
type ActionData = {
    formError?: string;
    fieldErrors?: {
        KlantNummer: string;
        KlantNaam: String;
        ProjectNummer: String;
        ProjectNaam: String;
        Budget: String;
        isWebshop: String;
        Verantwoordelijke: String;

        Compressie: Boolean | null;
        Copyright: Boolean | null;
        SocialMediaMeta: Boolean | null;
        SSL: Boolean | null;
        FacebookDebug: Boolean | null;
        LinkedInShare: Boolean | null;

        PlaceholderMail: Boolean | null;
        SMTP: Boolean | null;
        EmailKlant: Boolean | null;

        Loadspeed: Boolean | null;
        LoadspeedTime: String | null;
        ImageSize: Boolean | null;
        AltTags: Boolean | null;

        Htaccess: Boolean | null;
        Robots: Boolean | null;
        Sitemap: Boolean | null;

        Privacy: Boolean | null;
        AlgemeneVoorwaarden: Boolean | null;
        CookiePolicy: Boolean | null;
        CookiePolicyBanner: Boolean | null;
        GDPR: Boolean | null;

        ColorLib: Boolean | null;
        EasyWPSMTP: Boolean | null;
        WPS: Boolean | null;
        W3: Boolean | null;
        GDPRCookies: Boolean | null;
        SendCloud: Boolean | null;
        WooCommerce: Boolean | null;
        WooCommerceAdmin: Boolean | null;
        WooCommerceBlocks: Boolean | null;
        WooCommercePayPal: Boolean | null;
        WooCommercePDF: Boolean | null;
        WooCommerceServices: Boolean | null;
        WooCommerceStripe: Boolean | null;
        KlantAanpassingen: Boolean | null;
        CapabilityManager: Boolean | null;

        Stripe: Boolean | null;
        Betaalmethodes: Boolean | null;
        Testen: Boolean | null;

        SendCloudUser: Boolean | null;
        SendCloudVerrify: Boolean | null;

        Mobile: Boolean | null;

        Optimalisatie: Boolean | null;
        SSLCheckup: Boolean | null;
        MailCheckup: Boolean | null;
        FactuurHosting: Boolean | null;
        KlantgegevensWHMCS: Boolean | null;

        FactuurOpvolging: Boolean | null;
        MailOfferte: Boolean | null;
        TelefonischOpvolging: Boolean | null;
        OpvolgingWeken: Boolean | null;
        EindFactuur: Boolean | null;
    }
}


const badRequest = (data: ActionData) =>
    json(data, { status: 400 });

//action function gets called when the form is submitted with POST PUT OR DELETE
export const action: ActionFunction = async ({ request, params }) => {
    //get all form data and link it to variables
    const form = await request.formData();
    const KlantNummer = form.get("KlantNummer")?.toString();
    const KlantNaam = form.get("KlantNaam")?.toString();
    const ProjectNummer = form.get("ProjectNummer")?.toString();
    const ProjectNaam = form.get("ProjectNaam")?.toString();
    const Budget = form.get("Budget")?.toString();
    const Verantwoordelijke = form.get("Verantwoordelijke")?.toString();

    const Compressie = form.get("Compressie") == "on" ? true : false;
    const Copyright = form.get("Copyright") == "on" ? true : false;
    const SocialMediaMeta = form.get("SocialMediaMeta") == "on" ? true : false;
    const SSL = form.get("SSL") == "on" ? true : false;
    const FacebookDebug = form.get("FacebookDebug") == "on" ? true : false;
    const LinkedInShare = form.get("LinkedInShare") == "on" ? true : false;

    const PlaceholderMail = form.get("PlaceholderMail") == "on" ? true : false;
    const SMTP = form.get("SMTP") == "on" ? true : false;
    const EmailKlant = form.get("EmailKlant") == "on" ? true : false;

    const Loadspeed = form.get("Loadspeed") == "on" ? true : false;
    const LoadspeedTime = form.get("LoadspeedTime")?.toString();
    const ImageSize = form.get("ImageSize") == "on" ? true : false;
    const AltTags = form.get("AltTags") == "on" ? true : false;

    const Htaccess = form.get("Htaccess") == "on" ? true : false;
    const Sitemap = form.get("Sitemap") == "on" ? true : false;
    const Robots = form.get("Robots") == "on" ? true : false;

    const Privacy = form.get("Privacy") == "on" ? true : false;
    const AlgemeneVoorwaarden = form.get("AlgemeneVoorwaarden") == "on" ? true : false;
    const CookiePolicy = form.get("CookiePolicy") == "on" ? true : false;
    const GDPR = form.get("GDPR") == "on" ? true : false;
    const CookiePolicyBanner = form.get("CookiePolicyBanner") == "on" ? true : false;

    const ColorLib = form.get("ColorLib") == "on" ? true : false;
    const EasyWPSMTP = form.get("EasyWPSMTP") == "on" ? true : false;
    const WPS = form.get("WPS") == "on" ? true : false;
    const W3 = form.get("W3") == "on" ? true : false;
    const GDPRCookies = form.get("GDPRCookies") == "on" ? true : false;
    const SendCloud = form.get("SendCloud") == "on" ? true : false;
    const WooCommerce = form.get("WooCommerce") == "on" ? true : false;
    const WooCommerceAdmin = form.get("WooCommerceAdmin") == "on" ? true : false;
    const WooCommerceBlocks = form.get("WooCommerceBlocks") == "on" ? true : false;
    const WooCommercePayPal = form.get("WooCommercePayPal") == "on" ? true : false;
    const WooCommercePDF = form.get("WooCommercePDF") == "on" ? true : false;
    const WooCommerceServices = form.get("WooCommerceServices") == "on" ? true : false;
    const WooCommerceStripe = form.get("WooCommerceStripe") == "on" ? true : false;
    const KlantAanpassingen = form.get("KlantAanpassingen") == "on" ? true : false;
    const CapabilityManager = form.get("CapabilityManager") == "on" ? true : false;

    const Stripe = form.get("Stripe") == "on" ? true : false;
    const Betaalmethodes = form.get("Betaalmethodes") == "on" ? true : false;
    const Testen = form.get("Testen") == "on" ? true : false;

    const SendCloudUser = form.get("SendCloudUser") == "on" ? true : false;
    const SendCloudVerrify = form.get("SendCloudVerrify") == "on" ? true : false;

    const Mobile = form.get("Mobile") == "on" ? true : false;

    const Optimalisatie = form.get("Optimalisatie") == "on" ? true : false;
    const SSLCheckup = form.get("SSLCheckup") == "on" ? true : false;
    const MailCheckup = form.get("MailCheckup") == "on" ? true : false;
    const FactuurHosting = form.get("FactuurHosting") == "on" ? true : false;
    const KlantgegevensWHMCS = form.get("KlantgegevensWHMCS") == "on" ? true : false;

    const FactuurOpvolging = form.get("FactuurOpvolging") == "on" ? true : false;
    const MailOfferte = form.get("MailOfferte") == "on" ? true : false;
    const TelefonischOpvolging = form.get("TelefonischOpvolging") == "on" ? true : false;
    const OpvolgingWeken = form.get("OpvolgingWeken") == "on" ? true : false;
    const EindFactuur = form.get("EindFactuur") == "on" ? true : false;

    //check if all required fields are filled in
    if (typeof KlantNummer !== "string" || typeof KlantNaam !== "string" || typeof ProjectNummer !== "string" || typeof ProjectNaam !== "string" || typeof Budget !== "string" || typeof Verantwoordelijke !== "string" || typeof Compressie !== "boolean" || typeof Copyright !== "boolean" || typeof SocialMediaMeta !== "boolean" || typeof SSL !== "boolean" || typeof FacebookDebug !== "boolean" || typeof LinkedInShare !== "boolean" || typeof PlaceholderMail !== "boolean" || typeof SMTP !== "boolean" || typeof EmailKlant !== "boolean" || typeof Loadspeed !== "boolean" || typeof LoadspeedTime !== "string" || typeof ImageSize !== "boolean" || typeof AltTags !== "boolean" || typeof Htaccess !== "boolean" || typeof Sitemap !== "boolean" || typeof Robots !== "boolean" || typeof Privacy !== "boolean" || typeof AlgemeneVoorwaarden !== "boolean" || typeof CookiePolicy !== "boolean" || typeof GDPR !== "boolean" || typeof CookiePolicyBanner !== "boolean" || typeof ColorLib !== "boolean" || typeof EasyWPSMTP !== "boolean" || typeof WPS !== "boolean" || typeof W3 !== "boolean" || typeof GDPRCookies !== "boolean" || typeof KlantAanpassingen !== "boolean" || typeof CapabilityManager !== "boolean" || typeof Mobile !== "boolean" || typeof Optimalisatie !== "boolean" || typeof SSLCheckup !== "boolean" || typeof MailCheckup !== "boolean" || typeof FactuurHosting !== "boolean" || typeof KlantgegevensWHMCS !== "boolean" || typeof FactuurOpvolging !== "boolean" || typeof MailOfferte !== "boolean" || typeof TelefonischOpvolging !== "boolean" || typeof OpvolgingWeken !== "boolean" || typeof EindFactuur !== "boolean") { return badRequest({ formError: "Form not submitted correctly" }) }

    //update the database entry
    await db.checkList.update({
        where: { Id: params.Webshopid },
        data: {
            KlantNummer: KlantNummer,
            KlantNaam: KlantNaam,
            ProjectNummer: ProjectNummer,
            ProjectNaam: ProjectNaam,
            Budget: Budget,
            Verantwoordelijke: Verantwoordelijke,
            isWebshop: true,
            updatedAt: new Date(),
            CheckListItems: {
                create: {
                    Compressie: Compressie,
                    Copyright: Copyright,
                    SocialMediaMeta: SocialMediaMeta,
                    SSL: SSL,
                    FacebookDebug: FacebookDebug,
                    LinkedInShare: LinkedInShare,
                    PlaceholderMail: PlaceholderMail,
                    SMTP: SMTP,
                    EmailKlant: EmailKlant,
                    Loadspeed: Loadspeed,
                    LoadspeedTime: LoadspeedTime,
                    ImageSize: ImageSize,
                    AltTags: AltTags,
                    Htaccess: Htaccess,
                    Sitemap: Sitemap,
                    Robots: Robots,
                    Privacy: Privacy,
                    AlgemeneVoorwaarden: AlgemeneVoorwaarden,
                    CookiePolicy: CookiePolicy,
                    GDPR: GDPR,
                    CookiePolicyBanner: CookiePolicyBanner,
                    ColorLib: ColorLib,
                    EasyWPSMTP: EasyWPSMTP,
                    WPS: WPS,
                    W3: W3,
                    GDPRCookies: GDPRCookies,
                    SendCloud: SendCloud,
                    WooCommerce: WooCommerce,
                    WooCommerceAdmin: WooCommerceAdmin,
                    WooCommerceBlocks: WooCommerceBlocks,
                    WooCommercePayPal: WooCommercePayPal,
                    WooCommercePDF: WooCommercePDF,
                    WooCommerceServices: WooCommerceServices,
                    WooCommerceStripe: WooCommerceStripe,
                    KlantAanpassingen: KlantAanpassingen,
                    CapabilityManager: CapabilityManager,
                    Stripe: Stripe,
                    Betaalmethodes: Betaalmethodes,
                    Testen: Testen,
                    SendCloudUser: SendCloudUser,
                    SendCloudVerrify: SendCloudVerrify,
                    Mobile: Mobile,
                    Optimalisatie: Optimalisatie,
                    SSLCheckup: SSLCheckup,
                    MailCheckup: MailCheckup,
                    FactuurHosting: FactuurHosting,
                    KlantgegevensWHMCS: KlantgegevensWHMCS,
                    FactuurOpvolging: FactuurOpvolging,
                    MailOfferte: MailOfferte,
                    TelefonischOpvolging: TelefonischOpvolging,
                    OpvolgingWeken: OpvolgingWeken,
                    EindFactuur: EindFactuur,
                }
            }
        }

    })

    //return to the list 
    return (redirect("/list"))

}

export default function webshopid() {
    //get loaderdata
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useLoaderData<LoaderData>()

    const [open, setOpen] = React.useState(true)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="bg-contact2">
            <div className="container-contact2">
                <div className="wrap-contact2">
                    <span className="contact2-form-title">
                        <h1>Checklist Webshop</h1>
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
                    <FormTemplate data={data} />

                </div>
            </div>
        </div>
    )
}