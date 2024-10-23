import React from "react";

const Header = () => {
    return(
        <header className="bg-gray-800 p-1 flex items-center justify-between">
            <h1 className="text-red-600 justify-center p-2 margin-0 text-4xl ">Javeria Kanwal</h1>
            <nav className="bg-gray-800 p-2">
                <ul className="flex space-x-4 p-2">
                    <li>home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;