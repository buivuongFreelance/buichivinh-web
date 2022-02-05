import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectPoem } from '../../redux/poem';
import { ApiManager } from '../../resources/ApiManager';
import ReactMarkdown from 'react-markdown'

import { formatRelative } from 'date-fns';
import { vi } from 'date-fns/locale';

import { FacebookProvider, EmbeddedPost } from 'react-facebook';

const PoemDetail = () => {
    const poem = useSelector(selectPoem);

    useEffect(() => {

    }, []);

    if (!poem) return null;

    return <div className="blog-section ptb-100 bg-selago">
        <div className="container">
            <div className="row gx-5">
                <div className="col-xxl-9 col-xl-8 col-lg-12">
                    <div className="bg-white">
                        <div className="post-img">
                            {poem.attributes.mainImage &&
                                <img src={`${ApiManager.adminDomain}${poem.attributes.mainImage.data.attributes.url}`} alt="Image"
                                />
                            }
                            <ul className="news-cat list-style">
                                <li><a className="style3">Thơ</a></li>
                            </ul>
                        </div>
                        <h2 className="post-title mt-25">{poem.attributes.name}</h2>
                        <ul className="news-metainfo list-style mb-20">
                            <li><a><i className="flaticon-clock"></i>{
                                formatRelative(new Date(poem.attributes.createdAt), new Date(),
                                    { locale: vi })
                            }</a></li>
                            {
                                poem.attributes.author &&
                                <li><i className="flaticon-user-2"></i>{poem.attributes.author.data.attributes.name}</li>
                            }
                            {/* <li><i className="flaticon-visibility"></i>120</li> */}
                        </ul>
                        <div className="post-para">
                            <ReactMarkdown>{poem.attributes.content}</ReactMarkdown>
                        </div>
                    </div>
                    <h4 style={{ marginBottom: '20px' }}>Thơ trên Facebook</h4>
                    <FacebookProvider appId="890921591599086">
                        <EmbeddedPost href={poem.attributes.linkFacebook} width="500" />
                    </FacebookProvider>
                    {/* <div className="post-meta-option">
                        <div className="row gx-0 align-items-center">
                            <div className="col-md-7 col-12">
                                <div className="post-tag">
                                    <span>Tags:</span>
                                    <ul className="list-style">
                                        <li><a href="blog-left-sidebar.html">Blog</a>,</li>
                                        <li><a href="blog-left-sidebar.html">Travel</a>,</li>
                                        <li><a href="blog-left-sidebar.html">Music</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-12 text-md-end text-start">
                                <div className="post-share w-100">
                                    <span>Share:</span>
                                    <ul className="social-profile style3 list-style">
                                        <li><a target="_blank" href="https://instagram.com"><i className="lab la-instagram"></i></a></li>
                                        <li><a target="_blank" href="https://twitter.com"><i className="lab la-twitter"></i></a></li>
                                        <li><a target="_blank" href="https://facebook.com"><i className="lab la-facebook-f"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="post-author">
                        <div className="post-author-img">
                            <img src="assets/img/news/author-1.jpg" alt="Image" />
                        </div>
                        <div className="post-author-info">
                            <h4>Andrew Simons</h4>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ullam ea molestias accusamus explicabo qui incidunt voluptatem corporis, blanditiis odio.</p>
                            <ul className="social-profile style3 list-style">
                                <li><a target="_blank" href="https://instagram.com"><i className="lab la-instagram"></i></a></li>
                                <li><a target="_blank" href="https://twitter.com"><i className="lab la-twitter"></i></a></li>
                                <li><a target="_blank" href="https://facebook.com"><i className="lab la-facebook-f"></i></a></li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="comment-box-wrap post-comment">
                        <h4 className="comment-box-title">Comments <span>(03)</span></h4>
                        <div className="comment-item">
                            <div className="comment-author-img">
                                <img src="assets/img/news/author-3.jpg" alt="mage" />
                            </div>
                            <div className="comment-author-wrap">
                                <div className="comment-author-info">
                                    <div className="row align-items-start">
                                        <div className="col-md-9 col-sm-8 col-12 order-md-1 order-sm-1 order-1">
                                            <div className="comment-author-name">
                                                <h5>Jhon Doe</h5>
                                                <p className="comment-date"><i className="flaticon-clock"></i>16 Mar, 2021</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-12 order-md-2 order-sm-2 order-3 text-sm-end">
                                            <a href="#cmt-form" className="link style3"><i className="flaticon-right-arrow"></i>Reply </a>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-3 order-2">
                                            <div className="comment-text">
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-item reply">
                            <div className="comment-author-img">
                                <img src="assets/img/news/author-1.jpg" alt="mage" />
                            </div>
                            <div className="comment-author-wrap">
                                <div className="comment-author-info">
                                    <div className="row align-items-start">
                                        <div className="col-md-9 col-sm-8 col-12 order-md-1 order-sm-1 order-1">
                                            <div className="comment-author-name">
                                                <h5>
                                                    Jonathan Miller</h5>
                                                <p className="comment-date"><i className="flaticon-clock"></i>15 Mar, 2021</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-12 order-md-2 order-sm-2 order-3 text-sm-end">
                                            <a href="#cmt-form" className="link style3"><i className="flaticon-right-arrow"></i>Reply </a>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-3 order-2">
                                            <div className="comment-text">
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-item">
                            <div className="comment-author-img">
                                <img src="assets/img/news/author-2.jpg" alt="mage" />
                            </div>
                            <div className="comment-author-wrap">
                                <div className="comment-author-info">
                                    <div className="row align-items-start">
                                        <div className="col-md-9 col-sm-8 col-12 order-md-1 order-sm-1 order-1">
                                            <div className="comment-author-name">
                                                <h5>Jhon Conor</h5>
                                                <p className="comment-date"><i className="flaticon-clock"></i>13 Mar, 2021</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-12 order-md-2 order-sm-2 order-3 text-sm-end">
                                            <a href="#cmt-form" className="link style3"><i className="flaticon-right-arrow"></i>Reply </a>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-3 order-2">
                                            <div className="comment-text">
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-item">
                            <div className="comment-author-img">
                                <img src="assets/img/news/author-4.jpg" alt="mage" />
                            </div>
                            <div className="comment-author-wrap">
                                <div className="comment-author-info">
                                    <div className="row align-items-start">
                                        <div className="col-md-9 col-sm-8 col-12 order-md-1 order-sm-1 order-1">
                                            <div className="comment-author-name">
                                                <h5>Shon Polok</h5>
                                                <p className="comment-date"><i className="flaticon-clock"></i>8 Mar, 2021</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-12 order-md-2 order-sm-2 order-3 text-sm-end">
                                            <a href="#cmt-form" className="link style3"><i className="flaticon-right-arrow"></i>Reply </a>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-3 order-2">
                                            <div className="comment-text">
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div id="cmt-form" className="submit-review-form mt-30 bg-ecru">
                        <h4 className="comment-box-title">Write A Comment</h4>
                        <form action="#" className="comment-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" name="name" id="" placeholder="Full Name" required>
                                            <i className="las la-user-alt"></i>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" placeholder="Email Address" required>
                                            <i className="lar la-envelope"></i>

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea name="messages" id="messages" cols="30" rows="10" placeholder="Please Enter Your Comment Here"></textarea>
                                        <i className="las la-pen"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="checkbox style2">
                                        <input type="checkbox" id="test_1">
                                            <label for="test_1">I agree with your <a className="link style1" href="terms-condition.html">terms & condition.</a></label>
                                    </div>
                                </div>
                                <div className="col-md-5 text-md-end smt-20">
                                    <button className="btn style1 slide_down">Post A Comment</button>
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
};

export default PoemDetail;