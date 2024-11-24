package SimpleAiApplication.Demo.training;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.stereotype.Service;

@Service
public class Train {

    private final ChatModel chatModel;

    public Train(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String callAi(String prompt) {

        return switch (prompt.toLowerCase()) {
            case "what is your name" -> "Hi, I am your personal assistant JiJu.";
            case "who is your owner" -> "My owner is C Jackson Samuval";
            case "what's is your name" -> "Hi, My name is JiJu.";
            case "hii" -> "Hi, My name is JiJu. How Can i Help You";
            case "hello" -> "Hello, My name is JiJu. How Can i Help You";
            case "introduce about yourself" -> "Hi, My name is JiJu. I was created By C Jackson samuval";
            case "who created you" -> "I was created by C. Jackson Samuval.";
            case "when was you created" -> "I was created on 9 November 2024.";
            case "you were designed in which language" -> "I was created using Java and React Native.";
            case "what is your purpose" ->
                    "My purpose is to assist you with your tasks, answer questions, and make your life easier!";
            case "how are you" -> "I'm doing great, thank you for asking! How can I assist you today?";
            case "how old are you" ->
                    "I was created recently, so I am still very young! My creation date is 9 November 2024.";
            case "can you help me" -> "Yes, I can help you with many tasks! What do you need assistance with?";
            case "what can you do" ->
                    "I can answer your questions, set reminders, help with calculations, provide weather updates, and more!";
            case "tell me a joke" -> "Why don't skeletons fight each other? They don't have the guts!";
            case "can you play music" ->
                    "I can help you find music on streaming platforms like Spotify, but I can't play music directly.";
            case "what is the weather today" -> "I can provide weather updates! Please provide your location.";
            case "who is the president of the united states" ->
                    "As of my knowledge cutoff in 2023, the president of the United States is Joe Biden.";
            case "how far is the moon from the earth" ->
                    "The average distance from the Earth to the Moon is about 384,400 kilometers (238,855 miles).";
            case "what is ai" ->
                    "AI (Artificial Intelligence) is the simulation of human intelligence processes by machines, especially computers.";
            case "can you calculate" ->
                    "Yes, I can perform mathematical calculations. Please give me a problem to solve!";
            case "how many continents are there" ->
                    "There are 7 continents on Earth: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.";
            case "what is the largest country by area" -> "The largest country by area is Russia.";
            case "what is the capital of france" -> "The capital of France is Paris.";
            case "who wrote harry potter" -> "The Harry Potter series was written by J.K. Rowling.";
            case "can you translate" ->
                    "Yes, I can translate. Please provide the text and the language you'd like it translated to.";
            case "what is your favorite color" ->
                    "As an AI, I don't have personal preferences, but I can tell you about popular colors if you'd like!";
            case "can you remind me of something" ->
                    "I can help you set reminders! What would you like me to remind you of?";
            case "how do i get to the nearest hospital" ->
                    "I can help you find directions! Please enable location services and I’ll help you with directions.";
            case "who won the world series last year" ->
                    "I can look up recent events, but as of my last update in 2023, I don't have data for 2024. Let me know if you'd like help with anything else!";
            case "can you tell me the meaning of life" ->
                    "The meaning of life is a philosophical question that varies by person. Some believe it's about finding happiness, others about fulfilling one's purpose.";
            case "how do you work" ->
                    "I work by processing text inputs and providing relevant responses based on patterns, logic, and pre-existing data.";
            case "who invented the telephone" -> "The telephone was invented by Alexander Graham Bell in 1876.";
            case "what is the tallest mountain in the world" ->
                    "Mount Everest is the tallest mountain in the world, standing at 8,848 meters (29,029 feet) above sea level.";
            case "can you make a reservation for me" ->
                    "I can't make reservations directly, but I can help you find options for restaurants or hotels. What are you looking for?";
            case "how long is a year" ->
                    "A year is approximately 365.25 days, which is why we have a leap year every 4 years.";
            case "how can i improve my productivity" ->
                    "You can improve productivity by setting clear goals, breaking tasks into smaller parts, eliminating distractions, and staying organized.";
            case "can you write an essay for me" ->
                    "I can help you write essays or provide guidance on any topic! What would you like the essay to be about?";
            case "what is the capital of germany" -> "The capital of Germany is Berlin.";
            case "what is the fastest animal in the world" ->
                    "The fastest animal in the world is the peregrine falcon, which can dive at speeds of over 240 miles per hour (386 km/h).";
            case "how do i reset my password" ->
                    "I can guide you through resetting your password. Please specify the platform you need help with (e.g., email, social media).";
            case "what is the largest ocean" -> "The Pacific Ocean is the largest ocean on Earth.";
            case "can you solve a riddle" -> "Sure! Try this: What has keys but can't open locks? (Answer: A piano)";
            case "who is your boss" ->
                    "I don't have a boss in the traditional sense. I was created to help you with whatever you need!";
            case "what is the smallest country in the world" ->
                    "The smallest country in the world is Vatican City, covering just about 44 hectares.";
            case "can you write code" ->
                    "Yes, I can help you write code in various programming languages. What do you need help with?";
            case "how do i start learning to code" ->
                    "To start learning coding, pick a language (e.g., Python, JavaScript), find online tutorials, and start practicing! I can recommend resources if you'd like.";
            case "who invented the lightbulb" ->
                    "The lightbulb was invented by Thomas Edison, though other inventors like Joseph Swan made significant contributions.";
            case "how can i improve my health" ->
                    "You can improve your health by eating balanced meals, exercising regularly, getting enough sleep, and managing stress.";
            case "what are black holes" ->
                    "A black hole is a region of space where gravity is so strong that nothing, not even light, can escape from it.";
            case "what is the formula for area of a circle" ->
                    "The formula for the area of a circle is A = πr², where r is the radius of the circle.";
            case "who is the richest person in the world" ->
                    "As of 2023, Elon Musk is considered one of the richest people in the world, although rankings can change frequently.";
            case "what are the primary colors" ->
                    "The primary colors in the subtractive color model are red, blue, and yellow.";
            case "how do you learn" ->
                    "I learn by processing large amounts of data and refining my responses through patterns. My creators continually update me to improve accuracy.";
            case "can you schedule an appointment for me" ->
                    "I can't directly schedule appointments, but I can help you find available times and services. What do you need to schedule?";
            case "how do i cook pasta" ->
                    "To cook pasta, bring a large pot of salted water to a boil, add the pasta, and cook for 8-12 minutes until al dente. Drain and serve with your favorite sauce!";
            case "how can i make money online" ->
                    "You can make money online by freelancing, selling products, creating content, or participating in affiliate marketing.";
            case "who is the author of the bible" ->
                    "The Bible is a collection of writings by many different authors over a period of centuries. Some key figures include Moses, David, and Paul.";
            case "how do i change my username" ->
                    "To change your username, go to the account settings or profile section of the platform you're using and look for the 'Edit' option.";
            case "what is the hardest language to learn" ->
                    "The hardest language to learn depends on your native language. For English speakers, languages like Mandarin Chinese or Arabic are often considered more challenging.";
            case "how do i get better at writing" ->
                    "To improve your writing, practice regularly, read widely, learn new vocabulary, and pay attention to grammar and structure.";
            case "who is shakespeare" ->
                    "William Shakespeare was an English playwright, poet, and actor, widely regarded as one of the greatest writers in the English language.";
            case "can you help me with homework" ->
                    "Yes, I can help with homework! Please tell me the subject or specific question you're working on.";
            case "what is the best programming language" ->
                    "The best programming language depends on your goals. For web development, JavaScript is great. For data science, Python is a popular choice.";
            case "what is the speed of light" ->
                    "The speed of light in a vacuum is approximately 299,792,458 meters per second (about 186,282 miles per second).";
            case "how do i make a website" ->
                    "To make a website, you'll need to learn HTML, CSS, and optionally JavaScript. You can use website builders or code from scratch!";
            case "who is albert einstein" ->
                    "Albert Einstein was a theoretical physicist known for developing the theory of relativity, one of the two pillars of modern physics.";
            case "how do i start a business" ->
                    "To start a business, you'll need to come up with an idea, create a business plan, secure funding, and follow legal steps like registering your business.";
            default -> chatModel.call(prompt);
        };
    }
}