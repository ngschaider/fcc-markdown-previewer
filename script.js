marked.setOptions({
  breaks: true,
  gfm: true,
})

processMarkdown();
$("#editor").on("keyup", processMarkdown);


function processMarkdown() {
  var markdown = $("#editor").val();
  var html = marked(markdown);
  $("#preview").html(html);
}