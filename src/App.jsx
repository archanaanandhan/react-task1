import React from 'react'
import Card from './components/Card'

function App() {
  let arr_data = [
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      isUser:true,
      storage:"50 GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:false,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      subDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"PLUS",
      price:0,
      user:"5 User",
      isUser:true,
      storage:"50 GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimited Users",
      isUser:true,
      storage:"50 GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:true
    }
  ]
  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      arr_data.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })
     }
    </div>
  </div>
</section>
  </>
}

export default App