import React, { useState, useEffect } from 'react';
import './Table.css';
import useCourses from '../Courses/useCourses';

const Table = () => {
    const { courses, isLoading, error } = useCourses();
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(5);

    const [displayedCourses, setDisplayedCourses] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (courses) {
            setTotalPages(Math.ceil(courses.length / coursesPerPage));
            const indexOfLastCourse = currentPage * coursesPerPage;
            const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
            setDisplayedCourses(courses.slice(indexOfFirstCourse, indexOfLastCourse));
        }
    }, [courses, currentPage, coursesPerPage]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading courses: {error.message}</div>;
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <div className="other-courses-container">
                <div className="header-container">
                    <h5>Other Courses</h5>
                    <div className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for courses"
                        />
                        <i className="fa-solid fa-search search-icon"></i>
                    </div>
                </div>
                <div className="course-table">
                    <div className="table-header">
                        <span className="header-title">Title</span>
                        <span className="header-date">Start Date</span>
                        <span className="header-level">Level</span>
                    </div>
                    {displayedCourses.map((course, index) => (
                        <div className="table-row" key={course.id || index}>
                            <div className="course-info">
                                <img
                                    src={course.image || "https://via.placeholder.com/100"}
                                    alt="Course Thumbnail"
                                    className="course-img"
                                />
                                <div>
                                    <h5 className="course-title">{course.title}</h5>
                                    <span className="course-lessons">{course.lessons} lessons</span><br />
                                    <span className="course-instructor"><span className='inst'>Instructor:</span> {course.instructor}</span>
                                </div>
                            </div>
                            <span className="course-date"><span className='date'>Date: </span>{new Date(course.publishedOn).toLocaleDateString()}</span>
                            <span className="course-level"><span className='lvl'>LEV.</span>{course.level || 1}</span>
                            <div className="course-actions">
                                <button className="btn button-warning">ENROLL</button>
                                <button className="btn button-link">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                        <span 
                            key={number} 
                            className={`page-number ${currentPage === number ? 'active' : ''}`}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </span>
                    ))}
                    <button 
                        className="pagination-arrow" 
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        <i className="fa fa-chevron-left"></i>
                    </button>
                    <button 
                        className="pagination-arrow" 
                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
