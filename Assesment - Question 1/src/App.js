import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './App.css';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditingAboutMe, setIsEditingAboutMe] = useState(false);
  const [aboutMeText, setAboutMeText] = useState('');
  const [draftAboutMeText, setDraftAboutMeText] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Email validation
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all the fields for registration.');
    } else if (!password.match(passwordRegex)) {
      alert(
        'Password must contain at least one capital letter, one special character, one number, and be at least 8 characters long.'
      );
    } else if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
    } else {
      setRegisteredUser({ username, email, password });
      setIsRegistered(true);
      alert('Registration successful. You can now login.');

      // Clear the input fields after successful registration
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  const handleLogin = () => {
    // Dummy login logic with basic validation
    if (!isRegistered) {
      alert('User not registered. Please register first.');
    } else if (username === '' || password === '') {
      alert('Please enter username and password.');
    } else if (username === registeredUser.username && password === registeredUser.password) {
      setIsLoggedIn(true);
      setAboutMeText(draftAboutMeText); // Load the last saved draft on login
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setEmail('');
    setPassword('');
    setIsEditingAboutMe(false);
    setAboutMeText('');
    setDraftAboutMeText('');
    setHobbies('');
    setEducation('');
    setSkills('');
  };

  const handleSaveAboutMeDraft = () => {
    // Save the about me draft
    setDraftAboutMeText(aboutMeText);
    alert('About Me draft saved successfully.');
  };

  const handleSubmitAboutMe = () => {
    // Submit the final about me profile
    setAboutMeText(draftAboutMeText); // Load the draft as the final content
    setDraftAboutMeText(''); // Clear the draft after submitting
    alert('About Me profile submitted successfully.');
  };

  const handleEditProfile = () => {
    setIsEditingAboutMe(true);
  };

  const handleUpdateProfile = () => {
    setIsEditingAboutMe(false);
    // Save the updated profile details to the state
    alert('Profile updated successfully.');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">
          Internship Assessment Question 1
        </div>
      </nav>
      {!isLoggedIn ? (
        <div className="login-container">
          {!isRegistered ? (
            <>
              <h2>Register</h2>
              <div className="registration-form">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="password-field-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </span>
            </div>
                <button onClick={handleRegister}>Register</button>
              </div>
              <p className="login-link-text">
                Already have an account?{' '}
                <span className="login-link" onClick={() => setIsRegistered(true)}>
                  Login
                </span>
              </p>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <div className="login-form">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="password-field-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
                <button onClick={handleLogin}>Login</button>
              </div>
              <p className="login-link-text">
                Don't have an account?{' '}
                <span className="login-link" onClick={() => setIsRegistered(false)}>
                  Register
                </span>
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="profile-container">
          <h2>Welcome, {username}!</h2>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
          <div className="about-me-container">
            {!isEditingAboutMe ? (
              <>
                <div className="about-me-text">
                  <h3>About Me:</h3>
                  <p>{aboutMeText || 'You have not written anything about yourself yet.'}</p>
                  {hobbies && <p>Hobbies: {hobbies}</p>}
                  {education && <p>Education: {education}</p>}
                  {skills && <p>Skills: {skills}</p>}
                </div>
                <button className="edit-profile-btn" onClick={handleEditProfile}>
                  Edit Profile
                </button>
              </>
            ) : (
              <>
                <textarea
                  value={draftAboutMeText}
                  onChange={(e) => setDraftAboutMeText(e.target.value)}
                  placeholder="Write about yourself..."
                />
                <button className="save-draft-btn" onClick={handleSaveAboutMeDraft}>
                  Save Draft
                </button>
                <button className="submit-profile-btn" onClick={handleSubmitAboutMe}>
                  Submit About Me
                </button>
              </>
            )}
          </div>
          {isEditingAboutMe && (
            <div className="edit-profile-container">
              <h3>Edit Profile</h3>
              <div className="edit-input-container">
                <label>Hobbies:</label>
                <input
                  type="text"
                  placeholder="Enter your hobbies"
                  value={hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                />
              </div>
              <div className="edit-input-container">
                <label>Education:</label>
                <input
                  type="text"
                  placeholder="Enter your education"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
              <div className="edit-input-container">
                <label>Skills:</label>
                <input
                  type="text"
                  placeholder="Enter your skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              <button className="save-profile-btn" onClick={handleUpdateProfile}>
                Save Changes
              </button>
            </div>
          )}
        </div> 
      )}
        <footer className="footer">
        &copy; {new Date().getFullYear()} KISHWANTH A/L HARI KRISHNAN
      </footer>
    </div>
  );
};

export default App;














