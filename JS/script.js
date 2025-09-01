const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalCardTitle");
const modalBody = document.getElementById("modalBody");

const aboutContent = document.getElementById("aboutModal");

// Modal data
const modalData = {
    aiCompanion: {
        title: "FCPC AI COMPANION",
        cards: [
            { 
            innerTitle: "Lumina AI Companion", 
            description: "Your personal AI companion for daily tasks, reminders, and casual conversations. Always ready to assist you.", 
            link: "https://develop.capabara.com/chat?tool=1756180759540x317665998832926700" 
        }
        ]
    },
    teaching: { 
        title: "TEACHING TOOLS", 
        cards: [
            { 
                innerTitle: "SyllaBuilder 1.2", 
                description: "A structured tool that creates a complete, college-level course syllabus based on user-provided details such as course title, code, credit units, academic term, and level. It automatically generates course outcomes, week.", 
                link: "https://develop.capabara.com/chat?tool=1750126865704x840822595310583800" 
            },
            {
                innerTitle: "THE VENCI APP",
                description: "An interactive training tool where students take on the role of a medical assistant in high-pressure OB-Gyne scenarios such as ER or OR cases.",
                link: "https://develop.capabara.com/chat?tool=1748325933267x786930565051056100" 
            },
            {
                innerTitle: "Assessment Test Generator",
                description: "A tool for generating multiple-choice questions based on Bloom's Taxonomy for teachers in First City Providential College.",
                link: "https://develop.capabara.com/chat?tool=1748506169948x121583353501057020"
            },
            {
                innerTitle: "Grade 12 Marketing Mix Assessment Tool",
                description: "An assessment tool designed to evaluate Grade 12 students' understanding of the 7 P's of Marketing in Entrepreneurship.",
                link: "https://develop.capabara.com/chat?tool=1750312592276x597154280324988900"
            },
            {
                innerTitle: "G12: Bionote Tutor",
                description: "An AI tutor that teaches Grade 12 students how to write a bionote.",
                link: "https://develop.capabara.com/chat?tool=1750311641784x545186087646265340"
            }
    ] },
    admin: { 
        title: "ADMINISTRATIVE", 
        cards: [
            { 
                innerTitle: "Guidance Counselling Assistant", 
                description: "A chatbot designed to provide customer support for guidance counselling sessions, focusing on students and parents seeking academic, emotional, and career guidance.", 
                link: "https://develop.capabara.com/chat?tool=1741669479200x376474368145358850" 
            },
            {
                innerTitle: "Personalised Schedule Assistant",
                description: "Assist teachers in creating personalised schedules based on their preferences and constraints.",
                link: "https://develop.capabara.com/chat?tool=1741673268939x590096956169388000"
            },
            {
                innerTitle: "Scholarship Tool",
                description: "This provides a scholarship guide to the students.",
                link: "https://develop.capabara.com/chat?tool=1741678030323x413772040946057200"
            },
            {
                innerTitle: "AI HR Policy Query Assistant (v2.0)",
                description: "Clarify your doubts regarding common company policies and procedures. Afraid of talking to HR? Simply ask any question you have in this safe space!",
                link: "https://develop.capabara.com/chat?tool=1722581740982x318852297400778750"
            },
            {
                innerTitle: "AI HR Interviewer",
                description: "Converse with an AI Interviewer to train and test your interview skills for a company and position of your choosing.",
                link: "https://develop.capabara.com/chat?tool=1716976389710x731076969836052500"
            }
        ] },
    learning: { 
        title: "LEARNING", 
        cards: [
            { 
                innerTitle: "Bartending Interview Role Play", 
                description: "A role play tool for third-year hospitality students to practice bartending interviews focusing on cocktails.", 
                link: "https://develop.capabara.com/chat?tool=1750312834154x900313038848262100" 
            },
            {
                innerTitle: "Psychiatric Nursing Tutor",
                description: "An interactive tool for 3rd Year Nursing students that teaches core mental health concepts, guides learning step by step, and assesses understanding through examples and quizzes.",
                link: "https://develop.capabara.com/chat?tool=1750313859989x117551743246532600"
            },
            {
                innerTitle: "Bulacan Heritage Explorer",
                description: "An interactive guide to the rich history, culture, and key institutions of Bulacan province. Perfect for students, teachers, and residents.",
                link: "https://develop.capabara.com/chat?tool=1755583296396x118478227389022200"
            },
            {
                innerTitle: "Therapeutic Diets Health Teaching Tutor",
                description: "I tutor for teaching therapeutic diets in a hospital setting to nursing students and healthcare professionals.",
                link: "https://develop.capabara.com/chat?tool=1750312657104x868739422631755800"
            },
            {
                innerTitle: "MATHinik ka",
                description: "An AI tool to help students remember math formulas using mnemonics and interactive problem-solving, with file/image upload capability",
                link: "https://develop.capabara.com/chat?tool=1750317697592x291893304277073900"
            }
        ] },
    research: { 
        title: "RESEARCH", 
        cards: [
            { 
                innerTitle: "Research Assistant Chatbot", 
                description: "A chatbot designed to assist graduate school researchers with personalised research support and guidance.", 
                link: "https://develop.capabara.com/chat?tool=1741737258584x623728482519613400" 
            },
            {
                innerTitle: "Peer Review Research Tool",
                description: "A peer review research tool is a digital platform or software designed to facilitate the evaluation of academic and scientific work by experts in the field based on standard peer review criteria",
                link: "https://develop.capabara.com/chat?tool=1741674782440x954696243196198900"
            },
            {
                innerTitle: "Curi, the Research Architect",
                description: "An AI assistant that guides Filipino students in transforming their initial ideas into a well-structured academic research proposal.",
                link: "https://develop.capabara.com/chat?tool=1756446914376x393970392848400400"
            },
            {
                innerTitle: "ExitLens: Year-on-Year Insight Toolkit",
                description: "Analyse and compare graduating student exit interview data across two years to assess trends and shifts in key themes at the program/college level.",
                link: "https://develop.capabara.com/chat?tool=1752638247252x444879100950609900"
            },
            {
                innerTitle: "ArguMentor",
                description: "Tool for generating comparative reports on customer satisfaction surveys for research teams.",
                link: "https://develop.capabara.com/chat?tool=1756448542715x783396366983888900"
            }
        ] },
    help: { title: "HELP", cards: [{ innerTitle: "TITLE HERE", description: "Description here", link: "0" }] }
};


function populateModal(type) {
    const data = modalData[type];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.cards.map(card => `
    <div class="modalCard">
        <div>
            <h3 class="modalCardHeadtxt">${card.innerTitle}</h3>
        </div>
        <div style="flex-grow:5">
            <p class="modalBodytxt">${card.description}</p>
        </div>
        <div>
            <a href="${card.link}" target="_blank" class="modalLink">
                <button class="lnchBttn">Launch</button>
            </a>
        </div>
    </div>
  `).join('');
}

function closeModal() {
    modal.style.display = "none";
    aboutContent.style.display = "none";
}


document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        closeModal();
    });
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", e => {
    if (e.target === modal) closeModal();
    if (e.target === aboutContent) closeModal();
});

document.querySelectorAll(".openModal").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        populateModal(type);
        modal.style.display = "flex";
    });
});

document.getElementById("modalopen").addEventListener("click", () => {
    aboutContent.style.display = "flex";
});