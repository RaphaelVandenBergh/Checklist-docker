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
            Onderhoud: true
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
        Analytics: Boolean | null;
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

        TYPE: String | null;
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

    const Opmerkingen = form.get("Opmerkingen")?.toString();
    const LastUser = form.get("LastUser")?.toString();

    const AnalyticsCreate = form.get("AnalyticsCreate")?.toString()
    const ReCaptchaCreate = form.get("ReCaptchaCreate")?.toString();
    const FacebookInstaShop = form.get("FacebookInstaShop")?.toString();
    const ActiveCampaign = form.get("ActiveCampaign")?.toString();
    const Mockups = form.get("Mockups")?.toString();
    const Compressie = form.get("Compressie")?.toString();
    const Copyright = form.get("Copyright")?.toString();
    const SocialMediaMeta = form.get("SocialMediaMeta")?.toString();
    const AnalyticsIntegrate = form.get("AnalyticsIntegrate")?.toString();
    const FacebookDebug = form.get("FacebookDebug")?.toString();
    const LinkedInShare = form.get("LinkedInShare")?.toString();
    const Lorem = form.get("Lorem")?.toString();
    const Links = form.get("Links")?.toString();
    const SMTP = form.get("SMTP")?.toString();
    const TestMail = form.get("TestMail")?.toString();
    const Loadspeed = form.get("Loadspeed")?.toString();
    const LoadspeedTime = form.get("LoadspeedTime")?.toString();
    const ImageSize = form.get("ImageSize")?.toString();
    const AltTags = form.get("AltTags")?.toString();
    const Htaccess = form.get("Htaccess")?.toString();
    const Robots = form.get("Robots")?.toString();
    const Sitemap = form.get("Sitemap")?.toString();
    const GDPR = form.get("GDPR")?.toString();
    const MaterialWP = form.get("MaterialWP")?.toString();
    const EasyWPSMTP = form.get("EasyWPSMTP")?.toString();
    const WPS = form.get("WPS")?.toString();
    const WPOptimize = form.get("WPOptimize")?.toString();
    const shortpixel = form.get("shortpixel")?.toString();
    const yoast = form.get("yoast")?.toString();
    const SendCloud = form.get("SendCloud")?.toString();
    const WooCommerce = form.get("WooCommerce")?.toString();
    const WooCommerceAJAX = form.get("WooCommerceAJAX")?.toString();
    const WPML = form.get("WPML")?.toString();
    const WooCommercePayPal = form.get("WooCommercePayPal")?.toString();
    const WooCommercePDF = form.get("WooCommercePDF")?.toString();
    const WooCommerceLoad = form.get("WooCommerceLoad")?.toString();
    const WooCommerceStripe = form.get("WooCommerceStripe")?.toString();
    const KlantAanpassingen = form.get("KlantAanpassingen")?.toString();
    const CapabilityManager = form.get("CapabilityManager")?.toString();
    const Stripe = form.get("Stripe")?.toString();
    const Betaalmethodes = form.get("Betaalmethodes")?.toString();
    const Testen = form.get("Testen")?.toString();
    const Mobile = form.get("Mobile")?.toString();
    const PHPManager = form.get("PHPManager")?.toString();
    const PHPIni = form.get("PHPIni")?.toString();
    const RecaptchaIntegratie = form.get("RecaptchaIntegratie")?.toString();
    const Blog = form.get("Blog")?.toString();
    const ProjectModule = form.get("ProjectModule")?.toString();
    const BookingsModule = form.get("BookingsModule")?.toString();
    const BookingTool = form.get("BookingTool")?.toString();
    const RealisatieModule = form.get("RealisatieModule")?.toString();
    const SharingModule = form.get("SharingModule")?.toString();
    const NieuwsBriefKoppeling = form.get("NieuwsBriefKoppeling")?.toString();
    const MultiLanguage = form.get("MultiLanguage")?.toString();
    const DelDev = form.get("DelDev")?.toString();
    const Discussie = form.get("Discussie")?.toString();
    const QCFinal = form.get("QCFinal")?.toString();
    const LEGALPACK = form.get("LEGALPACK")?.toString();
    const AlgemeneVoorwaarden = form.get("AlgemeneVoorwaarden")?.toString();
    const CookiePopUp = form.get("CookiePopUp")?.toString();
    const OnderhoudsAbonnement = form.get("OnderhoudsAbonnement")?.toString();
    const OnderhoudsProject = form.get("OnderhoudsProject")?.toString();
    const SSLActive = form.get("SSLActive")?.toString();
    const QCFirst = form.get("QCFirst")?.toString();
    const PlaceholderMail = form.get("PlaceholderMail")?.toString();
    const Optimalisatie = form.get("Optimalisatie")?.toString();
    const SSLCheckup = form.get("SSLCheckup")?.toString();
    const MailCheckup = form.get("MailCheckup")?.toString();
    const FactuurHosting = form.get("FactuurHosting")?.toString();
    const KlantgegevensATMOS = form.get("KlantgegevensATMOS")?.toString();
    const Cloudflare = form.get("Cloudflare")?.toString();
    const CloudFlareInWordpress = form.get("CloudFlareInWordpress")?.toString();
    const DoubleCheck = form.get("DoubleCheck")?.toString();
    const SendCloudUser = form.get("SendCloudUser")?.toString();
    const SendCloudVerrify = form.get("SendCloudVerrify")?.toString();

    const VerantwoordelijkeOnderhoud = form.get("VerantwoordelijkeOnderhoud")?.toString() == null ? "" : form.get("VerantwoordelijkeOnderhoud")?.toString();
    const Finished = form.get("Finished") == "on" ? true : false;
    const Checklistbl = form.get("Checklistbl") == "on" ? true : false;
    const TYPE = form.get("TYPE")?.toString() == null ? "" : form.get("TYPE")?.toString();
    const SMTPCheck = form.get("SMTPCheck") == "on" ? true : false;
    const ContactFormTest = form.get("ContactFormTest") == "on" ? true : false;
    const ReplyKlant = form.get("ReplyKlant") == "on" ? true : false;
    const LEGALPACKMnt = form.get("LEGALPACKMnt") == "on" ? true : false;
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
    const ReCaptchaMnt = form.get("ReCaptchaMnt") == "on" ? true : false;
    const DeadLinks = form.get("DeadLinks") == "on" ? true : false;
    const AnalyticsMnt = form.get("AnalyticsMnt") == "on" ? true : false;
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
    if (typeof KlantNummer !== "string" || typeof KlantNaam !== "string" || typeof ProjectNummer !== "string" || typeof ProjectNaam !== "string" || typeof Budget !== "string" || typeof Verantwoordelijke !== "string") { console.log("wheeze"); return badRequest({ formError: "Form not submitted correctly" }) }
    const currentData = await db.checkList.findFirst({
        where: {
            Id: params.websiteid
        },
        include: { CheckListItems: true, Onderhoud: true }
    })
    if (currentData == null) return badRequest({ formError: "Form not submitted correctly" })
    let isediting = false
    let editing
    for (const onderhoud of currentData.Onderhoud) {
        if (onderhoud.Finished == false) {
            isediting = true
            editing = onderhoud
        }
    }
    if (isediting == true) {
        if (editing == undefined) return badRequest({ formError: "Form not submitted correctly" })
        await db.onderhoud.update({
            where: {
                Id: editing.Id
            },
            data: {
                Verantwoordelijke: VerantwoordelijkeOnderhoud,
                Finished: Finished,
                Checklistbl: Checklistbl,
                TYPE: TYPE,
                SMTPCheck: SMTPCheck,
                ContactFormTest: ContactFormTest,
                ReplyKlant: ReplyKlant,
                LEGALPACKMnt: LEGALPACKMnt,
                ContactGegevensBedrijf: ContactGegevensBedrijf,
                WPFastestOptimize: WPFastestOptimize,
                CloudflareMnt: CloudflareMnt,
                FBDebug: FBDebug,
                ContactForm7: ContactForm7,
                Footer: Footer,
                MaterialWPMnt: MaterialWPMnt,
                PluginUpdates: PluginUpdates,
                Speedcheck: Speedcheck,
                SSLMnt: SSLMnt,
                ReCaptchaMnt: ReCaptchaMnt,
                DeadLinks: DeadLinks,
                AnalyticsMnt: AnalyticsMnt,
                TagManagerMnt: TagManagerMnt,
                GDPRForm: GDPRForm,
                SitemapMnt: SitemapMnt,
                Ajax: Ajax,
                EmptyCache: EmptyCache,
                KlantMail: KlantMail,
                StripeMnt: StripeMnt,
                BTWField: BTWField,
                Tracking: Tracking,
            }
        })
    }
    if (isediting == false && VerantwoordelijkeOnderhoud != "") {
        if (typeof VerantwoordelijkeOnderhoud !== "string" || typeof TYPE !== "string") return badRequest({ formError: "Form not submitted correctly" })
        await db.onderhoud.create({
            data: {
                Opmerkingen: "",
                CheckListId: currentData.Id,
                Verantwoordelijke: VerantwoordelijkeOnderhoud,
                Finished: Finished,
                Checklistbl: Checklistbl,
                TYPE: TYPE,
                SMTPCheck: SMTPCheck,
                ContactFormTest: ContactFormTest,
                ReplyKlant: ReplyKlant,
                LEGALPACKMnt: LEGALPACKMnt,
                ContactGegevensBedrijf: ContactGegevensBedrijf,
                WPFastestOptimize: WPFastestOptimize,
                CloudflareMnt: CloudflareMnt,
                FBDebug: FBDebug,
                ContactForm7: ContactForm7,
                Footer: Footer,
                MaterialWPMnt: MaterialWPMnt,
                PluginUpdates: PluginUpdates,
                Speedcheck: Speedcheck,
                SSLMnt: SSLMnt,
                ReCaptchaMnt: ReCaptchaMnt,
                DeadLinks: DeadLinks,
                AnalyticsMnt: AnalyticsMnt,
                TagManagerMnt: TagManagerMnt,
                GDPRForm: GDPRForm,
                SitemapMnt: SitemapMnt,
                Ajax: Ajax,
                EmptyCache: EmptyCache,
                KlantMail: KlantMail,
                StripeMnt: StripeMnt,
                BTWField: BTWField,
                Tracking: Tracking,
            }
        })
    }
    if (typeof Opmerkingen != "string") { return badRequest({ formError: "Form not submitted correctly" }) }
    await db.logs.create({
        data: {
            CheckListId: currentData.Id,
            createdAt: currentData.CheckListItems.updatedAt,
            Version: currentData.CheckListItems.Version,
            AnalyticsCreate: currentData.CheckListItems.AnalyticsCreate,
            ReCaptchaCreate: currentData.CheckListItems.ReCaptchaCreate,
            FacebookInstaShop: currentData.CheckListItems.FacebookInstaShop,
            ActiveCampaign: currentData.CheckListItems.ActiveCampaign,
            Mockups: currentData.CheckListItems.Mockups,
            Compressie: currentData.CheckListItems.Compressie,
            Copyright: currentData.CheckListItems.Copyright,
            SocialMediaMeta: currentData.CheckListItems.SocialMediaMeta,
            AnalyticsIntegrate: currentData.CheckListItems.AnalyticsIntegrate,
            FacebookDebug: currentData.CheckListItems.FacebookDebug,
            LinkedInShare: currentData.CheckListItems.LinkedInShare,
            Lorem: currentData.CheckListItems.Lorem,
            Links: currentData.CheckListItems.Links,
            SMTP: currentData.CheckListItems.SMTP,
            TestMail: currentData.CheckListItems.TestMail,
            Loadspeed: currentData.CheckListItems.Loadspeed,
            LoadspeedTime: currentData.CheckListItems.LoadspeedTime,
            ImageSize: currentData.CheckListItems.ImageSize,
            AltTags: currentData.CheckListItems.AltTags,
            Htaccess: currentData.CheckListItems.Htaccess,
            Robots: currentData.CheckListItems.Robots,
            Sitemap: currentData.CheckListItems.Sitemap,
            GDPR: currentData.CheckListItems.GDPR,
            MaterialWP: currentData.CheckListItems.MaterialWP,
            EasyWPSMTP: currentData.CheckListItems.EasyWPSMTP,
            WPS: currentData.CheckListItems.WPS,
            WPOptimize: currentData.CheckListItems.WPOptimize,
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
            Mobile: currentData.CheckListItems.Mobile,
            PHPManager: currentData.CheckListItems.PHPManager,
            PHPIni: currentData.CheckListItems.PHPIni,
            RecaptchaIntegratie: currentData.CheckListItems.RecaptchaIntegratie,
            Blog: currentData.CheckListItems.Blog,
            ProjectModule: currentData.CheckListItems.ProjectModule,
            BookingsModule: currentData.CheckListItems.BookingsModule,
            BookingTool: currentData.CheckListItems.BookingTool,
            RealisatieModule: currentData.CheckListItems.RealisatieModule,
            SharingModule: currentData.CheckListItems.SharingModule,
            NieuwsBriefKoppeling: currentData.CheckListItems.NieuwsBriefKoppeling,
            MultiLanguage: currentData.CheckListItems.MultiLanguage,
            DelDev: currentData.CheckListItems.DelDev,
            Discussie: currentData.CheckListItems.Discussie,
            QCFinal: currentData.CheckListItems.QCFinal,
            LEGALPACK: currentData.CheckListItems.LEGALPACK,
            AlgemeneVoorwaarden: currentData.CheckListItems.AlgemeneVoorwaarden,
            CookiePopUp: currentData.CheckListItems.CookiePopUp,
            OnderhoudsAbonnement: currentData.CheckListItems.OnderhoudsAbonnement,
            OnderhoudsProject: currentData.CheckListItems.OnderhoudsProject,
            SSLActive: currentData.CheckListItems.SSLActive,
            QCFirst: currentData.CheckListItems.QCFirst,
            PlaceholderMail: currentData.CheckListItems.PlaceholderMail,
            Optimalisatie: currentData.CheckListItems.Optimalisatie,
            SSLCheckup: currentData.CheckListItems.SSLCheckup,
            MailCheckup: currentData.CheckListItems.MailCheckup,
            FactuurHosting: currentData.CheckListItems.FactuurHosting,
            KlantgegevensATMOS: currentData.CheckListItems.KlantgegevensATMOS,
            Cloudflare: currentData.CheckListItems.Cloudflare,
            CloudFlareInWordpress: currentData.CheckListItems.CloudFlareInWordpress,
            DoubleCheck: currentData.CheckListItems.DoubleCheck,
            SendCloudUser: currentData.CheckListItems.SendCloudUser,
            SendCloudVerrify: currentData.CheckListItems.SendCloudVerrify,
            Opmerkingen: currentData.CheckListItems.Opmerkingen,
            LastUser: currentData.CheckListItems.LastUser,
            Onderhoud: {
                connect:
                    currentData.Onderhoud.map((item) => ({ Id: item.Id }))
            }
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
                    Version: { increment: 1 },
                    AnalyticsCreate: AnalyticsCreate,
                    ReCaptchaCreate: ReCaptchaCreate,
                    FacebookInstaShop: FacebookInstaShop,
                    ActiveCampaign: ActiveCampaign,
                    Mockups: Mockups,
                    Compressie: Compressie,
                    Copyright: Copyright,
                    SocialMediaMeta: SocialMediaMeta,
                    AnalyticsIntegrate: AnalyticsIntegrate,
                    FacebookDebug: FacebookDebug,
                    LinkedInShare: LinkedInShare,
                    Lorem: Lorem,
                    Links: Links,
                    SMTP: SMTP,
                    TestMail: TestMail,
                    Loadspeed: Loadspeed,
                    LoadspeedTime: LoadspeedTime,
                    ImageSize: ImageSize,
                    AltTags: AltTags,
                    Htaccess: Htaccess,
                    Robots: Robots,
                    Sitemap: Sitemap,
                    GDPR: GDPR,
                    MaterialWP: MaterialWP,
                    EasyWPSMTP: EasyWPSMTP,
                    WPS: WPS,
                    WPOptimize: WPOptimize,
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
                    Mobile: Mobile,
                    PHPManager: PHPManager,
                    PHPIni: PHPIni,
                    RecaptchaIntegratie: RecaptchaIntegratie,
                    Blog: Blog,
                    ProjectModule: ProjectModule,
                    BookingsModule: BookingsModule,
                    BookingTool: BookingTool,
                    RealisatieModule: RealisatieModule,
                    SharingModule: SharingModule,
                    NieuwsBriefKoppeling: NieuwsBriefKoppeling,
                    MultiLanguage: MultiLanguage,
                    DelDev: DelDev,
                    Discussie: Discussie,
                    QCFinal: QCFinal,
                    LEGALPACK: LEGALPACK,
                    AlgemeneVoorwaarden: AlgemeneVoorwaarden,
                    CookiePopUp: CookiePopUp,
                    OnderhoudsAbonnement: OnderhoudsAbonnement,
                    OnderhoudsProject: OnderhoudsProject,
                    SSLActive: SSLActive,
                    QCFirst: QCFirst,
                    PlaceholderMail: PlaceholderMail,
                    Optimalisatie: Optimalisatie,
                    SSLCheckup: SSLCheckup,
                    MailCheckup: MailCheckup,
                    FactuurHosting: FactuurHosting,
                    KlantgegevensATMOS: KlantgegevensATMOS,
                    Cloudflare: Cloudflare,
                    CloudFlareInWordpress: CloudFlareInWordpress,
                    DoubleCheck: DoubleCheck,
                    SendCloudUser: SendCloudUser,
                    SendCloudVerrify: SendCloudVerrify,
                    Opmerkingen: Opmerkingen,
                    LastUser: LastUser,
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
                            by: {data.items.LastUser}


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
                                    {data.items.Opmerkingen.split("\r\n").map((item: any, index: any) => {
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
                    <FormTemplate data={data} isLog={false} />
                </div>
            </div>
        </div>
    )
}