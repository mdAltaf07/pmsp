// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menu-icon');
    mobileNav.classList.toggle('active');
}

// Results Page Functions
function showResults(event) {
    event.preventDefault();
    document.getElementById('resultsSearchForm').style.display = 'none';
    document.getElementById('resultsDisplay').style.display = 'block';
}

function resetResults() {
    document.getElementById('resultsSearchForm').style.display = 'block';
    document.getElementById('resultsDisplay').style.display = 'none';
    document.getElementById('resultRoll').value = '';
    document.getElementById('resultDob').value = '';
}

// Admit Card Functions
function showAdmitCard(event) {
    event.preventDefault();
    document.getElementById('admitSearchForm').style.display = 'none';
    document.getElementById('admitDisplay').style.display = 'block';
}

function resetAdmitCard() {
    document.getElementById('admitSearchForm').style.display = 'block';
    document.getElementById('admitDisplay').style.display = 'none';
    document.getElementById('admitRoll').value = '';
    document.getElementById('admitDob').value = '';
}

// Fee Payment Functions
function showFeeDetails(event) {
    event.preventDefault();
    document.getElementById('feeSearchForm').style.display = 'none';
    document.getElementById('feeDetailsDisplay').style.display = 'block';
}

function resetFee() {
    document.getElementById('feeSearchForm').style.display = 'block';
    document.getElementById('feeDetailsDisplay').style.display = 'none';
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('paymentSuccess').style.display = 'none';
    document.getElementById('feeRoll').value = '';
}

function showPayment() {
    document.getElementById('feeDetailsDisplay').style.display = 'none';
    document.getElementById('paymentForm').style.display = 'block';
}

function backToFeeDetails() {
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('feeDetailsDisplay').style.display = 'block';
}

function processPayment(event) {
    event.preventDefault();
    
    // Generate transaction ID and date
    const transactionId = 'TXN' + Date.now();
    const transactionDate = new Date().toLocaleString();
    
    document.getElementById('transactionId').textContent = transactionId;
    document.getElementById('transactionDate').textContent = transactionDate;
    
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('paymentSuccess').style.display = 'block';
}

function resetFeePayment() {
    document.getElementById('paymentSuccess').style.display = 'none';
    document.getElementById('feeSearchForm').style.display = 'block';
    document.getElementById('feeRoll').value = '';
}

// Login Tab Switching
function switchTab(tabName) {
    // Remove active class from all tabs and tab contents
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab
    event.target.classList.add('active');
    
    // Show corresponding tab content
    const selectedContent = document.getElementById(tabName + 'Form');
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

// Login Form Handler
function handleLogin(event) {
    event.preventDefault();
    alert('Login functionality would be implemented here!');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showPage('home');
});