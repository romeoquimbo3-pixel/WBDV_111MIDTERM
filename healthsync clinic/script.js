document.addEventListener('DOMContentLoaded', () => {
    
    console.log("HealthSync Clinic website initialized successfully.");

    // Select the key elements
    const regButton = document.getElementById('regButton');
    const bookNowBtn = document.getElementById('bookNowBtn');
    const viewHistoryBtn = document.getElementById('viewHistoryBtn');
    const callBtn = document.getElementById('callBtn');
    const msgBtn = document.getElementById('msgBtn');

    // Simple interaction messages for functional testing
    function showActionConfirm(actionTitle, actionText) {
        alert(`${actionTitle.toUpperCase()}\n\n${actionText}\nThis is a simulation. A real system would process this action.`);
    }

    // BUTTON INTERACTION LISTENERS

    // 1. REGISTRATION BUTTON (Verified Badge Concept)
    regButton.addEventListener('click', () => {
        showActionConfirm('Registration Process', 'Our secure registration form will synchronize your professional profile and data with our certified medical network.');
    });

    // 2. BOOKING CONFIRMATION
    bookNowBtn.addEventListener('click', () => {
        const service = document.getElementById('serviceSelect').value;
        const date = document.getElementById('dateInput').value;

        if (!date) {
            alert("Booking Error:\nPlease select a valid date for synchronization.");
            return;
        }
        
        showActionConfirm('Booking Confirmed', `Synchronization of your appointment for "${service}" on ${date} is processed. Our medical staff will contact you soon.`);
    });

    // 3. MEDICAL HISTORY VIEW
    viewHistoryBtn.addEventListener('click', () => {
        showActionConfirm('Medical History Access', 'A secure verification request has been synchronized with your account. Check your linked device to complete access.');
    });

    // 4. CONTACT STAFF (Call)
    callBtn.addEventListener('click', () => {
        // This is where you might integrate a tel: link or WebRTC process
        showActionConfirm('Contacting Staff', 'A call request is synchronized and will connect you with a professional advisor at HealthSync Clinic (Simulation).');
    });

    // 5. CONTACT STAFF (Message)
    msgBtn.addEventListener('click', () => {
        showActionConfirm('Secure Messaging', 'Your professional message request has been synchronized with our patient-records system. A staff member will respond shortly.');
    });

});

// Helper for smooth scrolling (not strictly button logic, but part of smooth navigation)
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    const headerHeight = document.querySelector('.main-header').offsetHeight;
    if (element) {
        const offsetPosition = element.offsetTop - headerHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}