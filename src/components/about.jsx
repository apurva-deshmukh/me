import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About Me</span>
                      <h2 className='colorlib-heading'>Who Am I?</h2>
                      <p>
                        Currently, I am a software engineer at NCR Corporation
                        where I develop Point-Of-Sale (POS) systems for iOS for
                        small businesses to run their store. Before that, I was an
                        undergraduate student majoring in Computer Engineering
                        at the Georgia Institute of Technology. I am extremely
                        passionate about mobile application development,
                        particularly iOS development in Swift. Throughout my college
                        years, I was heavily involved in building mobile applications
                        for two different startups founded out of Georgia Tech's
                        CREATE-X program.
                      </p>
                      <p>
                        In my free time, I like to learn about technologies that
                        I have never used before. As of right now, I am pursuing
                        the AWS Certified Solution Architect Associate
                        Certification and am learning about data science and
                        machine learning in Python. When I'm not sitting in
                        front of a computer, I enjoy playing soccer and
                        basketball, video games, cooking, and hiking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>What I do?</span>
                <h2 className='colorlib-heading'>My expertise</h2>
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <i className='icon-phone3' />
                  </span>
                  <div className='desc'>
                    <h3>Mobile Development </h3>
                    <p>
                      I have experience building mobile apps in Swift, SwiftUI,
                      React Native, and Java through personal projects and
                      startup experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-3'>
                  <span className='icon'>
                    <i className='icon-device-tablet' />
                  </span>
                  <div className='desc'>
                    <h3>Embedded Systems</h3>
                    <p>
                      Through my previous internship at Intel, I gained
                      professional experience in firmware development. Side
                      projects include Mbed and Raspberry Pi.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <i className='icon-layers2' />
                  </span>
                  <div className='desc'>
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      Because I have coded many data structures and algorithms
                      from scratch for coursework, I have a deep understanding
                      of their inner workings.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center animate-box'>
                <div className='services color-2'>
                  <span className='icon'>
                    <i className='icon-data' />
                  </span>
                  <div className='desc'>
                    <h3>Cloud Infrastructure</h3>
                    <p>
                      Currently, I am studying to achieve the AWS Certified
                      Solutions Associate Certification. My Capstone project was
                      also hosted on AWS.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-4'>
                  <span className='icon'>
                    <i className='icon-device-desktop' />
                  </span>
                  <div className='desc'>
                    <h3>Web Development</h3>
                    <p>
                      I have coded several personal projects (including this
                      website) in React and using the MongoDB-Express-React-Node
                      stack.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-6'>
                  <span className='icon'>
                    <i className='icon-user' />
                  </span>
                  <div className='desc'>
                    <h3>AI/ML</h3>
                    <p>
                      My Capstone project used facial recognition for
                      authentication and a linear programming model for
                      optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
