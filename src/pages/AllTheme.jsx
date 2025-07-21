import { Outlet, useLocation, useParams } from "react-router-dom";
import AllThemeIntro from "../components/common/AllTheme/AllThemeIntro";
import AllThemePage from "../components/common/AllTheme/AllThemePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadUserData } from "../slice/authSlice";
import { allThemeTabDataUp } from "../slice/dataSlice";


function AllTheme (){

    const location = useLocation();

    const dispatch = useDispatch();//使用中央函式

    const userData = useSelector((state) => state.auth.currentUserData);

    const allItemData = useSelector((state) => state.data.themeData);

    const tabData = useSelector((state) => state.data.allThemeTabData);

    const searchData = useSelector((state) => state.data.search);

    const [allThemeData,setAllThemeData]=useState(null);

    const handleAllThemeData = (input) => {
        if (!Array.isArray(input)) return [];

        const target = [];

        input.forEach((item_first) => {
            item_first.children.forEach((item_second) => {
                const titleLower = item_second.title.toLowerCase();
                const keyword = searchData?.toLowerCase();

                if (keyword) {
                    // 有搜尋關鍵字時，只比對 title 是否包含該關鍵字
                    if (titleLower.includes(keyword)) {
                        target.push({ ...item_second });
                    }
                } else {
                    // 沒有關鍵字時，依 tab 篩選資料
                    if (tabData === "所有文章" || item_first.title === tabData) {
                        target.push({ ...item_second });
                    }
                }
            });
        });

        return target;
    };

    useEffect(()=>{
        dispatch(allThemeTabDataUp("所有文章"));
    },[location.pathname]);// 只要網址路徑變了就會觸發

    useEffect(()=>{
        // console.log("取得的id:",id_first);
        // console.log("所有資料:",allItemData);
        // console.log("取得的tab:",tabData);
        // console.log("取得的search:",searchData);
        setAllThemeData(handleAllThemeData(allItemData));
    },[tabData,searchData]);

    useEffect(()=>{
        console.log("整理後的資料:",allThemeData);
    },[allThemeData]);
    

    return(
        <>
            <AllThemeIntro allItemData={allItemData} />
            <AllThemePage allThemeData={allThemeData} userData={userData} tabData={tabData} searchData={searchData}/>
        </>
    )
}
export default AllTheme;