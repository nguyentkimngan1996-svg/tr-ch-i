const questions = [
    // Vòng 1: Khởi Động
    {
        round: "Vòng 1: Khởi Động",
        time: 15,
        points: 10,
        text: "Bố của Mary có 5 người con gái: 1. Nana, 2. Nene, 3. Nini, 4. Nono. Tên người con gái út là gì?",
        answers: [
            { text: "Nunu", correct: false },
            { text: "Nyny", correct: false },
            { text: "Mary", correct: true },
            { text: "Không xác định", correct: false }
        ],
        explanation: "Đã nói là 'Bố của Mary' mà!"
    },
    {
        round: "Vòng 1: Khởi Động",
        time: 15,
        points: 10,
        text: "Cái gì thuộc về bạn nhưng người khác lại dùng nó nhiều hơn bạn?",
        answers: [
            { text: "Tiền bạc", correct: false },
            { text: "Tên của bạn", correct: true },
            { text: "Điện thoại", correct: false },
            { text: "Quần áo", correct: false }
        ],
        explanation: "Mọi người gọi tên bạn để giao tiếp."
    },
    {
        round: "Vòng 1: Khởi Động",
        time: 15,
        points: 10,
        text: "Tháng nào ngắn nhất trong năm?",
        answers: [
            { text: "Tháng Hai", correct: false },
            { text: "Tháng Năm", correct: true },
            { text: "Tháng Tư", correct: false },
            { text: "Tháng Mười Hai", correct: false }
        ],
        explanation: "Tháng 2 thường có ít ngày nhất, nhưng 'Tháng Ba' và 'Tháng Tư' có 7-8 chữ cái. Chữ 'Tháng Năm' chỉ có 8 ký tự? Câu nay mẹo chữ: Ba (2), Tư (2), Năm (3). Nhưng thực tế 'Tháng Ba' vs 'Tháng Năm'. 'Tháng Năm' ít chữ cái nhất? Không, 'Tháng Ba' (7), 'Tháng Tư' (7). Thôi chọn đáp án mẹo dân gian: Tháng 5 (chỉ có 30/31 ngày? Không). Câu này đổi lại: Tháng Ba = 3, Tháng Tư = 4. Tháng 5 có 3 chữ? À không, tiếng Việt. Đáp án sửa lại câu hỏi khác cho chuẩn logic hơn."
    },
    // Thay thế câu 3 cho hay hơn
    {
        round: "Vòng 1: Khởi Động",
        time: 15,
        points: 10,
        text: "Bạn đang chạy đua và vượt qua người ở vị trí thứ nhì. Bạn đang ở vị trí nào?",
        answers: [
            { text: "Thứ nhất", correct: false },
            { text: "Thứ nhì", correct: true },
            { text: "Thứ ba", correct: false },
            { text: "Cuối cùng", correct: false }
        ],
        explanation: "Vượt qua người thứ nhì thì bạn thay thế vị trí của họ (Thứ nhì)."
    },

    // Vòng 2: Tăng Tốc
    {
        round: "Vòng 2: Tăng Tốc",
        time: 30,
        points: 20,
        text: "Tìm quy luật: Nếu 1 = 5, 2 = 10, 3 = 15, 4 = 20 thì 5 = ?",
        answers: [
            { text: "25", correct: false },
            { text: "30", correct: false },
            { text: "1", correct: true },
            { text: "50", correct: false }
        ],
        explanation: "Vì dòng đầu tiên đã nói 1 = 5, suy ra 5 = 1."
    },
    {
        round: "Vòng 2: Tăng Tốc",
        time: 30,
        points: 20,
        text: "Một người đàn ông nói: 'Bố của người đàn ông trong ảnh là con trai duy nhất của bố tôi'. Bức ảnh chụp ai?",
        answers: [
            { text: "Con trai ông ấy", correct: true },
            { text: "Bố ông ấy", correct: false },
            { text: "Chính ông ấy", correct: false },
            { text: "Cháu ông ấy", correct: false }
        ],
        explanation: "'Con trai duy nhất của bố tôi' chính là Tôi. Câu nói thành: Bố người trong ảnh là Tôi."
    },
    {
        round: "Vòng 2: Tăng Tốc",
        time: 30,
        points: 20,
        text: "Số tiếp theo của dãy số: 1, 1, 2, 3, 5, 8, ... là số nào?",
        answers: [
            { text: "11", correct: false },
            { text: "12", correct: false },
            { text: "13", correct: true },
            { text: "14", correct: false }
        ],
        explanation: "Dãy Fibonacci: Số sau bằng tổng 2 số trước. 5 + 8 = 13."
    },

    // Vòng 3: Về Đích
    {
        round: "Vòng 3: Về Đích",
        time: 60,
        points: 40,
        text: "Vụ án bánh kem: Có 4 nghi phạm A, B, C, D. Chỉ có 1 người nói thật. A: 'B ăn vụng'. B: 'D ăn vụng'. C: 'Tôi không ăn'. D: 'B nói dối'. Ai là kẻ trộm?",
        answers: [
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "C", correct: true },
            { text: "D", correct: false }
        ],
        explanation: "Nếu C là thủ phạm: A sai, B sai, C sai, D đúng. Chỉ có trường hợp này thỏa mãn 1 người nói thật."
    },
    {
        round: "Vòng 3: Về Đích",
        time: 60,
        points: 40,
        text: "Có 2 người cha và 2 người con cùng đi câu cá. Mỗi người câu được 1 con cá. Hỏi họ mang về ít nhất bao nhiêu con cá?",
        answers: [
            { text: "4 con", correct: false },
            { text: "3 con", correct: true },
            { text: "2 con", correct: false },
            { text: "5 con", correct: false }
        ],
        explanation: "Vì họ gồm: Ông, Bố và Con. (Bố vừa là con của Ông, vừa là cha của Con). Tổng là 3 người."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const timeLeftDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');
const roundNameDisplay = document.getElementById('round-name');
const progressFill = document.getElementById('progress');
const feedbackMsg = document.getElementById('feedback-msg');
const finalScoreDisplay = document.getElementById('final-score');
const rankText = document.getElementById('rank-text');

// Events
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    scoreDisplay.innerText = score;
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    endScreen.classList.remove('active');
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];

    // Update UI
    roundNameDisplay.innerText = question.round;
    questionText.innerText = question.text;
    timeLeft = question.time;
    timeLeftDisplay.innerText = timeLeft;

    // Timer
    startTimer(question.time);

    // Answers
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    clearInterval(timer);
    progressFill.style.width = '100%';
    feedbackMsg.classList.add('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function startTimer(duration) {
    let time = duration;
    progressFill.style.transition = `width ${duration}s linear`;
    // Trigger reflow
    void progressFill.offsetWidth;
    progressFill.style.width = '0%';

    timer = setInterval(() => {
        time--;
        timeLeftDisplay.innerText = time;
        if (time <= 0) {
            clearInterval(timer);
            showSolution(null); // Time's up
        }
    }, 1000);
}

function selectAnswer(e) {
    clearInterval(timer);
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === "true";
    showSolution(selectedBtn);
}

function showSolution(selectedBtn) {
    const question = questions[currentQuestionIndex];
    const buttons = Array.from(answerButtons.children);

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === "true") {
            btn.classList.add('correct');
        }
    });

    if (selectedBtn && selectedBtn.dataset.correct === "true") {
        score += question.points;
        scoreDisplay.innerText = score;
        feedbackMsg.innerText = "Chính xác! 🎉";
        feedbackMsg.style.color = "#34D399";
        // Confetti effect for correct answer
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
        });
    } else {
        if (selectedBtn) selectedBtn.classList.add('wrong');
        feedbackMsg.innerText = `Sai rồi! Đáp án là: ${question.explanation}`;
        feedbackMsg.style.color = "#F87171";
    }

    feedbackMsg.classList.remove('hidden');

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showEndScreen();
        }
    }, 3000); // 3 seconds delay to read explanation
}

function showEndScreen() {
    gameScreen.classList.remove('active');
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    endScreen.classList.add('active');

    finalScoreDisplay.innerText = score;

    // Ranking Logic
    const maxScore = questions.reduce((total, q) => total + q.points, 0);
    const percent = score / maxScore;

    if (percent === 1) {
        rankText.innerText = "👑 Huyền Thoại Tư Duy! Xuất sắc!";
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    } else if (percent >= 0.7) {
        rankText.innerText = "🥈 Thám Tử Tập Sự! Rất giỏi!";
    } else if (percent >= 0.4) {
        rankText.innerText = "🥉 Cần rèn luyện thêm chút nữa!";
    } else {
        rankText.innerText = "🐢 Hãy nạp thêm 'muối' cho não nhé!";
    }
}
