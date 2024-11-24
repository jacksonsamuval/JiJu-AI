package SimpleAiApplication.Demo.controller;

import SimpleAiApplication.Demo.service.AiService;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @Autowired
    AiService aiService;

    @GetMapping("/")
    public String prompt(@RequestParam String message) {
        return aiService.callAi(message);
    }

    @GetMapping("/recipe")
    public String recipe(@RequestParam String items, @RequestParam String quantity) {

        String prompt = "Give me a recipe with"+" "+items +" items"+" "+" for " +" "+quantity +" "+"people";
        return aiService.callRecipeAi(prompt);
    }

    @GetMapping("/travelPartner")
    public String travelPrtner(@RequestParam String location, @RequestParam String price)
    {
        String prompt = "Suggest me places to visit in " + location + " within the price range of " + price;
        return aiService.callAi(prompt);
    }

    @GetMapping("/careerCounselor")
    public String careerCounselor(@RequestParam String skills, @RequestParam String experience)
    {
        String prompt = "I have skills of " + skills + " and an experience of " + experience+" "+" years, Give me guidance for my career";
        return aiService.callAi(prompt);

    }
}
