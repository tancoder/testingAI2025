// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize curriculum
    initializeCurriculum();

    // Add welcome message
    addMessage(`Welcome to the AI Learning Bot! 👋

I'm here to help you learn about Artificial Intelligence through an interactive curriculum designed to give you a solid foundation in AI concepts.

The curriculum is divided into 4 main modules:
1. Introduction to Artificial Intelligence
2. Machine Learning Fundamentals
3. Neural Networks and Deep Learning
4. AI Ethics and Future Implications

You can:
- Ask questions about any AI concept
- Follow the curriculum step by step
- Take quizzes to test your knowledge
- Track your progress
- Review completed lessons

Type 'help' to see all available commands or start with the first lesson by asking about "Introduction to Artificial Intelligence".

Let's begin your AI learning journey! What would you like to know about?`);

    // Handle lesson clicks
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const lessonId = item.dataset.lessonId;
            let lesson;
            
            // Find the lesson in curriculum
            for (const module of curriculum.modules) {
                const found = module.lessons.find(l => l.id === lessonId);
                if (found) {
                    lesson = found;
                    break;
                }
            }
            
            if (lesson) {
                const response = tutor.getLessonContent(lesson);
                addMessage(response);
            }
        });
    });

    // Update completed lessons visual state
    function updateCompletedLessons() {
        const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
        document.querySelectorAll('.lesson-item').forEach(item => {
            if (completed.includes(item.dataset.lessonId)) {
                item.classList.add('completed');
            }
        });
    }

    // Initial update of completed lessons
    updateCompletedLessons();

    // Listen for storage events to update UI when lessons are completed
    window.addEventListener('storage', (e) => {
        if (e.key === 'completedLessons') {
            updateCompletedLessons();
            updateProgress();
        }
    });

    // Add keyboard shortcut for help
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && !userInput.matches(':focus')) {
            e.preventDefault();
            addMessage(tutor.getHelpMessage());
        }
    });
});