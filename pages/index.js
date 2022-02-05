import React, { useEffect } from 'react';
import ArticleSection from '../src/comps/articles/ArticleSection';
import GoToTop from '../src/comps/loadings/GoToTop';
import MainMenu from '../src/comps/menus/MainMenu';
import { ApiManager } from '../src/resources/ApiManager';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { loadImportantArticles } from '../src/redux/importantArticles';
import { loadImportantPoems } from '../src/redux/importantPoems';
import Footer from '../src/comps/footers/Footer';
import PoemSection from '../src/comps/poems/PoemSection';

export async function getServerSideProps({ locale }) {
    const queryReqArticles = qs.stringify({
        sort: ['createdAt:desc'],
        populate: '*',
        pagination: {
            page: 1,
            pageSize: 8,
        },
        locale: 'vi',
    }, {
        encodeValuesOnly: true,
    });

    const resArticles = await fetch(`${ApiManager.adminBaseUrl}/articles?${queryReqArticles}`);
    const articles = await resArticles.json();

    if (articles.length === 0) {
        return {
            notFound: true,
        }
    }

    const queryReqPoems = qs.stringify({
        sort: ['createdAt:desc'],
        populate: '*',
        pagination: {
            page: 1,
            pageSize: 8,
        },
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
            articles: articles.data,
            poems: poems.data,
        }
    }
};

const Home = ({
    articles,
    poems
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadImportantArticles(articles));
        dispatch(loadImportantPoems(poems));
    }, [])

    return (
        <>
            <div className="page-wrapper">
                <MainMenu />
                <ArticleSection />
                <PoemSection />
                <Footer />
            </div>
            <GoToTop />
        </>
    )
};

export default Home;