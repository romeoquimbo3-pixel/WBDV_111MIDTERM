/* ==============================================
   1. PAGE NAVIGATION SYSTEM
   =============================================== */
const contentPages = document.querySelectorAll('.content-page');
const navLinks = document.querySelectorAll('.nav-item');

function showPage(pageId) {
    // 1. Hide all content pages
    contentPages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Remove 'active' status from navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Find and show the target page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 4. Update the navigation bar style (if not a dropdown item)
    navLinks.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`('${pageId}')`)) {
            link.classList.add('active');
        }
    });

    // 5. Reset page scroll to top
    window.scrollTo(0, 0);
}

// Function to handle logout from a dashboard
function logout() {
    alert("Logging out...");
    showPage('home');
}

/* ==============================================
   2. SAMPLE ORDER SYSTEM (Add to Cart)
   =============================================== */
const cartItemsContainer = document.querySelector('.cart-items');
const cartArray = [];

// Sample function to add an item based on gallery photos
function addSampleToCart(itemName) {
    if(!cartArray.includes(itemName)) {
        cartArray.push(itemName);
        updateCartDisplay();
        alert(`${itemName} added to cart.`);
    } else {
        alert(`${itemName} is already in the cart.`);
    }
}

// Function to update the cart display on the order page
function updateCartDisplay() {
    cartItemsContainer.innerHTML = ''; // Clear current display

    if(cartArray.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartArray.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `1x sample ${item}`;
            cartItemsContainer.appendChild(itemElement);
        });
    }
}

// Listen for clicks on the photo boxes in the home page gallery
document.querySelectorAll('.photo-box').forEach(box => {
    box.addEventListener('click', (e) => {
        // Get the specific furniture type from the span text
        const itemType = e.currentTarget.querySelector('span').textContent;
        addSampleToCart(itemType);
    });
});