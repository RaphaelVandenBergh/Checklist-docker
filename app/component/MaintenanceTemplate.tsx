import moment from "moment";
import React from "react";
import { BsPlusLg } from "react-icons/bs";

// template for the onderhoud page
const ConditionalWrap = ({ condition, wrap, children }: any) => condition ? wrap(children) : children;
export default function MaintenanceTemplate(props: any) {
    const [isShown, setIsShown] = React.useState(false);
    const handleClick = () => setIsShown(!isShown);
    

    let isediting
    let fields
    if (props.log != null) {
        fields = props.log
    }
    for (const item of props.onderhoud) {
        if (item.Finished == false) {
            isediting = true
            fields = item

        }
    }
    if (!isediting && props.log == null) {
        fields = {
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
                                <input required defaultValue={fields.Verantwoordelijke} className={"appearance-none p-1 m-1 bg-gray-300 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"text"} name={"VerantwoordelijkeOnderhoud"}></input>

                                <div className="float-right">
                                    <input id="Finished" defaultChecked={fields.Finished} type={"checkbox"} name={"Finished"} ></input>
                                    <label className="p-1 m-1" htmlFor="Finished">Finished</label>
                                </div>
                                <br />

                                <input id="Checklistbl" defaultChecked={fields.Checklistbl} type={"checkbox"} name={"Checklistbl"} ></input>
                                <label className="p-1 m-1" htmlFor="Checklistbl">Checklist</label>
                                <br />

                                <label className="" htmlFor="TYPE">TYPE: </label>
                                <select id="TYPE" defaultValue={fields.TYPE} className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/12 p-1"} name={"TYPE"} >
                                    <option value="">choose here</option>
                                    <option value="Wordpress">Wordpress</option>
                                    <option value="HTML">HTML</option>
                                </select>
                                <br />

                                <input id="SMTPCheck" defaultChecked={fields.SMTPCheck} type={"checkbox"} name={"SMTPCheck"} ></input>
                                <label className="p-1 m-1" htmlFor="SMTPCheck">SMTP Mail Check</label>
                                <br />

                                <input id="ContactFormTest" defaultChecked={fields.ContactFormTest} type={"checkbox"} name={"ContactFormTest"} ></input>
                                <label className="p-1 m-1" htmlFor="ContactFormTest">Contactform testen</label>
                                <br />

                                <input id="ReplyKlant" defaultChecked={fields.ReplyKlant} type={"checkbox"} name={"ReplyKlant"} ></input>
                                <label className="p-1 m-1" htmlFor="ReplyKlant">Reply gehad van klant</label>
                                <br />

                                <input id="LEGALPACKMnt" defaultChecked={fields.LEGALPACKMnt} type={"checkbox"} name={"LEGALPACKMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="LEGALPACKMnt">LEGAL PACK</label>
                                <br />

                                <input id="ContactGegevensBedrijf" defaultChecked={fields.ContactGegevensBedrijf} type={"checkbox"} name={"ContactGegevensBedrijf"} ></input>
                                <label className="p-1 m-1" htmlFor="ContactGegevensBedrijf">Contactgegevens Bedrijf onderaan</label>
                                <br />

                                <input id="WPFastestOptimize" defaultChecked={fields.WPFastestOptimize} type={"checkbox"} name={"WPFastestOptimize"} ></input>
                                <label className="p-1 m-1" htmlFor="WPFastestOptimize">WP Fastest Cache of WP Optimize</label>
                                <br />

                                <input id="CloudflareMnt" defaultChecked={fields.CloudflareMnt} type={"checkbox"} name={"CloudflareMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="CloudflareMnt">Cloudflare?</label>
                                <br />

                                <input id="FBDebug" defaultChecked={fields.FBDebug} type={"checkbox"} name={"FBDebug"} ></input>
                                <label className="p-1 m-1" htmlFor="FBDebug">Facebook Debug OK?</label>
                                <br />

                                <input id="ContactForm7" defaultChecked={fields.ContactForm7} type={"checkbox"} name={"ContactForm7"} ></input>
                                <label className="p-1 m-1" htmlFor="ContactForm7">ContactForm7</label>
                                <br />

                                <input id="Footer" defaultChecked={fields.Footer} type={"checkbox"} name={"Footer"} ></input>
                                <label className="p-1 m-1" htmlFor="Footer">Footer Developed By LHS Global</label>
                                <br />

                                <input id="MaterialWPMnt" defaultChecked={fields.MaterialWPMnt} type={"checkbox"} name={"MaterialWPMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="MaterialWPMnt">Material WP Patch</label>
                                <br />

                                <input id="PluginUpdates" defaultChecked={fields.PluginUpdates} type={"checkbox"} name={"PluginUpdates"} ></input>
                                <label className="p-1 m-1" htmlFor="PluginUpdates">Plugin Update (NIET THEMA)</label>
                                <br />

                                <input id="Speedcheck" defaultChecked={fields.Speedcheck} type={"checkbox"} name={"Speedcheck"} ></input>
                                <label className="p-1 m-1" htmlFor="Speedcheck">SpeedCheck ms:</label>
                                <input required defaultValue={fields.SpeedCheckspeed} className={"appearance-none p-1 m-1 bg-gray-300 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"number"} name={"SpeedCheckspeed"}></input>

                                <br />

                                <input id="SSLMnt" defaultChecked={fields.SSLMnt} type={"checkbox"} name={"SSLMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="SSLMnt">SSL</label>
                                <br />

                                <input id="ReCaptchaMnt" defaultChecked={fields.ReCaptchaMnt} type={"checkbox"} name={"ReCaptchaMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="ReCaptchaMnt">ReCaptcha</label>
                                <br />

                                <input id="DeadLinks" defaultChecked={fields.DeadLinks} type={"checkbox"} name={"DeadLinks"} ></input>
                                <label className="p-1 m-1" htmlFor="DeadLinks">Deadlinks?</label>
                                <input required defaultValue={fields.DeadlinkAmount} className={"appearance-none p-1 m-1 bg-gray-300 border border-gray-200 rounded  leading-tight focus:border-gray-500"} type={"number"} name={"DeadlinkAmount"}></input>

                                <br />

                                <input id="AnalyticsMnt" defaultChecked={fields.AnalyticsMnt} type={"checkbox"} name={"AnalyticsMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="AnalyticsMnt">Analytics</label>
                                <br />

                                <input id="TagManagerMnt" defaultChecked={fields.TagManagerMnt} type={"checkbox"} name={"TagManagerMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="TagManagerMnt">TagManager</label>
                                <br />

                                <input id="GDPRForm" defaultChecked={fields.GDPRForm} type={"checkbox"} name={"GDPRForm"} ></input>
                                <label className="p-1 m-1" htmlFor="GDPRForm">GDPR Form Check</label>
                                <br />

                                <input id="SitemapMnt" defaultChecked={fields.SitemapMnt} type={"checkbox"} name={"SitemapMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="SitemapMnt">Sitemap (Yoast)</label>
                                <br />

                                <input id="Ajax" defaultChecked={fields.Ajax} type={"checkbox"} name={"Ajax"} ></input>
                                <label className="p-1 m-1" htmlFor="Ajax">Ajax Sidecart</label>
                                <br />

                                <input id="EmptyCache" defaultChecked={fields.EmptyCache} type={"checkbox"} name={"EmptyCache"} ></input>
                                <label className="p-1 m-1" htmlFor="EmptyCache">Cache Legen</label>
                                <br />

                                <input id="KlantMail" defaultChecked={fields.KlantMail} type={"checkbox"} name={"KlantMail"} ></input>
                                <label className="p-1 m-1" htmlFor="KlantMail">Mail naar Klant</label>
                                <br />

                                <input id="StripeMnt" defaultChecked={fields.StripeMnt} type={"checkbox"} name={"StripeMnt"} ></input>
                                <label className="p-1 m-1" htmlFor="StripeMnt">Stripe</label>
                                <br />

                                <input id="BTWField" defaultChecked={fields.BTWField} type={"checkbox"} name={"BTWField"} ></input>
                                <label className="p-1 m-1" htmlFor="BTWField">BTW Field</label>
                                <br />

                                <input id="Tracking" defaultChecked={fields.Tracking} type={"checkbox"} name={"Tracking"} ></input>
                                <label className="p-1 m-1" htmlFor="Tracking">Tracking</label>
                                <br />

                            </div>
                        </ConditionalWrap>
                        :
                        props.isfirst ?
                            <div className="w-full my-5 bg-gray-200 rounded-xl overflow-hdden shadow-md py-5 undefined grid place-content-center hover:cursor-pointer print:hidden" onClick={handleClick}>
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