// var listOfAnswers = document.querySelectorAll("h4").length;

// for (i = 0; i < listOfAnswers; i++) {
//     document.querySelectorAll("h4")[i].addEventListener("click", function () {

//         dropDown(this.classList[0]);

//         function dropDown(nameOfClass) {
//             if (document.querySelector(".arrow4").classList[1] == "arrow") {
//                 document.querySelector(".arrow4").classList.add("arrow-up");
//             }
//             else if (document.querySelector(".arrow3").classList[1] == "arrow") {
//                 document.querySelector(".arrow3").classList.add("arrow-up");
//             }
//             else if (document.querySelector(".arrow2").classList[1] == "arrow") {
//                 document.querySelector(".arrow2").classList.add("arrow-up");
//             }
//             else if (document.querySelector(".arrow5").classList[1] == "arrow") {
//                 document.querySelector(".arrow5").classList.add("arrow-up");
//             }
//             else if (document.querySelector(".arrow1").classList[1] == "arrow") {
//                 document.querySelector(".arrow1").classList.add("arrow-up");
//             }
//             switch (nameOfClass) {
//                 case "qes1":

//                     var firstQes = [".ans2", ".ans3", ".ans4", ".ans5"];
//                     var firstAns = [".qes5", ".qes2", ".qes3", ".qes4"];
//                     var firstArrow = [".arrow5", ".arrow2", ".arrow3", ".arrow4"];
//                     for (i = 0; i < firstQes.length; i++) {
//                         document.querySelector(firstQes[i]).classList.remove("showans");
//                         document.querySelector(firstAns[i]).classList.remove("fontStyleAfterClick");
//                         document.querySelector(firstArrow[i]).classList.remove("arrow");
//                     };

//                     document.querySelector(".ans1").classList.toggle("showans");
//                     document.querySelector(".qes1").classList.toggle("fontStyleAfterClick");
//                     document.querySelector(".arrow1").classList.toggle("arrow");

//                     break;

//                 case "qes2":

//                     var secondQes = [".ans1", ".ans3", ".ans4", ".ans5"];
//                     var secondAns = [".qes1", ".qes5", ".qes3", ".qes4"];
//                     var secondArrow = [".arrow1", ".arrow5", ".arrow3", ".arrow4"];
//                     for (i = 0; i < secondQes.length; i++) {
//                         document.querySelector(secondQes[i]).classList.remove("showans");
//                         document.querySelector(secondAns[i]).classList.remove("fontStyleAfterClick");
//                         document.querySelector(secondArrow[i]).classList.remove("arrow");
//                     };

//                     document.querySelector(".ans2").classList.toggle("showans");
//                     document.querySelector(".qes2").classList.toggle("fontStyleAfterClick");
//                     document.querySelector(".arrow2").classList.toggle("arrow");
//                     break;

//                 case "qes3":

//                     var thirdQes = [".ans2", ".ans1", ".ans4", ".ans5"];
//                     var thirdAns = [".qes1", ".qes2", ".qes5", ".qes4"];
//                     var thirdArrow = [".arrow1", ".arrow2", ".arrow5", ".arrow4"];
//                     for (i = 0; i < thirdQes.length; i++) {
//                         document.querySelector(thirdQes[i]).classList.remove("showans");
//                         document.querySelector(thirdAns[i]).classList.remove("fontStyleAfterClick");
//                         document.querySelector(thirdArrow[i]).classList.remove("arrow");
//                     };

//                     document.querySelector(".ans3").classList.toggle("showans");
//                     document.querySelector(".qes3").classList.toggle("fontStyleAfterClick");
//                     document.querySelector(".arrow3").classList.toggle("arrow");
//                     break;

//                 case "qes4":

//                     var forthQes = [".ans2", ".ans3", ".ans1", ".ans5"];
//                     var forthAns = [".qes1", ".qes2", ".qes3", ".qes5"];
//                     var forthArrow = [".arrow1", ".arrow2", ".arrow3", ".arrow5"];
//                     for (i = 0; i < forthQes.length; i++) {
//                         document.querySelector(forthQes[i]).classList.remove("showans");
//                         document.querySelector(forthAns[i]).classList.remove("fontStyleAfterClick");
//                         document.querySelector(forthArrow[i]).classList.remove("arrow");
//                     };

//                     document.querySelector(".ans4").classList.toggle("showans");
//                     document.querySelector(".qes4").classList.toggle("fontStyleAfterClick");
//                     document.querySelector(".arrow4").classList.toggle("arrow");
//                     break;

//                 case "qes5":

//                     var fifthQes = [".ans2", ".ans3", ".ans4", ".ans1"];
//                     var fifthAns = [".qes1", ".qes2", ".qes3", ".qes4"];
//                     var fifthArrow = [".arrow1", ".arrow2", ".arrow3", ".arrow4"];
//                     for (i = 0; i < fifthQes.length; i++) {
//                         document.querySelector(fifthQes[i]).classList.remove("showans");
//                         document.querySelector(fifthAns[i]).classList.remove("fontStyleAfterClick");
//                         document.querySelector(fifthArrow[i]).classList.remove("arrow");
//                     };

//                     document.querySelector(".ans5").classList.toggle("showans");
//                     document.querySelector(".qes5").classList.toggle("fontStyleAfterClick");
//                     document.querySelector(".arrow5").classList.toggle("arrow");

//                     break;
//             };
//         };

//     });

//     document.querySelectorAll("h4")[i].addEventListener("mouseenter", function () {
//         document.querySelector(".imgbox").classList.remove("effect");
//         document.querySelector(".imgbox").classList.add("effectAfter");
//     });

//     document.querySelectorAll("h4")[i].addEventListener("mouseleave", function () {
//         document.querySelector(".imgbox").classList.remove("effectAfter");
//         document.querySelector(".imgbox").classList.add("effect");

//     });
// };
