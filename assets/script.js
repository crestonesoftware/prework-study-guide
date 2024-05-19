const topics = ['HTML', 'CSS', 'fast goggo', 'Git', 'JavaScript'];


const topic = "HTML";
const randomTopicIndex = Math.floor(Math.random() * topics.length);

function selectTopic(topicIndex) {
    if (topics[topicIndex] === 'HTML') {
        console.log("Let's study HTML!"); 
    } else if (topics[topicIndex] === 'CSS') {
        console.log("Let's study CSS");
    } else if (topics[topicIndex] === 'Git') {
        console.log("Let's study Git");
    } else if (topics[topicIndex] === 'JavaScript') {
        console.log("Let's study JavaScript");
    } else {
        console.log("Please try again cuz I don't recognize the topic. Hrm.");
        console.log("index is [" + randomTopicIndex + "]");
        console.log("topic is [" + topics[randomTopicIndex] + "]");
    }
    
}
function listTopics() {
    for( x = 0; x < topics.length; ++x) {
        console.log("Next is: " + topics[x]);
}

}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic to study now?');
selectTopic(randomTopicIndex);