import { json, LinksFunction, LoaderFunction, MetaFunction, redirect } from '@remix-run/node';
import { Link } from 'react-router-dom';
import main from '../styles/main.css';

export const links: LinksFunction = () => {
        return [
                { rel: "stylesheet", href: main },
        ];
}

export const meta: MetaFunction = () => {
        return {
                robots: "noindex",
                googlebot: "noindex",
                title: "Checklist",
                description: "Checklist oplevering",
        };
}


export default function index() {

        return (
                <div className="bg-contact2">
                        <div className="container-contact2">
                                <div className="wrap-contact2">
                                        <span className="contact2-form-title">
                                                Checklist Oplevering
                                        </span>
                                        <p>
                                                Deze checklist dient ingevuld te worden alvorens een website op te leveren aan een klant.
                                        </p>
                                        <div className="container-contact2-form-btn">
                                                <div className="wrap-contact2-form-btn">
                                                        <div className="contact2-form-bgbtn"></div>
                                                        <Link to={'/Website'} className="contact2-form-btn">
                                                                Website
                                                        </Link>
                                                </div>
                                        </div>
                                        <div className="container-contact2-form-btn">
                                                <div className="wrap-contact2-form-btn">
                                                        <div className="contact2-form-bgbtn"></div>
                                                        <Link to="webshop" className="contact2-form-btn">
                                                                Webshop
                                                        </Link>
                                                </div>
                                        </div>
                                        <div className="container-contact2-form-btn">
                                                <div className="wrap-contact2-form-btn">
                                                        <div className="contact2-form-bgbtn"></div>
                                                        <Link to="list" className="contact2-form-btn">
                                                                Lijst
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}