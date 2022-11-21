import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import styles from '../../styles/app.css';
import main from '../../styles/main.css';
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

//action function gets called when form is submitted
export const action: ActionFunction = async ({ request }) => {
  //get the data from the form
  const form = await request.formData();
  //set form data to variables
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

  //check if all required fields are filled in
  if (typeof KlantNummer !== "string" || typeof KlantNaam !== "string" || typeof ProjectNummer !== "string" || typeof ProjectNaam !== "string" || typeof Budget !== "string" || typeof Verantwoordelijke !== "string" || typeof Compressie !== "boolean" || typeof Copyright !== "boolean" || typeof SocialMediaMeta !== "boolean" || typeof SSL !== "boolean" || typeof FacebookDebug !== "boolean" || typeof LinkedInShare !== "boolean" || typeof PlaceholderMail !== "boolean" || typeof SMTP !== "boolean" || typeof Loadspeed !== "boolean" || typeof LoadspeedTime !== "string" || typeof ImageSize !== "boolean" || typeof AltTags !== "boolean" || typeof Htaccess !== "boolean" || typeof Sitemap !== "boolean" || typeof Robots !== "boolean" || typeof Privacy !== "boolean" || typeof AlgemeneVoorwaarden !== "boolean" || typeof CookiePolicy !== "boolean" || typeof GDPR !== "boolean" || typeof CookiePolicyBanner !== "boolean" || typeof EasyWPSMTP !== "boolean" || typeof WPS !== "boolean" || typeof KlantAanpassingen !== "boolean" || typeof CapabilityManager !== "boolean" || typeof Mobile !== "boolean" || typeof Optimalisatie !== "boolean" || typeof SSLCheckup !== "boolean" || typeof MailCheckup !== "boolean" || typeof FactuurHosting !== "boolean") { return badRequest({ formError: "Form not submitted correctly" }) }

  //create new checklist in db
  await db.checkList.create({
    data: {
      KlantNummer: KlantNummer,
      KlantNaam: KlantNaam,
      ProjectNummer: ProjectNummer,
      ProjectNaam: ProjectNaam,
      Budget: Budget,
      Verantwoordelijke: Verantwoordelijke,
      isWebshop: false,
      CheckListItems: {
        create: {
          Version: 1,
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


export default function Website() {
  //define dumy data to be used by form component
  const templatedata = {
    isnew: true,
    list: {
      KlantNummer: "",
      KlantNaam: "",
      ProjectNummer: "",
      ProjectNaam: "",
      Budget: "",
      Verantwoordelijke: "",
      isWebshop: false,
    },
    items: {

      Compressie: false,
      Copyright: false,
      SocialMediaMeta: false,
      GoogleAnalytics: false,
      TagManager: false,
      SSL: false,
      FacebookDebug: false,
      LinkedInShare: false,
      Lorem: false,
      Links: false,
      PlaceholderMail: false,
      SMTP: false,
      TestMail: false,
      EmailTemplates: false,
      Loadspeed: false,
      LoadspeedTime: '',
      ImageSize: false,
      AltTags: false,
      Htaccess: false,
      Sitemap: false,
      Robots: false,
      Privacy: false,
      AlgemeneVoorwaarden: false,
      CookiePolicy: false,
      GDPR: false,
      CookiePolicyBanner: false,
      MaterialWP: false,
      EasyWPSMTP: false,
      WPS: false,
      WPfast: false,
      shortpixel: false,
      yoast: false,
      SendCloud: false,
      WooCommerce: false,
      WooCommerceAJAX: false,
      WPML: false,
      WooCommercePayPal: false,
      WooCommercePDF: false,
      WooCommerceLoad: false,
      WooCommerceStripe: false,
      KlantAanpassingen: false,
      CapabilityManager: false,
      Stripe: false,
      Betaalmethodes: false,
      Testen: false,
      SendCloudUser: false,
      SendCloudVerrify: false,
      Mobile: false,
      Optimalisatie: false,
      SSLCheckup: false,
      MailCheckup: false,
      FactuurHosting: false,
      KlantgegevensATMOS: false,
      Cloudflare: false,
      CommPM: false,
    }
  }
  return (
    <div className="bg-contact2">
      <div className="container-contact2">
        <div className="wrap-contact2">
          <span className="contact2-form-title">
            <h1>Checklist Website</h1>
          </span>
          <FormTemplate data={templatedata} />
        </div>
      </div>
    </div>
  );
}
