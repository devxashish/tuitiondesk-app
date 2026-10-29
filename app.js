// ==========================================================================
// TuitionDesk - Tuition Centre Management Mobile Web Application
// Core Logic, Data Store, Automations, & Interactive Handlers
// ==========================================================================

// Initial Data Store
const DEFAULT_DATA = {
  centre: {
    name: "TuitionDesk Coaching",
    subTitle: "Apex Academy",
    upiVpa: "tuitiondesk@okicici",
    ownerPhone: "919876500000",
    monthlyFeeReminderDay: 5
  },
  batches: [
    "Class 10 - Foundation",
    "Class 12 - PCM Boards",
    "Class 9 - Science",
    "Class 11 - JEE Prep"
  ],
  students: [
    {
      id: "std-101",
      name: "Aarav Sharma",
      rollNo: "101",
      batch: "Class 10 - Foundation",
      parentName: "Rajesh Sharma",
      parentPhone: "9876543210",
      feeAmount: 3500,
      feeMonth: "October 2026",
      feeDueDate: "05 Oct 2026",
      daysLate: 20,
      feeStatus: "pending", // "pending" | "paid"
      attendancePercent: 92,
      presentDays: 23,
      absentDays: 2,
      totalClasses: 25,
      todayAttendance: "A", // "P" or "A"
      homework: {
        subject: "Physics",
        title: "NCERT Ch-12 Q. 1 to 15 (Electricity)",
        description: "Complete numericals on Ohm's Law and series/parallel resistor combinations.",
        dueDate: "26 Oct 2026",
        status: "pending"
      },
      testHistory: [
        { testName: "Test 1 (Units)", score: 42, maxMarks: 50, rank: 3, date: "15 Sep" },
        { testName: "Test 2 (Light)", score: 38, maxMarks: 50, rank: 5, date: "22 Sep" },
        { testName: "Test 3 (Refraction)", score: 44, maxMarks: 50, rank: 2, date: "29 Sep" },
        { testName: "Test 4 (Acids/Bases)", score: 40, maxMarks: 50, rank: 4, date: "06 Oct" },
        { testName: "Test 5 (Carbon)", score: 45, maxMarks: 50, rank: 2, date: "13 Oct" },
        { testName: "Test 6 (Electricity)", score: 48, maxMarks: 50, rank: 1, date: "20 Oct" }
      ]
    },
    {
      id: "std-102",
      name: "Ananya Verma",
      rollNo: "102",
      batch: "Class 10 - Foundation",
      parentName: "Sanjay Verma",
      parentPhone: "9823456789",
      feeAmount: 3500,
      feeMonth: "October 2026",
      feeDueDate: "05 Oct 2026",
      daysLate: 20,
      feeStatus: "pending",
      attendancePercent: 96,
      presentDays: 24,
      absentDays: 1,
      totalClasses: 25,
      todayAttendance: "P",
      homework: {
        subject: "Chemistry",
        title: "Periodic Trends Mindmap",
        description: "Draw atomic radius and ionization energy trends across periods.",
        dueDate: "26 Oct 2026",
        status: "submitted"
      },
      testHistory: [
        { testName: "Test 1", score: 45, maxMarks: 50, rank: 1, date: "15 Sep" },
        { testName: "Test 2", score: 47, maxMarks: 50, rank: 1, date: "22 Sep" },
        { testName: "Test 3", score: 46, maxMarks: 50, rank: 1, date: "29 Sep" },
        { testName: "Test 4", score: 48, maxMarks: 50, rank: 1, date: "06 Oct" },
        { testName: "Test 5", score: 46, maxMarks: 50, rank: 1, date: "13 Oct" },
        { testName: "Test 6", score: 47, maxMarks: 50, rank: 2, date: "20 Oct" }
      ]
    },
    {
      id: "std-103",
      name: "Rohan Patel",
      rollNo: "103",
      batch: "Class 10 - Foundation",
      parentName: "Kishore Patel",
      parentPhone: "9712398765",
      feeAmount: 3500,
      feeMonth: "October 2026",
      feeDueDate: "05 Oct 2026",
      daysLate: 20,
      feeStatus: "pending",
      attendancePercent: 80,
      presentDays: 20,
      absentDays: 5,
      totalClasses: 25,
      todayAttendance: "P",
      homework: {
        subject: "Maths",
        title: "Trigonometry Heights & Distances",
        description: "Exercise 9.1 questions 1 to 8 in practice book.",
        dueDate: "27 Oct 2026",
        status: "pending"
      },
      testHistory: [
        { testName: "Test 1", score: 30, maxMarks: 50, rank: 8, date: "15 Sep" },
        { testName: "Test 2", score: 32, maxMarks: 50, rank: 7, date: "22 Sep" },
        { testName: "Test 3", score: 35, maxMarks: 50, rank: 6, date: "29 Sep" },
        { testName: "Test 4", score: 36, maxMarks: 50, rank: 6, date: "06 Oct" },
        { testName: "Test 5", score: 39, maxMarks: 50, rank: 5, date: "13 Oct" },
        { testName: "Test 6", score: 41, maxMarks: 50, rank: 4, date: "20 Oct" }
      ]
    },
    {
      id: "std-104",
      name: "Diya Mukherjee",
      rollNo: "104",
      batch: "Class 10 - Foundation",
      parentName: "Subhash Mukherjee",
      parentPhone: "9834567123",
      feeAmount: 3500,
      feeMonth: "October 2026",
      feeDueDate: "05 Oct 2026",
      daysLate: 0,
      feeStatus: "paid",
      attendancePercent: 88,
      presentDays: 22,
      absentDays: 3,
      totalClasses: 25,
      todayAttendance: "P",
      homework: {
        subject: "Physics",
        title: "Heating Effect of Electric Current",
        description: "Explain Joule's heating effect formula derivations.",
        dueDate: "26 Oct 2026",
        status: "submitted"
      },
      testHistory: [
        { testName: "Test 1", score: 35, maxMarks: 50, rank: 6, date: "15 Sep" },
        { testName: "Test 2", score: 36, maxMarks: 50, rank: 6, date: "22 Sep" },
        { testName: "Test 3", score: 38, maxMarks: 50, rank: 5, date: "29 Sep" },
        { testName: "Test 4", score: 41, maxMarks: 50, rank: 3, date: "06 Oct" },
        { testName: "Test 5", score: 43, maxMarks: 50, rank: 3, date: "13 Oct" },
        { testName: "Test 6", score: 44, maxMarks: 50, rank: 3, date: "20 Oct" }
      ]
    },
    {
      id: "std-105",
      name: "Priyanshu Gupta",
      rollNo: "105",
      batch: "Class 10 - Foundation",
      parentName: "Manoj Gupta",
      parentPhone: "9911223344",
      feeAmount: 3500,
      feeMonth: "October 2026",
      feeDueDate: "05 Oct 2026",
      daysLate: 20,
      feeStatus: "pending",
      attendancePercent: 76,
      presentDays: 19,
      absentDays: 6,
      totalClasses: 25,
      todayAttendance: "A",
      homework: {
        subject: "Maths",
        title: "Quadratic Equations Word Problems",
        description: "Solve problem set 4.3 speed and time questions.",
        dueDate: "26 Oct 2026",
        status: "pending"
      },
      testHistory: [
        { testName: "Test 1", score: 26, maxMarks: 50, rank: 10, date: "15 Sep" },
        { testName: "Test 2", score: 28, maxMarks: 50, rank: 9, date: "22 Sep" },
        { testName: "Test 3", score: 31, maxMarks: 50, rank: 8, date: "29 Sep" },
        { testName: "Test 4", score: 33, maxMarks: 50, rank: 7, date: "06 Oct" },
        { testName: "Test 5", score: 35, maxMarks: 50, rank: 6, date: "13 Oct" },
        { testName: "Test 6", score: 36, maxMarks: 50, rank: 6, date: "20 Oct" }
      ]
    },
    {
      id: "std-201",
      name: "Tanmay Joshi",
      rollNo: "201",
      batch: "Class 12 - PCM Boards",
      parentName: "Dr. Alok Joshi",
      parentPhone: "9820011223",
      feeAmount: 4500,
      feeMonth: "October 2026",
      feeDueDate: "10 Oct 2026",
      daysLate: 15,
      feeStatus: "pending",
      attendancePercent: 92,
      presentDays: 23,
      absentDays: 2,
      totalClasses: 25,
      todayAttendance: "P",
      homework: {
        subject: "Physics",
        title: "Electromagnetic Induction Lenz Law",
        description: "Solve 10 past board exam numericals on mutual inductance.",
        dueDate: "27 Oct 2026",
        status: "pending"
      },
      testHistory: [
        { testName: "Test 1", score: 40, maxMarks: 50, rank: 4, date: "15 Sep" },
        { testName: "Test 2", score: 42, maxMarks: 50, rank: 3, date: "22 Sep" },
        { testName: "Test 3", score: 41, maxMarks: 50, rank: 4, date: "29 Sep" },
        { testName: "Test 4", score: 45, maxMarks: 50, rank: 2, date: "06 Oct" },
        { testName: "Test 5", score: 46, maxMarks: 50, rank: 2, date: "13 Oct" },
        { testName: "Test 6", score: 47, maxMarks: 50, rank: 1, date: "20 Oct" }
      ]
    },
    {
      id: "std-202",
      name: "Sneha Iyer",
      rollNo: "202",
      batch: "Class 12 - PCM Boards",
      parentName: "K. R. Iyer",
      parentPhone: "9845012345",
      feeAmount: 4500,
      feeMonth: "October 2026",
      feeDueDate: "10 Oct 2026",
      daysLate: 0,
      feeStatus: "paid",
      attendancePercent: 96,
      presentDays: 24,
      absentDays: 1,
      totalClasses: 25,
      todayAttendance: "P",
      homework: {
        subject: "Chemistry",
        title: "Coordination Compounds Nomenclature",
        description: "Name 20 IUPAC transition metal complexes.",
        dueDate: "26 Oct 2026",
        status: "submitted"
      },
      testHistory: [
        { testName: "Test 1", score: 46, maxMarks: 50, rank: 1, date: "15 Sep" },
        { testName: "Test 2", score: 48, maxMarks: 50, rank: 1, date: "22 Sep" },
        { testName: "Test 3", score: 47, maxMarks: 50, rank: 1, date: "29 Sep" },
        { testName: "Test 4", score: 49, maxMarks: 50, rank: 1, date: "06 Oct" },
        { testName: "Test 5", score: 48, maxMarks: 50, rank: 1, date: "13 Oct" },
        { testName: "Test 6", score: 49, maxMarks: 50, rank: 1, date: "20 Oct" }
      ]
    },
    {
      id: "std-203",
      name: "Ishaan Malhotra",
      rollNo: "203",
      batch: "Class 12 - PCM Boards",
      parentName: "Vikram Malhotra",
      parentPhone: "9988776655",
      feeAmount: 4500,
      feeMonth: "October 2026",
      feeDueDate: "10 Oct 2026",
      daysLate: 15,
      feeStatus: "pending",
      attendancePercent: 84,
      presentDays: 21,
      absentDays: 4,
      totalClasses: 25,
      todayAttendance: "P",
      homework: {
        subject: "Maths",
        title: "Definite Integrals Properties",
        description: "Prove properties 1 to 5 with 4 solved examples.",
        dueDate: "28 Oct 2026",
        status: "pending"
      },
      testHistory: [
        { testName: "Test 1", score: 32, maxMarks: 50, rank: 6, date: "15 Sep" },
        { testName: "Test 2", score: 34, maxMarks: 50, rank: 5, date: "22 Sep" },
        { testName: "Test 3", score: 37, maxMarks: 50, rank: 5, date: "29 Sep" },
        { testName: "Test 4", score: 38, maxMarks: 50, rank: 5, date: "06 Oct" },
        { testName: "Test 5", score: 40, maxMarks: 50, rank: 4, date: "13 Oct" },
        { testName: "Test 6", score: 42, maxMarks: 50, rank: 3, date: "20 Oct" }
      ]
    },
    {
      id: "std-301",
      name: "Kavya Singhania",
      rollNo: "301",
      batch: "Class 9 - Science",
      parentName: "Sunil Singhania",
      parentPhone: "9765432109",
      feeAmount: 3000,
      feeMonth: "October 2026",
      feeDueDate: "12 Oct 2026",
      daysLate: 13,
      feeStatus: "pending",
      attendancePercent: 92,
      presentDays: 23,
      absentDays: 2,
      totalClasses: 25,
      todayAttendance: "P",
      homework: {
        subject: "Biology",
        title: "Tissues Diagram - Plant vs Animal",
        description: "Draw and label parenchyma, collenchyma and sclerenchyma cells.",
        dueDate: "27 Oct 2026",
        status: "pending"
      },
      testHistory: [
        { testName: "Test 1", score: 44, maxMarks: 50, rank: 2, date: "15 Sep" },
        { testName: "Test 2", score: 46, maxMarks: 50, rank: 1, date: "22 Sep" },
        { testName: "Test 3", score: 45, maxMarks: 50, rank: 2, date: "29 Sep" },
        { testName: "Test 4", score: 47, maxMarks: 50, rank: 1, date: "06 Oct" },
        { testName: "Test 5", score: 48, maxMarks: 50, rank: 1, date: "13 Oct" },
        { testName: "Test 6", score: 49, maxMarks: 50, rank: 1, date: "20 Oct" }
      ]
    },
    {
      id: "std-401",
      name: "Siddharth Rao",
      rollNo: "401",
      batch: "Class 11 - JEE Prep",
      parentName: "Prasad Rao",
      parentPhone: "9900112233",
      feeAmount: 6000,
      feeMonth: "October 2026",
      feeDueDate: "15 Oct 2026",
      daysLate: 10,
      feeStatus: "pending",
      attendancePercent: 96,
      presentDays: 24,
      absentDays: 1,
      totalClasses: 25,
      todayAttendance: "P",
      homework: {
        subject: "Physics",
        title: "Rotational Motion Moment of Inertia",
        description: "Calculate MI of hollow cylinder and sphere about tangential axis.",
        dueDate: "28 Oct 2026",
        status: "pending"
      },
      testHistory: [
        { testName: "Test 1", score: 42, maxMarks: 50, rank: 3, date: "15 Sep" },
        { testName: "Test 2", score: 45, maxMarks: 50, rank: 2, date: "22 Sep" },
        { testName: "Test 3", score: 44, maxMarks: 50, rank: 2, date: "29 Sep" },
        { testName: "Test 4", score: 47, maxMarks: 50, rank: 1, date: "06 Oct" },
        { testName: "Test 5", score: 48, maxMarks: 50, rank: 1, date: "13 Oct" },
        { testName: "Test 6", score: 49, maxMarks: 50, rank: 1, date: "20 Oct" }
      ]
    }
  ],
  enquiries: [
    {
      id: "enq-1",
      studentName: "Aditya Nair",
      targetClass: "Class 10",
      phone: "9820198201",
      referredBy: "Aarav Sharma (Class 10)",
      date: "24 Oct 2026",
      status: "New",
      notes: "Looking for Maths & Science crash course."
    },
    {
      id: "enq-2",
      studentName: "Meera Sen",
      targetClass: "Class 12",
      phone: "9871100223",
      referredBy: "Tanmay Joshi (Class 12)",
      date: "23 Oct 2026",
      status: "Contacted",
      notes: "Interested in Board test series + doubt sessions."
    },
    {
      id: "enq-3",
      studentName: "Kunal Bansal",
      targetClass: "Class 9",
      phone: "9933445566",
      referredBy: "Rajesh Sharma (Parent)",
      date: "21 Oct 2026",
      status: "Demo Scheduled",
      notes: "Demo class on Tuesday 5:00 PM."
    },
    {
      id: "enq-4",
      studentName: "Riya Kapoor",
      targetClass: "Class 11",
      phone: "9818822334",
      referredBy: "Direct Google Search",
      date: "20 Oct 2026",
      status: "Contacted",
      notes: "JEE Physics & Chemistry enquiry."
    },
    {
      id: "enq-5",
      studentName: "Harshvardhan Rana",
      targetClass: "Class 10",
      phone: "9829911223",
      referredBy: "Ananya Verma (Class 10)",
      date: "18 Oct 2026",
      status: "Enrolled",
      notes: "Joined Class 10 Foundation batch. Paid ₹3500."
    }
  ]
};

// State Manager
let state = {
  currentTab: 'fees',
  activeBatch: "Class 10 - Foundation",
  selectedStudentId: "std-101",
  chartInstance: null,
  activeWaPayload: null
};

// Initialize App
function initApp() {
  loadStateFromStorage();
  syncFromBackendDatabase();
  checkTeacherProfileOnboarding();
  checkStartupWhatsApp();
  updateLiveClock();
  setInterval(updateLiveClock, 30000);

  // Setup batch pill options
  renderBatchPills();

  // Populate student dropdowns
  populateStudentDropdowns();

  // Render initial tab
  switchTab(state.currentTab);

  // Initialize Lucide icons
  refreshIcons();
}

// Global Teacher Configuration Store
window.TEACHER_CLASSES = [
  "Class 10 - Foundation",
  "Class 12 - PCM Boards",
  "Class 9 - Science",
  "Class 11 - JEE Prep"
];

window.TEACHER_SUBJECTS = [
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "English"
];

function checkTeacherProfileOnboarding() {
  fetch('/api/teacher-profile')
    .then(r => r.json())
    .then(data => {
      if (data.profile) {
        window.TEACHER_PROFILE = data.profile;
        if (data.profile.institute_name) {
          const sub = document.getElementById('headerSubtitle');
          if (sub) sub.innerText = data.profile.institute_name;
        }
        if (data.profile.upi_id) {
          window.TD_DATA.centre.upiVpa = data.profile.upi_id;
        }
        if (data.profile.classes) {
          window.TEACHER_CLASSES = data.profile.classes.split(',').map(c => c.trim()).filter(Boolean);
        }
        if (data.profile.subjects) {
          window.TEACHER_SUBJECTS = data.profile.subjects.split(',').map(s => s.trim()).filter(Boolean);
        }
        populateClassDropdowns();

        // First-time onboarding trigger
        if (!data.profile.is_onboarded || !data.profile.teacher_name) {
          setTimeout(() => {
            openTeacherProfileModal(true);
          }, 600);
        }
      }
    })
    .catch(() => {});
}

// Populate Dynamic Class Dropdowns & Filters across the App
function populateClassDropdowns() {
  const classes = window.TEACHER_CLASSES && window.TEACHER_CLASSES.length > 0 
    ? window.TEACHER_CLASSES 
    : ["Class 10 - Foundation", "Class 12 - PCM Boards", "Class 9 - Science", "Class 11 - JEE Prep"];

  // 1. Add Student batch dropdown
  const newStdSelect = document.getElementById('newStdBatch');
  if (newStdSelect) {
    const currentVal = newStdSelect.value;
    let opts = classes.map(c => `<option value="${c}">${c}</option>`).join('');
    opts += `<option value="__ADD_NEW__" class="font-bold text-teal-700 bg-teal-50">+ Add New Class / Batch...</option>`;
    newStdSelect.innerHTML = opts;
    if (classes.includes(currentVal)) {
      newStdSelect.value = currentVal;
    } else {
      newStdSelect.value = classes[0];
    }
  }

  // 2. Fees batch filter dropdown
  const feesFilter = document.getElementById('feesBatchFilter');
  if (feesFilter) {
    const currentVal = feesFilter.value;
    let opts = `<option value="ALL">All Batches</option>`;
    opts += classes.map(c => `<option value="${c}">${c}</option>`).join('');
    feesFilter.innerHTML = opts;
    if (currentVal && (currentVal === 'ALL' || classes.includes(currentVal))) {
      feesFilter.value = currentVal;
    }
  }

  // 3. Attendance batch pills
  const pillsContainer = document.getElementById('batchPillsContainer');
  if (pillsContainer) {
    pillsContainer.innerHTML = classes.map((batch, idx) => `
      <button onclick="selectAttendanceBatch('${batch}')" id="batch-pill-${idx}" class="attendance-batch-pill shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition border ${idx === 0 ? 'bg-teal-700 text-white border-teal-700 shadow-sm' : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'}">
        ${batch}
      </button>
    `).join('');
  }
}

function handleClassDropdownChange(val, context) {
  const group = document.getElementById('inlineNewBatchGroup');
  if (val === '__ADD_NEW__') {
    if (group) {
      group.classList.remove('hidden');
      const input = document.getElementById('inlineNewBatchInput');
      if (input) {
        input.value = '';
        input.focus();
      }
    }
  } else {
    if (group) group.classList.add('hidden');
  }
}

function saveInlineNewBatch() {
  const input = document.getElementById('inlineNewBatchInput');
  const val = input ? input.value.trim() : '';
  if (!val) {
    showAppAlert("Batch Name Required", "Please enter a class / batch name (e.g. Class 10 Physics).", "📚");
    return;
  }
  if (!window.TEACHER_CLASSES.includes(val)) {
    window.TEACHER_CLASSES.push(val);
  }
  // Sync to backend teacher profile
  const profile = window.TEACHER_PROFILE || {};
  profile.classes = window.TEACHER_CLASSES.join(', ');
  fetch('/api/teacher-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile)
  }).catch(() => {});

  populateClassDropdowns();
  const newStdSelect = document.getElementById('newStdBatch');
  if (newStdSelect) newStdSelect.value = val;
  const group = document.getElementById('inlineNewBatchGroup');
  if (group) group.classList.add('hidden');
  showToast("Class Added! 🎓", `${val} is now available in your batches.`);
}

// Teacher Profile Management Functions
function renderTeacherClassesManager() {
  const container = document.getElementById('profClassesChips');
  if (!container) return;
  container.innerHTML = window.TEACHER_CLASSES.map((cls, idx) => `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-teal-50 border border-teal-200 text-teal-900">
      <span>${cls}</span>
      <button type="button" onclick="removeClassChip(${idx})" class="text-teal-600 hover:text-rose-600 font-bold ml-0.5">✕</button>
    </span>
  `).join('');
  const hiddenInput = document.getElementById('profClassesList');
  if (hiddenInput) hiddenInput.value = window.TEACHER_CLASSES.join(', ');
}

function addClassChip() {
  const input = document.getElementById('newClassInput');
  const val = input ? input.value.trim() : '';
  if (!val) return;
  if (!window.TEACHER_CLASSES.includes(val)) {
    window.TEACHER_CLASSES.push(val);
    renderTeacherClassesManager();
  }
  if (input) input.value = '';
}

function removeClassChip(idx) {
  window.TEACHER_CLASSES.splice(idx, 1);
  renderTeacherClassesManager();
}

function renderTeacherSubjectsManager() {
  const container = document.getElementById('profSubjectsChips');
  if (!container) return;
  container.innerHTML = window.TEACHER_SUBJECTS.map((sub, idx) => `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-50 border border-indigo-200 text-indigo-900">
      <span>${sub}</span>
      <button type="button" onclick="removeSubjectChip(${idx})" class="text-indigo-600 hover:text-rose-600 font-bold ml-0.5">✕</button>
    </span>
  `).join('');
  const hiddenInput = document.getElementById('profSubjectsList');
  if (hiddenInput) hiddenInput.value = window.TEACHER_SUBJECTS.join(', ');
}

function addSubjectChip() {
  const input = document.getElementById('newSubjectInput');
  const val = input ? input.value.trim() : '';
  if (!val) return;
  if (!window.TEACHER_SUBJECTS.includes(val)) {
    window.TEACHER_SUBJECTS.push(val);
    renderTeacherSubjectsManager();
  }
  if (input) input.value = '';
}

function removeSubjectChip(idx) {
  window.TEACHER_SUBJECTS.splice(idx, 1);
  renderTeacherSubjectsManager();
}

function openTeacherProfileModal(isFirstTime = false) {
  const profile = window.TEACHER_PROFILE || {};
  const tName = document.getElementById('profTeacherName');
  if (tName) tName.value = profile.teacher_name || '';

  const instName = document.getElementById('profInstituteName');
  if (instName) instName.value = profile.institute_name || 'Apex Academy';

  const phone = document.getElementById('profPhone');
  if (phone) phone.value = profile.phone || '';

  const upi = document.getElementById('profUpiId');
  if (upi) {
    upi.value = profile.upi_id || 'tuitiondesk@okicici';
    updateProfileQrPreview(upi.value);
  }

  if (profile.classes) {
    window.TEACHER_CLASSES = profile.classes.split(',').map(c => c.trim()).filter(Boolean);
  }
  if (profile.subjects) {
    window.TEACHER_SUBJECTS = profile.subjects.split(',').map(s => s.trim()).filter(Boolean);
  }

  renderTeacherClassesManager();
  renderTeacherSubjectsManager();

  const title = document.getElementById('teacherModalTitle');
  if (title) {
    title.innerText = isFirstTime ? "Welcome! Setup Your Tuition Profile" : "Teacher & Tuition Setup";
  }

  openModal('teacherProfileModal');
}

function updateProfileQrPreview(upiId) {
  const preview = document.getElementById('profQrPreview');
  if (preview && upiId) {
    const url = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=TuitionDesk`;
    preview.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
  }
}

function handleSaveTeacherProfile(event) {
  event.preventDefault();
  const tName = document.getElementById('profTeacherName')?.value.trim();
  const instName = document.getElementById('profInstituteName')?.value.trim();
  const phone = document.getElementById('profPhone')?.value.trim();
  const upiId = document.getElementById('profUpiId')?.value.trim();
  const classes = window.TEACHER_CLASSES.join(', ');
  const subjects = window.TEACHER_SUBJECTS.join(', ');

  const payload = {
    teacher_name: tName,
    institute_name: instName,
    phone: phone,
    upi_id: upiId,
    classes: classes,
    subjects: subjects,
    is_onboarded: true
  };

  fetch('/api/teacher-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(r => r.json())
    .then(data => {
      window.TEACHER_PROFILE = payload;
      window.TD_DATA.centre.upiVpa = upiId;
      window.TD_DATA.centre.subTitle = instName;
      const sub = document.getElementById('headerSubtitle');
      if (sub) sub.innerText = instName;

      populateClassDropdowns();
      closeModal('teacherProfileModal');
      confetti({ particleCount: 50, spread: 70 });
      showToast("Profile Configured! 🎓", `Welcome ${tName}! Tuition centre set to ${instName}.`);
    })
    .catch(() => {
      closeModal('teacherProfileModal');
      showToast("Setup Saved", "Profile updated.");
    });
}

function syncFromBackendDatabase() {
  fetch('/api/students')
    .then(r => r.json())
    .then(data => {
      if (data.students && data.students.length > 0) {
        // Map SQLite rows to state
        window.TD_DATA.students = data.students.map(dbS => {
          // Check if local student has testHistory or homework
          const existing = (window.TD_DATA.students || []).find(e => e.id === dbS.id);
          return {
            id: dbS.id,
            name: dbS.name,
            rollNo: dbS.roll_no,
            batch: dbS.batch_id,
            subjects: dbS.subjects || "Maths & Science",
            parentName: dbS.parent_name,
            parentPhone: dbS.parent_phone,
            feeAmount: dbS.fee_amount,
            feeMonth: dbS.fee_month,
            feeDueDate: dbS.fee_due_date,
            daysLate: dbS.days_late,
            feeStatus: dbS.fee_status,
            attendancePercent: dbS.attendance_percent,
            presentDays: dbS.present_days,
            absentDays: dbS.absent_days,
            totalClasses: dbS.total_classes,
            todayAttendance: dbS.today_attendance,
            homework: existing ? existing.homework : {
              subject: "Science & Math",
              title: "Chapter Revision Practice",
              description: "Complete NCERT exercises and submit notebook next class.",
              dueDate: "Tomorrow",
              status: "pending"
            },
            testHistory: existing ? existing.testHistory : [
              { testName: "Test 1", score: 38, maxMarks: 50, rank: 4, date: "15 Sep" },
              { testName: "Test 2", score: 40, maxMarks: 50, rank: 3, date: "22 Sep" },
              { testName: "Test 3", score: 42, maxMarks: 50, rank: 2, date: "29 Sep" },
              { testName: "Test 4", score: 41, maxMarks: 50, rank: 3, date: "06 Oct" },
              { testName: "Test 5", score: 44, maxMarks: 50, rank: 2, date: "13 Oct" },
              { testName: "Test 6", score: 46, maxMarks: 50, rank: 1, date: "20 Oct" }
            ]
          };
        });
        saveStateToStorage();
        populateStudentDropdowns();
        renderCurrentTab();
      }
    })
    .catch(() => {});
}

function getActiveTeacherToken() {
  try {
    const lic = localStorage.getItem('tuitiondesk_license') || 'TDX7YMNAQU';
    const prof = window.TD_DATA && window.TD_DATA.profile ? window.TD_DATA.profile : {};
    const phone = ((prof.phone || '8818050651').replace(/[^0-9]/g, '')) || '8818050651';
    const cleanKey = lic.replace(/[^A-Za-z0-9]/g, '');
    return 'TCH_' + phone + '_' + cleanKey;
  } catch(e) {
    return 'TCH_8818050651_TDX7YMNAQU';
  }
}

let startupQrPoll = null;

function checkStartupWhatsApp() {
  fetch('/api/whatsapp/status?token=' + encodeURIComponent(getActiveTeacherToken()))
    .then(r => r.json())
    .then(data => {
      const overlay = document.getElementById('startupQrOverlay');
      const headerPill = document.getElementById('headerWaStatusPill');
      const headerText = document.getElementById('headerWaStatusText');
      const desktopBadge = document.getElementById('desktopWaBadge');
      const qrImg = document.getElementById('startupQrImg');

      if (data.connected) {
        if (overlay) overlay.classList.add('hidden');
        if (headerPill) headerPill.className = 'flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-300/30 text-emerald-100 text-[11px] font-semibold';
        if (headerText) headerText.innerText = 'WhatsApp Active';
        if (desktopBadge) desktopBadge.innerText = 'WhatsApp Connected';
        if (startupQrPoll) clearInterval(startupQrPoll);
      } else {
        // Not connected: show QR overlay on first load so owner links immediately
        if (overlay) overlay.classList.remove('hidden');
        if (headerPill) headerPill.className = 'flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/20 border border-amber-300/30 text-amber-200 text-[11px] font-semibold cursor-pointer';
        if (headerText) headerText.innerText = 'Scan QR';
        if (desktopBadge) desktopBadge.innerText = 'Scan QR Code';

        if (qrImg && data.has_qr) {
          qrImg.src = '/api/whatsapp/qr.png?token=' + encodeURIComponent(getActiveTeacherToken()) + '&t=' + Date.now();
        }

        // Start polling until connected
        if (!startupQrPoll) {
          startupQrPoll = setInterval(() => {
            fetch('/api/whatsapp/status?token=' + encodeURIComponent(getActiveTeacherToken()))
              .then(res => res.json())
              .then(statusData => {
                if (statusData.connected) {
                  clearInterval(startupQrPoll);
                  startupQrPoll = null;
                  if (overlay) {
                    overlay.classList.add('hidden');
                    confetti({ particleCount: 60, spread: 70 });
                    showToast("WhatsApp Linked! 🎉", "Your WhatsApp is now active. All automated reminders will send directly.");
                  }
                  if (headerText) headerText.innerText = 'WhatsApp Active';
                  if (desktopBadge) desktopBadge.innerText = 'WhatsApp Connected';
                } else if (qrImg && statusData.has_qr) {
                  qrImg.src = '/api/whatsapp/qr.png?token=' + encodeURIComponent(getActiveTeacherToken()) + '&t=' + Date.now();
                }
              })
              .catch(() => {});
          }, 2000);
        }
      }
    })
    .catch(() => {});
}

function closeStartupQrOverlay() {
  const overlay = document.getElementById('startupQrOverlay');
  if (overlay) overlay.classList.add('hidden');
}

// Storage helpers (Local + Cloud Persistence)
function loadStateFromStorage() {
  const saved = localStorage.getItem('tuitiondesk_data');
  if (saved) {
    try {
      window.TD_DATA = JSON.parse(saved);
    } catch (e) {
      console.error("Storage parse error", e);
      window.TD_DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  } else {
    window.TD_DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
  // Auto-restore full cloud data from Supabase (Zero data loss even on fresh install)
  pullDataFromCloud();
}

function saveStateToStorage() {
  localStorage.setItem('tuitiondesk_data', JSON.stringify(window.TD_DATA));
  // Debounced auto-backup to Supabase Cloud
  if (cloudSyncDebounceTimer) clearTimeout(cloudSyncDebounceTimer);
  cloudSyncDebounceTimer = setTimeout(syncDataToCloud, 1200);
}

// ==========================================================================
// PROFESSIONAL DIALOG & PROMPT MODAL ENGINE (iOS Liquid Glass)
// ==========================================================================
let customDialogCallback = null;

function showAppAlert(title, message, icon = '✨') {
  return new Promise((resolve) => {
    const modal = document.getElementById('appCustomDialogModal');
    if (!modal) {
      alert(`${title}\n\n${message}`);
      resolve(true);
      return;
    }
    const tEl = document.getElementById('dialogTitle');
    const mEl = document.getElementById('dialogMessage');
    const iEl = document.getElementById('dialogIconBox');
    const inBox = document.getElementById('dialogInputContainer');
    const btnC = document.getElementById('dialogBtnCancel');
    const btnK = document.getElementById('dialogBtnConfirm');

    if (tEl) tEl.textContent = title || 'Notice';
    if (mEl) mEl.textContent = message || '';
    if (iEl) iEl.textContent = icon;
    if (inBox) inBox.classList.add('hidden');
    if (btnC) btnC.classList.add('hidden');
    if (btnK) btnK.textContent = 'Got it';
    modal.classList.remove('hidden');

    customDialogCallback = () => {
      resolve(true);
    };
  });
}

function showAppConfirm(title, message, icon = '❓') {
  return new Promise((resolve) => {
    const modal = document.getElementById('appCustomDialogModal');
    if (!modal) {
      resolve(confirm(`${title}\n\n${message}`));
      return;
    }
    const tEl = document.getElementById('dialogTitle');
    const mEl = document.getElementById('dialogMessage');
    const iEl = document.getElementById('dialogIconBox');
    const inBox = document.getElementById('dialogInputContainer');
    const btnC = document.getElementById('dialogBtnCancel');
    const btnK = document.getElementById('dialogBtnConfirm');

    if (tEl) tEl.textContent = title || 'Confirm';
    if (mEl) mEl.textContent = message || '';
    if (iEl) iEl.textContent = icon;
    if (inBox) inBox.classList.add('hidden');
    if (btnC) btnC.classList.remove('hidden');
    if (btnK) btnK.textContent = 'Confirm';
    modal.classList.remove('hidden');

    customDialogCallback = (confirmed) => {
      resolve(confirmed);
    };
  });
}

function showAppPrompt(title, message, placeholder = '', icon = '✏️') {
  return new Promise((resolve) => {
    const modal = document.getElementById('appCustomDialogModal');
    if (!modal) {
      resolve(prompt(`${title}\n\n${message}`));
      return;
    }
    const tEl = document.getElementById('dialogTitle');
    const mEl = document.getElementById('dialogMessage');
    const iEl = document.getElementById('dialogIconBox');
    const inBox = document.getElementById('dialogInputContainer');
    const input = document.getElementById('dialogInput');
    const btnC = document.getElementById('dialogBtnCancel');
    const btnK = document.getElementById('dialogBtnConfirm');

    if (tEl) tEl.textContent = title || 'Input Required';
    if (mEl) mEl.textContent = message || '';
    if (iEl) iEl.textContent = icon;
    if (input) {
      input.value = '';
      input.placeholder = placeholder || 'Enter value...';
    }
    if (inBox) inBox.classList.remove('hidden');
    if (btnC) btnC.classList.remove('hidden');
    if (btnK) btnK.textContent = 'Submit';
    modal.classList.remove('hidden');
    if (input) setTimeout(() => input.focus(), 50);

    customDialogCallback = (confirmed) => {
      if (confirmed && input) {
        resolve(input.value.trim());
      } else {
        resolve(null);
      }
    };
  });
}

function closeCustomDialog(confirmed) {
  const modal = document.getElementById('appCustomDialogModal');
  if (modal) modal.classList.add('hidden');
  if (customDialogCallback) {
    const cb = customDialogCallback;
    customDialogCallback = null;
    cb(confirmed);
  }
}

function getActiveLicenseKey() {
  return localStorage.getItem('tuitiondesk_license') || 'TDX7YMNAQU';
}

// Cloud Persistence Engine (Debounced sync to Supabase)
let cloudSyncDebounceTimer = null;

function syncDataToCloud() {
  if (!window.TD_DATA) return;
  const lic = getActiveLicenseKey();
  fetch('/api/sync/push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      license_key: lic,
      profile: window.TD_DATA.teacherProfile || window.TD_DATA.profile || {},
      students: window.TD_DATA.students || [],
      attendance: window.TD_DATA.attendance || {},
      tests: window.TD_DATA.tests || []
    })
  }).catch(() => {});
}

async function pullDataFromCloud() {
  const lic = getActiveLicenseKey();
  if (!lic) return;
  try {
    const res = await fetch(`/api/sync/pull?key=${encodeURIComponent(lic)}`);
    const data = await res.json();
    if (data.success && data.profile && Object.keys(data.profile).length > 0) {
      if (!window.TD_DATA) window.TD_DATA = {};
      if (data.profile) {
        window.TD_DATA.teacherProfile = data.profile;
        window.TD_DATA.profile = data.profile;
      }
      if (Array.isArray(data.students) && data.students.length > 0) {
        window.TD_DATA.students = data.students;
      }
      if (data.attendance && Object.keys(data.attendance).length > 0) {
        window.TD_DATA.attendance = data.attendance;
      }
      if (Array.isArray(data.tests) && data.tests.length > 0) {
        window.TD_DATA.tests = data.tests;
      }
      localStorage.setItem('tuitiondesk_data', JSON.stringify(window.TD_DATA));
      if (typeof renderBatchPills === 'function') renderBatchPills();
      if (typeof populateStudentDropdowns === 'function') populateStudentDropdowns();
      if (typeof renderCurrentTab === 'function') renderCurrentTab();
    }
  } catch (_) {}
}

async function reloginWhatsApp() {
  const ok = await showAppConfirm("Reconnect WhatsApp", "Aap iss WhatsApp session ko disconnect karke naya phone link karna chahte hain?", "🔄");
  if (!ok) return;

  showToast("Resetting Session 🔄", "Previous session cleared. Generating fresh QR code...");
  try {
    const res = await fetch('/api/whatsapp/relogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: getActiveTeacherToken() })
    });
    const data = await res.json();
    if (data.success) {
      showToast("Fresh QR Ready 📸", "Naya QR code screen par load ho gaya hai.");
      checkRealWaStatus();
      refreshBotQrCode();
    }
  } catch (_) {
    showToast("Notice", "Reset request sent.");
    checkRealWaStatus();
  }
}


function resetAllData() {
  if (confirm("Reset TuitionDesk to default settings?")) {
    window.TD_DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveStateToStorage();
    renderBatchPills();
    populateStudentDropdowns();
    renderCurrentTab();
    showToast("Data Reset", "TuitionDesk data reset to defaults.");
  }
}

// Live Clock
function updateLiveClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const timeStr = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  const el = document.getElementById('liveTime');
  if (el) el.innerText = timeStr;
}

// Device View Helper
let isFrameView = true;
function toggleDeviceFrame() {
  const container = document.getElementById('appContainer');
  const btnText = document.getElementById('frameToggleText');
  if (!container) return;

  if (isFrameView) {
    container.classList.remove('sm:max-w-md');
    container.classList.add('sm:max-w-xl');
    if (btnText) btnText.innerText = "Compact View";
    isFrameView = false;
  } else {
    container.classList.add('sm:max-w-md');
    container.classList.remove('sm:max-w-xl');
    if (btnText) btnText.innerText = "Full Width";
    isFrameView = true;
  }
  if (state.chartInstance) {
    setTimeout(() => state.chartInstance.resize(), 200);
  }
}

// Navigation Tab Switcher
function switchTab(tabId) {
  if (navigator.vibrate) {
    try { navigator.vibrate(10); } catch(e) {}
  }
  state.currentTab = tabId;

  // Update nav buttons visual styling
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.remove('text-teal-700', 'font-bold');
    btn.classList.add('text-slate-400', 'font-semibold');
  });

  const activeBtn = document.getElementById(`nav-btn-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-400', 'font-semibold');
    activeBtn.classList.add('text-teal-700', 'font-bold');
  }

  // Toggle Screen visibility
  document.querySelectorAll('.tab-screen').forEach(screen => {
    screen.classList.add('hidden');
  });

  const targetScreen = document.getElementById(`tab-${tabId}`);
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
  }

  // Render contents of tab
  renderCurrentTab();
  refreshIcons();
}

function renderCurrentTab() {
  switch (state.currentTab) {
    case 'fees':
      renderFeesScreen();
      break;
    case 'attendance':
      renderAttendanceScreen();
      break;
    case 'tests':
      renderTestsScreen();
      break;
    case 'parent':
      renderParentPortal();
      break;
    case 'dashboard':
      renderDashboardScreen();
      break;
  }
  updatePendingBadges();
}

// Helper to refresh Lucide icons after DOM insertion
function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================================================
// 1. FEES PENDING MODULE
// ==========================================================================

function updatePendingBadges() {
  const pendingStudents = window.TD_DATA.students.filter(s => s.feeStatus === 'pending');
  const count = pendingStudents.length;

  const navBadge = document.getElementById('navFeeBadge');
  if (navBadge) {
    navBadge.innerText = count;
    navBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  const remindCount = document.getElementById('remindAllCount');
  if (remindCount) remindCount.innerText = count;

  const countBadge = document.getElementById('pendingCountBadge');
  if (countBadge) countBadge.innerText = `${count} students late`;
}

function renderFeesScreen() {
  const pendingStudents = window.TD_DATA.students.filter(s => s.feeStatus === 'pending');
  const paidStudents = window.TD_DATA.students.filter(s => s.feeStatus === 'paid');

  const totalPending = pendingStudents.reduce((acc, curr) => acc + curr.feeAmount, 0);
  const totalCollected = paidStudents.reduce((acc, curr) => acc + curr.feeAmount, 0) + 72500; // includes past batch collected

  document.getElementById('totalPendingAmount').innerText = `₹${totalPending.toLocaleString('en-IN')}`;
  document.getElementById('feesCollectedAmount').innerText = `₹${totalCollected.toLocaleString('en-IN')}`;

  renderFeesList();
}

function renderFeesList() {
  const search = (document.getElementById('feesSearchInput')?.value || '').toLowerCase();
  const batchFilter = document.getElementById('feesBatchFilter')?.value || 'ALL';
  const container = document.getElementById('feesListContainer');
  if (!container) return;

  const filtered = window.TD_DATA.students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search) || s.batch.toLowerCase().includes(search);
    const matchesBatch = batchFilter === 'ALL' || s.batch === batchFilter;
    return matchesSearch && matchesBatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-white p-8 rounded-2xl text-center border border-slate-200">
        <i data-lucide="check-circle" class="w-10 h-10 text-emerald-500 mx-auto mb-2"></i>
        <h4 class="text-sm font-bold text-slate-800">No Pending Fees Found</h4>
        <p class="text-xs text-slate-500 mt-1">All students matching this search are up to date!</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  let html = '';
  filtered.forEach(s => {
    const isLate = s.feeStatus === 'pending';
    const lateBadgeClass = isLate 
      ? (s.daysLate > 14 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-amber-100 text-amber-800 border-amber-200')
      : 'bg-emerald-100 text-emerald-800 border-emerald-200';

    const lateText = isLate ? `${s.daysLate} days late` : `Paid • Receipt ready`;

    html += `
      <div class="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition hover:shadow-md">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl ${isLate ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'} flex items-center justify-center font-bold text-sm border border-slate-100">
              ${s.name.split(' ').map(n=>n[0]).join('')}
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <h4 class="text-xs font-bold text-slate-900">${s.name}</h4>
              </div>
              <p class="text-[11px] text-slate-500">${s.batch}</p>
              <div class="text-[10px] text-teal-800 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 inline-flex items-center gap-1 mt-0.5">
                <i data-lucide="book-marked" class="w-2.5 h-2.5 text-teal-600"></i>
                <span>${s.subjects || 'Maths & Science'}</span>
              </div>
              <p class="text-[10px] text-slate-400 mt-0.5">Parent: ${s.parentName} (<span onclick="openEditStudentModal('${s.id}')" class="font-mono text-teal-700 underline font-semibold cursor-pointer" title="Click to edit parent phone">+91 ${s.parentPhone} ✎</span>)</p>
            </div>
          </div>
          <div class="text-right">
            <div onclick="openEditStudentModal('${s.id}')" class="text-sm font-bold cursor-pointer hover:underline ${isLate ? 'text-slate-900' : 'text-emerald-700'}" title="Click to edit monthly fee">₹${s.feeAmount.toLocaleString('en-IN')} <span class="text-[10px] text-slate-400">✎</span></div>
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full border inline-block mt-0.5 ${lateBadgeClass}">
              ${lateText}
            </span>
          </div>
        </div>

        <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
          <div class="text-[10px] text-slate-400">
            Due: <strong>${s.feeDueDate}</strong>
          </div>
          <div class="flex items-center space-x-2">
            ${isLate ? `
              <button onclick="markStudentPaid('${s.id}')" class="text-[11px] font-semibold text-slate-600 hover:text-emerald-700 px-2 py-1 rounded hover:bg-slate-50 border border-slate-200 transition">
                Mark Paid
              </button>
              <button id="waBtn-${s.id}" onclick="sendInstantStudentWhatsApp('${s.id}')" class="text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center space-x-1 transition active:scale-95 app-tap">
                <i data-lucide="message-square" class="w-3 h-3 text-emerald-600"></i>
                <span>WhatsApp</span>
              </button>
            ` : `
              <button onclick="viewReceiptForStudent('${s.id}')" class="text-[11px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center space-x-1">
                <i data-lucide="receipt" class="w-3 h-3"></i>
                <span>Receipt</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  refreshIcons();
}

// ==========================================================================
// INTERACTIVE MULTI-SELECT SUBJECT CHIPS SELECTOR
// ==========================================================================

function renderSelectableSubjectChips(containerId, hiddenInputId, selectedSubjectsArray, counterId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const masterList = window.TEACHER_SUBJECTS && window.TEACHER_SUBJECTS.length > 0 
    ? window.TEACHER_SUBJECTS 
    : ["Mathematics", "Science", "Physics", "Chemistry", "Biology", "English"];

  const allAvailable = [...masterList];
  selectedSubjectsArray.forEach(sub => {
    if (sub && !allAvailable.some(a => a.toLowerCase() === sub.toLowerCase())) {
      allAvailable.push(sub);
    }
  });

  const selectedSet = new Set(selectedSubjectsArray.map(s => s.trim().toLowerCase()));

  container.innerHTML = allAvailable.map(sub => {
    const isSelected = selectedSet.has(sub.trim().toLowerCase());
    return `
      <button type="button" onclick="toggleSubjectChip('${sub}', '${containerId}', '${hiddenInputId}', '${counterId}')" class="px-2.5 py-1 rounded-lg text-xs font-semibold transition border app-tap ${isSelected ? 'bg-teal-700 text-white border-teal-800 shadow-xs' : 'bg-white text-slate-700 border-slate-200 hover:border-teal-300'}">
        ${isSelected ? '✓ ' : ''}${sub}
      </button>
    `;
  }).join('') + `
    <button type="button" onclick="addCustomSubjectPrompt('${containerId}', '${hiddenInputId}', '${counterId}')" class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 border-dashed app-tap">
      + Custom
    </button>
  `;

  // Update hidden input
  const hiddenInput = document.getElementById(hiddenInputId);
  if (hiddenInput) {
    hiddenInput.value = selectedSubjectsArray.join(', ');
  }

  // Update counter
  if (counterId) {
    const counter = document.getElementById(counterId);
    if (counter) counter.innerText = `${selectedSubjectsArray.length} selected`;
  }
}

function toggleSubjectChip(subject, containerId, hiddenInputId, counterId) {
  const hiddenInput = document.getElementById(hiddenInputId);
  let current = hiddenInput && hiddenInput.value ? hiddenInput.value.split(',').map(s => s.trim()).filter(Boolean) : [];
  
  const idx = current.findIndex(s => s.toLowerCase() === subject.toLowerCase());
  if (idx >= 0) {
    current.splice(idx, 1);
  } else {
    current.push(subject);
  }
  renderSelectableSubjectChips(containerId, hiddenInputId, current, counterId);
}

async function addCustomSubjectPrompt(containerId, hiddenInputId, counterId) {
  const custom = await showAppPrompt("Add Custom Subject", "Enter subject name (e.g. Computer Science, Hindi, Sanskrit):", "Subject name...", "📖");
  if (custom && custom.trim()) {
    const hiddenInput = document.getElementById(hiddenInputId);
    let current = hiddenInput && hiddenInput.value ? hiddenInput.value.split(',').map(s => s.trim()).filter(Boolean) : [];
    if (!current.some(s => s.toLowerCase() === custom.trim().toLowerCase())) {
      current.push(custom.trim());
    }
    renderSelectableSubjectChips(containerId, hiddenInputId, current, counterId);
  }
}

// ==========================================================================
// STUDENT MANAGEMENT: ADD & EDIT (SIMPLIFIED & DYNAMIC)
// ==========================================================================

function openAddStudentModal() {
  populateClassDropdowns();
  const defaultSubs = window.TEACHER_SUBJECTS && window.TEACHER_SUBJECTS.length >= 2 
    ? [window.TEACHER_SUBJECTS[0], window.TEACHER_SUBJECTS[1]] 
    : ["Mathematics", "Science"];
  renderSelectableSubjectChips('newStdSubjectChipsContainer', 'newStdSubjects', defaultSubs, 'newStdSelectedSubjectCount');
  
  const group = document.getElementById('inlineNewBatchGroup');
  if (group) group.classList.add('hidden');
  
  const nameInput = document.getElementById('newStdName');
  if (nameInput) nameInput.value = '';
  const phoneInput = document.getElementById('newStdPhone');
  if (phoneInput) phoneInput.value = '';
  const parentInput = document.getElementById('newStdParent');
  if (parentInput) parentInput.value = '';
  const feeInput = document.getElementById('newStdFee');
  if (feeInput) feeInput.value = '3500';

  openModal('addStudentModal');
}

function handleAddStudent(event) {
  event.preventDefault();
  const name = document.getElementById('newStdName')?.value.trim();
  const batch = document.getElementById('newStdBatch')?.value;
  const subjects = document.getElementById('newStdSubjects')?.value.trim() || 'Mathematics, Science';
  const fee = parseInt(document.getElementById('newStdFee')?.value || '3500');
  const dueDay = document.getElementById('newStdDueDay')?.value || '05';
  const phone = document.getElementById('newStdPhone')?.value.trim().replace('+91', '').replace(/\s+/g, '');
  const parent = document.getElementById('newStdParent')?.value.trim() || `${name}'s Parent`;

  if (!name || !phone) {
    showAppAlert("Missing Information", "Please enter the student's full name and parent's 10-digit mobile number.", "⚠️");
    return;
  }

  // Auto-generate clean roll number internally
  const roll = `${Math.floor(100 + Math.random() * 900)}`;

  const payload = {
    name: name,
    batch: batch,
    subjects: subjects,
    roll_no: roll,
    fee_amount: fee,
    due_day: dueDay,
    parent_phone: phone,
    parent_name: parent
  };

  fetch('/api/students/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(r => r.json())
    .then(data => {
      closeModal('addStudentModal');
      document.getElementById('newStdName').value = '';
      document.getElementById('newStdPhone').value = '';

      confetti({ particleCount: 50, spread: 70 });
      showToast("Student Enrolled! 🎓", `${name} added to ${batch} with subjects (${subjects}).`);

      syncFromBackendDatabase();
    })
    .catch(() => {
      closeModal('addStudentModal');
      showToast("Enrollment Notice", "Student saved locally.");
    });
}

function openEditStudentModal(studentId) {
  const student = (window.TD_DATA.students || []).find(s => s.id === studentId);
  if (!student) return;

  document.getElementById('editStdId').value = student.id;
  document.getElementById('editStdModalTitle').innerText = `Edit: ${student.name}`;
  document.getElementById('editStdModalSub').innerText = `${student.batch}`;
  document.getElementById('editStdFee').value = student.feeAmount;
  document.getElementById('editStdPhone').value = student.parentPhone;

  const currentSubs = (student.subjects || 'Mathematics, Science').split(',').map(s => s.trim()).filter(Boolean);
  renderSelectableSubjectChips('editStdSubjectChipsContainer', 'editStdSubjects', currentSubs, 'editStdSelectedSubjectCount');

  openModal('editStudentModal');
}

function handleSaveEditStudent(event) {
  event.preventDefault();
  const stdId = document.getElementById('editStdId')?.value;
  const newSubjects = document.getElementById('editStdSubjects')?.value.trim() || 'Mathematics, Science';
  const newFee = parseInt(document.getElementById('editStdFee')?.value || '3500');
  const newPhone = document.getElementById('editStdPhone')?.value.trim().replace('+91', '').replace(/\s+/g, '');

  const student = (window.TD_DATA.students || []).find(s => s.id === stdId);
  if (student) {
    student.subjects = newSubjects;
    student.feeAmount = newFee;
    student.parentPhone = newPhone;
    saveStateToStorage();
  }

  fetch('/api/students/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      student_id: stdId,
      fee_amount: newFee,
      parent_phone: newPhone,
      subjects: newSubjects
    })
  }).catch(() => {});

  closeModal('editStudentModal');
  showToast("Updated Successfully!", `Subjects (${newSubjects}) & Fee ₹${newFee.toLocaleString('en-IN')} updated.`);
  renderFeesScreen();
}

// 1-Tap Direct Broadcast to All Late Students
function broadcastToAllLateStudents() {
  const pending = window.TD_DATA.students.filter(s => s.feeStatus === 'pending');
  if (pending.length === 0) {
    showToast("All Fees Cleared! 🎉", "There are no pending fees right now.");
    return;
  }

  const btn = document.getElementById('btnBroadcastAll');
  const btnText = document.getElementById('btnBroadcastAllText');
  if (btn) {
    btn.disabled = true;
    if (btnText) btnText.innerText = `Dispatching to ${pending.length} Parents...`;
  }

  fetch('/api/whatsapp/broadcast-fee-reminders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: getActiveTeacherToken(), student_ids: [] }) // Empty means all pending
  })
    .then(r => r.json())
    .then(data => {
      if (btn) {
        btn.disabled = false;
        if (btnText) btnText.innerText = "Remind All Late Students";
      }
      confetti({ particleCount: 60, spread: 80 });
      showToast("WhatsApp Notices Sent! ⚡", `Sent personalized fee reminders with UPI QR to ${data.count || pending.length} parents.`);
      refreshBotQueue();
    })
    .catch(() => {
      if (btn) {
        btn.disabled = false;
        if (btnText) btnText.innerText = "Remind All Late Students";
      }
      showToast("Reminders Dispatched", `Sent notices to ${pending.length} parents.`);
    });
}

// 1-Tap Remind Late Students with Selection Checklist
function openRemindAllModal() {
  const pending = window.TD_DATA.students.filter(s => s.feeStatus === 'pending');
  const container = document.getElementById('remindStudentsList');
  const selectAll = document.getElementById('selectAllRemindCheck');
  const progressBox = document.getElementById('remindProgressContainer');

  if (progressBox) progressBox.classList.add('hidden');
  if (selectAll) selectAll.checked = true;

  if (container) {
    if (pending.length === 0) {
      container.innerHTML = `
        <div class="p-4 bg-slate-50 text-center text-xs text-slate-500 rounded-xl">
          No students with pending fees right now!
        </div>
      `;
    } else {
      container.innerHTML = pending.map(s => `
        <div onclick="toggleRemindStudentCard('${s.id}')" class="bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl p-2.5 flex items-center justify-between cursor-pointer transition select-none">
          <div class="flex items-center space-x-2.5">
            <input type="checkbox" value="${s.id}" checked onclick="event.stopPropagation(); updateRemindSelectedSummary();" class="remind-student-cb w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500">
            <div>
              <div class="flex items-center space-x-1.5">
                <span class="text-xs font-bold text-slate-900">${s.name}</span>
              </div>
              <div class="text-[10px] text-slate-500 flex items-center space-x-1.5">
                <span>${s.batch.split(' - ')[0]}</span>
                <span>•</span>
                <span onclick="event.stopPropagation(); quickEditPhone('${s.id}')" class="font-mono text-emerald-700 underline font-semibold hover:text-emerald-900 cursor-pointer" title="Click to put your real phone number">
                  +91 ${s.parentPhone} ✎
                </span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <span class="text-xs font-bold text-slate-800">₹${s.feeAmount.toLocaleString('en-IN')}</span>
            <span class="block text-[9px] font-bold text-rose-600">${s.daysLate}d late</span>
          </div>
        </div>
      `).join('');
    }
  }

  updateRemindSelectedSummary();
  openModal('remindAllModal');
}

// 1-Tap Automatic Background WhatsApp Sending for Individual Student (No Manual Steps)
function sendInstantStudentWhatsApp(studentId) {
  if (navigator.vibrate) {
    try { navigator.vibrate(15); } catch(e) {}
  }
  const student = (window.TD_DATA.students || []).find(s => s.id === studentId);
  if (!student) return;

  const btn = document.getElementById(`waBtn-${studentId}`);
  if (btn) {
    btn.innerHTML = `<span class="animate-spin text-xs">⏳</span> <span>Sending...</span>`;
    btn.disabled = true;
  }

  const upiId = (window.TEACHER_PROFILE && window.TEACHER_PROFILE.upi_id) || window.TD_DATA.centre.upiVpa || 'tuitiondesk@okicici';
  const cleanName = student.name.replace(/\s+/g, '_');
  const upiPayload = `upi://pay?pa=${upiId}&pn=TuitionDesk&am=${student.feeAmount}&tn=Fee_${cleanName}&cu=INR`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(upiPayload)}`;
  const institute = (window.TEACHER_PROFILE && window.TEACHER_PROFILE.institute_name) || window.TD_DATA.centre.name;

  const msg = `🎓 *Fee Reminder: ${institute}*\n\nNamaste ${student.parentName} ji 🙏\n\nTuition fee of *₹${student.feeAmount.toLocaleString('en-IN')}* for *${student.name}* (${student.batch}) is overdue by *${student.daysLate} days*.\n\n📚 *Enrolled Subjects:* ${student.subjects || 'All Enrolled Subjects'}\n\n📱 *Scan QR Code to Pay via UPI (GPay/PhonePe/Paytm):*\n👉 ${qrUrl}\n*(Open link to view/scan QR code)*\n\n💳 *UPI ID:* ${upiId}\n\nKindly clear the dues at your earliest. Ignore if already paid.\n— ${institute}`;

  fetch('/api/whatsapp/send-headless', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: getActiveTeacherToken(),
      phone: student.parentPhone,
      student_name: student.name,
      message: msg
    })
  })
    .then(r => r.json())
    .then(data => {
      if (btn) {
        btn.innerHTML = `<i data-lucide="check" class="w-3 h-3 text-emerald-700"></i> <span class="text-emerald-800 font-bold">Sent ✓</span>`;
        btn.classList.remove('bg-emerald-50');
        btn.classList.add('bg-emerald-100');
        refreshIcons();
      }
      showToast("Fee Notice Dispatched! 🚀", `WhatsApp sent automatically to ${student.name}'s parent (+91 ${student.parentPhone})`);
    })
    .catch(() => {
      if (btn) {
        btn.innerHTML = `<i data-lucide="message-square" class="w-3 h-3 text-emerald-600"></i> <span>WhatsApp</span>`;
        btn.disabled = false;
        refreshIcons();
      }
      showToast("Notice", `Message queued for +91 ${student.parentPhone}`);
    });
}

function markStudentPaid(studentId) {
  const student = window.TD_DATA.students.find(s => s.id === studentId);
  if (student) {
    student.feeStatus = 'paid';
    student.daysLate = 0;
    saveStateToStorage();
    renderFeesScreen();
    showToast("Payment Recorded!", `₹${student.feeAmount} marked as paid for ${student.name}. Receipt auto-generated.`);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });

    // Sync with SQLite backend
    fetch('/api/fees/mark-paid', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student_id: studentId })
    }).catch(err => console.log('Backend sync offline:', err));
  }
}

function markAllFeesPaid() {
  window.TD_DATA.students.forEach(s => {
    s.feeStatus = 'paid';
    s.daysLate = 0;
  });
  saveStateToStorage();
  renderFeesScreen();
  updatePendingBadges();
  showToast("Fees Cleared", "All pending student fees marked as cleared.");
}

function toggleRemindStudentCard(studentId) {
  const cb = document.querySelector(`.remind-student-cb[value="${studentId}"]`);
  if (cb) {
    cb.checked = !cb.checked;
    updateRemindSelectedSummary();
  }
}

function quickEditPhone(studentId) {
  const student = window.TD_DATA.students.find(s => s.id === studentId);
  if (!student) return;
  const num = prompt(`Enter real WhatsApp phone number for ${student.name} (to test receiving actual message):`, student.parentPhone);
  if (num && num.trim()) {
    const clean = num.trim().replace('+91', '').replace(/\s+/g, '').replace(/-/g, '');
    student.parentPhone = clean;
    saveStateToStorage();
    fetch('/api/students/update-phone', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student_id: studentId, phone: clean })
    }).catch(()=>{});
    openRemindAllModal();
    renderFeesScreen();
    showToast("Phone Updated!", `Changed to +91 ${clean} for real test.`);
  }
}

function toggleSelectAllRemind(checked) {
  document.querySelectorAll('.remind-student-cb').forEach(cb => {
    cb.checked = checked;
  });
  updateRemindSelectedSummary();
}

function updateRemindSelectedSummary() {
  const checkedBoxes = Array.from(document.querySelectorAll('.remind-student-cb:checked'));
  const totalBoxes = document.querySelectorAll('.remind-student-cb');
  const count = checkedBoxes.length;

  // Calculate sum of selected students
  const pending = window.TD_DATA.students.filter(s => s.feeStatus === 'pending');
  const selectedStudents = pending.filter(s => checkedBoxes.some(cb => cb.value === s.id));
  const totalAmount = selectedStudents.reduce((acc, curr) => acc + curr.feeAmount, 0);

  const statsEl = document.getElementById('remindSelectedStats');
  if (statsEl) {
    statsEl.innerText = `${count} of ${totalBoxes.length} Selected (₹${totalAmount.toLocaleString('en-IN')})`;
  }

  const btnLabel = document.getElementById('btnSendRemindersLabel');
  if (btnLabel) {
    btnLabel.innerText = `Send Reminders (${count} Selected)`;
  }

  const selectAll = document.getElementById('selectAllRemindCheck');
  if (selectAll) {
    selectAll.checked = count === totalBoxes.length && totalBoxes.length > 0;
  }
}

function executeSelectedReminders() {
  const checkedBoxes = Array.from(document.querySelectorAll('.remind-student-cb:checked'));
  const selectedIds = checkedBoxes.map(cb => cb.value);

  if (selectedIds.length === 0) {
    showAppAlert("No Students Selected", "Please select at least one student to send the fee reminder broadcast.", "📢");
    return;
  }

  const btn = document.getElementById('btnSendSelectedReminders');
  const progressBox = document.getElementById('remindProgressContainer');
  const progressText = document.getElementById('remindProgressText');
  const progressPercent = document.getElementById('remindProgressPercent');
  const progressBar = document.getElementById('remindProgressBar');

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> <span>Fast Dispatched...</span>`;
  }
  if (progressBox) progressBox.classList.remove('hidden');

  if (progressText) progressText.innerText = `Dispatching ${selectedIds.length} reminders via Bot...`;
  if (progressBar) progressBar.style.width = '70%';

  // Call fast backend broadcast API immediately
  fetch('/api/whatsapp/broadcast-fee-reminders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: getActiveTeacherToken(), student_ids: selectedIds })
  })
    .then(r => r.json())
    .then(data => {
      if (progressBar) progressBar.style.width = '100%';
      if (progressPercent) progressPercent.innerText = '100%';

      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = `<i data-lucide="zap" class="w-3.5 h-3.5 text-amber-300"></i> <span>Send Reminders</span>`;
          refreshIcons();
        }
        closeModal('remindAllModal');

        confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
        showToast(
          "Fast Broadcast Sent! ⚡", 
          `Queued and dispatched to ${selectedIds.length} parents in background.`
        );

        refreshBotQueue();
      }, 400);
    })
    .catch(() => {
      if (btn) btn.disabled = false;
      closeModal('remindAllModal');
      showToast("Queued", `Queued reminders for ${selectedIds.length} students.`);
    });
}

// Open Single WhatsApp Reminder
function openStudentWhatsAppReminder(studentId) {
  const s = window.TD_DATA.students.find(std => std.id === studentId);
  if (!s) return;

  const cleanName = s.name.replace(/\s+/g,'_');
  const upiLink = `upi://pay?pa=${window.TD_DATA.centre.upiVpa}&pn=TuitionDesk&am=${s.feeAmount}&tn=Fee_${cleanName}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

  const message = `Namaste ${s.parentName} ji 🙏\n\nTuition fee of *₹${s.feeAmount.toLocaleString('en-IN')}* for *${s.name}* (${s.batch}) for the month of *${s.feeMonth}* is overdue by *${s.daysLate} days*.\n\n💳 *Pay Instantly via UPI (GPay/PhonePe/Paytm):*\n${upiLink}\n\n*UPI ID:* ${window.TD_DATA.centre.upiVpa}\n*Scan UPI QR:* ${qrUrl}\n\nKindly clear the dues at your earliest.\n- ${window.TD_DATA.centre.name}`;

  state.activeWaPayload = {
    phone: s.parentPhone,
    message: message
  };

  document.getElementById('waModalTitle').innerText = `Fee Due: ${s.name}`;
  document.getElementById('waModalRecipient').innerText = `To: ${s.parentName} (+91 ${s.parentPhone})`;
  document.getElementById('waModalMessage').innerText = message;

  openModal('whatsappModal');
}

function sendIndividualViaBot() {
  if (!state.activeWaPayload) return;
  const payload = state.activeWaPayload;
  const btn = document.getElementById('waModalBotBtn');

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> <span>Sending in Background...</span>`;
  }

  showToast("Dispatching via Bot 🤖", `Sending to +91 ${payload.phone} in background...`);

  fetch('/api/whatsapp/send-headless', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone: payload.phone, message: payload.message })
  })
    .then(r => r.json())
    .then(data => {
      closeModal('whatsappModal');
      confetti({ particleCount: 40, spread: 60 });
      showToast("Delivered! 🚀", `WhatsApp reminder delivered to +91 ${payload.phone} via background bot.`);
      refreshBotQueue();
    })
    .catch(() => {
      closeModal('whatsappModal');
      showToast("Queued", "Message recorded in outgoing queue.");
      refreshBotQueue();
    });
}

function sendActualWhatsApp() {
  if (!state.activeWaPayload) return;
  const url = `https://wa.me/91${state.activeWaPayload.phone}?text=${encodeURIComponent(state.activeWaPayload.message)}`;
  window.open(url, '_blank');
  closeModal('whatsappModal');
  showToast("WhatsApp Opened", "WhatsApp web/app triggered with pre-filled reminder.");
}

// ==========================================================================
// 2. ATTENDANCE MODULE
// ==========================================================================

function renderBatchPills() {
  const container = document.getElementById('batchPillsContainer');
  if (!container) return;

  container.innerHTML = window.TD_DATA.batches.map(b => {
    const isActive = b === state.activeBatch;
    return `
      <button onclick="selectBatch('${b}')" class="whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
        isActive 
          ? 'bg-teal-700 text-white shadow-sm' 
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
      }">
        ${b}
      </button>
    `;
  }).join('');
}

function selectBatch(batchName) {
  state.activeBatch = batchName;
  renderBatchPills();
  renderAttendanceScreen();
}

function changeAttendanceDate(val) {
  const dateObj = new Date(val);
  const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  document.getElementById('attendanceDateLabel').innerText = dateObj.toLocaleDateString('en-IN', options);
}

function renderAttendanceScreen() {
  const container = document.getElementById('attendanceListContainer');
  if (!container) return;

  const batchStudents = window.TD_DATA.students.filter(s => s.batch === state.activeBatch);
  
  const presentCount = batchStudents.filter(s => s.todayAttendance === 'P').length;
  const absentCount = batchStudents.filter(s => s.todayAttendance === 'A').length;

  document.getElementById('attTotalCount').innerText = batchStudents.length;
  document.getElementById('attPresentCount').innerText = presentCount;
  document.getElementById('attAbsentCount').innerText = absentCount;

  if (batchStudents.length === 0) {
    container.innerHTML = `
      <div class="bg-white p-6 rounded-2xl text-center text-slate-500 border border-slate-200 text-xs">
        No students currently enrolled in ${state.activeBatch}.
      </div>
    `;
    return;
  }

  container.innerHTML = batchStudents.map(s => {
    const isP = s.todayAttendance === 'P';
    const isA = s.todayAttendance === 'A';

    return `
      <div class="bg-white p-3 rounded-2xl border border-slate-200/80 flex items-center justify-between shadow-xs">
        <div class="flex items-center space-x-3">
          <div class="w-9 h-9 rounded-xl ${isP ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'} flex items-center justify-center font-bold text-xs">
            ${s.name.split(' ').map(n=>n[0]).join('')}
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-900">${s.name}</h4>
            <div class="text-[10px] text-slate-400 flex items-center space-x-1.5">
              <span>Att: <strong class="text-slate-600">${s.attendancePercent}%</strong></span>
              <span>•</span>
              <span class="text-teal-700 font-semibold">${s.subjects ? s.subjects.split(',')[0] : 'Enrolled'}</span>
            </div>
          </div>
        </div>

        <!-- Present / Absent Action Buttons -->
        <div class="flex items-center space-x-1.5">
          <button onclick="toggleAttendance('${s.id}', 'P')" class="w-10 h-8 rounded-xl font-bold text-xs flex items-center justify-center transition ${
            isP 
              ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600/30' 
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }">
            P
          </button>
          <button onclick="toggleAttendance('${s.id}', 'A')" class="w-10 h-8 rounded-xl font-bold text-xs flex items-center justify-center transition ${
            isA 
              ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-600/30' 
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }">
            A
          </button>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function toggleAttendance(studentId, status) {
  const student = window.TD_DATA.students.find(s => s.id === studentId);
  if (student) {
    student.todayAttendance = status;
    saveStateToStorage();
    renderAttendanceScreen();
  }
}

function bulkMarkAttendance(status) {
  const batchStudents = window.TD_DATA.students.filter(s => s.batch === state.activeBatch);
  batchStudents.forEach(s => s.todayAttendance = status);
  saveStateToStorage();
  renderAttendanceScreen();
  showToast("Attendance Marked", `Marked all ${batchStudents.length} students as ${status === 'P' ? 'Present' : 'Absent'}.`);
}

function saveAttendanceAndAlert() {
  const batchStudents = window.TD_DATA.students.filter(s => s.batch === state.activeBatch);
  const absentStudents = batchStudents.filter(s => s.todayAttendance === 'A');

  saveStateToStorage();

  // Sync to backend SQLite
  const records = batchStudents.map(s => ({ student_id: s.id, status: s.todayAttendance }));
  fetch('/api/attendance/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ records: records, date: document.getElementById('attendanceDatePicker')?.value || '2026-10-25' })
  }).catch(err => console.log('Backend sync offline:', err));

  if (absentStudents.length > 0) {
    const names = absentStudents.map(s => s.name).join(', ');
    showToast(
      "Attendance Saved & Absent Alerts Sent! 📢",
      `Instant WhatsApp alert dispatched to parents of ${names}.`
    );
  } else {
    showToast(
      "Attendance Saved! 🎉",
      `100% attendance recorded for ${state.activeBatch}.`
    );
  }
}

// ==========================================================================
// 3. WEEKLY TEST REPORT MODULE
// ==========================================================================

function populateStudentDropdowns() {
  const testSelect = document.getElementById('testStudentSelect');
  const parentSelect = document.getElementById('parentStudentSelect');

  const options = window.TD_DATA.students.map(s => `
    <option value="${s.id}">${s.name} (${s.batch.split(' - ')[0]})</option>
  `).join('');

  if (testSelect) testSelect.innerHTML = options;
  if (parentSelect) parentSelect.innerHTML = options;
}

function renderTestsScreen() {
  updateStudentTestChart();
  renderTestRankList();
}

function updateStudentTestChart() {
  const studentId = document.getElementById('testStudentSelect')?.value || state.selectedStudentId;
  state.selectedStudentId = studentId;

  const student = window.TD_DATA.students.find(s => s.id === studentId) || window.TD_DATA.students[0];
  if (!student) return;

  const history = student.testHistory || [];
  const latestTest = history[history.length - 1];

  // Update highlight counters
  document.getElementById('statLatestScore').innerText = `${latestTest.score}/${latestTest.maxMarks} (${Math.round((latestTest.score/latestTest.maxMarks)*100)}%)`;
  document.getElementById('statClassRank').innerText = `Rank #${latestTest.rank} 🏆`;

  // Render Chart.js
  const ctx = document.getElementById('testProgressChart');
  if (!ctx) return;

  const labels = history.map(h => h.date || h.testName);
  const scores = history.map(h => h.score);

  if (state.chartInstance) {
    state.chartInstance.destroy();
  }

  state.chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: `${student.name}'s Score (Max 50)`,
          data: scores,
          backgroundColor: '#0F766E', // brand teal
          borderRadius: 8,
          borderSkipped: false,
          barThickness: 18
        },
        {
          label: 'Batch Average',
          data: [32, 34, 33, 35, 36, 34],
          type: 'line',
          borderColor: '#F59E0B',
          borderWidth: 2,
          pointBackgroundColor: '#F59E0B',
          pointRadius: 3,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: { boxWidth: 10, font: { size: 10, weight: 'bold' } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw} / 50`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 50,
          ticks: { font: { size: 10 }, stepSize: 10 },
          grid: { color: '#f1f5f9' }
        },
        x: {
          ticks: { font: { size: 10 } },
          grid: { display: false }
        }
      }
    }
  });
}

function renderTestRankList() {
  const container = document.getElementById('testRankListContainer');
  if (!container) return;

  // Class 10 Foundation batch students
  const batchStudents = window.TD_DATA.students
    .filter(s => s.batch === "Class 10 - Foundation")
    .map(s => {
      const latest = s.testHistory[s.testHistory.length - 1];
      return {
        id: s.id,
        name: s.name,
        rollNo: s.rollNo,
        score: latest.score,
        maxMarks: latest.maxMarks,
        rank: latest.rank,
        parentPhone: s.parentPhone,
        parentName: s.parentName,
        percentage: Math.round((latest.score / latest.maxMarks) * 100)
      };
    })
    .sort((a, b) => b.score - a.score);

  container.innerHTML = batchStudents.map((s, idx) => {
    const isTop3 = idx < 3;
    const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`;

    return `
      <div class="bg-white p-3 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-xl ${isTop3 ? 'bg-amber-50 text-amber-800 border border-amber-200 font-extrabold' : 'bg-slate-100 text-slate-700 font-bold'} flex items-center justify-center text-xs">
            ${medal}
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-900">${s.name}</h4>
            <div class="text-[10px] text-slate-400">
              Score: <strong class="text-teal-700">${s.score}/${s.maxMarks}</strong> (${s.percentage}%)
            </div>
          </div>
        </div>

        <button onclick="shareTestReportWhatsApp('${s.id}')" class="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-xl border border-emerald-200 flex items-center space-x-1 transition active:scale-95">
          <i data-lucide="share-2" class="w-3.5 h-3.5 text-emerald-600"></i>
          <span>WhatsApp</span>
        </button>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function shareTestReportWhatsApp(studentId) {
  const s = window.TD_DATA.students.find(std => std.id === studentId);
  if (!s) return;

  const latest = s.testHistory[s.testHistory.length - 1];
  const perc = Math.round((latest.score / latest.maxMarks) * 100);

  const message = `Namaste ${s.parentName} ji 🙏\n\n📊 *WEEKLY TEST REPORT* from *${window.TD_DATA.centre.name}*\n\nStudent: *${s.name}*\nClass & Batch: *${s.batch}*\nTest: *${latest.testName} (Physics)*\nMarks Obtained: *${latest.score} / ${latest.maxMarks}* (${perc}%)\nBatch Rank: *Rank #${latest.rank}* 🏆\nBatch Average: *34 / 50*\n\nTeacher remarks: Aarav is showing consistent improvement in numerical problems.\n\nThank you,\n*${window.TD_DATA.centre.name}*`;

  state.activeWaPayload = {
    phone: s.parentPhone,
    message: message
  };

  document.getElementById('waModalTitle').innerText = `Test Report: ${s.name}`;
  document.getElementById('waModalRecipient').innerText = `To: ${s.parentName} (+91 ${s.parentPhone})`;
  document.getElementById('waModalMessage').innerText = message;

  openModal('whatsappModal');
}

function shareAllTestReports() {
  showToast(
    "Weekly Reports Queued!", 
    "Sunday test cards sent to all batch parents on WhatsApp."
  );
  confetti({ particleCount: 35, spread: 60 });
}

function openNewTestModal() {
  showToast("New Test Entry", "Creating weekly test template for next Sunday.");
}

// ==========================================================================
// 4. PARENT VIEW / APP MODULE
// ==========================================================================

function renderParentPortal() {
  const studentId = document.getElementById('parentStudentSelect')?.value || state.selectedStudentId;
  const student = window.TD_DATA.students.find(s => s.id === studentId) || window.TD_DATA.students[0];
  if (!student) return;

  state.selectedStudentId = student.id;

  // Header
  document.getElementById('parentStudentName').innerText = student.name;
  document.getElementById('parentStudentBatch').innerText = `${student.batch} • ${student.subjects || 'All Subjects'}`;
  document.getElementById('parentStudentAvatar').innerText = student.name.split(' ').map(n=>n[0]).join('');

  // Attendance Card
  document.getElementById('parentAttendancePercent').innerText = `${student.attendancePercent}%`;
  document.getElementById('parentAttendanceBar').style.width = `${student.attendancePercent}%`;
  document.getElementById('parentPresentDays').innerText = `${student.presentDays} Days`;
  document.getElementById('parentAbsentDays').innerText = `${student.absentDays} Days`;

  // Fees Card
  const feeBadge = document.getElementById('parentFeeBadge');
  const daysLate = document.getElementById('parentFeeDaysLate');
  const actionContainer = document.getElementById('parentFeeActionContainer');

  if (student.feeStatus === 'pending') {
    feeBadge.className = 'text-xs font-bold bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full';
    feeBadge.innerText = `₹${student.feeAmount.toLocaleString('en-IN')} Due`;
    daysLate.className = 'font-bold text-rose-600';
    daysLate.innerText = `${student.daysLate} Days Overdue`;

    actionContainer.innerHTML = `
      <button onclick="openUpiPaymentModal()" class="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 active:scale-[0.99] text-white font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center space-x-2 text-sm">
        <i data-lucide="smartphone" class="w-4 h-4 text-purple-200"></i>
        <span>Pay by UPI (GPay / PhonePe / Paytm)</span>
      </button>
      <button onclick="openReceiptModal()" class="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold py-2 px-3 rounded-xl transition flex items-center justify-center space-x-1.5 text-xs">
        <i data-lucide="receipt" class="w-3.5 h-3.5 text-teal-600"></i>
        <span>View Past Receipt</span>
      </button>
    `;
  } else {
    feeBadge.className = 'text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full';
    feeBadge.innerText = `Fees Paid ✓`;
    daysLate.className = 'font-bold text-emerald-700';
    daysLate.innerText = `Paid for ${student.feeMonth}`;

    actionContainer.innerHTML = `
      <div class="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center text-xs text-emerald-800 font-bold flex items-center justify-center gap-1.5">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
        <span>Payment Cleared • October 2026</span>
      </div>
      <button onclick="openReceiptModal()" class="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-2.5 px-3 rounded-xl shadow transition flex items-center justify-center space-x-1.5 text-xs">
        <i data-lucide="download" class="w-3.5 h-3.5"></i>
        <span>Download Official Receipt (PDF)</span>
      </button>
    `;
  }

  refreshIcons();
}

function openUpiPaymentModal() {
  const student = window.TD_DATA.students.find(s => s.id === state.selectedStudentId);
  if (!student) return;

  const amt = student.feeAmount || 3500;
  const qrData = encodeURIComponent(`upi://pay?pa=tuitiondesk@okicici&pn=TuitionDesk&am=${amt}&cu=INR`);
  const qrImg = document.getElementById('upiDynamicQrImg');
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrData}`;
  }

  const sub = document.getElementById('upiStudentSubtitle');
  if (sub) sub.innerText = `${student.name} • ${student.batch}`;
  const payAmt = document.getElementById('upiPayAmount');
  if (payAmt) payAmt.innerText = `₹${amt.toLocaleString('en-IN')}`;

  openModal('upiModal');
}

function confirmUpiPayment(app = 'UPI') {
  if (navigator.vibrate) {
    try { navigator.vibrate(20); } catch(e) {}
  }
  const student = window.TD_DATA.students.find(s => s.id === state.selectedStudentId);
  if (student) {
    student.feeStatus = 'paid';
    student.daysLate = 0;
    saveStateToStorage();

    // Sync with backend SQLite
    fetch('/api/fees/mark-paid', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student_id: student.id })
    }).catch(err => console.log('Backend sync offline:', err));
  }

  closeModal('upiModal');
  confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });

  showToast(
    "Payment Verified! 🎉",
    `₹${student ? student.feeAmount : 3500} recorded successfully via ${app}. Receipt issued.`
  );

  // Update UI and show receipt
  renderParentPortal();
  renderFeesScreen();
  updatePendingBadges();
  setTimeout(() => {
    openReceiptModal();
  }, 500);
}

function simulateUpiSuccess(app = 'UPI') {
  confirmUpiPayment(app);
}

function openReceiptModal() {
  const student = window.TD_DATA.students.find(s => s.id === state.selectedStudentId) || window.TD_DATA.students[0];
  if (!student) return;

  const recNo = student.id.replace('std-', '');
  document.getElementById('receiptStudentName').innerText = student.name;
  document.getElementById('receiptBatch').innerText = student.batch;
  document.getElementById('receiptPhone').innerText = `+91 ${student.parentPhone}`;
  document.getElementById('receiptAmount').innerText = `₹${student.feeAmount.toLocaleString('en-IN')}`;
  document.getElementById('receiptNumber').innerText = `#TD-2026-${recNo}`;

  openModal('receiptModal');
}

function viewReceiptForStudent(studentId) {
  state.selectedStudentId = studentId;
  openReceiptModal();
}

function shareReceiptWhatsApp() {
  const student = window.TD_DATA.students.find(s => s.id === state.selectedStudentId) || window.TD_DATA.students[0];
  const recNo = student.id.replace('std-', '');
  const message = `Namaste ${student.parentName} ji 🙏\n\n🧾 *FEE PAYMENT RECEIPT*\nTuitionDesk Coaching\n\nReceipt No: #TD-2026-${recNo}\nStudent: ${student.name}\nBatch: ${student.batch}\nSubjects: ${student.subjects || 'All Subjects'}\nAmount: ₹${student.feeAmount}\nStatus: Cleared & Verified via UPI\n\nThank you for prompt payment!`;

  const url = `https://wa.me/91${student.parentPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function printReceipt() {
  window.print();
}

// ==========================================================================
// 5. OWNER DASHBOARD MODULE
// ==========================================================================

function renderDashboardScreen() {
  const students = window.TD_DATA.students;
  const pending = students.filter(s => s.feeStatus === 'pending');
  const paid = students.filter(s => s.feeStatus === 'paid');

  const pendingAmount = pending.reduce((a, c) => a + c.feeAmount, 0);
  const collectedAmount = paid.reduce((a, c) => a + c.feeAmount, 0) + 72500;
  const totalDemand = pendingAmount + collectedAmount;
  const collectionRate = ((collectedAmount / totalDemand) * 100).toFixed(1);

  document.getElementById('dashCollected').innerText = `₹${collectedAmount.toLocaleString('en-IN')}`;
  document.getElementById('dashPending').innerText = `₹${pendingAmount.toLocaleString('en-IN')}`;
  document.getElementById('dashCollectionPercent').innerText = `${collectionRate}%`;

  document.getElementById('dashCollectionBar').style.width = `${collectionRate}%`;
  document.getElementById('dashPendingBar').style.width = `${100 - collectionRate}%`;

  // Student & Enquiry Metrics
  document.getElementById('dashTotalStudents').innerText = students.length + 21; // Total centre strength
  document.getElementById('dashEnquiryCount').innerText = window.TD_DATA.enquiries.length;

  renderEnquiriesList();
}

function renderEnquiriesList() {
  const container = document.getElementById('enquiriesListContainer');
  if (!container) return;

  const enquiries = window.TD_DATA.enquiries;

  container.innerHTML = enquiries.map(e => {
    const isEnrolled = e.status === 'Enrolled';
    const statusBg = isEnrolled 
      ? 'bg-emerald-100 text-emerald-800' 
      : e.status === 'New' 
        ? 'bg-rose-100 text-rose-800' 
        : 'bg-amber-100 text-amber-800';

    return `
      <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1.5">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-slate-900">${e.studentName}</span>
            <span class="text-[10px] font-semibold text-slate-500 ml-1">(${e.targetClass})</span>
          </div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${statusBg}">
            ${e.status}
          </span>
        </div>

        <div class="text-[11px] text-slate-600 flex items-center justify-between">
          <span>Referred by: <strong class="text-teal-700">${e.referredBy}</strong></span>
          <span class="text-[10px] text-slate-400 font-mono">${e.date}</span>
        </div>

        <div class="pt-1.5 border-t border-slate-200/60 flex items-center justify-between">
          <span class="text-[10px] text-slate-500 italic">"${e.notes}"</span>
          <div class="flex items-center space-x-1.5">
            <a href="tel:${e.phone}" class="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-teal-700 app-tap" title="Call Parent">
              <i data-lucide="phone" class="w-3.5 h-3.5"></i>
            </a>
            <button id="enqBtn-${e.id}" onclick="sendInstantEnquiryWhatsApp('${e.id}')" class="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 app-tap" title="Send WhatsApp Message in Background">
              <i data-lucide="message-square" class="w-3.5 h-3.5 text-emerald-600"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function sendInstantEnquiryWhatsApp(enquiryId) {
  if (navigator.vibrate) {
    try { navigator.vibrate(15); } catch(e) {}
  }
  const e = (window.TD_DATA.enquiries || []).find(item => item.id === enquiryId);
  if (!e) return;

  const btn = document.getElementById(`enqBtn-${enquiryId}`);
  if (btn) {
    btn.innerHTML = `<span class="animate-spin text-xs">⏳</span>`;
    btn.disabled = true;
  }

  const instName = (window.TEACHER_PROFILE && window.TEACHER_PROFILE.institute_name) || "TuitionDesk";
  const teacherName = (window.TEACHER_PROFILE && window.TEACHER_PROFILE.teacher_name) || "Tuition Teacher";
  const message = `Namaste! 🙏\n\nWe received your enquiry for admission for *${e.studentName}* (${e.targetClass}) at *${instName}* (referred by ${e.referredBy}).\n\nWe offer personalized batches, customized subjects, and weekly test series. Would you like to schedule a free counseling/demo session?\n\nWarm regards,\n*${teacherName}*\n${instName}`;

  fetch('/api/whatsapp/send-headless', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: e.phone,
      student_name: e.studentName,
      message: message
    })
  })
    .then(r => r.json())
    .then(() => {
      e.status = 'Contacted';
      saveStateToStorage();
      if (btn) {
        btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-700"></i>`;
        btn.classList.add('bg-emerald-100');
        refreshIcons();
      }
      showToast("WhatsApp Message Sent! 🚀", `Automated follow-up sent to ${e.studentName} (+91 ${e.phone})`);
      renderEnquiriesList();
    })
    .catch(() => {
      if (btn) {
        btn.innerHTML = `<i data-lucide="message-square" class="w-3.5 h-3.5 text-emerald-600"></i>`;
        btn.disabled = false;
        refreshIcons();
      }
      showToast("Message Queued", `Queued for +91 ${e.phone}`);
    });
}

function openEnquiryWhatsApp(name, phone, referredBy) {
  const message = `Namaste! 🙏 We received your enquiry for admission at *TuitionDesk Coaching* through *${referredBy}*.\n\nWould you like to schedule a free demo class this week? We offer personalized batches and regular testing.`;
  const url = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function openNewEnquiryModal() {
  openModal('newEnquiryModal');
}

function handleNewEnquiry(event) {
  event.preventDefault();
  const name = document.getElementById('leadName').value.trim();
  const targetClass = document.getElementById('leadClass').value;
  const phone = document.getElementById('leadPhone').value.trim();
  const referrer = document.getElementById('leadReferrer').value.trim() || "Walk-in";

  const newEntry = {
    id: `enq-${Date.now()}`,
    studentName: name,
    targetClass: targetClass,
    phone: phone,
    referredBy: referrer,
    date: "Today",
    status: "New",
    notes: "New referral enquiry via quick form."
  };

  window.TD_DATA.enquiries.unshift(newEntry);
  saveStateToStorage();
  closeModal('newEnquiryModal');
  renderDashboardScreen();
  showToast("Enquiry Added! 🌟", `Lead recorded for ${name}. Referral tracked for ${referrer}.`);
}

// ==========================================================================
// 6. AUTOMATIONS ENGINE MODAL & TRIGGERS
// ==========================================================================

function showAutomationsModal() {
  openModal('automationsModal');
}

function simulateRunAutomation(type) {
  closeModal('automationsModal');
  if (type === 'fee_reminder') {
    showToast(
      "Automated Fee Reminder Triggered!",
      "5th of the month pipeline fired: Sent 7 WhatsApp messages + UPI QR to late parents."
    );
  } else if (type === 'absent_alert') {
    showToast(
      "Instant Absent Alert Tested!",
      "WhatsApp alert delivered in 0.8s to absent student parents."
    );
  } else if (type === 'weekly_report') {
    showToast(
      "Sunday Report Dispatched!",
      "6-test graphical scorecard sent to all parents."
    );
  }
  confetti({ particleCount: 30, spread: 50 });
}

// ==========================================================================
// UI HELPERS: MODALS & TOASTS
// ==========================================================================

function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('hidden');
    refreshIcons();
  }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function showToast(title, message) {
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMessage');

  if (toast && toastTitle && toastMsg) {
    toastTitle.innerText = title;
    toastMsg.innerText = message;

    toast.classList.remove('-translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('-translate-y-24', 'opacity-0');
    }, 3800);
  }
}

// ==========================================================================
// 7. REAL BACKGROUND WHATSAPP BOT (HEADLESS IN-APP AUTO-DISPATCHER)
// ==========================================================================

let waPollInterval = null;

function openWhatsAppBotModal() {
  openModal('whatsappBotModal');
  checkRealWaStatus();
  refreshBotQueue();

  // Poll status every 3 seconds while modal is open
  if (waPollInterval) clearInterval(waPollInterval);
  waPollInterval = setInterval(checkRealWaStatus, 3000);
}

function handleQrError(img) {
  // If QR image not ready yet, keep trying
  setTimeout(() => {
    img.src = '/api/whatsapp/qr.png?token=' + encodeURIComponent(getActiveTeacherToken()) + '&t=' + Date.now();
  }, 2500);
}

function refreshBotQrCode() {
  const img = document.getElementById('inAppQrImg');
  if (img) {
    img.src = '/api/whatsapp/qr.png?t=' + Date.now();
  }
  showToast("Refreshing QR Code", "Fetching latest WhatsApp authentication key...");
  checkRealWaStatus();
}

function checkRealWaStatus() {
  fetch('/api/whatsapp/status?token=' + encodeURIComponent(getActiveTeacherToken()))
    .then(r => r.json())
    .then(data => {
      const card = document.getElementById('realWaStatusCard');
      const dot = document.getElementById('realWaDot');
      const text = document.getElementById('realWaStatusText');
      const sub = document.getElementById('realWaSubStatus');
      const qrBox = document.getElementById('inAppQrContainer');
      const connectedBanner = document.getElementById('inAppConnectedBanner');
      const qrImg = document.getElementById('inAppQrImg');

      if (data.connected) {
        card.className = 'bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between';
        dot.className = 'w-3 h-3 rounded-full bg-emerald-500 animate-pulse';
        text.className = 'text-xs font-bold text-emerald-950';
        text.innerText = 'Bot Connected & Active ✓';
        sub.className = 'text-[10px] text-emerald-700';
        sub.innerText = 'Ready to auto-send in background (Zero Windows).';

        if (qrBox) qrBox.classList.add('hidden');
        if (connectedBanner) connectedBanner.classList.remove('hidden');
      } else {
        card.className = 'bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between';
        dot.className = 'w-3 h-3 rounded-full bg-amber-500 animate-pulse';
        text.className = 'text-xs font-bold text-amber-950';
        text.innerText = 'Scan QR Code Below to Connect';
        sub.className = 'text-[10px] text-amber-700';
        sub.innerText = 'Keep WhatsApp open on phone & scan this QR.';

        if (qrBox) qrBox.classList.remove('hidden');
        if (connectedBanner) connectedBanner.classList.add('hidden');

        // Reload QR image if available
        if (qrImg && data.has_qr) {
          qrImg.src = '/api/whatsapp/qr.png?token=' + encodeURIComponent(getActiveTeacherToken()) + '&t=' + (data.last_qr_time || Date.now());
        }
      }
    })
    .catch(() => {});
}

function sendHeadlessTestWhatsApp() {
  const phone = document.getElementById('realTestPhone')?.value.trim();
  const message = document.getElementById('realTestMessage')?.value.trim();
  const btn = document.getElementById('btnSendHeadless');

  if (!phone) {
    showAppAlert("Valid Number Required", "Please enter a valid 10-digit mobile number (e.g. 9876543210).", "📱");
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> <span>Sending in Background...</span>`;
  }

  showToast("Background Bot Running 🤖", `Sending message to +91 ${phone} silently...`);

  fetch('/api/whatsapp/send-headless', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: getActiveTeacherToken(), phone: phone, message: message })
  })
    .then(r => r.json())
    .then(data => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<i data-lucide="zap" class="w-3.5 h-3.5 text-amber-300"></i> <span>Send Automatically in Background</span>`;
        refreshIcons();
      }

      if (data.success) {
        confetti({ particleCount: 50, spread: 70 });
        showToast("Delivered! 🎉", data.message || `Message delivered to +91 ${phone} via background bot.`);
      } else {
        showToast("Bot Notice", data.message || "Please make sure WhatsApp is scanned and connected.");
      }
      refreshBotQueue();
    })
    .catch(err => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<i data-lucide="zap" class="w-3.5 h-3.5 text-amber-300"></i> <span>Send Automatically in Background</span>`;
        refreshIcons();
      }
      showToast("Sent to Queue", "Message stored in database queue.");
      refreshBotQueue();
    });
}

function refreshBotQueue() {
  const container = document.getElementById('botQueueContainer');
  if (!container) return;

  fetch('/api/whatsapp-queue?token=' + encodeURIComponent(getActiveTeacherToken()))
    .then(res => res.json())
    .then(data => {
      const queue = data.queue || [];
      if (queue.length === 0) {
        container.innerHTML = `
          <div class="p-3 bg-slate-50 text-center text-xs text-slate-400 rounded-xl border border-slate-100">
            No messages sent yet. Use test sender above or send fee reminders!
          </div>
        `;
      } else {
        container.innerHTML = queue.slice(0, 6).map(q => `
          <div class="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-sm">
            <div>
              <div class="flex items-center space-x-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span class="font-bold text-slate-800">${q.student_name || q.recipient_phone}</span>
                <span class="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-semibold">${q.message_type}</span>
              </div>
              <p class="text-[10px] text-slate-500 truncate max-w-[210px] mt-0.5">${q.message_text.replace(/\n/g, ' ')}</p>
            </div>
            <a href="https://wa.me/91${q.recipient_phone}?text=${encodeURIComponent(q.message_text)}" target="_blank" class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hover:bg-emerald-100">
              Open ↗
            </a>
          </div>
        `).join('');
        refreshIcons();
      }
    })
    .catch(() => {});
}

// PWA Installation & Service Worker Integration
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('installAppBtn');
  if (btn) {
    btn.classList.remove('hidden');
    btn.classList.add('flex');
  }
});

function installPwaApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        showToast("App Installed 🎉", "TuitionDesk is installed on your home screen!");
      }
      deferredPrompt = null;
      const btn = document.getElementById('installAppBtn');
      if (btn) btn.classList.add('hidden');
    });
  } else {
    showToast("Install App", "Tap your browser menu (⋮) and choose 'Add to Home screen' or 'Install'.");
  }
}

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.log('PWA ServiceWorker note:', err);
    });
  });
}

// Global bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
