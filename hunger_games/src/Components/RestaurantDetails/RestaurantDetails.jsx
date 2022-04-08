export const RestaurantDetails = ({category,name,img_url,cost,rating,votes,views,paymentMode}) => {
    console.log(category,name);
    return (
        <>
          <div>
              <div>
                 <img src={img_url} alt=""/>
              </div>
             <div>
               <h2>{name}</h2>
               <h4>{category.map((e)=> {
                   return <>
                   <h4>{e}</h4>
                   </>
               })}</h4>
               <h4>Cost $ {cost}</h4>
               <h4>{paymentMode.map((e)=> {
                   return <>
                   <h4>{e}</h4>
                   </>
               })}</h4>
             </div>
             <div>
                 <div>{rating}</div>
                 <h4>{votes} votes</h4>
                 <h4>{views} reviews</h4>
             </div>

          </div>
        </>
    )
}