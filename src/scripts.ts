// Declare lastOpenedSection with proper type annotation
let lastOpenedSection: string | null = null;

function toggleSection(sectionId: string): void {
  // Hide the previously opened section if it exists and is not the current one
  if (lastOpenedSection && lastOpenedSection !== sectionId) {
    const lastContent = document.querySelector(`#${lastOpenedSection} .content`) as HTMLElement | null;
    if (lastContent) {
      lastContent.style.display = "none";
    }
  }

  // Toggle the current section
  const currentContent = document.querySelector(`#${sectionId} .content`) as HTMLElement | null;
  if (currentContent) {
    if (currentContent.style.display === "none" || currentContent.style.display === "") {
      currentContent.style.display = "block";
    } else {
      currentContent.style.display = "none";
    }
  }

  // Update the last opened section
  lastOpenedSection = sectionId;
}

// Initialize the script to make sure all sections are closed on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".content").forEach((content) => {
    (content as HTMLElement).style.display = "none";
  });
});
