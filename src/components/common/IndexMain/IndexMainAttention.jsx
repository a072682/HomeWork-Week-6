import { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './_IndexMainAttention.scss';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";





function IndexMainAttention ({handleCardGoTo}){//大家都在看

    const navigate = useNavigate();
    
    const [activeTab, setActiveTab] = useState("秘境尋蹤人"); // 預設顯示 "A" 分頁

    const allItemData = useSelector((state) => state.data.themeData);

    useEffect(()=>{
        console.log("全部資料:",allItemData);
    },[allItemData]);


    return(
        <>
            <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                <div className='IndexMainAttention'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className='IndexMainAttention-content'>
                                    <h2 className='IndexMainAttention-title'>大家都在看</h2>
                                    <div className="row">
                                        <div className="col-3 d-none d-lg-block">
                                            <div className='IndexMainAttention-tab-box'>
                                                <Nav className='class-tabs'>
                                                    {
                                                        allItemData?.map((item)=>{
                                                            return(
                                                                <Nav.Item key={item.id} className='nav-item'>
                                                                    <Nav.Link className="class-tab" eventKey={item.title} >{item.title}</Nav.Link>
                                                                </Nav.Item>
                                                            )
                                                        })
                                                    }
                                                </Nav>
                                            </div>
                                        </div>
                                        <div className="col-9 d-none d-lg-block">
                                            <div className='IndexMainAttention-item-box'>
                                                <Tab.Content className=''>
                                                    {
                                                        allItemData?.map((item)=>{
                                                            return(
                                                                <Tab.Pane key={item.id} eventKey={item.title}>
                                                                    <div className="item-content">
                                                                        <div className="items-text-box">
                                                                            <h4 className="item-title">{item.title}</h4>
                                                                            <div className="texts-box">
                                                                                {
                                                                                    item?.children?.slice(0,3).map((itemIn)=>{
                                                                                        return(
                                                                                            <button key={itemIn.id} className="text" 
                                                                                            onClick={()=>{handleCardGoTo(itemIn.id,itemIn.MembersOnly)}}>
                                                                                                ｜{itemIn.title}
                                                                                            </button>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="imgs-box">
                                                                            {
                                                                                item?.children?.slice(0,4).map((itemIn)=>{
                                                                                    return(
                                                                                        <div key={itemIn.id} className="img-box">
                                                                                            <img className="item-img" src={itemIn.img} alt="" />
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                        <div className="items-bottom">
                                                                            <div className="tag-box">
                                                                                {
                                                                                    item?.children?.slice(0, 1).map((itemIn) => {
                                                                                        return itemIn.tags.map((tag) => (
                                                                                            <div key={tag.title} className="tag">#{tag.title}</div>
                                                                                        ));
                                                                                    })
                                                                                }
                                                                            </div>
                                                                            <button type="button" className="bottom-btn" onClick={()=>{navigate(`/AllTheme`)}}>
                                                                                View More
                                                                                <span className="material-symbols-outlined btn-icon">
                                                                                    arrow_right_alt
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                            )

                                                        })
                                                    }
                                                </Tab.Content>
                                            </div>
                                        </div>
                                        <div className="col-12 d-block d-lg-none">
                                            <div className="IndexMainFeaturedArticles-item-mb-box">
                                                <Swiper
                                                className="h-100"
                                                modules={[Navigation]}
                                                loop={true}
                                                spaceBetween={0}
                                                slidesPerGroup={1}
                                                navigation={{
                                                    nextEl: ".Intro-next",
                                                    prevEl: ".Intro-prev",
                                                }}
                                                >
                                                    {
                                                        allItemData?.map((item)=>{
                                                            return(
                                                                <SwiperSlide key={item.id}>
                                                                    <div className="item-content">
                                                                        <div className="items-text-box">
                                                                            <h4 className="item-title">{item.title}</h4>
                                                                            <div className="texts-box">
                                                                                {
                                                                                    item?.children?.slice(0,3).map((itemIn)=>{
                                                                                        return(
                                                                                            <button key={itemIn.id} className="text"
                                                                                                    onClick={()=>{handleCardGoTo(itemIn.id,itemIn.MembersOnly)}}>
                                                                                                ｜{itemIn.title}
                                                                                            </button>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="img-box">
                                                                            <img className="item-img" src={item.img} alt="" />     
                                                                        </div>  
                                                                        
                                                                        
                                                                        <div className="tag-box">
                                                                            {
                                                                                item?.children?.slice(0, 1).map((itemIn) => {
                                                                                    return itemIn.tags.map((tag) => (
                                                                                        <div key={tag.title} className="tag">#{tag.title}</div>
                                                                                    ));
                                                                                })
                                                                            }
                                                                        </div>
                                                                        <button type="button" className="bottom-btn" onClick={()=>{navigate(`/AllTheme`)}}>
                                                                            View More
                                                                            <span className="material-symbols-outlined btn-icon">
                                                                                arrow_right_alt
                                                                            </span>
                                                                        </button>
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
                </div>
            </Tab.Container>
        </>
    )
}
export default IndexMainAttention; 