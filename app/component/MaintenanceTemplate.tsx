import moment from "moment";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import OnderhoudEntry from "./OnderhoudEntry";

// template for the onderhoud page
export default function MaintenanceTemplate(props: any) {
    const [isShown, setIsShown] = React.useState(false);
    const handleClick = () => setIsShown(!isShown);
    const ConditionalWrap = ({ condition, wrap, children }: any) => condition ? wrap(children) : children;

    let isediting
    let editing
    if (props.log != null) {
        editing = props.log
    }
    for (const item of props.onderhoud) {
        if (item.Finished == false) {
            isediting = true
            editing = item

        }
    }
    if (!isediting && props.log == null) {
        editing = {
            Finished: false,
            Verantwoordelijke: '',
            Checklistbl: false,
            Opmerkingen: '',
            TYPE: "",
            SMTPCheck: false,
            ContactFormTest: false,
            ReplyKlant: false,
            LEGALPACKMnt: false,
            ContactGegevensBedrijf: false,
            WPFastestOptimize: false,
            CloudflareMnt: false,
            FBDebug: false,
            ContactForm7: false,
            Footer: false,
            MaterialWPMnt: false,
            PluginUpdates: false,
            Speedcheck: false,
            SSLMnt: false,
            ReCaptchaMnt: false,
            DeadLinks: false,
            AnalyticsMnt: false,
            TagManagerMnt: false,
            GDPRForm: false,
            SitemapMnt: false,
            Ajax: false,
            EmptyCache: false,
            KlantMail: false,
            StripeMnt: false,
            BTWField: false,
            Tracking: false
        }
    }


    return (
        <>
            {props.isfirst ? <h4 className="text-xl pt-2 font-semibold">Onderhoud</h4> : null}
            {console.log(props.isfirst)}
            <>
                {/* if there is one or more onderhoud render the list of onderhouden */}
                {props.isfirst && props.onderhoud.length > 0 ?
                    (
                        props.onderhoud.map((item: any) => (
                            item.Finished ?
                                <MaintenanceTemplate key={item.Id} log={item} onderhoud={[]} />
                                :
                                null
                        ))
                    ) : (
                        null
                    )
                }

                {
                    // when the add onderhoud button is clicked or the onderhoud wasn't finished yet render the onderhoud list otherwise render the add onderhoud button
                    isShown || isediting ?
                        <ConditionalWrap condition={!props.isfirst} wrap={(children: any) => <fieldset id="logcheck" disabled>{children}</fieldset>}>
                            <div className="w-full p-2 mt-2 mb-2 bg-gray-200 rounded-xl overflow-hdden shadow-md undefined">


                                <label htmlFor="VerantwoordelijkeOnderhoud">Uitgevoerd door: </label>
                                <input required defaultValue={editing.Verantwoordelijke} className={"appearance-none p-1 m-1 bg-gray-300 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"VerantwoordelijkeOnderhoud"}></input>

                                <div className="float-right">
                                    <input id="Finished" defaultChecked={editing.Finished} type={"checkbox"} name={"Finished"} ></input>
                                    <label className="p-1 m-1" htmlFor="Finished">Finished</label>
                                </div>

                                <br />


                                <input id="Checklistbl" defaultChecked={editing.Checklistbl} type={"checkbox"} name={"Checklistbl"} ></input>
                                <label className="p-1 m-1" htmlFor="Checklistbl">Checklist</label>
                                <br />

                                <label className="" htmlFor="TYPE">TYPE: </label>
                                <input id="TYPE" defaultValue={editing.TYPE} className={"appearance-none bg-gray-300 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"TYPE"} ></input>
                                <br />

                                <input id="SMTPCheck" defaultChecked={editing.SMTPCheck} type={"checkbox"} name={"SMTPCheck"} ></input>
                                <label className="p-1 m-1" htmlFor="SMTPCheck">SMTP Mail Check</label>
                                <br />

                                <input id="ContactFormTest" defaultChecked={editing.ContactFormTest} type={"checkbox"} name={"ContactFormTest"} ></input>
                                <label className="p-1 m-1" htmlFor="ContactFormTest">Contactform testen</label>
                                <br />

                                <input id="ReplyKlant" defaultChecked={editing.ReplyKlant} type={"checkbox"} name={"ReplyKlant"} ></input>
                                <label className="p-1 m-1" htmlFor="ReplyKlant">Reply gehad van klant</label>
                                <br />

                                <input id="LEGALPACKMnt" defaultChecked={editing.LEGALPACKMnt} type={"checkbox"} name={"LEGALPACKMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="LEGALPACKMnt">LEGAL PACK</label>
                                <br />

                                <input id="ContactGegevensBedrijf" defaultChecked={editing.ContactGegevensBedrijf} type={"checkbox"} name={"ContactGegevensBedrijf"} ></input>
                                <label className="p-1 m-1" htmlFor="ContactGegevensBedrijf">Contactgegevens Bedrijf onderaan</label>
                                <br />

                                <input id="WPFastestOptimize" defaultChecked={editing.WPFastestOptimize} type={"checkbox"} name={"WPFastestOptimize"} ></input>
                                <label className="p-1 m-1" htmlFor="WPFastestOptimize">WP Fastest Cache of WP Optimize</label>
                                <br />

                                <input id="CloudflareMnt" defaultChecked={editing.CloudflareMnt} type={"checkbox"} name={"CloudflareMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="CloudflareMnt">Cloudflare?</label>
                                <br />

                                <input id="FBDebug" defaultChecked={editing.FBDebug} type={"checkbox"} name={"FBDebug"} ></input>
                                <label className="p-1 m-1" htmlFor="FBDebug">Facebook Debug OK?</label>
                                <br />

                                <input id="ContactForm7" defaultChecked={editing.ContactForm7} type={"checkbox"} name={"ContactForm7"} ></input>
                                <label className="p-1 m-1" htmlFor="ContactForm7">ContactForm7</label>
                                <br />

                                <input id="Footer" defaultChecked={editing.Footer} type={"checkbox"} name={"Footer"} ></input>
                                <label className="p-1 m-1" htmlFor="Footer">Footer Developed By LHS Global</label>
                                <br />

                                <input id="MaterialWPMnt" defaultChecked={editing.MaterialWPMnt} type={"checkbox"} name={"MaterialWPMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="MaterialWPMnt">Material WP Patch</label>
                                <br />

                                <input id="PluginUpdates" defaultChecked={editing.PluginUpdates} type={"checkbox"} name={"PluginUpdates"} ></input>
                                <label className="p-1 m-1" htmlFor="PluginUpdates">Plugin Update (NIET THEMA)</label>
                                <br />

                                <input id="Speedcheck" defaultChecked={editing.Speedcheck} type={"checkbox"} name={"Speedcheck"} ></input>
                                <label className="p-1 m-1" htmlFor="Speedcheck">SpeedCheck</label>
                                <br />

                                <input id="SSLMnt" defaultChecked={editing.SSLMnt} type={"checkbox"} name={"SSLMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="SSLMnt">SSL</label>
                                <br />

                                <input id="ReCaptchaMnt" defaultChecked={editing.ReCaptchaMnt} type={"checkbox"} name={"ReCaptchaMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="ReCaptchaMnt">ReCaptcha</label>
                                <br />

                                <input id="DeadLinks" defaultChecked={editing.DeadLinks} type={"checkbox"} name={"DeadLinks"} ></input>
                                <label className="p-1 m-1" htmlFor="DeadLinks">Deadlinks?</label>
                                <br />

                                <input id="AnalyticsMnt" defaultChecked={editing.AnalyticsMnt} type={"checkbox"} name={"AnalyticsMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="AnalyticsMnt">Analytics</label>
                                <br />

                                <input id="TagManagerMnt" defaultChecked={editing.TagManagerMnt} type={"checkbox"} name={"TagManagerMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="TagManagerMnt">TagManager</label>
                                <br />

                                <input id="GDPRForm" defaultChecked={editing.GDPRForm} type={"checkbox"} name={"GDPRForm"} ></input>
                                <label className="p-1 m-1" htmlFor="GDPRForm">GDPR Form Check</label>
                                <br />

                                <input id="SitemapMnt" defaultChecked={editing.SitemapMnt} type={"checkbox"} name={"SitemapMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="SitemapMnt">Sitemap (Yoast)</label>
                                <br />

                                <input id="Ajax" defaultChecked={editing.Ajax} type={"checkbox"} name={"Ajax"} ></input>
                                <label className="p-1 m-1" htmlFor="Ajax">Ajax Sidecart</label>
                                <br />

                                <input id="EmptyCache" defaultChecked={editing.EmptyCache} type={"checkbox"} name={"EmptyCache"} ></input>
                                <label className="p-1 m-1" htmlFor="EmptyCache">Cache Legen</label>
                                <br />

                                <input id="KlantMail" defaultChecked={editing.KlantMail} type={"checkbox"} name={"KlantMail"} ></input>
                                <label className="p-1 m-1" htmlFor="KlantMail">Mail naar Klant</label>
                                <br />

                                <input id="StripeMnt" defaultChecked={editing.StripeMnt} type={"checkbox"} name={"StripeMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="StripeMnt">Stripe</label>
                                <br />

                                <input id="BTWField" defaultChecked={editing.BTWField} type={"checkbox"} name={"BTWField"} ></input>
                                <label className="p-1 m-1" htmlFor="BTWField">BTW Field</label>
                                <br />

                                <input id="Tracking" defaultChecked={editing.Tracking} type={"checkbox"} name={"Tracking"} ></input>
                                <label className="p-1 m-1" htmlFor="Tracking">Tracking</label>
                                <br />

                            </div>
                        </ConditionalWrap>
                        :
                        props.isfirst ?
                            <div className="w-full my-5 bg-gray-200 rounded-xl overflow-hdden shadow-md py-5 undefined grid place-content-center hover:cursor-pointer" onClick={handleClick}>
                                <div>
                                    <BsPlusLg className="text-gray-500 text-4xl" />
                                </div>
                            </div>
                            :
                            <>
                                <div onClick={handleClick} key={props.log.Id} className="w-full p-2 mt-2 mb-2 bg-gray-200 rounded-xl overflow-hdden shadow-md undefined hover:cursor-pointer">
                                    <h4>onderhoud {moment(new Date(props.log.UpdatedAt)).format("DD/MM/yyyy HH:mm:ss")}</h4>
                                </div>
                            </>


                }
            </>



        </>
    )
}