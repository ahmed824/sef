import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Courses.css'; // Import your CSS file
import { Link } from "react-router-dom";
import Table from "../Table/table";

const Courses = () => {
    const courses = [
        { title: 'Python for Beginners', instructor: 'Mohammed Nour', date: 'Wednesday, June 7th', lessons: '12 lessons' },
        { title: 'JavaScript Essentials', instructor: 'Jane Doe', date: 'Thursday, July 15th', lessons: '8 lessons' },
        { title: 'React for Beginners', instructor: 'John Smith', date: 'Monday, August 23rd', lessons: '10 lessons' },
        { title: 'Advanced CSS', instructor: 'Emily Davis', date: 'Friday, September 10th', lessons: '15 lessons' },
        { title: 'Node.js Fundamentals', instructor: 'Michael Brown', date: 'Saturday, October 5th', lessons: '11 lessons' },
        { title: 'Database Design', instructor: 'Sarah Wilson', date: 'Tuesday, November 12th', lessons: '14 lessons' },
    ];

    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,

        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className="container mt-2">
                <div className="mb-4 text-light">
                    <h5>Courses</h5>
                    <div className="line"></div>
                    <p>6th June 2023</p>
                </div>

                <div className="mb-4 text-light head">
                    <h3>New Courses</h3>
                    <div className="arrows" style={{ textAlign: "center", marginTop: '20px' }}>
                        <div className="button" onClick={previous}>
                            <i className="fa-solid fa-circle-chevron-left"></i>
                        </div>
                        <div className="button" onClick={next}>
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </div>
                    </div>
                </div>

                <div className="slider-container my-3">
                    <Slider
                        ref={(slider) => { sliderRef = slider; }}
                        {...settings}
                    >
                        {courses.map((course, index) => (
                            <div className="course-slide" key={index}>
                                <div className="card text-light">
                                    <div className="card-img-wrap position-relative">
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Course"
                                            className="card-img-top"
                                        />
                                        <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
                                            <h5 className="overlay-title">{course.title}</h5>
                                            <span className="text-warning overlay-instructor">Instructor: {course.instructor}</span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            <span><i className="fa-solid fa-calendar-days"></i> {course.date}</span><br />
                                            <span><i className="fa-regular fa-newspaper"></i> {course.lessons}</span>
                                        </p>
                                        <button className="btn button-warning mb-2">ENROLL</button>
                                        <Link to="/courseDetails">
                                            <button className="btn button-link w-100 p-0 text-light">View Details <i className="fa-solid fa-chevron-right "></i></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
                <Table />
            </div>
        </div>
    );
};

export default Courses;
