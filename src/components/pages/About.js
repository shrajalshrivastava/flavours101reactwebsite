import React, { Component } from 'react'
import About from"../AboutSection/About"
import Contact from"../AboutSection/contact"
import Location from"../AboutSection/Location"
import img1 from"../../images/comfort-food-concept_23-2148522490.jpg"
import img2 from"../../images/onclick.jpg"
import img3 from"../../images/vehicle.jpg"
import img4 from '../../images/th (1).jpg'
import img5 from'../../images/images.png'
import img6 from'../../images/phone.png'
import '../../App.css'
import Footer from'../Footer/Footer'
class AboutSection extends Component{
    render(){
        return(
           
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="  col-xm-12 col-sm-12 col-md-6 col-lg-4 ">
                        <About  imgsrc="https://images.unsplash.com/photo-1575390960549-1fb36d0c6665?ixlib
                =rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" title="Modern Design" desc="As the world is modernising we are too. Our Restaurant design is not just restricted to interior design. From creating the concept narrative to branding, designing logos, menus, uniforms etc., each touchpoint for the guests are curated and imbued with a consistent theme for a great experience. 
                you will see a lot of more interactive & unexpected elements like repurposed objects/ pop-art etc creating a more casual environment that fosters the ongoing trend of instagramable spaces for visual consumption."/>
                        </div>
                        <div className=" col-xm-12 col-sm-12 col-md-6 col-lg-4 ">
                        <About imgsrc="https://s3.envato.com/files/188667123/Preview%20Image%20Set/Rustic%20Bifold%20Restaurant%20Menu_Backside.jpg" title="International Menu" desc="Food is like an adventure which every foody should explore. Here we provide the famous cuisines from all around the world.
Some of our famous cuisines are French, Korean and Indian which all are known for their uniqness served in the way you like with prices as low as possible. 
From full course, appetizers, to deserts we have everything you name it we serve it.
All the dishes are prepared by our team of Chefs, where each of them are accompained with making dishes of more than 2 cuisines.
"/>
                        </div>
                        <div className="col-xm-12 col-sm-12 col-md-6 col-lg-4 ">
                        <About imgsrc="https://images.unsplash.com/photo-1526470303-82c787d88682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" title="Fresh Vegitables" desc="The quality of ingredients used for preparation of our dishes are all quality assured. we take a lot of care to serve only the dishes prepared by the best of 
ingredients. The vegetables are all organic and are all quality checked. The ingredients are supplied on daily basis so are all fresh, and are preserved in top notch
frezers to keep them in optimal condition throughout the day.
The food is made such that Most vegetables are naturally low in fat and calories. None have cholesterol. filled with many nutrients, including potassium. "/>
                    </div >
                    <div className=" col-xm-12 col-sm-12 col-md-6 col-lg-4 contact " >
                    <br/>
                        <Contact imgsrc={img1 }  title="Pick Meals" desc="Choose your meals from our diverse  weekly menu. Find dairy free,  low carb & veggie options. "/>
                    </div>
                    <div className=" col-xm-12 col-sm-12 col-md-6 col-lg-4 " >
                       <br/>
                        <Contact imgsrc={img2} title="Choose How Often" desc="Our team of chefs do the prep work no more chopping, 
                             measuring, sink full of
                              dishes.!"/>
                    </div>
                    <div className=" col-xm-12 col-sm-12 col-md-6 col-lg-4 " >
                    <br/>
                        <Contact imgsrc={img3} title=" Fast Deliveries " desc="Your freshly prepared food kits arrive on your doorstep in a seal 
                        packed box."/>
                    </div>
                    <div className=" col-xm-12 col-sm-12 col-md-6 col-lg-4 " >
                    <br/>
                        <Location imgsrc={img4}  title=" 10:00 AM - 11:30 PM " desc="Working Hours."/>
                    </div>
                    <div className=" col-xm-12 col-sm-12 col-md-6 col-lg-4 " >
                    <br/>
                        <Location imgsrc={img5}  title=" Marine Drive " desc="Location"/>
                    </div>
                    <div className=" col-xm-12 col-sm-12 col-md-6 col-lg-4 " >
                    <br/>
                        <Location imgsrc={img6}  title=" +91 8454784798 " desc="Contact Number"/>
                    </div>
                    <Footer/>
             </div>
            </div>
            
        );
    }
}
export default AboutSection