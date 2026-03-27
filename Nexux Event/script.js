// --- DATABASE LOGIC (Using LocalStorage) ---
let attendees = JSON.parse(localStorage.getItem('nexux_users')) || [];

// --- ELEMENTS ---
const regForm = document.getElementById('registration-form');
const adminTable = document.getElementById('admin-table-body');
const publicView = document.getElementById('public-page');
const adminView = document.getElementById('admin-page');
const modal = document.getElementById('login-modal');

// --- 1. FUNCTION: REGISTER A USER ---
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newUser = {
        id: Date.now(),
        name: document.getElementById('reg-name').value,
        email: document.getElementById('reg-email').value
    };

    attendees.push(newUser);
    localStorage.setItem('nexux_users', JSON.stringify(attendees));
    
    alert(`Thank you ${newUser.name}! You are registered.`);
    regForm.reset();
});

// --- 2. FUNCTION: ADMIN LOGIN ---
document.getElementById('open-login').onclick = () => modal.style.display = 'flex';
document.getElementById('login-cancel').onclick = () => modal.style.display = 'none';

document.getElementById('login-confirm').onclick = () => {
    const pass = document.getElementById('admin-password').value;
    if (pass === "admin123") { // DEFAULT PASSWORD
        modal.style.display = 'none';
        showAdmin();
    } else {
        alert("Wrong Password! Try 'admin123'");
    }
};

// --- 3. FUNCTION: SHOW ADMIN DASHBOARD ---
function showAdmin() {
    publicView.style.display = 'none';
    adminView.style.display = 'block';
    updateAdminTable();
}

document.getElementById('logout-btn').onclick = () => {
    adminView.style.display = 'none';
    publicView.style.display = 'block';
};

// --- 4. FUNCTION: MANAGE TABLE & DELETE ---
function updateAdminTable() {
    adminTable.innerHTML = '';
    document.getElementById('total-count').innerText = attendees.length;

    attendees.forEach(user => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button class="delete-btn" onclick="deleteUser(${user.id})">Remove</button></td>
            </tr>
        `;
        adminTable.innerHTML += row;
    });
}

function deleteUser(id) {
    if(confirm("Delete this attendee?")) {
        attendees = attendees.filter(u => u.id !== id);
        localStorage.setItem('nexux_users', JSON.stringify(attendees));
        updateAdminTable();
    }
}