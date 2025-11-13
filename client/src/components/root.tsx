import {Route, Routes} from 'react-router';
import Nav from "./nav";
import Home from "./mains/home";
import Representatives from "./mains/representatives";
import Learn from "./mains/learn";
import Discussion from "./mains/discussion";
import Header from "./header";
import Footer from "./footer";
export default function Root() {
    return (
        <>
            <Header />
            <Nav/>
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path ={`/representatives`} element={<Representatives/>}/>
                <Route path ={`/learn`} element={<Learn/>}/>
                <Route path ={`/discussion`} element={<Discussion/>}/>
            </Routes>
            <Footer/>
        </>
    );
}