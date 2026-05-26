const books = [
    {
        id: 1,
        title: "Harry Potter i Kamieñ Filozoficzny",
        author: "J.K. Rowling",
        content: "Harry Potter to ch³opiec, który odkrywa, ¿e jest czarodziejem..."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        content: "1984 to powieœæ dystopijna opisuj¹ca spo³eczeñstwo pod kontrol¹..."
    },
    {
        id: 3,
        title: "Lalka",
        author: "Boles³aw Prus",
        content: "Lalka to powieœæ opowiadaj¹ca o losach przedsiêbiorcy Stanis³awa Wokulskiego..."
    }
];

const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

// Wyœwietl listê ksi¹¿ek
function displayBooks() {
    const bookList = document.getElementById('bookList');
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} – ${book.author}`;
        bookList.appendChild(li);
    });
}

// Symulacja odpowiedzi AI na podstawie tytu³u ksi¹¿ki
function getAnswer(question) {
    const lowerQuestion = question.toLowerCase();

    for (let book of books) {
        if (lowerQuestion.includes(book.title.toLowerCase())) {
            return `Oto informacje o ksi¹¿ce "${book.title}":\n${book.content}`;
        }
    }

    return "Nie znam tej ksi¹¿ki. Spróbuj zadaæ pytanie o inn¹ ksi¹¿kê.";
}

function sendMessage() {
    const message = userInput.value;
    if (!message.trim()) return;

    // Wyœwietl wiadomoœæ u¿ytkownika
    chatBox.innerHTML += `<p><strong>Uczeñ:</strong> ${message}</p>`;
    userInput.value = "";

    // OdpowiedŸ AI
    const answer = getAnswer(message);
    chatBox.innerHTML += `<p><strong>Asystent:</strong> ${answer}</p>`;

    // Przewiñ do koñca
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Uruchom po za³adowaniu strony
window.onload = () => {
    displayBooks();
};
