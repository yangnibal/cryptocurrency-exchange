import './colors.module.scss'

const darkModeBackgroundColor = "#212121"
const darkModeSecondaryColor = "#2D2D2D"
const darkModeThirdColor = "#434343"
const darkModeFourthColor = "#333333"
const darkModeFifthColor = "#555555"
const darkModeTextColor = "#FFFFFF"
const darkModeSecondaryTextColor = "#CBCBCB"
const darkModeHeaderBackgroundColor = "#1A1A1A"
const darkModeBorderColor = "#393939"
const darkModeSubmenuSelectedColor = "#434343"
const darkModeLoginBox = "#323134"

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
        key: '--color-bg4',
        value: darkModeFourthColor
    },
    {
        key: '--color-bg5',
        value: darkModeFifthColor
    },
    {
        key: '--color-header-bg',
        value: darkModeHeaderBackgroundColor
    },
    {
        key: '--color-border',
        value: darkModeBorderColor
    },
    {
        key: '--color-submenu',
        value: darkModeSubmenuSelectedColor
    },
    {
        key: '--color-box-login',
        value: darkModeLoginBox
    }
]

const lightModeBackgroundColor = "#E1E1EB"
const lightModeSecondaryColor = "#FFFFFF"
const lightModeThirdColor = "#C3C3C3"
const lightModeFourthColor = "#DCDCDC"
const lightModeFifthColor = "#E6E6E6"
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
        key: '--color-bg4',
        value: lightModeFourthColor
    },
    {
        key: '--color-bg5',
        value: lightModeFifthColor
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

const chartGreen = "#80A08E"
const chartRed = "#A77774s"

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
    lightTheme,
    chartGreen,
    chartRed
}