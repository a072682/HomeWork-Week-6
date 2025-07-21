
import './_ThemePageIntro.scss';




function ThemePageIntro ({themePageData}){


    return(
        <>
            <div className='ThemePageIntro'>
                <img className='img' src={themePageData?.imgSm} alt="" />
                <div className="container">
                    <div className="row">
                        <div className='ThemePageIntro-bg'>
                            <div className="col-12">
                                <div className='Intro-img-box'>
                                    <img className='Intro-img' src={themePageData?.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ThemePageIntro; 