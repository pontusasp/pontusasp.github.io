import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div className={"app-container flex flex-col min-h-screen bg-gradient-to-br from-black to-violet-950"}>
            <header>
                <Navbar />
            </header>
            <main className={"flex-grow flex items-center justify-center text-violet-50"}>
                <Outlet />
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Root;
