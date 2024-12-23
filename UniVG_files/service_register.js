if ('serviceWorker' in navigator) {
    if (location.href.includes('/workflow/web/plugin/new-card')) {
        navigator.serviceWorker.register('/workflow/web/plugin/sw.js', {scope: '/workflow/web/plugin/'});
        // 激活更新时，刷新当前页面，保障资源最新
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            // eslint-disable-next-line no-console
            console.log('The controller of current browsing context has changed.');
            // location.reload();
        });
    }
}
