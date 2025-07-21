import { useSelector } from 'react-redux';
import './_IndexMainLifeChoices.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




function IndexMainLifeChoices ({handleCardGoTo}){//品味生活

    const navigate = useNavigate();
    
    const allItemData = useSelector((state) => state.data.themeData);

    useEffect(()=>{
        console.log("全部資料:",allItemData);
    },[allItemData]);

    return(
        <>
            <div className='IndexMainLifeChoices'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='IndexMainLifeChoices-content'>
                                
                                <h2 className='IndexMainLifeChoices-title'>品味生活</h2>
                                
                                <div className="row">
                                    {
                                        allItemData?.slice(0,3).map((item)=>{
                                            return(
                                                <div key={item.id} className="col-12 col-lg-4">
                                                    <div className='IndexMainLifeChoices-item-box'>
                                                        <h2 className='item-title'>{item.tip}</h2>
                                                        <div className='item-img-box'>
                                                            <picture>
                                                                <source srcSet={item.imgSm} media="(max-width: 991.98px)" />
                                                                <img className="item-img" src={item.img} alt="" />
                                                            </picture>
                                                        </div>
                                                        <div className='texts-box'>
                                                            {
                                                                item?.children?.slice(0,3).map((itemIn)=>{
                                                                    return(
                                                                        <button key={itemIn.id} className='text' onClick={()=>{handleCardGoTo(itemIn.id,itemIn.MembersOnly)}}>
                                                                            ｜{itemIn.title}
                                                                        </button>
                                                                    )
                                                                    
                                                                })
                                                            }
                                                        </div>
                                                        <button type='button' className='item-btn' onClick={()=>{navigate(`/AllTheme`)}}>
                                                            View More
                                                            <span className="material-symbols-outlined item-icon">
                                                                arrow_right_alt
                                                            </span>
                                                        </button>
                                                    </div>
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
export default IndexMainLifeChoices; 