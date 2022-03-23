import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-experience' data-section='timeline'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>highlights</span>
                <h2 className='colorlib-heading animate-box'>Timeline</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='timeline-centered'>
                <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-1'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Virtual Stock App{"  "}
                          <span>February 2022 - Present</span>
                        </h2>
                        <p>
                          The Virtual Stock App is a personal project that
                          I am currently working on. Using React Native, our idea
                          is to create a stock market application, similar to Robinhood,
                          without the user having to worry about the inherent risks
                          of trading stocks. This will serve as an educational tool
                          for students and others who want to learn more about the stock
                          market. For this project, I am responsible for all aspects of
                          app development, including modifying Figma designs, creating UI
                          elements, implementing business logic, integrating third party APIs,
                          and deploying the application
                        </p>
                      </div>
                    </div>
                  </article>
                <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-2'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Software Developer at NCR{"  "}
                          <span>February 2021 - Present</span>
                        </h2>
                        <p>
                          At NCR, I work mainly as an iOS developer improving and
                          developing key features for a point-of-sale iOS system
                          (NCR Silver) which is used by many small businesses
                          to run their store across the country. Currently, I am
                          spearheading a newly developed, internal Flutter application
                          that encourages NCR employees to check-in to restaurants,
                          refer sales leads, and escalate incidents. Another aspect of
                          my job includes directly assisting customers with any escalations
                          across all Silver products by utilizing Microsoft SQL Server
                          to find discrepancies in the database, running SQL scripts
                          to resolve the issues, and relaying the solution back to
                          the support team and the customers. I have also created many
                          automation tests in Java using the TestNG framework for
                          the iOS POS app, which are built using Apache Maven and are
                          run on an iOS device farm from the Jenkins automation server.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-3'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          React Native/Flutter Developer at FullCircle LLC{"  "}
                          <span>September 2020 - December 2020</span>
                        </h2>
                        <p>
                          I joined FullCircle LLC as a React
                          Native/Flutter Developer in the Application Development team.
                          FullCircle LLC is a startup that is focused on
                          breaking the stigma around mental health. My main
                          responsibility involved architecting, maintaining, and
                          deploying a mobile application that will be used by
                          students wanting to improve their mental health.
                          Additional responsibilities included assisting with
                          integrating third party API's and AI/ML algorithms
                          that are used to determine a user's mental health
                          score and assisting with developing and maintaining
                          cloud functions for authentication, storage, and
                          analytics. As a result of this work, hundreds of university
                          students are able to talk openly about their mental health
                          in a space space. For more information about the startup,
                          click the link{" "}
                          <a
                            href='https://www.teamfullcircle.org'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-4'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          iOS Developer at 808{"  "}
                          <span>June 2020 - December 2020</span>
                        </h2>
                        <p>
                          The 808 Wave (or 808) is a startup focused on creating
                          a networking platform for undiscovered, up and coming
                          music creatives to connect and collaborate. As the
                          first iOS Developer in this company, I was tasked with
                          creating an app programmatically in Swift from scratch
                          using UIKit, Auto-Layout, and MVVM architecture. My
                          responsibilities included developing all aspects of the
                          app including the user profile, the studio map, in-app
                          messaging, and our unique "Create a Project" feature.
                          We utilized TestFlight for the first round of user testing.
                          In terms of leadership, I was responsible for leading
                          meetings for the Swift team and representing the Swift
                          team at full team meetings. For more information about
                          the startup, click the link{" "}
                          <a
                            href='https://www.the808wave.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-5'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          ECE Senior Design Capstone Project{"  "}
                          <span>August 2019 - May 2020</span>
                        </h2>
                        <p>
                          My Capstone project was a payment system that uses
                          facial recognition to authenticate a customer and
                          linear programming to optimize the customer's payment
                          across their various credit cards. I was responsible
                          for developing a point-of-sale iPad app in Swift that
                          served as a payment terminal where the customer would
                          complete a transaction. In addition, I assisted with
                          creating a Flask server on a Raspberry Pi for image
                          capture with blink detection functionality and with
                          developing an API on a Python web application
                          utilizing the Flask framework and deploying it to AWS.{" "}
                          <a
                            href='https://github.com/danielwgreene/HuzzahPay'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            This project
                          </a>{" "}
                          is open source and potentially open to additional
                          improvements.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-6'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Firmware Engineer Intern at Intel{"  "}
                          <span>January 2019 - July 2019</span>
                        </h2>
                        <p>
                          In this role, I was responsible for optimizing
                          security firmware for Intel's client-facing solid
                          state drives in C and C++, which included anything
                          from refactoring existing code in order to utilize
                          less memory to segregating sensitive information. In
                          addition, I was briefly recognized by the Firmware and
                          Software Engineering Head for developing a specific
                          type of hardware reset as defined in the TCG SIIS
                          Specification, which was implemented across most
                          products. As a side project during my internship, I
                          also researched the gaps between the Opal, SIIS, and
                          Core Specifications and the Compliance Test Suite and
                          created a guide describing the process of converting a
                          specification to a test case.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry begin animate-box'
                    data-animate-effect='fadeInBottom'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-none'></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
