
import IndexMainIntro from "../components/common/IndexMain/IndexMainIntro";
import IndexMainHotTheme from "../components/common/IndexMain/IndexMainHotTheme,";
import IndexMainFeaturedArticles from "../components/common/IndexMain/IndexMainFeaturedArticles";
import IndexMainAttention from "../components/common/IndexMain/IndexMainAttention";
import IndexMainAdvertise from "../components/common/IndexMain/IndexMainAdvertise";
import IndexMainLifeChoices from "../components/common/IndexMain/IndexMainLifeChoices";
import IndexMainTodayChoices from "../components/common/IndexMain/IndexMainTodayChoices";
import IndexMainYourChoices from "../components/common/IndexMain/IndexMainYourChoices";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Index (){

    const navigate = useNavigate();//頁面跳轉宣告

    const allItemData = useSelector((state) => state.data.themeData);

    const userData = useSelector((state) => state.auth.currentUserData);

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    const[featuredArticlesData,setFeaturedArticlesData] = useState([]);

    const[indexMainTodayChoices,setIndexMainTodayChoices] = useState([]);

    useEffect(()=>{
        console.log("全部資料:",allItemData);
        setFeaturedArticlesData(handleFeaturedArticlesData(allItemData,5));
        setIndexMainTodayChoices(handleIndexMainTodayChoicesData(allItemData));
    },[allItemData]);

    useEffect(()=>{
        console.log("featuredArticle的資料:",featuredArticlesData);
    },[featuredArticlesData]);

    useEffect(()=>{
        console.log("TodayChoices的資料:",indexMainTodayChoices);
    },[indexMainTodayChoices]);

    const handleFeaturedArticlesData = (input,num)=>{
        const result = [];
        input.forEach(item_first => {
            item_first.children.forEach(item_second =>{
                if(item_second.ctr){
                    result.push(item_second);
                }
            })
        });

        return result
            .sort((a, b) => b.ctr - a.ctr)
            .slice(0, num);
    }


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

    const handleIndexMainTodayChoicesData = (input)=>{
        const result = [];
        input.forEach(item_first => {
            if(item_first.id === "cat-秘境尋蹤人"){
                item_first.children.forEach(item_second =>{
                        result.push(item_second);
                })
            }
        });
        return result
    }


    
    
    return(
        <>  
            <IndexMainIntro />
            <IndexMainHotTheme />
            <IndexMainFeaturedArticles featuredArticlesData={featuredArticlesData} handleCardGoTo={handleCardGoTo}/>
            <IndexMainAdvertise />
            <IndexMainAttention handleCardGoTo={handleCardGoTo}/>
            <IndexMainLifeChoices handleCardGoTo={handleCardGoTo}/>
            <IndexMainTodayChoices indexMainTodayChoices={indexMainTodayChoices} handleCardGoTo={handleCardGoTo}/>
            <IndexMainYourChoices />
        </>
    )
}
export default Index; 