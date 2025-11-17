import { ReactElement } from "react";
import { ScrollToTop } from "../components/ScrollToTop";

export function Layout({children}:{children: ReactElement[] | ReactElement}){
    return(<div className="min-h-full" id="layout">
        {children}
        <ScrollToTop />
    </div>)
}