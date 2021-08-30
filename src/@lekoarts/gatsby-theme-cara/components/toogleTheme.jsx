import React from "react"
import { useColorMode } from "theme-ui"
const ToggleTheme = () => {
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = (e) => {
      setColorMode(isDark ? `light` : `dark`)
    }
    return (
        <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
    )
}
export default ToggleTheme