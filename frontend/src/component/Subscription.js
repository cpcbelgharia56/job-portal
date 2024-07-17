import React, { useState } from 'react'
import './Subscription.css'

const Subscription = () => {

  const [amount, setAmount] = useState(0)
  const [pakage, setPackage] = useState('')

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

  const subscribe = async () =>{
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
    //API Key: rzp_test_ND81BEh4gRO77Q
    var options = {
        "key": "rzp_test_ND81BEh4gRO77Q", // Enter the Key ID generated from the Dashboard
        "amount": amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Job Hunt", //your business name
        "description": "Subscription for "+pakage,
        "image": "jobhunts.png",
        "handler": function (response){
            alert(response.razorpay_payment_id);
        },
       
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  const selectPackage = (pkg) =>{
        if(pkg == "3")
        {
            setAmount(499)
        }
        else if(pkg == "6"){
            setAmount(799)
        }
        else{
            setAmount(999)
        }

        setPackage(pkg)
  }

  return (
    <section className="">
        
        <div className="container"> 

            

            <div className="content">
            <h1 className="title">"Unlock Opportunities, Subscribe Today!"</h1>
                <select className='mail1' onChange={(e) => selectPackage(e.target.value)}>
                    <option>Select Your Package</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                </select>
                
                <input type="text" className='mail' placeholder='Amount' value={amount} readOnly></input>
                
                <input type="submit" value="Subscribe Now" className="subscribe" onClick={subscribe}/>
            
            
        
            <h4>Package Benifits : 3 Months</h4>
            <ul>
                <li>Get early notification of your desire jobs than others</li>
                <li>Especially recommended for Working Professionals.</li>
                <li>Exclusive Job Listings.</li>
                <li>Priority Customer Support.</li>
                </ul>
                <h4>Package Benifits : 6 Months</h4>
                <ul>
                <li>Get early notification of your desire jobs than others</li>
                <li>Especially recommended for Freshers.</li>
                <li>Skill Assessment and Certifications .</li>
                <li>Exclusive Job Listings.</li>
                <li>Priority Customer Support.</li>
                </ul>
                <h4>Package Benifits : 12 Months</h4>
                <ul>
                <li>Get early notification of your desire jobs than others</li>
                <li>Especially recommended for Freshers.</li>
                <li>Skill Assessment and Certifications.</li>
                <li>Career Coaching.</li>
                <li>Networking Opportunities.</li>
                <li>Exclusive Job Listings.</li>
                <li>Interview Preparation Resources.</li>
                <li>Training and Development Programs.</li>
                <li>Priority Customer Support.</li>
                </ul>

            <p className="text">We won’t send you spam. Unsubscribe at any time.</p>
            </div>
        </div>
    </section>

  )
}

export default Subscription
