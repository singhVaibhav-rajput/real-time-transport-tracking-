// Main Application JavaScript
class PunjabBusTracker {
    constructor() {
        this.map = null;
        this.userLocation = null;
        this.busMarkers = [];
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.initializeTheme();
        this.initializeEventListeners();
        this.initializeMap();
        this.loadSampleBusData();
        this.initializeLanguage();
    }

    // Theme Management
    initializeTheme() {
        document.body.className = this.currentTheme + '-mode';
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = this.currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.className = this.currentTheme + '-mode';
        
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = this.currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        }
        
        localStorage.setItem('theme', this.currentTheme);
        
        // Add smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // Event Listeners
    initializeEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Language selector
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                setLanguage(e.target.value);
            });
        }

        // Search form
        const searchForm = document.getElementById('busSearchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => this.handleSearch(e));
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Map controls
        const locateBtn = document.getElementById('locateBtn');
        if (locateBtn) {
            locateBtn.addEventListener('click', () => this.locateUser());
        }

        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.refreshBusData());
        }

        // Route cards
        document.querySelectorAll('.route-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.trackRoute(e.target));
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Language Management
    initializeLanguage() {
        const savedLang = localStorage.getItem('preferred-language') || 'en';
        const langSelect = document.getElementById('languageSelect');
        if (langSelect) {
            langSelect.value = savedLang;
        }
        setLanguage(savedLang);
    }

    // Map Initialization
    initializeMap() {
        try {
            // Initialize map centered on Punjab
            this.map = L.map('map').setView([30.7333, 76.7794], 8);
            
            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(this.map);

            // Add map event listeners
            this.map.on('load', () => {
                console.log('Map loaded successfully');
            });

        } catch (error) {
            console.error('Error initializing map:', error);
        }
    }

    // User Location
    locateUser() {
        if (navigator.geolocation) {
            this.showLoading(true);
            
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    
                    if (this.map) {
                        this.map.setView([this.userLocation.lat, this.userLocation.lng], 13);
                        
                        // Add user location marker
                        L.marker([this.userLocation.lat, this.userLocation.lng])
                            .addTo(this.map)
                            .bindPopup('Your Location')
                            .openPopup();
                    }
                    
                    this.showLoading(false);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    this.showLoading(false);
                    alert('Unable to get your location. Please enable location services.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    // Bus Data Management
    loadSampleBusData() {
        // Sample bus data for demonstration
        this.sampleBuses = [
            {
                id: 'PB01A1234',
                route: 'Chandigarh → Patiala',
                from: 'Chandigarh',
                to: 'Patiala',
                currentLocation: { lat: 30.7333, lng: 76.7794 },
                status: 'active',
                arrivalTime: '14:30',
                departureTime: '12:00',
                delay: 0
            },
            {
                id: 'PB02B5678',
                route: 'Ludhiana → Jalandhar',
                from: 'Ludhiana',
                to: 'Jalandhar',
                currentLocation: { lat: 30.901, lng: 75.857 },
                status: 'active',
                arrivalTime: '15:45',
                departureTime: '13:30',
                delay: 5
            },
            {
                id: 'PB03C9012',
                route: 'Amritsar → Delhi',
                from: 'Amritsar',
                to: 'Delhi',
                currentLocation: { lat: 31.634, lng: 74.8723 },
                status: 'delayed',
                arrivalTime: '18:20',
                departureTime: '10:00',
                delay: 15
            }
        ];

        this.displayBusMarkers();
    }

    displayBusMarkers() {
        // Clear existing markers
        this.busMarkers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.busMarkers = [];

        // Add bus markers to map
        this.sampleBuses.forEach(bus => {
            const marker = L.marker([bus.currentLocation.lat, bus.currentLocation.lng], {
                icon: L.divIcon({
                    className: `bus-marker ${bus.status}`,
                    html: `<div class="bus-icon"><i class="fas fa-bus"></i></div>`,
                    iconSize: [30, 30]
                })
            }).addTo(this.map);

            marker.bindPopup(`
                <div class="bus-popup">
                    <h4>${bus.id}</h4>
                    <p><strong>Route:</strong> ${bus.route}</p>
                    <p><strong>Status:</strong> ${bus.status}</p>
                    <p><strong>Arrival:</strong> ${bus.arrivalTime}</p>
                    ${bus.delay > 0 ? `<p class="delay">Delayed by ${bus.delay} min</p>` : ''}
                </div>
            `);

            this.busMarkers.push(marker);
        });
    }

    refreshBusData() {
        this.showLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
            // Update bus positions (simulation)
            this.sampleBuses.forEach(bus => {
                bus.currentLocation.lat += (Math.random() - 0.5) * 0.01;
                bus.currentLocation.lng += (Math.random() - 0.5) * 0.01;
            });
            
            this.displayBusMarkers();
            this.showLoading(false);
        }, 1000);
    }

    // Search Functionality
    handleSearch(e) {
        e.preventDefault();
        
        const fromLocation = document.getElementById('fromLocation').value;
        const toLocation = document.getElementById('toLocation').value;
        const busNumber = document.getElementById('busNumber').value;

        if (!fromLocation || !toLocation) {
            alert('Please enter both departure and destination locations.');
            return;
        }

        this.showLoading(true);
        
        // Simulate search delay
        setTimeout(() => {
            this.displaySearchResults(fromLocation, toLocation, busNumber);
            this.showLoading(false);
        }, 1000);
    }

    displaySearchResults(from, to, busNumber) {
        const resultsSection = document.getElementById('search-results');
        const resultsGrid = document.getElementById('resultsGrid');
        
        // Filter buses based on search criteria
        let filteredBuses = this.sampleBuses;
        
        if (busNumber) {
            filteredBuses = filteredBuses.filter(bus => 
                bus.id.toLowerCase().includes(busNumber.toLowerCase())
            );
        } else {
            filteredBuses = filteredBuses.filter(bus =>
                bus.from.toLowerCase().includes(from.toLowerCase()) &&
                bus.to.toLowerCase().includes(to.toLowerCase())
            );
        }

        // Generate HTML for results
        resultsGrid.innerHTML = filteredBuses.map(bus => `
            <div class="bus-card fade-in">
                <div class="bus-header">
                    <span class="bus-number">${bus.id}</span>
                    <span class="bus-status status-${bus.status}">${bus.status}</span>
                </div>
                <div class="bus-route">
                    <div class="route-path">${bus.route}</div>
                    <div class="route-details">
                        <span>Departure: ${bus.departureTime}</span>
                        <span>Arrival: ${bus.arrivalTime}</span>
                    </div>
                </div>
                <div class="bus-actions">
                    <button class="track-btn" onclick="app.trackBus('${bus.id}')">Track Bus</button>
                    <button class="info-btn" onclick="app.showBusInfo('${bus.id}')">Bus Info</button>
                </div>
            </div>
        `).join('');

        // Show results section
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Bus Tracking
    trackBus(busId) {
        const bus = this.sampleBuses.find(b => b.id === busId);
        if (bus) {
            // Center map on bus location
            this.map.setView([bus.currentLocation.lat, bus.currentLocation.lng], 15);
            
            // Find and open the bus marker popup
            const marker = this.busMarkers.find(m => 
                m.getLatLng().lat === bus.currentLocation.lat
            );
            if (marker) {
                marker.openPopup();
            }
            
            // Scroll to map
            document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
        }
    }

    showBusInfo(busId) {
        const bus = this.sampleBuses.find(b => b.id === busId);
        if (bus) {
            alert(`Bus Information:\n\nBus ID: ${bus.id}\nRoute: ${bus.route}\nStatus: ${bus.status}\nDeparture: ${bus.departureTime}\nArrival: ${bus.arrivalTime}${bus.delay > 0 ? `\nDelay: ${bus.delay} minutes` : ''}`);
        }
    }

    trackRoute(button) {
        const routeCard = button.closest('.route-card');
        const routeName = routeCard.querySelector('h3').textContent;
        
        // Find buses on this route
        const routeBuses = this.sampleBuses.filter(bus => 
            bus.route.includes(routeName.split(' ↔ ')[0]) && 
            bus.route.includes(routeName.split(' ↔ ')[1])
        );
        
        if (routeBuses.length > 0) {
            // Center map on first bus
            this.trackBus(routeBuses[0].id);
        } else {
            alert('No buses found on this route currently.');
        }
    }

    // Mobile Menu
    toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }

    // Loading Spinner
    showLoading(show) {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = show ? 'flex' : 'none';
        }
    }
}

// Initialize the application
const app = new PunjabBusTracker();

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Additional CSS for mobile menu and scrolled header
const additionalStyles = `
.nav-menu.active {
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--surface-color);
    flex-direction: column;
    padding: 1rem;
    box-shadow: var(--shadow-medium);
    border-top: 1px solid var(--border-color);
}

.nav-menu.active .nav-links {
    flex-direction: column;
    gap: 1rem;
}

.header.scrolled {
    background: rgba(248, 250, 252, 0.95);
    backdrop-filter: blur(10px);
}

.dark-mode .header.scrolled {
    background: rgba(30, 41, 59, 0.95);
}

.bus-marker {
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bus-marker.delayed {
    background: var(--secondary-color);
}

.bus-marker .bus-icon {
    color: white;
    font-size: 16px;
}

.bus-popup h4 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.bus-popup .delay {
    color: var(--secondary-color);
    font-weight: 600;
}
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
