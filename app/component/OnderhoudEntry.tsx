import moment from "moment";
import React from "react";

export default function OnderhoudEntry(onderhoud: any) {
    const [isShown, setIsShown] = React.useState(false);
    const handleClick = () => setIsShown(!isShown);
    return (
        <>
        {/* Disabled version of the maintenance template with custom styling to make checkboxes more readable */}
            {!isShown ?
                <>
                    <div onClick={handleClick} key={onderhoud.onderhoud.Id} className="w-full p-2 mt-2 mb-2 bg-gray-200 rounded-xl overflow-hdden shadow-md undefined hover:cursor-pointer">
                        <h4>onderhoud {moment(new Date(onderhoud.onderhoud.UpdatedAt)).format("DD/MM/yyyy HH:mm:ss")}</h4>
                    </div>
                </>
                :
                <div className="w-full my-2 p-2 bg-gray-200 rounded-xl overflow-hdden shadow-md undefined">

                    <h4 className="text-xl p-2 text-center">onderhoud {moment(new Date(onderhoud.onderhoud.UpdatedAt)).format("DD/MM/yyyy HH:mm:ss")}</h4>
                    <label className="form-control" htmlFor="VerantwoordelijkeOnderhoud">Uitgevoerd door: </label>

                    <input disabled defaultValue={onderhoud.onderhoud.Verantwoordelijke} className={"appearance-none p-1 m-1 bg-gray-300 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"}></input>



                    <br />


                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.Checklistbl} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="Checklistbl">Checklist</label>
                    <br />

                    <label className="" htmlFor="TYPE">TYPE: </label>
                    <input id="logcheck" className={"appearance-none p-1 m-1 bg-gray-300 border border-gray-200 rounded  leading-tight focus:border-gray-500"} defaultValue={onderhoud.onderhoud.TYPE} disabled type={"text"} ></input>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.SMTPCheck} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="SMTPCheck">SMTP Mail Check</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.ContactFormTest} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="ContactFormTest">Contactform testen</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.ReplyKlant} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="ReplyKlant">Reply gehad van klant</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.LEGALPACKMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="LEGALPACKMnt">LEGAL PACK</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.ContactGegevensBedrijf} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="ContactGegevensBedrijf">Contactgegevens Bedrijf onderaan</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.WPFastestOptimize} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="WPFastestOptimize">WP Fastest Cache of WP Optimize</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.CloudflareMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="CloudflareMnt">Cloudflare?</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.FBDebug} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="FBDebug">Facebook Debug OK?</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.ContactForm7} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="ContactForm7">ContactForm7</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.Footer} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="Footer">Footer Developed By LHS Global</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.MaterialWPMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="MaterialWPMnt">Material WP Patch</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.PluginUpdates} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="PluginUpdates">Plugin Update (NIET THEMA)</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.Speedcheck} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="Speedcheck">SpeedCheck</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.SSLMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="SSLMnt">SSL</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.ReCaptchaMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="ReCaptchaMnt">ReCaptcha</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.DeadLinks} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="DeadLinks">Deadlinks?</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.AnalyticsMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="AnalyticsMnt">Analytics</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.TagManagerMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="TagManagerMnt">TagManager</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.GDPRForm} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="GDPRForm">GDPR Form Check</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.SitemapMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="SitemapMnt">Sitemap (Yoast)</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.Ajax} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="Ajax">Ajax Sidecart</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.EmptyCache} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="EmptyCache">Cache Legen</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.KlantMail} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="KlantMail">Mail naar Klant</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.StripeMnt} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="StripeMnt">Stripe</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.BTWField} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="BTWField">BTW Field</label>
                    <br />

                    <input id="logcheck" defaultChecked={onderhoud.onderhoud.Tracking} disabled type={"checkbox"} ></input>
                    <label className="p-1 m-1" htmlFor="Tracking">Tracking</label>
                    <br />

                </div>
            }
        </>
    )
}