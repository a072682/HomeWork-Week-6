import './_IndexMainFeaturedArticles.scss';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardData01 from '../card/CardData01';





function IndexMainFeaturedArticles({featuredArticlesData,handleCardGoTo}) {//精選文章

    const navigate = useNavigate();

    const allItemData = useSelector((state) => state.data.themeData);

    const [currentIndex, setCurrentIndex] = useState(1);//目前正在看的第幾頁
    const [totalSlides, setTotalSlides] = useState(0);//總共有幾頁
    const swiperRef = useRef(null);

    const [trigger, setTrigger] = useState(false);//觸發

    useEffect(()=>{
        console.log("第幾頁:",currentIndex);
        console.log("總共幾頁:",totalSlides);
        console.log("引入總數料:",featuredArticlesData);
        
    },[currentIndex,totalSlides,featuredArticlesData]);


    useEffect(() => {
        if (featuredArticlesData && featuredArticlesData.length > 0) {
            //此時的swiperRef.current為null
            const groupSize = swiperRef.current?.params?.slidesPerGroup || 1;
            const totalPages = Math.ceil(featuredArticlesData.length / groupSize);
            setTotalSlides(totalPages);
        }
    }, [featuredArticlesData,trigger]);

  return (
    <div className="IndexMainFeaturedArticles">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-4 d-none d-lg-block">
                            <div className="IndexMainFeaturedArticles-left-content">
                                <div className="IndexMainFeaturedArticles-title-box">
                                    <h2 className="IndexMainFeaturedArticles-title">精選文章</h2>
                                </div>

                                {/* 👉 左右控制按鈕 + 頁碼 */}
                                <div className="d-flex flex-column align-items-start gap-32">
                                    <div className="text-muted">
                                        {currentIndex} / {totalSlides}
                                    </div>
                                    <div className="Intro-box d-flex">
                                        <button className="Intro-prev-desktop btn btn-outline-secondary" aria-label="上一頁">
                                            <span className="material-symbols-outlined Intro-prev-icon">
                                                arrow_left_alt
                                            </span>
                                        </button>
                                        <button className="Intro-next-desktop btn btn-outline-secondary" aria-label="下一頁">
                                            <span className="material-symbols-outlined Intro-next-icon">
                                                arrow_right_alt
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-8">
                            <div className="IndexMainFeaturedArticles-right-content">

                                <div className="IndexMainFeaturedArticles-title-box">
                                    <h2 className="IndexMainFeaturedArticles-title">精選文章</h2>
                                </div>
                                
                                <div className="IndexMainFeaturedArticles-item-box">
                                    
                                    
                                            <Swiper
                                            className="h-100"
                                            modules={[Navigation]}
                                            loop={true}
                                            
                                            spaceBetween={48}
                                            navigation={{
                                                nextEl: window.innerWidth >= 992 ? ".Intro-next-desktop" : ".Intro-next-mobile",
                                                prevEl: window.innerWidth >= 992 ? ".Intro-prev-desktop" : ".Intro-prev-mobile",
                                            }}
                                            breakpoints={{
                                                0: {
                                                slidesPerView: 1, // 手機（<992px）
                                                slidesPerGroup: 1,
                                                
                                                },
                                                992: {
                                                slidesPerView: 2, // 桌面（>=992px）
                                                slidesPerGroup: 2,
                                                }
                                            }}
                                            onSwiper={(swiper) => {//當 Swiper 初始化完成時觸發
                                                swiperRef.current = swiper
                                            }}
                                            onInit={(swiper) => {
                                                swiperRef.current = swiper; // 保存實例
                                            }}
                                            onBeforeInit={(sw) => {
                                               
                                            }}
                                            onSlideChange={(swiper) => {//每次滑動頁面完成時會觸發

                                                const currentPage = Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) + 1;
                                                setCurrentIndex(currentPage);
                                                //swiper.realIndex目前畫面最左側的 slide 的 index
                                                //swiper.params.slidesPerGroup每次點擊「下一頁」時，要移動幾個 slide
                                            }}
                                            onBreakpoint={(sw, bpParams) => {
                                                const isDesktop = window.innerWidth >= 992;

                                                // 更新 Navigation 元素
                                                sw.params.navigation.prevEl = isDesktop
                                                ? ".Intro-prev-desktop"
                                                : ".Intro-prev-mobile";
                                                sw.params.navigation.nextEl = isDesktop
                                                ? ".Intro-next-desktop"
                                                : ".Intro-next-mobile";

                                                // 重新初始化 Navigation
                                                sw.navigation.destroy();
                                                sw.navigation.init();
                                                sw.navigation.update();
                                                
                                                //
                                                setTrigger(!trigger);
                                            }}
                                            
                                            >
                                            {featuredArticlesData?.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <CardData01 item={item} handleCardGoTo={handleCardGoTo} />
                                                </SwiperSlide>
                                            ))}
                                            </Swiper>
                                        
                                        
                                    
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-12 d-lg-none">
                            {/* 👉 左右控制按鈕 + 頁碼 */}
                            <div className="mb-control-item">
                                <div className="text-muted">
                                    {currentIndex} / {totalSlides}
                                </div>
                                <div className="Intro-box d-flex">
                                    <button className="Intro-prev-mobile btn btn-outline-secondary" aria-label="上一頁">
                                        <span className="material-symbols-outlined Intro-prev-icon">
                                            arrow_left_alt
                                        </span>
                                    </button>
                                    <button className="Intro-next-mobile btn btn-outline-secondary" aria-label="下一頁">
                                        <span className="material-symbols-outlined Intro-next-icon">
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
    </div>
  );
}

export default IndexMainFeaturedArticles; 