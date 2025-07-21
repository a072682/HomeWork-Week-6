import { useNavigate } from 'react-router-dom';
import './_IndexMainAdvertise.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';





function IndexMainAdvertise (){//廣告區

    const navigate = useNavigate();//頁面跳轉宣告

    const dispatch = useDispatch();//使用中央函式

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    const userData = useSelector((state) => state.auth.currentUserData);

    useEffect(()=>{
        console.log("目前登入狀態:",isLoggedIn)
        console.log("使用者資料:",userData)
    },[isLoggedIn,userData]);
    
    const AdvertiseData = [
        "每月最新文章無限閱讀","專屬會員限定內容","定期電子報","年度精選禮物","24 /7 優先客戶服務","為每個成員量身打造專屬行程"
    ]

    return(
        <>
            <div className='IndexMainAdvertise'>
                <img className='Advertise-img01' src={`${import.meta.env.BASE_URL}images/bg-1.png`} alt="" />
                <img className='Advertise-img02' src={`${import.meta.env.BASE_URL}images/bg-2.png`} alt="" />
                <img className='Advertise-img03' src={`${import.meta.env.BASE_URL}images/bg-2-sm.png`} alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='IndexMainAdvertise-content'>
                                <h4 className='Advertise-title01'>\ 母親節強檔活動 / </h4>
                                <h2 className='Advertise-title02 mt-12 mt-lg-20'>家庭訂閱方案限時 7 折</h2>
                                <div className='center-set mt-24 mt-lg-20'>
                                    <div className='Advertise-item-box'>
                                        {
                                            AdvertiseData?.map((item)=>{
                                                return(
                                                    <div key={item} className='Advertise-item'>
                                                        <span className="material-symbols-outlined item-icon">
                                                            check
                                                        </span>
                                                        <p className='item-text'>{item}</p>
                                                    </div>
                                                )
                                                
                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    isLoggedIn?
                                    (
                                        <button type='button' className='Advertise-btn mt-24 mt-lg-40' onClick={()=>{navigate(`/Subscription/${userData.account}`)}}>
                                            我想了解
                                            <span className="material-symbols-outlined btn-icon">
                                                arrow_right_alt
                                            </span>
                                        </button>
                                    )
                                    :
                                    (
                                        <button type='button' className='Advertise-btn mt-24 mt-lg-40' onClick={()=>{navigate("/LoginPage")}}>
                                            我想了解
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
        </>
    )
}
export default IndexMainAdvertise; 