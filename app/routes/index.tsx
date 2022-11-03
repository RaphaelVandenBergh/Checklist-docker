
import type { LinksFunction } from '@remix-run/node';
import { Link } from 'react-router-dom';
import styles from '../styles/app.css';
import main from '../styles/main.css';

export const links: LinksFunction = () => {
  return [

    { rel: "stylesheet", href: main },
];
}


export default function index(){
    return (
        <div className="bg-contact2">
        <div className="container-contact2">
                <div className="wrap-contact2">
                        <span className="contact2-form-title">
                                Checklist Oplevering
                        </span>
                        <p>
                                Deze checklist dient ingevuld alvorens een website op te leveren aan de klant.
                        </p>
                        <div className="container-contact2-form-btn">
                                <div className="wrap-contact2-form-btn">
                                        <div className="contact2-form-bgbtn"></div>
                                        <Link to={'/Website'} className="contact2-form-btn">Website</Link>
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