import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";


//import stylesheets for the page
import styles from '../../styles/app.css';
import main from '../../styles/main.css';
//import form component
import FormTemplate from "~/component/FormTemplate";


//link imported styles to the page
export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: main },
    ];
}

//define types for the data used by the action function
type ActionData = {
    formError?: string;
}


const badRequest = (data: ActionData) =>
    json(data, { status: 400 });

//action function gets called when form is submitted
export const action: ActionFunction = async ({ request }) => {
    //get the form data from the request
    const form = await request.formData();
    //get the values from the form
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
    const yoastDuplicate = form.get("yoastDuplicate")?.toString();
    const Smartphone = form.get("Smartphone")?.toString();
    const footervoorwaarden = form.get("footervoorwaarden")?.toString();
    const facebookwoocomerce = form.get("facebookwoocomerce")?.toString();
    const flexcheckout = form.get("flexcheckout")?.toString();
    const Themify = form.get("Themify")?.toString();
    const WoocomerceVAT = form.get("WoocomerceVAT")?.toString();
    const DiviBuilder = form.get("DiviBuilder")?.toString();


//check if fields are filled in correctly
    if (!KlantNaam || !KlantNummer || !ProjectNaam || !ProjectNummer || !Budget || !Verantwoordelijke || !LastUser) { return badRequest({ formError: "Form not filled in correctly" }) }
//create a new checklist in db with provided data
    await db.checkList.create({
        data: {
            KlantNaam: KlantNaam,
            KlantNummer: KlantNummer,
            ProjectNaam: ProjectNaam,
            ProjectNummer: ProjectNummer,
            Budget: Budget,
            Verantwoordelijke: Verantwoordelijke,
            isWebshop: true,
            isActive: true,
            CheckListItems: {
                create: {
                    Version: 1,
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
                    yoastDuplicate: yoastDuplicate,
                    Smartphone: Smartphone,
                    footervoorwaarden: footervoorwaarden,
                    facebookwoocomerce: facebookwoocomerce,
                    flexcheckout: flexcheckout,
                    Themify: Themify,
                    WoocomerceVAT: WoocomerceVAT,
                    DiviBuilder: DiviBuilder,
                }
            }
        }
    })
    //redirect to the list page
    return (redirect("/list"))

}


export default function Webshop() {
    //dummy data to fill the formtemplate we use this so we can use the same template for all the forms and logs
    //when adding a new field to the form you need to add it here as well
    const templatedata = {
        isnew: true,
        list: {
            KlantNummer: "",
            KlantNaam: "",
            ProjectNummer: "",
            ProjectNaam: "",
            Budget: "",
            Verantwoordelijke: "",
            isWebshop: true,
            isActive: true,
        },
        items: {
            AnalyticsCreate: "",
            ReCaptchaCreate: "",
            FacebookInstaShop: "",
            ActiveCampaign: "",
            Mockups: "",
            Compressie: "",
            Copyright: "",
            SocialMediaMeta: "",
            AnalyticsIntegrate: "",
            FacebookDebug: "",
            LinkedInShare: "",
            Lorem: "",
            Links: "",
            SMTP: "",
            TestMail: "",
            Loadspeed: "",
            LoadspeedTime: "",
            ImageSize: "",
            AltTags: "",
            Htaccess: "",
            Robots: "",
            Sitemap: "",
            GDPR: "",
            MaterialWP: "",
            EasyWPSMTP: "",
            WPS: "",
            WPOptimize: "",
            shortpixel: "",
            yoast: "",
            SendCloud: "",
            WooCommerce: "",
            WooCommerceAJAX: "",
            WPML: "",
            WooCommercePayPal: "",
            WooCommercePDF: "",
            WooCommerceLoad: "",
            WooCommerceStripe: "",
            KlantAanpassingen: "",
            CapabilityManager: "",
            Stripe: "",
            Betaalmethodes: "",
            Testen: "",
            Mobile: "",
            PHPManager: "",
            PHPIni: "",
            RecaptchaIntegratie: "",
            Blog: "",
            ProjectModule: "",
            BookingsModule: "",
            BookingTool: "",
            RealisatieModule: "",
            SharingModule: "",
            NieuwsBriefKoppeling: "",
            MultiLanguage: "",
            DelDev: "",
            Discussie: "",
            QCFinal: "",
            LEGALPACK: "",
            AlgemeneVoorwaarden: "",
            CookiePopUp: "",
            OnderhoudsAbonnement: "",
            OnderhoudsProject: "",
            SSLActive: "",
            QCFirst: "",
            PlaceholderMail: "",
            Optimalisatie: "",
            SSLCheckup: "",
            MailCheckup: "",
            FactuurHosting: "",
            KlantgegevensATMOS: "",
            Cloudflare: "",
            CloudFlareInWordpress: "",
            DoubleCheck: "",
            SendCloudUser: "",
            SendCloudVerrify: "",
            Opmerkingen: "",
            lastUser: "",
            yoastDuplicate: "",
            Smartphone: "",
            footervoorwaarden: "",
            facebookwoocomerce: "",
            flexcheckout: "",
            Themify: "",
            WoocomerceVAT: "",
            DiviBuilder: "",
        }


    }
    return (
        <div className="bg-contact2">
            <div className="container-contact2">
                <div className="wrap-contact2">
                    <span className="contact2-form-title">
                        <h1>Checklist Webshop</h1>
                    </span>
                    {/* call form component */}
                    <FormTemplate data={templatedata} isLog={false} />




                </div>
            </div>
        </div>
    )
}