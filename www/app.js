// var canvas = document.getElementById("plotting_canvas");
// canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
window.saveDataAcrossSessions = true;
const firstChild = document
  .getElementById("firstChild")
  .getBoundingClientRect();
const secondChild = document
  .getElementById("secondChild")
  .getBoundingClientRect();
const thirdChild = document
  .getElementById("thirdChild")
  .getBoundingClientRect();
const fourthChild = document
  .getElementById("fourthChild")
  .getBoundingClientRect();
// const position = firstChild.getBoundingClientRect();
// X axis
var firstxl = Number(firstChild.left.toFixed(0));
var firstxr = Number(firstChild.right.toFixed(0));
// var firstXRange = range(firstxl, firstxr);
// Y axis
var firstyt = Number(firstChild.top.toFixed(0));
var firstyb = Number(firstChild.bottom.toFixed(0));
// var firstYRange = range(firstyt, firstyb);
// X axis
var secondxl = Number(secondChild.left.toFixed(0));
var secondxr = Number(secondChild.right.toFixed(0));
// var secondXRange = range(secondxl, secondxr);
// Y axis
var secondyt = Number(secondChild.top.toFixed(0));
var secondyb = Number(secondChild.bottom.toFixed(0));
// var secondYRange = range(secondyt, secondyb);
// X axis
var thirdxl = Number(thirdChild.left.toFixed(0));
var thirdxr = Number(thirdChild.right.toFixed(0));
// var thirdXRange = range(thirdxl, thirdxr);
// Y axis
var thirdyt = Number(thirdChild.top.toFixed(0));
var thirdyb = Number(thirdChild.bottom.toFixed(0));
// var thirdYRange = range(thirdyt, thirdyb);
// X axis
var fourthxl = Number(fourthChild.left.toFixed(0));
var fourthxr = Number(fourthChild.right.toFixed(0));
// var fourthXRange = range(fourthxl, fourthxr);
// Y axis
var fourthyt = Number(fourthChild.top.toFixed(0));
var fourthyb = Number(fourthChild.bottom.toFixed(0));
// var fourthYRange = range(fourthyt, fourthyb);

webgazer
  .setGazeListener((data , a, b ,c) => {
    // with Range
    // if (
    //   firstXRange.includes(data?.x.toFixed(0)) ||
    //   firstYRange.includes(data?.y.toFixed(0))
    //   // firstxl == data?.x.toFixed(0) ||
    //   // firstxr == data?.x.toFixed(0) ||
    //   // firstyt == data?.y.toFixed(0) ||
    //   // firstyb == data?.y.toFixed(0)
    // ) {
    //   console.log("done");
    //   document.body.style.backgroundColor = "rgb(120, 56, 180)";
    // }
    // if (
    //   secondXRange.includes(data?.x.toFixed(0)) ||
    //   secondYRange.includes(data?.y.toFixed(0))
    //   // secondxl == data?.x.toFixed(0) ||
    //   // secondxr == data?.x.toFixed(0) ||
    //   // secondyt == data?.y.toFixed(0) ||
    //   // secondyb == data?.y.toFixed(0)
    // ) {
    //   console.log("done");
    //   document.body.style.backgroundColor = "rgb(185, 69, 69)";
    // }
    // if (
    //   thirdXRange.includes(data?.x.toFixed(0)) ||
    //   thirdYRange.includes(data?.y.toFixed(0))
    //   // thirdxl == data?.x.toFixed(0) ||
    //   // thirdxr == data?.x.toFixed(0) ||
    //   // thirdyt == data?.y.toFixed(0) ||
    //   // thirdyb == data?.y.toFixed(0)
    // ) {
    //   console.log("done");
    //   document.body.style.backgroundColor = "rgb(75, 75, 184)";
    // }
    // if (
    //   fourthXRange.includes(data?.x.toFixed(0)) ||
    //   fourthYRange.includes(data?.y.toFixed(0))
    //   // fourthxl == data?.x.toFixed(0) ||
    //   // fourthxr == data?.x.toFixed(0) ||
    //   // fourthyt == data?.y.toFixed(0) ||
    //   // fourthyb == data?.y.toFixed(0)
    // ) {
    //   console.log("done");
    //   document.body.style.backgroundColor = "rgb(228, 228, 91)";
    // }

    // Without Range
    if (
      // xAxis.includes(data?.x.toFixed(0)) ||
      // yAxis.includes(data?.y.toFixed(0))
      firstxl == data?.x.toFixed(0) ||
      firstxr == data?.x.toFixed(0) ||
      firstyt == data?.y.toFixed(0) ||
      firstyb == data?.y.toFixed(0)
    ) {
      console.log("Purple done");
      document.body.style.backgroundColor = "rgb(120, 56, 180)";
    }
    if (
      // xAxis.includes(data?.x.toFixed(0)) ||
      // yAxis.includes(data?.y.toFixed(0))
      secondxl == data?.x.toFixed(0) ||
      secondxr == data?.x.toFixed(0) ||
      secondyt == data?.y.toFixed(0) ||
      secondyb == data?.y.toFixed(0)
    ) {
      console.log("Red done");
      document.body.style.backgroundColor = "rgb(185, 69, 69)";
    }
    if (
      // xAxis.includes(data?.x.toFixed(0)) ||
      // yAxis.includes(data?.y.toFixed(0))
      thirdxl == data?.x.toFixed(0) ||
      thirdxr == data?.x.toFixed(0) ||
      thirdyt == data?.y.toFixed(0) ||
      thirdyb == data?.y.toFixed(0)
    ) {
      console.log("Blue done");
      document.body.style.backgroundColor = "rgb(75, 75, 184)";
    }
    if (
      // xAxis.includes(data?.x.toFixed(0)) ||
      // yAxis.includes(data?.y.toFixed(0))
      fourthxl == data?.x.toFixed(0) ||
      fourthxr == data?.x.toFixed(0) ||
      fourthyt == data?.y.toFixed(0) ||
      fourthyb == data?.y.toFixed(0)
    ) {
      console.log("Yellow done");
      document.body.style.backgroundColor = "rgb(228, 228, 91)";
    }
  })
  .begin();

// webgazer.showVideoPreview(false).showPredictionPoints(false)
// function range(start, end) {
//   var ans = [];
//   for (let i = start; i <= end; i++) {
//     ans.push(i);
//   }
//   return ans;
// }
