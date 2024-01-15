<script setup lang="ts">
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar.vue';
import DashboardLayout from '../../layout/DashboardLayout.vue';
</script>

<template>
    <DashboardLayout>
        <div class="dashboard-area pt-120 mb-120">
            <div class="container">
                <div class="row g-lg-4 gy-5 mb-90">
                    <div class="col-lg-3">

                        <DashboardSidebar />

                    </div>
                    <div class="col-lg-9">
                        <div class="dashboard-inner">
                            <div class="author-area">
                                <div class="author-img">
                                    <img src="/assets/images/bg/author1.png" alt="">
                                </div>
                                <div class="author-content">
                                    <span>Hello, I’m</span>
                                    <h4>JACOLINE Frankly</h4>
                                </div>
                            </div>
                            <div class="counter-area">
                                <div class="row g-lg-4 g-md-5 gy-5 justify-content-center">
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="counter-single">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/tt-applied.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Total Applied</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        250
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="counter-single two">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/save-job.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Saved Jobs</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        150
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="counter-single three">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/massage.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Message</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        120
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="counter-single four">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/cv-review.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Review CV</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        500
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-wrapper">
                                <h5 class="title">Current Applied Jobs:</h5>
                                <div class="scroll-table">
                                    <table class="eg-table table category-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Job Tittle</th>
                                                <th>Apply Date</th>
                                                <th>Company</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Job Title">
                                                    <div class="company-info">
                                                        <div class="logo">
                                                            <img src="/assets/images/bg/company-logo/company-06.png" alt="">
                                                        </div>
                                                        <div class="company-details">
                                                            <div class="top">
                                                                <h6><router-link to="job-details.html">Senior UI/UX
                                                                        Designer</router-link>
                                                                </h6>
                                                                <span><img src="/assets/images/icon/calender2.svg" alt=""> 1
                                                                    days ago</span>
                                                            </div>
                                                            <ul>
                                                                <li><img src="/assets/images/icon/location.svg"
                                                                        alt="">New-York, USA</li>
                                                                <li>
                                                                    <img src="/assets/images/icon/arrow2.svg" alt="">
                                                                    <p><span class="title">Salary:</span> $60-$90 / <span
                                                                            class="time">Per Hour</span></p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Apply Job">03/07/2022</td>
                                                <td data-label="Company"><router-link class="view-btn"
                                                        to="company-details.html">Tech.Bath Com... </router-link></td>
                                                <td data-label="Status"><button class="eg-btn purple-btn">Viewed</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Job Title">
                                                    <div class="company-info">
                                                        <div class="logo">
                                                            <img src="/assets/images/bg/company-logo/company-02.png" alt="">
                                                        </div>
                                                        <div class="company-details">
                                                            <div class="top">
                                                                <h6><router-link to="job-details.html">React JS
                                                                        Developer</router-link></h6>
                                                                <span><img src="/assets/images/icon/calender2.svg" alt=""> 1
                                                                    days ago</span>
                                                            </div>
                                                            <ul>
                                                                <li><img src="/assets/images/icon/location.svg"
                                                                        alt="">Dhaka, Bangladesh</li>
                                                                <li>
                                                                    <img src="/assets/images/icon/arrow2.svg" alt="">
                                                                    <p><span class="title">Salary:</span> $80-$100 / <span
                                                                            class="time">Per Hour</span></p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Apply Job">07/07/2022</td>
                                                <td data-label="Company"><router-link class="view-btn"
                                                        to="company-details.html">Gangster Group</router-link></td>
                                                <td data-label="Status"><button class="eg-btn yellow-btn">Interview</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Job Title">
                                                    <div class="company-info">
                                                        <div class="logo">
                                                            <img src="/assets/images/bg/company-logo/company-03.png" alt="">
                                                        </div>
                                                        <div class="company-details">
                                                            <div class="top">
                                                                <h6><router-link to="job-details.html">WordPress
                                                                        Developer</router-link></h6>
                                                                <span><img src="/assets/images/icon/calender2.svg" alt=""> 2
                                                                    days ago</span>
                                                            </div>
                                                            <ul>
                                                                <li><img src="/assets/images/icon/location.svg" alt="">West
                                                                    London, UK</li>
                                                                <li>
                                                                    <img src="/assets/images/icon/arrow2.svg" alt="">
                                                                    <p><span class="title">Salary:</span> $30K-$40K / <span
                                                                            class="time">Monthly</span></p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Apply Job">10/07/2022</td>
                                                <td data-label="Company"><router-link class="view-btn"
                                                        to="company-details.html">Zoomly.Co Ltd</router-link></td>
                                                <td data-label="Status"><button class="eg-btn orenge-btn">Canceled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Job Title">
                                                    <div class="company-info">
                                                        <div class="logo">
                                                            <img src="/assets/images/bg/company-logo/company-04.png" alt="">
                                                        </div>
                                                        <div class="company-details">
                                                            <div class="top">
                                                                <h6><router-link to="job-details.html">Mern-Stack
                                                                        Developer</router-link></h6>
                                                                <span><img src="/assets/images/icon/calender2.svg" alt=""> 1
                                                                    week ago</span>
                                                            </div>
                                                            <ul>
                                                                <li><img src="/assets/images/icon/location.svg"
                                                                        alt="">New-York, USA</li>
                                                                <li>
                                                                    <img src="/assets/images/icon/arrow2.svg" alt="">
                                                                    <p><span class="title">Salary:</span> $20-$50 / <span
                                                                            class="time">Per Hour</span></p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Apply Job">13/07/2022</td>
                                                <td data-label="Company"><router-link class="view-btn"
                                                        to="company-details.html">Marko-land Ltd</router-link></td>
                                                <td data-label="Status"><button class="eg-btn purple-btn">Viewed</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Job Title">
                                                    <div class="company-info">
                                                        <div class="logo">
                                                            <img src="/assets/images/bg/company-logo/company-05.png" alt="">
                                                        </div>
                                                        <div class="company-details">
                                                            <div class="top">
                                                                <h6><router-link to="job-details.html">PHP
                                                                        Developer</router-link></h6>
                                                                <span><img src="/assets/images/icon/calender2.svg" alt=""> 2
                                                                    week ago</span>
                                                            </div>
                                                            <ul>
                                                                <li><img src="/assets/images/icon/location.svg"
                                                                        alt="">New-York, USA</li>
                                                                <li>
                                                                    <img src="/assets/images/icon/arrow2.svg" alt="">
                                                                    <p><span class="title">Salary:</span> $40K-$60K / <span
                                                                            class="time">Per Month</span></p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Apply Job">18/08/2022</td>
                                                <td data-label="Company"><router-link class="view-btn"
                                                        to="company-details.html">Bistro.Tech Group</router-link></td>
                                                <td data-label="Status"><button class="eg-btn green-btn">Success</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="featured-jobs-area">
                            <div class="section-title">
                                <h4>Featured Jobs:</h4>
                            </div>
                        </div>
                    </div>
                    <div class="swiper feature-slider2">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="feature-card2">
                                    <div class="company-area">
                                        <span></span>
                                        <div class="logo">
                                            <img src="/assets/images/bg/company-logo/company-02.png" alt="">

                                        </div>
                                        <div class="company-details">
                                            <div class="name-location">
                                                <h5><router-link to="job-details.html">UI/UX Engineer</router-link>
                                                    <span>Full Time,
                                                        Remote<span></span></span>
                                                </h5>
                                                <ul>
                                                    <li><router-link to="company-details.html">Norland Company</router-link>
                                                    </li>
                                                    <li class="verified"><img src="/assets/images/icon/verified.svg" alt="">
                                                        Verified Company</li>
                                                </ul>
                                            </div>
                                            <div class="bookmark">
                                                <i class="bi bi-bookmark-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-discription">
                                        <ul class="one">
                                            <li>
                                                <p><span class="title">Location:</span> Chicago, Australia</p>
                                            </li>
                                            <li>
                                                <p><span class="title">Salary:</span> $90-$140 / <span class="time">Per
                                                        Hour</span></p>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <p><span class="title">Experience:</span> 2-3 Years</p>
                                            </li>
                                            <li>
                                                <p><span class="title">Deadline:</span><span class="time"> 3 February,
                                                        2023</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="job-type-apply">
                                        <div class="apply-btn">
                                            <router-link to="job-details.html"><span><img
                                                        src="/assets/images/icon/apply-ellipse.svg" alt=""></span>Apply
                                                Now</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="feature-card2">
                                    <div class="company-area">
                                        <span></span>
                                        <div class="logo">
                                            <img src="/assets/images/bg/company-logo/company-03.png" alt="">

                                        </div>
                                        <div class="company-details">
                                            <div class="name-location">
                                                <h5><router-link to="job-details.html">React JS Developer</router-link>
                                                    <span>Full Time,
                                                        Remote<span></span></span>
                                                </h5>
                                                <ul>
                                                    <li><router-link to="company-details.html">UX.UI Company</router-link>
                                                    </li>
                                                    <li class="verified"><img src="/assets/images/icon/verified.svg" alt="">
                                                        Verified Company</li>
                                                </ul>
                                            </div>
                                            <div class="bookmark">
                                                <i class="bi bi-bookmark-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-discription">
                                        <ul class="one">
                                            <li>
                                                <p><span class="title">Location:</span> Dhaka, Bangladesh</p>
                                            </li>
                                            <li>
                                                <p><span class="title">Salary:</span> $80K-$110K / <span class="time">Per
                                                        Month</span></p>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <p><span class="title">Experience:</span> 2-3 Years</p>
                                            </li>
                                            <li>
                                                <p><span class="title">Deadline:</span><span class="time"> 3 February,
                                                        2023</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="job-type-apply">
                                        <div class="apply-btn">
                                            <router-link to="job-details.html"><span><img
                                                        src="/assets/images/icon/apply-ellipse.svg" alt=""></span>Apply
                                                Now</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="feature-card2">
                                    <div class="company-area">
                                        <span></span>
                                        <div class="logo">
                                            <img src="/assets/images/bg/company-logo/company-04.png" alt="">

                                        </div>
                                        <div class="company-details">
                                            <div class="name-location">
                                                <h5><router-link to="job-details.html">Receptionist</router-link> <span>Full
                                                        Time, Part
                                                        Time<span></span></span></h5>
                                                <ul>
                                                    <li><router-link to="company-details.html">Germaine Group
                                                            Ltd</router-link></li>
                                                    <li class="verified"><img src="/assets/images/icon/verified.svg" alt="">
                                                        Verified Company</li>
                                                </ul>
                                            </div>
                                            <div class="bookmark">
                                                <i class="bi bi-bookmark-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-discription">
                                        <ul class="one">
                                            <li>
                                                <p><span class="title">Location:</span> West London, Uk</p>
                                            </li>
                                            <li>
                                                <p><span class="title">Salary:</span> $50K-$60K / <span class="time">Per
                                                        Hour</span></p>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <p><span class="title">Experience:</span> 2-2.5 Years</p>
                                            </li>
                                            <li>
                                                <p><span class="title">Deadline:</span><span class="time"> 4 February,
                                                        2023</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="job-type-apply">
                                        <div class="apply-btn">
                                            <router-link to="job-details.html"><span><img
                                                        src="/assets/images/icon/apply-ellipse.svg" alt=""></span>Apply
                                                Now</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>
