import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Journey into the Future`}
      description="Robotics, Technology & AI - Explore the amazing world where machines think, move, and interact">
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="text--center padding-horiz--md">
                <h1 className="hero__title">Welcome to Robotics, Technology & AI - Journey into the Future</h1>
                <p className="hero__subtitle"><strong>Ready to explore the amazing world where machines think, move, and interact?</strong></p>
                <p>This comprehensive guide will take you on an exciting adventure through the cutting-edge fields of robotics, artificial intelligence, and revolutionary technology that's shaping our tomorrow.</p>
              </div>

              <div className="padding-vert--lg">
                <h2><strong>Course Structure Overview</strong></h2>
                <p>Navigate through our carefully crafted modules designed to build your expertise step-by-step:</p>

                <h3><strong>Foundation Modules</strong></h3>
                <ul>
                  <li><strong>Chapter 1</strong>: <strong>Introduction to Physical AI & Humanoid Robotics</strong> - Understanding intelligence in physical form</li>
                  <li><strong>Chapter 2</strong>: <strong>ROS 2 - The Robotic Nervous System</strong> - Mastering the communication backbone of robotics</li>
                  <li><strong>Chapter 3</strong>: <strong>Simulation & Digital Twins</strong> - Creating virtual worlds for real robots</li>
                </ul>

                <h3><strong>Advanced Modules</strong></h3>
                <ul>
                  <li><strong>Chapter 4</strong>: <strong>AI Integration & Perception Systems</strong> - Teaching robots to see, think, and react</li>
                  <li><strong>Chapter 5</strong>: <strong>Capstone Project</strong> - Building your own autonomous humanoid robot</li>
                </ul>

                <p>Each chapter builds upon the previous one, ensuring you develop a solid foundation before tackling advanced concepts.</p>
              </div>

              <div className="padding-vert--lg">
                <h2><strong>Target Audience - Who Is This For?</strong></h2>
                <p>This course is designed for <strong>innovators, dreamers, and creators</strong> like you!</p>

                <h3><strong>Perfect For:</strong></h3>
                <ul>
                  <li><strong>Engineering & Computer Science Students</strong> curious about robotics</li>
                  <li><strong>Software Developers</strong> looking to transition into robotics AI</li>
                  <li><strong>Researchers</strong> exploring embodied intelligence and autonomous systems</li>
                  <li><strong>Tech Enthusiasts</strong> fascinated by AI-powered robotics</li>
                  <li><strong>Professionals</strong> wanting to future-proof their careers</li>
                  <li><strong>Innovators</strong> ready to shape the next generation of human-robot interaction</li>
                </ul>

                <p><strong>No matter your starting level</strong>, we'll guide you from fundamental concepts to advanced implementations.</p>
              </div>

              <div className="padding-vert--lg">
                <h2><strong>Prerequisites - What You'll Need</strong></h2>
                <p>Don't worry - we'll start with the basics! But having these foundations will help you soar higher:</p>

                <h3><strong>Essential Skills:</strong></h3>
                <ul>
                  <li><strong>Programming</strong>: Familiarity with <strong>Python</strong> (preferred) or C++</li>
                  <li><strong>Mathematics</strong>: Basic understanding of <strong>linear algebra</strong> and <strong>calculus</strong></li>
                  <li><strong>Physics</strong>: Concepts of <strong>kinematics</strong> and <strong>dynamics</strong></li>
                  <li><strong>Logic</strong>: Basic <strong>problem-solving</strong> and <strong>algorithmic thinking</strong></li>
                </ul>

                <p><em>Remember: The most important prerequisite is your curiosity and willingness to learn! Everything else can be mastered along the way.</em></p>
              </div>

              <div className="padding-vert--lg text--center">
                <h2><strong>Get Started Today!</strong></h2>
                <p><strong>Your journey into the future starts now!</strong></p>
                <p>The field of robotics and AI is advancing at <strong>breakneck speed</strong>, and <strong>the time to join this revolution is today</strong>.</p>

                <div className="margin-vert--lg">
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/intro">
                    Begin Your Robotics Journey
                  </Link>
                </div>

                <p className="padding-top--md"><strong>Humanoid robots are moving from science fiction to reality</strong>. AI-powered assistants are becoming increasingly sophisticated. <strong>You have the opportunity to be part of this transformation.</strong></p>
                <p><strong>Dive in today and become the innovator who designs the robots of tomorrow!</strong></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}