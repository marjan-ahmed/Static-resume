// Declare lastOpenedSection only once
var lastOpenedSection = null;
function toggleSection(sectionId) {
  // Hide the previously opened section if it exists and is not the current one
  if (lastOpenedSection && lastOpenedSection !== sectionId) {
    var lastContent = document.querySelector(
      "#".concat(lastOpenedSection, " .content")
    );
    if (lastContent) {
      lastContent.style.display = "none";
    }
  }
  // Toggle the current section
  var currentContent = document.querySelector(
    "#".concat(sectionId, " .content")
  );
  if (currentContent) {
    if (
      currentContent.style.display === "none" ||
      currentContent.style.display === ""
    ) {
      currentContent.style.display = "block";
    } else {
      currentContent.style.display = "none";
    }
  }
  // Update the last opened section
  lastOpenedSection = sectionId;
}
// Initialize the script to make sure all sections are closed on page load
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".content").forEach(function (content) {
    content.style.display = "none";
  });
});
