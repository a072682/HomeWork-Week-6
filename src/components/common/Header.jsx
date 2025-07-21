
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './_Header.scss';
import { Form, Link, useNavigate } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import OffcanvasPage from './OffcanvasPage';
import { loadUserData, logout } from '../../slice/authSlice';
import { searchInput } from '../../slice/dataSlice';


function Header() {

    const navigate = useNavigate();//頁面跳轉宣告

    const dispatch = useDispatch();//使用中央函式
    
    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    const userData = useSelector((state) => state.auth.currentUserData);

    const allItemData = useSelector((state) => state.data.themeData);

    useEffect(()=>{
        console.log("目前登入狀態:",isLoggedIn);
        console.log("目前登入者狀態:",userData);
        // console.log("全部資料:",allItemData);
    },[isLoggedIn,userData,allItemData]);

    const handleLogout = (e) => {
        e.preventDefault();
        // 成功登出
        dispatch(logout());
        if(!isLoggedIn){
            console.log('登出成功');
            navigate("/");
        }
    };

    useEffect(() => {
        const account = localStorage.getItem('fakeAccount');
        const isLoggedIn = localStorage.getItem('fakeLogin') === 'true';

        if (isLoggedIn && account) {
        dispatch(loadUserData({ account })); // 還原 currentUserData
        }
        
    }, []);

    const handleSearch = (input) => {
        const keyword = searchIn.trim();//移除搜尋欄資料的空白
        dispatch(searchInput(keyword));
        if (!keyword) {
            console.log("請輸入文字");
            return;
        };
        const result = [];
        input.forEach(item_first => {
            item_first.children.forEach(item_second => {
                if (item_second.title.toLowerCase().includes(keyword.toLowerCase())){
                    result.push(item_second);
                }
            });
        });
        if (result.length === 0) {
            setSearchIn("");
            console.log("找不到相關課程");
            return;
        }
        if (result.length >= 1) {
            setSearchIn("");
            console.log("header搜尋結果:",result);
            navigate(`/AllTheme`);
        }
        return result;
    };

    

    const[searchIn,setSearchIn]=useState("");

    const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="react-navbar p-0" expanded={expanded}>
      <Container>

        <div className='navbar-box w-100 d-flex align-items-center'>
            {/* 左上角 Logo */}
            <Link to="/" className='navbar-logo-box me-lg-36'>
                <img className='logo-set' src={`${import.meta.env.BASE_URL}images/logo.png`} alt="logo" />
            </Link>
            

            {/* lg 以下的右上角：鈴鐺 icon + 購物車 icon + 漢堡選單按鈕 */}
            <div className="navbar-icon-box d-lg-none d-flex align-items-center ms-auto">
                <button className="custom-toggle-btn" onClick={() => setExpanded(true)} aria-controls="navbarScroll">
                    <span className="material-symbols-outlined toggle-btn">
                        menu
                    </span>
                </button>
            </div>
            {/* lg 以上中間的搜尋列 */}
            <div className='navbar-item-box'>
                <Form className="d-flex align-items-center search-bar-box" 
                    onSubmit={(e) => {
                        e.preventDefault(); // ✅ 阻止預設表單提交
                        handleSearch(allItemData);
                    }}>
                    <input  type="text" placeholder="搜尋文章" className="form-control" aria-label="Search"
                            value={searchIn}
                            onChange={(e) => setSearchIn(e.target.value)}/>
                    <button type="submit" className="search-btn">
                        <i className="material-symbols-outlined search-icon">search</i>
                    </button>
                </Form>
                <div className='link-item-box ms-lg-auto'>
                    <Link to={`/AllTheme`} className='link-item' onClick={() => dispatch(searchInput(""))}>
                        所有文章
                    </Link>
                    <Link to={ isLoggedIn?(`/Subscription/${userData?.account}`):(`/LoginPage`)} className='link-item'>
                        訂閱方案
                    </Link>
                    <Link to="/AboutUsPage" className='link-item'>
                        關於我們
                    </Link>
                    {/* lg 以上登入/註冊按鈕 */}
                    <div className="d-none d-lg-flex align-items-center gap-16">
                        {
                            isLoggedIn ? 
                            (
                                <>
                                    <button className="login-btn" type="button" onClick={(event)=>{handleLogout(event);}}>
                                        <div className='userImg-box'>
                                            <img className="userImg" src={`${import.meta.env.BASE_URL}images/user01.png`} alt="" />
                                        </div>
                                        <div className="userText">Andy</div>
                                        / 登出
                                    </button>
                                </>
                            )
                            :
                            (
                                <>  
                                    <button className="login-btn" onClick={()=>{navigate("/LoginPage")}}>登入 / 註冊</button>
                                </>
                            )
                        }
                    </div>
                </div>
                
            </div>
        </div>
        <OffcanvasPage  expanded={expanded} onClose={() => setExpanded(false)} isLoggedIn={isLoggedIn} setExpanded={setExpanded} handleSearch={handleSearch} 
                        allItemData={allItemData} searchIn={searchIn} setSearchIn={setSearchIn} userData={userData} handleLogout={handleLogout}/>
      </Container>
    </Navbar>
  );
}

export default Header;
