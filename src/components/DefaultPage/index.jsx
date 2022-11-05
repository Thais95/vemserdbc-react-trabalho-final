import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

function DefaultPage() {
    return(
        <main>
            <Outlet />
        </main>
    )
}

export default DefaultPage;