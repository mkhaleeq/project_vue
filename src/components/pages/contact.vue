<template>
     <div class="contactback">

     <div id="contact" class="response">
         <div class="get">
        <h1>GET IMMEDIATE RESPONSE FROM RPL TECHNO</h1>
         </div>
     </div>
     <div class="contactform">
         <form action="push" target="">
                <label for="fname">Name</label>
                <br>
                    <input type="text" id="fname" name="fname" placeholder="Full Name">
                    <br>
                    <br>
                <label for="mail">Email</label>
                <br>
                    <input type="email" id="mail" name="mail" placeholder="Example@gmail.com">
                    <br>
                    <br>
                <label for="moblie">Phone Number</label> 
                <br>
                    <input type="text" id="mobile" name="mobile" placeholder="+91"> 
                    <br>
                    <br>
                <label for="message">Message</label>
                <br>
                    <textarea id="message" name="message" placeholder="Text here">
                    </textarea>
                        <br>
                        <br>
                        <div class="send" id="sub ">
                            <br>
                    <button type="submit" href="/">Submit</button>
                        </div>
             </form>
   
         </div>
         <div class="ways">
             <h3>OTHER WAYS TO</h3>
             <h4>CONTACT US</h4>
         </div>
         <div class="container">
            <ul class="no_bullet">
                <li class="whatsapp">7795598779</li>
                <li class="mailid"><a href="https://info@rpltechno.com">info@rpltechno.com</a></li>
                <li class="browser"><a href="https://www.rpltechno.com">www.rpltechno.com</a></li>
                <li class="facebook"><a href="#">RPLTechno</a></li>
                <li class="twitter"><a href="#">RPLTechno_tech</a></li>
                <li class="instagram"> <a href="#">_RPLTechno</a></li>
            </ul> 
         </div>     
    </div>

</template>
<script>
export default {
    
}
</script>
<style>
*{
    margin:  0;
    padding: 0;
}
.contactback
{
    top: 0px;
    left: 0px;
    width: 360px;
    height: 1318px;
    background: #05103A 0% 0% no-repeat padding-box;
    opacity: 1;
}
.get h1{
    padding-top: 90px;
    margin-left: 210px;
    width: 200px;
    height: 77px;
    text-align: center;
    font: normal normal bold 20px/24px Ubuntu;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
.response{
    top: 104px;
    margin-left: -77.5810546875px;
    width: 237px;
    height: 294px;
    background: transparent url('E:/projects/project_vue/src/assets/contact.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
.contactform{
    
    margin-left:70PX;
    margin-right:70PX;
    top: 429px;
    left: 60px;
    width: 96px;
    height: 17px;
    text-align: left;
    font: normal normal normal 13px/17px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 0.89;
}

input.placeholder{
    padding-left: 10px;
    top: 458px;
    left: 60px;
    width: 58px;
    height: 17px;
    text-align:  left;
    font: normal normal normal 13px/17px Segoe UI;
    letter-spacing: 0px;
    color: #05103A;
    opacity: 0.33;
}
#fname{
    margin-left: -20px;
    top: 449px;
    left: 50px;
    width: 260px;
    height: 35px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 5px;
    outline: none;
    opacity: 1; 
}

#mail{
    margin-left: -20px;
    top: 522px;
    left: 50px;
    width: 260px;
    height: 35px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 5px;
    outline: none;
    opacity: 1;
}
#mobile{
    margin-left: -20px;
    top: 595px;
    left: 50px;
    width: 260px;
    height: 35px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 5px;
    outline: none;
    opacity: 1;
}
#message{
    margin-left: -20px;
    top: 668px;
    left: 50px;
    width: 260px;
    height: 77px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 3px;
    outline:none;
    opacity: 1;
}
.send button{
    margin:-20px;
    top: 763px;
    left: 51px;
    width: 260px;
    height: 40px;
    background: #87FFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #000720;
    border-radius: 5px;
    font: normal normal medium 15px/35px Ubuntu;
    letter-spacing: 0px;
    color: #071E3D;
    opacity: 1;
}

.ways h3{
    margin-top: 420px;
    margin-left:110px;
    top: 0px;
    left: 0px;
    width: 150px;
    height: 22px;
    text-align: center;
    font: normal normal normal 17px/27px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
}
.ways h4{
    margin-left:123px;
    top: 22px;
    left: 0px;
    width: 123px;
    height: 27px;
    text-align: center;
    font: normal normal bold 20px/27px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
}
ul.no_bullet {
    list-style-type: none;
    color: #FFFFFF;
    padding: 0;
    margin: 0;
}
.container{
    margin-top: 10px;
    padding-top: 4px;
    top: 923px;
    left: 51px;
    width: 259px;
    height: 274px;
    background: #05103A 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #000516;
    border-radius: 263px;
    opacity: 1;
}
li{
    padding-left: 20px;
    top: 964px;
    left: 124px;
    width: 82px;
    height: 20px;
    text-align: left;
    font: normal normal 600 15px/20px Segoe UI;
    letter-spacing: 0px;
    color: #D2D2D2;
    opacity: 1;
}
.whatsapp{
    padding-left: 30px;
    margin-top: 40px;
    margin-left: 100px;
    top: 864px;
    left: 99px;
    width: 18px;
    height: 18px;
    background: transparent url('E:/projects/project_vue/src/assets/whatsapp.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
a{
    color: #FFFFFF;
}
.mailid{
    padding-left: 30px;
    margin-top: 15px;;
    margin-left: 100px;
    top: 1200px;
    left: 99px;
    width: 18px;
    height: 18px;
    background: transparent url('E:/projects/project_vue/src/assets/messaging.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
.browser{
    padding-left: 30px;
    margin-top: 15px;;
    margin-left: 100px;
    top: 1037px;
    left: 99px;
    width: 18px;
    height: 18px;
    background: transparent url('E:/projects/project_vue/src/assets/browser.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
.facebook{
    padding-left: 30px;
     margin-top: 15px;;
    margin-left: 100px;
    top: 1074px;
    left: 99px;
    width: 17px;
    height: 17px;
    background: transparent url('E:/projects/project_vue/src/assets/facebook.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
.twitter{
    padding-left: 30px;
    margin-top: 15px;;
    margin-left: 100px;
    top: 1107px;
    left: 99px;
    width: 17px;
    height: 17px;
    background: transparent url('E:/projects/project_vue/src/assets/twitter.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
.instagram{
    padding-left: 30px;
    margin-top: 15px;;
    margin-left: 100px;
    top: 1142px;
    left: 99px;
    width: 17px;
    height: 17px;
    background: transparent url('E:/projects/project_vue/src/assets/instagram.png') 0% 0% no-repeat padding-box;
    opacity: 1;  
}
</style>
