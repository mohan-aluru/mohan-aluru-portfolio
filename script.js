const menuBtn=document.getElementById("menuBtn");
const nav=document.querySelector(".nav");
menuBtn?.addEventListener("click",()=>{document.querySelector(".desktop-nav").classList.toggle("mobile-show")});
document.querySelectorAll(".desktop-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".desktop-nav").classList.remove("mobile-show")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("light");themeBtn.textContent=document.body.classList.contains("light")?"☾":"☼"});

const posts={
 dsa:{meta:"DSA · 06 MIN READ",title:"How I approach a new DSA problem",body:`<p>When I meet a new problem, I try not to code immediately. First I translate the statement into a smaller model and identify what the constraints are really asking for.</p><h4>My workflow</h4><ol><li>Write a simple brute-force idea.</li><li>Check the time and space complexity against the constraints.</li><li>Look for a pattern: hashing, two pointers, sliding window, stack, tree traversal, graph search, or dynamic programming.</li><li>Implement it cleanly in Java.</li><li>Test edge cases before calling it done.</li></ol><p>The goal is not just getting accepted — it is being able to recognize the same pattern in a different problem later.</p>`},
 spring:{meta:"SPRING BOOT · 07 MIN READ",title:"What happens inside a REST API?",body:`<p>A useful mental model is to think of a REST request as a small journey through layers rather than one giant method.</p><h4>The flow</h4><ol><li><b>Controller:</b> receives the HTTP request and validates the input.</li><li><b>Service:</b> contains the application logic.</li><li><b>Repository:</b> talks to the database through JPA/Hibernate.</li><li><b>Database:</b> stores or retrieves the data.</li><li>The response travels back through the same layers to the client.</li></ol><p>Keeping these responsibilities separate makes a Spring Boot application easier to test, maintain and extend.</p>`},
 microservices:{meta:"LEARNING · 05 MIN READ",title:"My first steps into microservices",body:`<p>I'm currently learning microservices, and the biggest shift for me is thinking beyond a single application boundary.</p><h4>What I'm exploring</h4><ul><li>How to split responsibilities into independently deployable services.</li><li>How services communicate through APIs and messaging.</li><li>Service discovery, configuration and observability.</li><li>Database boundaries and the trade-offs of distributed data.</li></ul><p>I'm treating this as an ongoing learning log — the interesting part is understanding when distribution solves a real problem and when it simply adds complexity.</p>`}
};
const modal=document.getElementById("modal"), title=document.getElementById("modalTitle"), meta=document.getElementById("modalMeta"), body=document.getElementById("modalBody");
document.querySelectorAll(".blog-card button").forEach(btn=>btn.addEventListener("click",()=>{const p=posts[btn.closest(".blog-card").dataset.post];meta.textContent=p.meta;title.textContent=p.title;body.innerHTML=p.body;modal.classList.add("open")}));
document.getElementById("closeModal").addEventListener("click",()=>modal.classList.remove("open"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open")});
