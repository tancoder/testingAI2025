const curriculum = {
    modules: [
        {
            id: 1,
            title: "Introduction to Artificial Intelligence",
            lessons: [
                {
                    id: "1.1",
                    title: "What is Artificial Intelligence?",
                    content: "Artificial Intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence. These tasks include visual perception, speech recognition, decision-making, and language translation.\n\nAI systems are designed to mimic human cognitive functions like learning, problem-solving, and reasoning. They can process large amounts of data, identify patterns, and make decisions or predictions based on that data.\n\nSome key areas of AI include:\n- Machine Learning\n- Natural Language Processing\n- Computer Vision\n- Robotics\n- Expert Systems\n\nAI has numerous applications across various industries, such as healthcare, finance, transportation, and entertainment.",
                    resources: [
                        "https://www.example.com/intro-to-ai",
                        "https://www.example.com/ai-applications"
                    ],
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
                    content: "AI can be categorized into two main types: Narrow AI (designed for specific tasks) and General AI (hypothetical systems with human-like general intelligence). Current AI systems are all Narrow AI.\n\nNarrow AI, also known as Weak AI or Applied AI, is designed to perform specific tasks within a limited domain. Examples include virtual assistants, recommendation systems, and game-playing programs.\n\nGeneral AI, also known as Strong AI or Artificial General Intelligence (AGI), refers to hypothetical systems with human-level intelligence that can reason, learn, and solve problems across a wide range of domains. AGI does not yet exist, but it is a long-term goal for many AI researchers.",
                    resources: [
                        "https://www.example.com/narrow-ai",
                        "https://www.example.com/general-ai"
                    ],
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
                    content: "Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. It uses statistical techniques to allow computers to 'learn' from data.\n\nIn traditional programming, developers write rules and instructions for the computer to follow. With machine learning, the system is trained on data and can learn patterns, make predictions, and improve its performance over time without being explicitly programmed for every scenario.\n\nMachine learning algorithms can be categorized into three main types: supervised learning, unsupervised learning, and reinforcement learning.",
                    resources: [
                        "https://www.example.com/machine-learning-intro",
                        "https://www.example.com/ml-algorithms"
                    ],
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
                    content: "The three main types of machine learning are: Supervised Learning (learning from labeled data), Unsupervised Learning (finding patterns in unlabeled data), and Reinforcement Learning (learning through trial and error).\n\nSupervised Learning: The system is trained on labeled data, where the inputs and desired outputs are provided. The goal is to learn a mapping function that can make predictions or decisions for new, unseen data. Examples include image classification and spam detection.\n\nUnsupervised Learning: The system is trained on unlabeled data and must find patterns or structure on its own. The goal is to discover hidden patterns or group similar data points together. Examples include clustering and dimensionality reduction.\n\nReinforcement Learning: The system learns by interacting with an environment and receiving rewards or penalties for its actions. The goal is to learn a policy that maximizes the cumulative reward. Examples include game-playing AI and robotics.",
                    resources: [
                        "https://www.example.com/supervised-learning",
                        "https://www.example.com/unsupervised-learning",
                        "https://www.example.com/reinforcement-learning"
                    ],
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
                    content: "Neural networks are computing systems inspired by biological neural networks in human brains. They consist of interconnected nodes (neurons) that process and transmit information.\n\nEach neuron receives input signals from other neurons, performs a simple computation, and passes the result to other connected neurons. By adjusting the strength of the connections (weights) between neurons, the network can learn to perform complex tasks like pattern recognition, classification, and prediction.\n\nNeural networks are particularly well-suited for tasks involving large amounts of data and complex, non-linear relationships. They can learn from examples and generalize to new, unseen data.",
                    resources: [
                        "https://www.example.com/neural-networks-intro",
                        "https://www.example.com/neural-network-architectures"
                    ],
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
                    content: "Deep Learning is a subset of machine learning using neural networks with multiple layers. It's used in image recognition, natural language processing, and autonomous vehicles.\n\nDeep learning models are capable of automatically learning hierarchical representations of data, making them well-suited for complex tasks like image and speech recognition, natural language understanding, and decision-making.\n\nSome popular deep learning architectures include Convolutional Neural Networks (CNNs) for computer vision tasks, Recurrent Neural Networks (RNNs) for sequential data like text and speech, and Generative Adversarial Networks (GANs) for generating new data samples.",
                    resources: [
                        "https://www.example.com/deep-learning-intro",
                        "https://www.example.com/deep-learning-applications"
                    ],
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
                    content: "AI ethics involves principles ensuring AI systems are developed and used responsibly. Key concerns include bias, privacy, transparency, and accountability.\n\nBias: AI systems can inherit and amplify biases present in the training data or algorithms, leading to unfair or discriminatory decisions. It's crucial to address bias and ensure fairness.\n\nPrivacy: AI systems often process and store large amounts of personal data, raising privacy concerns. Robust data protection measures and user consent are essential.\n\nTransparency: Many AI systems are 'black boxes,' making it difficult to understand how they arrive at decisions. Transparency and interpretability are important for trust and accountability.\n\nAccountability: As AI systems become more autonomous, questions arise about who is responsible for their actions and decisions. Clear governance frameworks are needed.",
                    resources: [
                        "https://www.example.com/ai-ethics-principles",
                        "https://www.example.com/ai-bias-and-fairness"
                    ],
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
                    content: "The future of AI includes potential developments in healthcare, education, environmental protection, and space exploration. It's crucial to consider both opportunities and challenges.\n\nHealthcare: AI can assist in disease diagnosis, drug discovery, and personalized treatment plans.\n\nEducation: AI-powered tutoring systems, personalized learning, and automated grading can enhance education.\n\nEnvironment: AI can help monitor and predict environmental changes, optimize resource usage, and develop sustainable solutions.\n\nSpace Exploration: AI can aid in mission planning, data analysis, and autonomous systems for space exploration.\n\nHowever, AI also raises concerns about job displacement, ethical challenges, and potential misuse. Responsible development and governance of AI will be crucial.",
                    resources: [
                        "https://www.example.com/ai-future-opportunities",
                        "https://www.example.com/ai-future-challenges"
                    ],
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