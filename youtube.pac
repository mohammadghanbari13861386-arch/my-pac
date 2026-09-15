function FindProxyForURL(url, host) {

    /* Google + YouTube + Instagram */
    if (
        dnsDomainIs(host, "google.com") ||
        shExpMatch(host, "*.google.com") ||
        dnsDomainIs(host, "googleapis.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        dnsDomainIs(host, "gstatic.com") ||
        shExpMatch(host, "*.gstatic.com") ||
        dnsDomainIs(host, "googleusercontent.com") ||
        shExpMatch(host, "*.googleusercontent.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        shExpMatch(host, "*.googlevideo.com") ||
        dnsDomainIs(host, "youtube.com") ||
        shExpMatch(host, "*.youtube.com") ||
        dnsDomainIs(host, "youtubei.googleapis.com") ||
        dnsDomainIs(host, "ytimg.com") ||
        shExpMatch(host, "*.ytimg.com") ||
        dnsDomainIs(host, "ggpht.com") ||
        shExpMatch(host, "*.ggpht.com") ||

        dnsDomainIs(host, "instagram.com") ||
        shExpMatch(host, "*.instagram.com") ||
        dnsDomainIs(host, "cdninstagram.com") ||
        shExpMatch(host, "*.cdninstagram.com") ||
        dnsDomainIs(host, "fbcdn.net") ||
        shExpMatch(host, "*.fbcdn.net")
    ) {
        return "PROXY 45.132.252.25:49156; PROXY 91.134.141.4:3128; PROXY 185.200.188.234:10001";
    }

    /* Telegram */
    if (
        dnsDomainIs(host, "telegram.org") ||
        shExpMatch(host, "*.telegram.org") ||
        dnsDomainIs(host, "t.me") ||
        shExpMatch(host, "*.t.me") ||
        dnsDomainIs(host, "telegram.me") ||
        shExpMatch(host, "*.telegram.me") ||
        dnsDomainIs(host, "telegra.ph") ||
        shExpMatch(host, "*.telegra.ph")
    ) {
        return "PROXY 91.134.141.4:3128; PROXY 45.132.252.25:49156; PROXY 185.200.188.234:10001";
    }

    return "DIRECT";
}
