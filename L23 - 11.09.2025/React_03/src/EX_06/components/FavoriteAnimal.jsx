// שלב 1: ייבוא useState כדי לנהל state מקומי בקומפוננטה
import { useState } from 'react'

// שלב 2: הקומפוננטה מנהלת בעצמה את ה-state, לא מקבלת prop
export default function FavoriteAnimal() {
  // שלב 3: יצירת state מקומי עם ערך התחלתי 'כלב'
  const [animal, setAnimal] = useState('כלב')

  // שלב 4: פונקציה שמחליפה בין 'כלב' ל-'חתול' בכל לחיצה
  const handleChangeAnimal = () => {
    setAnimal((prev) => (prev === 'כלב' ? 'חתול' : 'כלב'))
  }

  // שלב 5: רינדור הטקסט והכפתור שמחליף את ה-state
  return (
    <div>
      <p>החיה האהובה עליי היא {animal}!</p>
      <button onClick={handleChangeAnimal}>Animal Change</button>
    </div>
  )
}