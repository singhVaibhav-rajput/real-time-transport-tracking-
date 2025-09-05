// Multi-language support for English, Hindi, and Punjabi
const translations = {
    en: {
        'site-title': 'Punjab Bus Tracker',
        'nav-home': 'Home',
        'nav-search': 'Search',
        'nav-routes': 'Routes',
        'nav-about': 'About',
        'hero-title': 'Track Your Bus in Real-Time',
        'hero-subtitle': 'Get live updates on Punjab bus locations, routes, and arrival times',
        'from-label': 'From',
        'to-label': 'To',
        'bus-number-label': 'Bus Number (Optional)',
        'from-placeholder': 'Enter departure location',
        'to-placeholder': 'Enter destination',
        'bus-number-placeholder': 'Enter bus number',
        'search-button': 'Search Buses',
        'search-results-title': 'Available Buses',
        'live-tracking-title': 'Live Bus Tracking',
        'popular-routes-title': 'Popular Routes',
        'route-distance': 'Distance',
        'route-duration': 'Duration',
        'track-route': 'Track Route',
        'features-title': 'Why Choose Punjab Bus Tracker?',
        'real-time-title': 'Real-time Tracking',
        'real-time-desc': 'Get live location updates of all Punjab buses with GPS accuracy',
        'arrival-time-title': 'Arrival Predictions',
        'arrival-time-desc': 'Know exactly when your bus will arrive at your stop',
        'route-info-title': 'Route Information',
        'route-info-desc': 'Complete details about bus routes, stops, and schedules',
        'notifications-title': 'Smart Notifications',
        'notifications-desc': 'Get alerts for delays, route changes, and arrival times',
        'footer-about': 'About Punjab Bus Tracker',
        'footer-description': 'Making public transportation in Punjab more accessible and efficient through real-time tracking technology.',
        'footer-links': 'Quick Links',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-contact': 'Contact Us',
        'footer-help': 'Help & Support',
        'footer-transport': 'Transport Partners',
        'footer-rights': 'All rights reserved.',
        'loading-text': 'Loading...',
        'status-active': 'Active',
        'status-delayed': 'Delayed',
        'arrival-time': 'Arrival Time',
        'departure-time': 'Departure Time',
        'track-bus': 'Track Bus',
        'bus-info': 'Bus Info'
    },
    hi: {
        'site-title': 'पंजाब बस ट्रैकर',
        'nav-home': 'होम',
        'nav-search': 'खोजें',
        'nav-routes': 'रूट',
        'nav-about': 'हमारे बारे में',
        'hero-title': 'अपनी बस को रियल-टाइम में ट्रैक करें',
        'hero-subtitle': 'पंजाब की बसों के लाइव लोकेशन, रूट और आने का समय जानें',
        'from-label': 'कहाँ से',
        'to-label': 'कहाँ तक',
        'bus-number-label': 'बस नंबर (वैकल्पिक)',
        'from-placeholder': 'प्रस्थान स्थान दर्ज करें',
        'to-placeholder': 'गंतव्य दर्ज करें',
        'bus-number-placeholder': 'बस नंबर दर्ज करें',
        'search-button': 'बस खोजें',
        'search-results-title': 'उपलब्ध बसें',
        'live-tracking-title': 'लाइव बस ट्रैकिंग',
        'popular-routes-title': 'लोकप्रिय रूट',
        'route-distance': 'दूरी',
        'route-duration': 'समयावधि',
        'track-route': 'रूट ट्रैक करें',
        'features-title': 'पंजाब बस ट्रैकर क्यों चुनें?',
        'real-time-title': 'रियल-टाइम ट्रैकिंग',
        'real-time-desc': 'GPS की सटीकता के साथ पंजाब की सभी बसों के लाइव लोकेशन अपडेट पाएं',
        'arrival-time-title': 'आगमन की भविष्यवाणी',
        'arrival-time-desc': 'जानें कि आपकी बस आपके स्टॉप पर कब पहुंचेगी',
        'route-info-title': 'रूट की जानकारी',
        'route-info-desc': 'बस रूट, स्टॉप और समय सारिणी की पूरी जानकारी',
        'notifications-title': 'स्मार्ट नोटिफिकेशन',
        'notifications-desc': 'देरी, रूट बदलाव और आगमन के समय के लिए अलर्ट पाएं',
        'footer-about': 'पंजाब बस ट्रैकर के बारे में',
        'footer-description': 'रियल-टाइम ट्रैकिंग तकनीक के माध्यम से पंजाब में सार्वजनिक परिवहन को अधिक सुलभ और कुशल बनाना।',
        'footer-links': 'त्वरित लिंक',
        'footer-privacy': 'गोपनीयता नीति',
        'footer-terms': 'सेवा की शर्तें',
        'footer-contact': 'संपर्क करें',
        'footer-help': 'सहायता और समर्थन',
        'footer-transport': 'परिवहन भागीदार',
        'footer-rights': 'सभी अधिकार सुरक्षित।',
        'loading-text': 'लोड हो रहा है...',
        'status-active': 'सक्रिय',
        'status-delayed': 'विलंबित',
        'arrival-time': 'आगमन का समय',
        'departure-time': 'प्रस्थान का समय',
        'track-bus': 'बस ट्रैक करें',
        'bus-info': 'बस की जानकारी'
    },
    pa: {
        'site-title': 'ਪੰਜਾਬ ਬੱਸ ਟਰੈਕਰ',
        'nav-home': 'ਘਰ',
        'nav-search': 'ਖੋਜ',
        'nav-routes': 'ਰੂਟ',
        'nav-about': 'ਸਾਡੇ ਬਾਰੇ',
        'hero-title': 'ਆਪਣੀ ਬੱਸ ਨੂੰ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਟਰੈਕ ਕਰੋ',
        'hero-subtitle': 'ਪੰਜਾਬ ਦੀਆਂ ਬੱਸਾਂ ਦੀ ਲਾਈਵ ਲੋਕੇਸ਼ਨ, ਰੂਟ ਅਤੇ ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ ਜਾਣੋ',
        'from-label': 'ਕਿੱਥੋਂ',
        'to-label': 'ਕਿੱਥੇ',
        'bus-number-label': 'ਬੱਸ ਨੰਬਰ (ਵਿਕਲਪਿਕ)',
        'from-placeholder': 'ਰਵਾਨਗੀ ਦਾ ਸਥਾਨ ਦਰਜ ਕਰੋ',
        'to-placeholder': 'ਮੰਜ਼ਿਲ ਦਰਜ ਕਰੋ',
        'bus-number-placeholder': 'ਬੱਸ ਨੰਬਰ ਦਰਜ ਕਰੋ',
        'search-button': 'ਬੱਸ ਖੋਜੋ',
        'search-results-title': 'ਉਪਲਬਧ ਬੱਸਾਂ',
        'live-tracking-title': 'ਲਾਈਵ ਬੱਸ ਟਰੈਕਿੰਗ',
        'popular-routes-title': 'ਪ੍ਰਸਿੱਧ ਰੂਟ',
        'route-distance': 'ਦੂਰੀ',
        'route-duration': 'ਸਮਾਂ',
        'track-route': 'ਰੂਟ ਟਰੈਕ ਕਰੋ',
        'features-title': 'ਪੰਜਾਬ ਬੱਸ ਟਰੈਕਰ ਕਿਉਂ ਚੁਣੋ?',
        'real-time-title': 'ਰੀਅਲ-ਟਾਈਮ ਟਰੈਕਿੰਗ',
        'real-time-desc': 'GPS ਦੀ ਸਟੀਕਤਾ ਨਾਲ ਪੰਜਾਬ ਦੀਆਂ ਸਾਰੀਆਂ ਬੱਸਾਂ ਦੇ ਲਾਈਵ ਲੋਕੇਸ਼ਨ ਅਪਡੇਟ ਪ੍ਰਾਪਤ ਕਰੋ',
        'arrival-time-title': 'ਪਹੁੰਚਣ ਦੀ ਭਵਿੱਖਬਾਣੀ',
        'arrival-time-desc': 'ਜਾਣੋ ਕਿ ਤੁਹਾਡੀ ਬੱਸ ਤੁਹਾਡੇ ਸਟਾਪ ਤੇ ਕਦੋਂ ਪਹੁੰਚੇਗੀ',
        'route-info-title': 'ਰੂਟ ਦੀ ਜਾਣਕਾਰੀ',
        'route-info-desc': 'ਬੱਸ ਰੂਟ, ਸਟਾਪ ਅਤੇ ਸਮਾਂ ਸਾਰਣੀ ਦੀ ਪੂਰੀ ਜਾਣਕਾਰੀ',
        'notifications-title': 'ਸਮਾਰਟ ਨੋਟੀਫਿਕੇਸ਼ਨ',
        'notifications-desc': 'ਦੇਰੀ, ਰੂਟ ਬਦਲਾਅ ਅਤੇ ਪਹੁੰਚਣ ਦੇ ਸਮੇਂ ਲਈ ਅਲਰਟ ਪ੍ਰਾਪਤ ਕਰੋ',
        'footer-about': 'ਪੰਜਾਬ ਬੱਸ ਟਰੈਕਰ ਬਾਰੇ',
        'footer-description': 'ਰੀਅਲ-ਟਾਈਮ ਟਰੈਕਿੰਗ ਤਕਨੀਕ ਰਾਹੀਂ ਪੰਜਾਬ ਵਿੱਚ ਜਨਤਕ ਆਵਾਜਾਈ ਨੂੰ ਵਧੇਰੇ ਸੁਲਭ ਅਤੇ ਕੁਸ਼ਲ ਬਣਾਉਣਾ।',
        'footer-links': 'ਤੇਜ਼ ਲਿੰਕ',
        'footer-privacy': 'ਗੁਪਤਤਾ ਨੀਤੀ',
        'footer-terms': 'ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ',
        'footer-contact': 'ਸਾਨੂੰ ਸੰਪਰਕ ਕਰੋ',
        'footer-help': 'ਸਹਾਇਤਾ ਅਤੇ ਸਮਰਥਨ',
        'footer-transport': 'ਆਵਾਜਾਈ ਭਾਈਵਾਲ',
        'footer-rights': 'ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ।',
        'loading-text': 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
        'status-active': 'ਸਰਗਰਮ',
        'status-delayed': 'ਦੇਰੀ',
        'arrival-time': 'ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ',
        'departure-time': 'ਰਵਾਨਗੀ ਦਾ ਸਮਾਂ',
        'track-bus': 'ਬੱਸ ਟਰੈਕ ਕਰੋ',
        'bus-info': 'ਬੱਸ ਦੀ ਜਾਣਕਾਰੀ'
    }
};

// Language management functions
function getCurrentLanguage() {
    return document.body.getAttribute('data-lang') || 'en';
}

function setLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    updatePageText(lang);
    localStorage.setItem('preferred-language', lang);
}

function updatePageText(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-key-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = savedLang;
        setLanguage(savedLang);
    }
});
