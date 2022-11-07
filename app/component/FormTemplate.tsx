import { Textarea } from "@material-tailwind/react";
import { Form } from "@remix-run/react";
import { GrDocumentPdf } from "react-icons/gr";

export default function FormTemplate(data: any) {
    return (
        <>
            {/* reusable form component */}
            <Form reloadDocument className="contact2-form" method="post">
                <h2 className="text-2xl font-semibold">Gegevens Klant</h2>
                <label htmlFor="KlantNummer">Klant Nummer: </label>
                <input required defaultValue={data.data.list.KlantNummer} className={"appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNummer"}></input>
                <br />

                <label htmlFor="KlantNaam">Klant Naam: </label>
                <input required defaultValue={data.data.list.KlantNaam} className={"appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"KlantNaam"}></input>
                <br />

                <label htmlFor="ProjectNaam">Projectnaam van klant: </label>
                <input required defaultValue={data.data.list.ProjectNaam} className={"appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNaam"}></input>
                <br />

                <label htmlFor="ProjectNummer">PO nummer project: </label>
                <input required defaultValue={data.data.list.ProjectNummer} className={"appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"ProjectNummer"}></input>
                <br />

                <label htmlFor="Budget">Budget: €</label>
                <input defaultValue={data.data.list.Budget} className={"appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Budget"}></input>
                <br />

                <label htmlFor="Verantwoordelijke">Verantwoordelijke project: </label>
                <input required defaultValue={data.data.list.Verantwoordelijke} className={"appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"Verantwoordelijke"}></input>
                <br />
                <h2 className="text-2xl pt-2 font-semibold">Checklist</h2>

                <h3 className="text-xl pt-2 font-semibold">Algemeen</h3>

                <input defaultChecked={data.data.items.Compressie} type={"checkbox"} name={"Compressie"} ></input>
                <label htmlFor="Compressie">Compressie aanzetten</label>
                <br />

                <input defaultChecked={data.data.items.Copyright} type={"checkbox"} name={"Copyright"}></input>
                <label htmlFor="Copyright">Copyright met dynamisch jaartal in footer zetten</label>
                <br />

                <input defaultChecked={data.data.items.SocialMediaMeta} type={"checkbox"} name={"SocialMediaMeta"}></input>
                <label htmlFor="SocialMediaMeta">Social media metatags + Google Analytics</label>
                <br />

                <input defaultChecked={data.data.items.SSL} type={"checkbox"} name={"SSL"}></input>
                <label htmlFor="SSL">SSL actief</label>
                <br />

                <input defaultChecked={data.data.items.FacebookDebug} type={"checkbox"} name={"FacebookDebug"}></input>
                <label htmlFor="FacebookDebug">Facebook Debug testen</label>
                <br />

                <input defaultChecked={data.data.items.LinkedInShare} type={"checkbox"} name={"LinkedInShare"}></input>
                <label htmlFor="LinkedInShare">LinkedIn Share testen</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Mail</h3>

                <input defaultChecked={data.data.items.PlaceholderMail} type={"checkbox"} name={"PlaceholderMail"}></input>
                <label htmlFor="PlaceholderMail">Placeholder email aanmaken voor klant</label>
                <br />

                <input defaultChecked={data.data.items.SMTP} type={"checkbox"} name={"SMTP"}></input>
                <label htmlFor="SMTP">SMTP configureren en aanzetten</label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <input defaultChecked={data.data.items.EmailKlant} type={"checkbox"} name={"EmailKlant"}></input>
                        <label htmlFor="EmailKlant">Emails laten sturen naar klant (nieuwe orders, failed orders,...)</label>
                        <br />
                    </>
                ) : null}

                <h3 className="text-xl pt-2 font-semibold">Afbeeldingen</h3>

                <input defaultChecked={data.data.items.Loadspeed} type={"checkbox"} name={"Loadspeed"}></input>
                <label htmlFor="Loadspeed">Loadspeed (ms):</label>
                <input defaultValue={data.data.items.LoadspeedTime} className={"appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"LoadspeedTime"}></input>
                <br />

                <input defaultChecked={data.data.items.ImageSize} type={"checkbox"} name={"ImageSize"}></input>
                <label htmlFor="ImageSize">Grootte van afbeeldingen (comprimeren)</label>
                <br />

                <input defaultChecked={data.data.items.AltTags} type={"checkbox"} name={"AltTags"}></input>
                <label htmlFor="AltTags">Alt tags voor elke afbeelding zetten</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Bestanden</h3>

                <input defaultChecked={data.data.items.Htaccess} type={"checkbox"} name={"Htaccess"}></input>
                <label htmlFor="Htaccess">.htaccess plaatsen </label>
                <br />

                <input defaultChecked={data.data.items.Robots} type={"checkbox"} name={"Robots"}></input>
                <label htmlFor="Robots">Robots.txt plaatsen</label>
                <br />

                <input defaultChecked={data.data.items.Sitemap} type={"checkbox"} name={"Sitemap"}></input>
                <label htmlFor="Sitemap">Sitemap.xml plaatsen</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Policies&Voorwaarden</h3>

                <input defaultChecked={data.data.items.Privacy} type={"checkbox"} name={"Privacy"}></input>
                <label htmlFor="Privacy">Privacy Policy</label>
                <br />

                <input defaultChecked={data.data.items.AlgemeneVoorwaarden} type={"checkbox"} name={"AlgemeneVoorwaarden"}></input>
                <label htmlFor="AlgemeneVoorwaarden">Algemene voorwaarden</label>
                <br />

                <input defaultChecked={data.data.items.CookiePolicy} type={"checkbox"} name={"CookiePolicy"}></input>
                <label htmlFor="CookiePolicy">Cookie policy</label>
                <br />

                <input defaultChecked={data.data.items.CookiePolicyBanner} type={"checkbox"} name={"CookiePolicyBanner"}></input>
                <label htmlFor="CookiePolicyBanner">Cookie policy pop up</label>
                <br />

                <input defaultChecked={data.data.items.GDPR} type={"checkbox"} name={"GDPR"}></input>
                <label htmlFor="GDPR">GDPR: bij formulieren een akkoord zetten</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Plugins</h3>

                <input defaultChecked={data.data.items.ColorLib} type={"checkbox"} name={"ColorLib"}></input>
                <label htmlFor="ColorLib">ColorLib Login Customer: loginpagina aangepast met logo, huiskleur en afbeelding</label>
                <br />

                <input defaultChecked={data.data.items.EasyWPSMTP} type={"checkbox"} name={"EasyWPSMTP"}></input>
                <label htmlFor="EasyWPSMTP">Easy WP SMTP: SMTP configureren en aanzetten</label>
                <br />

                <input defaultChecked={data.data.items.WPS} type={"checkbox"} name={"WPS"}></input>
                <label htmlFor="WPS">WPS Hide Login: redirect van login-url naar /login zetten</label>
                <br />

                <input defaultChecked={data.data.items.W3} type={"checkbox"} name={"W3"}></input>
                <label htmlFor="W3">W3 Total Cache: caching van pagina's juist zetten</label>
                <br />

                <input defaultChecked={data.data.items.GDPRCookies} type={"checkbox"} name={"GDPRCookies"}></input>
                <label htmlFor="GDPRCookies">GDPR Cookie Consent: cookie popup.</label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <input defaultChecked={data.data.items.SendCloud} type={"checkbox"} name={"SendCloud"}></input>
                        <label htmlFor="SendCloud">SendCloud | Smart Shipping Service: connectie maken met WooCommerce en Sendcloud.</label>
                        <br />

                        <input defaultChecked={data.data.items.WooCommerce} type={"checkbox"} name={"WooCommerce"}></input>
                        <label htmlFor="WooCommerce">WooCommerce</label>
                        <br />

                        <input defaultChecked={data.data.items.WooCommerceAdmin} type={"checkbox"} name={"WooCommerceAdmin"}></input>
                        <label htmlFor="WooCommerceAdmin">WooCommerce Admin</label>
                        <br />

                        <input defaultChecked={data.data.items.WooCommerceBlocks} type={"checkbox"} name={"WooCommerceBlocks"}></input>
                        <label htmlFor="WooCommerceBlocks">WooCommerce Blocks</label>
                        <br />

                        <input defaultChecked={data.data.items.WooCommercePayPal} type={"checkbox"} name={"WooCommercePayPal"}></input>
                        <label htmlFor="WooCommercePayPal">WooCommerce Paypal Checkout Gateway</label>
                        <br />

                        <input defaultChecked={data.data.items.WooCommercePDF} type={"checkbox"} name={"WooCommercePDF"}></input>
                        <label htmlFor="WooCommercePDF">WooCommerce PDF Invoices & Packing Slips: facturen juist configureren met logo en gegevens van klant. In de footer verwijzing naar algemene voorwaarden.</label>
                        <br />

                        <input defaultChecked={data.data.items.WooCommerceServices} type={"checkbox"} name={"WooCommerceServices"}></input>
                        <label htmlFor="WooCommerceServices">WooCommerce Services</label>
                        <br />

                        <input defaultChecked={data.data.items.WooCommerceStripe} type={"checkbox"} name={"WooCommerceStripe"}></input>
                        <label htmlFor="WooCommerceStripe">WooCommerce Stripe Gateway: connectie maken met WooCommerce en Stripe.</label>
                        <br />
                    </>
                ) : null}


                <input defaultChecked={data.data.items.KlantAanpassingen} type={"checkbox"} name={"KlantAanpassingen"}></input>
                <label htmlFor="KlantAanpassingen">Klant moet aanpassingen kunnen doen</label>
                <br />

                <input defaultChecked={data.data.items.CapabilityManager} type={"checkbox"} name={"CapabilityManager"}></input>
                <label htmlFor="CapabilityManager">Capability Manager Enhanced: restricted gebruiker aanmaken en configureren</label>
                <br />
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <h3 className="text-xl pt-2 font-semibold">Betaling</h3>

                        <input defaultChecked={data.data.items.Stripe} type={"checkbox"} name={"Stripe"}></input>
                        <label htmlFor="Stripe">Stripe account aanmaken en configureren voor Mastercard/Visa & Bancontact</label>
                        <br />

                        <input defaultChecked={data.data.items.Betaalmethodes} type={"checkbox"} name={"Betaalmethodes"}></input>
                        <label htmlFor="Betaalmethodes">Betaalmethodes correct configureren</label>
                        <br />

                        <input defaultChecked={data.data.items.Testen} type={"checkbox"} name={"Testen"}></input>
                        <label htmlFor="Testen">Testen van betalingssystemen</label>
                        <br />
                    </>
                ) : null}



                <h3 className="text-xl pt-2 font-semibold">Mobiel</h3>
                {/* fields that are only in the webshop list are not rendered in website checklist */}
                {data.data.list.isWebshop ? (
                    <>
                        <input defaultChecked={data.data.items.SendCloudUser} type={"checkbox"} name={"SendCloudUser"}></input>
                        <label htmlFor="SendCloudUser">Gebruiker aanmaken op SendCloud met placeholder_klant email. Klant zijn email ook koppelen.</label>
                        <br />

                        <input defaultChecked={data.data.items.SendCloudVerrify} type={"checkbox"} name={"SendCloudVerrify"}></input>
                        <label htmlFor="SendCloudVerrify">Bankaccount verifiëren van klant met SendCloud</label>
                        <br />
                    </>
                ) : null}



                <input defaultChecked={data.data.items.Mobile} type={"checkbox"} name={"Mobile"}></input>
                <label htmlFor="Mobile">Verifiëren dat site werkt en er goed uitziet op mobiel</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Hosting</h3>

                <input defaultChecked={data.data.items.Optimalisatie} type={"checkbox"} name={"Optimalisatie"}></input>
                <label htmlFor="Optimalisatie">Site optimalisatie aanzetten</label>
                <br />

                <input defaultChecked={data.data.items.SSLCheckup} type={"checkbox"} name={"SSLCheckup"}></input>
                <label htmlFor="SSLCheckup">SSL Checkup</label>
                <br />

                <input defaultChecked={data.data.items.MailCheckup} type={"checkbox"} name={"MailCheckup"}></input>
                <label htmlFor="MailCheckup">Mail Checkup</label>
                <br />

                <input defaultChecked={data.data.items.FactuurHosting} type={"checkbox"} name={"FactuurHosting"}></input>
                <label htmlFor="FactuurHosting">Factuur opsturen voor hosting</label>
                <br />

                <input defaultChecked={data.data.items.KlantgegevensWHMCS} type={"checkbox"} name={"KlantgegevensWHMCS"}></input>
                <label htmlFor="KlantgegevensWHMCS">Klantgegevens in WHMCS portal steken</label>
                <br />

                <h3 className="text-xl pt-2 font-semibold">Finalisatie</h3>

                <input defaultChecked={data.data.items.FactuurOpvolging} type={"checkbox"} name={"FactuurOpvolging"}></input>
                <label htmlFor="FactuurOpvolging">Factuur opsturen en betaling opvolgen</label>
                <br />

                <input defaultChecked={data.data.items.MailOfferte} type={"checkbox"} name={"MailOfferte"}></input>
                <label htmlFor="MailOfferte">Mail offerte afdrukken</label>
                <br />

                <input defaultChecked={data.data.items.TelefonischOpvolging} type={"checkbox"} name={"TelefonischOpvolging"}></input>
                <label htmlFor="TelefonischOpvolging">Telefonisch verifiëren bij klant</label>
                <br />

                <input defaultChecked={data.data.items.OpvolgingWeken} type={"checkbox"} name={"OpvolgingWeken"}></input>
                <label htmlFor="OpvolgingWeken">Opvolgen na aantal weken</label>
                <br />

                <input defaultChecked={data.data.items.EindFactuur} type={"checkbox"} name={"EindFactuur"}></input>
                <label htmlFor="EindFactuur">Eindfactuur versturen</label>
                <br />

                <label className="text-xl pt-2 font-semibold" htmlFor="Opmerkingen">Opmerkingen</label>
                <br />
                <Textarea resize className="bg-gray-200 no-padding bg-clip-content" color="blue" size="lg" variant="standard" defaultValue={data.data.items.Opmerkingen} name={"Opmerkingen"} placeholder={"Opmerkingen"}></Textarea>

                <br />
                
                <label className="print:hidden" htmlFor="nameDev">Naam developer</label>
                <br />
                <input className={" print:hidden appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:border-gray-500"}  required type="text" name="nameDev" placeholder="git blame"/>



                <div className="container-contact2-form-btn">
                    <div className="wrap-contact2-form-btn">
                        <div className="contact2-form-bgbtn"></div>
                        <div className="print:hidden">
                            <button className="contact2-form-btn" type={"submit"}>submit</button>
                        </div>
                    </div>
                </div>

                {/* button for PDF print note type=button to not submit the form */}
                <button type="button" className="float-right print:hidden">
                    <GrDocumentPdf onClick={() => print()} size={'30px'} />
                </button>
            </Form>
        </>
    )

}