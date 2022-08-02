import React from "react";
import Head from "next/head";
import NavBar from "./navbar";
import Footer from "./footer";
import GalleriaAutoPlayDemo from "./galleriaAutoPlayDemo";



function Layout({children,title}) {
    {/*Footer*/}
    return(
        <div>
            <Head>
                <title>Tienda {title?`| ${title}`:''}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
           <main>
               <NavBar/>
               <GalleriaAutoPlayDemo/>
               {children}
           </main>
            <footer>
                <NavBar/>
            </footer>
        </div>

    )

}
export default Layout;