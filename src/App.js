//card_1
function Card1()
{
  return(
    <div>
      <h5>FREE</h5>
      <h1>$0/month</h1>
      <ul>
        <li>Single User</li>
        <li>5GB Storage</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        <li>Unlimited Private Projects</li>
        <li>Dedicated Phone Support</li>
        <li>Free Subdomain</li>
        <li>Monthly Status Reports</li>
      </ul>
      <button>BUTTON</button>
    </div>
  )
}

//Card_2
function Card2()
{
  return(
    <div>
      <h5>PLUS</h5>
      <h1>$9/month</h1>
      <ul>
        <li><b>5 USers</b></li>
        <li>50GB Storage</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        <li>Unlimited Private Projects</li>
        <li>Dedicated Phone Support</li>
        <li>Free Subdomain</li>
        <li>Monthly Status Reports</li>
      </ul>
      <button>BUTTON</button>
    </div>
  )
}

//Card_3
function Card3()
{
  return(
    <div>
      <h5>PRO</h5>
      <h1>$49/month</h1>
      <ul>
        <li><b>Unlimited Users</b></li>
        <li>5GB Storage</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        <li>Unlimited Private Projects</li>
        <li>Dedicated Phone Support</li>
        <li><b>Unlimited </b>Free Subdomains</li>
        <li>Monthly Status Reports</li>
      </ul>
      <button>BUTTON</button>
    </div>
  )
}


function App()
{
  return (
    <div>   
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  )
}
export default App;
