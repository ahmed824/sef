import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Courses.css';
import { Link } from "react-router-dom";
import Table from "../Table/table";
import useCourses from "./useCourses";
import { useUpdateCourse } from "./useUpdateCourse";

const Courses = ({ role }) => {
    const { courses, isLoading, error } = useCourses();
    const { updateCourse, isUpdating } = useUpdateCourse(); // Use the hook

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
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

    const handleEnroll = (courseId) => {
        updateCourse(courseId, {
            onSuccess: () => {
                setEnrolledCourses((prev) => [...prev, courseId]);
            },
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading courses: {error.message}</div>;
    }

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
                        {courses.map((course) => (
                            <div className="course-slide" key={course.id} role={role} course={course} students={20}>
                                <div className="card text-light">
                                    <div className="card-img-wrap position-relative">
                                        <img
                                            src={course.image}
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
                                            <span><i className="fa-solid fa-calendar-days cale"></i> {new Date(course.publishedOn).toLocaleDateString()}</span><br />
                                            <span><i className="fa-regular fa-newspaper"></i> {course.duration}</span>
                                        </p>
                                        <p className="card-text">
                                            {role === 'admin' && (
                                                <span>Students enrolled: {20}</span>
                                            )}
                                        </p>
                                        <button
                                            className="btn button-warning mb-2"
                                            onClick={() => handleEnroll(course.id)}
                                            disabled={isUpdating || enrolledCourses.includes(course.id)}
                                        >
                                            {enrolledCourses.includes(course.id) ? "Enrolled" : "ENROLL"}
                                        </button>
                                        <Link to={`/courseDetails/${course.id}`}>
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
