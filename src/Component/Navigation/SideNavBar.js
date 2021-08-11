// import React, { useState } from 'react'
// import './SideNavBar.css'
// import SmartPhones from './JsonData/smartphones.json'
// import FeaturesPhones from './JsonData/featuresPhones.json'
// import HomeAppliance from './JsonData/HomeAppliance.json'
// import Kitchen from './JsonData/kitchen.json'




// export default function SideNavBar() {



//   // side Nav menu 1

//     const [SideNav1, setSideNav1] = useState('close1')

//   const showSideNavMenu1=()=>{
//       if(SideNav1 === 'close1'){
//       document.getElementById('drop-down1').style.height="380px"
//       document.getElementById('drop-down1').style.padding="20px"
//       document.getElementById('drop-down1').style.zIndex="1"
//       setSideNav1("open1")
//       closeSideNavMenu2()
//       closeSideNavMenu3()
//       closeSideNavMenu4()
//       closeSideNavMenu5()
//       closeSideNavMenu6()
//       }
//       else{
//           closeSideNavMenu1()
//       }
//   }

//   const closeSideNavMenu1=()=>{
//       document.getElementById('drop-down1').style.height="0px"
//       document.getElementById('drop-down1').style.padding="0px"
//       document.getElementById('drop-down1').style.zIndex="-1"
//       setSideNav1("close1")

//   }


//   // side Nav menu 2


//   const [SideNav2, setSideNav2] = useState('close2')


//   const showSideNavMenu2=()=>{
//       if(SideNav2 === 'close2'){
//       document.getElementById('drop-down2').style.height="100px"
//       document.getElementById('drop-down2').style.padding="20px"
//       document.getElementById('drop-down2').style.zIndex="1"
//       setSideNav2("open2")
//       closeSideNavMenu1()
//       closeSideNavMenu3()
//       closeSideNavMenu4()
//       closeSideNavMenu5()
//       closeSideNavMenu6()
//       }
//       else{
//           closeSideNavMenu2()
//       }
//   }

//   const closeSideNavMenu2=()=>{
//       document.getElementById('drop-down2').style.height="0px"
//       document.getElementById('drop-down2').style.padding="0px"
//       document.getElementById('drop-down2').style.zIndex="-1"
//       setSideNav2("close2")

//   }





//       // side Nav menu 3

//       const [SideNav3, setSideNav3] = useState('close3')

//       const showSideNavMenu3=()=>{
//           if(SideNav3 === 'close3'){
//           document.getElementById('drop-down3').style.height="600px"
//           document.getElementById('drop-down3').style.padding="20px"
//           document.getElementById('drop-down3').style.zIndex="1"
//           setSideNav3("open3")
//           closeSideNavMenu1()
//           closeSideNavMenu2()
//           closeSideNavMenu4()
//           closeSideNavMenu5()
//           closeSideNavMenu6()
//           }
//           else{
//               closeSideNavMenu3()
//           }
//       }
  
//       const closeSideNavMenu3=()=>{
//           document.getElementById('drop-down3').style.height="0px"
//           document.getElementById('drop-down3').style.padding="0px"
//           document.getElementById('drop-down3').style.zIndex="-1"
//           setSideNav3("close3")
  
//       }




//               // side Nav menu 4

//               const [SideNav4, setSideNav4] = useState('close4')

//               const showSideNavMenu4=()=>{
//                   if(SideNav4 === 'close4'){
//                   document.getElementById('drop-down4').style.height="650px"
//                   document.getElementById('drop-down4').style.padding="20px"
//                   document.getElementById('drop-down4').style.zIndex="1"
//                   setSideNav4("open4")
//                   closeSideNavMenu1()
//                   closeSideNavMenu2()
//                   closeSideNavMenu3()
//                   closeSideNavMenu5()
//                   closeSideNavMenu6()
//                   }
//                   else{
//                       closeSideNavMenu4()
//                   }
//               }
          
//               const closeSideNavMenu4=()=>{
//                   document.getElementById('drop-down4').style.height="0px"
//                   document.getElementById('drop-down4').style.padding="0px"
//                   document.getElementById('drop-down4').style.zIndex="-1"
//                   setSideNav4("close4")
          
//               }



//           // side Nav menu 5

//           const [SideNav5, setSideNav5] = useState('close5')

//           const showSideNavMenu5=()=>{
//               if(SideNav5 === 'close5'){
//               document.getElementById('drop-down5').style.height="730px"
//               document.getElementById('drop-down5').style.padding="20px"
//               document.getElementById('drop-down5').style.zIndex="1"
//               setSideNav5("open5")
//               closeSideNavMenu1()
//               closeSideNavMenu2()
//               closeSideNavMenu3()
//               closeSideNavMenu4()
//               closeSideNavMenu6()
//               }
//               else{
//                   closeSideNavMenu5()
//               }
//           }
      
//           const closeSideNavMenu5=()=>{
//               document.getElementById('drop-down5').style.height="0px"
//               document.getElementById('drop-down5').style.padding="0px"
//               document.getElementById('drop-down5').style.zIndex="-1"
//               setSideNav5("close5")
      
//           }


//               // side Nav menu 6

//               const [SideNav6, setSideNav6] = useState('close6')

//               const showSideNavMenu6=()=>{
//                   if(SideNav6 === 'close6'){
//                   document.getElementById('drop-down6').style.height="650px"
//                   document.getElementById('drop-down6').style.padding="20px"
//                   document.getElementById('drop-down6').style.zIndex="1"
//                   setSideNav6("open6")
//                   closeSideNavMenu1()
//                   closeSideNavMenu2()
//                   closeSideNavMenu3()
//                   closeSideNavMenu4()
//                   closeSideNavMenu5()
//                   }
//                   else{
//                       closeSideNavMenu6()
//                   }
//               }
          
//               const closeSideNavMenu6=()=>{
//                   document.getElementById('drop-down6').style.height="0px"
//                   document.getElementById('drop-down6').style.padding="0px"
//                   document.getElementById('drop-down6').style.zIndex="-1"
//                   setSideNav6("close6")
          
//               }





//               const smartPhonesSideNav= SmartPhones.map( (e)=>
//               <div> <p> {e.smartPhones}  </p>  </div>
//           )



//           const featuresPhonesNav= FeaturesPhones.map( (e)=>
//           <div> <p>  {e.featurePhones} </p> </div>
//       )

      

//       const homeApplianceNav= HomeAppliance.map( (e)=>
//       <div> {e.items} </div>
//   )


//   const kitchenNav= Kitchen.map( (e)=>
//         <div> {e.items} </div>
//     )










//     return (
//         <div>
//             {/* <div className="nav-button">
//             <i className="fas fa-bars">   </i>
//             </div>

//             <div className="nav-name">
//                 <img src={`${window.location.origin}/images/PickabooLogo.png`} alt=""/>
//             </div>
//             <div className="nav-icon">
//                 <div> <i className="fas fa-search">   </i>  </div>
//                 <div> <div>
                    
//                 <i className="fas fa-shopping-cart"></i> </div> <div className="cart-num">  </div> </div>

//             </div> */}
        
            
//             <div className="side-nav">
//                     <div className="side-nav-top-button">
//                         <div className="side-nav-button-active"> <p>  Menu </p> </div>
//                         <div> <p> Account </p> </div>
//                     </div> 


//                     <div className="side-nav-button-parent"> 

//                         <div className="side-nav-button"> 
//                             <div  className="side-nav-button-title" onClick={closeSideNavMenu1}> <p> SmartPhones </p> </div>

//                             <div className="side-nav-drop-down" onClick={showSideNavMenu1}> 
//                                 <i className="fas fa-chevron-down"></i>   
//                             </div>

//                             <div className="side-nav-drop-down-menu" id="drop-down1">
//                                 {smartPhonesSideNav}
//                             </div>

//                         </div>






//                         <div className="side-nav-button"> 
//                             <div  className="side-nav-button-title" onClick={closeSideNavMenu2}> <p> Features Phones </p> </div>

//                             <div className="side-nav-drop-down" onClick={showSideNavMenu2}> 
//                                 <i className="fas fa-chevron-down"></i>   
//                             </div>

//                             <div className="side-nav-drop-down-menu" id="drop-down2">
//                                 {featuresPhonesNav}
//                             </div>

//                         </div>




//                         <div className="side-nav-button"> 
//                             <div  className="side-nav-button-title" onClick={closeSideNavMenu3}> <p> Electronics & Appliances</p> </div>

//                             <div className="side-nav-drop-down" onClick={showSideNavMenu3}> 
//                                 <i className="fas fa-chevron-down"></i>   
//                             </div>

//                             <div className="side-nav-drop-down-menu" id="drop-down3">
//                                 <div className="title"> Home Appliance     </div>
//                                 {homeApplianceNav}

//                                 <div className="title"> kitchen Appliance     </div>
//                                 {kitchenNav}
//                             </div>

//                         </div>









//                         <div className="side-nav-button"> 
//                             <div  className="side-nav-button-title" onClick={closeSideNavMenu4}> <p> MOBILE ACCESSORIES </p> </div>

//                             <div className="side-nav-drop-down" onClick={showSideNavMenu4}> 
//                                 <i className="fas fa-chevron-down"></i>   
//                             </div>

//                             <div className="side-nav-drop-down-menu" id="drop-down4">
                                
//                             <div> <p> Apple Accessories     </p> </div>
//                             <div> <p> Charger & Adapter      </p> </div>
//                             <div> <p> Back Cover        </p> </div>
//                             <div> <p> Data Cables        </p> </div>
//                             <div> <p> Power Cables       </p> </div>
//                             <div> <p> Power Bank     </p> </div>
//                             <div> <p> Wired Headphone      </p> </div>
//                             <div> <p> Bluetooth Headphone     </p> </div>
//                             <div> <p> Speaker    </p> </div>
//                             <div> <p> Memory Card      </p> </div>
//                             <div> <p> Action Cameras   </p> </div>
//                             <div> <p> Smart Watch  </p> </div>
//                             <div> <p> Smart Band  </p> </div>
//                             <div> <p> True Wireless Earbud  </p> </div>
//                             <div> <p> Selfie Sticks  </p> </div>
//                             <div> <p> JBL Accessories  </p> </div>
//                             <div> <p> Other Accessories  </p> </div>

//                             </div>

//                         </div>




                        



//                         <div className="side-nav-button"> 
//                             <div  className="side-nav-button-title" onClick={closeSideNavMenu5}> <p> Computer & Accessories </p> </div>

//                             <div className="side-nav-drop-down" onClick={showSideNavMenu5}> 
//                                 <i className="fas fa-chevron-down"></i>   
//                             </div>

//                             <div className="side-nav-drop-down-menu" id="drop-down5">
//                                     <div className="title"> Computer Accesories   </div>
//                                         <div> <p> Mouse   </p> </div>
//                                         <div> <p> Mouse Pad     </p> </div>
//                                         <div> <p> Refregeretor & Fridge     </p> </div>
//                                         <div> <p> Geyser/Room Heater    </p> </div>
//                                         <div> <p> Air Purifier  </p> </div>
//                                         <div> <p> Iron   </p> </div>
//                                         <div> <p> Washing Machine   </p> </div>
//                                         <div> <p> BOSCH Home Applience </p> </div>
//                                         <div> <p> Home Theater & Sound <br/> System   </p> </div>

//                                     <div className="title"> Tablet & Laptop     </div>
//                                         <div> <p> Tablet   </p> </div>
//                                         <div> <p> Printer     </p> </div>
//                                         <div> <p> Microwave Oven     </p> </div>
//                                         <div> <p> Kettle    </p> </div>
//                                         <div> <p> Rice Cooker  </p> </div>
//                                         <div> <p> Cooking Stove   </p> </div>
//                                         <div> <p> Kitchen Hood   </p> </div>
//                                         <div> <p> Consoler </p> </div>

//                             </div>

//                         </div>






//                         <div className="side-nav-button"> 
//                             <div  className="side-nav-button-title" onClick={closeSideNavMenu6}> <p> Lifestyle </p> </div>

//                             <div className="side-nav-drop-down" onClick={showSideNavMenu6}> 
//                                 <i className="fas fa-chevron-down"></i>   
//                             </div>

//                             <div className="side-nav-drop-down-menu" id="drop-down6">
//                                 <div> <p> Apple Accessories   </p> </div>
//                                 <div> <p> Charger & Adapter    </p> </div>
//                                 <div> <p> Back Cover      </p> </div>
//                                 <div> <p> Data Cables      </p> </div>
//                                 <div> <p> Power Cables     </p> </div>
//                                 <div> <p> Power Bank   </p> </div>
//                                 <div> <p> Wired Headphone    </p> </div>
//                                 <div> <p> Bluetooth Headphone   </p> </div>
//                                 <div> <p> Speaker  </p> </div>
//                                 <div> <p> Memory Card    </p> </div>
//                                 <div> <p> Action Cameras </p> </div>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//         </div>

//     )
// }
