window.onload = () => {
    // Build nav
    const nav = document.createElement("nav");
    const nav2 = document.createElement("nav");

    // Build nav items
    const index = document.createElement("a");
    index.href = "../";
    index.textContent = "Noah's Webspace";

    const index2 = document.createElement("a");
    index2.href = "../";
    index2.textContent = "Noah's Webspace";

    const tables = document.createElement("a");
    tables.href = "./tables.html";
    tables.textContent = "Tables";

    const tables2 = document.createElement("a");
    tables2.href = "./tables.html";
    tables2.textContent = "Tables";
    
    const forms = document.createElement("a");
    forms.href = "./forms.html";
    forms.textContent = "Forms";

    const forms2 = document.createElement("a");
    forms2.href = "./forms.html";
    forms2.textContent = "Forms";

    const firstscripts = document.createElement("a");
    firstscripts.href = "./firstscripts.html";
    firstscripts.textContent = "First Scripts";

    const firstscripts2 = document.createElement("a");
    firstscripts2.href = "./firstscripts.html";
    firstscripts2.textContent = "First Scripts";

    const polygons = document.createElement("a");
    polygons.href = "./polygons.html";
    polygons.textContent = "Polygons";

    const polygons2 = document.createElement("a");
    polygons2.href = "./polygons.html";
    polygons2.textContent = "Polygons";

    const calculator_try = document.createElement("a");
    calculator_try.href = "./calculator_try.html";
    calculator_try.textContent = "Calculator";

    const calculator_try2 = document.createElement("a");
    calculator_try2.href = "./calculator_try.html";
    calculator_try2.textContent = "Calculator";

    const arrays = document.createElement("a");
    arrays.href = "./arrays.html";
    arrays.textContent = "Arrays";

    const arrays2 = document.createElement("a");
    arrays2.href = "./arrays.html";
    arrays2.textContent = "Arrays";

    const accessibility = document.createElement("a");
    accessibility.href = "./Yarborough-Activity_Accessibility.html";
    
    accessibility.textContent = "Accessibility";

    const accessibility2 = document.createElement("a");
    accessibility2.href = "./Yarborough-Activity_Accessibility.html";
    accessibility2.textContent = "Accessibility";

    const slideshow = document.createElement("a");
    slideshow.href = "./slideshow.html";
    slideshow.textContent = "Slideshow";

    const slideshow2 = document.createElement("a");
    slideshow2.href = "./slideshow.html";
    slideshow2.textContent = "Slideshow";

    const contract = document.createElement("a");
    contract.href = "./contract.html";
    contract.textContent = "Contract";

    const contract2 = document.createElement("a");
    contract2.href = "./contract.html";
    contract2.textContent = "Contract";

    const website_evaluations = document.createElement("a");
    website_evaluations.href = "./website_evaluations.html";
    website_evaluations.textContent = "Website Evaluations";

    const website_evaluations2 = document.createElement("a");
    website_evaluations2.href = "./website_evaluations.html";
    website_evaluations2.textContent = "Website Evaluations";

    const project = document.createElement("a");
    project.href = "./project_1.html";
    project.textContent = "Project 1"; 

    const project2 = document.createElement("a");
    project2.href = "./project_1.html";
    project2.textContent = "Project 1"; 

    const review1 = document.createElement("a");
    review1.href = "./review1.html";
    review1.textContent = "Review 1"; 

    const review12 = document.createElement("a");
    review12.href = "./review1.html";
    review12.textContent = "Review 1"; 

    const review2 = document.createElement("a");
    review2.href = "./review2.html";
    review2.textContent = "Review 2"; 

    const review22 = document.createElement("a");
    review22.href = "./review2.html";
    review22.textContent = "Revew 2"; 

    // Add nav items to nav
    nav.append(index);
    nav.append(tables);
    nav.append(forms);
    nav.append(firstscripts);
    nav.append(polygons);
    nav.append(calculator_try);
    nav.append(arrays);
    nav.append(accessibility);
    nav.append(slideshow);
    nav.append(contract);
    nav.append(website_evaluations);
    nav.append(project);
    nav.append(review1);
    nav.append(review2);

    nav2.append(index2);
    nav2.append(tables2);
    nav2.append(forms2);
    nav2.append(firstscripts2);
    nav2.append(polygons2);
    nav2.append(calculator_try2);
    nav2.append(arrays2);
    nav2.append(accessibility2);
    nav2.append(slideshow2);
    nav2.append(contract2);
    nav2.append(website_evaluations2);
    nav2.append(project2);
    nav2.append(review12);
    nav2.append(review22);

    let header = document.getElementById('header');
    let footer = document.getElementById('footer');
    // Add nav to header and footer
    header.append(nav);
    footer.prepend(nav2);
}
