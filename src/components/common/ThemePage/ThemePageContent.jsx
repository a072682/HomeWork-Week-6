
import { Link, useNavigate } from 'react-router-dom';
import './_ThemePageContent.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


function ThemePageContent ({themePageData,id_first,furtherReadingData}){

    const navigate = useNavigate();//頁面跳轉宣告

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    useEffect(()=>{
        console.log("目前登入狀態:",isLoggedIn)
    },[isLoggedIn]);

    return(
        <>
            <div className='ThemePageContent'>
                <div className="container">
                    <div className="row">
                        <div className="col-12  col-lg-8 mx-auto">
                            <div className="ThemePageContent-content">
                                <ol className="breadcrumb ThemePageContent-breadcrumb">
                                    <li className="breadcrumb-item ThemePageContent-breadcrumb-item">
                                        <Link className='link01' to="/">首頁</Link>
                                    </li>
                                    <li className="breadcrumb-item ThemePageContent-breadcrumb-item">
                                        <Link className='link02' to={`/AllTheme/`}>所有課程</Link>
                                    </li>
                                    <li className="breadcrumb-item ThemePageContent-breadcrumb-item active">
                                        <Link className='link03' to={`/ThemePage/${id_first}`}>
                                            {themePageData?.title}
                                        </Link>
                                    </li>
                                </ol>
                                <div className={`main-box ${isLoggedIn?(null):("classData")}`}>
                                    {
                                        isLoggedIn?
                                        (
                                            null
                                        )
                                        :
                                        (
                                            <div className='mask'>
                                                <button type="button" onClick={()=>{navigate("/LoginPage")}}>
                                                    <p>展開更多</p>
                                                </button>
                                            </div>
                                        )
                                    }
                                    <div className='content-title-box'>
                                        <h1 className='title'>{themePageData?.title}</h1>
                                    </div>
                                    <div className='content-time-box'>
                                        <div className='time'>{themePageData?.upLoadData.year}/{themePageData?.upLoadData.month}/{themePageData?.upLoadData.day}</div>
                                    </div>
                                    <div className='content-text-box'>
                                        {
                                            themePageData?.contents?.map((item,index)=>{
                                                if(item.type === "text"){
                                                    return(
                                                        <p key={index} className='text'>{item.content}</p>
                                                    )
                                                }else if(item.type === "img"){
                                                    return(
                                                        <img key={index} className='img' src={item.img} alt="" />
                                                    )
                                                }else if(item.type === "imgGroup"){
                                                    return(
                                                        <div key={index} className='two-imgs'>
                                                            {
                                                                item.images.map((itemIn,indexIn)=>{
                                                                    return(
                                                                        <div key={`${index}-${indexIn}`} className='img-box'>
                                                                            <img className='img' src={itemIn.img} alt="" />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                        <div className='tags-box'>
                                            {
                                                themePageData?.tags?.map((item)=>{
                                                    return(
                                                        <div key={item.title} className='tag'>#{item.title}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='furtherReading'>
                                    <div className='furtherReading-title-box'>
                                        <h2 className='title'>延伸閱讀</h2>
                                    </div>
                                    <div className='furtherReading-item-box'>
                                        {
                                            furtherReadingData?.map((item)=>{
                                                return(
                                                    <div key={item.id} className='item'>
                                                        <div className='item-img-box'>
                                                            <img className='item-img' src={item.img} alt="" />
                                                        </div>
                                                        <div className='contents-box'>
                                                            <h5 className='title'>{item.title}</h5>
                                                            <p className='text'>{item.Introduction}</p>
                                                            <button className='content-btn' onClick={()=>{navigate(`/ThemePage/${item.id}`);}}>
                                                                Read More
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='furtherReading-item-sm-box'>
                                        <Swiper
                                            className="h-100"
                                            modules={[Navigation]}
                                            loop={true}
                                            spaceBetween={48}
                                            slidesPerGroup={1}
                                            navigation={{
                                                nextEl: ".Intro-next",
                                                prevEl: ".Intro-prev",
                                            }}
                                            >
                                                {
                                                    furtherReadingData?.map((item)=>{
                                                        return(
                                                            <SwiperSlide>
                                                                <div key={item.id} className='item'>
                                                                    <img className='item-img' src={item.imgSm} alt="" />
                                                                    <div className='contents-box'>
                                                                        <h5 className='title'>{item.title}</h5>
                                                                        <p className='text card-text'>{item.Introduction}</p>
                                                                        <button className='content-btn' onClick={()=>{navigate(`/ThemePage/${item.id}`);}}>
                                                                            Read More
                                                                        </button>
                                                                    </div>
                                                                </div>
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
        </>
    )
}
export default ThemePageContent; 