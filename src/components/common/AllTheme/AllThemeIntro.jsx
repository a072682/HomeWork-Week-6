import { Link } from 'react-router-dom';
import './_AllThemeIntro.scss';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { allThemeTabDataUp, searchInput } from '../../../slice/dataSlice';
import { useDispatch, useSelector } from 'react-redux';




function AllThemeIntro ({allItemData,allThemeData}){

    const dispatch = useDispatch();//使用中央函式

    const tabData = useSelector((state) => state.data.allThemeTabData);

    const[tab,setTab]=useState("所有文章")

    const tablist = [
        {
            id:"cat-所有文章",
            title:"所有文章",
        },...allItemData,
    ]

    const handleTabDataUp = (tab)=>{
        setTab(tab);
        dispatch(allThemeTabDataUp(tab));
    }

    useEffect(() => {
        if (tabData) {
            // console.log("tab資料已上傳", tabData);
        }
    }, [tabData]);


    return(
        <>
            <div className='AllThemeIntro'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ol className="breadcrumb AllThemeIntro-breadcrumb">
                                <li className="breadcrumb-item AllThemeIntro-breadcrumb-item">
                                    <Link className='link01' to="/">首頁</Link>
                                </li>
                                <li className="breadcrumb-item AllThemeIntro-breadcrumb-item active">
                                    <Link className='link02' to="/AllTheme">所有文章</Link>
                                </li>
                            </ol>
                            <div className='Intro-title'>
                                <h3>所有文章</h3>
                            </div>
                            <div className='Intro-item'>
                                <Swiper
                                    className='h-100'
                                    modules={[Navigation]}
                                    slidesPerView="auto"
                                    loop={true}
                                    spaceBetween={8}
                                    navigation={{ nextEl: ".Intro-next" }}
                                    >
                                    {
                                        tablist?.map((item)=>{
                                            return(
                                                <SwiperSlide key={item.id} style={{ width: 'fit-content' }}>
                                                    <button
                                                        onClick={()=>{handleTabDataUp(item.title);dispatch(searchInput(""));}}
                                                        className={`Intro-btn ${tab === item.title ? "active" : ""}`}
                                                    >
                                                        {item.title}
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
        </>
    )
}
export default AllThemeIntro; 