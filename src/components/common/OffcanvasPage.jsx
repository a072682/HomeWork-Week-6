

import { Form, Link, useNavigate } from 'react-router-dom';
import './_OffcanvasPage.scss';
import { Fragment, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';





function OffcanvasPage({ expanded, onClose, isLoggedIn, setExpanded,handleSearch,allItemData,searchIn,setSearchIn,userData,handleLogout}) {

    const navigate = useNavigate();//頁面跳轉宣告

    // const[searchIn,setSearchIn]=useState(null);

    const itemData = [
        {
            title:"所有文章",
            url:`/AllTheme`
        },
        {
            title:"訂閱方案",
            url:`/Subscription/${userData?.account}`
        },
        {
            title:"關於我們",
            url:`/AboutUsPage`
        },
    ];
    

  return (
    <AnimatePresence>     
        {
            expanded && (
                <>
                    {/* 遮罩區（點擊後關閉） */}
                    <div className="offcanvas-backdrop" onClick={onClose}></div>

                    {/* 側邊選單內容 */}
                    <motion.div     className="offcanvas-panel"
                                    drag="x" //允許橫向拖曳
                                    dragDirectionLock //使用者一開始「橫向滑動」後（x 軸），就會「鎖定橫向拖曳」避免出現滑一滑跑成 y 軸
                                    dragConstraints={{ left: 0, right: 0 }}//Framer Motion 需要一個 dragConstraints 屬性存在才能啟用拖曳不限制移動距離，純粹是解鎖拖曳功能
                                    onDragEnd={(event, info) => { //拖曳結束後觸發（根據滑動距離決定關閉）
                                        if (info.offset.x < -150) { // 左滑超過 150px → 關閉
                                            onClose();
                                        }
                                    }}
                                    animate={{ x:  0 }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                    initial={{ x: '-100%' }} // 進場動畫的起點 一開始的位置：在螢幕外左側（-100%）
                                    exit={{ x: '-100%' }}//離場動畫的終點 若用 AnimatePresence 管理退出動畫
                                    transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                    >
                            <div className="offcanvas-box px-24 py-12 d-flex flex-column">
                                            
                                    <div className="offcanvas-header">
                                        <button className="close-btn" onClick={onClose}>
                                            <span className="material-symbols-outlined close-icon">close</span>
                                        </button>
                                    </div>

                                    <div className="offcanvas-body ">
                                        <Form className="d-flex align-items-center search-bar-mb-box" 
                                            onSubmit={(e) => {
                                                e.preventDefault(); // ✅ 阻止預設表單提交
                                                handleSearch(allItemData);
                                                onClose();
                                            }}>
                                            <input  type="text" placeholder="搜尋文章" className="form-control-mb" aria-label="Search"
                                                    value={searchIn}
                                                    onChange={(e) => setSearchIn(e.target.value)}/>
                                            <button type="submit" className="search-mb-btn">
                                                <i className="material-symbols-outlined search-mb-icon">search</i>
                                            </button>
                                        </Form>
                                        <div className='link-item-box-mb'>
                                            {
                                                itemData.map((item)=>{
                                                    return(
                                                        <Fragment key={item.title}>
                                                            <Link   className="offcanvas-mb-btn" 
                                                                    to={ item.title === "訂閱方案"? ( isLoggedIn? (item.url):(`/LoginPage`)):(item.url)}
                                                                    onClick={()=>{onClose();}}>
                                                                    {item.title}
                                                            </Link>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="offcanvas-mb-bottom ">
                                        {
                                            isLoggedIn ?
                                            (   
                                                <button className="login-mb-btn" type="button" onClick={(event)=>{handleLogout(event);}}>
                                                    <div className='userImg-mb-box'>
                                                        <img className="userImg" src={`${import.meta.env.BASE_URL}images/user01.png`} alt="" />
                                                    </div>
                                                    <div className="userText">Andy</div>
                                                    / 登出
                                                </button>
                                            )
                                            :
                                            (
                                                <Link to="/LoginPage" className="login-mb-btn" onClick={()=>{onClose();}}>登入 / 註冊</Link>
                                            )
                                        }
                                        
                                    </div>
                            </div>
                    </motion.div>
                </>
            )
        }
    </AnimatePresence>
  );
}

export default OffcanvasPage;
