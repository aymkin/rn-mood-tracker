export type MoodDescriptionType =
  | 'studious'
  | 'pensive'
  | 'happy'
  | 'celebratory'
  | 'frustrated'
export type MoodEmojiType = '🧑‍💻' | '🤔' | '😊' | '🥳' | '😤'
export type MoodOptionType = {
  emoji: MoodEmojiType
  description: MoodDescriptionType
}

export type MoodOptionWithTimestamp = {
  mood: MoodOptionType
  timestamp: number
}
