const API_URL = 'http://localhost:3001/weather';

const weatherList = document.getElementById('weather-list');
const addWeatherForm = document.getElementById('addWeatherForm');

// פונקציה להצגת כל נתוני מזג האוויר
async function displayWeather() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('שגיאה בטעינת הנתונים מהשרת');
    const weatherData = await res.json();
    
    // ניקוי הרשימה הקיימת
    weatherList.innerHTML = ''; 
    
    // הצגת כל עיר ברשימה
    weatherData.forEach(weather => {
      const weatherDiv = document.createElement('div');
      weatherDiv.innerHTML = `
        <span>עיר: <strong>${weather.city}</strong>, טמפרטורה: <strong>${weather.temp}°C</strong></span>
        <button class="delete-btn" data-id="${weather.id}">מחק</button>
      `;
      weatherList.appendChild(weatherDiv);
    });

  } catch (err) {
    console.error(err);
    weatherList.innerHTML = '<p>לא ניתן לטעון נתונים</p>';
  }
}

// טיפול באירוע הוספת עיר חדשה
addWeatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.getElementById('newCity').value;
  const temp = parseFloat(document.getElementById('newTemp').value);

  try {
    const res = await fetch(API_URL, {
      method: 'POST', // שליחת בקשת POST להוספת מידע חדש
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city, temp }),
    });
    if (!res.ok) throw new Error('שגיאה בהוספת הנתונים');
    
    addWeatherForm.reset(); // איפוס הטופס
    displayWeather(); // רענון התצוגה כדי להראות את הפריט החדש
  } catch (err) {
    alert(err.message);
  }
});

// טיפול באירוע מחיקה
weatherList.addEventListener('click', async (e) => {
  // בדיקה שלחצנו על כפתור עם הקלאס 'delete-btn'
  if (e.target.classList.contains('delete-btn')) {
    const weatherId = e.target.dataset.id; // קבלת ה-ID של הפריט למחיקה
    
    try {
      const res = await fetch(`${API_URL}/${weatherId}`, {
        method: 'DELETE', // שליחת בקשת DELETE למחיקת הפריט הספציפי
      });

      if (!res.ok) throw new Error('שגיאה במחיקת הנתונים');
      
      displayWeather(); // רענון התצוגה לאחר המחיקה
    } catch (err) {
      alert(err.message);
    }
  }
});

// טעינה ראשונית של הנתונים בעת פתיחת הדף
displayWeather();