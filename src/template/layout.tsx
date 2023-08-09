import { ReactElement } from "react";

export function Layout({children}:{children: ReactElement[] | ReactElement}){
    return(<div className="min-h-screen mx-5">
        {children}
    </div>)
}