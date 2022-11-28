import { Textarea } from "@material-tailwind/react";
import { Form } from "@remix-run/react";
import React from "react";
import { GrDocumentPdf } from "react-icons/gr";

export default function LogTemplate(data: any) {
    function findlog(log: any) {
        if (log.Version == data.data.Version)
            return true
        else return false
    }
    return (
        <>
            {/* reusable form component */}
            <Form reloadDocument className="contact2-form" method="post">
                <h2 className="text-2xl font-semibold">Gegevens Klant</h2>
                <label className="form-control" htmlFor="KlantNummer">Klant Nummer:
                </label>
                <input disabled required defaultValue={data.data.list.KlantNummer} className={"appearance-none p-1 m-1 bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNummer"}></input>
                <br />

                <label className="form-control" htmlFor="KlantNaam">Klant Naam:
                </label>
                <input disabled required defaultValue={data.data.list.KlantNaam} className={"appearance-none p-1 m-1 bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNaam"}></input>
                <br />

                <label className="form-control" htmlFor="ProjectNaam">Projectnaam van klant:
                </label>
                <input disabled required defaultValue={data.data.list.ProjectNaam} className={"appearance-none p-1 m-1 bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNaam"}></input>
                <br />

                <label className="form-control" htmlFor="ProjectNummer">PO nummer project:
                </label>
                <input disabled required defaultValue={data.data.list.ProjectNummer} className={"appearance-none p-1 m-1 bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNummer"}></input>
                <br />

                <label className="form-control" htmlFor="Budget">Budget: €
                </label>
                <input disabled defaultValue={data.data.list.Budget} className={"appearance-none p-1 m-1 bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Budget"}></input>
                <br />

                <label className="form-control" htmlFor="Verantwoordelijke">Verantwoordelijke project:
                </label>
                <input disabled required defaultValue={data.data.list.Verantwoordelijke} className={"appearance-none p-1 m-1 bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Verantwoordelijke"}></input>
                <br />
                <h2 className="text-2xl pt-2 font-semibold">Checklist</h2>

                <h3 className="text-xl pt-2 font-semibold">Algemeen</h3>

                <label className="form-control" htmlFor="Compressie">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Compressie} type={"checkbox"} id="logcheck" name={"Compressie"} ></input>
                    Compressie aanzetten
                </label>
                <br />

                <label className="form-control" htmlFor="Copyright">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Copyright} type={"checkbox"} id="logcheck" name={"Copyright"}></input>
                    Copyright met dynamisch jaartal in footer zetten
                </label>
                <br />

                <label className="form-control" htmlFor="SocialMediaMeta">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SocialMediaMeta} type={"checkbox"} id="logcheck" name={"SocialMediaMeta"}></input>
                    Social media metatags
                </label>
                <br />

                <label className="form-control" htmlFor="Analytics">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Analytics} type={"checkbox"} id="logcheck" name={"Analytics"}></input>
                    Google Analytics opgezet
                </label>
                <br />

                <label className="form-control" htmlFor="TagManager">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].TagManager} type={"checkbox"} id="logcheck" name={"TagManager"}></input>
                    Tag Manager code geintegreerd
                </label>
                <br />

                <label className="form-control" htmlFor="SSL">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SSL} type={"checkbox"} id="logcheck" name={"SSL"}></input>
                    SSL actief
                </label>
                <br />

                <label className="form-control" htmlFor="FacebookDebug">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].FacebookDebug} type={"checkbox"} id="logcheck" name={"FacebookDebug"}></input>
                    Facebook Debug testen
                </label>
                <br />

                <label className="form-control" htmlFor="LinkedInShare">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].LinkedInShare} type={"checkbox"} id="logcheck" name={"LinkedInShare"}></input>
                    LinkedIn Share testen
                </label>
                <br />

                <label className="form-control" htmlFor="Lorem">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Lorem} type={"checkbox"} id="logcheck" name={"Lorem"}></input>
                    Geen Lorem Ipsum of placeholder teksten meer
                </label>
                <br />

                <label className="form-control" htmlFor="Links">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Links} type={"checkbox"} id="logcheck" name={"Links"}></input>
                    Alle linken en knoppen werken en gaan naar de juiste pagina's
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Mail</h3>

                <label className="form-control" htmlFor="PlaceholderMail">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].PlaceholderMail} type={"checkbox"} id="logcheck" name={"PlaceholderMail"}></input>
                    Placeholder email aanmaken voor klant
                </label>
                <br />

                <label className="form-control" htmlFor="SMTP">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SMTP} type={"checkbox"} id="logcheck" name={"SMTP"}></input>
                    SMTP configureren en aanzetten
                </label>
                <br />

                <label className="form-control" htmlFor="TestMail">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].TestMail} type={"checkbox"} id="logcheck" name={"TestMail"}></input>
                    Test email laten sturen naar klant voor elk formulier en antwoord gehad van klant
                </label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <label className="form-control" htmlFor="EmailTemplates">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].EmailTemplates} type={"checkbox"} id="logcheck" name={"EmailTemplates"}></input>
                            Email templates goed gezet voor orders
                        </label>
                        <br />
                    </>
                ) : null}

                <h3 className="text-xl pt-2 font-semibold">Afbeeldingen</h3>

                <label className="form-control" htmlFor="Loadspeed">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Loadspeed} type={"checkbox"} id="logcheck" name={"Loadspeed"}></input>
                    Loadspeed (ms):
                </label>
                <input disabled defaultValue={data.data.items[data.data.items.findIndex(findlog)].LoadspeedTime} className={"appearance-none p-1 m-1 bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"LoadspeedTime"}></input>
                <br />

                <label className="form-control" htmlFor="ImageSize">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].ImageSize} type={"checkbox"} id="logcheck" name={"ImageSize"}></input>
                    Grootte van afbeeldingen (comprimeren)
                </label>
                <br />

                <label className="form-control" htmlFor="AltTags">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].AltTags} type={"checkbox"} id="logcheck" name={"AltTags"}></input>
                    Alt tags voor elke afbeelding zetten
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Bestanden</h3>

                <label className="form-control" htmlFor="Htaccess">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Htaccess} type={"checkbox"} id="logcheck" name={"Htaccess"}></input>
                    .htaccess plaatsen
                </label>
                <br />

                <label className="form-control" htmlFor="Robots">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Robots} type={"checkbox"} id="logcheck" name={"Robots"}></input>
                    Robots.txt plaatsen
                </label>
                <br />

                <label className="form-control" htmlFor="Sitemap">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Sitemap} type={"checkbox"} id="logcheck" name={"Sitemap"}></input>
                    Sitemap.xml plaatsen
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Policies&Voorwaarden</h3>

                <label className="form-control" htmlFor="Privacy">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Privacy} type={"checkbox"} id="logcheck" name={"Privacy"}></input>
                    Privacy Policy
                </label>
                <br />

                <label className="form-control" htmlFor="AlgemeneVoorwaarden">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].AlgemeneVoorwaarden} type={"checkbox"} id="logcheck" name={"AlgemeneVoorwaarden"}></input>
                    Algemene voorwaarden
                </label>
                <br />

                <label className="form-control" htmlFor="CookiePolicy">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].CookiePolicy} type={"checkbox"} id="logcheck" name={"CookiePolicy"}></input>
                    Cookie policy
                </label>
                <br />

                <label className="form-control" htmlFor="CookiePolicyBanner">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].CookiePolicyBanner} type={"checkbox"} id="logcheck" name={"CookiePolicyBanner"}></input>
                    Cookie policy pop up
                </label>
                <br />

                <label className="form-control" htmlFor="GDPR">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].GDPR} type={"checkbox"} id="logcheck" name={"GDPR"}></input>
                    GDPR: bij formulieren een akkoord zetten
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Plugins</h3>

                <label className="form-control" htmlFor="MaterialWP">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].MaterialWP} type={"checkbox"} id="logcheck" name={"MaterialWP"}></input>
                    Material WP: Aangepast met logo, huiskleur en afbeelding
                </label>
                <br />

                <label className="form-control" htmlFor="EasyWPSMTP">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].EasyWPSMTP} type={"checkbox"} id="logcheck" name={"EasyWPSMTP"}></input>
                    Easy WP SMTP: SMTP configureren en aanzetten
                </label>
                <br />

                <label className="form-control" htmlFor="WPS">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WPS} type={"checkbox"} id="logcheck" name={"WPS"}></input>
                    WPS Hide Login: redirect van login-url naar /login zetten
                </label>
                <br />

                <label className="form-control" htmlFor="WPfast">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WPfast} type={"checkbox"} id="logcheck" name={"WPfast"}></input>
                    WP Fastestcache: caching van pagina's juist zetten (ContactForms excluden) + koppeling cloudflare cdn
                </label>
                <br />

                <label className="form-control" htmlFor="shortpixel">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].shortpixel} type={"checkbox"} id="logcheck" name={"shortpixel"}></input>
                    ShortPixel + ShortPixel AI (API Key aan Kristof vragen)
                </label>
                <br />

                <label className="form-control" htmlFor="yoast">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].yoast} type={"checkbox"} id="logcheck" name={"yoast"}></input>
                    Yoast SEO + geconfigureerd.
                </label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <label className="form-control" htmlFor="SendCloud">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SendCloud} type={"checkbox"} id="logcheck" name={"SendCloud"}></input>
                            SendCloud | Smart Shipping Service: connectie maken met WooCommerce en Sendcloud.
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerce">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerce} type={"checkbox"} id="logcheck" name={"WooCommerce"}></input>
                            WooCommerce
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerceAJAX">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceAJAX} type={"checkbox"} id="logcheck" name={"WooCommerceAJAX"}></input>
                            WooCommerce Ajax Sidecart + Velden in juiste taal zetten
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WPML">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WPML} type={"checkbox"} id="logcheck" name={"WPML"}></input>
                            WPML (Indien multi-language)
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommercePayPal">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommercePayPal} type={"checkbox"} id="logcheck" name={"WooCommercePayPal"}></input>
                            WooCommerce Paypal Checkout Gateway
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommercePDF">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommercePDF} type={"checkbox"} id="logcheck" name={"WooCommercePDF"}></input>
                            WooCommerce PDF Invoices & Packing Slips: facturen juist configureren met logo en gegevens van klant. In de footer verwijzing naar algemene voorwaarden.
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerceLoad">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceLoad} type={"checkbox"} id="logcheck" name={"WooCommerceLoad"}></input>
                            WooCommerce Load More (Van Be Rocket)
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerceStripe">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceStripe} type={"checkbox"} id="logcheck" name={"WooCommerceStripe"}></input>
                            WooCommerce Stripe Gateway: connectie maken met WooCommerce en Stripe.
                        </label>
                        <br />
                    </>
                ) : null}


                <label className="form-control" htmlFor="KlantAanpassingen">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].KlantAanpassingen} type={"checkbox"} id="logcheck" name={"KlantAanpassingen"}></input>
                    Klant moet aanpassingen kunnen doen
                </label>
                <br />

                <label className="form-control" htmlFor="CapabilityManager">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].CapabilityManager} type={"checkbox"} id="logcheck" name={"CapabilityManager"}></input>
                    Capability Manager Enhanced: restricted gebruiker aanmaken en configureren
                </label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <h3 className="text-xl pt-2 font-semibold">Betaling</h3>

                        <label className="form-control" htmlFor="Stripe">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Stripe} type={"checkbox"} id="logcheck" name={"Stripe"}></input>
                            Stripe account aanmaken en configureren voor Mastercard/Visa & Bancontact
                        </label>
                        <br />

                        <label className="form-control" htmlFor="Betaalmethodes">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Betaalmethodes} type={"checkbox"} id="logcheck" name={"Betaalmethodes"}></input>
                            Betaalmethodes correct configureren
                        </label>
                        <br />

                        <label className="form-control" htmlFor="Testen">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Testen} type={"checkbox"} id="logcheck" name={"Testen"}></input>
                            Testen van betalingssystemen
                        </label>
                        <br />

                        <h3 className="text-xl pt-2 font-semibold">Verzendingen</h3>
                        <label className="form-control" htmlFor="SendCloudUser">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SendCloudUser} type={"checkbox"} id="logcheck" name={"SendCloudUser"}></input>
                            Gebruiker aanmaken op SendCloud met placeholder_klant email. Klant zijn email ook koppelen.
                        </label>
                        <br />

                        <label className="form-control" htmlFor="SendCloudVerrify">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SendCloudVerrify} type={"checkbox"} id="logcheck" name={"SendCloudVerrify"}></input>
                            Bankaccount verifiëren van klant met SendCloud
                        </label>
                        <br />
                    </>
                ) : null}


                <h3 className="text-xl pt-2 font-semibold">Mobiel</h3>
                <label className="form-control" htmlFor="Mobile">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Mobile} type={"checkbox"} id="logcheck" name={"Mobile"}></input>
                    Verifiëren dat site werkt en er goed uitziet op mobiel
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Hosting</h3>

                <label className="form-control" htmlFor="Optimalisatie">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Optimalisatie} type={"checkbox"} id="logcheck" name={"Optimalisatie"}></input>
                    Site optimalisatie aanzetten
                </label>
                <br />

                <label className="form-control" htmlFor="SSLCheckup">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SSLCheckup} type={"checkbox"} id="logcheck" name={"SSLCheckup"}></input>
                    SSL Checkup
                </label>
                <br />

                <label className="form-control" htmlFor="MailCheckup">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].MailCheckup} type={"checkbox"} id="logcheck" name={"MailCheckup"}></input>
                    Mail Checkup
                </label>
                <br />

                <label className="form-control" htmlFor="FactuurHosting">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].FactuurHosting} type={"checkbox"} id="logcheck" name={"FactuurHosting"}></input>
                    Facturatie opgestart voor hosting en onderhoud? Communiceren naar Kristof
                </label>
                <br />

                <label className="form-control" htmlFor="KlantgegevensATMOS">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].KlantgegevensATMOS} type={"checkbox"} id="logcheck" name={"KlantgegevensATMOS"}></input>
                    Klantgegevens in ATMOS portal?
                </label>
                <br />

                <label className="form-control" htmlFor="Cloudflare">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Cloudflare} type={"checkbox"} id="logcheck" name={"Cloudflare"}></input>
                    Cloudflare opstart + Config + Rules (Door Atmos Admin)
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Finalisatie</h3>

                <label className="form-control" htmlFor="CommPM">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].CommPM} type={"checkbox"} id="logcheck" name={"CommPM"}></input>
                    Communicatie naar PM
                </label>
                <br />

                <label className="" htmlFor="CloudFlareInWordpress">Cloudflare in wordpress active?</label>
                <select disabled id="CloudFlareInWordpress" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="CloudFlareInWordpress" defaultValue={data.data.items.CloudFlareInWordpress} >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                
                <label className="" htmlFor="DoubleCheck">Double Check web SRV</label>
                <select disabled id="DoubleCheck" name="DoubleCheck"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].DoubleCheck} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="LEGALPACK"> Legal Pack</label>
                <select disabled id="LEGALPACK" name="LEGALPACK"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].LEGALPACK} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-3/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                    <option value="AANVRAAG">Aanvraag ingediend</option>
                </select>
                <br />

                <label className="" htmlFor="OnderhoudsAbonnement">OnderhoudsAbonnement</label>
                <select disabled id="OnderhoudsAbonnement" name="OnderhoudsAbonnement"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].OnderhoudsAbonnement} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="OnderhoudsProject">Onderhouds Project</label>
                <select disabled id="OnderhoudsProject" name="OnderhoudsProject"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].OnderhoudsProject} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="FacebookInstaShop">Facebook en Instagram Shop</label>
                <select disabled id="FacebookInstaShop" name="FacebookInstaShop"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].FacebookInstaShop} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ReCaptcha">ReCaptcha</label>
                <select disabled id="ReCaptcha" name="ReCaptcha"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].ReCaptcha} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ActiveCampaign">Nieuwsbrief / Active Campaign</label>
                <select disabled id="ActiveCampaign" name="ActiveCampaign"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].ActiveCampaign} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />
                
                <label className="" htmlFor="Mockups">Mockups</label>
                <select disabled id="Mockups" name="Mockups"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].Mockups} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Blog">Blog / Nieuws</label>
                <select disabled id="Blog" name="Blog"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].Blog} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ProjectModule">ProjectModule</label>
                <select disabled id="ProjectModule" name="ProjectModule"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].ProjectModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="BookingsModule">BoekingsModule</label>
                <select disabled id="BookingsModule" name="BookingsModule"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].BookingsModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="BookingTool">BookingTool OV</label>
                <select disabled id="BookingTool" name="BookingTool"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].BookingTool} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="RealisatieModule">RealisatieModule</label>
                <select disabled id="RealisatieModule" name="RealisatieModule"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].RealisatieModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="SharingModule">SharingModule</label>
                <select disabled id="SharingModule" name="SharingModule"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].SharingModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="NieuwsBriefKoppeling">NieuwsBriefKoppeling</label>
                <select disabled id="NieuwsBriefKoppeling" name="NieuwsBriefKoppeling"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].NieuwsBriefKoppeling} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="MultiLanguage">MultiLanguage</label>
                <select disabled id="MultiLanguage" name="MultiLanguage"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].MultiLanguage} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="DelDev">Delete Dev omgeving</label>
                <select disabled id="DelDev" name="DelDev"  defaultValue={data.data.items[data.data.items.findIndex(findlog)].DelDev} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="text-xl pt-2 font-semibold" htmlFor="Opmerkingen">Opmerkingen
                </label>
                <br />
                <Textarea disabled resize className="bg-gray-200 bg-clip-content no-padding" color="blue" size="lg" variant="standard" defaultValue={data.data.items[data.data.items.findIndex(findlog)].Opmerkingen} name={"Opmerkingen"} placeholder={"Opmerkingen"}></Textarea>

                <br />

                <label className="print:hidden" htmlFor="nameDev">Naam developer
                </label>
                <br />
                <input defaultValue={data.data.items[data.data.items.findIndex(findlog)].lastUser} disabled className={" print:hidden appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} required type="text" name="nameDev" placeholder="git blame" />


                {/* button for PDF print note type=button to not submit the form */}
                <button type="button" className="float-right print:hidden">
                    <GrDocumentPdf onClick={() => print()} size={'30px'} />
                </button>
            </Form>
        </>
    )

}