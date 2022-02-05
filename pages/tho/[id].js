import React, { useEffect } from 'react';
import GoToTop from '../../src/comps/loadings/GoToTop';
import MainMenu from '../../src/comps/menus/MainMenu';
import { ApiManager } from '../../src/resources/ApiManager';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import Footer from '../../src/comps/footers/Footer';
import MainBreadcrumb from '../../src/comps/breadcrumbs/MainBreadcrumb';
import { loadPoem } from '../../src/redux/poem';
import PoemDetail from '../../src/comps/poems/PoemDetail';

export async function getServerSideProps({ locale, params }) {
    const { id } = params;

    const queryReqPoem = qs.stringify({
        populate: '*',
        locale: 'vi',
    }, {
        encodeValuesOnly: true,
    });
    const resPoem = await fetch(`${ApiManager.adminBaseUrl}/poems/${id}?${queryReqPoem}`);
    const poem = await resPoem.json();

    if (!poem) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            poem: poem.data,
        }
    }
};

const PoemDetailPage = ({
    poem
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPoem(poem));
    }, [])

    if (!poem) return null;

    return (
        <>
            <div className="page-wrapper">
                <MainMenu />
                <div className="content-wrapper">
                    <MainBreadcrumb parent={{
                        title: 'Thơ',
                        url: '/tho'
                    }} active={{
                        title: poem.attributes.name
                    }} />
                    <PoemDetail />
                </div>
                <Footer />
            </div>
            <GoToTop />
        </>
    )
};

export default PoemDetailPage;