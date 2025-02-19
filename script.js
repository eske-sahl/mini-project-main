function generateBioData() {
    const name = document.getElementById("fname").value;
    const age = document.getElementById("fage").value;
    const dob = document.getElementById("fdob").value;
    const father = document.getElementById("ffather").value;
    const mother = document.getElementById("fmother").value;
    const edu = document.getElementById("fedu").value;
    const skill = document.getElementById("fskill").value;
    const achievements = document.getElementById("fachievements").value;
    const records = document.getElementById("frecords").value;
    const add = document.getElementById("fadd").value;
    const profession = document.getElementById("profession").value;
    const awards = document.getElementById("fawards").value;
    const hobbies = document.getElementById("fhob").value;
    const intr = document.getElementById("fintr").value;

    // Store all values in sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('age', age);
    sessionStorage.setItem('dob', dob);
    sessionStorage.setItem('father', father);
    sessionStorage.setItem('mother', mother);
    sessionStorage.setItem('edu', edu);
    sessionStorage.setItem('skill', skill);
    sessionStorage.setItem('achievements', achievements);
    sessionStorage.setItem('record', records);
    sessionStorage.setItem('add', add);
    sessionStorage.setItem('profession', profession);
    sessionStorage.setItem('awards', awards);
    sessionStorage.setItem('hobbies', hobbies);
    sessionStorage.setItem('intr', intr);

    const input = document.getElementById("fphoto");
            if (input.files.length > 0) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    sessionStorage.setItem("photo", e.target.result);
                    window.location.href = "test.html"; // Redirect to next page
                };
                reader.readAsDataURL(input.files[0]);
            } else {
                alert("Please select an image first!");
            }
    // Redirect to test.html (if needed)
    window.location.href = "test.html";
}

// Optimized Photo Preview Function
function previewPhoto(event) {
    const input = event.target;
    const preview = document.getElementById('photo-preview');
    const placeholder = input.nextElementSibling.querySelector('.upload-placeholder');

    if (input.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            placeholder.style.display = 'none';
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        preview.src = '';
        preview.style.display = 'none';
        placeholder.style.display = 'flex';
        return; // Exit early if no file
    }

    // File validation
    const file = input.files[0];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (file.size > maxSizeInBytes) {
        alert('File is too large. Maximum file size is 5MB.');
        input.value = ''; // Clear the input
        return;
    }

    if (!allowedTypes.includes(file.type)) {
        alert('Only JPEG, PNG, and GIF images are allowed.');
        input.value = ''; // Clear the input
        return;
    }
}
