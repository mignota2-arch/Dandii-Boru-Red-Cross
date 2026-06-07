let selectedTrack = { role: "", department: "" };

function simulateBranch(roleName, deptName) {
    selectedTrack.role = roleName;
    selectedTrack.department = deptName;

    document.getElementById('summary-item').innerText = roleName;
    document.getElementById('summary-price').innerText = deptName;

    const actionBtn = document.getElementById('pay-btn');
    if (actionBtn) { actionBtn.disabled = false; }

    const studentPayload = {
        institutionNode: "Dandii Boru School, Addis Ababa",
        clubSchema: "DBS-RC-2026",
        clientUuid: "VOL-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
        compiledTimestamp: new Date().toLocaleTimeString(),
        stateData: {
            assignedRole: roleName,
            targetDivision: deptName,
            allocationStatus: "ACTIVE_PENDING_COMMIT"
        }
    };

    const terminalOutput = document.getElementById('console-output');
    if (terminalOutput) {
        terminalOutput.innerHTML = `// State Mutation Complete!\nconst volunteerManifest = ${JSON.stringify(studentPayload, null, 2)};`;
    }
}

function triggerVerificationToast() {
    const consoleBox = document.getElementById('console-output');
    if (!consoleBox) return;

    consoleBox.innerHTML = `// Encrypting manifest packet array and committing local state buffers...`;
    
    setTimeout(() => {
        consoleBox.innerHTML = 
`// LOCAL STORAGE WRITE SUCCESSFUL:\n{\n  "cacheAllocation": "IndexedDB_Runtime",\n  "message": "Welcome to the team! Role '${selectedTrack.role}' successfully compiled under ${selectedTrack.department}.",\n  "systemFlag": "ON_DUTY"\n}`;
        alert(`❤️ Manifest committed successfully! Welcome to the DBS Red Cross Team!`);
    }, 1200);
}

function toggleCard(btn) {
    if (!btn || !btn.parentElement) return;
    const operationalCard = btn.parentElement;
    const isOpen = operationalCard.classList.contains('active');
    const allCards = document.querySelectorAll('.dropdown-card');
    
    allCards.forEach(card => { card.classList.remove('active'); });
    if (!isOpen) { operationalCard.classList.add('active'); }
}

console.log("🚀 DBS Red Cross Portal Core Pipeline Online.");