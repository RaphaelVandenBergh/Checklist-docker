import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Textarea } from "@material-tailwind/react";
import { Form, Link } from "@remix-run/react";
import React, { Fragment } from "react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";
import MaintenanceTemplate from "./MaintenanceTemplate";

const ConditionalWrap = ({ condition, wrap, children }: any) => condition ? wrap(children) : children;
export default function FormTemplate(props: any) {

    const [openactive, setopenactive] = React.useState(false)
    const handleClickActiveOpen = () => {
        setopenactive(true);
    };
    const handleActiveClose = () => {
        setopenactive(false);
    };

    const colorcheck = (value:string) => {
        switch(value){
            case "DONE":
                return "bg-green-200 "
            case "TODO":
                return "bg-blue-200 "
            case 'NOT OK':
                return "bg-red-200 "
            case 'BUSY':
                return "bg-yellow-200 "
            case "N.V.T.":
                return " "
            default:
                return " "
        }
    }

    //need state for one of the fields
    const [isBlog, setIsBlog] = React.useState(props.data.items.Blog);
    const handleblog = (event: any) => setIsBlog(event.target.value);
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

                    <input id="isActive" defaultChecked={props.data.list.isActive} type={"checkbox"} name={"isActive"} ></input>
                    <label className="p-1 m-1 mt-2" htmlFor="isActive">Is onderhoud actief?</label>
                    <br />

                    <label htmlFor="Verantwoordelijke">Verantwoordelijke project: </label>
                    <input required defaultValue={props.data.list.Verantwoordelijke} className={"appearance-none p-1 m-1 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Verantwoordelijke"}></input>
                    <br />
                    <h2 className="text-2xl pt-2 font-semibold">Checklist</h2>



                    <h3 className="text-xl pt-2 my-3 font-semibold">Marketing</h3>

                    <select id="AnalyticsCreate" name="AnalyticsCreate" defaultValue={props.data.items.AnalyticsCreate} className={colorcheck(props.data.items.AnalyticsCreate) + "border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg mr-3 focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option className="" value="" hidden>Choose here</option>
                        <option className="" value="DONE">DONE</option>
                        <option className="" value="TODO">TO DO</option>
                        <option className="" value="N.V.T.">N.V.T.</option>
                        <option className="" value="BUSY">BUSY</option>
                        <option className="" value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="AnalyticsCreate">Google Analytics aanmaken</label>

                    <br />
                    <select id="ReCaptchaCreate" name="ReCaptchaCreate" defaultValue={props.data.items.ReCaptchaCreate} className={colorcheck(props.data.items.ReCaptchaCreate)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="ReCaptchaCreate">ReCaptcha aanmaken</label>

                    <br />
                    <select id="FacebookInstaShop" name="FacebookInstaShop" defaultValue={props.data.items.FacebookInstaShop} className={colorcheck(props.data.items.FacebookInstaShop)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="FacebookInstaShop">Facebook en Instagram Shop</label>

                    <br />
                    <select id="ActiveCampaign" name="ActiveCampaign" defaultValue={props.data.items.ActiveCampaign} className={colorcheck(props.data.items.ActiveCampaign)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="ActiveCampaign">Nieuwsbrief / Active Campaign</label>

                    <br />
                    <select id="Mockups" name="Mockups" defaultValue={props.data.items.Mockups} className={colorcheck(props.data.items.Mockups)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Mockups">Mockups</label>

                    <br />

                    <h3 className="text-xl pt-2 my-3 font-semibold">Development</h3>
                    <h4 className="text-lg font-semibold mt-2">Algemeen</h4>
                    <select id="Compressie" name="Compressie" defaultValue={props.data.items.Compressie} className={colorcheck(props.data.items.Compressie)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Compressie">Compressie aanzetten</label>

                    <br />
                    <select id="Copyright" name="Copyright" defaultValue={props.data.items.Copyright} className={colorcheck(props.data.items.Copyright)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Copyright">Copyright met dynamisch jaartal in footer zetten</label>

                    <br />
                    <select id="SocialMediaMeta" name="SocialMediaMeta" defaultValue={props.data.items.SocialMediaMeta} className={colorcheck(props.data.items.SocialMediaMeta)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="SocialMediaMeta">Social media metatags</label>

                    <br />
                    <select id="AnalyticsIntegrate" name="AnalyticsIntegrate" defaultValue={props.data.items.AnalyticsIntegrate} className={colorcheck(props.data.items.AnalyticsIntegrate)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="AnalyticsIntegrate">Google Analytics integratie</label>

                    <br />
                    <select id="RecaptchaIntegratie" name="RecaptchaIntegratie" defaultValue={props.data.items.RecaptchaIntegratie} className={colorcheck(props.data.items.RecaptchaIntegratie)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="RecaptchaIntegratie">Recaptcha integratie</label>

                    <br />
                    <select id="FacebookDebug" name="FacebookDebug" defaultValue={props.data.items.FacebookDebug} className={colorcheck(props.data.items.FacebookDebug)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="FacebookDebug">Facebook Debug testen</label>

                    <br />
                    <select id="LinkedInShare" name="LinkedInShare" defaultValue={props.data.items.LinkedInShare} className={colorcheck(props.data.items.LinkedInShare)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="LinkedInShare">LinkedIn Share testen</label>

                    <br />
                    <select id="Lorem" name="Lorem" defaultValue={props.data.items.Lorem} className={colorcheck(props.data.items.Lorem)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Lorem">Geen Lorem Ipsum of placeholder teksten meer</label>

                    <br />
                    <select id="Links" name="Links" defaultValue={props.data.items.Links} className={colorcheck(props.data.items.Links)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Links">Alle linken en knoppen werken en gaan naar de juiste pagina's</label>

                    <br />
                    <select id="SMTP" name="SMTP" defaultValue={props.data.items.SMTP} className={colorcheck(props.data.items.SMTP)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="SMTP">SMTP configureren en aanzetten</label>

                    <br />
                    <select id="TestMail" name="TestMail" defaultValue={props.data.items.TestMail} className={colorcheck(props.data.items.TestMail)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="TestMail">Test email laten sturen naar klant voor elk formulier en antwoord gehad van klant</label>

                    <br />
                    <select id="GDPR" name="GDPR" defaultValue={props.data.items.GDPR} className={colorcheck(props.data.items.GDPR)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="GDPR">GDPR: bij formulieren een akkoord zetten</label>

                    <br />

                    <h4 className="text-lg font-semibold mt-2">Afbeeldingen</h4>
                    <select id="Loadspeed" name="Loadspeed" defaultValue={props.data.items.Loadspeed} className={colorcheck(props.data.items.Loadspeed)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Loadspeed">Loadspeed (ms):</label>
                    <input defaultValue={props.data.items.LoadspeedTime} className={"appearance-none p-1 m-1 w-12 bg-gray-200 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"LoadspeedTime"}></input>

                    <br />
                    <select id="ImageSize" name="ImageSize" defaultValue={props.data.items.ImageSize} className={colorcheck(props.data.items.ImageSize)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="ImageSize">Grootte van afbeeldingen (comprimeren)</label>

                    <br />
                    <select id="AltTags" name="AltTags" defaultValue={props.data.items.AltTags} className={colorcheck(props.data.items.AltTags)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="AltTags">Alt tags voor elke afbeelding zetten</label>

                    <br />

                    <h4 className="text-lg font-semibold mt-2">Bestanden</h4>
                    <select id="Htaccess" name="Htaccess" defaultValue={props.data.items.Htaccess} className={colorcheck(props.data.items.Htaccess)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Htaccess">.htaccess plaatsen </label>

                    <br />
                    <select id="Robots" name="Robots" defaultValue={props.data.items.Robots} className={colorcheck(props.data.items.Robots)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Robots">Robots.txt plaatsen</label>

                    <br />
                    <select id="Sitemap" name="Sitemap" defaultValue={props.data.items.Sitemap} className={colorcheck(props.data.items.Sitemap)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Sitemap">Sitemap.xml plaatsen</label>

                    <br />



                    <h4 className="text-lg pt-2 font-semibold">Plugins</h4>
                    <select id="MaterialWP" name="MaterialWP" defaultValue={props.data.items.MaterialWP} className={colorcheck(props.data.items.MaterialWP)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="MaterialWP">Material WP: Aangepast met logo, huiskleur en afbeelding</label>

                    <br />
                    <select id="EasyWPSMTP" name="EasyWPSMTP" defaultValue={props.data.items.EasyWPSMTP} className={colorcheck(props.data.items.EasyWPSMTP)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="EasyWPSMTP">Easy WP SMTP: SMTP configureren en aanzetten</label>

                    <br />
                    <select id="WPS" name="WPS" defaultValue={props.data.items.WPS} className={colorcheck(props.data.items.WPS)+" border mr-3 mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="WPS">WPS Hide Login: redirect van login-url naar /login zetten</label>

                    <br />
                    <select id="WPOptimize" name="WPOptimize" defaultValue={props.data.items.WPOptimize} className={colorcheck(props.data.items.WPOptimize)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="WPOptimize">WP Optimize: caching van pagina's juist zetten (ContactForms excluden) + koppeling cloudflare cdn</label>

                    <br />
                    <select id="shortpixel" name="shortpixel" defaultValue={props.data.items.shortpixel} className={colorcheck(props.data.items.shortpixel)+" border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="shortpixel">ShortPixel + ShortPixel AI (API Key aan Kristof vragen)</label>

                    <br />

                    <select id="yoast" name="yoast" defaultValue={props.data.items.yoast} className={colorcheck(props.data.items.yoast)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="yoast">Yoast SEO + geconfigureerd.</label>

                    <br />
                    {/* fields that are only in the webshop list are not rendered in website checklist */}
                    {props.data.list.isWebshop ? (
                        <>
                            <select id="SendCloud" name="SendCloud" defaultValue={props.data.items.SendCloud} className={colorcheck(props.data.items.SendCloud)+" border mt-2 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="SendCloud">SendCloud | Smart Shipping Service: connectie maken met WooCommerce en Sendcloud.</label>

                            <br />
                            <select id="WooCommerce" name="WooCommerce" defaultValue={props.data.items.WooCommerce} className={colorcheck(props.data.items.WooCommerce)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="WooCommerce">WooCommerce</label>

                            <br />
                            <select id="WooCommerceAJAX" name="WooCommerceAJAX" defaultValue={props.data.items.WooCommerceAJAX} className={colorcheck(props.data.items.WooCommerceAJAX)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="WooCommerceAJAX">WooCommerce Ajax Sidecart + Velden in juiste taal zetten</label>

                            <br />
                            <select id="WPML" name="WPML" defaultValue={props.data.items.WPML} className={colorcheck(props.data.items.WPML)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="WPML">WPML (Indien multi-language)</label>

                            <br />
                            <select id="WooCommercePayPal" name="WooCommercePayPal" defaultValue={props.data.items.WooCommercePayPal} className={colorcheck(props.data.items.WooCommercePayPal)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="WooCommercePayPal">WooCommerce Paypal Checkout Gateway</label>

                            <br />
                            <select id="WooCommercePDF" name="WooCommercePDF" defaultValue={props.data.items.WooCommercePDF} className={colorcheck(props.data.items.WooCommercePDF)+" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mt-2 mr-5 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="WooCommercePDF">WooCommerce PDF Invoices & Packing Slips: facturen juist configureren met logo en gegevens van klant.</label>

                            <br />
                            <select id="WooCommerceLoad" name="WooCommerceLoad" defaultValue={props.data.items.WooCommerceLoad} className={colorcheck(props.data.items.WooCommerceLoad)+" border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-3 mt-3 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="WooCommerceLoad">WooCommerce Load More (Van Be Rocket)</label>

                            <br />
                            <select id="WooCommerceStripe" name="WooCommerceStripe" defaultValue={props.data.items.WooCommerceStripe} className={colorcheck(props.data.items.WooCommerceStripe)+" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-3 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="WooCommerceStripe">WooCommerce Stripe Gateway: connectie maken met WooCommerce en Stripe. (NA OVERZET NAAR LIVE ZEKER SANDBOX MODE UITZETTEN EN CONFIGUREREN!!)</label>

                            <br />
                            <select id="Themify" name="Themify" defaultValue={props.data.items.Themify} className={colorcheck(props.data.items.Themify)+" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-3 mt-3 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="Themify">Themify Woocomerce product filter</label>

                            <br />
                            <select id="facebookwoocomerce" name="facebookwoocomerce" defaultValue={props.data.items.facebookwoocomerce} className={colorcheck(props.data.items.facebookwoocomerce)+" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-3 mt-3 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="facebookwoocomerce">Facebook for Woocomerce</label>

                            <br />
                            <select id="flexcheckout" name="flexcheckout" defaultValue={props.data.items.flexcheckout} className={colorcheck(props.data.items.flexcheckout)+" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-3 mt-3 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="flexcheckout">flexible checkout fields</label>

                            <br />
                            <select id="WoocomerceVAT" name="WoocomerceVAT" defaultValue={props.data.items.WoocomerceVAT} className={colorcheck(props.data.items.WoocomerceVAT)+" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-3 mt-3 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="WoocomerceVAT">Woocomerce EU VAT Number</label>

                            <br />
                        </>
                    ) : null}


                    <select id="KlantAanpassingen" name="KlantAanpassingen" defaultValue={props.data.items.KlantAanpassingen} className={colorcheck(props.data.items.KlantAanpassingen)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="KlantAanpassingen">Klant moet aanpassingen kunnen doen</label>

                    <br />
                    <select id="yoastDuplicate" name="yoastDuplicate" defaultValue={props.data.items.yoastDuplicate} className={colorcheck(props.data.items.yoastDuplicate)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="yoastDuplicate">Yoast Duplicate post en User role editor met de juiste instellingen</label>

                    <br />


                    <select id="CapabilityManager" name="CapabilityManager" defaultValue={props.data.items.CapabilityManager} className={colorcheck(props.data.items.CapabilityManager)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="CapabilityManager">Capability Manager Enhanced: restricted gebruiker aanmaken en configureren</label>

                    <br />

                    {/* fields that are only in the webshop list are not rendered in website checklist */}
                    {props.data.list.isWebshop ? (
                        <>
                            <h4 className="text-lg pt-2 font-semibold">Betaling</h4>

                            <select id="Stripe" name="Stripe" defaultValue={props.data.items.Stripe} className={colorcheck(props.data.items.Stripe)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="Stripe">Stripe account aanmaken en configureren voor Mastercard/Visa & Bancontact</label>

                            <br />

                            <select id="Betaalmethodes" name="Betaalmethodes" defaultValue={props.data.items.Betaalmethodes} className={colorcheck(props.data.items.Betaalmethodes)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="Betaalmethodes">Betaalmethodes correct configureren</label>

                            <br />
                            <select id="Testen" name="Testen" defaultValue={props.data.items.Testen} className={colorcheck(props.data.items.Testen)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="Testen">Testen van betalingssystemen</label>

                            <br />


                        </>
                    ) : null}

                    <h4 className="text-lg pt-2 font-semibold">Mobiel</h4>
                    <select id="newfield" name="newfield" defaultValue={props.data.items.Mobile} className={colorcheck(props.data.items.Mobile)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="newfield">newfield</label>

                    <br />
                    <select id="Smartphone" name="Smartphone" defaultValue={props.data.items.Smartphone} className={colorcheck(props.data.items.Smartphone)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Smartphone">Op smartphone nakijken</label>

                    <br />

                    <h4 className="text-lg pt-2 font-semibold">PHP/WP</h4>
                    <select id="PHPManager" name="PHPManager" defaultValue={props.data.items.PHPManager} className={colorcheck(props.data.items.PHPManager)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="PHPManager">PHP manager meest recente versie</label>

                    <br />
                    <select id="PHPIni" name="PHPIni" defaultValue={props.data.items.PHPIni} className={colorcheck(props.data.items.PHPIni)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="PHPIni">PHP.ini path zelfde versie</label>

                    <br />
                    <select id="MultiLanguage" name="MultiLanguage" defaultValue={props.data.items.MultiLanguage} className={colorcheck(props.data.items.MultiLanguage)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="MultiLanguage">MultiLanguage</label>

                    <br />
                    <select id="DelDev" name="DelDev" defaultValue={props.data.items.DelDev} className={colorcheck(props.data.items.DelDev)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="DelDev">Delete Dev omgeving</label>

                    <br />
                    <select id="Discussie" name="Discussie" defaultValue={props.data.items.Discussie} className={colorcheck(props.data.items.Discussie)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Discussie">Instellingen -&#62; Discussie in WP dashboard 3 vinkjes afzetten</label>

                    <br />

                    <h4 className="text-lg font-semibold mt-2">Modules</h4>
                    {/* using state for this field so we can condition the render of the following field */}
                    <select id="Blog" onChange={handleblog} value={isBlog} name="Blog" className={colorcheck(props.data.items.isBlog)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Blog">Blog / Nieuws</label>

                    <br />
                    {/* only rendering when the previous field is set to DONE */}
                    {
                        isBlog == "DONE" ? (<>
                            <select id="DiviBuilder" name="DiviBuilder" defaultValue={props.data.items.DiviBuilder} className={colorcheck(props.data.items.DiviBuilder)+" border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-5 mt-2 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="mx-4 mt-0" htmlFor="DiviBuilder">Divi -&#62; rol editor -&#62; divi builder uitschakelen bij auteur/redacteur</label>

                            <br />
                        </>) : (null)
                    }




                    <select id="ProjectModule" name="ProjectModule" defaultValue={props.data.items.ProjectModule} className={colorcheck(props.data.items.ProjectModule)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="ProjectModule">ProjectModule</label>

                    <br />
                    <select id="BookingsModule" name="BookingsModule" defaultValue={props.data.items.BookingsModule} className={colorcheck(props.data.items.BookingsModule)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="BookingsModule">BoekingsModule</label>

                    <br />
                    <select id="BookingTool" name="BookingTool" defaultValue={props.data.items.BookingTool} className={colorcheck(props.data.items.BookingTool)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="BookingTool">BookingTool OV</label>

                    <br />
                    <select id="RealisatieModule" name="RealisatieModule" defaultValue={props.data.items.RealisatieModule} className={colorcheck(props.data.items.RealisatieModule)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="RealisatieModule">RealisatieModule</label>

                    <br />
                    <select id="SharingModule" name="SharingModule" defaultValue={props.data.items.SharingModule} className={colorcheck(props.data.items.SharingModule)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="SharingModule">SharingModule</label>

                    <br />
                    <select id="NieuwsBriefKoppeling" name="NieuwsBriefKoppeling" defaultValue={props.data.items.NieuwsBriefKoppeling} className={colorcheck(props.data.items.NieuwsBriefKoppeling)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="NieuwsBriefKoppeling">NieuwsBriefKoppeling</label>

                    <br />
                    <select id="footervoorwaarden" name="footervoorwaarden" defaultValue={props.data.items.footervoorwaarden} className={colorcheck(props.data.items.footervoorwaarden)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="footervoorwaarden">In de footer verwijzing naar algemene voorwaarden.</label>

                    <br />

                    <h3 className="text-xl pt-2 my-3 font-semibold">Project Manager</h3>
                    <select id="QCFinal" name="QCFinal" defaultValue={props.data.items.QCFinal} className={colorcheck(props.data.items.QCFinal)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="QCFinal">Kwaliteitscontrole finale design</label>

                    <br />
                    <select id="LEGALPACK" name="LEGALPACK" defaultValue={props.data.items.LEGALPACK} className={colorcheck(props.data.items.LEGALPACK)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-3/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                        <option value="AANVRAAG">Aanvraag ingediend</option>
                    </select>
                    <label className="" htmlFor="LEGALPACK"> Legal Pack</label>

                    <br />
                    <select id="AlgemeneVoorwaarden" name="AlgemeneVoorwaarden" defaultValue={props.data.items.AlgemeneVoorwaarden} className={colorcheck(props.data.items.AlgemeneVoorwaarden)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="AlgemeneVoorwaarden">Algemene Voorwaarden</label>

                    <br />
                    <select id="CookiePopUp" name="CookiePopUp" defaultValue={props.data.items.CookiePopUp} className={colorcheck(props.data.items.CookiePopUp)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="CookiePopUp">Cookie Policy pop-up</label>

                    <br />
                    <select id="OnderhoudsAbonnement" name="OnderhoudsAbonnement" defaultValue={props.data.items.OnderhoudsAbonnement} className={colorcheck(props.data.items.OnderhoudsAbonnement)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="OnderhoudsAbonnement">OnderhoudsAbonnement</label>

                    <br />
                    <select id="OnderhoudsProject" name="OnderhoudsProject" defaultValue={props.data.items.OnderhoudsProject} className={colorcheck(props.data.items.OnderhoudsProject)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="OnderhoudsProject">Onderhouds Project</label>

                    <br />

                    <h3 className="text-xl pt-2 my-3 font-semibold">Technisch</h3>
                    <select id="SSLActive" name="SSLActive" defaultValue={props.data.items.SSLActive} className={colorcheck(props.data.items.SSLActive)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="SSLActive">SSL actief</label>

                    <br />
                    <select id="QCFirst" name="QCFirst" defaultValue={props.data.items.QCFirst} className={colorcheck(props.data.items.QCFirst)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="QCFirst">Kwaliteitscontrole eerste design</label>

                    <br />
                    <select id="PlaceholderMail" name="PlaceholderMail" defaultValue={props.data.items.PlaceholderMail} className={colorcheck(props.data.items.PlaceholderMail)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="PlaceholderMail">Placeholder E-mail voor klant</label>

                    <br />
                    <select id="Optimalisatie" name="Optimalisatie" defaultValue={props.data.items.Optimalisatie} className={colorcheck(props.data.items.Optimalisatie)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Optimalisatie">Site optimalisatie aanzetten</label>

                    <br />
                    <select id="SSLCheckup" name="SSLCheckup" defaultValue={props.data.items.SSLCheckup} className={colorcheck(props.data.items.SSLCheckup)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="SSLCheckup">SSL Checkup</label>

                    <br />
                    <select id="MailCheckup" name="MailCheckup" defaultValue={props.data.items.MailCheckup} className={colorcheck(props.data.items.MailCheckup)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="MailCheckup">Mail Checkup</label>

                    <br />
                    <select id="FactuurHosting" name="FactuurHosting" defaultValue={props.data.items.FactuurHosting} className={colorcheck(props.data.items.FactuurHosting)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="FactuurHosting">Facturatie opgestart voor hosting en onderhoud? Communiceren naar Kristof</label>

                    <br />
                    <select id="KlantgegevensATMOS" name="KlantgegevensATMOS" defaultValue={props.data.items.KlantgegevensATMOS} className={colorcheck(props.data.items.KlantgegevensATMOS)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="KlantgegevensATMOS">Klantgegevens in ATMOS portal?</label>

                    <br />
                    <select id="Cloudflare" name="Cloudflare" defaultValue={props.data.items.Cloudflare} className={colorcheck(props.data.items.Cloudflare)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="Cloudflare">Cloudflare opstart + Config + Rules (Door Atmos Admin)</label>

                    <br />
                    <select id="CloudFlareInWordpress" className={colorcheck(props.data.items.CloudFlareInWordpress)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"} name="CloudFlareInWordpress" defaultValue={props.data.items.CloudFlareInWordpress} >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="CloudFlareInWordpress">Cloudflare in wordpress active?</label>

                    <br />
                    <select id="DoubleCheck" name="DoubleCheck" defaultValue={props.data.items.DoubleCheck} className={colorcheck(props.data.items.DoubleCheck)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                        <option value="" hidden>Choose here</option>
                        <option value="DONE">DONE</option>
                        <option value="TODO">TO DO</option>
                        <option value="N.V.T.">N.V.T.</option>
                        <option value="BUSY">BUSY</option>
                        <option value="NOT OK">NOT OK</option>
                    </select>
                    <label className="" htmlFor="DoubleCheck">Double Check web SRV</label>

                    <br />

                    {props.data.list.isWebshop ? (
                        <>
                            <h4 className="text-l pt-2 font-semibold">Verzendingen</h4>
                            <select id="SendCloudUser" name="SendCloudUser" defaultValue={props.data.items.SendCloudUser} className={colorcheck(props.data.items.SendCloudUser)+" border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="SendCloudUser">Gebruiker aanmaken op SendCloud met placeholder_klant email. Klant zijn email ook koppelen.</label>

                            <br />
                            <select id="SendCloudVerrify" name="SendCloudVerrify" defaultValue={props.data.items.SendCloudVerrify} className={colorcheck(props.data.items.SendCloudVerrify)+" border mt-3 mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"}  >
                                <option value="" hidden>Choose here</option>
                                <option value="DONE">DONE</option>
                                <option value="TODO">TO DO</option>
                                <option value="N.V.T.">N.V.T.</option>
                                <option value="BUSY">BUSY</option>
                                <option value="NOT OK">NOT OK</option>
                            </select>
                            <label className="" htmlFor="SendCloudVerrify">Bankaccount verifiëren van klant met SendCloud</label>

                            <br />
                        </>
                    ) : null}

                    {/* when making a new checklist or viewing the logs don't show the add onderhoud button */}
                    {props.data.isnew != true && !props.isLog ?
                        <>
                            <MaintenanceTemplate onderhoud={props.data.onderhoud} isfirst />
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
                                            <MaintenanceTemplate key={item.Id} log={item} onderhoud={[]} />
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
                                <button type="button" className="float-right text-gray-700 hover:text-gray-900 print:hidden">
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