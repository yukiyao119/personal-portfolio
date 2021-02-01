import React from 'react';
import config from '../../config';
import './bg.css'

export default function Footer() {
  return (
    <footer className="footer text-center bg-end">
      <div className="container">
        <ul className="list-inline mb-5">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={name} className="list-inline-item">
                <a
                  href={url} target="blank"
                  className="social-link rounded-circle text-white mr-3"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="text-muted small mb-0">
        Coded by Yuki Yao<br/>
        Thanks for Gatsby Starter Stylish
        </p>
      </div>
    </footer>
  );
}
