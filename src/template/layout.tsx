import { ReactElement } from "react";

export function Layout({children}:{children: ReactElement[] | ReactElement}){
    return(<div className="min-h-screen overflow-scroll">
        {children}
    </div>)
}