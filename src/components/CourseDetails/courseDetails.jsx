import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CourseDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import useCourses from '../Courses/useCourses';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { courses, isLoading, error } = useCourses();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading course details: {error.message}</div>;
  }

  const course = courses.find(course => course.id === parseInt(courseId));

  if (!course) {
    navigate('/courses');
    return null;
  }

  // const {updateCourse} = useupdateCourse();

  return (
    <div style={{ backgroundColor: 'rgb(18 18 18 / 78%)' }}>
      <div className="container text-white">
        <div className="mb-4 text-light">
          <h5>Courses</h5>
          <div className="line"></div>
          <p>{new Date(course.publishedOn).toLocaleDateString()}</p>
        </div>
        <div className="row mb-4">
          <div className="col-md-8">
            <h1>{course.title}</h1>
            <p className="text-warning">Instructor: {course.instructor}</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-8">
            <div className="bg-dark rounded-3 p-5 text-center">
              <img src={course.image} alt={course.title} className="img-fluid rounded-3" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col top">
                <i className="fa-regular fa-newspaper"></i>
                <div>
                  <h5>Lessons</h5>
                  <p className='parg'>{course.lessons}</p>
                </div>
              </div>
              <div className="col top">
                <i className="fa-solid fa-chart-simple"></i>
                <div>
                  <h5>Level</h5>
                  <p className='parg'>{course.level === 1 ? 'Beginner' : 'Advanced'}</p>
                </div>
              </div>
            </div>
            <div className="row mb-3 details">
              <div className="def">
                <i className="fa-regular fa-user"></i>
                <h5>Students :</h5>
                <span>20</span>
              </div>
              <div className="def">
                <i className="fa-solid fa-language"></i>
                <h5>Language :</h5>
                <span>{course.language}</span>
              </div>
              <div className="def">
                <i className="fa-regular fa-clock"></i>
                <h5>Duration :</h5>
                <span>{course.duration}</span>
              </div>
              <div className="def">
                <i className="fa-solid fa-calendar-days text-light"></i>
                <h5>Start Date :</h5>
                <span>{new Date(course.startDate).toLocaleDateString()}</span>
              </div>
              <div className="def">
                <i className="fa-solid fa-certificate"></i>
                <h5>Certificate :</h5>
                <span>{course.certificate ? 'Upon completion' : 'Not available'}</span>
              </div>
            </div>
            <button className="btn btn-warning">ENROLL</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <h3>Introduction</h3>
            <p>{course.introduction}</p>

            <h3>Lessons</h3>
            <div className="accordion" id="lessonsAccordion">
              <div className="accordion-item bg-dark text-white">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#lessonOne" aria-expanded="true">
                    Introduction To {course.title}
                  </button>
                </h2>
                <div id="lessonOne" className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    {course.introduction}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-dark rounded-3 p-4 mb-3">
              <h4>Assessment</h4>
              <p>{course.assessment}</p>
            </div>
            <div className="bg-dark rounded-3 p-4 mb-3">
              <h4>Requirements</h4>
              <p>{course.requirements}</p>
            </div>
            <div className="bg-dark rounded-3 p-4">
              <h4>Materials</h4>
              <p>{course.materials}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
