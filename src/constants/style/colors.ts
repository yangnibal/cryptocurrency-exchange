import './colors.module.scss'

const darkModeBackgroundColor = "#212121"
const darkModeSecondaryColor = "#2D2D2D"
const darkModeThirdColor = "#434343"
const darkModeFourthColor = "#333333"
const darkModeTextColor = "#FFFFFF"
const darkModeSecondaryTextColor = "#CBCBCB"
const darkModeHeaderBackgroundColor = "#1A1A1A"
const darkModeBorderColor = "#393939"

const darkTheme = [
    {
        key: '--color-text',
        value: darkModeTextColor,
    },
    {
        key: '--color-text-secondary',
        value: darkModeSecondaryTextColor
    },
    {
        key: '--color-bg',
        value: darkModeBackgroundColor
    },
    {
        key: '--color-bg2',
        value: darkModeSecondaryColor
    },
    {
        key: '--color-bg3',
        value: darkModeThirdColor
    },
    {
        key: '--color-header-bg',
        value: darkModeHeaderBackgroundColor
    },
    {
        key: '--color-border',
        value: darkModeBorderColor
    }
]

const lightModeBackgroundColor = "#E1E1EB"
const lightModeSecondaryColor = "#FFFFFF"
const lightModeThirdColor = "#E2E2E2"
const lightModeTextColor = "#222222"
const lightModeSecondaryTextColor = "#333333"
const lightModeThirdTextColor = "#555555"
const lightModeHeaderBackgroundColor = "#3377F6"
const lightModeBorderColor = "#C7C7C7"

const lightTheme = [
    {
        key: '--color-text',
        value: lightModeTextColor,
    },
    {
        key: '--color-text-secondary',
        value: lightModeSecondaryTextColor
    },
    {
        key: '--color-bg',
        value: lightModeBackgroundColor
    },
    {
        key: '--color-bg2',
        value: lightModeSecondaryColor
    },
    {
        key: '--color-bg3',
        value: lightModeThirdColor
    },
    {
        key: '--color-header-bg',
        value: lightModeHeaderBackgroundColor
    },
    {
        key: '--color-border',
        value: lightModeBorderColor
    }
]

export {
    darkModeBackgroundColor,
    darkModeSecondaryColor,
    darkModeThirdColor,
    darkModeFourthColor,
    darkModeTextColor,
    darkModeSecondaryTextColor,
    darkModeHeaderBackgroundColor,
    lightModeBackgroundColor,
    lightModeSecondaryColor,
    lightModeTextColor,
    lightModeSecondaryTextColor,
    lightModeThirdTextColor,
    lightModeHeaderBackgroundColor,
    darkTheme,
    lightTheme
}