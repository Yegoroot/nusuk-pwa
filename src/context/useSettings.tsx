import {
  createContext,
  ReactElement,
  useEffect,
  useState
} from 'react'


import { useContext } from 'react'

export interface Settings {
  name: string;
  date: string
  topQR: number
}

const defaultSettings: Settings = {
  name: '',
  date: '',
  topQR: 20
}

export const restoreSettings = (): Settings => {
  let settings = null

  try {
    const storedData = window.localStorage.getItem('settings')

    if (storedData) {
      settings = JSON.parse(storedData)
    }
  } catch (err) {
    console.error(err)
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const storeSettings = (settings?: Settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings))
}

const SettingsContext = createContext({
  settings: defaultSettings,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars, no-unused-vars
  saveSettings: (settings: Partial<Settings>) => { }
})

export const SettingsProvider = ({ settings, children }: { settings?: Settings, children?: ReactElement }): ReactElement => {
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings)

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = {...currentSettings, ...update}

    setCurrentSettings(mergedSettings)
    storeSettings(mergedSettings)
  }

  useEffect(() => {
    const restoredSettings = restoreSettings()

    if (restoredSettings) {
      // setCurrentSettings(restoredSettings)
      // FIXME если добавились новые параметры например (constructionRules)
      setCurrentSettings({ ...defaultSettings, ...restoredSettings })
    }
  }, [])

  // useEffect(() => {
  //   document.dir = currentSettings.direction
  // }, [currentSettings])

  return (
    <SettingsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer

export const useSettings = () => useContext(SettingsContext)


export default SettingsContext
