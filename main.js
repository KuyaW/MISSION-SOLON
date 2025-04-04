 // for about us animation ---------------------------------

    // This is for my navigation - header part
    function showLinks(){
        let myLinkss = document.getElementsByClassName('myLinks');

        let time = 750;

        for (const myLinks of myLinkss) {
            setTimeout(function(){
                myLinks.style.top = "0px";
            }, time);
            time -= 125;
        }
    }


    function showleftSideElement(){
        let leftSideElements = document.getElementsByClassName('leftSideElement');

        let time = 500;

        for (const leftSideElement of leftSideElements) {
            setTimeout(function(){
                leftSideElement.style.top = "0px";
            }, time);
            time += 125;
          
        }
    }

    // This is for my first about us
    function showmainLeftSideElement(){
        let mainLeftSideElements = document.getElementsByClassName('mainLeftSideElement');

        let time = 500;

        for (const mainLeftSideElement of mainLeftSideElements) {
            setTimeout(function(){
                mainLeftSideElement.style.left = "0px";
            }, time);
            time += 125;
        
        }
    }


    function showmainRightSideElement(){
        let mainRightSideElements = document.getElementsByClassName('mainRightSideElement');

        let time = 750;

        for (const mainRightSideElement of mainRightSideElements) {
            setTimeout(function(){
                mainRightSideElement.style.right = "0px";
            }, time);
            time -= 125;
        }
    }

    function removeStylingFirst(){
        let mainLeftSideElements = document.getElementsByClassName('mainLeftSideElement');
        let mainRightSideElements = document.getElementsByClassName('mainRightSideElement');

        for (const mainLeftSideElement of mainLeftSideElements) {
            mainLeftSideElement.style = "";
        }

        for (const mainRightSideElement of mainRightSideElements) {
            mainRightSideElement.style = "";
        }

        let first = document.getElementById('first');

        setTimeout(function(){
            
            first.style.opacity = "0";
            first.style = ""
        }, 100)
    }

    // This is for my first about us
    function showSecondmainLeftSideElement(){
        let mainLeftSideElements = document.getElementsByClassName('secondMainLeftSideElement');

        let time = 500;

        for (const mainLeftSideElement of mainLeftSideElements) {
            setTimeout(function(){
                mainLeftSideElement.style.right = "0px";
            }, time);
            time += 125;
        
        }
    }


    function showSecondmainRightSideElement(){
        let mainRightSideElements = document.getElementsByClassName('secondMainRightSideElement');

        let time = 750;

        for (const mainRightSideElement of mainRightSideElements) {
            setTimeout(function(){
                mainRightSideElement.style.left = "0px";
            }, time);
            time -= 125;
        }
    }

    function removeStylingSecond(){
        let mainLeftSideElements = document.getElementsByClassName('secondMainLeftSideElement');
        let mainRightSideElements = document.getElementsByClassName('secondMainRightSideElement');

        for (const mainLeftSideElement of mainLeftSideElements) {
            mainLeftSideElement.style = "";
        }

        for (const mainRightSideElement of mainRightSideElements) {
            mainRightSideElement.style = "";
        }

        let second = document.getElementById('second');

        setTimeout(function(){
            second.style = "";
        }, 200)

        
    }


    function aboutUsSecond(){
        showSecondmainLeftSideElement();
        showSecondmainRightSideElement();

        let second = document.getElementById('second');

        setTimeout(function(){
            second.style.transform = "scale(1)";
        }, 200)
    }


    function aboutUSAnimation(){
        let first = document.getElementById('first');

        setTimeout(function(){
            
            first.style.opacity = "1";
            first.style.top = "0px";
        }, 200)

        showLinks();

        showleftSideElement();

        showmainLeftSideElement();

        showmainRightSideElement();
    }

    // aboutUSAnimation();


    function contactUsAnimationLeft(){
        let leftSideContacts = document.getElementsByClassName('leftSideContact');

        let time = 750;

        for (const leftSideContact of leftSideContacts) {
            setTimeout(function(){
                leftSideContact.style.left = "0px";
            }, time);
            time -= 125;
        }
    }

    function contactUsAnimationRight(){
        let rightSideContacts = document.getElementsByClassName('rightSideContact');

        let time = 750;

        for (const rightSideContact of rightSideContacts) {
            setTimeout(function(){
                rightSideContact.style.right = "0px";
            }, time);
            time -= 125;
        }
    }

    function removeStylingContact(){
        let leftSideContacts = document.getElementsByClassName('leftSideContact');
        let rightSideContacts = document.getElementsByClassName('rightSideContact');

        for (const leftSideContact of leftSideContacts) {
            leftSideContact.style = "";
        }

        for (const rightSideContact of rightSideContacts) {
            rightSideContact.style = "";
        }

        let contactUS = document.getElementById("contactUS");

        setTimeout(function(){
            contactUS.style = "";
        }, 100);
    }

    function contactUsAnimation(){
        contactUsAnimationLeft();
        contactUsAnimationRight();

        let contactUS = document.getElementById("contactUS");

        setTimeout(function(){
            contactUS.style.bottom = "0px";
        }, 500);
    }


    // Information SOLON 

    function showInformationLeft(){
        let infoLefts = document.getElementsByClassName('infoLeft');

        let time = 750;

        for (const infoLeft of infoLefts) {
            setTimeout(function(){
                infoLeft.style.left = "0px";
            }, time);
            time -= 125;
        }
    }

    function showInformationRight(){
        let infoRights = document.getElementsByClassName('infoRight');

        let time = 500;

        for (const infoRight of infoRights) {
            setTimeout(function(){
                infoRight.style.right = "0px";
            }, time);
            time += 125;
        }
    }

    function showInformation(){
        showInformationLeft();
        showInformationRight();


    }

    function showLeftRight(elem){
        elem.parentElement.parentElement.children[0].style.filter = "blur(20px)";
        elem.parentElement.parentElement.children[1].style.filter = "blur(20px)";
    

        let aboutMeLeft = document.getElementById('aboutMeLeft');
        let aboutMeRight = document.getElementById('aboutMeRight');

        let toAbsolute = document.getElementById('toAbsolute');

        toAbsolute.style.top = '0px';

        setTimeout(function(){
            aboutMeLeft.style.top = "0px";
            aboutMeRight.style.bottom = "0px";
        }, 500);

        setTimeout(function(){
            showInformation();
        }, 750);

        
    }

    function removeStylingInfo(elem){
        


        let infoLefts = document.getElementsByClassName('infoLeft');
        let infoRights = document.getElementsByClassName('infoRight');
        let aboutMeLeft = document.getElementById('aboutMeLeft');
        let aboutMeRight = document.getElementById('aboutMeRight');

        let toAbsolute = document.getElementById('toAbsolute');

        let time = 500;

        for (const infoLeft of infoLefts) {
            setTimeout(() => {
                infoLeft.style = "";
            }, time);
            time += 200;
        }

        time = 500;

        for (const infoRight of infoRights) {
            setTimeout(() => {
                infoRight.style = "";
            }, time);
            time += 200;
        }

        time += 200;

        setTimeout(() => {
            aboutMeLeft.style = "";
            aboutMeRight.style = "";
        }, time);

        time += 200;

        setTimeout(() => {
            elem.parentElement.parentElement.children[0].style.filter = "blur(0px)";
            elem.parentElement.parentElement.children[1].style.filter = "blur(0px)";
            toAbsolute.style = "";
        }, time);


    }

    // Mission About ME


    function showInformationLeft1(){
        let infoLefts = document.getElementsByClassName('infoLeft1');

        let time = 750;

        for (const infoLeft of infoLefts) {
            setTimeout(function(){
                infoLeft.style.left = "0px";
            }, time);
            time -= 125;
        }
    }

    function showInformationRight1(){
        let infoRights = document.getElementsByClassName('infoRight1');

        let time = 750;

        for (const infoRight of infoRights) {
            setTimeout(function(){
                infoRight.style.right = "0px";
            }, time);
            time -= 125;
        }
    }

    function showInformation1(){
        showInformationLeft1();
        showInformationRight1();


    }

    function showLeftRight1(elem){
        elem.parentElement.parentElement.children[0].style.filter = "blur(20px)";
        elem.parentElement.parentElement.children[1].style.filter = "blur(20px)";

        let aboutMeLeft1 = document.getElementById('aboutMeLeft1');
        let aboutMeRight1 = document.getElementById('aboutMeRight1');

        let toAbsolute1 = document.getElementById('toAbsolute1');

        toAbsolute1.style.top = '0px';

        setTimeout(function(){
            aboutMeLeft1.style.top = "0px";
            aboutMeRight1.style.bottom = "0px";
        }, 500);

        setTimeout(function(){
            showInformation1();
        }, 750);

        
    }

    function removeStylingInfo1(elem){
        let infoLefts = document.getElementsByClassName('infoLeft1');
        let infoRights = document.getElementsByClassName('infoRight1');
        let aboutMeLeft = document.getElementById('aboutMeLeft1');
        let aboutMeRight = document.getElementById('aboutMeRight1');

        let toAbsolute = document.getElementById('toAbsolute1');

        let time = 500;

        for (const infoLeft of infoLefts) {
            setTimeout(() => {
                infoLeft.style = "";
            }, time);
            time += 200;
        }

        time = 500;

        for (const infoRight of infoRights) {
            setTimeout(() => {
                infoRight.style = "";
            }, time);
            time += 200;
        }

        time += 200;

        setTimeout(() => {
            aboutMeLeft.style = "";
            aboutMeRight.style = "";
        }, time);

        time += 200;

        setTimeout(() => {
            elem.parentElement.parentElement.children[0].style.filter = "blur(0px)";
            elem.parentElement.parentElement.children[1].style.filter = "blur(0px)";
            toAbsolute.style = "";
        }, time);


    }
    

    // ------------------------------------- for about us animation


    // for project Section
    let current = 0;
    let myProjectBoxs = document.getElementsByClassName('myProjectBox');
    let rightButton = document.getElementById('rightButton');
    let leftButton = document.getElementById('leftButton');


    function addLeft(){
        for (const myProjectBox of myProjectBoxs) {
            myProjectBox.style.left = "200dvw";
        }

        myProjectBoxs[0].style.width = "400px";
        myProjectBoxs[0].style.height = "400px";
        myProjectBoxs[0].style.left = "50%";

        checkCurrentCount();

    }

    function hideButtons(){
        rightButton.style.display = "none";
        leftButton.style.display = "none";

        setTimeout(function(){
            rightButton.style.display = "flex";
            leftButton.style.display = "flex";
        }, 2000);
    }

    function addAnimation(){

        hideButtons();
        

        myProjectBoxs[current].style.width = "200px";
        myProjectBoxs[current].style.height = "200px";

        setTimeout(function(){
            myProjectBoxs[current + 1].style.left = "calc(50% + 200px)"
        }, 500);

        setTimeout(function(){
            myProjectBoxs[current + 1].style.left = "100dvw";
        }, 900);

        setTimeout(function(){
            myProjectBoxs[current + 1].style.left = "50%";
        }, 1400);

        setTimeout(function(){
            myProjectBoxs[current + 1].style.width = "400px";
            myProjectBoxs[current + 1].style.height = "400px";

            console.log(current + " == " + (myProjectBoxs.length - 1));

            // if(current == 3){
            //     console.log("stop");
            //     rightButton.style.display = "none";
            // }
            

            if(current < (myProjectBoxs.length - 1)){
                current++;
                checkCurrentCount();
            } 

        }, 2000);

        setTimeout(function(){
            myProjectBoxs[current].style.left = "-100dvw";
        }, 1600);

      
        

    }

    
    function minusAnimation(){

        
        
        hideButtons();

        myProjectBoxs[current].style.width = "200px";
        myProjectBoxs[current].style.height = "200px";

        setTimeout(function(){
            myProjectBoxs[current - 1].style.left = "calc(50% - 200px)"
        }, 500);

        setTimeout(function(){
            myProjectBoxs[current - 1].style.left = "-100dvw";
        }, 900);

        setTimeout(function(){
            myProjectBoxs[current - 1].style.left = "50%";
        }, 1400);

        setTimeout(function(){
            myProjectBoxs[current - 1].style.width = "400px";
            myProjectBoxs[current - 1].style.height = "400px";

            

            

            if(current > 0){
                current--;
                if(current == 0){
                    console.log('zero');
                    leftButton.style.display = "none!important";
                    leftButton.style.width  = "0px";
                    
                }
                
            }
        }, 1900);

        setTimeout(function(){
            myProjectBoxs[current].style.left = "200dvw";
        }, 1600);

      


        console.log(current);
    }

    function checkCurrentCount(){
        if(current == 0){
            leftButton.style.display = "none";
            console.log("to hide 0");
        }else if(current == 7){
            rightButton.style.display = "none";
        }else {
            leftButton.style.display = "block";
            rightButton.style.display = "block";
            leftButton.style.width = "50px";
            console.log("override");
        }
    }

    addLeft();



    // For Projects


    // let workBoxContents = document.getElementsByClassName('workBoxContent');

    // workBoxContents[0].style.top = "200px";

    function addRandomColor(){
        let workBoxs = document.getElementsByClassName('workBox');

        for (const workBox of workBoxs) {
            let color1 = Math.floor(Math.random() * 255 + 125);
            let color2 = Math.floor(Math.random() * 255 + 125);
            let color3 = Math.floor(Math.random() * 255 + 125);

           
            workBox.style.backgroundColor = `rgba(${color1}, ${color2}, ${color3}, 0.5)`;
            workBox.style.boxShadow = `0px 0px 5px rgba(${color1}, ${color2}, ${color3}, 0.5)`;
            

        }
    }


    function randomColor(){
        let workBoxs = document.getElementsByClassName('workBox');
        let isTrue = true;

        for (const workBox of workBoxs) {
            let color1 = Math.floor(Math.random() * 255 + 125);
            let color2 = Math.floor(Math.random() * 255 + 125);
            let color3 = Math.floor(Math.random() * 255 + 125);

            let sign = "";

            let rotateNumber = Math.floor(Math.random() * 35);
            // let trueOrFalse = Math.floor(Math.random() * 20);

            if(isTrue){
                sign = "";
            }else{
                sign = "-";
            }

            console.log(isTrue);

            workBox.style.transform = `rotate(${sign}${rotateNumber}deg)`;


            workBox.style.backgroundColor = `rgba(${color1}, ${color2}, ${color3}, 0.5)`;
            workBox.style.boxShadow = `0px 0px 5px rgba(${color1}, ${color2}, ${color3}, 0.5)`;
            console.log(`rgba(${color1}, ${color2}, ${color3}, 0.5)`);

            isTrue = !isTrue;
        }
    }


    function addRotateAnimation(){
        let workBoxs = document.getElementsByClassName('workBox');

        let myOptions = ["top", "right", "bottom", "left"];
        let current = 0;

        for (const workBox of workBoxs) {
            if(current == 4){
                current = 0;
            }
            eval(`workBox.style.${myOptions[current]} = '-200dvw'`);
            current++;
        }
    }

    function removeRelative(elem){
        elem.style.display = "none";

        let workBoxs = document.getElementsByClassName('workBox');

        let myOptions = ["top", "right", "bottom", "left"];
        let current = 0;


        let time = 500;

        for (const workBox of workBoxs) {
            
            setTimeout(function(){
                if(current == 4){
                    current = 0;
                }
                eval(`workBox.style.${myOptions[current]} = '0'`);
                // setTimeout(function(){
                //     workBox.style.transform = "rotate(0deg)";
                // }, 250);
                current++;
            }, time);
            time += 500;
        }

        time += 250;

        setTimeout(function(){
            lineUp();
        }, time)
    }


    function lineUp(){
        let workBoxs = document.getElementsByClassName('workBox');

        let time = 500;
        let currentMargin = 20;
        let targetElement = 0;
        let current = 0;
        

        for (const workBox of workBoxs) {
            console.log("Target : " + workBoxs.length - 1 + " == " + targetElement);
            
            setTimeout(function(){

                if(current == 4){
                    current = 0;
                }
                // eval(`workBox.style. = 'margin-left: ${currentMargin}px'`);

                workBox.style = `transform: rotate(0deg); margin-left: ${currentMargin}px;`;
                let color1 = Math.floor(Math.random() * 255 + 125);
                let color2 = Math.floor(Math.random() * 255 + 125);
                let color3 = Math.floor(Math.random() * 255 + 125);

            
                workBox.style.backgroundColor = `rgba(${color1}, ${color2}, ${color3}, 0.5)`;
                workBox.style.boxShadow = `0px 0px 5px rgba(${color1}, ${color2}, ${color3}, 0.5)`;
                // workBox.style.transform = `rotate(0deg)`;
                // workBox.style.marginLeft = `${currentMargin}px`;
                // workBox.style.right = `0`;

                // setTimeout(function(){
                //     workBox.style.transform = "rotate(0deg)";
                // }, 250);
                current++;
                currentMargin += 320;

                if(targetElement == (workBoxs.length - 1)){
                    workBox.style.marginRight = '600px';
                    console.log("I was called");
                }

               
                
            }, time);
            time += 500;
            targetElement++;
        }

        let workSectionHolder = document.getElementById('workSectionHolder');

        workSectionHolder.style.overflowX = 'auto';

        

        addRandomColor();

        
    }

    randomColor();

    addRotateAnimation();


    // Scrooll Listener 
    window.onscroll = function() {myScrollListener()};

    

    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let projectSection = document.getElementById('projectSection');
    let workSection = document.getElementById('workSection');
    // let projectSection = document.getElementById('projectSection');

    let firstState = true ;
    let secondState = false ;
    let thirdState = false ;
    let fourthState = false ;

    let targetElementsArray = ['second', 'projectSection', 'workSection']


    // let currentTargetElement = 'workSection';
    let currentTargetElement = 0;
    let workSectionBool = false;
    // #workSection, #second, #projectSection, #workSection



    function myScrollListener() {
        let myScroll = document.documentElement.scrollTop;




        console.log(myScroll + " == " +  window.innerHeight);


        if(myScroll < (window.innerHeight / 2)){
            // This is about us (bryan);
            console.log("Bryan");
            // second.style.display = "none";
            // projectSection.style.display = "none";
            // workSection.style.display = "none";
            aboutUSAnimation();
            removeStylingSecond();
        }else if(myScroll > ( window.innerHeight / 2) && myScroll < (window.innerHeight + window.innerHeight / 2)){
            // This is about us (second)
            console.log("Second");
            aboutUsSecond();
            removeStylingFirst();

            projectSection.style = "";
            // projectSection.style.display = "none";
            // workSection.style.display = "none";
        }else if(myScroll > ( window.innerHeight + window.innerHeight / 2) && myScroll < ((window.innerHeight * 2) + window.innerHeight / 2)){
            // This is about us (second)
            console.log("Third");
            removeStylingSecond();
            projectSection.style.left = "0";
            workSection.style ="";
            // addRotateAnimation();
            // workSection.style.display = "none";
        }else if(myScroll > ((window.innerHeight * 2) + window.innerHeight / 2) && myScroll < ((window.innerHeight * 3) + window.innerHeight / 2)){
            // This is about us (second)
            console.log("Fourth");
            projectSection.style = "";
            workSection.style.right ="0";
            removeStylingContact();
        }else if(myScroll > ((window.innerHeight * 3) + window.innerHeight / 2) && myScroll < ((window.innerHeight * 4) + window.innerHeight / 2)){
            // This is about us (second)
            console.log("Fifth");
            workSection.style ="";
            contactUsAnimation();
            
        }

     

        // This is the same
        // console.log(window.innerHeight)
        // console.log(document.getElementsByTagName('main')[0].clientHeight);
        
        // Reach bottom
        // console.log(document.body.clientHeight - window.innerHeight) 

        console.log(document.documentElement.scrollTop + " == " +  document.body.clientHeight - window.innerHeight)
        if (document.documentElement.scrollTop  ==  document.body.clientHeight - window.innerHeight) {
            console.log("here");

           

            if(targetElementsArray[currentTargetElement] == "second"){
                eval(`document.getElementById("${targetElementsArray[currentTargetElement]}").style.display = 'flex'`);
            }else{
                eval(`document.getElementById("${targetElementsArray[currentTargetElement]}").style.display = 'block'`);
            }

            

            if( currentTargetElement == "workSection"){
                workSectionBool = true;
            }

                currentTargetElement++;

           
        }
    }


    // my loader--------------------------------------------

    let myAnimation = document.getElementById("myAnimation");
          let spans = myAnimation.getElementsByTagName("span");
          let myLoader = document.getElementById("myLoader");
        //   let toClick = document.getElementById("toClick");
          let wholeContent = document.getElementById("wholeContent");
        //   let linkClicker = document.getElementById('linkClicker');

          let previousY = 0;
        //   let navbar = document.getElementById("navbar");
          let sticky;
        //   let toTop = document.getElementById("toTop");

          let timeInterval;

          let tdLength = spans.length;
          let totalCalls = 1;
          let times = 1;
          for (let td of spans) {
               timeInterval = setInterval(function () {
                    animate1 = setTimeout(function () {
                         let firstParameter = Math.floor(
                              Math.random() * 255 + 1
                         );
                         let secondParameter = Math.floor(
                              Math.random() * 255 + 1
                         );
                         let thirdParameter = Math.floor(
                              Math.random() * 255 + 1
                         );
                         if(firstParameter < 255 / 2){
                              firstParameter += 50;
                         }
                         if(secondParameter < 255 / 2){
                              secondParameter += 50;
                         }
                         if(thirdParameter < 255 / 2){
                              thirdParameter += 50;
                         }
                         td.style.padding = `20px 0px`;
                         setTimeout(function () {
                              td.style.padding = `0px 0px`;
                         }, 100);
                         td.style.background = `rgba(${firstParameter},${secondParameter},${thirdParameter}, 0.4)`;
                         td.style.boxShadow = `0px 0px 20px rgba(${firstParameter},${secondParameter},${thirdParameter}, 0.4)`;
                         td.style.color = `rgba(${firstParameter},${secondParameter},${thirdParameter}, 1)`;
                         td.style.textShadow = `0px 0px 10px rgba(${firstParameter},${secondParameter},${thirdParameter}, 0.7)`;
                        td.style.transform = "translateY(-30px)";
                            setTimeout(function(){
                            td.style.transform = "translateY(0px)";
                         }, 200)
                         totalCalls++;
                         // 42
                         if (totalCalls == 12) {
                              stop();
                              
                         }
                    }, 150 * times);
                    times++;
               }, tdLength * 150);
          }

          function stop() {
              aboutUSAnimation();
               myLoader.style.height = "0px";
               wholeContent.style.display = "block";
               window.clearInterval(timeInterval);
            //    linkClicker.click();
            //    sticky = navbar.offsetTop;
          }


        //   --------------------------------------------


        // let workSectionHolder = document.getElementById('workSectionHolder');

        workSectionHolder.onscroll = function(){
            myScrollListenerWork(this);
        }

        function myScrollListenerWork(elem){
            let myScroll = elem.scrollLeft;

            let workBoxs = document.getElementsByClassName('workBox');

            console.log();

            let targetElement = Math.round(myScroll / 300);

            console.log(myScroll + ' ==  ' + targetElement);

            for (const workBox of workBoxs) {
                workBox.style.transform = "scale(1)";
            }

            workBoxs[targetElement].style.transform = "scale(1.2)";


        }
// ------------------------------------------------------------



