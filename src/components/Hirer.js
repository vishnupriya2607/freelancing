import React from 'react';


function Hirer() {
  return (
    <div className="index-page">
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">Team Tech</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="course.html">Courses</a></li>
              <li className="dropdown">
                <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="header-social-links">
            <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a href="#post-job" className="list-group-item list-group-item-action active">Post a Job</a>
              <a href="#manage-jobs" className="list-group-item list-group-item-action">Manage Jobs</a>
              <a href="#search-freelancers" className="list-group-item list-group-item-action">Search Freelancers</a>
              <a href="#hirer-dashboard" className="list-group-item list-group-item-action">Dashboard</a>
            </div>
          </div>
          <div className="col-md-9">
            <div id="post-job" className="mb-5">
              <h2>Post a Job</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="job-title" className="form-label">Job Title</label>
                  <input type="text" className="form-control" id="job-title" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="job-description" className="form-label">Job Description</label>
                  <textarea className="form-control" id="job-description" rows="5" required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="job-category" className="form-label">Category</label>
                  <select className="form-select" id="job-category" required>
                    <option value="">Select a category</option>
                    <option value="web-development">Web Development</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="content-writing">Content Writing</option>
                    <option value="data-analysis">Data Analysis</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="job-budget" className="form-label">Budget (USD)</label>
                  <input type="number" className="form-control" id="job-budget" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="job-deadline" className="form-label">Deadline</label>
                  <input type="date" className="form-control" id="job-deadline" required />
                </div>
                <button type="submit" className="btn btn-primary">Post Job</button>
              </form>
            </div>

            <div id="manage-jobs" className="mb-5">
              <h2>Manage Jobs</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Job Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Web Developer Needed</td>
                    <td>Web Development</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Logo Design</td>
                    <td>Graphic Design</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Article Writing</td>
                    <td>Content Writing</td>
                    <td><span className="badge bg-danger">Closed</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div id="search-freelancers" className="mb-5">
              <h2>Search Freelancers</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="search-keyword" className="form-label">Keyword</label>
                  <input type="text" className="form-control" id="search-keyword" placeholder="e.g. Web Developer" />
                </div>
                <div className="mb-3">
                  <label htmlFor="search-category" className="form-label">Category</label>
                  <select className="form-select" id="search-category">
                    <option value="">All categories</option>
                    <option value="web-development">Web Development</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="content-writing">Content Writing</option>
                    <option value="data-analysis">Data Analysis</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
              </form>

              <div className="mt-4">
                <h3>Freelancers Found</h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    <h5>John Doe - Web Developer</h5>
                    <p>Experience: 5 years</p>
                    <button className="btn btn-primary btn-sm">View Profile</button>
                    <button className="btn btn-success btn-sm">Hire</button>
                  </li>
                  <li className="list-group-item">
                    <h5>Jane Smith - Graphic Designer</h5>
                    <p>Experience: 3 years</p>
                    <button className="btn btn-primary btn-sm">View Profile</button>
                    <button className="btn btn-success btn-sm">Hire</button>
                  </li>
                </ul>
              </div>
            </div>

            <div id="hirer-dashboard">
              <h2>Dashboard</h2>
              <p>Welcome to your dashboard. From here, you can manage your posted jobs, search for freelancers, and track your hiring progress.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hirer;
