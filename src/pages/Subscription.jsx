import { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './_Subscription.scss';
import { useDispatch, useSelector } from "react-redux";
import { loadUserData, SubscriptionTypeDataUp01 } from "../slice/authSlice";


function Subscription (){

    const navigate = useNavigate();//頁面跳轉宣告

    const dispatch = useDispatch();//使用中央函式

    //分頁控制區
        // 預設顯示 "年繳" 分頁
        const [activeTab, setActiveTab] = useState("年繳");
        //訂閱頁面點擊用
        const[tabData,setTabData]=useState("輕量型");
    //

    //先還原currentUserData再抓取
    useEffect(() => {
        const account = localStorage.getItem('fakeAccount');
        const isLoggedIn = localStorage.getItem('fakeLogin') === 'true';
        if (isLoggedIn && account) {
        dispatch(loadUserData()); // 還原 currentUserData
        }
    }, []);

    //使用者資料
    const userData = useSelector((state) => state.auth.currentUserData);

    //更新使用者資料
    useEffect(()=>{
        console.log("使用者資料:",userData);
    },[userData]);

    //訂閱頁面顯示資料
    const subscriptionData = useSelector((state) => state.data.SubscriptionPageData);

    //更新訂閱頁面顯示資料
    useEffect(()=>{
        console.log("Subscription資料:",subscriptionData);
    },[subscriptionData]);

    // 呼叫用戶訂單資料
    const subscriptionUserData = useSelector((state) => state.auth.currentUserData?.subscriptionType || []);

    // 更新用戶訂單資料
    useEffect(() => {
        console.log("訂閱資料:",subscriptionUserData);
    }, [subscriptionUserData]);

    
    //儲存資料區
        //決定年繳或月繳
        const[payTimeTypeData,setPayTimeTypeData]=useState("年繳");

        //決定套組
        const[payTypeData,setPayTypeData]=useState("輕量型");

        //價格
        const[payPriceData,setPayPriceData]=useState(1000);

        useEffect(() => {
            if(payTimeTypeData === "年繳"){
                setPayTypeData("輕量型");
                setPayPriceData(1000);
            }else{
                setPayTypeData("輕量型");
                setPayPriceData(99);
            }
            console.log("月繳or年繳:",payTimeTypeData);
            console.log("套組:",payTypeData);
            console.log("價格:",payPriceData);
        }, [payTimeTypeData]);
    //    
    
    //上傳用函式
    const handleGotoOrder = ()=>{
        if (!userData?.account) return;
        dispatch(SubscriptionTypeDataUp01(
            {
                payTypeData:{
                    timeType:payTimeTypeData,
                    type:payTypeData,
                    price:payPriceData,
                }
            }));
        if(subscriptionUserData[0].certification && subscriptionUserData.length >=1){
            console.log("訂閱類型上傳成功");
            navigate(`/Subscription-check/${userData?.account}`)
        }
    }
    //

    return(
        <>
        <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
            <div className="subscription">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="subscription-content">
                                <div className="subscription-breadcrumb">
                                    <ol className="breadcrumb subscription-item-breadcrumb-box">
                                        <li className="breadcrumb-item subscription-breadcrumb-item">
                                            <Link className='link01' to="/">首頁</Link>
                                        </li>
                                        <li className="breadcrumb-item subscription-breadcrumb-item active">
                                            <Link className='link02' to={`/Subscription/${userData?.account}`}>{subscriptionData?.title}</Link>
                                        </li>
                                    </ol>
                                </div>
                                <div className="subscription-title">
                                    <h1 className="title">{subscriptionData?.title}</h1>
                                </div>
                                <div className='IndexMainAttention-tab-box'>
                                    <div className="row">
                                        <div className="col col-lg-4 mx-auto">
                                            <Nav className='class-tabs'>
                                                {
                                                    subscriptionData?.dayType?.map((item)=>{
                                                        return(
                                                            <Nav.Item key={item.type} className='class-tabs-item'>
                                                                <Nav.Link   className="class-tab" eventKey={item.type} 
                                                                            onClick={()=>{setPayTimeTypeData(item.type)}}>
                                                                    {item.type}
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        )
                                                    })
                                                    
                                                }
                                            </Nav>
                                        </div>
                                    </div>
                                </div>
                                <div className='IndexMainAttention-item-box'>
                                    <Tab.Content className='contents-box'>
                                        {
                                            subscriptionData?.dayType?.map((item)=>{
                                                return(
                                                    <Tab.Pane key={item.type} eventKey={item.type}>

                                                        <div className="cards-box"> 
                                                            {
                                                                item?.items?.map((itemIn)=>{
                                                                    return(
                                                                        <div    key={itemIn.type} 
                                                                                className={`card-box ${tabData === itemIn.type ? "active" : ""}`}
                                                                                onClick={()=>{setTabData(itemIn.type);setPayTypeData(itemIn.type);setPayPriceData(itemIn.price)}}>
                                                                            <div className="card-title-box">
                                                                                <h5 className="title">{itemIn.type}</h5>
                                                                                <p className="text01">NT {itemIn.price}<span className="text02"> /{itemIn.time}</span></p>
                                                                                <del className="text03">NT {itemIn.originPrice}</del>
                                                                            </div>
                                                                            <div className="card-list-box">
                                                                                {
                                                                                    itemIn?.detail?.map((detailIn,index)=>{
                                                                                        return(
                                                                                            <div key={index} className="list-item">
                                                                                                <span className="material-symbols-outlined list-icon">
                                                                                                    check_small
                                                                                                </span>
                                                                                                <p className="list-text">{detailIn.content}</p>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                            <button type="button" 
                                                                                    className={`list-btn ${tabData === itemIn.type ? "active" : ""}`} 
                                                                                    disabled={tabData !== itemIn.type}
                                                                                    onClick={()=>{handleGotoOrder()}}
                                                                                    >
                                                                                我要訂閱
                                                                                <span className="material-symbols-outlined list-icon">
                                                                                    arrow_right_alt
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                })
                                                            }                                                                
                                                        </div>
                                                    </Tab.Pane>
                                                )
                                            })
                                        }
                                    </Tab.Content>
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
export default Subscription;


