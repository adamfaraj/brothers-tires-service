// Single source of truth for every "Book Now" / "Book Us on Kuruma" link.
// Update this one line when the real KurumaWorks shop id is ready.
const KURUMA_URL = 'https://kurumaworks.com/mechanics/nc/durham/brothers-tires-service';

document.querySelectorAll('[data-kuruma-link]').forEach((link) => {
  link.href = KURUMA_URL;
});

document.getElementById('year').textContent = new Date().getFullYear();

// Hours: Mon-Fri 8:00-18:00, Sat 8:00-15:00, Sun 9:00-14:00, America/New_York.
const HOURS = {
  0: [9, 14], // Sunday
  1: [8, 18],
  2: [8, 18],
  3: [8, 18],
  4: [8, 18],
  5: [8, 18],
  6: [8, 15], // Saturday
};

function updateOpenStatus() {
  const el = document.getElementById('open-status');
  if (!el) return;

  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const weekdayStr = parts.find((p) => p.type === 'weekday').value;
  const hour = Number(parts.find((p) => p.type === 'hour').value);
  const minute = Number(parts.find((p) => p.type === 'minute').value);
  const day = weekdayMap[weekdayStr];
  const [openHour, closeHour] = HOURS[day];
  const minutesNow = hour * 60 + minute;
  const isOpen = minutesNow >= openHour * 60 && minutesNow < closeHour * 60;

  const todayHours = `${formatHour(openHour)}–${formatHour(closeHour)}`;

  if (isOpen) {
    el.textContent = `Open now · today ${todayHours}`;
    el.dataset.state = 'open';
  } else {
    el.textContent = `Closed now · today ${todayHours}`;
    el.dataset.state = 'closed';
  }
}

function formatHour(h) {
  const period = h >= 12 ? 'pm' : 'am';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}${period}`;
}

updateOpenStatus();
