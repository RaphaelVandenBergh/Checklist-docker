import { Textarea } from "@material-tailwind/react";
import { Form, Link } from "@remix-run/react";
import React from "react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";
import MaintenanceTemplate from "./MaintenanceTemplate";
import OnderhoudEntry from "./OnderhoudEntry";

export default function FormTemplate(props: any) {
    const ConditionalWrap = ({ condition, wrap, children }: any) => condition ? wrap(children) : children;
    //need state for one of the fields
    const [isBlog, setIsBlog] = React.useState(props.data.items.Blog);
    const handleblog = (event:any) => setIsBlog(event.target.value);
    return (
        <>
            {/* reusable form component */}
            <Form reloadDocument className="contact2-form" method="post">
                {/* Wrapping component to disable all fields in the logs */}
                <ConditionalWrap condition={props.isLog} wrap={(children: any) => <fieldset disabled>{children}</fieldset>}>

                    <h2 className="text-2xl font-semibold">Gegevens Klant</h2>
                    <label htmlFor="KlantNummer">Klant Nummer: </label>
                    <input required defaultValue={props.data.list.KlantNummer} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNummer"}></input>
                    <br />

                    <label htmlFor="KlantNaam">Klant Naam: </label>
                    <input required defaultValue={props.data.list.KlantNaam} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNaam"}></input>
                    <br />

                    <label htmlFor="ProjectNaam">Projectnaam van klant: </label>
                    <input required defaultValue={props.data.list.ProjectNaam} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNaam"}></input>
                    <br />

                    <label htmlFor="ProjectNummer">PO nummer project: </label>
                    <input required defaultValue={props.data.list.ProjectNummer} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNummer"}></input>
                    <br />

                    <label htmlFor="Budget">Budget: €</label>
                    <input defaultValue={props.data.list.Budget} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded leading-tight focus:border-gray-500"} type={"text"} name={"Budget"}></input>
                    <br />

                    <label htmlFor="Verantwoordelijke">Verantwoordelijke project: </label>
                    <input required defaultValue={props.data.list.Verantwoordelijke} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Verantwoordelijke"}></input>
                    <br />
                    <h2 className="text-2xl pt-2 font-semibold">Checklist</h2>
                    <h3 className="text-xl pt-2 my-3 font-semibold">Marketing</h3>


                    <label className="" htmlFor="AnalyticsCreate">Google Analytics aanmaken</label>
                    <select id="AnalyticsCreate" name="AnalyticsCreate" defaultValue={props.data.items.AnalyticsCreate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="ReCaptchaCreate">ReCaptcha aanmaken</label>
                    <select id="ReCaptchaCreate" name="ReCaptchaCreate" defaultValue={props.data.items.ReCaptchaCreate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="FacebookInstaShop">Facebook en Instagram Shop</label>
                    <select id="FacebookInstaShop" name="FacebookInstaShop" defaultValue={props.data.items.FacebookInstaShop} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="ActiveCampaign">Nieuwsbrief / Active Campaign</label>
                    <select id="ActiveCampaign" name="ActiveCampaign" defaultValue={props.data.items.ActiveCampaign} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Mockups">Mockups</label>
                    <select id="Mockups" name="Mockups" defaultValue={props.data.items.Mockups} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <h3 className="text-xl pt-2 my-3 font-semibold">Development</h3>
                    <h4 className="text-lg font-semibold mt-2">Algemeen</h4>

                    <label className="" htmlFor="Compressie">Compressie aanzetten</label>
                    <select id="Compressie" name="Compressie" defaultValue={props.data.items.Compressie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Copyright">Copyright met dynamisch jaartal in footer zetten</label>
                    <select id="Copyright" name="Copyright" defaultValue={props.data.items.Copyright} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="SocialMediaMeta">Social media metatags</label>
                    <select id="SocialMediaMeta" name="SocialMediaMeta" defaultValue={props.data.items.SocialMediaMeta} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="AnalyticsIntegrate">Google Analytics integratie</label>
                    <select id="AnalyticsIntegrate" name="AnalyticsIntegrate" defaultValue={props.data.items.AnalyticsIntegrate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="RecaptchaIntegratie">Recaptcha integratie</label>
                    <select id="RecaptchaIntegratie" name="RecaptchaIntegratie" defaultValue={props.data.items.RecaptchaIntegratie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="FacebookDebug">Facebook Debug testen</label>
                    <select id="FacebookDebug" name="FacebookDebug" defaultValue={props.data.items.FacebookDebug} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="LinkedInShare">LinkedIn Share testen</label>
                    <select id="LinkedInShare" name="LinkedInShare" defaultValue={props.data.items.LinkedInShare} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Lorem">Geen Lorem Ipsum of placeholder teksten meer</label>
                    <select id="Lorem" name="Lorem" defaultValue={props.data.items.Lorem} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Links">Alle linken en knoppen werken en gaan naar de juiste pagina's</label>
                    <select id="Links" name="Links" defaultValue={props.data.items.Links} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="SMTP">SMTP configureren en aanzetten</label>
                    <select id="SMTP" name="SMTP" defaultValue={props.data.items.SMTP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="TestMail">Test email laten sturen naar klant voor elk formulier en antwoord gehad van klant</label>
                    <select id="TestMail" name="TestMail" defaultValue={props.data.items.TestMail} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="GDPR">GDPR: bij formulieren een akkoord zetten</label>
                    <select id="GDPR" name="GDPR" defaultValue={props.data.items.GDPR} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <h4 className="text-lg font-semibold mt-2">afbeeldingen</h4>

                    <label className="" htmlFor="Loadspeed">Loadspeed (ms):</label>
                    <input defaultValue={props.data.items.LoadspeedTime} className={"appearance-none p-1 m-1 w-12 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"LoadspeedTime"}></input>
                    <select id="Loadspeed" name="Loadspeed" defaultValue={props.data.items.Loadspeed} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="ImageSize">Grootte van afbeeldingen (comprimeren)</label>
                    <select id="ImageSize" name="ImageSize" defaultValue={props.data.items.ImageSize} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="AltTags">Alt tags voor elke afbeelding zetten</label>
                    <select id="AltTags" name="AltTags" defaultValue={props.data.items.AltTags} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <h4 className="text-lg font-semibold mt-2">Bestanden</h4>

                    <label className="" htmlFor="Htaccess">.htaccess plaatsen </label>
                    <select id="Htaccess" name="Htaccess" defaultValue={props.data.items.Htaccess} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Robots">Robots.txt plaatsen</label>
                    <select id="Robots" name="Robots" defaultValue={props.data.items.Robots} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Sitemap">Sitemap.xml plaatsen</label>
                    <select id="Sitemap" name="Sitemap" defaultValue={props.data.items.Sitemap} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />



                    <h4 className="text-lg pt-2 font-semibold">Plugins</h4>

                    <label className="" htmlFor="MaterialWP">Material WP: Aangepast met logo, huiskleur en afbeelding</label>
                    <select id="MaterialWP" name="MaterialWP" defaultValue={props.data.items.MaterialWP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="EasyWPSMTP">Easy WP SMTP: SMTP configureren en aanzetten</label>
                    <select id="EasyWPSMTP" name="EasyWPSMTP" defaultValue={props.data.items.EasyWPSMTP} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="WPS">WPS Hide Login: redirect van login-url naar /login zetten</label>
                    <select id="WPS" name="WPS" defaultValue={props.data.items.WPS} className="bg-gray-50 border m-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="WPOptimize">WP Optimize: caching van pagina's juist zetten (ContactForms excluden) + koppeling cloudflare cdn</label>
                    <select id="WPOptimize" name="WPOptimize" defaultValue={props.data.items.WPOptimize} className="bg-gray-50 border mb-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="shortpixel">ShortPixel + ShortPixel AI (API Key aan Kristof vragen)</label>
                    <select id="shortpixel" name="shortpixel" defaultValue={props.data.items.shortpixel} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />


                    <label className="" htmlFor="yoast">Yoast SEO + geconfigureerd.</label>
                    <select id="yoast" name="yoast" defaultValue={props.data.items.yoast} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />
                    {/* fields that are only in the webshop list are not rendered in website checklist */}
                    {props.data.list.isWebshop ? (
                        <>
                            <label className="" htmlFor="SendCloud">SendCloud | Smart Shipping Service: connectie maken met WooCommerce en Sendcloud.</label>
                            <select id="SendCloud" name="SendCloud" defaultValue={props.data.items.SendCloud} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="WooCommerce">WooCommerce</label>
                            <select id="WooCommerce" name="WooCommerce" defaultValue={props.data.items.WooCommerce} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="WooCommerceAJAX">WooCommerce Ajax Sidecart + Velden in juiste taal zetten</label>
                            <select id="WooCommerceAJAX" name="WooCommerceAJAX" defaultValue={props.data.items.WooCommerceAJAX} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="WPML">WPML (Indien multi-language)</label>
                            <select id="WPML" name="WPML" defaultValue={props.data.items.WPML} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="WooCommercePayPal">WooCommerce Paypal Checkout Gateway</label>
                            <select id="WooCommercePayPal" name="WooCommercePayPal" defaultValue={props.data.items.WooCommercePayPal} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="WooCommercePDF">WooCommerce PDF Invoices & Packing Slips: facturen juist configureren met logo en gegevens van klant.</label>
                            <select id="WooCommercePDF" name="WooCommercePDF" defaultValue={props.data.items.WooCommercePDF} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="WooCommerceLoad">WooCommerce Load More (Van Be Rocket)</label>
                            <select id="WooCommerceLoad" name="WooCommerceLoad" defaultValue={props.data.items.WooCommerceLoad} className="bg-gray-50 border mt-3 mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="WooCommerceStripe">WooCommerce Stripe Gateway: connectie maken met WooCommerce en Stripe. (NA OVERZET NAAR LIVE ZEKER SANDBOX MODE UITZETTEN EN CONFIGUREREN!!)</label>
                            <select id="WooCommerceStripe" name="WooCommerceStripe" defaultValue={props.data.items.WooCommerceStripe} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="Themify">Themify Woocomerce product filter</label>
                            <select id="Themify" name="Themify" defaultValue={props.data.items.Themify} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="facebookwoocomerce">Facebook for Woocomerce</label>
                            <select id="facebookwoocomerce" name="facebookwoocomerce" defaultValue={props.data.items.facebookwoocomerce} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="flexcheckout">flexible checkout fields</label>
                            <select id="flexcheckout" name="flexcheckout" defaultValue={props.data.items.flexcheckout} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="WoocomerceVAT">Woocomerce EU VAT Number</label>
                            <select id="WoocomerceVAT" name="WoocomerceVAT" defaultValue={props.data.items.WoocomerceVAT} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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
                    <select id="KlantAanpassingen" name="KlantAanpassingen" defaultValue={props.data.items.KlantAanpassingen} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="yoastDuplicate">Yoast Duplicate post en User role editor met de juiste instellingen</label>
                    <select id="yoastDuplicate" name="yoastDuplicate" defaultValue={props.data.items.yoastDuplicate} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />



                    <label className="" htmlFor="CapabilityManager">Capability Manager Enhanced: restricted gebruiker aanmaken en configureren</label>
                    <select id="CapabilityManager" name="CapabilityManager" defaultValue={props.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    {/* fields that are only in the webshop list are not rendered in website checklist */}
                    {props.data.list.isWebshop ? (
                        <>
                            <h4 className="text-lg pt-2 font-semibold">Betaling</h4>


                            <label className="" htmlFor="Stripe">Stripe account aanmaken en configureren voor Mastercard/Visa & Bancontact</label>
                            <select id="Stripe" name="Stripe" defaultValue={props.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />


                            <label className="" htmlFor="Betaalmethodes">Betaalmethodes correct configureren</label>
                            <select id="Betaalmethodes" name="Betaalmethodes" defaultValue={props.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="Testen">Testen van betalingssystemen</label>
                            <select id="Testen" name="Testen" defaultValue={props.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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
                    <select id="Mobile" name="Mobile" defaultValue={props.data.items.Mobile} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Smartphone">Op smartphone nakijken</label>
                    <select id="Smartphone" name="Smartphone" defaultValue={props.data.items.Smartphone} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <h4 className="text-lg pt-2 font-semibold">PHP/WP</h4>
                    <label className="" htmlFor="PHPManager">PHP manager meest recente versie</label>
                    <select id="PHPManager" name="PHPManager" defaultValue={props.data.items.PHPManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="PHPIni">PHP.ini path zelfde versie</label>
                    <select id="PHPIni" name="PHPIni" defaultValue={props.data.items.PHPIni} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="MultiLanguage">MultiLanguage</label>
                    <select id="MultiLanguage" name="MultiLanguage" defaultValue={props.data.items.MultiLanguage} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="DelDev">Delete Dev omgeving</label>
                    <select id="DelDev" name="DelDev" defaultValue={props.data.items.DelDev} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Discussie">Instellingen -&#62; Discussie in WP dashboard 3 vinkjes afzetten</label>
                    <select id="Discussie" name="Discussie" defaultValue={props.data.items.Discussie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <h4 className="text-lg font-semibold mt-2">Modules</h4>
                    <label className="" htmlFor="Blog">Blog / Nieuws</label>
                    {/* using state for this field so we can condition the render of the following field */}
                    <select id="Blog" onChange={handleblog} value={isBlog} name="Blog" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />
                        {/* only rendering when the previous field is set to DONE */}
                    {
                        isBlog == "DONE" ? (<>
                            <label className="mx-4 mt-0" htmlFor="DiviBuilder">Divi -&#62; rol editor -&#62; divi builder uitschakelen bij auteur/redacteur</label>
                            <select id="DiviBuilder" name="DiviBuilder" defaultValue={props.data.items.DiviBuilder} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />
                        </>) : (null)
                    }





                    <label className="" htmlFor="ProjectModule">ProjectModule</label>
                    <select id="ProjectModule" name="ProjectModule" defaultValue={props.data.items.ProjectModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="BookingsModule">BoekingsModule</label>
                    <select id="BookingsModule" name="BookingsModule" defaultValue={props.data.items.BookingsModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="BookingTool">BookingTool OV</label>
                    <select id="BookingTool" name="BookingTool" defaultValue={props.data.items.BookingTool} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="RealisatieModule">RealisatieModule</label>
                    <select id="RealisatieModule" name="RealisatieModule" defaultValue={props.data.items.RealisatieModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="SharingModule">SharingModule</label>
                    <select id="SharingModule" name="SharingModule" defaultValue={props.data.items.SharingModule} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="NieuwsBriefKoppeling">NieuwsBriefKoppeling</label>
                    <select id="NieuwsBriefKoppeling" name="NieuwsBriefKoppeling" defaultValue={props.data.items.NieuwsBriefKoppeling} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="footervoorwaarden">In de footer verwijzing naar algemene voorwaarden.</label>
                    <select id="footervoorwaarden" name="footervoorwaarden" defaultValue={props.data.items.footervoorwaarden} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <h3 className="text-xl pt-2 my-3 font-semibold">Project Manager</h3>

                    <label className="" htmlFor="QCFinal">Kwaliteitscontrole finale design</label>
                    <select id="QCFinal" name="QCFinal" defaultValue={props.data.items.QCFinal} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="LEGALPACK"> Legal Pack</label>
                    <select id="LEGALPACK" name="LEGALPACK" defaultValue={props.data.items.LEGALPACK} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-3/12 p-1"  >
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
                    <select id="AlgemeneVoorwaarden" name="AlgemeneVoorwaarden" defaultValue={props.data.items.AlgemeneVoorwaarden} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="CookiePopUp">Cookie Policy pop-up</label>
                    <select id="CookiePopUp" name="CookiePopUp" defaultValue={props.data.items.CookiePopUp} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="OnderhoudsAbonnement">OnderhoudsAbonnement</label>
                    <select id="OnderhoudsAbonnement" name="OnderhoudsAbonnement" defaultValue={props.data.items.OnderhoudsAbonnement} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="OnderhoudsProject">Onderhouds Project</label>
                    <select id="OnderhoudsProject" name="OnderhoudsProject" defaultValue={props.data.items.OnderhoudsProject} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <h3 className="text-xl pt-2 my-3 font-semibold">Technisch</h3>

                    <label className="" htmlFor="SSLActive">SSL actief</label>
                    <select id="SSLActive" name="SSLActive" defaultValue={props.data.items.SSLActive} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="QCFirst">Kwaliteitscontrole eerste design</label>
                    <select id="QCFirst" name="QCFirst" defaultValue={props.data.items.QCFirst} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="PlaceholderMail">Placeholder E-mail voor klant</label>
                    <select id="PlaceholderMail" name="PlaceholderMail" defaultValue={props.data.items.PlaceholderMail} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Optimalisatie">Site optimalisatie aanzetten</label>
                    <select id="Optimalisatie" name="Optimalisatie" defaultValue={props.data.items.Optimalisatie} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="SSLCheckup">SSL Checkup</label>
                    <select id="SSLCheckup" name="SSLCheckup" defaultValue={props.data.items.SSLCheckup} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="MailCheckup">Mail Checkup</label>
                    <select id="MailCheckup" name="MailCheckup" defaultValue={props.data.items.MailCheckup} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="FactuurHosting">Facturatie opgestart voor hosting en onderhoud? Communiceren naar Kristof</label>
                    <select id="FactuurHosting" name="FactuurHosting" defaultValue={props.data.items.FactuurHosting} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="KlantgegevensATMOS">Klantgegevens in ATMOS portal?</label>
                    <select id="KlantgegevensATMOS" name="KlantgegevensATMOS" defaultValue={props.data.items.KlantgegevensATMOS} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="Cloudflare">Cloudflare opstart + Config + Rules (Door Atmos Admin)</label>
                    <select id="Cloudflare" name="Cloudflare" defaultValue={props.data.items.Cloudflare} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="CloudFlareInWordpress">Cloudflare in wordpress active?</label>
                    <select id="CloudFlareInWordpress" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1" name="CloudFlareInWordpress" defaultValue={props.data.items.CloudFlareInWordpress} >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    <label className="" htmlFor="DoubleCheck">Double Check web SRV</label>
                    <select id="DoubleCheck" name="DoubleCheck" defaultValue={props.data.items.DoubleCheck} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <br />

                    {props.data.list.isWebshop ? (
                        <>
                            <h4 className="text-l pt-2 font-semibold">Verzendingen</h4>

                            <label className="" htmlFor="SendCloudUser">Gebruiker aanmaken op SendCloud met placeholder_klant email. Klant zijn email ook koppelen.</label>
                            <select id="CapabilityManager" name="CapabilityManager" defaultValue={props.data.items.CapabilityManager} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <br />

                            <label className="" htmlFor="SendCloudVerrify">Bankaccount verifiëren van klant met SendCloud</label>
                            <select id="CapabilityManager" name="CapabilityManager" defaultValue={props.data.items.CapabilityManager} className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 w-2/12 p-1"  >
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

                    {/* when making a new checklist or viewing the logs don't show the add onderhoud button */}
                    {props.data.isnew != true && !props.isLog ?
                        <>
                            <MaintenanceTemplate onderhoud={props.data.onderhoud} />
                            <br />
                        </>
                        :
                        props.isLog ?
                            (
                                <>
                                    {/* when in a log only show the finished onderhouden */}
                                    <h4 className="text-xl pt-2 font-semibold">Onderhoud</h4>
                                    {props.data.Onderhoud.map((item: any) => (
                                        item.Finished ?
                                            <OnderhoudEntry key={item.Id} onderhoud={item} />
                                            :
                                            null
                                    ))}
                                </>
                            ) : (
                                null
                            )
                    }
                    {/* when in a log don't render the submit button etc */}
                    {!props.isLog ? (
                        <>

                            <label className="text-xl pt-2 font-semibold" htmlFor="Opmerkingen">Opmerkingen</label>
                            <br />
                            <Textarea resize className="no-padding bg-gray-200 " color="pink" variant="standard" defaultValue={props.data.items.Opmerkingen} name={"Opmerkingen"} placeholder={"Opmerkingen"}></Textarea>

                            <br />

                            <label className="print:hidden" htmlFor="LastUser">Naam developer</label>
                            <br />
                            <input className={" no-padding print:hidden appearance-none bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} required type="text" name="LastUser" placeholder="git blame" />

                            <div className="container-contact2-form-btn">
                                <div className="wrap-contact2-form-btn">
                                    <div className="contact2-form-bgbtn"></div>
                                    <div className="print:hidden">
                                        <button className="contact2-form-btn" type={"submit"}>submit</button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {props.data.list.Id == undefined ? (null) : (
                                    <Link className="hover:text-gray-900" to={'/logs/' + props.data.list.Id} >
                                        <MdOutlineHistory className="print:hidden float-left" size={'35px'} />
                                    </Link>
                                )}
                                {/* button for PDF print note type=button to not submit the form */}
                                <button type="button" className="float-right print:hidden">
                                    <GrDocumentPdf onClick={() => print()} size={'30px'} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div>
                            {/* button for PDF print note type=button to not submit the form */}
                            <button type="button" className="float-right print:hidden">
                                <GrDocumentPdf onClick={() => print()} size={'30px'} />
                            </button>
                        </div>
                    )}
                </ConditionalWrap>
            </Form>
        </>
    )
}