import { useLocation, useParams } from "react-router-dom";
import ThemePageContent from "../components/common/ThemePage/ThemePageContent";
import ThemePageIntro from "../components/common/ThemePage/ThemePageIntro";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


function ThemePage (){

    const { id_first } = useParams();

    const location = useLocation();

    const allItemData = useSelector((state) => state.data.themeData);

    const [themePageData,setThemePageData]=useState(null);

    const[furtherReadingData,setFurtherReadingData]=useState(null);

    const handleThemePageData = (input)=>{
        if (!Array.isArray(input)) return [];
        let target = null;
        let id_firts = null;
        input.forEach(item_first => {
            item_first.children.forEach((item_second)=>{
                if(item_second.id === id_first){
                    target={
                        ...item_second
                    };
                    id_firts = item_first.id;
                }
            })
        })
        return target;
    }

    const handlefurtherReadingData = (input)=>{
        if (!Array.isArray(input)) return [];
        let target = null;
        input.forEach(item_first => {
            const result = item_first.children.filter(item => item.id !== id_first);
            target = result;
        })
        return target;
    }
    
    useEffect(()=>{
        console.log("取得的id:",id_first);
        console.log("所有資料:",allItemData);
        setThemePageData(handleThemePageData(allItemData));
        setFurtherReadingData(handlefurtherReadingData(allItemData));
    },[location.pathname]);

    useEffect(()=>{
        console.log("單頁整理後的資料:",themePageData);
        console.log("單頁延伸資料:",furtherReadingData);
    },[themePageData,furtherReadingData]);

    return(
        <>
            <ThemePageIntro themePageData={themePageData}/>
            <ThemePageContent themePageData={themePageData} id_first={id_first} furtherReadingData={furtherReadingData}/>
        </>
    )
}
export default ThemePage;