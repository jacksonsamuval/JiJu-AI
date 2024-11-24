package SimpleAiApplication.Demo.service;

import SimpleAiApplication.Demo.training.Train;
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

    @Autowired
    private Train train;

    public String callRecipeAi(String message)
    {
        try {
            return chatModel.call(message);
        } catch (Exception e) {
            return "An error occurred while processing your request. Please try again later.";
        }
    }

    public String callAi(String prompt) {
        return train.callAi(prompt);
    }
}
