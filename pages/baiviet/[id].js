import React, { useEffect } from 'react';
import GoToTop from '../../src/comps/loadings/GoToTop';
import MainMenu from '../../src/comps/menus/MainMenu';
import { ApiManager } from '../../src/resources/ApiManager';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import Footer from '../../src/comps/footers/Footer';
import MainBreadcrumb from '../../src/comps/breadcrumbs/MainBreadcrumb';
import { loadArticle } from '../../src/redux/article';
import ArticleDetail from '../../src/comps/articles/ArticleDetail';

export async function getServerSideProps({ locale, params }) {
    const { id } = params;

    const queryReqArticle = qs.stringify({
        populate: '*',
        locale: 'vi',
    }, {
        encodeValuesOnly: true,
    });
    const resArticle = await fetch(`${ApiManager.adminBaseUrl}/articles/${id}?${queryReqArticle}`);
    const article = await resArticle.json();

    if (!article) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            article: article.data,
        }
    }
};

const ArticleDetailPage = ({
    article
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadArticle(article));
    }, [])

    if (!article) return null;

    return (
        <>
            <div className="page-wrapper">
                <MainMenu />
                <div className="content-wrapper">
                    <MainBreadcrumb parent={{
                        title: 'Bài Viết',
                        url: '/baiviet'
                    }} active={{
                        title: article.attributes.name
                    }} />
                    <ArticleDetail />
                </div>
                <Footer />
            </div>
            <GoToTop />
        </>
    )
};

export default ArticleDetailPage;