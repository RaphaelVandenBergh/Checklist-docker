/* eslint-disable react-hooks/rules-of-hooks */
import type { CheckList, CheckListItems, Onderhoud } from "@prisma/client";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import styles from '../../../styles/app.css';
import main from 'app/styles/main.css';
import FormTemplate from "~/component/FormTemplate";
import { useLoaderData } from "@remix-run/react";
import React, { Fragment } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import moment from "moment";

//link imported styles to page
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: main },
    ];
}



//define types for the data returned by the loader function
type LoaderData = { list: CheckList, items: CheckListItems, onderhoud: Onderhoud[] };
//loader function fetches data from the database every time the page is loaded
export const loader: LoaderFunction = async ({ params }) => {
    const list = await db.checkList.findUnique({
        where: {
            Id: params.websiteid
        },
        include: {
            CheckListItems: true,
            Onderhoud:true
        }
    })

    if (!list) { throw new Error("List not found") }
    const data: LoaderData = { list, items: list.CheckListItems, onderhoud: list.Onderhoud }
    return json(data)
}

//define types for the data used by the action function
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
        GoogleAnalytics: Boolean | null;
        TagManager: Boolean | null;
        SSL: Boolean | null;
        FacebookDebug: Boolean | null;
        LinkedInShare: Boolean | null;
        Lorem: Boolean | null;
        Links: Boolean | null;

        PlaceholderMail: Boolean | null;
        SMTP: Boolean | null;
        EmailKlant: Boolean | null;
        EmailTemplates: Boolean | null;

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

        MaterialWP: Boolean | null;
        EasyWPSMTP: Boolean | null;
        WPS: Boolean | null;
        WPfast: Boolean | null;
        GDPRCookies: Boolean | null;
        shortpixel: Boolean | null;
        yoast: Boolean | null;
        SendCloud: Boolean | null;
        WooCommerce: Boolean | null;
        WooCommerceAJAX: Boolean | null;
        WPML: Boolean | null;
        WooCommercePayPal: Boolean | null;
        WooCommercePDF: Boolean | null;
        WooCommerceLoad: Boolean | null;
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
        KlantgegevensATMOS: Boolean | null;
        Cloudflare: Boolean | null;

        CommPM: Boolean | null;
    }
}

const badRequest = (data: ActionData) =>
    json(data, { status: 400 });

//action function handles form submission
export const action: ActionFunction = async ({ params, request }) => {
    //get the form data from the request
    const form = await request.formData();
    //put form data in variables
    const KlantNummer = form.get("KlantNummer")?.toString();
    const KlantNaam = form.get("KlantNaam")?.toString();
    const ProjectNummer = form.get("ProjectNummer")?.toString();
    const ProjectNaam = form.get("ProjectNaam")?.toString();
    const Budget = form.get("Budget")?.toString();
    const Verantwoordelijke = form.get("Verantwoordelijke")?.toString();

    const Compressie = form.get("Compressie") == "on" ? true : false;
    const Copyright = form.get("Copyright") == "on" ? true : false;
    const SocialMediaMeta = form.get("SocialMediaMeta") == "on" ? true : false;
    const GoogleAnalytics = form.get("GoogleAnalytics") == "on" ? true : false;
    const TagManager = form.get("TagManager") == "on" ? true : false;
    const SSL = form.get("SSL") == "on" ? true : false;
    const FacebookDebug = form.get("FacebookDebug") == "on" ? true : false;
    const LinkedInShare = form.get("LinkedInShare") == "on" ? true : false;
    const Lorem = form.get("Lorem") == "on" ? true : false;
    const Links = form.get("Links") == "on" ? true : false;

    const PlaceholderMail = form.get("PlaceholderMail") == "on" ? true : false;
    const SMTP = form.get("SMTP") == "on" ? true : false;
    const TestMail = form.get("TestMail") == "on" ? true : false;
    const EmailTemplates = form.get("EmailTemplates") == "on" ? true : false;

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

    const MaterialWP = form.get("MaterialWP") == "on" ? true : false;
    const EasyWPSMTP = form.get("EasyWPSMTP") == "on" ? true : false;
    const WPS = form.get("WPS") == "on" ? true : false;
    const WPfast = form.get("WPfast") == "on" ? true : false;
    const shortpixel = form.get("shortpixel") == "on" ? true : false;
    const yoast = form.get("yoast") == "on" ? true : false;
    const SendCloud = form.get("SendCloud") == "on" ? true : false;
    const WooCommerce = form.get("WooCommerce") == "on" ? true : false;
    const WooCommerceAJAX = form.get("WooCommerceAJAX") == "on" ? true : false;
    const WPML = form.get("WPML") == "on" ? true : false;
    const WooCommercePayPal = form.get("WooCommercePayPal") == "on" ? true : false;
    const WooCommercePDF = form.get("WooCommercePDF") == "on" ? true : false;
    const WooCommerceLoad = form.get("WooCommerceLoad") == "on" ? true : false;
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
    const KlantgegevensATMOS = form.get("KlantgegevensATMOS") == "on" ? true : false;
    const Cloudflare = form.get("Cloudflare") == "on" ? true : false;

    const CommPM = form.get("CommPM") == "on" ? true : false;

    const Opmerkingen = form.get("Opmerkingen")?.toString() == null ? "" : form.get("Opmerkingen")?.toString();
    const lastUser = form.get("nameDev")?.toString() == null ? "" : form.get("nameDev")?.toString();
    
    const VerantwoordelijkeOnderhoud = form.get("VerantwoordelijkeOnderhoud")?.toString() == null ? "" : form.get("VerantwoordelijkeOnderhoud")?.toString();
    const Finished =  form.get("Finished") =="on" ? true : false;
    const Checklistbl = form.get("Checklistbl") =="on" ? true : false;
    const TYPE = form.get("TYPE") == "on" ? true : false;
    const SMTPCheck = form.get("SMTPCheck") == "on" ? true : false;
    const ContactFormTest = form.get("ContactFormTest") == "on" ? true : false;
    const ReplyKlant = form.get("ReplyKlant") == "on" ? true : false;
    const LEGALPACK = form.get("LEGALPACK") == "on" ? true : false;
    const ContactGegevensBedrijf = form.get("ContactGegevensBedrijf") == "on" ? true : false;
    const WPFastestOptimize = form.get("WPFastestOptimize") == "on" ? true : false;
    const CloudflareMnt = form.get("CloudflareMnt") == "on" ? true : false;
    const FBDebug = form.get("FBDebug") == "on" ? true : false;
    const ContactForm7 = form.get("ContactForm7") == "on" ? true : false;
    const Footer = form.get("Footer") == "on" ? true : false;
    const MaterialWPMnt = form.get("MaterialWPMnt") == "on" ? true : false;
    const PluginUpdates = form.get("PluginUpdates") == "on" ? true : false;
    const Speedcheck = form.get("Speedcheck") == "on" ? true : false;
    const SSLMnt = form.get("SSLMnt") == "on" ? true : false;
    const ReCaptcha = form.get("ReCaptcha") == "on" ? true : false;
    const DeadLinks = form.get("DeadLinks") == "on" ? true : false;
    const Analytics = form.get("Analytics") == "on" ? true : false;
    const TagManagerMnt = form.get("TagManagerMnt") == "on" ? true : false;
    const GDPRForm = form.get("GDPRForm") == "on" ? true : false;
    const SitemapMnt = form.get("SitemapMnt") == "on" ? true : false;
    const Ajax = form.get("Ajax") == "on" ? true : false;
    const EmptyCache = form.get("EmptyCache") == "on" ? true : false;
    const KlantMail = form.get("KlantMail") == "on" ? true : false;
    const StripeMnt = form.get("StripeMnt") == "on" ? true : false;
    const BTWField = form.get("BTWField") == "on" ? true : false;
    const Tracking = form.get("Tracking") == "on" ? true : false;


    

    //check if all required fields are filled in
    if (typeof KlantNummer !== "string" || typeof KlantNaam !== "string" || typeof ProjectNummer !== "string" || typeof ProjectNaam !== "string" || typeof Budget !== "string" || typeof Verantwoordelijke !== "string" || typeof Compressie !== "boolean" || typeof Copyright !== "boolean" || typeof SocialMediaMeta !== "boolean" || typeof SSL !== "boolean" || typeof FacebookDebug !== "boolean" || typeof LinkedInShare !== "boolean" || typeof PlaceholderMail !== "boolean" || typeof SMTP !== "boolean" || typeof Loadspeed !== "boolean" || typeof LoadspeedTime !== "string" || typeof ImageSize !== "boolean" || typeof AltTags !== "boolean" || typeof Htaccess !== "boolean" || typeof Sitemap !== "boolean" || typeof Robots !== "boolean" || typeof Privacy !== "boolean" || typeof AlgemeneVoorwaarden !== "boolean" || typeof CookiePolicy !== "boolean" || typeof GDPR !== "boolean" || typeof CookiePolicyBanner !== "boolean" || typeof EasyWPSMTP !== "boolean" || typeof WPS !== "boolean" || typeof KlantAanpassingen !== "boolean" || typeof CapabilityManager !== "boolean" || typeof Mobile !== "boolean" || typeof Optimalisatie !== "boolean" || typeof SSLCheckup !== "boolean" || typeof MailCheckup !== "boolean" || typeof FactuurHosting !== "boolean") { return badRequest({ formError: "Form not submitted correctly" }) }
    const currentData = await db.checkList.findFirst({
        where: {
            Id: params.websiteid
        },
        include: { CheckListItems: true, Onderhoud:true }
    })
    if (currentData == null) return badRequest({ formError: "Form not submitted correctly" })
    for(const onderhoud of currentData.Onderhoud){
        
    }
    await db.logs.create({
        data: {
            CheckListId: currentData.Id,
            createdAt: currentData.CheckListItems.updatedAt,
            Version: currentData.CheckListItems.Version,
            Compressie: currentData.CheckListItems.Compressie,
            Copyright: currentData.CheckListItems.Copyright,
            SocialMediaMeta: currentData.CheckListItems.SocialMediaMeta,
            GoogleAnalytics: currentData.CheckListItems.GoogleAnalytics,
            TagManager: currentData.CheckListItems.TagManager,
            SSL: currentData.CheckListItems.SSL,
            FacebookDebug: currentData.CheckListItems.FacebookDebug,
            LinkedInShare: currentData.CheckListItems.LinkedInShare,
            Lorem: currentData.CheckListItems.Lorem,
            Links: currentData.CheckListItems.Links,
            PlaceholderMail: currentData.CheckListItems.PlaceholderMail,
            SMTP: currentData.CheckListItems.SMTP,
            TestMail: currentData.CheckListItems.TestMail,
            EmailTemplates: currentData.CheckListItems.EmailTemplates,
            Loadspeed: currentData.CheckListItems.Loadspeed,
            LoadspeedTime: currentData.CheckListItems.LoadspeedTime,
            ImageSize: currentData.CheckListItems.ImageSize,
            AltTags: currentData.CheckListItems.AltTags,
            Htaccess: currentData.CheckListItems.Htaccess,
            Sitemap: currentData.CheckListItems.Sitemap,
            Robots: currentData.CheckListItems.Robots,
            Privacy: currentData.CheckListItems.Privacy,
            AlgemeneVoorwaarden: currentData.CheckListItems.AlgemeneVoorwaarden,
            CookiePolicy: currentData.CheckListItems.CookiePolicy,
            GDPR: currentData.CheckListItems.GDPR,
            CookiePolicyBanner: currentData.CheckListItems.CookiePolicyBanner,
            MaterialWP: currentData.CheckListItems.MaterialWP,
            EasyWPSMTP: currentData.CheckListItems.EasyWPSMTP,
            WPS: currentData.CheckListItems.WPS,
            WPfast: currentData.CheckListItems.WPfast,
            shortpixel: currentData.CheckListItems.shortpixel,
            yoast: currentData.CheckListItems.yoast,
            SendCloud: currentData.CheckListItems.SendCloud,
            WooCommerce: currentData.CheckListItems.WooCommerce,
            WooCommerceAJAX: currentData.CheckListItems.WooCommerceAJAX,
            WPML: currentData.CheckListItems.WPML,
            WooCommercePayPal: currentData.CheckListItems.WooCommercePayPal,
            WooCommercePDF: currentData.CheckListItems.WooCommercePDF,
            WooCommerceLoad: currentData.CheckListItems.WooCommerceLoad,
            WooCommerceStripe: currentData.CheckListItems.WooCommerceStripe,
            KlantAanpassingen: currentData.CheckListItems.KlantAanpassingen,
            CapabilityManager: currentData.CheckListItems.CapabilityManager,
            Stripe: currentData.CheckListItems.Stripe,
            Betaalmethodes: currentData.CheckListItems.Betaalmethodes,
            Testen: currentData.CheckListItems.Testen,
            SendCloudUser: currentData.CheckListItems.SendCloudUser,
            SendCloudVerrify: currentData.CheckListItems.SendCloudVerrify,
            Mobile: currentData.CheckListItems.Mobile,
            Optimalisatie: currentData.CheckListItems.Optimalisatie,
            SSLCheckup: currentData.CheckListItems.SSLCheckup,
            MailCheckup: currentData.CheckListItems.MailCheckup,
            FactuurHosting: currentData.CheckListItems.FactuurHosting,
            KlantgegevensATMOS: currentData.CheckListItems.KlantgegevensATMOS,
            Cloudflare: currentData.CheckListItems.Cloudflare,
            CommPM: currentData.CheckListItems.CommPM,
            Opmerkingen: currentData.CheckListItems.Opmerkingen,
            lastUser: currentData.CheckListItems.lastUser,
        }
    })
    //update checklist with new data
    await db.checkList.update({
        where: {
            Id: params.websiteid
        },
        data: {
            KlantNummer: KlantNummer,
            KlantNaam: KlantNaam,
            ProjectNummer: ProjectNummer,
            ProjectNaam: ProjectNaam,
            Budget: Budget,
            Verantwoordelijke: Verantwoordelijke,
            CheckListItems: {
                update: {
                    Version:{increment: 1},
                    Compressie: Compressie,
                    Copyright: Copyright,
                    SocialMediaMeta: SocialMediaMeta,
                    GoogleAnalytics: GoogleAnalytics,
                    TagManager: TagManager,
                    SSL: SSL,
                    FacebookDebug: FacebookDebug,
                    LinkedInShare: LinkedInShare,
                    Lorem: Lorem,
                    Links: Links,
                    PlaceholderMail: PlaceholderMail,
                    SMTP: SMTP,
                    TestMail: TestMail,
                    EmailTemplates: EmailTemplates,
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
                    MaterialWP: MaterialWP,
                    EasyWPSMTP: EasyWPSMTP,
                    WPS: WPS,
                    WPfast: WPfast,
                    shortpixel: shortpixel,
                    yoast: yoast,
                    SendCloud: SendCloud,
                    WooCommerce: WooCommerce,
                    WooCommerceAJAX: WooCommerceAJAX,
                    WPML: WPML,
                    WooCommercePayPal: WooCommercePayPal,
                    WooCommercePDF: WooCommercePDF,
                    WooCommerceLoad: WooCommerceLoad,
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
                    KlantgegevensATMOS: KlantgegevensATMOS,
                    Cloudflare: Cloudflare,
                    CommPM: CommPM,
                    Opmerkingen: Opmerkingen,
                    lastUser: lastUser,
                }
            }
        }

    })
    //redirect to list page
    return (redirect("/list"))
}

export default function listid() {
    //get loaderdata
    const data = useLoaderData<LoaderData>();
    const [open, setOpen] = React.useState(true)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const getdate = new Date(data.items.createdAt)
    const date = moment(getdate).format('DD/MM/yyyy hh:mm:ss')

    return (
        <div className="bg-contact2">
            <div className="container-contact2">
                <div className="wrap-contact2">
                    <span className="contact2-form-title">
                        <h1>Checklist Website</h1>

                        <span className="text-sm text-center block ">
                            last updated: {date} <br />
                            by: {data.items.lastUser}


                        </span>
                    </span>

                    <span>

                    </span>
                    {/* use form component */}
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
                        </Fragment>}
                    <FormTemplate data={data}/>
                </div>
            </div>
        </div>
    )
}