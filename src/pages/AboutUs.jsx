import { useSelector } from "react-redux";
import AboutUsContent from "../components/common/AboutUs/AboutUsContent";
import AboutUsIntro from "../components/common/AboutUs/AboutUsIntro";
import { useEffect } from "react";



function AboutUs (){

    const aboutUsPageData = useSelector((state) => state.data.aboutUsPageData);

    useEffect(()=>{
        console.log("關於我們資料:",aboutUsPageData);
    },[aboutUsPageData]);

    return(
        <>
            <AboutUsIntro aboutUsPageData={aboutUsPageData}/>
            <AboutUsContent aboutUsPageData={aboutUsPageData}/>
        </>
    )
}
export default AboutUs;