javascript:

var debug = document.createElement('div');

debug.id = '#debug-window';
debug.style.font = '16px/1.5 Arial';
debug.style.color = '#fff';
debug.style.textAlign = 'right';
debug.style.background = '#333';
debug.style.padding = '.5em 1em';
debug.style.position = 'fixed';
debug.style.bottom = 0;
debug.style.right = 0;
debug.style.borderRadius = '3px 0 0 0';

document.getElementsByTagName('body')[0].appendChild(debug);

window.onresize = function()
{
    debug.innerHTML = window.innerWidth + 'x' + window.innerHeight + 'px';
};

window.onresize();