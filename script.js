function showContent(section, btn) {
  let buttons = document.querySelectorAll(".leftbar button");
  buttons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  let content = document.getElementById("contentarea");
  if (section === "Auth") {
    content.innerHTML = `
                  <h3>Author</h3>
                  <p>Odri Chakma</p>
                   <p> Department of Geography and Environmental Studies</p>
                  <p>University of Chittagong</p>
              `;
  }
  if (section === "Abst") {
    content.innerHTML = `
                  <h3>Abstract</h3>
                  <p>Khagrachhari District in the Chittagong Hill Tracts is increasingly exposed to compound climate hazards, including landslides, flash floods, and seasonal water scarcity. Existing adaptation approaches often overlook Indigenous Knowledge (IK) systems that have sustained local socio-ecological systems for generations. This study examines how Indigenous knowledge and socio-ecological adaptation pathways contribute to community resilience against interacting climate hazards. Using a socio-ecological systems framework, the study synthesizes secondary climate and hazard data, government reports, and peer-reviewed literature. Findings suggest that Indigenous adaptation practices, including community forest management and traditional resource-use systems, strengthen resilience by enhancing ecosystem services and reducing vulnerability. The study highlights the importance of integrating Indigenous knowledge into locally led climate adaptation and disaster risk reduction strategies in Bangladesh.</p>
              `;
  }
  if (section === "Key") {
    content.innerHTML = `
                  <h3>Keywords</h3>
                  <p>Indigenous Knowledge, Socio-Ecological Adaptation, Compound Hazards, Community Resilience, Climate Change, Khagrachhari</p>
              `;
  }
  if (section === "Intro") {
    content.innerHTML = `
                  <h3>Introduction</h3>
                  <p>The Chittagong Hill Tracts (CHT) are highly vulnerable to climate-induced hazards such as landslides, flash floods, and water scarcity. Indigenous communities have historically developed adaptive practices to cope with environmental changes. However, these practices remain underrepresented in climate adaptation planning. Understanding the role of Indigenous Knowledge is essential for strengthening resilience in vulnerable socio-ecological systems.</p>
              `;
  }
  if (section === "RQ") {
    content.innerHTML = `
                  <h3>Research Questions</h3>
                  <p>=>How do compound climate hazards affect communities in Khagrachhari?</p>
<p>=>What role does Indigenous Knowledge play in adaptation and resilience?</p>
              `;
  }
  if (section === "RO") {
    content.innerHTML = `
                  <h3>Research Objectives</h3>
                  <p>• Identify major compound hazards in Khagrachhari.</p>
<p>• Examine Indigenous adaptation practices.</P>
<p>• Assess their contribution to socio-ecological resilience.
</p>
              `;
  }
  if (section === "LR") {
    content.innerHTML = `
                  <h3>Literature Review</h3>
                  <p>• Berkes (2018): Indigenous knowledge strengthens ecosystem stewardship.</P>
<p>• IPCC (2023): Local adaptation improves climate resilience.</p>
<p>• Rahman et al. (2021): CHT communities face increasing climate vulnerability.</p>
<p>• Adger (2000): Social resilience is central to adaptation.</p>
<p>• Folke et al. (2016): Socio-ecological systems support adaptive capacity.</p>
              `;
  }
  if (section === "Meth") {
    content.innerHTML = `
                  <h3>Methodology</h3>
                  <p>This study adopts a socio-ecological systems (SES) framework. Secondary data were collected from NASA climate datasets, government reports, peer-reviewed literature, and disaster records. A qualitative synthesis approach was used to examine interactions among compound hazards, Indigenous adaptation practices, and community resilience.</p>
              `;
  }
  if (section === "DA") {
    content.innerHTML = `
                  <h3>Data Analysis</h3>
                  <p>Analysis indicates that landslides, flash floods, and water scarcity are major compound hazards in Khagrachhari. Indigenous practices such as Village Common Forest management and traditional resource governance contribute to ecosystem conservation and risk reduction. These locally developed adaptation strategies enhance community resilience and support sustainable livelihoods.</p>
              `;
  }
  if (section === "Sugg") {
    content.innerHTML = `
                  <h3>Suggestion</h3>
                  <p>• Incorporate Indigenous Knowledge into national adaptation planning.</p>
<p>• Strengthen community-based ecosystem management.</p>
<p>• Promote locally led adaptation initiatives.</p>
• Improve climate governance through Indigenous participation.</p>
              `;
  }
  if (section === "Con") {
    content.innerHTML = `
                  <h3>Conclusion</h3>
                  <p>Indigenous Knowledge provides valuable adaptation strategies for addressing compound climate hazards in Khagrachhari. Integrating socio-ecological adaptation approaches into climate policies can enhance community resilience and support sustainable environmental management. The study highlights the importance of culturally grounded and locally led climate adaptation in Bangladesh.</p>
              `;
  }
}
