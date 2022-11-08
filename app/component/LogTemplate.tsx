import { Textarea } from "@material-tailwind/react";
import { Form } from "@remix-run/react";
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
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Compressie} type={"checkbox"} name={"Compressie"} ></input>
                    Compressie aanzetten
                </label>
                <br />

                <label className="form-control" htmlFor="Copyright">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Copyright} type={"checkbox"} name={"Copyright"}></input>
                    Copyright met dynamisch jaartal in footer zetten
                </label>
                <br />

                <label className="form-control" htmlFor="SocialMediaMeta">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SocialMediaMeta} type={"checkbox"} name={"SocialMediaMeta"}></input>
                    Social media metatags + Google Analytics
                </label>
                <br />

                <label className="form-control" htmlFor="SSL">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SSL} type={"checkbox"} name={"SSL"}></input>
                    SSL actief
                </label>
                <br />

                <label className="form-control" htmlFor="FacebookDebug">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].FacebookDebug} type={"checkbox"} name={"FacebookDebug"}></input>
                    Facebook Debug testen
                </label>
                <br />

                <label className="form-control" htmlFor="LinkedInShare">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].LinkedInShare} type={"checkbox"} name={"LinkedInShare"}></input>
                    LinkedIn Share testen
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Mail</h3>

                <label className="form-control" htmlFor="PlaceholderMail">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].PlaceholderMail} type={"checkbox"} name={"PlaceholderMail"}></input>
                    Placeholder email aanmaken voor klant
                </label>
                <br />

                <label className="form-control" htmlFor="SMTP">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SMTP} type={"checkbox"} name={"SMTP"}></input>
                    SMTP configureren en aanzetten
                </label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <label className="form-control" htmlFor="EmailKlant">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].EmailKlant} type={"checkbox"} name={"EmailKlant"}></input>
                            Emails laten sturen naar klant (nieuwe orders, failed orders,...)
                        </label>
                        <br />
                    </>
                ) : null}

                <h3 className="text-xl pt-2 font-semibold">Afbeeldingen</h3>

                <label className="form-control" htmlFor="Loadspeed">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Loadspeed} type={"checkbox"} name={"Loadspeed"}></input>
                    Loadspeed (ms):
                </label>
                <input disabled defaultValue={data.data.items[data.data.items.findIndex(findlog)].LoadspeedTime} className={"appearance-none bg-gray-200  border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"LoadspeedTime"}></input>
                <br />

                <label className="form-control" htmlFor="ImageSize">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].ImageSize} type={"checkbox"} name={"ImageSize"}></input>
                    Grootte van afbeeldingen (comprimeren)
                </label>
                <br />

                <label className="form-control" htmlFor="AltTags">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].AltTags} type={"checkbox"} name={"AltTags"}></input>
                    Alt tags voor elke afbeelding zetten
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Bestanden</h3>

                <label className="form-control" htmlFor="Htaccess">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Htaccess} type={"checkbox"} name={"Htaccess"}></input>
                    .htaccess plaatsen
                </label>
                <br />

                <label className="form-control" htmlFor="Robots">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Robots} type={"checkbox"} name={"Robots"}></input>
                    Robots.txt plaatsen
                </label>
                <br />

                <label className="form-control" htmlFor="Sitemap">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Sitemap} type={"checkbox"} name={"Sitemap"}></input>
                    Sitemap.xml plaatsen
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Policies&Voorwaarden</h3>

                <label className="form-control" htmlFor="Privacy">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Privacy} type={"checkbox"} name={"Privacy"}></input>
                    Privacy Policy
                </label>
                <br />

                <label className="form-control" htmlFor="AlgemeneVoorwaarden">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].AlgemeneVoorwaarden} type={"checkbox"} name={"AlgemeneVoorwaarden"}></input>
                    Algemene voorwaarden
                </label>
                <br />

                <label className="form-control" htmlFor="CookiePolicy">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].CookiePolicy} type={"checkbox"} name={"CookiePolicy"}></input>
                    Cookie policy
                </label>
                <br />

                <label className="form-control" htmlFor="CookiePolicyBanner">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].CookiePolicyBanner} type={"checkbox"} name={"CookiePolicyBanner"}></input>
                    Cookie policy pop up
                </label>
                <br />

                <label className="form-control" htmlFor="GDPR">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].GDPR} type={"checkbox"} name={"GDPR"}></input>
                    GDPR: bij formulieren een akkoord zetten
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Plugins</h3>

                <label className="form-control" htmlFor="ColorLib">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].ColorLib} type={"checkbox"} name={"ColorLib"}></input>
                    ColorLib Login Customer: loginpagina aangepast met logo, huiskleur en afbeelding
                </label>
                <br />

                <label className="form-control" htmlFor="EasyWPSMTP">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].EasyWPSMTP} type={"checkbox"} name={"EasyWPSMTP"}></input>
                    Easy WP SMTP: SMTP configureren en aanzetten
                </label>
                <br />

                <label className="form-control" htmlFor="WPS">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WPS} type={"checkbox"} name={"WPS"}></input>
                    WPS Hide Login: redirect van login-url naar /login zetten
                </label>
                <br />

                <label className="form-control" htmlFor="W3">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].W3} type={"checkbox"} name={"W3"}></input>
                    W3 Total Cache: caching van pagina's juist zetten
                </label>
                <br />

                <label className="form-control" htmlFor="GDPRCookies">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].GDPRCookies} type={"checkbox"} name={"GDPRCookies"}></input>
                    GDPR Cookie Consent: cookie popup.
                </label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <label className="form-control" htmlFor="SendCloud">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SendCloud} type={"checkbox"} name={"SendCloud"}></input>
                            SendCloud | Smart Shipping Service: connectie maken met WooCommerce en Sendcloud.
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerce">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerce} type={"checkbox"} name={"WooCommerce"}></input>
                            WooCommerce
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerceAdmin">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceAdmin} type={"checkbox"} name={"WooCommerceAdmin"}></input>
                            WooCommerce Admin
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerceBlocks">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceBlocks} type={"checkbox"} name={"WooCommerceBlocks"}></input>
                            WooCommerce Blocks
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommercePayPal">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommercePayPal} type={"checkbox"} name={"WooCommercePayPal"}></input>
                            WooCommerce Paypal Checkout Gateway
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommercePDF">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommercePDF} type={"checkbox"} name={"WooCommercePDF"}></input>
                            WooCommerce PDF Invoices & Packing Slips: facturen juist configureren met logo en gegevens van klant. In de footer verwijzing naar algemene voorwaarden.
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerceServices">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceServices} type={"checkbox"} name={"WooCommerceServices"}></input>
                            WooCommerce Services
                        </label>
                        <br />

                        <label className="form-control" htmlFor="WooCommerceStripe">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].WooCommerceStripe} type={"checkbox"} name={"WooCommerceStripe"}></input>
                            WooCommerce Stripe Gateway: connectie maken met WooCommerce en Stripe.
                        </label>
                        <br />
                    </>
                ) : null}


                <label className="form-control" htmlFor="KlantAanpassingen">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].KlantAanpassingen} type={"checkbox"} name={"KlantAanpassingen"}></input>
                    Klant moet aanpassingen kunnen doen
                </label>
                <br />

                <label className="form-control" htmlFor="CapabilityManager">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].CapabilityManager} type={"checkbox"} name={"CapabilityManager"}></input>
                    Capability Manager Enhanced: restricted gebruiker aanmaken en configureren
                </label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <h3 className="text-xl pt-2 font-semibold">Betaling</h3>

                        <label className="form-control" htmlFor="Stripe">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Stripe} type={"checkbox"} name={"Stripe"}></input>
                            Stripe account aanmaken en configureren voor Mastercard/Visa & Bancontact
                        </label>
                        <br />

                        <label className="form-control" htmlFor="Betaalmethodes">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Betaalmethodes} type={"checkbox"} name={"Betaalmethodes"}></input>
                            Betaalmethodes correct configureren
                        </label>
                        <br />

                        <label className="form-control" htmlFor="Testen">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Testen} type={"checkbox"} name={"Testen"}></input>
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
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SendCloudUser} type={"checkbox"} name={"SendCloudUser"}></input>
                            Gebruiker aanmaken op SendCloud met placeholder_klant email. Klant zijn email ook koppelen.
                        </label>
                        <br />

                        <label className="form-control" htmlFor="SendCloudVerrify">
                            <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SendCloudVerrify} type={"checkbox"} name={"SendCloudVerrify"}></input>
                            Bankaccount verifiëren van klant met SendCloud
                        </label>
                        <br />
                    </>
                ) : null}



                <label className="form-control" htmlFor="Mobile">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Mobile} type={"checkbox"} name={"Mobile"}></input>
                    Verifiëren dat site werkt en er goed uitziet op mobiel
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Hosting</h3>

                <label className="form-control" htmlFor="Optimalisatie">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].Optimalisatie} type={"checkbox"} name={"Optimalisatie"}></input>
                    Site optimalisatie aanzetten
                </label>
                <br />

                <label className="form-control" htmlFor="SSLCheckup">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].SSLCheckup} type={"checkbox"} name={"SSLCheckup"}></input>
                    SSL Checkup
                </label>
                <br />

                <label className="form-control" htmlFor="MailCheckup">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].MailCheckup} type={"checkbox"} name={"MailCheckup"}></input>
                    Mail Checkup
                </label>
                <br />

                <label className="form-control" htmlFor="FactuurHosting">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].FactuurHosting} type={"checkbox"} name={"FactuurHosting"}></input>
                    Factuur opsturen voor hosting
                </label>
                <br />

                <label className="form-control" htmlFor="KlantgegevensWHMCS">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].KlantgegevensWHMCS} type={"checkbox"} name={"KlantgegevensWHMCS"}></input>
                    Klantgegevens in WHMCS portal steken
                </label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Finalisatie</h3>

                <label className="form-control" htmlFor="FactuurOpvolging">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].FactuurOpvolging} type={"checkbox"} name={"FactuurOpvolging"}></input>
                    Factuur opsturen en betaling opvolgen
                </label>
                <br />

                <label className="form-control" htmlFor="MailOfferte">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].MailOfferte} type={"checkbox"} name={"MailOfferte"}></input>
                    Mail offerte afdrukken

                </label>
                <br />

                <label className="form-control" htmlFor="TelefonischOpvolging">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].TelefonischOpvolging} type={"checkbox"} name={"TelefonischOpvolging"}></input>
                    Telefonisch verifiëren bij klant

                </label>
                <br />

                <label className="form-control" htmlFor="OpvolgingWeken">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].OpvolgingWeken} type={"checkbox"} name={"OpvolgingWeken"}></input>
                    Opvolgen na aantal weken

                </label>
                <br />

                <label className="form-control" htmlFor="EindFactuur">
                    <input disabled defaultChecked={data.data.items[data.data.items.findIndex(findlog)].EindFactuur} type={"checkbox"} name={"EindFactuur"}></input>
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