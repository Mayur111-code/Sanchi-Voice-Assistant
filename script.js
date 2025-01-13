let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
let isSpeaking = false; //extra aad

// Function to make the assistant speak
function speak(text) {
    window.speechSynthesis.cancel(); //extra add
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN"; // Set language for speech synthesis
    recognition.lang="en-us"
    window.speechSynthesis.speak(text_speak);
}

// Function to greet the user based on the time of day
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir, how can I help you?");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir, how can I help you?");
    } else {
        speak("Good Evening Sir, how can I help you?");
    }
}

// Event to greet the user on page load
window.addEventListener("load", () => {
    wishMe();
});

// Recognition result handler
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

// Button click event to start recognition
btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

// Function to handle commands
function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";
    
    
   // let userName = "Mayur"; // Later, fetch this from local storage
//if (message.includes("what is my name")) {
  //  speak(`Your name is ${userName}`);
//}


    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Sir, what can I help you with?");
    } else if (message.includes("what is my name") || message.includes("my name")){
        speak("your name is mayur");
    } else if (message.includes("who are you") || message.includes("hu r u")){
        speak("I am sanchi Your voice assistant, created by Mayur Sir.");
    } else if (message.includes("what is open ai")){
        speak("OpenAI is an artificial intelligence research organization and technology company. It was founded in December 2015 by a group of prominent entrepreneurs and researchers, including Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, Wojciech Zaremba, and others. The mission of OpenAI is to ensure that artificial general intelligence (AGI) benefits all of humanity. Here's an overview of OpenAI:")
    } else if (message.includes("what is gemini")){
        speak("Gemini is a suite of advanced AI models developed by Google DeepMind (formerly part of Google Research). It is designed to compete with and surpass similar models like OpenAI's GPT series. Gemini focuses on combining state-of-the-art natural language processing (NLP) capabilities with features from DeepMind’s expertise in areas like reinforcement learning, advanced reasoning, and multimodal interactions.")
    } else if (message.includes("what is siri")){
        speak("Siri is a virtual assistant created by Apple, designed to interact with users through voice commands and perform a variety of tasks. It uses artificial intelligence and natural language processing to understand and respond to user queries.")
    } else if (message.includes("microsoft means")){
        speak("Microsoft is the name of the technology company founded by Bill Gates and Paul Allen. The name is a combination of microcomputer and software.")
    }
     else if  (message.includes("speak hindi")) {
        speak("नमस्ते, मैं आपकी मदद करने के लिए यहाँ हूँ।", "hi-IN");
    } else if (message.includes("tum meri madad karogi")){
        speak("Bilkul, main aapki madad karungi! Aapko kis cheez mein madad chahiye?")
    } else if(message.includes("tumhen kisne banaya hai")){
        speak("Mujhe Mayur sir ne banaya hai. Main ek voice assistant Ai model hoon, jise human-like conversations karne ke liye train kiya gaya hai. Mera purpose hai aapki madad karna, chahe woh coding ho, knowledge-related questions, ya kuch aur!")
    } else if (message.includes(" thak gaya hu")){
        speak("Agar aap thak gaye ho, toh thoda break lena accha rahega. Aap apne dimaag ko relax karne ke liye kuch aise cheezein kar sakte hain: like.....Thodi der ke liye rest lein — Aap ek chhoti si nap le sakte hain ya bas chill kar sakte hain......Deep breathing — Gahri saans lein aur apne aapko relax karein.....Kuch halke music sunen — Aap apne favorite relaxing music sun sakte hain......Thoda walk karein — Agar aap ghar ke andar hain, toh ek chhota sa walk lene se bhi energy mil sakti hai.")
    }
    else if (message.includes("hindi mein bolo")) {
        speak("Namaste, main Sanchi hoon. Aapki kya madad kar sakti hoon?");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("how are you") || message.includes("how r u")) {
        speak("I am fine Sir, and you?");
    } else if(message.includes("sanchi your name meaning")){
        speak("ohh oaky sanchi is a feminine name .it means collection saving or together.")
    }else if (message.includes("what is your name") || message.includes("your name")) {
        speak("My name is sanchi.");
    } else if (message.includes("tell me about yourself")) {
        speak("I am a sanchi voice assistant AI developed by Mayur Bores. My purpose is to assist, inform, and engage with users.");
    } else if (message.includes("can you help me")) {
        speak("Of course! How can I assist you? Let me know what you need help with.");
    } else if (message.includes("voice assistant means")) {
        speak("A voice assistant is a software program designed to perform tasks or provide information in response to voice commands, like  sanchi (mayur code) Alexa, Siri, Google Assistant, or Cortana.");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("play music")) {
        speak("Playing music on YouTube...");
        window.open("https://music.youtube.com/", "_blank");
    } else if (message.includes("tell me a joke")) {
        let jokes = [
            "Why don’t scientists trust atoms? Because they make up everything!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!"
        ];
        let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    } else if (message.includes("spotify music")) {
        speak("Playing your favorite music.");
        window.open("https://open.spotify.com/", "_blank");
    } 
    
    
     else if (message.includes("motivate me") || message.includes("quote")) {
        let quotes = [
            "Believe in yourself! You are capable of amazing things.",
            "The best time to plant a tree was 20 years ago. The second best time is now.",
            "Do what you can, with what you have, where you are.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts."
        ];
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(randomQuote);
     
    } else if (message.includes("play movie")){
        speak("playing movie...");
        window.open("https://www.netflix.com", "_blank")
    }
     else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The time is ${time}`);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(`Today's date is ${date}`);
    } else {
        let finalText = `This is what I found on the internet regarding ${message}`;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    } 
    
    
    
}



