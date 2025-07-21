
import { Link, useNavigate } from 'react-router-dom';
import './_Subscription03.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



function Subscription03 (){

    const navigate = useNavigate();//頁面跳轉宣告

    //呼叫使用者資料
    const usersData = useSelector((state) => state.auth.currentUserData);
    //更新使用者資料
    useEffect(()=>{
        // console.log("使用者資料:",usersData);
    },[usersData]);

    // 呼叫用戶訂單資料
    const subscriptionUserData = useSelector((state) => state.auth.currentUserData?.subscriptionType[0] || []);

    // 更新用戶訂單資料
    useEffect(() => {
        // console.log("訂閱資料:",subscriptionUserData);
    }, [subscriptionUserData]);

    return(
        <>
            <div className="subscription03">
                <div class="container">
                    <div class="row">
                        <div class="col12 col-lg-6 mx-auto">
                            <div className="subscription03-content">
                                <div className="subscription03-title">
                                    <img className='title-img' src={`${import.meta.env.BASE_URL}images/icon01.png`} alt="" />
                                    <h1 className="title">付款成功</h1>
                                </div>
                                <div className='subscription03-content-box'>
                                    <div className='title-box'>
                                        <h4 className='title'>訂購資訊</h4>
                                    </div>
                                    <div className='detail-box'>
                                        <div className='detail-box02'>
                                            <p className='detail-text'>{subscriptionUserData.payTypeData.type}方案</p>
                                            <p className='detail-price'>NT {subscriptionUserData.payTypeData.price}</p>
                                        </div>
                                        <p className='detail-type'>{subscriptionUserData.payTypeData.timeType}</p>
                                    </div>
                                    <div className='total01'>
                                        <div className='total-box01'>
                                            <p className='total-text'>小計</p>
                                            <p className='total-price'>NT$ {subscriptionUserData.payTypeData.price}</p>
                                        </div>
                                        <div className='total-box02'>
                                            <p className='total-text'>折扣</p>
                                            <p className='total-price'>NT$ 0</p>
                                        </div>
                                    </div>
                                    <div className='detail-btn-box'>
                                        <button className='detail-btn' onClick={()=>{navigate("/")}}>
                                            回到首頁
                                            <span class="material-symbols-outlined detail-btn-icon">
                                                arrow_right_alt
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subscription03;


