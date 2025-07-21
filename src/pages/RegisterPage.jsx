import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './_RegisterPage.scss';
import { useDispatch } from 'react-redux';
import { registerUser } from '../slice/authSlice';



function RegisterPage() {

  const navigate = useNavigate();//頁面跳轉宣告

  const dispatch = useDispatch();//使用中央函式

  const [useraccount, setUseraccount] = useState('');
  const [password, setPassword] = useState('');
  const [useremail, setUseremail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ 假設基本驗證
    if (useraccount && password && useremail) {
      setErrorMsg('');
      // 模擬註冊成功，清空表單
      setUseraccount('');
      setPassword('');
      setUseremail('');
      dispatch((registerUser(
        {
          account:useraccount,
          password,
          email:useremail,
        }
      )))
      // 取得比對後的登入結果
      const found = JSON.parse(localStorage.getItem('currentUserData'));

      if (found && found.account === useraccount) {
          setErrorMsg('');
          console.log('創建帳號成功');
          navigate('/');
      } else {
          setErrorMsg('創建帳號失敗');
      }
    } else {
      setErrorMsg('請填寫所有欄位');
    }
  };

  return (
    <div className="registerPage">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 mx-auto">
            <div className="registerPage-content">
              <h4 className="title">註冊</h4>

              <form className="mt-40 form-box" onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-12 account-box">
                  <label htmlFor="account">會員帳號</label>
                  <input
                    type="text"
                    id="account"
                    name="account"
                    placeholder="請輸入會員帳號"
                    autoComplete="username"
                    required
                    value={useraccount}
                    onChange={(e) => setUseraccount(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-column mt-16 gap-12 position-relative password-box">
                  <label htmlFor="password">密碼</label>
                  <input
                    type='password'
                    id="password"
                    name="password"
                    placeholder="請輸入密碼"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errorMsg && <div className="text-danger">{errorMsg}</div>}
                </div>

                <div className="d-flex flex-column mt-16 gap-12 email-box">
                  <label htmlFor="email">電子信箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="請輸入電子信箱"
                    autoComplete="email"
                    required
                    value={useremail}
                    onChange={(e) => setUseremail(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className={`submit-btn mt-24 ${!password ? 'disabled' : ''}`}
                  disabled={!password}
                >
                  立即註冊
                  <span className="material-symbols-outlined submit-btn-icon">
                    arrow_right_alt
                  </span>
                </button>
              </form>

              <p className='registerPage-tip mt-40'>或以其他方式註冊</p>

              <button type="button" className="Loginitem border-0 w-100">
                    <img
                      className="google-item-img"
                      src={`${import.meta.env.BASE_URL}images/icons-google.png`}
                      alt="Google"
                    />
                    <span className='Loginitem-text'>使用 Google 註冊</span>
              </button>

              <button type="button" className="Loginitem border-0 w-100">
                  <img
                    className="fb-item-img"
                    src={`${import.meta.env.BASE_URL}images/icons-facebook.png`}
                    alt="Facebook"
                  />
                  <span className='Loginitem-text'>使用 Facebook 註冊</span>
              </button>

              <div className="registerPage-tip02 mt-40">
                已經是會員了？ <button className='registerPage-tip-link' onClick={()=>{navigate("/LoginPage")}}>點此登入</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
