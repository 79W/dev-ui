import React from "react";
import { useCopy, context } from 'dumi/theme'
import { AuntIconActivity,AuntIconAirplay,
    AuntIconAlertCircle,AuntIconAlertOctagon,
    AuntIconAlertTriangle,AuntIconAlignCenter,AuntIconAlignJustify,
    AuntIconAlignLeft,AuntIconAlignRight,AuntIconAnchor,AuntIconAperture,AuntIconArchive,
    AuntIconArrowDownCircle,AuntIconArrowDownLeft,AuntIconArrowDownRight,AuntIconArrowDown,
    AuntIconArrowLeftCircle,AuntIconArrowLeft,AuntIconArrowRightCircle,AuntIconArrowRight,AuntIconArrowUpCircle,
    AuntIconArrowUpLeft,AuntIconArrowUpRight,AuntIconArrowUp,AuntIconAtSign,AuntIconAward,AuntIconBarChartTwo,AuntIconBarChart,
    AuntIconBatteryCharging,AuntIconBattery,AuntIconBellOff,AuntIconBell,AuntIconBluetooth,AuntIconBold,AuntIconBookOpen,AuntIconBook,
    AuntIconBookmark,AuntIconBox,AuntIconBriefcase,AuntIconCalendar,AuntIconCameraOff,AuntIconCamera,AuntIconCast,AuntIconCheckCircle,
    AuntIconCheckSquare,AuntIconCheck,AuntIconChevronDown,AuntIconChevronLeft,AuntIconChevronRight,AuntIconChevronUp,AuntIconChevronsDown,
    AuntIconChevronsLeft,AuntIconChevronsRight,AuntIconChevronsUp,AuntIconChrome,AuntIconCircle,AuntIconClipboard,AuntIconClock,AuntIconCloudDrizzle,
    AuntIconCloudLightning,AuntIconCloudOff,AuntIconCloudRain,AuntIconCloudSnow,AuntIconCloud,AuntIconCode,AuntIconCodepen,AuntIconCodesandbox,AuntIconCoffee,
    AuntIconColumns,AuntIconCommand,AuntIconCompass,AuntIconCopy,AuntIconCornerDownLeft,AuntIconCornerDownRight,AuntIconCornerLeftDown,AuntIconCornerLeftUp,
    AuntIconCornerRightDown,AuntIconCornerRightUp,AuntIconCornerUpLeft,AuntIconCornerUpRight,AuntIconCpu,AuntIconCreditCard,AuntIconCrop,AuntIconCrosshair,
    AuntIconDatabase,AuntIconDelete,AuntIconDisc,AuntIconDivideCircle,AuntIconDivideSquare,AuntIconDivide,AuntIconDollarSign,AuntIconDownloadCloud,AuntIconDownload,
    AuntIconDribbble,AuntIconDroplet,AuntIconEditThree,AuntIconEditTwo,AuntIconEdit,AuntIconExternalLink,AuntIconEyeOff,AuntIconEye,AuntIconFacebook,AuntIconFastForward,
    AuntIconFeather,AuntIconFigma,AuntIconFileMinus,AuntIconFilePlus,AuntIconFileText,AuntIconFile,AuntIconFilm,AuntIconFilter,AuntIconFlag,AuntIconFolderMinus,
    AuntIconFolderPlus,AuntIconFolder,AuntIconFramer,AuntIconFrown,AuntIconGift,AuntIconGitBranch,AuntIconGitCommit,AuntIconGitMerge,AuntIconGitPullRequest,AuntIconGithub,
    AuntIconGitlab,AuntIconGlobe,AuntIconGrid,AuntIconHardDrive,AuntIconHash,AuntIconHeadphones,AuntIconHeart,AuntIconHelpCircle,AuntIconHexagon,AuntIconHome,AuntIconImage,
    AuntIconInbox,AuntIconInfo,AuntIconInstagram,AuntIconItalic,AuntIconKey,AuntIconLayers,AuntIconLayout,AuntIconLifeBuoy,AuntIconLinkTwo,AuntIconLink,AuntIconLinkedin,
    AuntIconList,AuntIconLoader,AuntIconLock,AuntIconLogIn,AuntIconLogOut,AuntIconMail,AuntIconMapPin,AuntIconMap,AuntIconMaximizeTwo,AuntIconMaximize,AuntIconMeh,
    AuntIconMenu,AuntIconMessageCircle,AuntIconMessageSquare,AuntIconMicOff,AuntIconMic,AuntIconMinimizeTwo,AuntIconMinimize,AuntIconMinusCircle,AuntIconMinusSquare,
    AuntIconMinus,AuntIconMonitor,AuntIconMoon,AuntIconMoreHorizontal,AuntIconMoreVertical,AuntIconMousePointer,AuntIconMove,AuntIconMusic,AuntIconNavigationTwo,
    AuntIconNavigation,AuntIconOctagon,AuntIconPackage,AuntIconPaperclip,AuntIconPauseCircle,AuntIconPause,AuntIconPenTool,AuntIconPercent,AuntIconPhoneCall,
    AuntIconPhoneForwarded,AuntIconPhoneIncoming,AuntIconPhoneMissed,AuntIconPhoneOff,AuntIconPhoneOutgoing,AuntIconPhone,AuntIconPieChart,AuntIconPlayCircle,
    AuntIconPlay,AuntIconPlusCircle,AuntIconPlusSquare,AuntIconPlus,AuntIconPocket,AuntIconPower,AuntIconPrinter,AuntIconRadio,AuntIconRefreshCcw,AuntIconRefreshCw,
    AuntIconRepeat,AuntIconRewind,AuntIconRotateCcw,AuntIconRotateCw,AuntIconRss,AuntIconSave,AuntIconScissors,AuntIconSearch,AuntIconSend,AuntIconServer,AuntIconSettings,
    AuntIconShareTwo,AuntIconShare,AuntIconShieldOff,AuntIconShield,AuntIconShoppingBag,AuntIconShoppingCart,AuntIconShuffle,AuntIconSidebar,AuntIconSkipBack,
    AuntIconSkipForward,AuntIconSlack,AuntIconSlash,AuntIconSliders,AuntIconSmartphone,AuntIconSmile,AuntIconSpeaker,AuntIconSquare,AuntIconStar,AuntIconStopCircle,
    AuntIconSun,AuntIconSunrise,AuntIconSunset,AuntIconTable,AuntIconTablet,AuntIconTag,AuntIconTarget,AuntIconTerminal,AuntIconThermometer,AuntIconThumbsDown,
    AuntIconThumbsUp,AuntIconToggleLeft,AuntIconToggleRight,AuntIconTool,AuntIconTrashTwo,AuntIconTrash,AuntIconTrello,AuntIconTrendingDown,AuntIconTrendingUp,
    AuntIconTriangle,AuntIconTruck,AuntIconTv,AuntIconTwitch,AuntIconTwitter,AuntIconType,AuntIconUmbrella,AuntIconUnderline,AuntIconUnlock,AuntIconUploadCloud,
    AuntIconUpload,AuntIconUserCheck,AuntIconUserMinus,AuntIconUserPlus,AuntIconUserX,AuntIconUser,AuntIconUsers,AuntIconVideoOff,AuntIconVideo,AuntIconVoicemail,
    AuntIconVolumeOne,AuntIconVolumeTwo,AuntIconVolumeX,AuntIconVolume,AuntIconWatch,AuntIconWifiOff,AuntIconWifi,AuntIconWind,AuntIconXCircle,AuntIconXOctagon,
    AuntIconXSquare,AuntIconX,AuntIconYoutube,AuntIconZapOff,AuntIconZap,AuntIconZoomIn,AuntIconZoomOut } from 'kf-ui'

const iconsList = [
    {
        "id":1,
        "name":"activity",
        "uname":"Activity",
        "cname":"AuntIconActivity",
        "component":<AuntIconActivity /> 
    },
    {
        "id":2,
        "name":"airplay",
        "uname":"Airplay",
        "cname":"AuntIconAirplay",
        "component":<AuntIconAirplay /> 
    },
    {
        "id":3,
        "name":"alert-circle",
        "uname":"AlertCircle",
        "cname":"AuntIconAlertCircle",
        "component":<AuntIconAlertCircle /> 
    },
    {
        "id":4,
        "name":"alert-octagon",
        "uname":"AlertOctagon",
        "cname":"AuntIconAlertOctagon",
        "component":<AuntIconAlertOctagon /> 
    },
    {
        "id":5,
        "name":"alert-triangle",
        "uname":"AlertTriangle",
        "cname":"AuntIconAlertTriangle",
        "component":<AuntIconAlertTriangle /> 
    },
    {
        "id":6,
        "name":"align-center",
        "uname":"AlignCenter",
        "cname":"AuntIconAlignCenter",
        "component":<AuntIconAlignCenter /> 
    },
    {
        "id":7,
        "name":"align-justify",
        "uname":"AlignJustify",
        "cname":"AuntIconAlignJustify",
        "component":<AuntIconAlignJustify /> 
    },
    {
        "id":8,
        "name":"align-left",
        "uname":"AlignLeft",
        "cname":"AuntIconAlignLeft",
        "component":<AuntIconAlignLeft /> 
    },
    {
        "id":9,
        "name":"align-right",
        "uname":"AlignRight",
        "cname":"AuntIconAlignRight",
        "component":<AuntIconAlignRight /> 
    },
    {
        "id":10,
        "name":"anchor",
        "uname":"Anchor",
        "cname":"AuntIconAnchor",
        "component":<AuntIconAnchor /> 
    },
    {
        "id":11,
        "name":"aperture",
        "uname":"Aperture",
        "cname":"AuntIconAperture",
        "component":<AuntIconAperture /> 
    },
    {
        "id":12,
        "name":"archive",
        "uname":"Archive",
        "cname":"AuntIconArchive",
        "component":<AuntIconArchive /> 
    },
    {
        "id":13,
        "name":"arrow-down-circle",
        "uname":"ArrowDownCircle",
        "cname":"AuntIconArrowDownCircle",
        "component":<AuntIconArrowDownCircle /> 
    },
    {
        "id":14,
        "name":"arrow-down-left",
        "uname":"ArrowDownLeft",
        "cname":"AuntIconArrowDownLeft",
        "component":<AuntIconArrowDownLeft /> 
    },
    {
        "id":15,
        "name":"arrow-down-right",
        "uname":"ArrowDownRight",
        "cname":"AuntIconArrowDownRight",
        "component":<AuntIconArrowDownRight /> 
    },
    {
        "id":16,
        "name":"arrow-down",
        "uname":"ArrowDown",
        "cname":"AuntIconArrowDown",
        "component":<AuntIconArrowDown /> 
    },
    {
        "id":17,
        "name":"arrow-left-circle",
        "uname":"ArrowLeftCircle",
        "cname":"AuntIconArrowLeftCircle",
        "component":<AuntIconArrowLeftCircle /> 
    },
    {
        "id":18,
        "name":"arrow-left",
        "uname":"ArrowLeft",
        "cname":"AuntIconArrowLeft",
        "component":<AuntIconArrowLeft /> 
    },
    {
        "id":19,
        "name":"arrow-right-circle",
        "uname":"ArrowRightCircle",
        "cname":"AuntIconArrowRightCircle",
        "component":<AuntIconArrowRightCircle /> 
    },
    {
        "id":20,
        "name":"arrow-right",
        "uname":"ArrowRight",
        "cname":"AuntIconArrowRight",
        "component":<AuntIconArrowRight /> 
    },
    {
        "id":21,
        "name":"arrow-up-circle",
        "uname":"ArrowUpCircle",
        "cname":"AuntIconArrowUpCircle",
        "component":<AuntIconArrowUpCircle /> 
    },
    {
        "id":22,
        "name":"arrow-up-left",
        "uname":"ArrowUpLeft",
        "cname":"AuntIconArrowUpLeft",
        "component":<AuntIconArrowUpLeft /> 
    },
    {
        "id":23,
        "name":"arrow-up-right",
        "uname":"ArrowUpRight",
        "cname":"AuntIconArrowUpRight",
        "component":<AuntIconArrowUpRight /> 
    },
    {
        "id":24,
        "name":"arrow-up",
        "uname":"ArrowUp",
        "cname":"AuntIconArrowUp",
        "component":<AuntIconArrowUp /> 
    },
    {
        "id":25,
        "name":"at-sign",
        "uname":"AtSign",
        "cname":"AuntIconAtSign",
        "component":<AuntIconAtSign /> 
    },
    {
        "id":26,
        "name":"award",
        "uname":"Award",
        "cname":"AuntIconAward",
        "component":<AuntIconAward /> 
    },
    {
        "id":27,
        "name":"bar-chart-two",
        "uname":"BarChartTwo",
        "cname":"AuntIconBarChartTwo",
        "component":<AuntIconBarChartTwo /> 
    },
    {
        "id":28,
        "name":"bar-chart",
        "uname":"BarChart",
        "cname":"AuntIconBarChart",
        "component":<AuntIconBarChart /> 
    },
    {
        "id":29,
        "name":"battery-charging",
        "uname":"BatteryCharging",
        "cname":"AuntIconBatteryCharging",
        "component":<AuntIconBatteryCharging /> 
    },
    {
        "id":30,
        "name":"battery",
        "uname":"Battery",
        "cname":"AuntIconBattery",
        "component":<AuntIconBattery /> 
    },
    {
        "id":31,
        "name":"bell-off",
        "uname":"BellOff",
        "cname":"AuntIconBellOff",
        "component":<AuntIconBellOff /> 
    },
    {
        "id":32,
        "name":"bell",
        "uname":"Bell",
        "cname":"AuntIconBell",
        "component":<AuntIconBell /> 
    },
    {
        "id":33,
        "name":"bluetooth",
        "uname":"Bluetooth",
        "cname":"AuntIconBluetooth",
        "component":<AuntIconBluetooth /> 
    },
    {
        "id":34,
        "name":"bold",
        "uname":"Bold",
        "cname":"AuntIconBold",
        "component":<AuntIconBold /> 
    },
    {
        "id":35,
        "name":"book-open",
        "uname":"BookOpen",
        "cname":"AuntIconBookOpen",
        "component":<AuntIconBookOpen /> 
    },
    {
        "id":36,
        "name":"book",
        "uname":"Book",
        "cname":"AuntIconBook",
        "component":<AuntIconBook /> 
    },
    {
        "id":37,
        "name":"bookmark",
        "uname":"Bookmark",
        "cname":"AuntIconBookmark",
        "component":<AuntIconBookmark /> 
    },
    {
        "id":38,
        "name":"box",
        "uname":"Box",
        "cname":"AuntIconBox",
        "component":<AuntIconBox /> 
    },
    {
        "id":39,
        "name":"briefcase",
        "uname":"Briefcase",
        "cname":"AuntIconBriefcase",
        "component":<AuntIconBriefcase /> 
    },
    {
        "id":40,
        "name":"calendar",
        "uname":"Calendar",
        "cname":"AuntIconCalendar",
        "component":<AuntIconCalendar /> 
    },
    {
        "id":41,
        "name":"camera-off",
        "uname":"CameraOff",
        "cname":"AuntIconCameraOff",
        "component":<AuntIconCameraOff /> 
    },
    {
        "id":42,
        "name":"camera",
        "uname":"Camera",
        "cname":"AuntIconCamera",
        "component":<AuntIconCamera /> 
    },
    {
        "id":43,
        "name":"cast",
        "uname":"Cast",
        "cname":"AuntIconCast",
        "component":<AuntIconCast /> 
    },
    {
        "id":44,
        "name":"check-circle",
        "uname":"CheckCircle",
        "cname":"AuntIconCheckCircle",
        "component":<AuntIconCheckCircle /> 
    },
    {
        "id":45,
        "name":"check-square",
        "uname":"CheckSquare",
        "cname":"AuntIconCheckSquare",
        "component":<AuntIconCheckSquare /> 
    },
    {
        "id":46,
        "name":"check",
        "uname":"Check",
        "cname":"AuntIconCheck",
        "component":<AuntIconCheck /> 
    },
    {
        "id":47,
        "name":"chevron-down",
        "uname":"ChevronDown",
        "cname":"AuntIconChevronDown",
        "component":<AuntIconChevronDown /> 
    },
    {
        "id":48,
        "name":"chevron-left",
        "uname":"ChevronLeft",
        "cname":"AuntIconChevronLeft",
        "component":<AuntIconChevronLeft /> 
    },
    {
        "id":49,
        "name":"chevron-right",
        "uname":"ChevronRight",
        "cname":"AuntIconChevronRight",
        "component":<AuntIconChevronRight /> 
    },
    {
        "id":50,
        "name":"chevron-up",
        "uname":"ChevronUp",
        "cname":"AuntIconChevronUp",
        "component":<AuntIconChevronUp /> 
    },
    {
        "id":51,
        "name":"chevrons-down",
        "uname":"ChevronsDown",
        "cname":"AuntIconChevronsDown",
        "component":<AuntIconChevronsDown /> 
    },
    {
        "id":52,
        "name":"chevrons-left",
        "uname":"ChevronsLeft",
        "cname":"AuntIconChevronsLeft",
        "component":<AuntIconChevronsLeft /> 
    },
    {
        "id":53,
        "name":"chevrons-right",
        "uname":"ChevronsRight",
        "cname":"AuntIconChevronsRight",
        "component":<AuntIconChevronsRight /> 
    },
    {
        "id":54,
        "name":"chevrons-up",
        "uname":"ChevronsUp",
        "cname":"AuntIconChevronsUp",
        "component":<AuntIconChevronsUp /> 
    },
    {
        "id":55,
        "name":"chrome",
        "uname":"Chrome",
        "cname":"AuntIconChrome",
        "component":<AuntIconChrome /> 
    },
    {
        "id":56,
        "name":"circle",
        "uname":"Circle",
        "cname":"AuntIconCircle",
        "component":<AuntIconCircle /> 
    },
    {
        "id":57,
        "name":"clipboard",
        "uname":"Clipboard",
        "cname":"AuntIconClipboard",
        "component":<AuntIconClipboard /> 
    },
    {
        "id":58,
        "name":"clock",
        "uname":"Clock",
        "cname":"AuntIconClock",
        "component":<AuntIconClock /> 
    },
    {
        "id":59,
        "name":"cloud-drizzle",
        "uname":"CloudDrizzle",
        "cname":"AuntIconCloudDrizzle",
        "component":<AuntIconCloudDrizzle /> 
    },
    {
        "id":60,
        "name":"cloud-lightning",
        "uname":"CloudLightning",
        "cname":"AuntIconCloudLightning",
        "component":<AuntIconCloudLightning /> 
    },
    {
        "id":61,
        "name":"cloud-off",
        "uname":"CloudOff",
        "cname":"AuntIconCloudOff",
        "component":<AuntIconCloudOff /> 
    },
    {
        "id":62,
        "name":"cloud-rain",
        "uname":"CloudRain",
        "cname":"AuntIconCloudRain",
        "component":<AuntIconCloudRain /> 
    },
    {
        "id":63,
        "name":"cloud-snow",
        "uname":"CloudSnow",
        "cname":"AuntIconCloudSnow",
        "component":<AuntIconCloudSnow /> 
    },
    {
        "id":64,
        "name":"cloud",
        "uname":"Cloud",
        "cname":"AuntIconCloud",
        "component":<AuntIconCloud /> 
    },
    {
        "id":65,
        "name":"code",
        "uname":"Code",
        "cname":"AuntIconCode",
        "component":<AuntIconCode /> 
    },
    {
        "id":66,
        "name":"codepen",
        "uname":"Codepen",
        "cname":"AuntIconCodepen",
        "component":<AuntIconCodepen /> 
    },
    {
        "id":67,
        "name":"codesandbox",
        "uname":"Codesandbox",
        "cname":"AuntIconCodesandbox",
        "component":<AuntIconCodesandbox /> 
    },
    {
        "id":68,
        "name":"coffee",
        "uname":"Coffee",
        "cname":"AuntIconCoffee",
        "component":<AuntIconCoffee /> 
    },
    {
        "id":69,
        "name":"columns",
        "uname":"Columns",
        "cname":"AuntIconColumns",
        "component":<AuntIconColumns /> 
    },
    {
        "id":70,
        "name":"command",
        "uname":"Command",
        "cname":"AuntIconCommand",
        "component":<AuntIconCommand /> 
    },
    {
        "id":71,
        "name":"compass",
        "uname":"Compass",
        "cname":"AuntIconCompass",
        "component":<AuntIconCompass /> 
    },
    {
        "id":72,
        "name":"copy",
        "uname":"Copy",
        "cname":"AuntIconCopy",
        "component":<AuntIconCopy /> 
    },
    {
        "id":73,
        "name":"corner-down-left",
        "uname":"CornerDownLeft",
        "cname":"AuntIconCornerDownLeft",
        "component":<AuntIconCornerDownLeft /> 
    },
    {
        "id":74,
        "name":"corner-down-right",
        "uname":"CornerDownRight",
        "cname":"AuntIconCornerDownRight",
        "component":<AuntIconCornerDownRight /> 
    },
    {
        "id":75,
        "name":"corner-left-down",
        "uname":"CornerLeftDown",
        "cname":"AuntIconCornerLeftDown",
        "component":<AuntIconCornerLeftDown /> 
    },
    {
        "id":76,
        "name":"corner-left-up",
        "uname":"CornerLeftUp",
        "cname":"AuntIconCornerLeftUp",
        "component":<AuntIconCornerLeftUp /> 
    },
    {
        "id":77,
        "name":"corner-right-down",
        "uname":"CornerRightDown",
        "cname":"AuntIconCornerRightDown",
        "component":<AuntIconCornerRightDown /> 
    },
    {
        "id":78,
        "name":"corner-right-up",
        "uname":"CornerRightUp",
        "cname":"AuntIconCornerRightUp",
        "component":<AuntIconCornerRightUp /> 
    },
    {
        "id":79,
        "name":"corner-up-left",
        "uname":"CornerUpLeft",
        "cname":"AuntIconCornerUpLeft",
        "component":<AuntIconCornerUpLeft /> 
    },
    {
        "id":80,
        "name":"corner-up-right",
        "uname":"CornerUpRight",
        "cname":"AuntIconCornerUpRight",
        "component":<AuntIconCornerUpRight /> 
    },
    {
        "id":81,
        "name":"cpu",
        "uname":"Cpu",
        "cname":"AuntIconCpu",
        "component":<AuntIconCpu /> 
    },
    {
        "id":82,
        "name":"credit-card",
        "uname":"CreditCard",
        "cname":"AuntIconCreditCard",
        "component":<AuntIconCreditCard /> 
    },
    {
        "id":83,
        "name":"crop",
        "uname":"Crop",
        "cname":"AuntIconCrop",
        "component":<AuntIconCrop /> 
    },
    {
        "id":84,
        "name":"crosshair",
        "uname":"Crosshair",
        "cname":"AuntIconCrosshair",
        "component":<AuntIconCrosshair /> 
    },
    {
        "id":85,
        "name":"database",
        "uname":"Database",
        "cname":"AuntIconDatabase",
        "component":<AuntIconDatabase /> 
    },
    {
        "id":86,
        "name":"delete",
        "uname":"Delete",
        "cname":"AuntIconDelete",
        "component":<AuntIconDelete /> 
    },
    {
        "id":87,
        "name":"disc",
        "uname":"Disc",
        "cname":"AuntIconDisc",
        "component":<AuntIconDisc /> 
    },
    {
        "id":88,
        "name":"divide-circle",
        "uname":"DivideCircle",
        "cname":"AuntIconDivideCircle",
        "component":<AuntIconDivideCircle /> 
    },
    {
        "id":89,
        "name":"divide-square",
        "uname":"DivideSquare",
        "cname":"AuntIconDivideSquare",
        "component":<AuntIconDivideSquare /> 
    },
    {
        "id":90,
        "name":"divide",
        "uname":"Divide",
        "cname":"AuntIconDivide",
        "component":<AuntIconDivide /> 
    },
    {
        "id":91,
        "name":"dollar-sign",
        "uname":"DollarSign",
        "cname":"AuntIconDollarSign",
        "component":<AuntIconDollarSign /> 
    },
    {
        "id":92,
        "name":"download-cloud",
        "uname":"DownloadCloud",
        "cname":"AuntIconDownloadCloud",
        "component":<AuntIconDownloadCloud /> 
    },
    {
        "id":93,
        "name":"download",
        "uname":"Download",
        "cname":"AuntIconDownload",
        "component":<AuntIconDownload /> 
    },
    {
        "id":94,
        "name":"dribbble",
        "uname":"Dribbble",
        "cname":"AuntIconDribbble",
        "component":<AuntIconDribbble /> 
    },
    {
        "id":95,
        "name":"droplet",
        "uname":"Droplet",
        "cname":"AuntIconDroplet",
        "component":<AuntIconDroplet /> 
    },
    {
        "id":96,
        "name":"edit-three",
        "uname":"EditThree",
        "cname":"AuntIconEditThree",
        "component":<AuntIconEditThree /> 
    },
    {
        "id":97,
        "name":"edit-two",
        "uname":"EditTwo",
        "cname":"AuntIconEditTwo",
        "component":<AuntIconEditTwo /> 
    },
    {
        "id":98,
        "name":"edit",
        "uname":"Edit",
        "cname":"AuntIconEdit",
        "component":<AuntIconEdit /> 
    },
    {
        "id":99,
        "name":"external-link",
        "uname":"ExternalLink",
        "cname":"AuntIconExternalLink",
        "component":<AuntIconExternalLink /> 
    },
    {
        "id":100,
        "name":"eye-off",
        "uname":"EyeOff",
        "cname":"AuntIconEyeOff",
        "component":<AuntIconEyeOff /> 
    },
    {
        "id":101,
        "name":"eye",
        "uname":"Eye",
        "cname":"AuntIconEye",
        "component":<AuntIconEye /> 
    },
    {
        "id":102,
        "name":"facebook",
        "uname":"Facebook",
        "cname":"AuntIconFacebook",
        "component":<AuntIconFacebook /> 
    },
    {
        "id":103,
        "name":"fast-forward",
        "uname":"FastForward",
        "cname":"AuntIconFastForward",
        "component":<AuntIconFastForward /> 
    },
    {
        "id":104,
        "name":"feather",
        "uname":"Feather",
        "cname":"AuntIconFeather",
        "component":<AuntIconFeather /> 
    },
    {
        "id":105,
        "name":"figma",
        "uname":"Figma",
        "cname":"AuntIconFigma",
        "component":<AuntIconFigma /> 
    },
    {
        "id":106,
        "name":"file-minus",
        "uname":"FileMinus",
        "cname":"AuntIconFileMinus",
        "component":<AuntIconFileMinus /> 
    },
    {
        "id":107,
        "name":"file-plus",
        "uname":"FilePlus",
        "cname":"AuntIconFilePlus",
        "component":<AuntIconFilePlus /> 
    },
    {
        "id":108,
        "name":"file-text",
        "uname":"FileText",
        "cname":"AuntIconFileText",
        "component":<AuntIconFileText /> 
    },
    {
        "id":109,
        "name":"file",
        "uname":"File",
        "cname":"AuntIconFile",
        "component":<AuntIconFile /> 
    },
    {
        "id":110,
        "name":"film",
        "uname":"Film",
        "cname":"AuntIconFilm",
        "component":<AuntIconFilm /> 
    },
    {
        "id":111,
        "name":"filter",
        "uname":"Filter",
        "cname":"AuntIconFilter",
        "component":<AuntIconFilter /> 
    },
    {
        "id":112,
        "name":"flag",
        "uname":"Flag",
        "cname":"AuntIconFlag",
        "component":<AuntIconFlag /> 
    },
    {
        "id":113,
        "name":"folder-minus",
        "uname":"FolderMinus",
        "cname":"AuntIconFolderMinus",
        "component":<AuntIconFolderMinus /> 
    },
    {
        "id":114,
        "name":"folder-plus",
        "uname":"FolderPlus",
        "cname":"AuntIconFolderPlus",
        "component":<AuntIconFolderPlus /> 
    },
    {
        "id":115,
        "name":"folder",
        "uname":"Folder",
        "cname":"AuntIconFolder",
        "component":<AuntIconFolder /> 
    },
    {
        "id":116,
        "name":"framer",
        "uname":"Framer",
        "cname":"AuntIconFramer",
        "component":<AuntIconFramer /> 
    },
    {
        "id":117,
        "name":"frown",
        "uname":"Frown",
        "cname":"AuntIconFrown",
        "component":<AuntIconFrown /> 
    },
    {
        "id":118,
        "name":"gift",
        "uname":"Gift",
        "cname":"AuntIconGift",
        "component":<AuntIconGift /> 
    },
    {
        "id":119,
        "name":"git-branch",
        "uname":"GitBranch",
        "cname":"AuntIconGitBranch",
        "component":<AuntIconGitBranch /> 
    },
    {
        "id":120,
        "name":"git-commit",
        "uname":"GitCommit",
        "cname":"AuntIconGitCommit",
        "component":<AuntIconGitCommit /> 
    },
    {
        "id":121,
        "name":"git-merge",
        "uname":"GitMerge",
        "cname":"AuntIconGitMerge",
        "component":<AuntIconGitMerge /> 
    },
    {
        "id":122,
        "name":"git-pull-request",
        "uname":"GitPullRequest",
        "cname":"AuntIconGitPullRequest",
        "component":<AuntIconGitPullRequest /> 
    },
    {
        "id":123,
        "name":"github",
        "uname":"Github",
        "cname":"AuntIconGithub",
        "component":<AuntIconGithub /> 
    },
    {
        "id":124,
        "name":"gitlab",
        "uname":"Gitlab",
        "cname":"AuntIconGitlab",
        "component":<AuntIconGitlab /> 
    },
    {
        "id":125,
        "name":"globe",
        "uname":"Globe",
        "cname":"AuntIconGlobe",
        "component":<AuntIconGlobe /> 
    },
    {
        "id":126,
        "name":"grid",
        "uname":"Grid",
        "cname":"AuntIconGrid",
        "component":<AuntIconGrid /> 
    },
    {
        "id":127,
        "name":"hard-drive",
        "uname":"HardDrive",
        "cname":"AuntIconHardDrive",
        "component":<AuntIconHardDrive /> 
    },
    {
        "id":128,
        "name":"hash",
        "uname":"Hash",
        "cname":"AuntIconHash",
        "component":<AuntIconHash /> 
    },
    {
        "id":129,
        "name":"headphones",
        "uname":"Headphones",
        "cname":"AuntIconHeadphones",
        "component":<AuntIconHeadphones /> 
    },
    {
        "id":130,
        "name":"heart",
        "uname":"Heart",
        "cname":"AuntIconHeart",
        "component":<AuntIconHeart /> 
    },
    {
        "id":131,
        "name":"help-circle",
        "uname":"HelpCircle",
        "cname":"AuntIconHelpCircle",
        "component":<AuntIconHelpCircle /> 
    },
    {
        "id":132,
        "name":"hexagon",
        "uname":"Hexagon",
        "cname":"AuntIconHexagon",
        "component":<AuntIconHexagon /> 
    },
    {
        "id":133,
        "name":"home",
        "uname":"Home",
        "cname":"AuntIconHome",
        "component":<AuntIconHome /> 
    },
    {
        "id":134,
        "name":"image",
        "uname":"Image",
        "cname":"AuntIconImage",
        "component":<AuntIconImage /> 
    },
    {
        "id":135,
        "name":"inbox",
        "uname":"Inbox",
        "cname":"AuntIconInbox",
        "component":<AuntIconInbox /> 
    },
    {
        "id":136,
        "name":"info",
        "uname":"Info",
        "cname":"AuntIconInfo",
        "component":<AuntIconInfo /> 
    },
    {
        "id":137,
        "name":"instagram",
        "uname":"Instagram",
        "cname":"AuntIconInstagram",
        "component":<AuntIconInstagram /> 
    },
    {
        "id":138,
        "name":"italic",
        "uname":"Italic",
        "cname":"AuntIconItalic",
        "component":<AuntIconItalic /> 
    },
    {
        "id":139,
        "name":"key",
        "uname":"Key",
        "cname":"AuntIconKey",
        "component":<AuntIconKey /> 
    },
    {
        "id":140,
        "name":"layers",
        "uname":"Layers",
        "cname":"AuntIconLayers",
        "component":<AuntIconLayers /> 
    },
    {
        "id":141,
        "name":"layout",
        "uname":"Layout",
        "cname":"AuntIconLayout",
        "component":<AuntIconLayout /> 
    },
    {
        "id":142,
        "name":"life-buoy",
        "uname":"LifeBuoy",
        "cname":"AuntIconLifeBuoy",
        "component":<AuntIconLifeBuoy /> 
    },
    {
        "id":143,
        "name":"link-two",
        "uname":"LinkTwo",
        "cname":"AuntIconLinkTwo",
        "component":<AuntIconLinkTwo /> 
    },
    {
        "id":144,
        "name":"link",
        "uname":"Link",
        "cname":"AuntIconLink",
        "component":<AuntIconLink /> 
    },
    {
        "id":145,
        "name":"linkedin",
        "uname":"Linkedin",
        "cname":"AuntIconLinkedin",
        "component":<AuntIconLinkedin /> 
    },
    {
        "id":146,
        "name":"list",
        "uname":"List",
        "cname":"AuntIconList",
        "component":<AuntIconList /> 
    },
    {
        "id":147,
        "name":"loader",
        "uname":"Loader",
        "cname":"AuntIconLoader",
        "component":<AuntIconLoader /> 
    },
    {
        "id":148,
        "name":"lock",
        "uname":"Lock",
        "cname":"AuntIconLock",
        "component":<AuntIconLock /> 
    },
    {
        "id":149,
        "name":"log-in",
        "uname":"LogIn",
        "cname":"AuntIconLogIn",
        "component":<AuntIconLogIn /> 
    },
    {
        "id":150,
        "name":"log-out",
        "uname":"LogOut",
        "cname":"AuntIconLogOut",
        "component":<AuntIconLogOut /> 
    },
    {
        "id":151,
        "name":"mail",
        "uname":"Mail",
        "cname":"AuntIconMail",
        "component":<AuntIconMail /> 
    },
    {
        "id":152,
        "name":"map-pin",
        "uname":"MapPin",
        "cname":"AuntIconMapPin",
        "component":<AuntIconMapPin /> 
    },
    {
        "id":153,
        "name":"map",
        "uname":"Map",
        "cname":"AuntIconMap",
        "component":<AuntIconMap /> 
    },
    {
        "id":154,
        "name":"maximize-two",
        "uname":"MaximizeTwo",
        "cname":"AuntIconMaximizeTwo",
        "component":<AuntIconMaximizeTwo /> 
    },
    {
        "id":155,
        "name":"maximize",
        "uname":"Maximize",
        "cname":"AuntIconMaximize",
        "component":<AuntIconMaximize /> 
    },
    {
        "id":156,
        "name":"meh",
        "uname":"Meh",
        "cname":"AuntIconMeh",
        "component":<AuntIconMeh /> 
    },
    {
        "id":157,
        "name":"menu",
        "uname":"Menu",
        "cname":"AuntIconMenu",
        "component":<AuntIconMenu /> 
    },
    {
        "id":158,
        "name":"message-circle",
        "uname":"MessageCircle",
        "cname":"AuntIconMessageCircle",
        "component":<AuntIconMessageCircle /> 
    },
    {
        "id":159,
        "name":"message-square",
        "uname":"MessageSquare",
        "cname":"AuntIconMessageSquare",
        "component":<AuntIconMessageSquare /> 
    },
    {
        "id":160,
        "name":"mic-off",
        "uname":"MicOff",
        "cname":"AuntIconMicOff",
        "component":<AuntIconMicOff /> 
    },
    {
        "id":161,
        "name":"mic",
        "uname":"Mic",
        "cname":"AuntIconMic",
        "component":<AuntIconMic /> 
    },
    {
        "id":162,
        "name":"minimize-two",
        "uname":"MinimizeTwo",
        "cname":"AuntIconMinimizeTwo",
        "component":<AuntIconMinimizeTwo /> 
    },
    {
        "id":163,
        "name":"minimize",
        "uname":"Minimize",
        "cname":"AuntIconMinimize",
        "component":<AuntIconMinimize /> 
    },
    {
        "id":164,
        "name":"minus-circle",
        "uname":"MinusCircle",
        "cname":"AuntIconMinusCircle",
        "component":<AuntIconMinusCircle /> 
    },
    {
        "id":165,
        "name":"minus-square",
        "uname":"MinusSquare",
        "cname":"AuntIconMinusSquare",
        "component":<AuntIconMinusSquare /> 
    },
    {
        "id":166,
        "name":"minus",
        "uname":"Minus",
        "cname":"AuntIconMinus",
        "component":<AuntIconMinus /> 
    },
    {
        "id":167,
        "name":"monitor",
        "uname":"Monitor",
        "cname":"AuntIconMonitor",
        "component":<AuntIconMonitor /> 
    },
    {
        "id":168,
        "name":"moon",
        "uname":"Moon",
        "cname":"AuntIconMoon",
        "component":<AuntIconMoon /> 
    },
    {
        "id":169,
        "name":"more-horizontal",
        "uname":"MoreHorizontal",
        "cname":"AuntIconMoreHorizontal",
        "component":<AuntIconMoreHorizontal /> 
    },
    {
        "id":170,
        "name":"more-vertical",
        "uname":"MoreVertical",
        "cname":"AuntIconMoreVertical",
        "component":<AuntIconMoreVertical /> 
    },
    {
        "id":171,
        "name":"mouse-pointer",
        "uname":"MousePointer",
        "cname":"AuntIconMousePointer",
        "component":<AuntIconMousePointer /> 
    },
    {
        "id":172,
        "name":"move",
        "uname":"Move",
        "cname":"AuntIconMove",
        "component":<AuntIconMove /> 
    },
    {
        "id":173,
        "name":"music",
        "uname":"Music",
        "cname":"AuntIconMusic",
        "component":<AuntIconMusic /> 
    },
    {
        "id":174,
        "name":"navigation-two",
        "uname":"NavigationTwo",
        "cname":"AuntIconNavigationTwo",
        "component":<AuntIconNavigationTwo /> 
    },
    {
        "id":175,
        "name":"navigation",
        "uname":"Navigation",
        "cname":"AuntIconNavigation",
        "component":<AuntIconNavigation /> 
    },
    {
        "id":176,
        "name":"octagon",
        "uname":"Octagon",
        "cname":"AuntIconOctagon",
        "component":<AuntIconOctagon /> 
    },
    {
        "id":177,
        "name":"package",
        "uname":"Package",
        "cname":"AuntIconPackage",
        "component":<AuntIconPackage /> 
    },
    {
        "id":178,
        "name":"paperclip",
        "uname":"Paperclip",
        "cname":"AuntIconPaperclip",
        "component":<AuntIconPaperclip /> 
    },
    {
        "id":179,
        "name":"pause-circle",
        "uname":"PauseCircle",
        "cname":"AuntIconPauseCircle",
        "component":<AuntIconPauseCircle /> 
    },
    {
        "id":180,
        "name":"pause",
        "uname":"Pause",
        "cname":"AuntIconPause",
        "component":<AuntIconPause /> 
    },
    {
        "id":181,
        "name":"pen-tool",
        "uname":"PenTool",
        "cname":"AuntIconPenTool",
        "component":<AuntIconPenTool /> 
    },
    {
        "id":182,
        "name":"percent",
        "uname":"Percent",
        "cname":"AuntIconPercent",
        "component":<AuntIconPercent /> 
    },
    {
        "id":183,
        "name":"phone-call",
        "uname":"PhoneCall",
        "cname":"AuntIconPhoneCall",
        "component":<AuntIconPhoneCall /> 
    },
    {
        "id":184,
        "name":"phone-forwarded",
        "uname":"PhoneForwarded",
        "cname":"AuntIconPhoneForwarded",
        "component":<AuntIconPhoneForwarded /> 
    },
    {
        "id":185,
        "name":"phone-incoming",
        "uname":"PhoneIncoming",
        "cname":"AuntIconPhoneIncoming",
        "component":<AuntIconPhoneIncoming /> 
    },
    {
        "id":186,
        "name":"phone-missed",
        "uname":"PhoneMissed",
        "cname":"AuntIconPhoneMissed",
        "component":<AuntIconPhoneMissed /> 
    },
    {
        "id":187,
        "name":"phone-off",
        "uname":"PhoneOff",
        "cname":"AuntIconPhoneOff",
        "component":<AuntIconPhoneOff /> 
    },
    {
        "id":188,
        "name":"phone-outgoing",
        "uname":"PhoneOutgoing",
        "cname":"AuntIconPhoneOutgoing",
        "component":<AuntIconPhoneOutgoing /> 
    },
    {
        "id":189,
        "name":"phone",
        "uname":"Phone",
        "cname":"AuntIconPhone",
        "component":<AuntIconPhone /> 
    },
    {
        "id":190,
        "name":"pie-chart",
        "uname":"PieChart",
        "cname":"AuntIconPieChart",
        "component":<AuntIconPieChart /> 
    },
    {
        "id":191,
        "name":"play-circle",
        "uname":"PlayCircle",
        "cname":"AuntIconPlayCircle",
        "component":<AuntIconPlayCircle /> 
    },
    {
        "id":192,
        "name":"play",
        "uname":"Play",
        "cname":"AuntIconPlay",
        "component":<AuntIconPlay /> 
    },
    {
        "id":193,
        "name":"plus-circle",
        "uname":"PlusCircle",
        "cname":"AuntIconPlusCircle",
        "component":<AuntIconPlusCircle /> 
    },
    {
        "id":194,
        "name":"plus-square",
        "uname":"PlusSquare",
        "cname":"AuntIconPlusSquare",
        "component":<AuntIconPlusSquare /> 
    },
    {
        "id":195,
        "name":"plus",
        "uname":"Plus",
        "cname":"AuntIconPlus",
        "component":<AuntIconPlus /> 
    },
    {
        "id":196,
        "name":"pocket",
        "uname":"Pocket",
        "cname":"AuntIconPocket",
        "component":<AuntIconPocket /> 
    },
    {
        "id":197,
        "name":"power",
        "uname":"Power",
        "cname":"AuntIconPower",
        "component":<AuntIconPower /> 
    },
    {
        "id":198,
        "name":"printer",
        "uname":"Printer",
        "cname":"AuntIconPrinter",
        "component":<AuntIconPrinter /> 
    },
    {
        "id":199,
        "name":"radio",
        "uname":"Radio",
        "cname":"AuntIconRadio",
        "component":<AuntIconRadio /> 
    },
    {
        "id":200,
        "name":"refresh-ccw",
        "uname":"RefreshCcw",
        "cname":"AuntIconRefreshCcw",
        "component":<AuntIconRefreshCcw /> 
    },
    {
        "id":201,
        "name":"refresh-cw",
        "uname":"RefreshCw",
        "cname":"AuntIconRefreshCw",
        "component":<AuntIconRefreshCw /> 
    },
    {
        "id":202,
        "name":"repeat",
        "uname":"Repeat",
        "cname":"AuntIconRepeat",
        "component":<AuntIconRepeat /> 
    },
    {
        "id":203,
        "name":"rewind",
        "uname":"Rewind",
        "cname":"AuntIconRewind",
        "component":<AuntIconRewind /> 
    },
    {
        "id":204,
        "name":"rotate-ccw",
        "uname":"RotateCcw",
        "cname":"AuntIconRotateCcw",
        "component":<AuntIconRotateCcw /> 
    },
    {
        "id":205,
        "name":"rotate-cw",
        "uname":"RotateCw",
        "cname":"AuntIconRotateCw",
        "component":<AuntIconRotateCw /> 
    },
    {
        "id":206,
        "name":"rss",
        "uname":"Rss",
        "cname":"AuntIconRss",
        "component":<AuntIconRss /> 
    },
    {
        "id":207,
        "name":"save",
        "uname":"Save",
        "cname":"AuntIconSave",
        "component":<AuntIconSave /> 
    },
    {
        "id":208,
        "name":"scissors",
        "uname":"Scissors",
        "cname":"AuntIconScissors",
        "component":<AuntIconScissors /> 
    },
    {
        "id":209,
        "name":"search",
        "uname":"Search",
        "cname":"AuntIconSearch",
        "component":<AuntIconSearch /> 
    },
    {
        "id":210,
        "name":"send",
        "uname":"Send",
        "cname":"AuntIconSend",
        "component":<AuntIconSend /> 
    },
    {
        "id":211,
        "name":"server",
        "uname":"Server",
        "cname":"AuntIconServer",
        "component":<AuntIconServer /> 
    },
    {
        "id":212,
        "name":"settings",
        "uname":"Settings",
        "cname":"AuntIconSettings",
        "component":<AuntIconSettings /> 
    },
    {
        "id":213,
        "name":"share-two",
        "uname":"ShareTwo",
        "cname":"AuntIconShareTwo",
        "component":<AuntIconShareTwo /> 
    },
    {
        "id":214,
        "name":"share",
        "uname":"Share",
        "cname":"AuntIconShare",
        "component":<AuntIconShare /> 
    },
    {
        "id":215,
        "name":"shield-off",
        "uname":"ShieldOff",
        "cname":"AuntIconShieldOff",
        "component":<AuntIconShieldOff /> 
    },
    {
        "id":216,
        "name":"shield",
        "uname":"Shield",
        "cname":"AuntIconShield",
        "component":<AuntIconShield /> 
    },
    {
        "id":217,
        "name":"shopping-bag",
        "uname":"ShoppingBag",
        "cname":"AuntIconShoppingBag",
        "component":<AuntIconShoppingBag /> 
    },
    {
        "id":218,
        "name":"shopping-cart",
        "uname":"ShoppingCart",
        "cname":"AuntIconShoppingCart",
        "component":<AuntIconShoppingCart /> 
    },
    {
        "id":219,
        "name":"shuffle",
        "uname":"Shuffle",
        "cname":"AuntIconShuffle",
        "component":<AuntIconShuffle /> 
    },
    {
        "id":220,
        "name":"sidebar",
        "uname":"Sidebar",
        "cname":"AuntIconSidebar",
        "component":<AuntIconSidebar /> 
    },
    {
        "id":221,
        "name":"skip-back",
        "uname":"SkipBack",
        "cname":"AuntIconSkipBack",
        "component":<AuntIconSkipBack /> 
    },
    {
        "id":222,
        "name":"skip-forward",
        "uname":"SkipForward",
        "cname":"AuntIconSkipForward",
        "component":<AuntIconSkipForward /> 
    },
    {
        "id":223,
        "name":"slack",
        "uname":"Slack",
        "cname":"AuntIconSlack",
        "component":<AuntIconSlack /> 
    },
    {
        "id":224,
        "name":"slash",
        "uname":"Slash",
        "cname":"AuntIconSlash",
        "component":<AuntIconSlash /> 
    },
    {
        "id":225,
        "name":"sliders",
        "uname":"Sliders",
        "cname":"AuntIconSliders",
        "component":<AuntIconSliders /> 
    },
    {
        "id":226,
        "name":"smartphone",
        "uname":"Smartphone",
        "cname":"AuntIconSmartphone",
        "component":<AuntIconSmartphone /> 
    },
    {
        "id":227,
        "name":"smile",
        "uname":"Smile",
        "cname":"AuntIconSmile",
        "component":<AuntIconSmile /> 
    },
    {
        "id":228,
        "name":"speaker",
        "uname":"Speaker",
        "cname":"AuntIconSpeaker",
        "component":<AuntIconSpeaker /> 
    },
    {
        "id":229,
        "name":"square",
        "uname":"Square",
        "cname":"AuntIconSquare",
        "component":<AuntIconSquare /> 
    },
    {
        "id":230,
        "name":"star",
        "uname":"Star",
        "cname":"AuntIconStar",
        "component":<AuntIconStar /> 
    },
    {
        "id":231,
        "name":"stop-circle",
        "uname":"StopCircle",
        "cname":"AuntIconStopCircle",
        "component":<AuntIconStopCircle /> 
    },
    {
        "id":232,
        "name":"sun",
        "uname":"Sun",
        "cname":"AuntIconSun",
        "component":<AuntIconSun /> 
    },
    {
        "id":233,
        "name":"sunrise",
        "uname":"Sunrise",
        "cname":"AuntIconSunrise",
        "component":<AuntIconSunrise /> 
    },
    {
        "id":234,
        "name":"sunset",
        "uname":"Sunset",
        "cname":"AuntIconSunset",
        "component":<AuntIconSunset /> 
    },
    {
        "id":235,
        "name":"table",
        "uname":"Table",
        "cname":"AuntIconTable",
        "component":<AuntIconTable /> 
    },
    {
        "id":236,
        "name":"tablet",
        "uname":"Tablet",
        "cname":"AuntIconTablet",
        "component":<AuntIconTablet /> 
    },
    {
        "id":237,
        "name":"tag",
        "uname":"Tag",
        "cname":"AuntIconTag",
        "component":<AuntIconTag /> 
    },
    {
        "id":238,
        "name":"target",
        "uname":"Target",
        "cname":"AuntIconTarget",
        "component":<AuntIconTarget /> 
    },
    {
        "id":239,
        "name":"terminal",
        "uname":"Terminal",
        "cname":"AuntIconTerminal",
        "component":<AuntIconTerminal /> 
    },
    {
        "id":240,
        "name":"thermometer",
        "uname":"Thermometer",
        "cname":"AuntIconThermometer",
        "component":<AuntIconThermometer /> 
    },
    {
        "id":241,
        "name":"thumbs-down",
        "uname":"ThumbsDown",
        "cname":"AuntIconThumbsDown",
        "component":<AuntIconThumbsDown /> 
    },
    {
        "id":242,
        "name":"thumbs-up",
        "uname":"ThumbsUp",
        "cname":"AuntIconThumbsUp",
        "component":<AuntIconThumbsUp /> 
    },
    {
        "id":243,
        "name":"toggle-left",
        "uname":"ToggleLeft",
        "cname":"AuntIconToggleLeft",
        "component":<AuntIconToggleLeft /> 
    },
    {
        "id":244,
        "name":"toggle-right",
        "uname":"ToggleRight",
        "cname":"AuntIconToggleRight",
        "component":<AuntIconToggleRight /> 
    },
    {
        "id":245,
        "name":"tool",
        "uname":"Tool",
        "cname":"AuntIconTool",
        "component":<AuntIconTool /> 
    },
    {
        "id":246,
        "name":"trash-two",
        "uname":"TrashTwo",
        "cname":"AuntIconTrashTwo",
        "component":<AuntIconTrashTwo /> 
    },
    {
        "id":247,
        "name":"trash",
        "uname":"Trash",
        "cname":"AuntIconTrash",
        "component":<AuntIconTrash /> 
    },
    {
        "id":248,
        "name":"trello",
        "uname":"Trello",
        "cname":"AuntIconTrello",
        "component":<AuntIconTrello /> 
    },
    {
        "id":249,
        "name":"trending-down",
        "uname":"TrendingDown",
        "cname":"AuntIconTrendingDown",
        "component":<AuntIconTrendingDown /> 
    },
    {
        "id":250,
        "name":"trending-up",
        "uname":"TrendingUp",
        "cname":"AuntIconTrendingUp",
        "component":<AuntIconTrendingUp /> 
    },
    {
        "id":251,
        "name":"triangle",
        "uname":"Triangle",
        "cname":"AuntIconTriangle",
        "component":<AuntIconTriangle /> 
    },
    {
        "id":252,
        "name":"truck",
        "uname":"Truck",
        "cname":"AuntIconTruck",
        "component":<AuntIconTruck /> 
    },
    {
        "id":253,
        "name":"tv",
        "uname":"Tv",
        "cname":"AuntIconTv",
        "component":<AuntIconTv /> 
    },
    {
        "id":254,
        "name":"twitch",
        "uname":"Twitch",
        "cname":"AuntIconTwitch",
        "component":<AuntIconTwitch /> 
    },
    {
        "id":255,
        "name":"twitter",
        "uname":"Twitter",
        "cname":"AuntIconTwitter",
        "component":<AuntIconTwitter /> 
    },
    {
        "id":256,
        "name":"type",
        "uname":"Type",
        "cname":"AuntIconType",
        "component":<AuntIconType /> 
    },
    {
        "id":257,
        "name":"umbrella",
        "uname":"Umbrella",
        "cname":"AuntIconUmbrella",
        "component":<AuntIconUmbrella /> 
    },
    {
        "id":258,
        "name":"underline",
        "uname":"Underline",
        "cname":"AuntIconUnderline",
        "component":<AuntIconUnderline /> 
    },
    {
        "id":259,
        "name":"unlock",
        "uname":"Unlock",
        "cname":"AuntIconUnlock",
        "component":<AuntIconUnlock /> 
    },
    {
        "id":260,
        "name":"upload-cloud",
        "uname":"UploadCloud",
        "cname":"AuntIconUploadCloud",
        "component":<AuntIconUploadCloud /> 
    },
    {
        "id":261,
        "name":"upload",
        "uname":"Upload",
        "cname":"AuntIconUpload",
        "component":<AuntIconUpload /> 
    },
    {
        "id":262,
        "name":"user-check",
        "uname":"UserCheck",
        "cname":"AuntIconUserCheck",
        "component":<AuntIconUserCheck /> 
    },
    {
        "id":263,
        "name":"user-minus",
        "uname":"UserMinus",
        "cname":"AuntIconUserMinus",
        "component":<AuntIconUserMinus /> 
    },
    {
        "id":264,
        "name":"user-plus",
        "uname":"UserPlus",
        "cname":"AuntIconUserPlus",
        "component":<AuntIconUserPlus /> 
    },
    {
        "id":265,
        "name":"user-x",
        "uname":"UserX",
        "cname":"AuntIconUserX",
        "component":<AuntIconUserX /> 
    },
    {
        "id":266,
        "name":"user",
        "uname":"User",
        "cname":"AuntIconUser",
        "component":<AuntIconUser /> 
    },
    {
        "id":267,
        "name":"users",
        "uname":"Users",
        "cname":"AuntIconUsers",
        "component":<AuntIconUsers /> 
    },
    {
        "id":268,
        "name":"video-off",
        "uname":"VideoOff",
        "cname":"AuntIconVideoOff",
        "component":<AuntIconVideoOff /> 
    },
    {
        "id":269,
        "name":"video",
        "uname":"Video",
        "cname":"AuntIconVideo",
        "component":<AuntIconVideo /> 
    },
    {
        "id":270,
        "name":"voicemail",
        "uname":"Voicemail",
        "cname":"AuntIconVoicemail",
        "component":<AuntIconVoicemail /> 
    },
    {
        "id":271,
        "name":"volume-one",
        "uname":"VolumeOne",
        "cname":"AuntIconVolumeOne",
        "component":<AuntIconVolumeOne /> 
    },
    {
        "id":272,
        "name":"volume-two",
        "uname":"VolumeTwo",
        "cname":"AuntIconVolumeTwo",
        "component":<AuntIconVolumeTwo /> 
    },
    {
        "id":273,
        "name":"volume-x",
        "uname":"VolumeX",
        "cname":"AuntIconVolumeX",
        "component":<AuntIconVolumeX /> 
    },
    {
        "id":274,
        "name":"volume",
        "uname":"Volume",
        "cname":"AuntIconVolume",
        "component":<AuntIconVolume /> 
    },
    {
        "id":275,
        "name":"watch",
        "uname":"Watch",
        "cname":"AuntIconWatch",
        "component":<AuntIconWatch /> 
    },
    {
        "id":276,
        "name":"wifi-off",
        "uname":"WifiOff",
        "cname":"AuntIconWifiOff",
        "component":<AuntIconWifiOff /> 
    },
    {
        "id":277,
        "name":"wifi",
        "uname":"Wifi",
        "cname":"AuntIconWifi",
        "component":<AuntIconWifi /> 
    },
    {
        "id":278,
        "name":"wind",
        "uname":"Wind",
        "cname":"AuntIconWind",
        "component":<AuntIconWind /> 
    },
    {
        "id":279,
        "name":"x-circle",
        "uname":"XCircle",
        "cname":"AuntIconXCircle",
        "component":<AuntIconXCircle /> 
    },
    {
        "id":280,
        "name":"x-octagon",
        "uname":"XOctagon",
        "cname":"AuntIconXOctagon",
        "component":<AuntIconXOctagon /> 
    },
    {
        "id":281,
        "name":"x-square",
        "uname":"XSquare",
        "cname":"AuntIconXSquare",
        "component":<AuntIconXSquare /> 
    },
    {
        "id":282,
        "name":"x",
        "uname":"X",
        "cname":"AuntIconX",
        "component":<AuntIconX /> 
    },
    {
        "id":283,
        "name":"youtube",
        "uname":"Youtube",
        "cname":"AuntIconYoutube",
        "component":<AuntIconYoutube /> 
    },
    {
        "id":284,
        "name":"zap-off",
        "uname":"ZapOff",
        "cname":"AuntIconZapOff",
        "component":<AuntIconZapOff /> 
    },
    {
        "id":285,
        "name":"zap",
        "uname":"Zap",
        "cname":"AuntIconZap",
        "component":<AuntIconZap /> 
    },
    {
        "id":286,
        "name":"zoom-in",
        "uname":"ZoomIn",
        "cname":"AuntIconZoomIn",
        "component":<AuntIconZoomIn /> 
    },
    {
        "id":287,
        "name":"zoom-out",
        "uname":"ZoomOut",
        "cname":"AuntIconZoomOut",
        "component":<AuntIconZoomOut /> 
    }
]

function Demo (){
    const [copyCode] = useCopy()
    const handleIconClick = (name: string) => {
        copyCode(name)
    }

    return <div style={{padding:10,}}>
        <h2 style={{fontSize:20,color:'#333'}}>全部图标</h2>
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            flexWrap:'wrap'
        }}>
            {
                iconsList.map((item)=>{
                    return  <div style={{
                        width:100,
                        height:100,
                        background:'#fff',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'column',
                        margin:5,
                        borderRadius:10,
                        cursor:'pointer'
                    }} key={item.id}
                        onClick={()=>{
                            handleIconClick(item.cname)
                        }}
                    > 
                    { React.cloneElement(item.component,{ style:{
                        width:30,
                        height:30,
                    } }) } 
                    <span style={{
                        fontSize:10,
                        paddingTop:15
                    }}>{item.uname}</span> </div>
                })
            }
        </div>
    </div>
}

export default Demo