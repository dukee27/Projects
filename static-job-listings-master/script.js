let list = "";
fetch('data.json')

.then(response => response.json())
.then(data => {
    const container = document.querySelector(".job_listings");
    container.innerHTML = data.map(comp => `
        <div class = "card ${comp.featured} ?'border-left': '')">
            <img>
            <div class = "info">
                <div class = "company-row">
                    <h3 class="company">${comp.company}</h3>
                    ${comp.new ? '<span class = "tag1">NEW!</span>' : ''}
                    ${comp.featured ? '<span class = "tag2">FEATURED</span>' : ''}
                </div>
                
                <h3 class = "position">${comp.position}</h3>

                <div class = "meta">
                    <span class = "postedAt">${comp.postedAt}</span>
                    <span>&bull;</span>
                    <span class = "contract">${comp.contract}</span>
                    <span>&bull;</span>
                    <span class = "location">${comp.location}</span>
                </div>
            </div>
            <hr class = "line">
            <div class = "need">
                ${[comp.role,comp.level,...comp.languages,...comp.tools]
                .map(skill => `<span class = "skill">${skill}</span>`)
                .join("")}
            </div>
        </div>
        `).join("");
        }
    );
        
