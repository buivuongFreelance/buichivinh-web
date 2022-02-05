import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectImportantArticles } from '../../redux/importantArticles';
import { ApiManager } from '../../resources/ApiManager';

import { formatRelative } from 'date-fns'
import { vi } from 'date-fns/locale'

const ArticleSection = () => {
    const articles = useSelector(selectImportantArticles);

    if (articles.length === 0) return null;

    return <section className="business-wrap style1 pb-75" style={{
        paddingTop: '200px'
    }}>
        <div className="container">
            <div className="row  mb-30 align-items-center">
                <div className="col-md-8 col-sm-7">
                    <div className="section-title style1">
                        <h2>Bài viết</h2>
                    </div>
                </div>
                <div className="col-md-4 col-sm-5 text-sm-end xs-none">
                    <Link href="/baiviet">
                        <a className="link style2">Xem tất cả</a>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="row">
                        {
                            articles.map(article => {
                                const { attributes: {
                                    mainImage, author
                                } } = article;
                                return <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={article.id}>
                                    <Link href={`/baiviet/${article.id}`}>
                                        <div className="news-box style5 mb-25">
                                            <div className="news-img">
                                                <img src={`${ApiManager.adminDomain}${mainImage.data.attributes.url}`} alt="Image"
                                                />
                                                <div className="over_lay style1"></div>
                                            </div>
                                            <div className="news-info">
                                                <h3 className="news-title">
                                                    <a>
                                                        {article.attributes.name}
                                                    </a>
                                                </h3>
                                                <ul className="news-metainfo list-style">
                                                    <li>
                                                        <a><i className="flaticon-clock"></i>
                                                            {
                                                                formatRelative(new Date(article.attributes.createdAt), new Date(),
                                                                    { locale: vi })
                                                            }
                                                        </a>
                                                    </li>
                                                    <li><i className="flaticon-user-2"></i>{author.data.attributes.name}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
                {/* <div className="col-xl-4">
                    <div className="news-box style9">
                        <div className="news-img">
                            <img src="assets/img/business/business-news-14.jpg" alt="Image" />
                        </div>
                        <div className="news-info">
                            <h3 className="news-title"><a href="news-details.html">Epic Adventures at Jackson
                                Hole in Summer 2022</a></h3>
                            <div className="published-date">
                                <i className="lar la-clock"></i>
                                Saturday, 9 April 2021
                            </div>
                        </div>
                    </div>
                    <div className="news-box style9">
                        <div className="news-img">
                            <img src="assets/img/business/business-news-15.jpg" alt="Image" />
                        </div>
                        <div className="news-info">
                            <h3 className="news-title"><a href="news-details.html">How to Run A Full Financial Audit Of Your Business</a></h3>
                            <div className="published-date">
                                <i className="lar la-clock"></i>
                                Monday, 12 March 2021
                            </div>
                        </div>
                    </div>
                    <div className="news-box style9">
                        <div className="news-img">
                            <img src="assets/img/business/business-news-16.jpg" alt="Image" />
                        </div>
                        <div className="news-info">
                            <h3 className="news-title"><a href="news-details.html">What Are The Makings Of A High-Quality Link?</a></h3>
                            <div className="published-date">
                                <i className="lar la-clock"></i>
                                Friday, 5 March 2021
                            </div>
                        </div>
                    </div>
                    <div className="news-box style9">
                        <div className="news-img">
                            <img src="assets/img/business/business-news-17.jpg" alt="Image" />
                        </div>
                        <div className="news-info">
                            <h3 className="news-title"><a href="news-details.html">7 Questions Ao Ask When Hiring A Content</a></h3>
                            <div className="published-date">
                                <i className="lar la-clock"></i>
                                Tuesday, 9 June 2020
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="row  d-sm-none mt-30 mb-20">
                <div className="col-md-4 col-sm-5 text-center">
                    <Link href="/baiviet">
                        <a className="link style2">XEM TẤT CẢ</a>
                    </Link>
                </div>
            </div>
        </div>
    </section>
};

export default ArticleSection;