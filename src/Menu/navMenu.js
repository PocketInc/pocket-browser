function menuClick(i) {
    document.getElementById("settingsModal").classList.toggle('is-active');

    if (i == 0) {
        addTab();
    } else if (i == 1) {
        addWindow();
    } else if (i == 2) {
        toggleDevTools();
    } else if (i == 3) {
        toggleFullScreen()
    } else if (i == 4) {
    find();
    } else if (i == 5) {
        showDevicesToCast();
    } else if (i == 6) {
    loadSystemPage("history")
    } else if (i == 7) {
        loadSystemPage("bookmarks")
    } else if (i == 8) {
        showDownloads();
    } else if (i == 9) {
        loadSystemPage("settings")
    } else if (i == 10) {
        loadSystemPage("feedback")
    } else if (i == 11) {
        loadSystemPage("about")
    } else if (i == 12) {
        electron.remote.app.quit();
    }
}