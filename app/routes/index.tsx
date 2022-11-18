import { json, LinksFunction, LoaderFunction, redirect } from '@remix-run/node';
import { Link } from 'react-router-dom';
import { authenticator } from '~/utils/auth.server';
import styles from '../styles/app.css';
import main from '../styles/main.css';
import {sessionCookie, tokenCookie} from '../utils/session.server';

export const links: LinksFunction = () => {
  return [

    { rel: "stylesheet", href: main },
];
}

export const loader : LoaderFunction = async ({request}) =>{
    const cookies = request.headers.get('Cookie');
    const cookie = (await sessionCookie.parse(cookies)) || null;
    const tokencookei = (await tokenCookie.parse(cookies)) || null;
    const token =JSON.stringify(await authenticator.isAuthenticated(request))
    console.log(tokencookei);

    if(tokencookei === null && cookie === null){
        console.log("token is null")
        return redirect('/login')
        
    }if(tokencookei === null && cookie !== null){
        console.log("token is not null")
        return json(token, {headers: {
                'Set-Cookie': await tokenCookie.serialize(token),
            }})
    }

    return null
    
    
    
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
                                Deze checklist dient ingevuld te worden alvorens een website op te leveren aan een klant.
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