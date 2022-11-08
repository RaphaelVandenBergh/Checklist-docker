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
                <input disabled required defaultValue={data.data.list.KlantNummer} className={"appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNummer"}></input>
                <br />

                <label className="form-control" htmlFor="KlantNaam">Klant Naam:
                </label>
                <input disabled required defaultValue={data.data.list.KlantNaam} className={"appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNaam"}></input>
                <br />

                <label className="form-control" htmlFor="ProjectNaam">Projectnaam van klant:
                </label>
                <input disabled required defaultValue={data.data.list.ProjectNaam} className={"appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNaam"}></input>
                <br />

                <label className="form-control" htmlFor="ProjectNummer">PO nummer project:
                </label>
                <input disabled required defaultValue={data.data.list.ProjectNummer} className={"appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNummer"}></input>
                <br />

                <label className="form-control" htmlFor="Budget">Budget: €
                </label>
                <input disabled defaultValue={data.data.list.Budget} className={"appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Budget"}></input>
                <br />

                <label className="form-control" htmlFor="Verantwoordelijke">Verantwoordelijke project:
                </label>
                <input disabled required defaultValue={data.data.list.Verantwoordelijke} className={"appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Verantwoordelijke"}></input>
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
                    Social media metatags + Google Analytics
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
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <label className="form-control" htmlFor="EmailKlant">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].EmailKlant} type={"checkbox"} id="logcheck" name={"EmailKlant"}></input>
                            Emails laten sturen naar klant (nieuwe orders, failed orders,...)
                        </label>
                        <br />
                    </>
                ) : null}

                <h3 className="text-xl pt-2 font-semibold">Afbeeldingen</h3>

                <label className="form-control" htmlFor="Loadspeed">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Loadspeed} type={"checkbox"} id="logcheck" name={"Loadspeed"}></input>
                    Loadspeed (ms):
                </label>
                <input disabled defaultValue={data.data.items[data.data.items.findIndex(findlog)].LoadspeedTime} className={"appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"LoadspeedTime"}></input>
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

                <label className="form-control" htmlFor="ColorLib">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].ColorLib} type={"checkbox"} id="logcheck" name={"ColorLib"}></input>
                    ColorLib Login Customer: loginpagina aangepast met logo, huiskleur en afbeelding
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

                <label className="form-control" htmlFor="W3">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].W3} type={"checkbox"} id="logcheck" name={"W3"}></input>
                    W3 Total Cache: caching van pagina's juist zetten
                </label>
                <br />

                <label className="form-control" htmlFor="GDPRCookies">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].GDPRCookies} type={"checkbox"} id="logcheck" name={"GDPRCookies"}></input>
                    GDPR Cookie Consent: cookie popup.
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

                        <label className="form-control" htmlFor="WooCommerceAdmin">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceAdmin} type={"checkbox"} id="logcheck" name={"WooCommerceAdmin"}></input>
                            WooCommerce Admin
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerceBlocks">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceBlocks} type={"checkbox"} id="logcheck" name={"WooCommerceBlocks"}></input>
                            WooCommerce Blocks
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

                        <label className="form-control" htmlFor="WooCommerceServices">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceServices} type={"checkbox"} id="logcheck" name={"WooCommerceServices"}></input>
                            WooCommerce Services
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
                    </>
                ) : null}



                <h3 className="text-xl pt-2 font-semibold">Mobiel</h3>
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
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
                    Factuur opsturen voor hosting
                </label>
                <br />

                <label className="form-control" htmlFor="KlantgegevensWHMCS">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].KlantgegevensWHMCS} type={"checkbox"} id="logcheck" name={"KlantgegevensWHMCS"}></input>
                    Klantgegevens in WHMCS portal steken
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Finalisatie</h3>

                <label className="form-control" htmlFor="FactuurOpvolging">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].FactuurOpvolging} type={"checkbox"} id="logcheck" name={"FactuurOpvolging"}></input>
                    Factuur opsturen en betaling opvolgen
                </label>
                <br />

                <label className="form-control" htmlFor="MailOfferte">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].MailOfferte} type={"checkbox"} id="logcheck" name={"MailOfferte"}></input>
                    Mail offerte afdrukken

                </label>
                <br />

                <label className="form-control" htmlFor="TelefonischOpvolging">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].TelefonischOpvolging} type={"checkbox"} id="logcheck" name={"TelefonischOpvolging"}></input>
                    Telefonisch verifiëren bij klant

                </label>
                <br />

                <label className="form-control" htmlFor="OpvolgingWeken">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].OpvolgingWeken} type={"checkbox"} id="logcheck" name={"OpvolgingWeken"}></input>
                    Opvolgen na aantal weken

                </label>
                <br />

                <label className="form-control" htmlFor="EindFactuur">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].EindFactuur} type={"checkbox"} id="logcheck" name={"EindFactuur"}></input>
                    Eindfactuur versturen

                </label>
                <br />

                <label  className="text-xl pt-2 font-semibold" htmlFor="Opmerkingen">Opmerkingen
                </label>
                <br />
                <Textarea disabled resize className="bg-gray-200 no-padding bg-clip-content" color="blue" size="lg" variant="standard" defaultValue={data.data.items[data.data.items.findIndex(findlog)].Opmerkingen} name={"Opmerkingen"} placeholder={"Opmerkingen"}></Textarea>

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