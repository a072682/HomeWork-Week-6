
import { Link, useNavigate } from 'react-router-dom';
import './_AboutUsContent.scss';




function AboutUsContent ({aboutUsPageData}){

    const navigate = useNavigate();

    

    return(
        <>
            <div className='AboutUsContent'>
                <div className='AboutUsContent-dk'>
                    <div className="container">
                        <div className="row">
                            <div className='col'>
                                <div className='AboutUsContent-content'>
                                    <ol className="breadcrumb AboutUsContent-breadcrumb">
                                        <li className="breadcrumb-item AboutUsContent-breadcrumb-item">
                                            <Link className='link01' to="/">首頁</Link>
                                        </li>
                                        <li className="breadcrumb-item AboutUsContent-breadcrumb-item active">
                                            <Link className='link02' to="/AboutUsPage">關於我們</Link>
                                        </li>
                                    </ol>
                                    <div className='content-title-box'>
                                        <h1 className='title'>關於我們</h1>
                                    </div>
                                    <div className='introduce-box'>
                                        {
                                            aboutUsPageData?.introduce?.map((item,index)=>{
                                                return(
                                                    <div key={index} className={index === 0?('introduce-content01'):('introduce-content02')}>
                                                        <div className='img-box'>
                                                            <img className='img' src={item.img} alt="" />
                                                        </div>
                                                        <div className='text-box'>
                                                            <div className='box01'>
                                                                <h3 className='title'>{item.title}</h3>
                                                                {
                                                                    item.text.map((itemIn)=>{
                                                                        return(
                                                                            <p className='text'>{itemIn.content}</p>
                                                                        )   
                                                                    })
                                                                }
                                                            </div>
                                                            <div className='box02'>
                                                                <h5 className='title'>{item.detail.title}</h5>
                                                                <ul className='contents'>
                                                                    {
                                                                        item.detail.items?.map((itemIn)=>{
                                                                            return(
                                                                                <li key={itemIn.title} className='text'>{itemIn.title}</li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
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
                <div className='AboutUsContent-mb'>
                    <div className="container">
                        <div className="row">
                            <div className='col'>
                                <div className='AboutUsContent-content01'>
                                    <ol className="breadcrumb AboutUsContent-breadcrumb">
                                        <li className="breadcrumb-item AboutUsContent-breadcrumb-item">
                                            <Link className='link01' to="/">首頁</Link>
                                        </li>
                                        <li className="breadcrumb-item AboutUsContent-breadcrumb-item active">
                                            <Link className='link02' to="/AboutUsPage">關於我們</Link>
                                        </li>
                                    </ol>
                                    <div className='content-title-box'>
                                        <h1 className='title'>關於我們</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-item01'>
                        <div className='img-box01'>
                            <img className='img' src={aboutUsPageData.introduce[0].imgSm} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className='col'>
                                    <div className='AboutUsContent-content02'>
                                        <div className='text-box'>
                                            <div className='box01'>
                                                <h3 className='title'>{aboutUsPageData.introduce[0].title}</h3>
                                                <p className='text'>{aboutUsPageData.introduce[0].text[0].content}</p>
                                            </div>
                                            <div className='box02'>
                                                <h5 className='title'>{aboutUsPageData.introduce[0].detail.title}</h5>
                                                <ul className='contents'>
                                                    {
                                                        aboutUsPageData.introduce[0].detail.items?.map((item)=>{
                                                            return(
                                                                <li key={item.title} className='text'>{item.title}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-item02'>
                        <div className='img-box02'>
                            <img className='img' src={aboutUsPageData.introduce[1].imgSm} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className='col'>
                                    <div className='AboutUsContent-content03'>
                                        <div className='text-box'>
                                            <h3 className='title'>{aboutUsPageData.introduce[1].title}</h3>
                                            {
                                                aboutUsPageData.introduce[1].text?.map((item)=>{
                                                    return(
                                                        <p className='text'>{item.content}</p>
                                                    )
                                                    
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='history'>
                    <div className="container">
                        <div className="row">
                            <div className='d-none col-lg-4 d-lg-block'>
                                <div className='history-title-box'>
                                    <h1 className='title'>{aboutUsPageData.history.title}</h1>
                                </div>
                            </div>
                            <div className='col-12 col-lg-8'>
                                <div className='history-title-box-sm'>
                                    <h1 className='title-sm'>{aboutUsPageData.history.title}</h1>
                                </div>
                                <div className='content-box'>
                                    {
                                        aboutUsPageData.history.items?.map((item)=>{
                                            return(
                                                <div key={item.timeYear} className='content-item'>
                                                    <div className='time-year'>{item.timeYear}</div>
                                                    <div className='item-box'>
                                                        {   
                                                            item.itemDetail?.map((itemIn,index)=>{
                                                                return(
                                                                    <div key={index} className='item'>
                                                                        <div className='time-months-num'>{itemIn.timeMonth}<span className='time-months'>月</span></div>
                                                                        <div className='text'>{itemIn.event}</div>
                                                                    </div>
                                                                )
                                                            })
                                                            
                                                        }
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
                <div className='vision'>
                    <div className="container">
                        <div className="row">
                            <div className='col-12 col-lg-8 mx-auto'>
                                <div className='vision-content-box'>
                                    <div className='vision-title-box'>
                                        <h2 className='title'>品牌願景</h2>
                                    </div>
                                    <div className='vision-text-box'>
                                        <p className='text'>我們的目標不僅是為讀者提供高水準的內容，更希望能真正啟發和影響讀者的生活方式與價值觀,引領走向更有意義、品質與質感的生活體驗。我們相信,生活的意義不僅僅在於外在物質條件的滿足,更多的是一種心靈層面的追求,一種對美好事物的不懈向往。因此,vivre 的定位是成為啟迪現代人內在生活的引路人,給予靈感啟迪,引領讀者去體驗生活的真諦。</p>
                                        <p className='text'>我們衷心期盼，vivre 能為現代人的生活帶來無限靈感啟發,讓每個人的生活之路不僅優雅、從容,更有內在的意義與價值,豐富而燦爛。讓我們共同努力,將生活過得更有滋有味!期待您一同加入 vivre，攜手同行這段美妙的人生旅程。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUsContent; 