import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Book">
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <p>Welcome to the Physical AI & Humanoid Robotics book.</p>
              <div className="margin-vert--lg">
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  Read the Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}