window.onload = function(){
    var pre = document.getElementsByTagName('pre');
  for (var i = 0; i < pre.length; i++) {	
	var node = pre[i].children[0];
	//<pre class="CodeRay highlight"><code data-lang="java">
	if (typeof node == "undefined") continue;	
	//var isLanguage = pre[i].children[0].className.indexOf('language-');
	//if (isLanguage === 0)
    if (node.getAttribute("data-lang") == "java" || node.getAttribute("data-lang") == "yaml"
     || node.getAttribute("data-lang") == "xml" || node.getAttribute("data-lang") == "shell script")
	 {
        var button  = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = ' ';
        button.style.background="none";
        button.style.border="none";
        button.style.float = 'right';
        button.style.textDecorationColor = 'black';
        button.style.fontSize = 12;
        var image = document.createElement('img');
        image.src = "clipboard.svg";
        image.width = "25";
        image.height = "30";
        button.appendChild(image);
        pre[i].appendChild(button);
    }
};
// Run Clipboard
var copyCode = new ClipboardJS('.copy-button', {
    target: function(trigger) {
        return trigger.previousElementSibling;
}
});
// On success:
// - Change the "Copy" text to "Copied".
// - Swap it to "Copy" in 2s.
// - Lead user to the "contenteditable" area with Velocity scroll.
copyCode.on('success', function(event) {
    event.clearSelection();
    //event.trigger.textContent = 'Copied';
    event.trigger.firstChild.textContent = 'Copied!';
    window.setTimeout(function () {
        event.trigger.firstChild.textContent = ' ';
    }, 2000);
    $.Velocity(pasteContent, 'scroll', {
        duration: 1000
    });
});
// On error (Safari):
// - Change the  "Press Ctrl+C to copy"
// - Swap it to "Copy" in 2s.
copyCode.on('error', function(event) {
    event.trigger.textContent = 'Press "Ctrl + C" to copy';
    window.setTimeout(function() {
        event.trigger.textContent = 'Copy';
    }, 5000);
});
};