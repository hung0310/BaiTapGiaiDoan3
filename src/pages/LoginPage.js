import React, {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha'
import logo from "../assets/images/logo.png";
import logo_sub from "../assets/images/logo_sub_admin.png";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recaptchaToken) {
      console.log('Email: ', email);
      console.log('Password: ', password);
    } else {
      alert('Vui lòng xác minh reCAPTCHA');
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };


  return (
    <div 
      className='container-fluid'>
      <img src={logo} alt="logo" className="img-fluid" />
      <div className='container p-4' style={{
          border: "1px solid #959CA9",
          borderRadius: "5px",
          maxWidth: "1000px",
          margin: "0 auto"
      }}>
        <div className='row'>
          <div className='col-lg-6 col-md-12 px-5'>
            <form onSubmit={handleSubmit}>
              <h1>Đăng nhập</h1>
              <h6
                className='fw-normal'
                style={{
                  color: "#959CA9"
                }}
              >Đăng nhập tài khoản của bạn</h6>

              <div className='mt-5'>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  className="form-control mt-2"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className='d-flex justify-content-center align-items-center mt-4 mx-2'>
                <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleRecaptchaChange}/>    
              </div>

              <button 
                  className='text-white py-2 px-5 fw-bold mt-4'
                  style={{
                      borderRadius: "8px",
                      border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                      background: "var(--Foundation-orange-Normal, #F4841F)",
                      outline: "none",
                      border: "1px solid orange"
                  }}
              >
                  Đăng nhập
              </button>

            </form>
          </div>

          <div className='col-lg-6 d-none d-lg-block'>
            <img src={logo_sub} alt="logo_sub" className="img-fluid m-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;