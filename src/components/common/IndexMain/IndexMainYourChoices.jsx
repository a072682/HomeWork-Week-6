import { useNavigate } from 'react-router-dom';
import './_IndexMainYourChoices.scss';


useNavigate


function IndexMainYourChoices (){//想看什麼主題由你決定！
    

    const navigate = useNavigate();

    return(
        <>
            <div className='IndexMainYourChoices'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='IndexMainYourChoices-content'>
                                <div className='title-box'>
                                    <h2 className='IndexMainYourChoices-title01'>想看什麼主題由你決定！</h2>
                                    <h3 className='IndexMainYourChoices-title02'>歡迎投稿與我們分享</h3>
                                </div>
                                <button type="button" className='content-btn' onClick={()=>{navigate("/AboutUsPage")}}>
                                    聯絡我們
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default IndexMainYourChoices; 