import { Textarea } from "@material-tailwind/react";
import { Form, Link } from "@remix-run/react";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";
import MaintenanceTemplate from "./MaintenanceTemplate";

export default function FormTemplate(data: any) {
    return (
        <>
            {/* reusable form component */}
            <Form reloadDocument className="contact2-form" method="post">
                <h2 className="text-2xl font-semibold">Gegevens Klant</h2>
                <label htmlFor="KlantNummer">Klant Nummer: </label>
                <input required defaultValue={data.data.list.KlantNummer} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNummer"}></input>
                <br />

                <label htmlFor="KlantNaam">Klant Naam: </label>
                <input required defaultValue={data.data.list.KlantNaam} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNaam"}></input>
                <br />

                <label htmlFor="ProjectNaam">Projectnaam van klant: </label>
                <input required defaultValue={data.data.list.ProjectNaam} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNaam"}></input>
                <br />

                <label htmlFor="ProjectNummer">PO nummer project: </label>
                <input required defaultValue={data.data.list.ProjectNummer} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNummer"}></input>
                <br />

                <label htmlFor="Budget">Budget: €</label>
                <input defaultValue={data.data.list.Budget} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Budget"}></input>
                <br />

                <label htmlFor="Verantwoordelijke">Verantwoordelijke project: </label>
                <input required defaultValue={data.data.list.Verantwoordelijke} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Verantwoordelijke"}></input>
                <br />
                <h2 className="text-2xl pt-2 font-semibold">Checklist</h2>

                <h3 className="text-xl pt-2 font-semibold">Algemeen</h3>

                <input id="Compressie" defaultChecked={data.data.items.Compressie} type={"checkbox"} name={"Compressie"} ></input>
                <label className="p-1 m-1" htmlFor="Compressie">Compressie aanzetten</label>
                <br />

                <input id="Copyright" defaultChecked={data.data.items.Copyright} type={"checkbox"} name={"Copyright"}></input>
                <label className="p-1 m-1" htmlFor="Copyright">Copyright met dynamisch jaartal in footer zetten</label>
                <br />

                <input id="SocialMediaMeta" defaultChecked={data.data.items.SocialMediaMeta} type={"checkbox"} name={"SocialMediaMeta"}></input>
                <label className="p-1 m-1" htmlFor="SocialMediaMeta">Social media metatags</label>
                <br />

                <input id="GoogleAnalytics" defaultChecked={data.data.items.GoogleAnalytics} type={"checkbox"} name={"GoogleAnalytics"}></input>
                <label className="p-1 m-1" htmlFor="GoogleAnalytics">Google Analytics opgezet</label>
                <br />

                <input id="TagManager" defaultChecked={data.data.items.TagManager} type={"checkbox"} name={"TagManager"}></input>
                <label className="p-1 m-1" htmlFor="TagManager">Tag Manager code geintegreerd</label>
                <br />

                <input id="SSL" defaultChecked={data.data.items.SSL} type={"checkbox"} name={"SSL"}></input>
                <label className="p-1 m-1" htmlFor="SSL">SSL actief</label>
                <br />

                <input id="FacebookDebug" defaultChecked={data.data.items.FacebookDebug} type={"checkbox"} name={"FacebookDebug"}></input>
                <label className="p-1 m-1" htmlFor="FacebookDebug">Facebook Debug testen</label>
                <br />

                <input id="LinkedInShare" defaultChecked={data.data.items.LinkedInShare} type={"checkbox"} name={"LinkedInShare"}></input>
                <label className="p-1 m-1" htmlFor="LinkedInShare">LinkedIn Share testen</label>
                <br />

                <input id="Lorem" defaultChecked={data.data.items.Lorem} type={"checkbox"} name={"Lorem"}></input>
                <label className="p-1 m-1" htmlFor="Lorem">Geen Lorem Ipsum of placeholder teksten meer</label>
                <br />

                <input id="Links" defaultChecked={data.data.items.Links} type={"checkbox"} name={"Links"}></input>
                <label className="p-1 m-1" htmlFor="Links">Alle linken en knoppen werken en gaan naar de juiste pagina's</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Mail</h3>

                <input id="PlaceholderMail" defaultChecked={data.data.items.PlaceholderMail} type={"checkbox"} name={"PlaceholderMail"}></input>
                <label className="p-1 m-1" htmlFor="PlaceholderMail">Placeholder email aanmaken voor klant</label>
                <br />

                <input id="SMTP" defaultChecked={data.data.items.SMTP} type={"checkbox"} name={"SMTP"}></input>
                <label className="p-1 m-1" htmlFor="SMTP">SMTP configureren en aanzetten</label>
                <br />

                <input id="TestMail" defaultChecked={data.data.items.TestMail} type={"checkbox"} name={"TestMail"}></input>
                <label className="p-1 m-1" htmlFor="TestMail">Test email laten sturen naar klant voor elk formulier en antwoord gehad van klant</label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <input id="EmailTemplates" defaultChecked={data.data.items.EmailTemplates} type={"checkbox"} name={"EmailTemplates"}></input>
                        <label className="p-1 m-1" htmlFor="EmailTemplates">Email templates goed gezet voor orders</label>
                        <br />
                    </>
                ) : null}

                <h3 className="text-xl pt-2 font-semibold">Afbeeldingen</h3>

                <input id="Loadspeed" defaultChecked={data.data.items.Loadspeed} type={"checkbox"} name={"Loadspeed"}></input>
                <label className="p-1 m-1" htmlFor="Loadspeed">Loadspeed (ms):</label>
                <input defaultValue={data.data.items.LoadspeedTime} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"LoadspeedTime"}></input>
                <br />

                <input id="ImageSize" defaultChecked={data.data.items.ImageSize} type={"checkbox"} name={"ImageSize"}></input>
                <label className="p-1 m-1" htmlFor="ImageSize">Grootte van afbeeldingen (comprimeren)</label>
                <br />

                <input id="AltTags" defaultChecked={data.data.items.AltTags} type={"checkbox"} name={"AltTags"}></input>
                <label className="p-1 m-1" htmlFor="AltTags">Alt tags voor elke afbeelding zetten</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Bestanden</h3>

                <input id="Htaccess" defaultChecked={data.data.items.Htaccess} type={"checkbox"} name={"Htaccess"}></input>
                <label className="p-1 m-1" htmlFor="Htaccess">.htaccess plaatsen </label>
                <br />

                <input id="Robots" defaultChecked={data.data.items.Robots} type={"checkbox"} name={"Robots"}></input>
                <label className="p-1 m-1" htmlFor="Robots">Robots.txt plaatsen</label>
                <br />

                <input id="Sitemap" defaultChecked={data.data.items.Sitemap} type={"checkbox"} name={"Sitemap"}></input>
                <label className="p-1 m-1" htmlFor="Sitemap">Sitemap.xml plaatsen</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Policies&Voorwaarden</h3>

                <input id="Privacy" defaultChecked={data.data.items.Privacy} type={"checkbox"} name={"Privacy"}></input>
                <label className="p-1 m-1" htmlFor="Privacy">Privacy Policy</label>
                <br />

                <input id="AlgemeneVoorwaarden" defaultChecked={data.data.items.AlgemeneVoorwaarden} type={"checkbox"} name={"AlgemeneVoorwaarden"}></input>
                <label className="p-1 m-1" htmlFor="AlgemeneVoorwaarden">Algemene voorwaarden</label>
                <br />

                <input id="CookiePolicy" defaultChecked={data.data.items.CookiePolicy} type={"checkbox"} name={"CookiePolicy"}></input>
                <label className="p-1 m-1" htmlFor="CookiePolicy">Cookie policy</label>
                <br />

                <input id="CookiePolicyBanner" defaultChecked={data.data.items.CookiePolicyBanner} type={"checkbox"} name={"CookiePolicyBanner"}></input>
                <label className="p-1 m-1" htmlFor="CookiePolicyBanner">Cookie policy pop up</label>
                <br />

                <input id="GDPR" defaultChecked={data.data.items.GDPR} type={"checkbox"} name={"GDPR"}></input>
                <label className="p-1 m-1" htmlFor="GDPR">GDPR: bij formulieren een akkoord zetten</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Plugins</h3>

                <input id="MaterialWP" defaultChecked={data.data.items.MaterialWP} type={"checkbox"} name={"MaterialWP"}></input>
                <label className="p-1 m-1" htmlFor="MaterialWP">Material WP: Aangepast met logo, huiskleur en afbeelding</label>
                <br />

                <input id="EasyWPSMTP" defaultChecked={data.data.items.EasyWPSMTP} type={"checkbox"} name={"EasyWPSMTP"}></input>
                <label className="p-1 m-1" htmlFor="EasyWPSMTP">Easy WP SMTP: SMTP configureren en aanzetten</label>
                <br />

                <input id="WPS" defaultChecked={data.data.items.WPS} type={"checkbox"} name={"WPS"}></input>
                <label className="p-1 m-1" htmlFor="WPS">WPS Hide Login: redirect van login-url naar /login zetten</label>
                <br />

                <input id="WPfast" defaultChecked={data.data.items.WPfast} type={"checkbox"} name={"WPfast"}></input>
                <label className="p-1 m-1" htmlFor="WPfast">WP Fastestcache: caching van pagina's juist zetten (ContactForms excluden) + koppeling cloudflare cdn</label>
                <br />

                <input id="shortpixel" defaultChecked={data.data.items.shortpixel} type={"checkbox"} name={"shortpixel"}></input>
                <label className="p-1 m-1" htmlFor="shortpixel">ShortPixel + ShortPixel AI (API Key aan Kristof vragen)</label>
                <br />

                <input id="yoast" defaultChecked={data.data.items.yoast} type={"checkbox"} name={"yoast"}></input>
                <label className="p-1 m-1" htmlFor="yoast">Yoast SEO + geconfigureerd.</label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <input id="SendCloud" defaultChecked={data.data.items.SendCloud} type={"checkbox"} name={"SendCloud"}></input>
                        <label className="p-1 m-1" htmlFor="SendCloud">SendCloud | Smart Shipping Service: connectie maken met WooCommerce en Sendcloud.</label>
                        <br />

                        <input id="WooCommerce" defaultChecked={data.data.items.WooCommerce} type={"checkbox"} name={"WooCommerce"}></input>
                        <label className="p-1 m-1" htmlFor="WooCommerce">WooCommerce</label>
                        <br />

                        <input id="WooCommerceAJAX" defaultChecked={data.data.items.WooCommerceAJAX} type={"checkbox"} name={"WooCommerceAJAX"}></input>
                        <label className="p-1 m-1" htmlFor="WooCommerceAJAX">WooCommerce Ajax Sidecart + Velden in juiste taal zetten</label>
                        <br />

                        <input id="WPML" defaultChecked={data.data.items.WPML} type={"checkbox"} name={"WPML"}></input>
                        <label className="p-1 m-1" htmlFor="WPML">WPML (Indien multi-language)</label>
                        <br />

                        <input id="WooCommercePayPal" defaultChecked={data.data.items.WooCommercePayPal} type={"checkbox"} name={"WooCommercePayPal"}></input>
                        <label className="p-1 m-1" htmlFor="WooCommercePayPal">WooCommerce Paypal Checkout Gateway</label>
                        <br />

                        <input id="WooCommercePDF" defaultChecked={data.data.items.WooCommercePDF} type={"checkbox"} name={"WooCommercePDF"}></input>
                        <label className="p-1 m-1" htmlFor="WooCommercePDF">WooCommerce PDF Invoices & Packing Slips: facturen juist configureren met logo en gegevens van klant. In de footer verwijzing naar algemene voorwaarden.</label>
                        <br />

                        <input id="WooCommerceLoad" defaultChecked={data.data.items.WooCommerceLoad} type={"checkbox"} name={"WooCommerceLoad"}></input>
                        <label className="p-1 m-1" htmlFor="WooCommerceLoad">WooCommerce Load More (Van Be Rocket)</label>
                        <br />

                        <input id="WooCommerceStripe" defaultChecked={data.data.items.WooCommerceStripe} type={"checkbox"} name={"WooCommerceStripe"}></input>
                        <label className="p-1 m-1" htmlFor="WooCommerceStripe">WooCommerce Stripe Gateway: connectie maken met WooCommerce en Stripe. (NA OVERZET NAAR LIVE ZEKER SANDBOX MODE UITZETTEN EN CONFIGUREREN!!)</label>
                        <br />
                    </>
                ) : null}


                <input id="KlantAanpassingen" defaultChecked={data.data.items.KlantAanpassingen} type={"checkbox"} name={"KlantAanpassingen"}></input>
                <label className="p-1 m-1" htmlFor="KlantAanpassingen">Klant moet aanpassingen kunnen doen</label>
                <br />

                <input id="CapabilityManager" defaultChecked={data.data.items.CapabilityManager} type={"checkbox"} name={"CapabilityManager"}></input>
                <label className="p-1 m-1" htmlFor="CapabilityManager">Capability Manager Enhanced: restricted gebruiker aanmaken en configureren</label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <h3 className="text-xl pt-2 font-semibold">Betaling</h3>

                        <input id="Stripe" defaultChecked={data.data.items.Stripe} type={"checkbox"} name={"Stripe"}></input>
                        <label className="p-1 m-1" htmlFor="Stripe">Stripe account aanmaken en configureren voor Mastercard/Visa & Bancontact</label>
                        <br />

                        <input id="Betaalmethodes" defaultChecked={data.data.items.Betaalmethodes} type={"checkbox"} name={"Betaalmethodes"}></input>
                        <label className="p-1 m-1" htmlFor="Betaalmethodes">Betaalmethodes correct configureren</label>
                        <br />

                        <input id="Testen" defaultChecked={data.data.items.Testen} type={"checkbox"} name={"Testen"}></input>
                        <label className="p-1 m-1" htmlFor="Testen">Testen van betalingssystemen</label>
                        <br />

                        <h3 className="text-xl pt-2 font-semibold">Verzendingen</h3>

                        <input id="SendCloudUser" defaultChecked={data.data.items.SendCloudUser} type={"checkbox"} name={"SendCloudUser"}></input>
                        <label className="p-1 m-1" htmlFor="SendCloudUser">Gebruiker aanmaken op SendCloud met placeholder_klant email. Klant zijn email ook koppelen.</label>
                        <br />

                        <input id="SendCloudVerrify" defaultChecked={data.data.items.SendCloudVerrify} type={"checkbox"} name={"SendCloudVerrify"}></input>
                        <label className="p-1 m-1" htmlFor="SendCloudVerrify">Bankaccount verifiëren van klant met SendCloud</label>
                        <br />
                    </>
                ) : null}



                <h3 className="text-xl pt-2 font-semibold">Mobiel</h3>



                <input id="Mobile" defaultChecked={data.data.items.Mobile} type={"checkbox"} name={"Mobile"}></input>
                <label className="p-1 m-1" htmlFor="Mobile">Verifiëren dat site werkt en er goed uitziet op mobiel</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Hosting</h3>

                <input id="Optimalisatie" defaultChecked={data.data.items.Optimalisatie} type={"checkbox"} name={"Optimalisatie"}></input>
                <label className="p-1 m-1" htmlFor="Optimalisatie">Site optimalisatie aanzetten</label>
                <br />

                <input id="SSLCheckup" defaultChecked={data.data.items.SSLCheckup} type={"checkbox"} name={"SSLCheckup"}></input>
                <label className="p-1 m-1" htmlFor="SSLCheckup">SSL Checkup</label>
                <br />

                <input id="MailCheckup" defaultChecked={data.data.items.MailCheckup} type={"checkbox"} name={"MailCheckup"}></input>
                <label className="p-1 m-1" htmlFor="MailCheckup">Mail Checkup</label>
                <br />

                <input id="FactuurHosting" defaultChecked={data.data.items.FactuurHosting} type={"checkbox"} name={"FactuurHosting"}></input>
                <label className="p-1 m-1" htmlFor="FactuurHosting">Facturatie opgestart voor hosting en onderhoud? Communiceren naar Kristof</label>
                <br />

                <input id="KlantgegevensATMOS" defaultChecked={data.data.items.KlantgegevensATMOS} type={"checkbox"} name={"KlantgegevensATMOS"}></input>
                <label className="p-1 m-1" htmlFor="KlantgegevensATMOS">Klantgegevens in ATMOS portal?</label>
                <br />

                <input id="Cloudflare" defaultChecked={data.data.items.Cloudflare} type={"checkbox"} name={"Cloudflare"}></input>
                <label className="p-1 m-1" htmlFor="Cloudflare">Cloudflare opstart + Config + Rules (Door Atmos Admin)</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Finalisatie</h3>

                <input id="CommPM" defaultChecked={data.data.items.CommPM} type={"checkbox"} name={"CommPM"}></input>
                <label className="p-1 m-1" htmlFor="CommPM">Communicatie naar PM</label>
                <br />

                {data.data.isnew != true ?
                    <>
                        <MaintenanceTemplate />
                        <br />
                    </>
                    :null}


                <label className="text-xl pt-2 font-semibold" htmlFor="Opmerkingen">Opmerkingen</label>
                <br />
                <Textarea resize className="no-padding bg-gray-200 " color="blue" variant="standard" defaultValue={data.data.items.Opmerkingen} name={"Opmerkingen"} placeholder={"Opmerkingen"}></Textarea>

                <br />

                <label className="print:hidden" htmlFor="nameDev">Naam developer</label>
                <br />
                <input className={" no-padding print:hidden appearance-none bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} required type="text" name="nameDev" placeholder="git blame" />



                <div className="container-contact2-form-btn">
                    <div className="wrap-contact2-form-btn">
                        <div className="contact2-form-bgbtn"></div>
                        <div className="print:hidden">
                            <button className="contact2-form-btn" type={"submit"}>submit</button>
                        </div>
                    </div>
                </div>

                <div>
                    {data.data.list.Id == undefined ? (null) : (
                        <Link className="hover:text-gray-900" to={'/logs/' + data.data.list.Id} >
                            <MdOutlineHistory className="print:hidden float-left" size={'35px'} />
                        </Link>
                    )}


                    {/* button for PDF print note type=button to not submit the form */}
                    <button type="button" className="float-right print:hidden">
                        <GrDocumentPdf onClick={() => print()} size={'30px'} />
                    </button>
                </div>

            </Form>
        </>
    )

}