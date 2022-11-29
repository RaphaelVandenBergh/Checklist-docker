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
                <h3 className="text-xl pt-2 font-semibold">Marketing</h3>


                <label className="" htmlFor="AnalyticsCreate">Google Analytics aanmaken</label>
                <select id="AnalyticsCreate" name="AnalyticsCreate" defaultValue={data.data.items.AnalyticsCreate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ReCaptchaCreate">ReCaptcha aanmaken</label>
                <select id="ReCaptchaCreate" name="ReCaptchaCreate" defaultValue={data.data.items.ReCaptchaCreate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="FacebookInstaShop">Facebook en Instagram Shop</label>
                <select id="FacebookInstaShop" name="FacebookInstaShop" defaultValue={data.data.items.FacebookInstaShop} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ActiveCampaign">Nieuwsbrief / Active Campaign</label>
                <select id="ActiveCampaign" name="ActiveCampaign" defaultValue={data.data.items.ActiveCampaign} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Mockups">Mockups</label>
                <select id="Mockups" name="Mockups" defaultValue={data.data.items.Mockups} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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
                <select id="Compressie" name="Compressie" defaultValue={data.data.items.Compressie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Copyright">Copyright met dynamisch jaartal in footer zetten</label>
                <select id="Copyright" name="Copyright" defaultValue={data.data.items.Copyright} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="SocialMediaMeta">Social media metatags</label>
                <select id="SocialMediaMeta" name="SocialMediaMeta" defaultValue={data.data.items.SocialMediaMeta} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="AnalyticsIntegrate">Google Analytics integratie</label>
                <select id="AnalyticsIntegrate" name="AnalyticsIntegrate" defaultValue={data.data.items.AnalyticsIntegrate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="FacebookDebug">Facebook Debug testen</label>
                <select id="FacebookDebug" name="FacebookDebug" defaultValue={data.data.items.FacebookDebug} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="LinkedInShare">LinkedIn Share testen</label>
                <select id="LinkedInShare" name="LinkedInShare" defaultValue={data.data.items.LinkedInShare} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Lorem">Geen Lorem Ipsum of placeholder teksten meer</label>
                <select id="Lorem" name="Lorem" defaultValue={data.data.items.Lorem} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Links">Alle linken en knoppen werken en gaan naar de juiste pagina's</label>
                <select id="Links" name="Links" defaultValue={data.data.items.Links} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="SMTP">SMTP configureren en aanzetten</label>
                <select id="SMTP" name="SMTP" defaultValue={data.data.items.SMTP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="TestMail">Test email laten sturen naar klant voor elk formulier en antwoord gehad van klant</label>
                <select id="TestMail" name="TestMail" defaultValue={data.data.items.TestMail} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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
                <select id="Loadspeed" name="Loadspeed" defaultValue={data.data.items.Loadspeed} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ImageSize">Grootte van afbeeldingen (comprimeren)</label>
                <select id="ImageSize" name="ImageSize" defaultValue={data.data.items.ImageSize} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="AltTags">Alt tags voor elke afbeelding zetten</label>
                <select id="AltTags" name="AltTags" defaultValue={data.data.items.AltTags} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Htaccess">.htaccess plaatsen </label>
                <select id="Htaccess" name="Htaccess" defaultValue={data.data.items.Htaccess} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Robots">Robots.txt plaatsen</label>
                <select id="Robots" name="Robots" defaultValue={data.data.items.Robots} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="Sitemap">Sitemap.xml plaatsen</label>
                <select id="Sitemap" name="Sitemap" defaultValue={data.data.items.Sitemap} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="GDPR">GDPR: bij formulieren een akkoord zetten</label>
                <select id="GDPR" name="GDPR" defaultValue={data.data.items.GDPR} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="WPOptimize">WP Optimize: caching van pagina's juist zetten (ContactForms excluden) + koppeling cloudflare cdn</label>
                <select id="WPOptimize" name="WPOptimize" defaultValue={data.data.items.WPOptimize} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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
                <select id="MaterialWP" name="MaterialWP" defaultValue={data.data.items.MaterialWP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="EasyWPSMTP">Easy WP SMTP: SMTP configureren en aanzetten</label>
                <select id="EasyWPSMTP" name="EasyWPSMTP" defaultValue={data.data.items.EasyWPSMTP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="WPS">WPS Hide Login: redirect van login-url naar /login zetten</label>
                <select id="WPS" name="WPS" defaultValue={data.data.items.WPS} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="WPOptimize">WP Optimize: caching van pagina's juist zetten (ContactForms excluden) + koppeling cloudflare cdn</label>
                <select id="WPOptimize" name="WPOptimize" defaultValue={data.data.items.WPOptimize} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="shortpixel">ShortPixel + ShortPixel AI (API Key aan Kristof vragen)</label>
                <select id="shortpixel" name="shortpixel" defaultValue={data.data.items.shortpixel} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />


                <label className="" htmlFor="yoast">Yoast SEO + geconfigureerd.</label>
                <select id="yoast" name="yoast" defaultValue={data.data.items.yoast} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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
                        <select id="SendCloud" name="SendCloud" defaultValue={data.data.items.SendCloud} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommerce">WooCommerce</label>
                        <select id="WooCommerce" name="WooCommerce" defaultValue={data.data.items.WooCommerce} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommerceAJAX">WooCommerce Ajax Sidecart + Velden in juiste taal zetten</label>
                        <select id="WooCommerceAJAX" name="WooCommerceAJAX" defaultValue={data.data.items.WooCommerceAJAX} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WPML">WPML (Indien multi-language)</label>
                        <select id="WPML" name="WPML" defaultValue={data.data.items.WPML} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommercePayPal">WooCommerce Paypal Checkout Gateway</label>
                        <select id="WooCommercePayPal" name="WooCommercePayPal" defaultValue={data.data.items.WooCommercePayPal} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommercePDF">WooCommerce PDF Invoices & Packing Slips: facturen juist configureren met logo en gegevens van klant. In de footer verwijzing naar algemene voorwaarden.</label>
                        <select id="WooCommercePDF" name="WooCommercePDF" defaultValue={data.data.items.WooCommercePDF} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommerceLoad">WooCommerce Load More (Van Be Rocket)</label>
                        <select id="WooCommerceLoad" name="WooCommerceLoad" defaultValue={data.data.items.WooCommerceLoad} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                            <option value="" hidden>Choose here</option>
                            <option value="DONE">DONE</option>
                            <option value="TODO">TO DO</option>
                            <option value="N.V.T.">N.V.T.</option>
                            <option value="BUSY">BUSY</option>
                            <option value="NOT OK">NOT OK</option>
                        </select>
                        <br />

                        <label className="" htmlFor="WooCommerceStripe">WooCommerce Stripe Gateway: connectie maken met WooCommerce en Stripe. (NA OVERZET NAAR LIVE ZEKER SANDBOX MODE UITZETTEN EN CONFIGUREREN!!)</label>
                        <select id="WooCommerceStripe" name="WooCommerceStripe" defaultValue={data.data.items.WooCommerceStripe} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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
                <select id="KlantAanpassingen" name="KlantAanpassingen" defaultValue={data.data.items.KlantAanpassingen} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="CapabilityManager">Capability Manager Enhanced: restricted gebruiker aanmaken en configureren</label>
                <select id="CapabilityManager" name="CapabilityManager" defaultValue={data.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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










                <h3 className="text-xl pt-2 font-semibold">Project Manager</h3>

                <h3 className="text-xl pt-2 font-semibold">Technisch</h3>



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

                <input id="Analytics" defaultChecked={data.data.items.Analytics} type={"checkbox"} name={"Analytics"}></input>
                <label className="p-1 m-1" htmlFor="Analytics">Google Analytics opgezet</label>
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


                <br />

                <h3 className="text-xl pt-2 font-semibold">Mail</h3>

                <input id="PlaceholderMail" defaultChecked={data.data.items.PlaceholderMail} type={"checkbox"} name={"PlaceholderMail"}></input>
                <label className="p-1 m-1" htmlFor="PlaceholderMail">Placeholder email aanmaken voor klant</label>
                <br />

                <input id="SMTP" defaultChecked={data.data.items.SMTP} type={"checkbox"} name={"SMTP"}></input>


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

                <br />

                <input id="ImageSize" defaultChecked={data.data.items.ImageSize} type={"checkbox"} name={"ImageSize"}></input>


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

                <label className="" htmlFor="CloudFlareInWordpress">Cloudflare in wordpress active?</label>
                <select id="CloudFlareInWordpress" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1" name="CloudFlareInWordpress" defaultValue={data.data.items.CloudFlareInWordpress} >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />


                <label className="" htmlFor="DoubleCheck">Double Check web SRV</label>
                <select id="DoubleCheck" name="DoubleCheck" defaultValue={data.data.items.DoubleCheck} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="LEGALPACK"> Legal Pack</label>
                <select id="LEGALPACK" name="LEGALPACK" defaultValue={data.data.items.LEGALPACK} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-3/12 p-1"  >
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
                <select id="OnderhoudsAbonnement" name="OnderhoudsAbonnement" defaultValue={data.data.items.OnderhoudsAbonnement} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="OnderhoudsProject">Onderhouds Project</label>
                <select id="OnderhoudsProject" name="OnderhoudsProject" defaultValue={data.data.items.OnderhoudsProject} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />



                <label className="" htmlFor="ReCaptcha">ReCaptcha</label>
                <select id="ReCaptcha" name="ReCaptcha" defaultValue={data.data.items.ReCaptcha} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ActiveCampaign">Nieuwsbrief / Active Campaign</label>
                <select id="ActiveCampaign" name="ActiveCampaign" defaultValue={data.data.items.ActiveCampaign} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />



                <label className="" htmlFor="Blog">Blog / Nieuws</label>
                <select id="Blog" name="Blog" defaultValue={data.data.items.Blog} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="ProjectModule">ProjectModule</label>
                <select id="ProjectModule" name="ProjectModule" defaultValue={data.data.items.ProjectModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="BookingsModule">BoekingsModule</label>
                <select id="BookingsModule" name="BookingsModule" defaultValue={data.data.items.BookingsModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="BookingTool">BookingTool OV</label>
                <select id="BookingTool" name="BookingTool" defaultValue={data.data.items.BookingTool} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="RealisatieModule">RealisatieModule</label>
                <select id="RealisatieModule" name="RealisatieModule" defaultValue={data.data.items.RealisatieModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="SharingModule">SharingModule</label>
                <select id="SharingModule" name="SharingModule" defaultValue={data.data.items.SharingModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="NieuwsBriefKoppeling">NieuwsBriefKoppeling</label>
                <select id="NieuwsBriefKoppeling" name="NieuwsBriefKoppeling" defaultValue={data.data.items.NieuwsBriefKoppeling} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="MultiLanguage">MultiLanguage</label>
                <select id="MultiLanguage" name="MultiLanguage" defaultValue={data.data.items.MultiLanguage} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                <label className="" htmlFor="DelDev">Delete Dev omgeving</label>
                <select id="DelDev" name="DelDev" defaultValue={data.data.items.DelDev} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                    <option value="" hidden>Choose here</option>
                    <option value="DONE">DONE</option>
                    <option value="TODO">TO DO</option>
                    <option value="N.V.T.">N.V.T.</option>
                    <option value="BUSY">BUSY</option>
                    <option value="NOT OK">NOT OK</option>
                </select>
                <br />

                {data.data.isnew != true ?
                    <>
                        <MaintenanceTemplate onderhoud={data.data.onderhoud} />
                        <br />
                    </>
                    : null}


                <label className="text-xl pt-2 font-semibold" htmlFor="Opmerkingen">Opmerkingen</label>
                <br />
                <Textarea resize className="no-padding bg-gray-200 " color="pink" variant="standard" defaultValue={data.data.items.Opmerkingen} name={"Opmerkingen"} placeholder={"Opmerkingen"}></Textarea>

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