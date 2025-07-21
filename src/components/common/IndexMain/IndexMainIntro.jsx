import { useNavigate } from 'react-router-dom';
import './_IndexMainIntro.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from '../../../slice/authSlice';


function IndexMainIntro (){
    
    const navigate = useNavigate();//頁面跳轉宣告

    const dispatch = useDispatch();//使用中央函式

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    const userData = useSelector((state) => state.auth.currentUserData);

    useEffect(()=>{
        // console.log("目前登入狀態:",isLoggedIn)
        // console.log("使用者資料:",userData)
    },[isLoggedIn,userData]);

    

    return(
        <>
            <div className='IndexMainIntro'>
                <div className="banner-sm"></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='IndexMainIntro-content'>
                                <div className="banner"></div>
                                <div className='IndexMainIntro-text-box'>
                                    <h5>獻給新世代的生活風格誌</h5>
                                    <h1>一起探索生活的無限可能</h1>
                                    {
                                        isLoggedIn?
                                        (
                                            <button className='IndexMainIntro-btn' onClick={()=>{navigate(`/Subscription/${userData.account}`)}}>
                                                馬上訂閱
                                                <span className="material-symbols-outlined btn-icon">
                                                    arrow_right_alt
                                                </span>
                                            </button>
                                        )
                                        :
                                        (
                                            <button className='IndexMainIntro-btn' onClick={()=>{navigate("/LoginPage")}}>
                                                馬上訂閱
                                                <span className="material-symbols-outlined btn-icon">
                                                    arrow_right_alt
                                                </span>
                                            </button>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default IndexMainIntro; 