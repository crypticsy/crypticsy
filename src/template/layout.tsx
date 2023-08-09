import { ReactElement } from "react";

export function Layout({children}:{children: ReactElement[] | ReactElement}){
    return(<div className="min-h-screen overflow-scroll mx-5">
        {children}
    </div>)
}