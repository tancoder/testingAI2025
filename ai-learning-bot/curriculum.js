const curriculum = {
    modules: [
        {
            id: 1,
            title: "Introduction to Artificial Intelligence",
            lessons: [
                {
                    id: "1.1",
                    title: "What is Artificial Intelligence?",
                    content: "Artificial Intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence. These tasks include visual perception, speech recognition, decision-making, and language translation.",
                    quiz: {
                        question: "Which of the following best describes AI?",
                        options: [
                            "Computer systems that can only perform mathematical calculations",
                            "Systems that can perform tasks requiring human-like intelligence",
                            "Robots that look like humans",
                            "Programs that can only follow predefined rules"
                        ],
                        correctAnswer: 1
                    }
                },
                {
                    id: "1.2",
                    title: "Types of AI",
                    content: "AI can be categorized into two main types: Narrow AI (designed for specific tasks) and General AI (hypothetical systems with human-like general intelligence). Current AI systems are all Narrow AI.",
                    quiz: {
                        question: "What type of AI exists today?",
                        options: [
                            "Only General AI",
                            "Only Narrow AI",
                            "Both General and Narrow AI",
                            "Neither type exists yet"
                        ],
                        correctAnswer: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: "Machine Learning Fundamentals",
            lessons: [
                {
                    id: "2.1",
                    title: "What is Machine Learning?",
                    content: "Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. It uses statistical techniques to allow computers to 'learn' from data.",
                    quiz: {
                        question: "How do machine learning systems improve?",
                        options: [
                            "Through explicit programming only",
                            "By learning from experience and data",
                            "By copying human behavior",
                            "Through random improvements"
                        ],
                        correctAnswer: 1
                    }
                },
                {
                    id: "2.2",
                    title: "Types of Machine Learning",
                    content: "The three main types of machine learning are: Supervised Learning (learning from labeled data), Unsupervised Learning (finding patterns in unlabeled data), and Reinforcement Learning (learning through trial and error).",
                    quiz: {
                        question: "Which is NOT a type of machine learning?",
                        options: [
                            "Supervised Learning",
                            "Unsupervised Learning",
                            "Reinforcement Learning",
                            "Automatic Learning"
                        ],
                        correctAnswer: 3
                    }
                }
            ]
        },
        {
            id: 3,
            title: "Neural Networks and Deep Learning",
            lessons: [
                {
                    id: "3.1",
                    title: "Understanding Neural Networks",
                    content: "Neural networks are computing systems inspired by biological neural networks in human brains. They consist of interconnected nodes (neurons) that process and transmit information.",
                    quiz: {
                        question: "What are neural networks inspired by?",
                        options: [
                            "Computer circuits",
                            "Biological neural networks",
                            "Social networks",
                            "Electrical grids"
                        ],
                        correctAnswer: 1
                    }
                },
                {
                    id: "3.2",
                    title: "Deep Learning Applications",
                    content: "Deep Learning is a subset of machine learning using neural networks with multiple layers. It's used in image recognition, natural language processing, and autonomous vehicles.",
                    quiz: {
                        question: "Which is a common application of deep learning?",
                        options: [
                            "Basic calculator functions",
                            "Simple data storage",
                            "Image recognition",
                            "File compression"
                        ],
                        correctAnswer: 2
                    }
                }
            ]
        },
        {
            id: 4,
            title: "AI Ethics and Future Implications",
            lessons: [
                {
                    id: "4.1",
                    title: "AI Ethics",
                    content: "AI ethics involves principles ensuring AI systems are developed and used responsibly. Key concerns include bias, privacy, transparency, and accountability.",
                    quiz: {
                        question: "What is a key concern in AI ethics?",
                        options: [
                            "Making AI systems more expensive",
                            "Algorithmic bias and fairness",
                            "Creating more powerful computers",
                            "Developing faster algorithms"
                        ],
                        correctAnswer: 1
                    }
                },
                {
                    id: "4.2",
                    title: "Future of AI",
                    content: "The future of AI includes potential developments in healthcare, education, environmental protection, and space exploration. It's crucial to consider both opportunities and challenges.",
                    quiz: {
                        question: "Which field is NOT commonly associated with future AI applications?",
                        options: [
                            "Healthcare",
                            "Education",
                            "Ancient history",
                            "Space exploration"
                        ],
                        correctAnswer: 2
                    }
                }
            ]
        }
    ]
};

function getCurrentProgress() {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    const totalLessons = curriculum.modules.reduce((total, module) => total + module.lessons.length, 0);
    return (completed.length / totalLessons) * 100;
}

function markLessonComplete(lessonId) {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        localStorage.setItem('completedLessons', JSON.stringify(completed));
    }
    updateProgress();
}

function updateProgress() {
    const progress = getCurrentProgress();
    document.getElementById('overall-progress').style.width = `${progress}%`;
}

function initializeCurriculum() {
    const curriculumList = document.getElementById('curriculum-list');
    curriculum.modules.forEach(module => {
        const moduleElement = document.createElement('li');
        moduleElement.innerHTML = `
            <h3>${module.title}</h3>
            <ul class="lesson-list">
                ${module.lessons.map(lesson => `
                    <li data-lesson-id="${lesson.id}" class="lesson-item">
                        ${lesson.title}
                    </li>
                `).join('')}
            </ul>
        `;
        curriculumList.appendChild(moduleElement);
    });
    
    updateProgress();
}