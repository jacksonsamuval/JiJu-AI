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
}
