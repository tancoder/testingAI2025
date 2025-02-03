class AITutor {
    constructor() {
        this.currentModule = 0;
        this.currentLesson = 0;
        this.context = [];
        this.score = 0;
        this.currentQuizTotal = 0;
    }

    processMessage(message) {
        message = message.toLowerCase().trim();
        
        // Check for specific commands or questions
        if (message.includes('help')) {
            return this.getHelpMessage();
        } else if (message.includes('progress')) {
            return this.getProgressMessage();
        } else if (message.includes('next lesson')) {
            return this.moveToNextLesson();
        } else if (message.includes('quiz')) {
            return this.startQuiz();
        }

        // Process curriculum-related questions
        for (const module of curriculum.modules) {
            if (message.includes(module.title.toLowerCase())) {
                return this.getModuleInfo(module);
            }
            
            for (const lesson of module.lessons) {
                if (message.includes(lesson.title.toLowerCase())) {
                    return this.getLessonContent(lesson);
                }
            }
        }

        // Handle general AI-related questions
        if (this.isAIQuestion(message)) {
            return this.getAIExplanation(message);
        }

        // Default response
        return this.getDefaultResponse();
    }

    isAIQuestion(message) {
        const aiKeywords = [
            'artificial intelligence', 'machine learning', 'neural network',
            'deep learning', 'ai', 'algorithm', 'training', 'model',
            'dataset', 'supervised', 'unsupervised', 'reinforcement'
        ];
        return aiKeywords.some(keyword => message.includes(keyword));
    }

    getAIExplanation(message) {
        // Map common AI concepts to explanations
        const explanations = {
            'artificial intelligence': 'Artificial Intelligence (AI) is the simulation of human intelligence by machines. It includes various subfields like machine learning, neural networks, and natural language processing.',
            'machine learning': 'Machine Learning is a subset of AI that enables systems to learn and improve from experience without explicit programming. It uses statistical techniques to allow computers to "learn" from data.',
            'neural network': 'Neural Networks are computing systems inspired by biological neural networks in human brains. They excel at pattern recognition and problem-solving.',
            'deep learning': 'Deep Learning is a subset of machine learning using neural networks with multiple layers. It\'s particularly effective for complex tasks like image and speech recognition.',
            'supervised learning': 'Supervised Learning is a type of machine learning where the system learns from labeled training data to make predictions or classifications.',
            'unsupervised learning': 'Unsupervised Learning involves training AI systems on unlabeled data to find patterns or groupings without predefined categories.',
            'reinforcement learning': 'Reinforcement Learning is a type of machine learning where an agent learns to make decisions by interacting with an environment and receiving feedback in the form of rewards or penalties.'
        };

        for (const [concept, explanation] of Object.entries(explanations)) {
            if (message.includes(concept)) {
                return explanation;
            }
        }

        return 'That\'s an interesting AI-related question! Could you be more specific about what you\'d like to learn?';
    }

    getModuleInfo(module) {
        return `Module: ${module.title}\n\nThis module contains ${module.lessons.length} lessons:\n${
            module.lessons.map(lesson => `- ${lesson.title}`).join('\n')
        }\n\nWould you like to start with the first lesson?`;
    }

    getLessonContent(lesson) {
        this.currentLesson = lesson;
        return `${lesson.title}\n\n${lesson.content}\n\nWould you like to take the quiz for this lesson?`;
    }

    startQuiz() {
        if (!this.currentLesson) {
            return "Please select a lesson first before taking a quiz.";
        }

        const quiz = this.currentLesson.quiz;
        this.quizOptions = quiz.options.map((option, index) => ({
            id: index,
            text: option,
            isCorrect: index === quiz.correctAnswer,
            isSelected: false,
        }));
        this.currentQuizTotal = quiz.options.length;
        this.score = 0;
        this.updateScoreUI();

        return `Quiz Question: ${quiz.question}\n\n${this.quizOptions
            .map(
                (option, index) =>
                    `${index + 1}. ${option.text} <span id="option-${
                        option.id
                    }" class="quiz-option"></span>`
            )
            .join("\n")}`;
    }

    checkQuizAnswer(answer) {
        if (!this.currentLesson || !this.currentLesson.quiz) {
            return "No active quiz. Please start a lesson first.";
        }

        const quiz = this.currentLesson.quiz;
        const userAnswer = parseInt(answer) - 1;
        const selectedOption = this.quizOptions[userAnswer];

        if (selectedOption.isCorrect) {
            this.score += 1;
            markLessonComplete(this.currentLesson.id);
            this.updateScoreUI();
            return `Correct! Well done! Your current score is ${this.score}/${this.currentQuizTotal}. You can move on to the next lesson.`;
        } else {
            const correctOption = this.quizOptions.find(option => option.isCorrect);
            this.updateScoreUI();
            return `Incorrect. The correct answer is: ${correctOption.text}. Your current score is ${this.score}/${this.currentQuizTotal}. Would you like to review the lesson?`;
        }
    }

    updateScoreUI() {
        document.getElementById('current-score').textContent = this.score;
        document.getElementById('total-score').textContent = this.currentQuizTotal;
    }

    getHelpMessage() {
        return `Here are some things you can do:
- Ask about any AI concept
- Type "progress" to see your progress
- Type "next lesson" to move to the next lesson
- Type "quiz" to take the current lesson's quiz
- Ask specific questions about any module or lesson`;
    }

    getProgressMessage() {
        const progress = getCurrentProgress();
        return `You've completed ${progress.toFixed(1)}% of the curriculum. Keep up the good work!`;
    }

    moveToNextLesson() {
        let nextLesson = null;
        let foundCurrent = false;

        for (const module of curriculum.modules) {
            for (const lesson of module.lessons) {
                if (foundCurrent) {
                    nextLesson = lesson;
                    break;
                }
                if (this.currentLesson && lesson.id === this.currentLesson.id) {
                    foundCurrent = true;
                }
            }
            if (nextLesson) break;
        }

        if (nextLesson) {
            return this.getLessonContent(nextLesson);
        } else {
            return "Congratulations! You've completed all lessons. Feel free to review any topics or take quizzes to test your knowledge.";
        }
    }

    getDefaultResponse() {
        return "I'm here to help you learn about AI! You can ask me about any AI concept, or type 'help' to see what I can do.";
    }
}

// Initialize chat functionality
const tutor = new AITutor();
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        const response = tutor.processMessage(message);
        addMessage(response);
        userInput.value = '';
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});
