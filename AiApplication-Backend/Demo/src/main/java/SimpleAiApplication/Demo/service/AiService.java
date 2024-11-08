package SimpleAiApplication.Demo.service;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AiService {

    private final ChatModel chatModel;

    @Autowired
    public AiService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String callAi(String message)
    {
        try {
            return chatModel.call(message);
        } catch (Exception e) {
            return "An error occurred while processing your request. Please try again later.";
        }
    }
}
