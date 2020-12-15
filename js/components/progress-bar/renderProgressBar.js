function renderProgressBar(selector, data) {
    let HTML = '';
    for (let i = 0; i <data.length; i++) {
        const bar = data[i];
        HTML += `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${bar.title}</div>
                        <div class="value">${bar.value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width: ${bar.value}%;">
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>`;
    }
    let DOM = document.querySelector('.left');
    DOM.innerHTML += HTML;
}
export {renderProgressBar}