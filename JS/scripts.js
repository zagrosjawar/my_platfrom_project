function closeNote() {
    var noteSection = document.getElementById("note-section");
    noteSection.style.display = "none";
}

document.getElementById('courseScore').oninput = function() {
    document.getElementById('courseScoreValue').textContent = this.value;
  }
  
  document.getElementById('usefulness').oninput = function() {
    document.getElementById('usefulnessValue').textContent = this.value;
  }
  
  document.getElementById('difficultyLevel').oninput = function() {
    document.getElementById('difficultyLevelValue').textContent = this.value;
  }
  