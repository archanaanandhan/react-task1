import React from 'react'

function Card({cardData}) {
  
   // console.log(cardData);
  return  <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{cardData.plan}</h5>
      <h6 className="card-price text-center">${cardData.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li className={cardData.isUser?"":"text-muted"}><span className="fa-li"><i className={cardData.isUser?"fas fa-check":"fas fa-times"}></i></span>{cardData.plan!=="FREE"?<b>{cardData.user}</b>:cardData.user}</li>
        <li className={cardData.isStorage?"":"text-muted"}><span className="fa-li"><i className={cardData.isStorage?"fas fa-check":"fas fa-times"}></i></span>{cardData.storage}</li>
        <li className={cardData.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className={cardData.isPublicProjects?"fas fa-check":"fas fa-times"}></i></span>{cardData.publicProjects}</li>
        <li className={cardData.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className={cardData.isCommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{cardData.communityAccess}</li>
        <li className={cardData.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={cardData.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{cardData.privateProjects}</li>
        <li className={cardData.isPhoneSupport?"":"text-muted"}><span className="fa-li"><i className={cardData.isPhoneSupport?"fas fa-check":"fas fa-times"}></i></span>{cardData.phoneSupport}</li>
        <li className={cardData.isSubDomain?"":"text-muted"}><span className="fa-li"><i className={cardData.isSubDomain?"fas fa-check":"fas fa-times"}></i></span>{cardData.plan==="PRO"?<><b>Unlimited</b> {cardData.subDomain}</>:cardData.subDomain}</li>
        <li className={cardData.isReports?"":"text-muted"}><span className="fa-li"><i className={cardData.isReports?"fas fa-check":"fas fa-times"}></i></span>{cardData.reports}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Card