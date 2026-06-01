// List of major cities with their time zones
const timeZones = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Sydney', timezone: 'Australia/Sydney' },
    { city: 'Dubai', timezone: 'Asia/Dubai' },
    { city: 'Singapore', timezone: 'Asia/Singapore' },
    { city: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Toronto', timezone: 'America/Toronto' },
    { city: 'São Paulo', timezone: 'America/Sao_Paulo' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
    { city: 'Bangkok', timezone: 'Asia/Bangkok' },
];

// Initialize clocks on page load
function initializeClocks() {
    const clocksGrid = document.getElementById('clocksGrid');
    clocksGrid.innerHTML = ''; // Clear existing clocks

    timeZones.forEach(({ city, timezone }) => {
        const clockCard = createClockCard(city, timezone);
        clocksGrid.appendChild(clockCard);
    });

    // Update all clocks immediately
    updateAllClocks();

    // Update clocks every second
    setInterval(updateAllClocks, 1000);
}

// Create a clock card element
function createClockCard(city, timezone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.id = `clock-${city.replace(/\s+/g, '-').toLowerCase()}`;
    card.innerHTML = `
        <div class="city-name">${city}</div>
        <div class="time-display" data-timezone="${timezone}">--:--:--</div>
        <div class="timezone">${timezone}</div>
        <div class="day-period"></div>
    `;
    return card;
}

// Update all clocks
function updateAllClocks() {
    const timeDisplays = document.querySelectorAll('.time-display');

    timeDisplays.forEach((display) => {
        const timezone = display.getAttribute('data-timezone');
        const time = getTimeInTimezone(timezone);
        display.textContent = time.formatted;

        // Update day/night indicator
        const dayPeriodEl = display.parentElement.querySelector('.day-period');
        dayPeriodEl.textContent = time.period;

        // Add night class if it's nighttime
        const card = display.parentElement;
        if (time.hour >= 18 || time.hour < 6) {
            card.classList.add('night');
        } else {
            card.classList.remove('night');
        }
    });
}

// Get current time in a specific timezone
function getTimeInTimezone(timezone) {
    try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });

        const parts = formatter.formatToParts(now);
        const hour = parseInt(parts.find(p => p.type === 'hour').value, 10);
        const minute = parts.find(p => p.type === 'minute').value;
        const second = parts.find(p => p.type === 'second').value;

        const formatted = `${parts.find(p => p.type === 'hour').value}:${minute}:${second}`;
        const period = hour >= 12 ? 'PM' : 'AM';

        return {
            formatted,
            hour,
            minute,
            second,
            period,
        };
    } catch (error) {
        console.error(`Error getting time for timezone ${timezone}:`, error);
        return {
            formatted: '--:--:--',
            hour: 0,
            period: '--',
        };
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeClocks);