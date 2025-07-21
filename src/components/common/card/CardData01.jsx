import './_CardData01.scss';

function CardData01({item,handleCardGoTo}) {

    return(
        <>
            <div className="card01">
                <div className='img-box'>
                    <picture>
                        <source srcSet={item.imgSm} media="(max-width: 991.98px)" />
                        <img className="item-img" src={item.img} alt="" />
                    </picture>
                </div>
                <div className='item-text-box mt-24'>
                    <h5 className='item-title'>{item.title}</h5>
                    <p className='item-content card-text'>{item.Introduction}</p>
                </div>
                <div className='item-btn-box mt-24'>
                    <button type='button'className='item-btn' onClick={()=>{handleCardGoTo(item.id,item.MembersOnly)}}>Read More</button>
                    {
                        item.MembersOnly?
                        (<div className='item-tip'>會員專屬</div>)
                        :
                        (null)
                    }
                </div>
            </div>
        </>
    )
}

export default CardData01;