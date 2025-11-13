import {Link} from "react-router";

export default function Nav(){
    return (
            <nav>
                <ul>
                   <li>
                       <Link to={`/`}>Home</Link>
                       <Link to={`/representatives`}>Representatives</Link>
                       <Link to ={`/learn`}>Learn</Link>
                       <Link to ={`/discussion`}>Discussion</Link>
                   </li>
                </ul>
            </nav>
    );
}