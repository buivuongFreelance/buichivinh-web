import React, { useEffect } from 'react';
import ArticleSection from '../../src/comps/articles/ArticleSection';
import GoToTop from '../../src/comps/loadings/GoToTop';
import MainMenu from '../../src/comps/menus/MainMenu';
import { ApiManager } from '../../src/resources/ApiManager';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { loadImportantArticles } from '../../src/redux/importantArticles';
import Footer from '../../src/comps/footers/Footer';
import MainBreadcrumb from '../../src/comps/breadcrumbs/MainBreadcrumb';
import Articles from '../../src/comps/articles/Articles';

export async function getServerSideProps({ locale }) {
    const queryReqArticles = qs.stringify({
        sort: ['createdAt:desc'],
        populate: '*',
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

    return {
        props: {
            articles: articles.data,
        }
    }
};

const ArticlesPage = ({
    articles
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadImportantArticles(articles));
    }, [])

    return (
        <>
            <div className="page-wrapper">
                <MainMenu />
                <div className="content-wrapper">
                    <MainBreadcrumb active={{
                        title: 'Bài Viết'
                    }} />
                </div>
                <Articles />
                <Footer />
            </div>
            <GoToTop />
        </>
    )
};

export default ArticlesPage;