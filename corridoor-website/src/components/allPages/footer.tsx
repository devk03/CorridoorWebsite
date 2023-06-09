import React from 'react';
import Link from 'next/link';
import { Fragment } from 'react';
const Footer: React.FC = () => {
    return (
        <Fragment>
        <footer className="border-t-4 border-indigo-500 bg-white bg-opacity-70 text-center text-xs p-3 w-full">
            <div className="flex justify-center items-center space-x-4">
                <div>
                    <Link href="/terms" className="px-5">
                        <span className="text-black hover:text-gray-800 cursor-pointer">
                            Terms & Conditions
                        </span>
                    </Link>
                    <Link href="https://www.linkedin.com/company/corridoor-app/">
                        <span className="text-black hover:text-gray-800 cursor-pointer">
                            LinkedIn
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
        </Fragment>

    );
};

export default Footer;