import React from "react";
import { BsPlusLg } from "react-icons/bs";


export default function MaintenanceTemplate() {
    const [isShown, setIsShown] = React.useState(false);
    const handleClick = () => setIsShown(!isShown);

    return (
        <>
            <h4 className="text-xl pt-2 font-semibold">Onderhoud</h4>
            {isShown ?
                <div className="w-full p-2 bg-gray-200 rounded-xl overflow-hdden shadow-md undefined">
                    
                    
                    <label htmlFor="VerantwoordelijkeOnderhoud">Uitgevoerd door: </label>
                    <input required className={"appearance-none p-1 m-1 bg-gray-300 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"VerantwoordelijkeOnderhoud"}></input>
                    <br />

                    <input id="Checklistbl" type={"checkbox"} name={"Checklistbl"} ></input>
                    <label className="p-1 m-1" htmlFor="Checklistbl">Checklist</label>
                    <br />

                    <input id="TYPE" type={"checkbox"} name={"TYPE"} ></input>
                    <label className="p-1 m-1" htmlFor="TYPE">TYPE</label>
                    <br />

                    <input id="SMTPCheck" type={"checkbox"} name={"SMTPCheck"} ></input>
                    <label className="p-1 m-1" htmlFor="SMTPCheck">SMTP Mail Check</label>
                    <br />
                    
                    <input id="ContactFormTest" type={"checkbox"} name={"ContactFormTest"} ></input>
                    <label className="p-1 m-1" htmlFor="ContactFormTest">Contactform testen</label>
                    <br />

                    <input id="ReplyKlant" type={"checkbox"} name={"ReplyKlant"} ></input>
                    <label className="p-1 m-1" htmlFor="ReplyKlant">Reply gehad van klant</label>
                    <br />

                    <input id="LEGALPACK" type={"checkbox"} name={"LEGALPACK"} ></input>
                    <label className="p-1 m-1" htmlFor="LEGALPACK">LEGAL PACK</label>
                    <br />

                    <input id="ContactGegevensBedrijf" type={"checkbox"} name={"ContactGegevensBedrijf"} ></input>
                    <label className="p-1 m-1" htmlFor="ContactGegevensBedrijf">Contactgegevens Bedrijf onderaan</label>
                    <br />

                    <input id="WPFastestOptimize" type={"checkbox"} name={"WPFastestOptimize"} ></input>
                    <label className="p-1 m-1" htmlFor="WPFastestOptimize">WP Fastest Cache of WP Optimize</label>
                    <br />

                    <input id="CloudflareMnt" type={"checkbox"} name={"CloudflareMnt"} ></input>
                    <label className="p-1 m-1" htmlFor="CloudflareMnt">Cloudflare?</label>
                    <br />

                    <input id="FBDebug" type={"checkbox"} name={"FBDebug"} ></input>
                    <label className="p-1 m-1" htmlFor="FBDebug">Facebook Debug OK?</label>
                    <br />

                    <input id="ContactForm7" type={"checkbox"} name={"ContactForm7"} ></input>
                    <label className="p-1 m-1" htmlFor="ContactForm7">ContactForm7</label>
                    <br />

                    <input id="Footer" type={"checkbox"} name={"Footer"} ></input>
                    <label className="p-1 m-1" htmlFor="Footer">Footer Developed By LHS Global</label>
                    <br />

                    <input id="MaterialWPMnt" type={"checkbox"} name={"MaterialWPMnt"} ></input>
                    <label className="p-1 m-1" htmlFor="MaterialWPMnt">Material WP Patch</label>
                    <br />

                    <input id="PluginUpdates" type={"checkbox"} name={"PluginUpdates"} ></input>
                    <label className="p-1 m-1" htmlFor="PluginUpdates">Plugin Update (NIET THEMA)</label>
                    <br />

                    <input id="Speedcheck" type={"checkbox"} name={"Speedcheck"} ></input>
                    <label className="p-1 m-1" htmlFor="Speedcheck">SpeedCheck</label>
                    <br />

                    <input id="SSLMnt" type={"checkbox"} name={"SSLMnt"} ></input>
                    <label className="p-1 m-1" htmlFor="SSLMnt">SSL</label>
                    <br />

                    <input id="ReCaptcha" type={"checkbox"} name={"ReCaptcha"} ></input>
                    <label className="p-1 m-1" htmlFor="ReCaptcha">ReCaptcha</label>
                    <br />

                    <input id="DeadLinks" type={"checkbox"} name={"DeadLinks"} ></input>
                    <label className="p-1 m-1" htmlFor="DeadLinks">Deadlinks?</label>
                    <br />

                    <input id="Analytics" type={"checkbox"} name={"Analytics"} ></input>
                    <label className="p-1 m-1" htmlFor="Analytics">Analytics</label>
                    <br />

                    <input id="TagManagerMnt" type={"checkbox"} name={"TagManagerMnt"} ></input>
                    <label className="p-1 m-1" htmlFor="TagManagerMnt">TagManager</label>
                    <br />

                    <input id="GDPRForm" type={"checkbox"} name={"GDPRForm"} ></input>
                    <label className="p-1 m-1" htmlFor="GDPRForm">GDPR Form Check</label>
                    <br />

                    <input id="SitemapMnt" type={"checkbox"} name={"SitemapMnt"} ></input>
                    <label className="p-1 m-1" htmlFor="SitemapMnt">Sitemap (Yoast)</label>
                    <br />

                    <input id="Ajax" type={"checkbox"} name={"Ajax"} ></input>
                    <label className="p-1 m-1" htmlFor="Ajax">Ajax Sidecart</label>
                    <br />

                    <input id="EmptyCache" type={"checkbox"} name={"EmptyCache"} ></input>
                    <label className="p-1 m-1" htmlFor="EmptyCache">Cache Legen</label>
                    <br />

                    <input id="KlantMail" type={"checkbox"} name={"KlantMail"} ></input>
                    <label className="p-1 m-1" htmlFor="KlantMail">Mail naar Klant</label>
                    <br />

                    <input id="StripeMnt" type={"checkbox"} name={"StripeMnt"} ></input>
                    <label className="p-1 m-1" htmlFor="StripeMnt">Stripe</label>
                    <br />

                    <input id="BTWField" type={"checkbox"} name={"BTWField"} ></input>
                    <label className="p-1 m-1" htmlFor="BTWField">BTW Field</label>
                    <br />

                    <input id="Tracking" type={"checkbox"} name={"Tracking"} ></input>
                    <label className="p-1 m-1" htmlFor="Tracking">Tracking</label>
                    <br />
                        
                </div>
                :
                <div className="w-full my-5 bg-gray-200 rounded-xl overflow-hdden shadow-md py-5 undefined grid place-content-center hover:cursor-pointer" onClick={handleClick}>
                    <div>
                        <BsPlusLg className="text-gray-500 text-4xl" />
                    </div>
                </div>

            }

        </>
    )
}