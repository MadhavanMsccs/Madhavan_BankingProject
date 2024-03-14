import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <>
        <div id="home">
         <h3>Welcome to <span id="span-1">MADDY</span>-<span id="span-2">BANK</span></h3>
         <h4>"Online banking"</h4>
         <p> Available on 24/7 </p>
         <p>Today's Saving is Tomorrow Security</p>
         <Link to="/create">
            <button>Sign-In</button>
         </Link>
        </div>
        </>
    )
}
