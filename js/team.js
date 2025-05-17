// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Team members data
  const teamData = [
    {
      name: "Emma Chen",
      position: "Founder & CEO",
      bio: "Emma founded Bubble Cosmetics with a vision to make makeup fun and accessible for everyone.",
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Emma",
    },
    {
      name: "Sarah Kim",
      position: "Head of Product Development",
      bio: "Sarah leads our innovative product development team, creating formulas that perform and delight.",
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Sarah",
    },
    {
      name: "Michael Johnson",
      position: "Marketing Director",
      bio: "Michael brings our brand to life through creative campaigns that capture our joyful spirit.",
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Michael",
    },
    {
      name: "David Rodriguez",
      position: "Operations Manager",
      bio: "David ensures our products are made sustainably and reach our customers efficiently.",
      image: "https://placehold.co/400x400/f0f9ff/569DAA?text=David",
    },
  ]

  // Render team members
  const teamContainer = document.getElementById("team-container")
  if (teamContainer) {
    renderTeam(teamData, teamContainer)
  }

  // Function to render team members
  function renderTeam(team, container) {
    team.forEach((member, index) => {
      const teamCard = document.createElement("div")
      teamCard.className = "team-card"
      teamCard.setAttribute("data-aos", "fade-up")

      if (index > 0) {
        teamCard.setAttribute("data-aos-delay", (index * 100).toString())
      }

      teamCard.innerHTML = `
        <div class="team-image">
          <img src="${member.image}" alt="${member.name}">
        </div>
        <h3>${member.name}</h3>
        <p class="team-position">${member.position}</p>
        <p class="team-bio">${member.bio}</p>
      `

      container.appendChild(teamCard)
    })
  }
})
