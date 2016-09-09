function loadGroupNames(){
  for (var i=0; i < window.localStorage.length; i++){
          var group = document.createElement("input");
          group.type = "button";
          group.value = window.localStorage.key(i);
          group.addEventListener("click", function(){
          var group_names = document.getElementById("group_names");
          group_names.appendChild(group);
  }
}
loadGroupNames();

