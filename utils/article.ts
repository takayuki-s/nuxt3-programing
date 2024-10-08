// JapaneseTranslationsの型定義
type JapaneseTranslationsType = {
  cafe: string
  kyoto: string
  test: string
}

// JapaneseTranslationsオブジェクト
const JapaneseTranslations: JapaneseTranslationsType = {
  cafe: 'カフェ',
  kyoto: '京都',
  test: 'テスト',
}

// EnglishTranslationsオブジェクト
const EnglishTranslations: JapaneseTranslationsType = {
  cafe: 'cafe',
  kyoto: 'kyoto',
  test: 'test',
}

// displayTagName関数
export const displayTagName = (id: string) => {
  return JapaneseTranslations[id as keyof JapaneseTranslationsType]
}
