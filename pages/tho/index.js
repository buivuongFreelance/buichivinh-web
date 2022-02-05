import React, { useEffect } from 'react';
import PoemSection from '../../src/comps/poems/PoemSection';
import GoToTop from '../../src/comps/loadings/GoToTop';
import MainMenu from '../../src/comps/menus/MainMenu';
import { ApiManager } from '../../src/resources/ApiManager';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { loadImportantPoems } from '../../src/redux/importantPoems';
import Footer from '../../src/comps/footers/Footer';
import MainBreadcrumb from '../../src/comps/breadcrumbs/MainBreadcrumb';
import Poems from '../../src/comps/poems/Poems';

export async function getServerSideProps({ locale }) {
    const queryReqPoems = qs.stringify({
        sort: ['createdAt:desc'],
        populate: '*',
        locale: 'vi',
    }, {
        encodeValuesOnly: true,
    });

    const resPoems = await fetch(`${ApiManager.adminBaseUrl}/poems?${queryReqPoems}`);
    const poems = await resPoems.json();

    if (poems.length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            poems: poems.data,
        }
    }
};

const PoemsPage = ({
    poems
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadImportantPoems(poems));
    }, [])

    return (
        <>
            <div className="page-wrapper">
                <MainMenu />
                <div className="content-wrapper">
                    <MainBreadcrumb active={{
                        title: 'Thơ'
                    }} />
                </div>
                <Poems />
                <Footer />
            </div>
            <GoToTop />
        </>
    )
};

export default PoemsPage;