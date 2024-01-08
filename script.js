function addPreference() {
    const selectedPreference = document.getElementById("selectPreference").value;
    const addedPreference = document.getElementById("addedPreference");
    addedPreference.innerHTML =
    selectedPreference;
}