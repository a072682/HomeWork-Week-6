import './_IndexMainTodayChoices.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';




function IndexMainTodayChoices ({indexMainTodayChoices,handleCardGoTo}){//今天又不知道要去哪裡了嗎？

    const navigate = useNavigate();

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
            <div className='IndexMainTodayChoices'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='IndexMainTodayChoices-content'>
                                <div className="row">
                                    <div className="col-6 d-none d-lg-block">
                                        <div className='IndexMainTodayChoices-left-content'>
                                            <div className='position-box'>
                                                <div className='IndexMainTodayChoices-title-box'>
                                                    <h4 className='IndexMainTodayChoices-title01'>今天又不知道要去哪裡了嗎？</h4>
                                                    <h3 className='IndexMainTodayChoices-title02'>Vivre 給你意想不到的生活風格提案</h3>
                                                </div>
                                                {
                                                    isLoggedIn?
                                                    (
                                                        <button type='button' className='TodayChoices-btn' onClick={()=>{navigate(`/Subscription/${userData.account}`)}}>
                                                            馬上訂閱
                                                            <span className="material-symbols-outlined btn-icon">
                                                                arrow_right_alt
                                                            </span>
                                                        </button>
                                                    )
                                                    :
                                                    (
                                                        <button type='button' className='TodayChoices-btn' onClick={()=>{navigate("/LoginPage")}}>
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
                                    <div className="col-6 d-none d-lg-block">
                                        <div className='IndexMainTodayChoices-right-content'>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className='content-left'>
                                                        {
                                                            indexMainTodayChoices?.slice(0,2).map((item)=>{
                                                                return(
                                                                    <button key={item.id} className='content-item' 
                                                                            onClick={()=>{handleCardGoTo(item.id,item.MembersOnly)}}>
                                                                        <div className='img-box'>
                                                                            <picture>
                                                                                <source srcSet={item.imgSm} media="(max-width: 991.98px)" />
                                                                                <img className="item-img" src={item.img} alt="" />
                                                                            </picture>
                                                                        </div>
                                                                        <p className='item-tab-content'>
                                                                            <span className="material-symbols-outlined tab-icon">
                                                                                play_arrow
                                                                            </span>
                                                                            人氣文章
                                                                        </p>
                                                                        <div className='item-content-box'>
                                                                            <p className='item-text-content'>{item.title}</p>
                                                                            <span className="material-symbols-outlined text-icon">
                                                                                play_arrow
                                                                            </span>
                                                                        </div>
                                                                    </button>
                                                                )
                                                                
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className='content-right'>

                                                        {
                                                            indexMainTodayChoices?.slice(2,4).map((item)=>{
                                                                return(
                                                                    <button key={item.id} className='content-item'
                                                                            onClick={()=>{handleCardGoTo(item.id,item.MembersOnly)}}>
                                                                        <div className='img-box'>
                                                                            <picture>
                                                                                <source srcSet={item.imgSm} media="(max-width: 991.98px)" />
                                                                                <img className="item-img" src={item.img} alt="" />
                                                                            </picture>
                                                                        </div>
                                                                        <p className='item-tab-content'>
                                                                            <span className="material-symbols-outlined tab-icon">
                                                                                play_arrow
                                                                            </span>
                                                                            人氣文章
                                                                        </p>
                                                                        <div className='item-content-box'>
                                                                            <p className='item-text-content'>{item.title}</p>
                                                                            <span className="material-symbols-outlined text-icon">
                                                                                play_arrow
                                                                            </span>
                                                                        </div>
                                                                    </button>
                                                                )
                                                                
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mx-auto d-block d-lg-none">
                                        <div className="IndexMainTodayChoices-item-mb-box">
                                            <div className='TodayChoices-top-content'>
                                                <div className='IndexMainTodayChoices-title-sm-box'>
                                                    <h6 className='IndexMainTodayChoices-sm-title01'>今天又不知道要去哪裡了嗎？</h6>
                                                    <h3 className='IndexMainTodayChoices-sm-title02'>Vivre</h3>
                                                    <h3 className='IndexMainTodayChoices-sm-title03'>給你意想不到的生活風格提案</h3>
                                                </div>
                                                {
                                                    isLoggedIn?
                                                    (
                                                        <button className='content-sm-btn' onClick={()=>{navigate(`/Subscription/${userData.account}`)}}>
                                                            馬上訂閱
                                                            <span className="material-symbols-outlined sm-btn-icon">
                                                                arrow_right_alt
                                                            </span>
                                                        </button>
                                                    )
                                                    :
                                                    (
                                                        <button className='content-sm-btn' onClick={()=>{navigate("/LoginPage")}}>
                                                            馬上訂閱
                                                            <span className="material-symbols-outlined sm-btn-icon">
                                                                arrow_right_alt
                                                            </span>
                                                        </button>
                                                    )
                                                }
                                                
                                            </div>
                                            <Swiper
                                            className="h-100"
                                            modules={[Navigation]}
                                            loop={false}
                                            spaceBetween={48}
                                            slidesPerGroup={1}
                                            navigation={{
                                                nextEl: ".Intro-next",
                                                prevEl: ".Intro-prev",
                                            }}
                                            >
                                                {
                                                    indexMainTodayChoices?.map((item)=>{
                                                        return(
                                                            <SwiperSlide key={item.id}>
                                                                <button className='content-sm-item' onClick={()=>{handleCardGoTo(item.id,item.MembersOnly)}}>
                                                                    <div className='img-box'>
                                                                        <picture>
                                                                            <source srcSet={item.imgSm} media="(max-width: 991.98px)" />
                                                                            <img className="item-img" src={item.img} alt="" />
                                                                        </picture>
                                                                    </div>
                                                                    <p className='item-tab-content'>
                                                                        <span className="material-symbols-outlined tab-icon">
                                                                            play_arrow
                                                                        </span>
                                                                        人氣行程
                                                                    </p>
                                                                    <div className='item-content-box'>
                                                                        <p className='item-text-content'>親子露營要帶什麼？</p>
                                                                        <span className="material-symbols-outlined text-icon">
                                                                            play_arrow
                                                                        </span>
                                                                    </div>
                                                                </button>
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                }
                                            </Swiper>
                                        </div>
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
export default IndexMainTodayChoices; 