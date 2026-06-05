// pages/api/animeData.js
export const animeData = [
  {
    "title": "Naruto",
    "slug": "naruto",
    "description": "A young ninja seeks recognition and dreams of becoming the Hokage.",
    "seasons": {
      "season-1": { "title": "Enter Naruto", "episodes": ["Ep 1: Enter Naruto Uzumaki!", "Ep 2: My Name is Konohamaru!"] },
      "season-2": { "title": "Chunin Exams", "episodes": ["Ep 20: A New Chapter Begins!", "Ep 21: Identify Yourself!"] }
    }
  },
  {
    "title": "One Piece",
    "slug": "one-piece",
    "description": "Monkey D. Luffy sets off to find the legendary One Piece treasure.",
    "seasons": {
      "season-1": { "title": "East Blue Saga", "episodes": ["Ep 1: I'm Luffy!", "Ep 2: Enter Zoro!"] }
    }
  }
];