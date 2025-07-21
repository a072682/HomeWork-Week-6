import { Fragment, useEffect, useState } from "react";
import './_AllThemePage.scss';
import ReactPagination from "../ReactPagination";
import { Nav, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardData01 from "../card/CardData01";





function AllThemePage ({allThemeData,userData,id_first,tabData,searchData}){

    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    useEffect(()=>{
        // console.log("目前登入狀態:",isLoggedIn);
        // console.log("目前登入者狀態:",userData);
        // console.log("全部資料:",allItemData);
    },[isLoggedIn]);



    const [currentPage, setCurrentPage] = useState(1);//頁碼狀態
    // const totalItems = allThemeData?.length;
    const itemsPerPage = 8;//上限
    const totalPages = allThemeData && allThemeData.length > 0 ? Math.ceil(allThemeData.length / itemsPerPage): 1;//Math.ceil無條件進位
    const indexOfLastItem = currentPage * itemsPerPage;//算出當前頁面的資料顯示範圍 
    // 例如:currentPage(第幾頁) = 1，itemsPerPage = 8，那 indexOfLastItem = 1 * 8 = 8
    //「第1頁」的資料範圍會是 第0筆~第7筆（共8筆）
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //取得索引的前部分數字
    //indexOfLastItem = 8 itemsPerPage = 8 所以indexOfFirstItem = 8 - 8 = 0
    const currentPageItems = allThemeData?.slice(indexOfFirstItem, indexOfLastItem);
    console.log("整理後的資料02",currentPageItems);
    //因此allThemeData.slice(0, 8) 取出0~7筆資料顯示

    // 切換頁數時執行的動作
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        // console.log("切換到第", newPage, "頁");
        // 可以在這裡載入對應頁碼的資料
    };

    const handleCardGoTo = (id,MembersOnly) =>{
        if(userData?.subscriptionType?.length >=1 && isLoggedIn){//會員 訂閱
            navigate(`/ThemePage/${id}`);
        }else if(MembersOnly && isLoggedIn){//會員 沒訂閱
            navigate(`/Subscription/${userData?.account}`);
        }else if(MembersOnly){//沒會員 沒訂閱
            navigate("/LoginPage");
        }else{
            navigate(`/ThemePage/${id}`);
        }
    }

    return(
        <>
            <div className='AllThemePage'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='AllThemePage-bg'>

                                {
                                    allThemeData?.length === 0 ? 
                                    (
                                        <div className="no-article-msg text-center py-5">
                                            <h3>找不到相關文章</h3>
                                            <p>請嘗試其他關鍵字或查看所有文章</p>
                                        </div>
                                    ) 
                                    : 
                                    (
                                        <>
                                            <div className='CoursePageClass-top'>
                                                <h2 className="class-title">查看 {allThemeData?.length} 筆與「{searchData ? searchData : tabData}」的相關文章</h2>
                                            </div>
                                            <div className="row mt-24 row-gap-24">
                                                {
                                                    currentPageItems?.map((item) => (
                                                        <div key={item.id} className="col-12 col-lg-3">
                                                            <CardData01 item={item} handleCardGoTo={handleCardGoTo} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mt-24">
                                                        <ReactPagination
                                                            currentPage={currentPage}
                                                            totalPages={totalPages}
                                                            onPageChange={handlePageChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
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
export default AllThemePage; 