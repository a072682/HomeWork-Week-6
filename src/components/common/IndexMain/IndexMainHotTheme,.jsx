import { useDispatch, useSelector } from 'react-redux';
import './_IndexMainHotTheme.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadUserData } from '../../../slice/authSlice';


function IndexMainHotTheme (){//熱門主題

    const itemData = useSelector((state) => state.data.themeData);

    const navigate = useNavigate();//頁面跳轉宣告

    const dispatch = useDispatch();//使用中央函式

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    useEffect(()=>{

    },[itemData])

    const userData = useSelector((state) => state.auth.currentUserData);
    
    useEffect(()=>{
        // console.log("目前登入狀態:",isLoggedIn);
        // console.log("目前登入者狀態:",userData);
    },[isLoggedIn,userData]);


    useEffect(() => {
        const account = localStorage.getItem('fakeAccount');
        const isLoggedIn = localStorage.getItem('fakeLogin') === 'true';

        if (isLoggedIn && account) {
        dispatch(loadUserData({ account })); // 還原 currentUserData
        }
    }, []);
    

    return(
        <>
            <div className='IndexMainHotTheme'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='IndexMainHotTheme-content'>
                                <div className='IndexMainHotTheme-title-box'>
                                    <h2 className='IndexMainHotTheme-title'>熱門主題</h2>
                                </div>
                                <div className="row row-gap-8 row-gap-lg-24 mt-24">
                                    {
                                       itemData?.map((item)=>{
                                    
                                            return(
                                                <div key={item.id} className="col-12 col-lg-3">
                                                    {
                                                        isLoggedIn?
                                                        (
                                                            <button className='IndexMainHotTheme-item' onClick={()=>{navigate(`/AllTheme/`)}}>
                                                                <picture>
                                                                    <source srcSet={item.imgSm} media="(max-width: 991.98px)" />
                                                                    <img className="item-img" src={item.img} alt={item.title} />
                                                                </picture>
                                                                <h5 className="content">{item.title}</h5>
                                                            </button>
                                                        )
                                                        :
                                                        (
                                                            <button className='IndexMainHotTheme-item' onClick={()=>{navigate("/LoginPage")}}>
                                                                <picture>
                                                                    <source srcSet={item.imgSm} media="(max-width: 991.98px)" />
                                                                    <img className="item-img" src={item.img} alt={item.title} />
                                                                </picture>
                                                                <h5 className="content">{item.title}</h5>
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            )
                                            
                                       }) 
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default IndexMainHotTheme; 