import React, { useState } from 'react'
import './Navigation.css'
import SmartPhones from './JsonData/smartphones.json'
import FeaturesPhones from './JsonData/featuresPhones.json'
import HomeAppliance from './JsonData/HomeAppliance.json'
import Kitchen from './JsonData/kitchen.json'
import MobileAccessories from './JsonData/mobileAccessories.json'
import ComputerAccessories from "././JsonData/computerAccessories.json"
import LaptopAccessories from "././JsonData/laptopAccessories.json"
import LifeStyle from '././JsonData/lifestyle.json'


    if(window.innerWidth <= 770 ){

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 100){
        document.getElementById('navigation-parent').style.position="fixed"
        document.getElementById('navigation-parent').style.marginTop="-8vw"

        }
        else{
        document.getElementById('navigation-parent').style.position="relative"
        document.getElementById('navigation-parent').style.marginTop="0px"
        }
    })
    }

export default function Navigation() {

    // Side Bar Open Close

    const closeSideBar=()=>{
        document.getElementById('side-nav-parent').style.marginLeft="-750px"
        setTimeout(()=>{
        document.getElementById('side-nav-parent').style.display="none"
        },500)
        // document.getElementById('side-nav-parent').style.opacity="0"

    }

    const openSideBar=()=>{
        document.getElementById('side-nav-parent').style.display="grid"
        setTimeout(()=>{
        document.getElementById('side-nav-parent').style.marginLeft="-10px"
            },10)
        // document.getElementById('side-nav-parent').style.opacity="1"
    }






    //  Fetching Data from json file


    const smartPhones= SmartPhones.map( (e)=>
        <div className="btn"> {e.smartPhones} </div>
    )


    const featuresPhones= FeaturesPhones.map( (e)=>
        <div className="btn"> {e.featurePhones} </div>
    )


    const homeAppliance= HomeAppliance.map( (e)=>
        <div className="btn"> {e.items} </div>
    )

    const kitchen= Kitchen.map( (e)=>
        <div className="btn"> {e.items} </div>
    )

    const mobileAccessories= MobileAccessories.map( (e)=>
        <div className="btn"> {e.item} </div>
    )

    const computerAccessories= ComputerAccessories.map( (e)=>
        <div className="btn"> {e.item} </div>
    )

    const laptopAccessories= LaptopAccessories.map( (e)=>
        <div className="btn"> {e.item} </div>
    )

    const lifeStyle= LifeStyle.map( (e)=>
        <div className="btn"> {e.item} </div>
    )





                            // Toggleable Tab Change

                            
    const openMenu=()=>{
        document.getElementById('menu').style.display="block"
        document.getElementById('account').style.display="none"
        document.getElementById('menu-button').classList.add("side-nav-button-active")
        document.getElementById('account-button').classList.remove("side-nav-button-active")
    }

    const openAccount=()=>{
        document.getElementById('account').style.display="block"
        document.getElementById('menu').style.display="none"
        document.getElementById('account-button').classList.add("side-nav-button-active")
        document.getElementById('menu-button').classList.remove("side-nav-button-active")


    }










            // SIDE NAVIGATION MENU OPEN CLOSE 




  // side Nav menu 1

    const [SideNav1, setSideNav1] = useState('close1')

    const showSideNavMenu1=()=>{
        if(SideNav1 === 'close1'){
        document.getElementById('drop-down1').style.height="380px"
        document.getElementById('drop-down1').style.padding="20px"
        document.getElementById('drop-down1').style.zIndex="1"
        setSideNav1("open1")
        closeSideNavMenu2()
        closeSideNavMenu3()
        closeSideNavMenu4()
        closeSideNavMenu5()
        closeSideNavMenu6()
        }
        else{
            closeSideNavMenu1()
        }
    }

    const closeSideNavMenu1=()=>{
        document.getElementById('drop-down1').style.height="0px"
        document.getElementById('drop-down1').style.padding="0px"
        document.getElementById('drop-down1').style.zIndex="-1"
        setSideNav1("close1")

    }


  // side Nav menu 2


    const [SideNav2, setSideNav2] = useState('close2')


    const showSideNavMenu2=()=>{
        if(SideNav2 === 'close2'){
        document.getElementById('drop-down2').style.height="100px"
        document.getElementById('drop-down2').style.padding="20px"
        document.getElementById('drop-down2').style.zIndex="1"
        setSideNav2("open2")
        closeSideNavMenu1()
        closeSideNavMenu3()
        closeSideNavMenu4()
        closeSideNavMenu5()
        closeSideNavMenu6()
        }
        else{
            closeSideNavMenu2()
        }
    }

    const closeSideNavMenu2=()=>{
        document.getElementById('drop-down2').style.height="0px"
        document.getElementById('drop-down2').style.padding="0px"
        document.getElementById('drop-down2').style.zIndex="-1"
        setSideNav2("close2")

    }





      // side Nav menu 3

    const [SideNav3, setSideNav3] = useState('close3')

    const showSideNavMenu3=()=>{
        if(SideNav3 === 'close3'){
        document.getElementById('drop-down3').style.height="600px"
        document.getElementById('drop-down3').style.padding="20px"
        document.getElementById('drop-down3').style.zIndex="1"
        setSideNav3("open3")
        closeSideNavMenu1()
        closeSideNavMenu2()
        closeSideNavMenu4()
        closeSideNavMenu5()
        closeSideNavMenu6()
        }
        else{
            closeSideNavMenu3()
        }
    }


    const closeSideNavMenu3=()=>{
        document.getElementById('drop-down3').style.height="0px"
        document.getElementById('drop-down3').style.padding="0px"
        document.getElementById('drop-down3').style.zIndex="-1"
        setSideNav3("close3")

    }




              // side Nav menu 4

    const [SideNav4, setSideNav4] = useState('close4')

    const showSideNavMenu4=()=>{
        if(SideNav4 === 'close4'){
        document.getElementById('drop-down4').style.height="650px"
        document.getElementById('drop-down4').style.padding="20px"
        document.getElementById('drop-down4').style.zIndex="1"
        setSideNav4("open4")
        closeSideNavMenu1()
        closeSideNavMenu2()
        closeSideNavMenu3()
        closeSideNavMenu5()
        closeSideNavMenu6()
        }
        else{
            closeSideNavMenu4()
        }
    }


    const closeSideNavMenu4=()=>{
        document.getElementById('drop-down4').style.height="0px"
        document.getElementById('drop-down4').style.padding="0px"
        document.getElementById('drop-down4').style.zIndex="-1"
        setSideNav4("close4")

    }



          // side Nav menu 5

    const [SideNav5, setSideNav5] = useState('close5')

    const showSideNavMenu5=()=>{
        if(SideNav5 === 'close5'){
        document.getElementById('drop-down5').style.height="730px"
        document.getElementById('drop-down5').style.padding="20px"
        document.getElementById('drop-down5').style.zIndex="1"
        setSideNav5("open5")
        closeSideNavMenu1()
        closeSideNavMenu2()
        closeSideNavMenu3()
        closeSideNavMenu4()
        closeSideNavMenu6()
        }
        else{
            closeSideNavMenu5()
        }
    }

    const closeSideNavMenu5=()=>{
        document.getElementById('drop-down5').style.height="0px"
        document.getElementById('drop-down5').style.padding="0px"
        document.getElementById('drop-down5').style.zIndex="-1"
        setSideNav5("close5")

    }




              // side Nav menu 6

    const [SideNav6, setSideNav6] = useState('close6')

    const showSideNavMenu6=()=>{
        if(SideNav6 === 'close6'){
        document.getElementById('drop-down6').style.height="650px"
        document.getElementById('drop-down6').style.padding="20px"
        document.getElementById('drop-down6').style.zIndex="1"
        setSideNav6("open6")
        closeSideNavMenu1()
        closeSideNavMenu2()
        closeSideNavMenu3()
        closeSideNavMenu4()
        closeSideNavMenu5()
        }
        else{
            closeSideNavMenu6()
        }
    }

    const closeSideNavMenu6=()=>{
        document.getElementById('drop-down6').style.height="0px"
        document.getElementById('drop-down6').style.padding="0px"
        document.getElementById('drop-down6').style.zIndex="-1"
        setSideNav6("close6")

    }







    return (

        <>
            <div className="navigation-parent" id="navigation-parent" >

                <div className="btn nav-btn"> <span> SMARTPHONES </span>
                    <div className="nav-child">
                        {smartPhones}
                    </div>
                </div>



                <div className="btn nav-btn"> FEATURE PHONES  
                    <div className="nav-child">
                        {featuresPhones}
                    </div>
                </div>


                <div className="btn nav-btn"> ELECTRONICS & APPLIANCE 
                    <div className="nav-child-big">
                    <div className="nav-child-2">
                            <div className="title"> Home Appliance   </div>
                            {homeAppliance}
                    </div>




                    <div className="nav-child-2">
                        <div  className="title"> Kitchen Appliance   </div>
                            {kitchen}
                        </div>

                    </div>
                </div>

                <div className="btn nav-btn"> MOBILE ACCESSORIES  
                    <div className="nav-child">
                        {mobileAccessories}
                    </div>
                
                </div>

                <div className="btn nav-btn"> COMPUTER & ACCESSORIZES  
                <div className="nav-child-big">
                    <div className="nav-child-2">
                        <div className="title"> Computer Accesories   </div>
                            {computerAccessories}
                    </div>

                    <div className="nav-child-2">
                        <div  className="title"> Laptop & Notebook   </div>
                            {laptopAccessories}
                    </div>

                    </div>
                </div>
                <div className="btn nav-btn"> LIFESTYLE  
                    <div className="nav-child">
                        {lifeStyle}
                    </div>
                
                </div>











                {/* second Navigation */}

            <div className="nav-button" onClick={openSideBar}>
            <i className="fas fa-bars">   </i>
            </div>

            <div className="nav-name">
                <img src={`${window.location.origin}/images/PickabooLogo.png`} alt=""/>
            </div>
            <div className="nav-icon">
                <div> <i className="fas fa-search">   </i></div>
                <div>
                <div>

                <i className="fas fa-shopping-cart"></i> </div> <div className="cart-num">  </div> </div>

            </div>






                {/* side Navigation */}



        <div className="side-nav-parents" id="side-nav-parent">
                    <div className="nav-button-close" onClick={closeSideBar}>
                        <i className="fas fa-times">   </i>
                    </div>
    
            <div className="side-nav" >

                    <div className="side-nav-top-button">
                        <div onClick={openMenu} className="side-nav-button-active" id="menu-button">    <p>  Menu     </p>    </div>
                        <div onClick={openAccount}  id="account-button">                                <p> Account   </p>    </div>
                    </div> 


                    <div className="side-nav-button-parent" id="menu"> 

                        <div className="side-nav-button"> 
                            <div  className="side-nav-button-title" onClick={closeSideBar}> <p> SmartPhones </p> </div>

                            <div className="side-nav-drop-down" onClick={showSideNavMenu1}> 
                                <i className="fas fa-chevron-down"></i>   
                            </div>

                            <div className="side-nav-drop-down-menu" id="drop-down1">
                                {smartPhones}
                            </div>

                        </div>






                        <div className="side-nav-button"> 
                            <div  className="side-nav-button-title" onClick={closeSideBar}> <p> Features Phones </p> </div>

                            <div className="side-nav-drop-down" onClick={showSideNavMenu2}> 
                                <i className="fas fa-chevron-down"></i>   
                            </div>

                            <div className="side-nav-drop-down-menu" id="drop-down2">
                                {featuresPhones}
                            </div>

                        </div>




                        <div className="side-nav-button"> 
                            <div  className="side-nav-button-title" onClick={closeSideBar}> <p> Electronics & Appliances</p> </div>

                            <div className="side-nav-drop-down" onClick={showSideNavMenu3}> 
                                <i className="fas fa-chevron-down"></i>   
                            </div>

                            <div className="side-nav-drop-down-menu" id="drop-down3">
                                <div className="title"> Home Appliance     </div>
                                {homeAppliance}

                                <div className="title"> kitchen Appliance     </div>
                                {kitchen}
                            </div>

                        </div>





                        <div className="side-nav-button"> 
                            <div  className="side-nav-button-title" onClick={closeSideBar}> <p> MOBILE ACCESSORIES </p> </div>

                            <div className="side-nav-drop-down" onClick={showSideNavMenu4}> 
                                <i className="fas fa-chevron-down"></i>   
                            </div>

                            <div className="side-nav-drop-down-menu" id="drop-down4">

                                {mobileAccessories}

                            </div>

                        </div>





                        <div className="side-nav-button"> 
                            <div  className="side-nav-button-title" onClick={closeSideBar}> <p> Computer & Accessories </p> </div>

                            <div className="side-nav-drop-down" onClick={showSideNavMenu5}> 
                                <i className="fas fa-chevron-down"></i>   
                            </div>

                            <div className="side-nav-drop-down-menu" id="drop-down5">
                                    <div className="title"> Computer Accesories   </div>
                                        {computerAccessories}

                                    <div className="title"> Tablet & Laptop     </div>
                                        {laptopAccessories}

                            </div>

                        </div>






                        <div className="side-nav-button"> 
                            <div  className="side-nav-button-title" onClick={closeSideBar}> <p> Lifestyle </p> </div>

                            <div className="side-nav-drop-down" onClick={showSideNavMenu6}> 
                                <i className="fas fa-chevron-down"></i>   
                            </div>

                            <div className="side-nav-drop-down-menu" id="drop-down6">
                                {lifeStyle}
                            </div>

                        </div>

                    </div>



            {/* Toggle rab two */}

                    <div className="tab-account" id="account">

                        <div className="account-item"> <i className="fas fa-unlock"></i>  <p> Log In  </p> </div>
                        <div className="account-item"> <i className="fas fa-key"></i>  <p> Register  </p> </div>
                        <div className="account-item"> <i className="fas fa-heart"></i>  <p> Wishlist()  </p> </div>

                    </div>



                </div>

                </div>


            </div>

        </>
    )
}
