function handleLogin() {
    const studentId = document.getElementById('studentId').value;
    const errorMsg = document.getElementById('error-msg');

    // Simple validation logic
    if (studentId.length >= 5) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerText = "Error: Student ID must be at least 5 characters.";
    }
}

function showSection(section) {
    const content = document.getElementById('dynamic-content');
    
    // Updates the dashboard based on nav clicks
    const data = {
        'courses': { title: 'Your Courses', text: 'CS101, Math 202, Web Dev.' },
        'register': { title: 'Registration', text: 'Fall 2026 Enrollment is Open.' },
        'profile': { title: 'User Profile', text: 'Settings and Personal Info.' }
    };

    content.innerHTML = `<h3>${data[section].title}</h3><p>${data[section].text}</p>`;
}

function logout() {
    location.reload(); // Refresh the page to go back to login
}