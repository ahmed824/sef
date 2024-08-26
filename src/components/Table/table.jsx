import React from 'react';
import './Table.css';

const Table = () => {
    const courses = [
        { title: 'HTML Basics', lessons: '12 lessons', instructor: 'Mohammed Nour', date: 'Thursday, June 8th', level: 1 },
        { title: 'Graphic Design', lessons: '17 lessons', instructor: 'Mohammed Nour', date: 'Thursday, June 8th', level: 1 },
        { title: 'UI UX Design', lessons: '12 lessons', instructor: 'Mohammed Nour', date: 'Thursday, June 8th', level: 1 },
        { title: 'UI UX Design', lessons: '12 lessons', instructor: 'Mohammed Nour', date: 'Thursday, June 8th', level: 1 },
        { title: 'UI UX Design', lessons: '12 lessons', instructor: 'Mohammed Nour', date: 'Thursday, June 8th', level: 1 },
        { title: 'UI UX Design', lessons: '12 lessons', instructor: 'Mohammed Nour', date: 'Thursday, June 8th', level: 1 },
    ];

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
                        {/* <span className="header-actions"></span> */}
                    </div>
                    {courses.map((course, index) => (
                        <div className="table-row" key={index}>
                            <div className="course-info">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Course Thumbnail"
                                    className="course-img"
                                />
                                <div>
                                    <h5 className="course-title">{course.title}</h5>
                                    <span className="course-lessons">{course.lessons}</span><br />
                                    <span className="course-instructor"><span className='inst'>Instructor:</span> {course.instructor}</span>
                                </div>
                            </div>
                            <span className="course-date"><span className='date'>Date: </span>{course.date}</span>
                            <span className="course-level"><span className='lvl'>LEV.</span>{course.level}</span>
                            <div className="course-actions">
                                <button className="btn button-warning">ENROLL</button>
                                <button className="btn button-link">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <span className="page-number">1</span>
                    <span className="page-number">2</span>
                    <span className="page-number">3</span>
                    <span className="page-number">...</span>
                    <button className="pagination-arrow">
                        <i className="fa fa-chevron-left"></i>
                    </button>
                    <button className="pagination-arrow">
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
