import React from 'react';

function Grading() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Freelancer Profile</h2>

      {/* Public Freelancer Profile for Hirers */}
      <div className="card mb-5">
        <div className="card-body">
          <h4 className="card-title">Public Profile</h4>
          <p className="card-text">
            This is your public profile visible to potential hirers. Below are your skill ratings and growth indicators that hirers can view to assess your qualifications.
          </p>

          {/* Skill 1 */}
          <div className="mb-4">
            <h5 className="d-flex justify-content-between">
              <span>Web Development</span>
              <span className="badge bg-success">Excellent!</span>
            </h5>
            <div className="progress mb-2">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                90%
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-success mb-0">Keep up the outstanding work!</p>
              <p className="text-muted mb-0">Growth Rate: <span className="text-success">+20%</span></p>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="mb-4">
            <h5 className="d-flex justify-content-between">
              <span>Graphic Design</span>
              <span className="badge bg-warning">Good Job!</span>
            </h5>
            <div className="progress mb-2">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                75%
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-warning mb-0">You're doing well, keep improving!</p>
              <p className="text-muted mb-0">Growth Rate: <span className="text-warning">+12%</span></p>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="mb-4">
            <h5 className="d-flex justify-content-between">
              <span>Content Writing</span>
              <span className="badge bg-info">Almost There!</span>
            </h5>
            <div className="progress mb-2">
              <div className="progress-bar bg-info" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                60%
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-info mb-0">Great progress, keep going!</p>
              <p className="text-muted mb-0">Growth Rate: <span className="text-info">+10%</span></p>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="mb-4">
            <h5 className="d-flex justify-content-between">
              <span>Marketing</span>
              <span className="badge bg-danger">Needs Improvement</span>
            </h5>
            <div className="progress mb-2">
              <div className="progress-bar bg-danger" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                45%
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-danger mb-0">Focus on enhancing your skills.</p>
              <p className="text-muted mb-0">Growth Rate: <span className="text-danger">+5%</span></p>
            </div>
          </div>

          {/* Experience Level */}
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">Experience Level</h4>
              <p className="card-text">
                Based on AI analysis, your overall experience level is <strong>Intermediate</strong>. This level is visible to hirers, helping them to evaluate your suitability for their projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Freelancer Achievements and Resume Upload */}
      <div className="card mb-5">
        <div className="card-body">
          <h4 className="card-title">Add Achievements & Upload Resume</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="achievement" className="form-label">Your Achievements</label>
              <textarea className="form-control" id="achievement" rows="3" placeholder="Describe your key achievements..."></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="resumeUpload" className="form-label">Upload Your Resume</label>
              <input type="file" className="form-control" id="resumeUpload" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>

      {/* Public Voting and Comments Section */}
      <div className="card mb-5">
        <div className="card-body">
          <h4 className="card-title">Public Voting and Comments</h4>
          <p className="card-text">Community feedback on your work. Public votes, ratings, and comments help build your reputation.</p>

          {/* Voting and Rating */}
          <div className="mb-4">
            <label className="form-label">Rate this Freelancer:</label>
            <select className="form-select mb-3" id="ratingSelect">
              <option selected>Select rating...</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
            <button type="button" className="btn btn-success">Submit Rating</button>
          </div>

          {/* Comments */}
          <div className="mb-4">
            <label htmlFor="comment" className="form-label">Leave a Comment:</label>
            <textarea className="form-control" id="comment" rows="3" placeholder="Share your thoughts..."></textarea>
            <button type="button" className="btn btn-primary mt-2">Submit Comment</button>
          </div>

          {/* Display Comments */}
          <div className="mb-4">
            <h5 className="card-title">Comments</h5>
            <div className="card mb-2">
              <div className="card-body">
                <p className="card-text"><strong>John Doe:</strong> Excellent work, very professional!</p>
                <p className="text-muted">Rating: 5/5</p>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-body">
                <p className="card-text"><strong>Jane Smith:</strong> Great job, but there's room for improvement.</p>
                <p className="text-muted">Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grading;
