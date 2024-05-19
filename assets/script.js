const topics = ['HTML', 'CSS', 'fast goggo', 'Git', 'JavaScript'];


const topic = "HTML";

if (topic === 'HTML') {
    console.log("Let's study HTML!"); 
} else if (topic === 'CSS') {
    console.log("Let's study CSS");
} else {
    console.log("Please try again cuz I don't recognize the topic. Hrm.");
}

//const shapes = ["triangle", "square", "pentagon", "circle"];
for( x = 0; x < topics.length; ++x) {
    console.log("Next is: " + topics[x]);
}