
import { Link, useNavigate } from 'react-router-dom';
import './_Subscription02.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserData, SubscriptionTypeDataUp02, Trigger} from '../slice/authSlice';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';


function Subscription02 (){

    const navigate = useNavigate();//頁面跳轉宣告

    const dispatch = useDispatch();//使用中央函式

    //先進行還原 currentUserData
    useEffect(() => {
        const account = localStorage.getItem('fakeAccount');
        const isLoggedIn = localStorage.getItem('fakeLogin') === 'true';
        if (isLoggedIn && account) {
        dispatch(loadUserData()); 
        }
    }, []);

    //呼叫使用者資料
    const usersData = useSelector((state) => state.auth.currentUserData);
    //更新使用者資料
    useEffect(()=>{
        // console.log("使用者資料:",usersData);
    },[usersData]);

    //呼叫判定資料
    const TriggerData = useSelector((state) => state.auth.currentUserData?.Trigger);
    //更新判定資料
    useEffect(()=>{
        // console.log("判定資料:",TriggerData);
        if(TriggerData){
            console.log("上傳成功");  
            setNameData("");
            setPassWordData("");
            setEmailData("");
            setPayTypeData("");
            setCardNumData("");
            setCardDayData("");
            setCardCVVData("");
            setUserDataRemember(false);
            setUserCardDataRemember(false);
            dispatch(Trigger()); 
            navigate(`/Subscription-final/${usersData?.account}`)
        }else{
            console.log("上傳失敗");  
        }
    },[TriggerData]);

    // 呼叫用戶訂單資料
    const subscriptionUserData = useSelector((state) => state.auth.currentUserData?.subscriptionType || []);

    // 更新用戶訂單資料
    useEffect(() => {
        // console.log("訂閱資料:",subscriptionUserData);
    }, [subscriptionUserData]);

    

    //資料儲存區
        //姓名資料
        const [nameData,setNameData]=useState("");
        //密碼資料
        const [passWordData,setPassWordData]=useState("");
        //信箱資料
        const [emailData,setEmailData]=useState("");
        //付款方式資料
        const [payTypeData,setPayTypeData]=useState("");
        //信用卡號碼資料
        const [cardNumData,setCardNumData]=useState("");
        //信用卡有效日期資料
        const [cardDayData,setCardDayData]=useState("");
        //信用卡CVV資料
        const [cardCVVData,setCardCVVData]=useState("");
        //是否記憶使用者資料
        const[userDataRemember,setUserDataRemember]=useState(false);
        //是否記憶使用者卡片資料
        const[userCardDataRemember,setUserCardDataRemember]=useState(false);

        // useEffect(() => {
        //     console.log("姓名資料",nameData);
        //     console.log("密碼資料",passWordData);
        //     console.log("信箱資料",emailData);
        //     console.log("付款方式資料",payTypeData);
        //     console.log("信用卡號碼資料",cardNumData);
        //     console.log("信用卡有效日期資料",cardDayData);
        //     console.log("信用卡CVV資料",cardCVVData);
        // }, [nameData,passWordData,emailData,payTypeData,cardNumData,cardDayData,cardCVVData]);
    //

    //處理付款資料送出
    const handlePayData = ()=>{
        const userData = {
            account: usersData.account,
            name:nameData,
            password:passWordData,
            email:emailData,
            payType:payTypeData,
        };
        const cardData = {
            payType:payTypeData,
            cardDay:cardDayData,
            cardCVV:cardCVVData,
        }
        if(nameData === "" || passWordData === "" || emailData === ""){
            console.log("請輸入付款者資料");
            return;
        }else if(payTypeData === "" || !payTypeData){
            console.log("請選擇付款方式");
            return;
        }else if(cardNumData === "" || cardDayData === "" || cardCVVData === ""){
            console.log("請輸入卡片資料");
            return;
        }else
        dispatch(SubscriptionTypeDataUp02({userData,cardData,userDataRemember,userCardDataRemember}));
    }

    

    return(
        <>
            <Form onSubmit={(e) => { e.preventDefault(); handlePayData(); }}>
                <div className="subscription02">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="subscription02-content">
                                    <div className="subscription-breadcrumb">
                                        <ol className="breadcrumb subscription-item-breadcrumb-box">
                                            <li className="breadcrumb-item subscription-breadcrumb-item">
                                                <Link className='link01' to="/">首頁</Link>
                                            </li>
                                            <li className="breadcrumb-item subscription-breadcrumb-item">
                                                <Link className='link02' to={`/Subscription/${usersData?.account}`}>訂閱方案</Link>
                                            </li>
                                            <li className="breadcrumb-item subscription-breadcrumb-item active">
                                                <Link className='link02' to={`/Subscription-check/${usersData?.account}`}>付款</Link>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="subscription02-title">
                                        <h1 className="title">付款</h1>
                                    </div>
                                    <div className='subscription02-content-box'>
                                        <div className="row">
                                            <div className="col-12 col-lg-7">
                                                <div className='subscription02-content-left-box'>
                                                    
                                                    <div className='form-user'>
                                                        <div className='user-title-box'>
                                                            <h4 className='user-title'>購買人</h4>
                                                        </div>
                                                        <div className='bill-input-container'>
                                                            <label className='name-label' htmlFor="bill-name">姓名</label>
                                                            <input  className='name-input' 
                                                                    type="text" 
                                                                    id="bill-name"
                                                                    placeholder="請輸入姓名"
                                                                    value={nameData}
                                                                    onChange={(e)=>{setNameData(e.target.value);}}
                                                                    autoComplete="current-name"
                                                                    />
                                                        </div>
                                                        <div className='bill-input-container'>
                                                            <label className='password-label' htmlFor="bill-password">密碼</label>
                                                            <input  className='password-input' 
                                                                    type="password" 
                                                                    id="bill-password"
                                                                    placeholder="請輸入密碼"
                                                                    value={passWordData}
                                                                    onChange={(e)=>{setPassWordData(e.target.value);}}
                                                                    autoComplete="current-password"
                                                                    />
                                                        </div>
                                                        <div className='bill-input-container'>
                                                            <label className='email-label' htmlFor="bill-email">聯絡用電子信箱</label>
                                                            <input  className='email-input' 
                                                                    type="email" 
                                                                    id="bill-email"
                                                                    placeholder="請輸入電子信箱"
                                                                    value={emailData}
                                                                    onChange={(e)=>{setEmailData(e.target.value);}}
                                                                    autoComplete="current-email"
                                                                    />
                                                        </div>
                                                        <div className="form-check">
                                                            <input  className="form-check-input" 
                                                                    type="checkbox" 
                                                                    id="rememberUser" 
                                                                    name="rememberUser"
                                                                    checked={userDataRemember}
                                                                    onChange={(e) => setUserDataRemember(e.target.checked)}
                                                                    />
                                                                    
                                                            <label className="form-check-label" htmlFor="rememberUser">
                                                                記住我的資訊
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='form-pay'>
                                                        <div className='pay-title-box'>
                                                            <h4 className='pay-title'>付款方式</h4>
                                                        </div>
                                                        <div className='pay-radio-box'>
                                                            <h5 className='title'>Pay With</h5>
                                                            <div className='pay-radio-box02'>
                                                                <input  type="radio" 
                                                                    id="pay-input" 
                                                                    name="payment" 
                                                                    className="radio-input"
                                                                    value="信用卡"
                                                                    checked={payTypeData === "信用卡"} 
                                                                    onChange={(e)=>{setPayTypeData(e.target.value);}}
                                                                    />
                                                                <label htmlFor="pay-input" className="radio-label">
                                                                    信用卡
                                                                </label>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className='pay-input-box'>
                                                            <label className='paylabel' htmlFor="CardNumber">信用卡號碼</label>
                                                            <input  className='payinput' 
                                                                    type="number" 
                                                                    id="CardNumber"
                                                                    placeholder="1234 5678 1234 5678"
                                                                    value={cardNumData}
                                                                    onChange={(e)=>{setCardNumData(e.target.value);}}
                                                                    />
                                                        </div>
                                                        <div className='pay-card-input-box'>
                                                            <div className='pay-input-box'>
                                                                <label className='paylabel' htmlFor="cardtime">信用卡有限期限</label>
                                                                <input  className='payinput' 
                                                                        type="text" 
                                                                        id="cardtime"
                                                                        placeholder="MM/YY"
                                                                        value={cardDayData}
                                                                        onChange={(e)=>{setCardDayData(e.target.value);}}
                                                                        />
                                                            </div>
                                                            <div className='pay-input-box'>
                                                                <label className='paylabel' htmlFor="cardkey">卡片背面後三碼</label>
                                                                <input  className='payinput' 
                                                                        type="number" 
                                                                        id="cardkey"
                                                                        placeholder="CVV"
                                                                        value={cardCVVData}
                                                                        onChange={(e)=>{setCardCVVData(e.target.value);}}
                                                                        />
                                                            </div>
                                                        </div>
                                                        <div className="form-check">
                                                            <input  className="form-check-input" 
                                                                    type="checkbox" 
                                                                    id="rememberCard" 
                                                                    name="rememberCard"
                                                                    checked={userCardDataRemember}
                                                                    onChange={(e) => setUserCardDataRemember(e.target.checked)}
                                                                    />
                                                            <label className="form-check-label" htmlFor="rememberCard">
                                                                記住卡片資訊
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-5">
                                                <div className='subscription02-content-right-box'>
                                                    <div className='detail-container'>
                                                        <div className='dk-title-box'>
                                                            <h4 className='dk-title'>訂單資訊</h4>
                                                        </div>
                                                        <div className='detail-box'>
                                                            <div className='detail-box02'>
                                                                <p className='detail-text'>{subscriptionUserData[0]?.payTypeData.type} 方案</p>
                                                                <p className='detail-price'>NT {subscriptionUserData[0]?.payTypeData.price}</p>
                                                            </div>
                                                            <p className='detail-type'>{subscriptionUserData[0]?.payTypeData.timeType}</p>
                                                        </div>
                                                        <div className='discount-input-box'>
                                                            <label className='discountlabel' htmlFor="discount">折扣碼</label>
                                                            <div className='input-box'>
                                                                <input  className='discountinput' 
                                                                    type="text" 
                                                                    id="discount"
                                                                    placeholder="MM/YY"
                                                                    />
                                                                <button type="button" className='input-btn'>
                                                                    套用
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className='total01'>
                                                            <div className='total-box01'>
                                                                <p className='total-text'>小計</p>
                                                                <p className='total-price'>NT$ {subscriptionUserData[0]?.payTypeData.price}</p>
                                                            </div>
                                                            <div className='total-box02'>
                                                                <p className='total-text'>折扣</p>
                                                                <p className='total-price'>NT$ 0</p>
                                                            </div>
                                                        </div>
                                                        <div className='total02'>
                                                            <div className='total02-box'>
                                                                <p className='total-text'>總計</p>
                                                                <p className='total-price'>NT$ {subscriptionUserData[0]?.payTypeData.price}</p>
                                                            </div>
                                                        </div>
                                                        <div className='detail-btn-box'>
                                                            <button className='detail-btn' type="submit">
                                                                立即付款
                                                                <span className="material-symbols-outlined detail-btn-icon">
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
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}
export default Subscription02;


