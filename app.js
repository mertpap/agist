gsap.registerPlugin(ScrollTrigger);

// 1. Multi-Language Dictionary (TR / EN)
const i18n = {
    tr: {
        nav_ops: "Operasyonlar",
        nav_signal: "Sinyal",
        hero_sub: "// Pazar Hakimiyeti Mühendisliği",
        hero_t1: "Dikkat,",
        hero_t2: "Modern Çağın",
        hero_t3: "Tek Para Birimidir.",
        hero_desc: "Biz, bu birimi kontrol eden ve pazar hakimiyetinizi asimetrik algı mühendisliğiyle yeniden inşa eden bağımsız bir strateji eviyiz.",
        hero_scroll: "< INITIATE >",
        hero_defy: "Yerçekimini Reddet",
        mani_sub: "[ FELSEFE ]",
        mani_main: "Ağırlıklarından arın.<br>Sektörünün mutlak tekelini kur.",
        srv_sub: "_Operasyonel_Ağ",
        srv1_title: "Reklam Ajansı",
        srv1_sub: "Kültürel Fenomen İnşası",
        srv1_desc: "Sıradan bir ürünü, yıkıcı bir kültürel fenomene ve sinematik bir ikona dönüştüren hibrit stratejiler.",
        srv2_title: "Influencer Ajansı",
        srv2_sub: "Dijital Otorite Senkronizasyonu",
        srv2_desc: "Yapay metrikleri reddederek, pazara yön veren saf kanaat önderleriyle inşa edilen asimetrik büyüme ağları.",
        srv3_title: "Sosyal Medya Ajansı",
        srv3_sub: "Dinamik Algı Yönetimi",
        srv3_desc: "Tüketici davranış paternlerini kendi lehine işleyen ve kitle psikolojisini yöneten kusursuz akışlar.",
        srv4_title: "Tam Hizmet Ajansı",
        srv4_sub: "Uçtan Uca Pazar Hakimiyeti",
        srv4_desc: "Embriyo aşamasından küresel egemenliğe kadar pazarın tüm nöral ağlarını yöneten 360 derece stratejik otonomi.",
        core_title: "IKIGAI x KAIZEN",
        core_p1: "Kitleler fonksiyon satın almaz; vizyon, statü ve kimlik satın alır. Küresel pazar algısını, algoritmik bir hassasiyetle yeniden kurguluyoruz.",
        core_p2: "Nihai amacımız; markanızın çekirdek kimliğini (Ikigai) mutlak, sarsılmaz ve rekabet edilemez bir monopole dönüştürmektir.",
        core_kaizen: "Bize göre her hamle,",
        core_kaizen_2: "pazar hakimiyetinizi sarsılmaz kılan bir sistem güncellemesidir.",
        term_title: "/// BAĞLANTI PROTOKOLÜ",
        term_sub: "VERİ AKIŞINI BAŞLAT.",
        term_l1: "[ ŞİRKET / AĞ ADI ]",
        term_l2: "[ YETKİLİ / SİNYAL ]",
        term_l3: "[ HEDEF SEKTÖR / ZON ]",
        term_l4: "[ STRATEJİK ÇIKTI / GÖREV ]",
        term_btn: "[ SİNYALİ İLET ]",
        terminal_typing: "> BAĞLANTI KURULDU... DEEP SPACE SERVER AKTİF. PROTOKOL BEKLENİYOR..."
    },
    en: {
        nav_ops: "Operations",
        nav_signal: "Signal",
        hero_sub: "// Market Dominance Engineering",
        hero_t1: "Attention is",
        hero_t2: "The Ultimate",
        hero_t3: "Modern Currency.",
        hero_desc: "We are an independent strategy house that weaponizes attention to recode your market dominance through asymmetric perception engineering.",
        hero_scroll: "< INITIATE >",
        hero_defy: "Defy Gravity",
        mani_sub: "[ PHILOSOPHY ]",
        mani_main: "Shed your dead weight.<br>Establish an absolute industry monopoly.",
        srv_sub: "_Operational_Grid",
        srv1_title: "Advertising Agency",
        srv1_sub: "Cinematic Phenomenon",
        srv1_desc: "Hybrid strategies that elevate a mundane product into a cinematic cultural icon and a disruptive phenomenon.",
        srv2_title: "Influencer Agency",
        srv2_sub: "Authority Synchronization",
        srv2_desc: "Rejecting artificial metrics to build asymmetric, organic growth networks with genuine industry leaders.",
        srv3_title: "Social Media Agency",
        srv3_sub: "Dynamic Perception Mgmt",
        srv3_desc: "Mastering digital mass psychology to bend consumer behavior patterns entirely to your advantage.",
        srv4_title: "Full Service Agency",
        srv4_sub: "End-to-End Monopoly",
        srv4_desc: "360-degree strategic autonomy commanding the entire neural network of your market—from embryo to global dominance.",
        core_title: "IKIGAI x KAIZEN",
        core_p1: "The masses don't buy functions; they buy vision, status, and identity. We reconstruct global market perception with algorithmic precision.",
        core_p2: "Our ultimate objective is to transmute your brand's core identity (Ikigai) into an absolute, unshakeable, and completely unrivaled monopoly.",
        core_kaizen: "To us, every strategic move is",
        core_kaizen_2: "a vital system update cementing unwavering market dominance.",
        term_title: "/// CONNECTION PROTOCOL",
        term_sub: "INITIATE DATA STREAM.",
        term_l1: "[ COMPANY / NETWORK ]",
        term_l2: "[ EXECUTIVE / SIGNAL ]",
        term_l3: "[ TARGET SECTOR / ZONE ]",
        term_l4: "[ STRATEGIC OUTPUT / TASK ]",
        term_btn: "[ TRANSMIT SIGNAL ]",
        terminal_typing: "> SECURE CONNECTION ESTABLISHED... DEEP SPACE SERVER ACTIVE. AWAITING PROTOCOL..."
    }
};

let currentLang = 'tr';

const changeLanguage = (lang) => {
    if(currentLang === lang) return;
    
    gsap.to('#smooth-wrapper', { opacity: 0, duration: 0.3, onComplete: () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });
        
        document.documentElement.lang = lang;
        currentLang = lang;
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if(btn.getAttribute('data-lang') === lang) {
                btn.classList.add('text-accent', 'border-accent');
                btn.classList.remove('text-gray-600', 'border-transparent');
            } else {
                btn.classList.remove('text-accent', 'border-accent');
                btn.classList.add('text-gray-600', 'border-transparent');
            }
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
            gsap.to('#smooth-wrapper', { opacity: 1, duration: 0.5 });
        }, 50);
    }});
};

// 2. Lenis Smooth Scroll Setup
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000) });
gsap.ticker.lagSmoothing(0, 0);

// 3. Preloader (Space Type Reveal)
const runPreloader = () => {
    const textEl = document.getElementById('loader-text');
    
    gsap.to(textEl, { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" });

    setTimeout(() => {
        const tl = gsap.timeline();
        tl.to('#preloader', {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            onComplete: () => {
                document.getElementById('preloader').style.display = 'none';
                document.body.classList.remove('overflow-hidden');
                setTimeout(() => {
                    window.scrollTo(0, 0);
                    if(lenis) {
                        lenis.start();
                        lenis.scrollTo(0, {immediate: true});
                    }
                    ScrollTrigger.refresh();
                }, 50);
            }
        })
        .to('.nav-reveal', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.5")
        .to('.hero-title', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "expo.out"
        }, "-=1")
        .to('.hero-reveal', {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.8");
    }, 2000);
};

// 4. Cursor Follower (Electric Blue Logic)
const setupCursor = () => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    cursor.style.display = 'block';
    follower.style.display = 'flex';

    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let cursorX = mouseX, cursorY = mouseY;
    let followerX = mouseX, followerY = mouseY;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        gsap.set(cursor, { x: cursorX - 4, y: cursorY - 4 });
        gsap.set(follower, { x: followerX - 24, y: followerY - 24 });
    });

    // Magnetics and links
    const magnetics = document.querySelectorAll('.magnetic');
    magnetics.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const bound = this.getBoundingClientRect();
            const strength = this.dataset.strength || 20;
            const px = (e.clientX - bound.left) / bound.width;
            const py = (e.clientY - bound.top) / bound.height;
            gsap.to(this, { x: (px - 0.5) * strength, y: (py - 0.5) * strength, duration: 0.5, ease: "power2.out" });
            gsap.to(follower, { scale: 1.5, borderColor: '#00E5FF', backgroundColor: 'rgba(0,229,255,0.1)', duration: 0.3 });
        });
        el.addEventListener('mouseleave', function() {
            gsap.to(this, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
            gsap.to(follower, { scale: 1, borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'transparent', duration: 0.3 });
        });
    });
};

// 5. Scroll Animations (Text Fill & Parallax)
const setupScrollAnimations = () => {
    const strokeText = document.querySelector('.manifesto-stroke');
    if (strokeText) {
        gsap.to(strokeText, {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: "#manifesto",
                start: "top 70%",     
                end: "center 40%",   
                scrub: 1
            }
        });
    }

    gsap.to('.parallax-img', {
        scrollTrigger: { trigger: ".parallax-img", start: "top bottom", end: "bottom top", scrub: true },
        yPercent: 15, ease: "none"
    });
    
    // Top Scroll Progress Line
    gsap.to('#scroll-progress', {
        width: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1
        }
    });
    
    // Deep Space Aura Parallax
    gsap.to('#bg-glow', {
        y: 400, x: 100,
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true },
        ease: "none"
    });
};

// 6. Sticky Services Hover (Electric Blue Interactions)
const setupServicesHover = () => {
    const rows = document.querySelectorAll('.service-row');
    const imgs = document.querySelectorAll('.sticky-img');
    const follower = document.getElementById('cursor-follower');

    if (window.matchMedia("(pointer: coarse)").matches) return;
    if(imgs.length > 0) gsap.set(imgs[0], { opacity: 1, scale: 1 });

    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            const index = row.getAttribute('data-index');
            
            gsap.to(follower, { scale: 1.5, borderColor: 'transparent', backgroundColor: '#00E5FF', innerText: '+', color: '#050505', duration: 0.3 });

            imgs.forEach(img => {
                if(img.getAttribute('data-index') === index) {
                    gsap.to(img, { opacity: 1, scale: 1, filter: 'grayscale(0%)', duration: 0.8, ease: "expo.out" });
                } else {
                    gsap.to(img, { opacity: 0, scale: 1.05, filter: 'grayscale(100%) blur(4px)', duration: 0.8, ease: "expo.out" });
                }
            });
        });
        
        row.addEventListener('mouseleave', () => {
            gsap.to(follower, { scale: 1, borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'transparent', innerText: '', color: '#fff', duration: 0.3 });
        });
    });
};

// 7. Terminal Form (Cyberpunk Typing)
const setupTerminal = () => {
    const terminalOutput = document.getElementById('terminal-output');
    if(!terminalOutput) return;

    let textToType = i18n[currentLang].terminal_typing;
    let i = 0;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting && i === 0) {
                textToType = i18n[currentLang].terminal_typing; 
                typeWriter();
            }
        });
    }, { threshold: 0.5 });
    observer.observe(document.getElementById('terminal'));

    function typeWriter() {
        if (i < textToType.length) {
            terminalOutput.innerHTML = textToType.substring(0, i+1) + '<span class="cursor inline-block w-[6px] h-[1em] bg-accent ml-2 align-middle animate-pulse"></span>';
            i++;
            setTimeout(typeWriter, 20 + Math.random() * 40);
        }
    }

    const form = document.getElementById('command-form');
    const btn = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        btn.classList.add('glitch-anim');
        setTimeout(() => btn.classList.remove('glitch-anim'), 300);
        const inputs = form.querySelectorAll('input');
        const defaultText = btn.innerHTML;
        
        btn.innerHTML = `[ UPLOADING... ]`;
        
        setTimeout(() => {
            terminalOutput.innerHTML = "> SİNYAL ONAYLANDI. ŞİFRELEME AKTİF...<span class='cursor inline-block w-[6px] h-[1em] bg-accent ml-2 align-middle animate-pulse'></span>";
            inputs.forEach(input => input.value = '');
            btn.innerHTML = `[ TRANSMISSION SECURE ]`;
            setTimeout(() => {
                btn.innerHTML = defaultText;
                terminalOutput.innerHTML = "> SİSTEM BEKLEMEDE.<span class='cursor inline-block w-[6px] h-[1em] bg-accent ml-2 align-middle animate-pulse'></span>";
            }, 3000);
        }, 1500);
    });
};

// 8. Strict Initialization
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
    // Clear hash to prevent jump to bottom sections on refresh
    if(window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
    }
    
    window.scrollTo(0, 0);
    lenis.stop(); // Prevent scrolling during preloader
    if(lenis) lenis.scrollTo(0, {immediate: true});
    
    document.body.classList.add('overflow-hidden');
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            changeLanguage(e.target.getAttribute('data-lang'));
        });
    });

    setupCursor();
    runPreloader();
    setupScrollAnimations();
    setupServicesHover();
    setupTerminal();
});
