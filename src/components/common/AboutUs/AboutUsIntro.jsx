
import './_AboutUsIntro.scss';




function AboutUsIntro ({aboutUsPageData}){


    return(
        <>
            <div className='AboutUsIntro'>
                <img className='img' src={aboutUsPageData.introImgSm} alt="" />
                <div className="container">
                    <div className="row">
                        <div className='AboutUsIntro-bg'>
                            <div className="col-12">
                                <div className='Intro-img-box'>
                                    <img className='Intro-img' src={aboutUsPageData.introImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUsIntro; 