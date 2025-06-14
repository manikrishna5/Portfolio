const ids = document.querySelectorAll(".posters .project-item");
const posterlinks = [
    "Graphicdesign/Posters/icegola.png",
    "Graphicdesign/stories/Dasara SDC.jpg",
    "Graphicdesign/Posters/backend.png",
    "Graphicdesign/Posters/flyer.png",
    "Graphicdesign/Posters/hashitout_poster_FwQR.png",
    "Graphicdesign/Posters/SDC .jpg",
    "Graphicdesign/Posters/skylit.png",
    "Graphicdesign/invitations/skylit.png",
    "Graphicdesign/invitations/Invitation.jpg",
    "Graphicdesign/stories/shivarathri.jpg",
    "Graphicdesign/stories/ramnavami.jpg",
    "Graphicdesign/stories/ugadi.jpg",
    "Graphicdesign/invitations/farewell invite.png"
]
ids.forEach((projectitem,index)=>{
    projectitem.addEventListener("click",()=>{
        window.open(posterlinks[index],"_blank");
    });
});
const postids = document.querySelectorAll(".instaposts .project-item");
const postlinks = [
    "Graphicdesign/instaposts/t20.jpg",
    "Graphicdesign/instaposts/kodefast2.jpg",
    "Graphicdesign/instaposts/Reg Open.jpg",
    "Graphicdesign/instaposts/Chandrasekhar.png",
    "Graphicdesign/instaposts/alephzero.jpg",
    "Graphicdesign/instaposts/kodefast.png",
    "Graphicdesign/instaposts/kodefast3.jpg",
    "Graphicdesign/instaposts/spark marketing.jpg",
    "Graphicdesign/instaposts/earth day.png",
    "Graphicdesign/instaposts/Eid-Al-Adha.png",
    "Graphicdesign/instaposts/OUR INCREDIBLE GUESTS.png",
    "Graphicdesign/instaposts/World Environment Day Instagram Post.jpg",
    "Graphicdesign/instaposts/mayday.jpg",
    "Graphicdesign/instaposts/spark.jpg",
    "Graphicdesign/instaposts/winners!.jpg",
    "Graphicdesign/instaposts/Mothers Day.jpg",
    "Graphicdesign/instaposts/Special Sponsor1.png",
    "Graphicdesign/instaposts/National service day.png",
    "Graphicdesign/instaposts/heat.png"
]
postids.forEach((postitem,index)=>{
    postitem.addEventListener("click",()=>{
        window.open(postlinks[index],"_blank");
    });
});
const cerids = document.querySelectorAll(".presentations .project-item");
const cerlinks = [
    "Graphicdesign/Certificates/Canva 500 Design Milestone Badge.jpg",
    "Graphicdesign/presentations_brochures/Roadmap python.png",
    "Graphicdesign/presentations_brochures/SDC_FoodBrochure2.pdf",
    "Graphicdesign/Certificates/hashitoutcer.png",
    "Graphicdesign/presentations_brochures/ux_plosion_ps.pdf",
    "Graphicdesign/Certificates/cer1.png",
    "Graphicdesign/Certificates/cer2.png",
    "Graphicdesign/presentations_brochures/Hash IT Out Sponsorship Brochure.pdf",
    "Graphicdesign/Certificates/cer3.png",
    "Graphicdesign/Certificates/demosdc.png"
]
cerids.forEach((ceritem,index)=>{
    ceritem.addEventListener("click",()=>{
        window.open(cerlinks[index],"_blank");
    });
});
const banids = document.querySelectorAll(".banners .project-item");
const banlinks = [
    "Graphicdesign/Banners/Horizon_IT_Magazine_Final-compressed.pdf",
    "Graphicdesign/Banners/PRESENTS (37.671 x 72 in).png",
    "https://www.figma.com/design/6IIa32OnavfD58yhh8K4W7/Mobile_Project_bolt?node-id=0-1&t=fM3SGFWMyat2AUBu-1",
    "https://www.figma.com/proto/3rHo4vbHAepNmwB6z0CkEJ/project_bolt?node-id=458-1271&t=JHw403yfvyqEakHW-1&scaling=scale-down&content-scaling=fixed&page-id=458%3A1269&starting-point-node-id=458%3A1271&show-proto-sidebar=1",
    "https://www.figma.com/proto/QBLPc8V0RWLNZd4nRMM1zj/Untitled?node-id=188-270&p=f&t=VMeYOKWrBYhv3X24-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=188%3A270",
    "https://www.figma.com/proto/maDDoq3d5q1fdD1iBeM0Cr/23311A12K2--C--Krishna-s-team-library?node-id=2329-72&p=f&t=n1kXvFtK4Kj47cPI-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    "https://www.figma.com/proto/v2KikZMO5Xbm1nQN01Be0N/Hash-it-out-IDCARDS?node-id=2317-63&p=f&t=yPgaUa6RK9MFj3Np-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
]
banids.forEach((ceritem,index)=>{
    ceritem.addEventListener("click",()=>{
        window.open(banlinks[index],"_blank");
    });
});

 const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

function filterProjects(filterValue) {
    projectCards.forEach(card => {
        if (card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}
function setActiveButton(activeButton) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const mlButton = document.querySelector('.filter-btn[data-filter="ml-ds"]');
    if (mlButton) {
        setActiveButton(mlButton);
        filterProjects('ml-ds');
    }
});
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        setActiveButton(button);
        const filterValue = button.getAttribute('data-filter');
        filterProjects(filterValue);
    });
});
