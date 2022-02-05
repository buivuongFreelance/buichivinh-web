import Link from 'next/link';
import React from 'react';

const MainBreadcrumb = ({
    parent, active
}) => {
    if (!active) return null;
    return <div className="breadcrumb-wrap bg-f br-1">
        <div className="overlay op-7 bg-midnight"></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="breadcrumb-title">
                        <h2>{active.title}</h2>
                        <ul className="breadcrumb-menu list-style">
                            <li>
                                <Link href="/">
                                    <a>Trang chủ</a>
                                </Link>
                            </li>
                            {parent &&
                                <li>
                                    <Link href={`${parent.url}`}>
                                        <a>{parent.title}</a>
                                    </Link>
                                </li>
                            }
                            <li>{active.title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default MainBreadcrumb;