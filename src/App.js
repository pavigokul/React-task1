import React from 'react'

function Details(props){
  return(
    <div>

      <h3 style={{color:'grey'}}>Free</h3>
      <h1>$0/month</h1>
      <p>{props.check} Single User</p>
      <p>{props.check} 5GB Storage</p>
      <p>{props.check} Unlimited Public Projects</p>
      <p>{props.check} Community Access</p>
      <p>{props.cross} Unlimited Private Projects</p>
      <p>{props.cross} Dedicated Phone Support</p>
      <p>{props.cross} Free Subdomain</p>
      <p>{props.cross} Monthly Status Reports</p>
      <button>Button</button>


      <h3 style={{color:'grey'}}>Plus</h3>
      <h1>$9/month</h1>
      <h3>{props.check} 5 Users</h3>
      <p>{props.check} 50GB Storage</p>
      <p>{props.check} Unlimited Public Projects</p>
      <p>{props.check} Community Access</p>
      <p>{props.check} Unlimited Private Projects</p>
      <p>{props.check} Dedicated Phone Support</p>
      <p>{props.check} Free Subdomain</p>
      <p>{props.cross} Monthly Status Reports</p>
      <button>Button</button>


      <h3 style={{color:'grey'}}>Pro</h3>
      <h1>$49/month</h1>
      <h3>{props.check} Unlimited Users</h3>
      <p>{props.check} 150GB Storage</p>
      <p>{props.check} Unlimited Public Projects</p>
      <p>{props.check} Community Access</p>
      <p>{props.check} Unlimited Private Projects</p>
      <p>{props.check} Dedicated Phone Support</p>
      <p>{props.check} Unlimited Free Subdomains</p>
      <p>{props.check} Monthly Status Reports</p>
      <button>Button1</button>

    </div>

  )
}

function App() {
  return (
    <div>
      <p>
        <Details  check='&#10004;' cross='&#10006;'/>
      </p>
    </div>
  )
}

export default App