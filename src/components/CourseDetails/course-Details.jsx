import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CourseDetails.css';

const CourseDetails = () => {
  return (
    <div style={{ backgroundColor: 'rgb(18 18 18 / 78%)' }}>
      <div className="container text-white">
        <div className="mb-4 text-light">
          <h5>Courses</h5>
          <div className="line"></div>
          <p>6th June 2023</p>
        </div>
        <div className="row mb-4">
          <div className="col-md-8">
            <h1>Python programming language</h1>
            <p className="text-warning">Instructor: Mohammed Nour</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-8">
            <div className="bg-dark rounded-3 p-5 text-center">
              <img src="path/to/your/image.jpg" alt="Course" className="img-fluid rounded-3" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col top">
                <i className="fa-regular fa-newspaper"></i>
                <div>
                  <h5>Lessons</h5>
                  <p className='parg'>12</p>
                </div>
              </div>
              <div className="col top">
                <i className="fa-solid fa-chart-simple"></i>
                <div>
                  <h5>Level</h5>
                  <p className='parg'>Beginner</p>
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
                <span>Arabic</span>
              </div>

              <div className="def">
                <i className="fa-regular fa-clock"></i>
                <h5>Duration :</h5>
                <span>13 hours</span>
              </div>
              <div className="def">
                <i className="fa-solid fa-calendar-days text-light"></i>
                <h5>Start Date :</h5>
                <span>Wednesday, June 7th</span>
              </div>

              <div className="def">
                <i className="fa-solid fa-certificate"></i>
                <h5>Certificate :</h5>
                <span>Upon completion</span>
              </div>
            </div>
            <button className="btn btn-warning">ENROLL</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <h3>Introduction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <h3>Lessons</h3>
            <div className="accordion" id="lessonsAccordion">
              <div className="accordion-item bg-dark text-white">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#lessonOne" aria-expanded="true">
                    Introduction To Python
                  </button>
                </h2>
                <div id="lessonOne" className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark text-white">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lessonTwo">
                    Functions
                  </button>
                </h2>
                <div id="lessonTwo" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Lesson content goes here.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark text-white">
                <h2 className="accordion-header">
                  <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lessonThree">
                    Arrays
                  </button>
                </h2>
                <div id="lessonThree" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Lesson content goes here.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-dark rounded-3 p-4 mb-3">
              <h4>Assessment</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-dark rounded-3 p-4 mb-3">
              <h4>Requirements</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-dark rounded-3 p-4">
              <h4>Materials</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
