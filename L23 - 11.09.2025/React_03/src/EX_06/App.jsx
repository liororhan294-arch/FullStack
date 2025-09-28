// שלב 1: יבוא הקומפוננטה שמנהלת בעצמה את ה-state
import FavoriteAnimal from './components/FavoriteAnimal'

// שלב 2: קומפוננטת האפליקציה הראשית לא מנהלת state
// כאן אנחנו רק מרנדרים את FavoriteAnimal, וכל ניהול ה-state מתבצע בתוכה
export default function App() {
  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      {/* שלב 3: רינדור הקומפוננטה ללא props הקשורים ל-state */}
      <FavoriteAnimal />
    </div>
  )
}


