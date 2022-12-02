import { Textarea } from "@material-tailwind/react";
import { Form } from "@remix-run/react";
import { GrDocumentPdf } from "react-icons/gr";
import MaintenanceTemplate from "./MaintenanceTemplate";
import OnderhoudEntry from "./OnderhoudEntry";

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
                <h3 className="text-xl pt-2 font-semibold">Marketing</h3>


                <label className="" htmlFor="AnalyticsCreate">Google Analytics aanmaken</label>
                <select disabled id="AnalyticsCreate" name="AnalyticsCreate" defaultValue={data.data.items.AnalyticsCreate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ReCaptchaCreate">ReCaptcha aanmaken</label>
                <select disabled id="ReCaptchaCreate" name="ReCaptchaCreate" defaultValue={data.data.items.ReCaptchaCreate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="FacebookInstaShop">Facebook en Instagram Shop</label>
                <select disabled id="FacebookInstaShop" name="FacebookInstaShop" defaultValue={data.data.items.FacebookInstaShop} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ActiveCampaign">Nieuwsbrief / Active Campaign</label>
                <select disabled id="ActiveCampaign" name="ActiveCampaign" defaultValue={data.data.items.ActiveCampaign} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Mockups">Mockups</label>
                <select disabled id="Mockups" name="Mockups" defaultValue={data.data.items.Mockups} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Development</h3>

                <label className="" htmlFor="Compressie">Compressie aanzetten</label>
                <select disabled id="Compressie" name="Compressie" defaultValue={data.data.items.Compressie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Copyright">Copyright met dynamisch jaartal in footer zetten</label>
                <select disabled id="Copyright" name="Copyright" defaultValue={data.data.items.Copyright} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="SocialMediaMeta">Social media metatags</label>
                <select disabled id="SocialMediaMeta" name="SocialMediaMeta" defaultValue={data.data.items.SocialMediaMeta} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="AnalyticsIntegrate">Google Analytics integratie</label>
                <select disabled id="AnalyticsIntegrate" name="AnalyticsIntegrate" defaultValue={data.data.items.AnalyticsIntegrate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="FacebookDebug">Facebook Debug testen</label>
                <select disabled id="FacebookDebug" name="FacebookDebug" defaultValue={data.data.items.FacebookDebug} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="LinkedInShare">LinkedIn Share testen</label>
                <select disabled id="LinkedInShare" name="LinkedInShare" defaultValue={data.data.items.LinkedInShare} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Lorem">Geen Lorem Ipsum of placeholder teksten meer</label>
                <select disabled id="Lorem" name="Lorem" defaultValue={data.data.items.Lorem} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Links">Alle linken en knoppen werken en gaan naar de juiste pagina's</label>
                <select disabled id="Links" name="Links" defaultValue={data.data.items.Links} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="SMTP">SMTP configureren en aanzetten</label>
                <select disabled id="SMTP" name="SMTP" defaultValue={data.data.items.SMTP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="TestMail">Test email laten sturen naar klant voor elk formulier en antwoord gehad van klant</label>
                <select disabled id="TestMail" name="TestMail" defaultValue={data.data.items.TestMail} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Loadspeed">Loadspeed (ms):</label>
                <input defaultValue={data.data.items.LoadspeedTime} className={"appearance-none p-1 m-1 w-12 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"LoadspeedTime"}></input>
                <select disabled id="Loadspeed" name="Loadspeed" defaultValue={data.data.items.Loadspeed} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ImageSize">Grootte van afbeeldingen (comprimeren)</label>
                <select disabled id="ImageSize" name="ImageSize" defaultValue={data.data.items.ImageSize} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="AltTags">Alt tags voor elke afbeelding zetten</label>
                <select disabled id="AltTags" name="AltTags" defaultValue={data.data.items.AltTags} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Htaccess">.htaccess plaatsen </label>
                <select disabled id="Htaccess" name="Htaccess" defaultValue={data.data.items.Htaccess} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Robots">Robots.txt plaatsen</label>
                <select disabled id="Robots" name="Robots" defaultValue={data.data.items.Robots} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Sitemap">Sitemap.xml plaatsen</label>
                <select disabled id="Sitemap" name="Sitemap" defaultValue={data.data.items.Sitemap} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="GDPR">GDPR: bij formulieren een akkoord zetten</label>
                <select disabled id="GDPR" name="GDPR" defaultValue={data.data.items.GDPR} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Plugins</h3>

                <label className="" htmlFor="MaterialWP">Material WP: Aangepast met logo, huiskleur en afbeelding</label>
                <select disabled id="MaterialWP" name="MaterialWP" defaultValue={data.data.items.MaterialWP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="EasyWPSMTP">Easy WP SMTP: SMTP configureren en aanzetten</label>
                <select disabled id="EasyWPSMTP" name="EasyWPSMTP" defaultValue={data.data.items.EasyWPSMTP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="WPS">WPS Hide Login: redirect van login-url naar /login zetten</label>
                <select disabled id="WPS" name="WPS" defaultValue={data.data.items.WPS} className="bg-gray-50 border m-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="WPOptimize">WP Optimize: caching van pagina's juist zetten (ContactForms excluden) + koppeling cloudflare cdn</label>
                <select disabled id="WPOptimize" name="WPOptimize" defaultValue={data.data.items.WPOptimize} className="bg-gray-50 border mb-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="shortpixel">ShortPixel + ShortPixel AI (API Key aan Kristof vragen)</label>
                <select disabled id="shortpixel" name="shortpixel" defaultValue={data.data.items.shortpixel} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />


                <label className="" htmlFor="yoast">Yoast SEO + geconfigureerd.</label>
                <select disabled id="yoast" name="yoast" defaultValue={data.data.items.yoast} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <label className="" htmlFor="SendCloud">SendCloud | Smart Shipping Service: connectie maken met WooCommerce en Sendcloud.</label>
                        <select disabled id="SendCloud" name="SendCloud" defaultValue={data.data.items.SendCloud} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommerce">WooCommerce</label>
                        <select disabled id="WooCommerce" name="WooCommerce" defaultValue={data.data.items.WooCommerce} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommerceAJAX">WooCommerce Ajax Sidecart + Velden in juiste taal zetten</label>
                        <select disabled id="WooCommerceAJAX" name="WooCommerceAJAX" defaultValue={data.data.items.WooCommerceAJAX} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WPML">WPML (Indien multi-language)</label>
                        <select disabled id="WPML" name="WPML" defaultValue={data.data.items.WPML} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommercePayPal">WooCommerce Paypal Checkout Gateway</label>
                        <select disabled id="WooCommercePayPal" name="WooCommercePayPal" defaultValue={data.data.items.WooCommercePayPal} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommercePDF">WooCommerce PDF Invoices & Packing Slips: facturen juist configureren met logo en gegevens van klant. In de footer verwijzing naar algemene voorwaarden.</label>
                        <select disabled id="WooCommercePDF" name="WooCommercePDF" defaultValue={data.data.items.WooCommercePDF} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommerceLoad">WooCommerce Load More (Van Be Rocket)</label>
                        <select disabled id="WooCommerceLoad" name="WooCommerceLoad" defaultValue={data.data.items.WooCommerceLoad} className="bg-gray-50 border mt-3 mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommerceStripe">WooCommerce Stripe Gateway: connectie maken met WooCommerce en Stripe. (NA OVERZET NAAR LIVE ZEKER SANDBOX MODE UITZETTEN EN CONFIGUREREN!!)</label>
                        <select disabled id="WooCommerceStripe" name="WooCommerceStripe" defaultValue={data.data.items.WooCommerceStripe} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />
                    </>
                ) : null}



                <label className="" htmlFor="KlantAanpassingen">Klant moet aanpassingen kunnen doen</label>
                <select disabled id="KlantAanpassingen" name="KlantAanpassingen" defaultValue={data.data.items.KlantAanpassingen} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="CapabilityManager">Capability Manager Enhanced: restricted gebruiker aanmaken en configureren</label>
                <select disabled id="CapabilityManager" name="CapabilityManager" defaultValue={data.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <h4 className="text-lg pt-2 font-semibold">Betaling</h4>


                        <label className="" htmlFor="Stripe">Stripe account aanmaken en configureren voor Mastercard/Visa & Bancontact</label>
                        <select disabled id="Stripe" name="Stripe" defaultValue={data.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />


                        <label className="" htmlFor="Betaalmethodes">Betaalmethodes correct configureren</label>
                        <select disabled id="Betaalmethodes" name="Betaalmethodes" defaultValue={data.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="Testen">Testen van betalingssystemen</label>
                        <select disabled id="Testen" name="Testen" defaultValue={data.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />


                    </>
                ) : null}

                <h4 className="text-lg pt-2 font-semibold">Mobiel</h4>

                <label className="" htmlFor="Mobile">Verifiëren dat site werkt en er goed uitziet op mobiel</label>
                <select disabled id="Mobile" name="Mobile" defaultValue={data.data.items.Mobile} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <h4 className="text-lg pt-2 font-semibold">PHP</h4>
                <label className="" htmlFor="PHPManager">PHP manager meest recente versie</label>
                <select disabled id="PHPManager" name="PHPManager" defaultValue={data.data.items.PHPManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="PHPIni">PHP.ini path zelfde versie</label>
                <select disabled id="PHPIni" name="PHPIni" defaultValue={data.data.items.PHPIni} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="RecaptchaIntegratie">Recaptcha integratie</label>
                <select disabled id="RecaptchaIntegratie" name="RecaptchaIntegratie" defaultValue={data.data.items.RecaptchaIntegratie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Blog">Blog / Nieuws</label>
                <select disabled id="Blog" name="Blog" defaultValue={data.data.items.Blog} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ProjectModule">ProjectModule</label>
                <select disabled id="ProjectModule" name="ProjectModule" defaultValue={data.data.items.ProjectModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="BookingsModule">BoekingsModule</label>
                <select disabled id="BookingsModule" name="BookingsModule" defaultValue={data.data.items.BookingsModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="BookingTool">BookingTool OV</label>
                <select disabled id="BookingTool" name="BookingTool" defaultValue={data.data.items.BookingTool} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="RealisatieModule">RealisatieModule</label>
                <select disabled id="RealisatieModule" name="RealisatieModule" defaultValue={data.data.items.RealisatieModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="SharingModule">SharingModule</label>
                <select disabled id="SharingModule" name="SharingModule" defaultValue={data.data.items.SharingModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="NieuwsBriefKoppeling">NieuwsBriefKoppeling</label>
                <select disabled id="NieuwsBriefKoppeling" name="NieuwsBriefKoppeling" defaultValue={data.data.items.NieuwsBriefKoppeling} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="MultiLanguage">MultiLanguage</label>
                <select disabled id="MultiLanguage" name="MultiLanguage" defaultValue={data.data.items.MultiLanguage} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="DelDev">Delete Dev omgeving</label>
                <select disabled id="DelDev" name="DelDev" defaultValue={data.data.items.DelDev} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Discussie">Discussie WP 3 vinkjes afzettern</label>
                <select disabled id="Discussie" name="Discussie" defaultValue={data.data.items.Discussie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Project Manager</h3>

                <label className="" htmlFor="QCFinal">Kwaliteitscontrole finale design</label>
                <select disabled id="QCFinal" name="QCFinal" defaultValue={data.data.items.QCFinal} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="LEGALPACK"> Legal Pack</label>
                <select disabled id="LEGALPACK" name="LEGALPACK" defaultValue={data.data.items.LEGALPACK} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-3/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                    <option value="AANVRAAG">Aanvraag ingediend</option>
                </select>
                <br />

                <label className="" htmlFor="AlgemeneVoorwaarden">Algemene Voorwaarden</label>
                <select disabled id="AlgemeneVoorwaarden" name="AlgemeneVoorwaarden" defaultValue={data.data.items.AlgemeneVoorwaarden} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="CookiePopUp">Cookie Policy pop-up</label>
                <select disabled id="CookiePopUp" name="CookiePopUp" defaultValue={data.data.items.CookiePopUp} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="OnderhoudsAbonnement">OnderhoudsAbonnement</label>
                <select disabled id="OnderhoudsAbonnement" name="OnderhoudsAbonnement" defaultValue={data.data.items.OnderhoudsAbonnement} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="OnderhoudsProject">Onderhouds Project</label>
                <select disabled id="OnderhoudsProject" name="OnderhoudsProject" defaultValue={data.data.items.OnderhoudsProject} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Technisch</h3>

                <label className="" htmlFor="SSLActive">SSL actief</label>
                <select disabled id="SSLActive" name="SSLActive" defaultValue={data.data.items.SSLActive} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="QCFirst">Kwaliteitscontrole eerste design</label>
                <select disabled id="QCFirst" name="QCFirst" defaultValue={data.data.items.QCFirst} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="PlaceholderMail">Placeholder E-mail voor klant</label>
                <select disabled id="PlaceholderMail" name="PlaceholderMail" defaultValue={data.data.items.PlaceholderMail} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Optimalisatie">Site optimalisatie aanzetten</label>
                <select disabled id="Optimalisatie" name="Optimalisatie" defaultValue={data.data.items.Optimalisatie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="SSLCheckup">SSL Checkup</label>
                <select disabled id="SSLCheckup" name="SSLCheckup" defaultValue={data.data.items.SSLCheckup} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="MailCheckup">Mail Checkup</label>
                <select disabled id="MailCheckup" name="MailCheckup" defaultValue={data.data.items.MailCheckup} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="FactuurHosting">Facturatie opgestart voor hosting en onderhoud? Communiceren naar Kristof</label>
                <select disabled id="FactuurHosting" name="FactuurHosting" defaultValue={data.data.items.FactuurHosting} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="KlantgegevensATMOS">Klantgegevens in ATMOS portal?</label>
                <select disabled id="KlantgegevensATMOS" name="KlantgegevensATMOS" defaultValue={data.data.items.KlantgegevensATMOS} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Cloudflare">Cloudflare opstart + Config + Rules (Door Atmos Admin)</label>
                <select disabled id="Cloudflare" name="Cloudflare" defaultValue={data.data.items.Cloudflare} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="CloudFlareInWordpress">Cloudflare in wordpress active?</label>
                <select disabled id="CloudFlareInWordpress" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1" name="CloudFlareInWordpress" defaultValue={data.data.items.CloudFlareInWordpress} >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="DoubleCheck">Double Check web SRV</label>
                <select disabled id="DoubleCheck" name="DoubleCheck" defaultValue={data.data.items.DoubleCheck} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                {data.data.list.isWebshop ? (
                    <>
                        <h4 className="text-l pt-2 font-semibold">Verzendingen</h4>

                        <label className="" htmlFor="SendCloudUser">Gebruiker aanmaken op SendCloud met placeholder_klant email. Klant zijn email ook koppelen.</label>
                        <select disabled id="CapabilityManager" name="CapabilityManager" defaultValue={data.data.items.CapabilityManager} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="SendCloudVerrify">Bankaccount verifiëren van klant met SendCloud</label>
                        <select disabled id="CapabilityManager" name="CapabilityManager" defaultValue={data.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />
                    </>
                ) : null}

                <h4 className="text-xl pt-2 font-semibold">Onderhoud</h4>
                {data.data.Onderhoud.length > 0 ?
                    (
                        data.data.Onderhoud.map((item: any) => (
                            item.Finished ?
                                <OnderhoudEntry key={item.Id} onderhoud={item} />
                                :
                                null
                        ))
                    ) : (
                        null
                    )
                }

                <br />

                <label className="text-xl pt-2 font-semibold" htmlFor="Opmerkingen">Opmerkingen
                </label>
                <br />
                <Textarea disabled resize className="bg-gray-200 bg-clip-content no-padding" color="blue" size="lg" variant="standard" defaultValue={data.data.items.Opmerkingen} name={"Opmerkingen"} placeholder={"Opmerkingen"}></Textarea>

                <br />

                <label className="print:hidden" htmlFor="nameDev">Naam developer
                </label>
                <br />
                <input defaultValue={data.data.items.lastUser} disabled className={" print:hidden appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} required type="text" name="nameDev" placeholder="git blame" />


                {/* button for PDF print note type=button to not submit the form */}
                <button type="button" className="float-right print:hidden">
                    <GrDocumentPdf onClick={() => print()} size={'30px'} />
                </button>
            </Form>
        </>
    )

}